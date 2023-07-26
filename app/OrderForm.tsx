'use client';

import { useState } from 'react';
import Range, { MyDateRange } from './DateRange';
import IsClientCtxProvider from './IsClientContext';

export default function OrderForm() {
    const [range, setRange] = useState<MyDateRange>({
        start: new Date(),
        end: new Date(),
    });

    return (
        <IsClientCtxProvider>
            <Range dateRange={range} setRange={setRange} />
        </IsClientCtxProvider>
    );
}
