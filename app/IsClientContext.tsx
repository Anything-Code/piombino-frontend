'use client';

import { createContext, useEffect, useState, useContext, ReactNode } from 'react';

const IsClientCtx = createContext(false);

type Props = {
    children: ReactNode;
};

export default function IsClientCtxProvider({ children }: Props) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);
    return <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>;
}

export function useIsClient() {
    return useContext(IsClientCtx);
}
