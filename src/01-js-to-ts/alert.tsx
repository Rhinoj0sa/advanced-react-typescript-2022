import { FC } from "react";
import { useIntl } from "react-intl";

interface AlertProps {
  messageId: string;
  variant:
      | "primary"
      | "secondary"
      | "success"
      | "danger"
      | "warning"
      | "info"
      | "light"
      | "dark";
}
// define the props and their types and define the return type as ReactElement
export const Alert: FC<AlertProps> = ({ messageId, variant }) => {
  const { formatMessage } = useIntl();

  if (!messageId) {
    throw new Error("The messageId prop is required");
  }
  return (
      <div className={`alert alert-${variant}`} role="alert">
        {formatMessage({ id: messageId })}
      </div>
  );
};