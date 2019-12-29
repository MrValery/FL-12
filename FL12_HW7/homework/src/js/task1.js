let userLogin = {
    email: 'user@gmail.com',
    password: 'UserPass'
}
                    
let adminLogin = {
email: 'admin@gmail.com',
password: 'AdminPass'
}                    

let getEmail = prompt('Please enter your email');
getEmail = getEmail.toLowerCase();
getEmail = getEmail.trim();
if (!getEmail) {
    alert('Cancelled');
} else if (getEmail.length < 5) {
     alert('I don’t know any emails having name length less than 5 symbols');
} else if (getEmail === userLogin.email || getEmail === adminLogin.email) {
    let getPassword = prompt('Please enter your password');
    if (!getPassword) {
        alert('Cancelled');
    } else if (getEmail === userLogin.email && getPassword === userLogin.password || 
                getEmail === adminLogin.email && getPassword === adminLogin.password) {
        alert('You have successfully logged in.');
        let confirmPasswordChange = window.confirm('Do you want to change your password?'); 
        if (!confirmPasswordChange) {
            alert('You have failed the change.')
        } else { 
            if (getEmail === userLogin.email) {
                let getOldPassword = prompt('Please enter the OLD password');
                if (getOldPassword !== userLogin.password) {
                    alert('You wrote the wrong password.');
                } else {
                    let getNewPassword = prompt('Please enter the NEW password');
                    if (!getNewPassword) {
                        alert('Canceled.');
                    } else if (getNewPassword.length < 6) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        let repeatNewPassword = prompt('Please enter the NEW password AGAIN.');
                        if (repeatNewPassword === getNewPassword) {
                            userLogin.password = getNewPassword;
                            alert('Password changed successfully')
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                }
            } else {
                    let getOldPassword = prompt('Please enter the OLD password');
                    if (getOldPassword !== adminLogin.password) {
                        alert('You wrote the wrong password.');
                    } else {
                        let getNewPassword = prompt('Please enter the NEW password');
                        if (!getNewPassword) {
                            alert('Canceled.');
                        } else if (getNewPassword.length < 6) {
                            alert('It’s too short password. Sorry.');
                        } else {
                            let repeatNewPassword = prompt('Please enter the NEW password AGAIN.');
                            if (repeatNewPassword === getNewPassword) {
                                adminLogin.password = getNewPassword;
                                alert('Password changed successfully')
                            } else {
                                alert('You wrote the wrong password.');
                            }
                        }
                    }
                }
        } 
    }
} else {
    alert('I don’t know you');
}

