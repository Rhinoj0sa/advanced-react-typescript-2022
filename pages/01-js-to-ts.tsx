import type { NextPage } from 'next';

import { Alert } from '../src/01-js-to-ts/alert';

const variants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light",
] as const;

const JsToTs: NextPage = () => {
    return (
        <div>
            <h2 className="my-4">Converting JavaScript to TypeScript</h2>
            {variants.map(variant => <Alert messageId={`Este es un la variante: ${variant}`} variant={variant} />)}
        </div>
    );
};

export default JsToTs;