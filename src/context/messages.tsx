import { Message } from '@/lib/validators/message';
import { ReactNode, createContext } from 'react';

export const MessagesContext = createContext<{
  messages: Message[];
  isMessageUploading: boolean;
  addMessage: (message: Message) => void;
  removeMessage: (Id: string) => void;
  updateMessage: (Id: string, updateFn: (prevText: string) => string) => void;
  setIsMessageUpdating: (isUpdating: boolean) => void;
}>({
  messages: [],
  isMessageUploading: false,
  addMessage: () => {},
  removeMessage: () => {},
  updateMessage: () => {},
  setIsMessageUpdating: () => {},
});

export function MessagesProvider({ children }: { children: ReactNode }) {
  return (
    <MessagesContext.Provider
      value={{
        messages: [],
        isMessageUploading: false,
        addMessage: () => {},
        removeMessage: () => {},
        updateMessage: () => {},
        setIsMessageUpdating: () => {},
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
