import React, { createContext, useContext, useReducer } from "react";

import { mails } from "../data/inbox";

import { mailReducer } from "../reducer/mailReducer";

import {
  MailActionTypes,
  MailInitialInterface
} from "../reducer/mailReducer.types";
import { Mail } from "../types";

interface MailContextData extends MailInitialInterface {
  dispatch: React.Dispatch<MailActionTypes>;
}

interface MailProviderProps {
  children: React.ReactNode;
}
const MailContext = createContext<MailContextData | null>(null);

const useMail = () => {
  const context = useContext(MailContext);
  if (!context) {
    throw new Error("useMail should be used within MailProvider");
  }
  return context;
};

function getFilteredData(
  mailList: Mail[],
  { showStarred, showUnread }: { showStarred: boolean; showUnread: boolean }
): Mail[] {
  return mailList
    .filter(({ isStarred }) => (showStarred ? isStarred : true))
    .filter(({ unread }) => (showUnread ? unread : true));
}

const MailProvider: React.FC<MailProviderProps> = ({ children }) => {
  const [{ data, showStarred, showUnread, spam, trash }, dispatch] = useReducer(
    mailReducer,
    {
      data: mails,
      showStarred: false,
      showUnread: false,
      spam: [],
      trash: []
    }
  );

  const filteredData = getFilteredData(data, {
    showStarred: showStarred,
    showUnread: showUnread
  });

  return (
    <MailContext.Provider
      value={{
        data: filteredData,
        dispatch,
        spam,
        trash,
        showStarred,
        showUnread
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export { MailProvider, useMail };
