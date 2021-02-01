import React from 'react';
import Tab from './Tab';

export default function TabsContainer() {
    return <>
        <div className="pt-4.5">
            <div className="flex justify-between">
                {
                    'all active completed'.split(' ').map(
                        (item, index) => <Tab key={`item${index}`} tabName={item} />
                    )
                }
            </div>
            <div
                className="h-0.5"
                style={{ background: '#BDBDBD' }} />
        </div>
    </>
};
