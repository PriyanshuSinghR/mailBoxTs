import { Mail } from "../types";

export interface MailInitialInterface {
  data: Mail[];
  showStarred: boolean;
  showUnread: boolean;
  spam: Mail[];
  trash: Mail[];
}

interface StarMailAction {
  type: "STAR_MAIL";
  payload: string;
}

interface DeleteMailAction {
  type: "DELETE_MAIL";
  payload: Mail;
}

interface DeleteForeverAction {
  type: "DELETE_FOREVER";
  payload: Mail;
}

interface UnreadMailAction {
  type: "UNREAD_MAIL";
  payload: string;
}

interface MarkAsReadAction {
  type: "MARK_AS_READ";
  payload: string;
}

interface AddToSpamAction {
  type: "ADD_TO_SPAM";
  payload: Mail;
}

interface RemoveFromSpamAction {
  type: "REMOVE_FROM_SPAM";
  payload: Mail;
}

interface ToggleUnreadAction {
  type: "TOGGLE_UNREAD";
}

interface ToggleStarredAction {
  type: "TOGGLE_STARRED";
}

export type MailActionTypes =
  | StarMailAction
  | DeleteMailAction
  | DeleteForeverAction
  | UnreadMailAction
  | MarkAsReadAction
  | AddToSpamAction
  | RemoveFromSpamAction
  | ToggleUnreadAction
  | ToggleStarredAction;
