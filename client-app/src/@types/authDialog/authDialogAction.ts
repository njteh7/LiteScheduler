type OPEN_AUTH_DIALOG = "OPEN_AUTH_DIALOG";
type CLOSE_AUTH_DIALOG = "CLOSE_AUTH_DIALOG";
type GO_TO_REGISTER_PAGE = "GO_TO_REGISTER_PAGE";
type GO_TO_LOGIN_PAGE = "GO_TO_LOGIN_PAGE";

export type AuthDialogAction =
  | { type: OPEN_AUTH_DIALOG }
  | { type: CLOSE_AUTH_DIALOG }
  | { type: GO_TO_REGISTER_PAGE }
  | { type: GO_TO_LOGIN_PAGE };
