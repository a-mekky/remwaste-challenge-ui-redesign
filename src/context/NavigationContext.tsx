import React, { createContext, useContext, type ReactNode } from 'react';
import { useNavigation } from '../hooks/useNavigation';
import { type NavigationContextType } from '../types';

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode; initialStep?: number }> = ({
    children,
    initialStep = 1
}) => {
    const navigation = useNavigation(initialStep);

    return (
        <NavigationContext.Provider value={navigation}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigationContext = () => {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigationContext must be used within a NavigationProvider');
    }
    return context;
};