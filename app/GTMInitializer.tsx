// app/GTMInitializer.tsx
'use client';

import { useEffect } from 'react';

function GTMInitializer() {
    useEffect(() => {
        const initGTM = () => {
            // Your GTM initialization code
            console.log('GTM script loaded');
            const gtmScript = document.createElement('script');
            gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-KC9GFRJ5';
            document.head.appendChild(gtmScript);

            return () => {
                document.head.removeChild(gtmScript);
            };
        };
        initGTM();
    }, []);

    return null;
}

export default GTMInitializer;
