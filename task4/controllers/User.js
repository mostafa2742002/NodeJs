/*
 * This Controller includes the Admin Router Handlers and Business Logic
 * Here is the Admin Signup Controller
 * Here is the Admin Login Controller
 * Here is the Admin ChangePass Controller
*/

// Packages
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Varaibles
const key = "bPeShVmYq3t6w9z$C&F)J@NcRfTjWnZr4u7x!A%D*G-KaPdSgVkXp2s5v8y/B?E(H+MbQeThWmZq3t6w9z$C&F)J@NcRfUjXn2r5u7x!A%D*G-KaPdSgVkYp3s6v9y/B?E(H+MbQeThWmZq4t7w!z%C&F)J@NcRfUjXn2r5u8x/A?D(G-KaPdSgVkYp3s6v9y$B&E)H@MbQeThWmZq4t7w!z%C*F-JaNdRfUjXn2r5u8x/A?D(G+KbPeShVkYp3s6v9y$B&E)H@McQfTjWnZq4t7w!z%C*F-JaNdRgUkXp2s5u8x/A?D(G+KbPeShVmYq3t6w9y$B&E)H@McQfTjWnZr4u7x!A%C*F-JaNdRgUkXp2s5v8y/B?E(G+KbPeShVmYq3t6w9z$C&F)J@NcQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s5v8y/B?E(H+MbQeThWmYq3t6w9z$C&F)J@NcRfUjXn2r4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?E(H+"

// Models
const User = require('../models/User');

//  Utils
const sendResponse = require('../utils/sendResponse');

// Methods
const Signup = async (req, res) => {
    try {

        const { fullname, email, password, confirmPassword } = req.body;

        if (fullname.length < 6)
            return sendResponse(res, 400, "Fullname must be more than 6 chars");

        if (!email.match(/^\w+([-+.]\w+)*@((yahoo|gmail)\.com)$/))
            return sendResponse(res, 400, "Email must be gmail or yahoo");

        if (password.length < 6)
            return sendResponse(res, 400, "Password must be more than 6 chars");

        if (password !== confirmPassword) {
            return sendResponse(res, 400, "The two passwords are not matched");
        }

        // The User is found in the User Collection
        let founded = await User.findOne({ email: email });
        if (founded) {
            return sendResponse(res, 409, "Email is already found");
        }

        // The User is not found in the User Collection
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await new User(req.body).save();
        const token = jwt.sign({ _id: user._id }, key);
        const result = { token: token, user: user }
        return sendResponse(res, 201, "Account has been created Successfully", result);

    } catch (err) {
        console.log(err.message)
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }

}
const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return sendResponse(res, 400, 'All the fields are mandatory');
        }
        var user = await User.findOne({ email: email })
        if (!user) {
            return sendResponse(res, 401, 'The Email is not exist');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return sendResponse(res, 401, 'Password is wrong');
        }
        const token = jwt.sign({ _id: User._id }, key);
        const result = { token: token, User: User };
        if(user.accessLevel === "admin")
        return sendResponse(res, 200, 'Login as admin', result);
        else
        return sendResponse(res, 200, 'Login as user', result);
    } catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}
const DeleteUsers = async (req, res) => {
    try {
        const _id = req.body._id;
        await Review.findByIdAndDelete({ _id: _id });
        return sendResponse(res, 200, "The User is deleted successfully");

    } catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}
// const ChangePass = async (req, res) => {
//     try {
//         var { oldpassword, newpassword, confirmpassword } = req.body;

//         if (oldpassword.length < 6 || newpassword.length < 6 || confirmpassword.length < 6)
//             return sendResponse(res, 400, "All passwords must be at least 6 characters");

//         const user = await User.findById({ _id: req.user._id });

//         const result = await bcrypt.compare(oldpassword, user.password);

//         if (!result)
//             return sendResponse(res, 400, "The old password is wrong");


//         if (newpassword !== confirmpassword)
//             return sendResponse(res, 400, "The two passwords are not identical");

//         password = await bcrypt.hash(newpassword, 10);
//         await User.findByIdAndUpdate({ _id: user._id }, { password: password }, { new: true });

//         return sendResponse(res, 200, "Password has been updated successfully");

//     } catch (err) {
//         console.log(err.message)
//         return sendResponse(res, 500, err.message, 'Something went wrong');
//     }
// }

// Exports
module.exports = {
    Signup,
    Login,
    DeleteUsers,
}

