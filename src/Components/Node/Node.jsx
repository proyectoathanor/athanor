import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NodeConfig from './NodeConfig';

export default function Node({ children }) {
    const [showConfig, setShowConfig] = useState(false);
    return (
        <motion.div
            style={{
                width: '100px',
                height: '100px',
                border: '5px solid rgb(207, 181, 107)',
                borderRadius: '50% 50% 50% 0%',
            }}
            onClick={() => setShowConfig(!showConfig)}
        >
            {showConfig && (
                <NodeConfig
                    showConfig={showConfig}
                    setShowConfig={setShowConfig}
                />
            )}
            {children}
        </motion.div>
    );
}
