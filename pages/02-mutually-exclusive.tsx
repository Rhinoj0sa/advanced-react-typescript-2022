import type { NextPage } from 'next';

import { DualAlert } from '../src/02-mutually-exclusive/dual-alert';

const MutuallyExclusive: NextPage = () => {
    return (
        <div>
            <h2 className="my-4">Mutually exclusive props</h2>

            <DualAlert
                message="if we use both message and messageId, error happens it is one or the other"
                variant='danger'
            />
            <DualAlert
                messageId="just message id"
                variant='dark'
            />
            <DualAlert
                message="just message"
                variant='info'
            />
            <DualAlert

                messageId="1"
            />
        </div>
    );
};

export default MutuallyExclusive;
