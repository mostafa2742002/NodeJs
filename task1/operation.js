function op(a , b , c)
{
    if(c == '+')
        return a + b;
    else if(c == '-')
        return a - b;
    else if(c == '*')
        return a * b;
    else if(c == '/')
        return a / b;
    else if (c == '%')
        return a % b;
    else
        return 'Invalid';
}
// export the function
module.exports = { op };




