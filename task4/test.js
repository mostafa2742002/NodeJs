// const axios = require('axios');

// test the app's functionality
// 1- Create a new admin
// 2- Login as admin
// 3- Create a new user
// 4- Login as user
// 5- Add a new note
// 6- Update the note
// 7- Delete the note
// 8- Delete the user
// 9- Delete the admin


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 1- Create a new admin
// const data = {
//     fullname: 'sasasasa',
//     email: 'sasasasa1@gmail.com',
//     password: '123456789',
//     confirmPassword: '123456789',
//     accessLevel: 'admin'
// };

// axios.post('http://localhost:3000/user/signup', data)
//     .then(response => {
//     console.log(response.data);
//     })
//     .catch(error => {
//     console.log(error.response);
//     });

// the result :
// {
//     statusCode: 201,
//     message: 'Account has been created Successfully',
//     result: {
//         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGMzZmJmMTJkNmFmZGM4ZjE4M2FjYTkiLCJpYXQiOjE2OTA1NjU2MTd9.N57J2_u8lFPCzoORqOXRGkVkvQ7tM8vYyhem78ALTJ0',
//         user: {
//         fullname: 'sasasasa',
//         email: 'sasasasa1@gmail.com',
//         password: '$2a$10$c6ao9Y5s8aCmABLI2w4WEeqqmF0tnkT4gFd/VSTsnKTpExWBZB8YW',
//         accessLevel: 'admin',
//         _id: '64c3fbf12d6afdc8f183aca9',
//         createdAt: '2023-07-28T17:33:37.378Z',
//         updatedAt: '2023-07-28T17:33:37.378Z',
//         __v: 0
//     }
//     }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3- Create a new user
// const data3 = {
//     fullname: 'sasasasasasa',
//     email: 'temptemp1@gmail.com',
//     password: '123456789',
//     confirmPassword: '123456789',
//     accessLevel: 'user'
// };

// axios.post('http://localhost:3000/user/signup', data3)
//     .then(response => {
//     console.log(response.data);
//     }
//     )
//     .catch(error => {
//     console.log(error.response);
//     }
//     );

// // the result :
// {
//     statusCode: 201,
//     message: 'Account has been created Successfully',
//     result: {
//         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGMzZmM4NzAwYzNmMDc2NTdhZDE3MjgiLCJpYXQiOjE2OTA1NjU3Njd9.Yd9HdtD2FsT1wuaR2KWUSoeULBquMWXbAfrrzvVk0zY',
//         user: {
//         fullname: 'sasasasasasa',
//         email: 'temptemp1@gmail.com',
//         password: '$2a$10$zXAuBxIB.8oyHaI97bWpU.Rbdr/WxvqZlx1e2qc.BE.8KBIz9EA.q',
//         accessLevel: 'user',
//         _id: '64c3fc8700c3f07657ad1728',
//         createdAt: '2023-07-28T17:36:07.987Z',
//         updatedAt: '2023-07-28T17:36:07.987Z',
//         __v: 0
//         }
//     }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4- Login as user
// const data4 = {
//     email: 'temptemp1@gmail.com',
//     password: '123456789'
// };

// axios.post('http://localhost:3000/user/login', data4)
//     .then(response => {
//     console.log(response.data);
//     }
//     )
//     .catch(error => {
//     console.log(error.response);
//     }
//     );

// // the result :
// {
//     statusCode: 200,
//     message: 'Login as user',
//     result: {
//         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTA1NjcyNzJ9.WEBLkkLbUbuk-gILyh7WFKHHGMnnsTjj4jy3ETMybsA'
//     }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5- Add a new note
// const data5 = {
//     title: 'note1',
//     message: 'content1'
// };

// axios.post('http://localhost:3000/note/addNote', data5)
//     .then(response => {
//     console.log(response.data);
//     }
//     )   
//     .catch(error => {
//     console.log(error.response);
//     }
//     );
// the result :
// {
//     statusCode: 200,
//     message: 'Note is saved successfully',
//     result: {
//         title: 'note1',
//         message: 'content1',
//         _id: '64c40465a4732d2e464f6dae',
//         createdAt: '2023-07-28T18:09:41.617Z',
//         updatedAt: '2023-07-28T18:09:41.617Z',
//         __v: 0
//     }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6- Update the note
// const data6 = {
//     title: 'note1',
//     message: 'content12',
//     _id: '64c40465a4732d2e464f6dae'
// };

// axios.post('http://localhost:3000/note/updateNote', data6)
//     .then(response => { 
//     console.log(response.data);
//     }
//     )
//     .catch(error => {
//     console.log(error.response);
//     }
//     );

// the result :
// {
//     statusCode: 200,
//     message: 'The Note is updated successfully',
//     result: null
//   }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
