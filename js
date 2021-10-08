if (username.value === '') {
        showError(username, "UserName is required");
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, "Email is required");
    } else if (!isValidEmail(email.value)) {
        showError(email, "Email is not Valid");
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, "Password 2 is required");
    } else {
        showSuccess(password2);
    }
    
return re.test(String(email).toLowerCase());
