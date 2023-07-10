const validatePass = (event) => {
    event.preventDefault();
    var pass1 = document.forms[0];

    const userData = database.find((user) => user.password === pass1.value);
    if (userData.password !== pass1.value) {
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const lowercaseRegExp = /(?=.*?[a-z])/;
        const digitsRegExp = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp = /.{8,}/;
        const passwordLength = pass1.length;
        const uppercasePassword = uppercaseRegExp.test(pass1);
        const lowercasePassword = lowercaseRegExp.test(pass1);
        const digitsPassword = digitsRegExp.test(pass1);
        const specialCharPassword = specialCharRegExp.test(pass1);
        const minLengthPassword = minLengthRegExp.test(pass1);
        let errMsg = "";
        if (passwordLength === 0) {
            errMsg = "Password is empty";
        } else if (!uppercasePassword) {
            errMsg = "At least one Uppercase";
        } else if (!lowercasePassword) {
            errMsg = "At least one Lowercase";
        } else if (!digitsPassword) {
            errMsg = "At least one digit";
        } else if (!specialCharPassword) {
            errMsg = "At least one Special Characters";
        } else if (!minLengthPassword) {
            errMsg = "At least minumum 8 characters";
        } else {
            errMsg = "";
        }
        setErrorMessages(errMsg);
    } else {
        setErrorMessages(true);
    }
};