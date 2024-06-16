interface LoginAction {
  type: "LOGIN";
  user: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (currUser: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "";
    default:
      return currUser;
  }
};

export default authReducer;
