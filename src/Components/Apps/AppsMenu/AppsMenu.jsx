import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import AppIcon from './AppIcon';
import { MusicNote } from 'phosphor-react';

export default function AppsMenu() {
    const [expanded, setExpanded] = useState(false);
    const [iconSize, setIconSize] = useState(getIconSize());

    function getIconSize() {
        return window.innerWidth < 640 ? 25 : 50;
    }

    useEffect(() => {
        const handleResize = () => {
            setIconSize(getIconSize());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const iconColor = '#333';

    return (
        <motion.div
            className="AppsMenu"
            initial={false}
            animate={{
                width: expanded ? '100%' : '50px',
                height: expanded ? '100vh' : '50px',
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <div
                className="expanded"
                onClick={() => setExpanded(!expanded)}
            ></div>
            {expanded && (
                <AppIcon url={'/app-music'}>
                    <MusicNote
                        size={iconSize}
                        weight="duotone"
                        color={iconColor}
                    />
                </AppIcon>
            )}
        </motion.div>
    );
}
