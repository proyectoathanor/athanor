import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useEffect, useState } from 'react';
import AppsMenu from './Apps/AppsMenu/AppsMenu';

export default function Map({ children, u }) {
    const [minScale, setMinScale] = useState(1);
    const MAP_SIZE = 2000 * u;

    useEffect(() => {
        const scaleX = window.innerWidth / MAP_SIZE;
        const scaleY = window.innerHeight / MAP_SIZE;
        setMinScale(Math.min(scaleX, scaleY));
    }, [MAP_SIZE]);

    useEffect(() => {
        console.log(minScale);
    }, [minScale]);

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#333',
            }}
        >
            <TransformWrapper
                initialScale={1}
                minScale={minScale}
                maxScale={3}
                limitToBounds
                centerOnInit
                centerZoomedOut
                doubleClick={{ disabled: true }}
                pinch={{ disabled: false }}
                panning={{ disabled: false }}
                wheel={{ wheelDisabled: false }}
            >
                {() => (
                    <TransformComponent
                        wrapperStyle={{
                            width: '100vw',
                            height: '100vh',
                            overflow: 'hidden',
                        }}
                    >
                        <div
                            style={{
                                width: MAP_SIZE,
                                height: MAP_SIZE,
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {children}
                        </div>
                    </TransformComponent>
                )}
            </TransformWrapper>
            <AppsMenu />
        </div>
    );
}
