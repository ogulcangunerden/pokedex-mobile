export const getLoginErrorMessage = (error: any) => {
  let message = "An error occurred.";

  switch (error.code) {
    case "auth/invalid-email":
      message = "Invalid email address";
      break;
    case "auth/invalid-credential":
      message = "Invalid credentials";
      break;
    case "auth/user-not-found":
      message = "User not found";
      break;
    case "auth/wrong-password":
      message = "Incorrect password";
      break;
    case "auth/user-disabled":
      message = "User account disabled";
      break;
    default:
      break;
  }

  return message;
};

export const getRegisterErrorMessage = (error: any) => {
  let message = "An error occurred.";

  switch (error.code) {
    case "auth/email-already-in-use":
      message = "Email address already in use";
      break;
    case "auth/invalid-email":
      message = "Invalid email address";
      break;
    case "auth/weak-password":
      message = "Password is too weak";
      break;
    default:
      break;
  }

  return message;
};

export const getPasswordResetErrorMessage = (error: any) => {
  let message = "An error occurred.";

  switch (error.code) {
    case "auth/invalid-email":
      message = "Invalid email address";
      break;
    case "auth/user-not-found":
      message = "User not found";
    default:
      break;
  }

  return message;
};

export const getDeleteAccountErrorMessage = (error: any) => {
  let message = "An error occurred.";

  switch (error.code) {
    case "auth/requires-recent-login":
      message = "This is a sensitive operation. Please re-login to delete your account";
      break;
    default:
      break;
  }

  return message;
}