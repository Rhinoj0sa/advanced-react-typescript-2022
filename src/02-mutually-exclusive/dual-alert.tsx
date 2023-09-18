import type { FC } from "react";
import { useIntl } from "react-intl";

type Variant =
    | "danger"
    | "dark"
    | "info"
    | "light"
    | "primary"
    | "secondary"
    | "success"
    | "warning";

type Props = (
    | { message?: string; messageId?: never }
    | { message?: never; messageId?: string }
    ) & { variant?: Variant };

export const DualAlert: FC<Props> = ({
                                       message,
                                       messageId,
                                       variant = "primary",
                                     }) => {
  if (!message && !messageId) {
    throw new Error("Either message or messageId must be provided");
  }
  const { formatMessage } = useIntl();

  const actualMessage = message ?? formatMessage({ id: messageId });

  return (
      <div className={`alert alert-${variant}`} role="alert">
        {actualMessage}
      </div>
  );
};