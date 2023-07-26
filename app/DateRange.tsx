'use client';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DateRange } from 'react-date-range';
import { Dispatch, SetStateAction, useState } from 'react';
import { addDays } from 'date-fns';
import { useIsClient } from './IsClientContext';

export interface MyDateRange {
    start?: Date;
    end?: Date;
}

interface DateSelection {
    startDate?: Date;
    endDate?: Date;
    key?: string;
}

interface Props {
    dateRange: MyDateRange;
    setRange: Dispatch<SetStateAction<MyDateRange>>;
}

export default function Range({ dateRange, setRange }: Props) {
    const isClient = useIsClient();
    const direction = isClient && window.innerWidth <= 920 ? 'vertical' : 'horizontal';
    const [state, setState] = useState<Array<DateSelection>>([
        {
            startDate: dateRange.start,
            endDate: dateRange.end,
            key: 'selection',
        },
    ]);
    return (
        <DateRange
            months={2}
            direction={direction}
            showPreview={true}
            moveRangeOnFirstSelection={false}
            ranges={state}
            onChange={(item) => {
                setState([item.selection]);
                setRange({ start: item.selection.startDate, end: item.selection.endDate });
            }}
        />
    );
}
