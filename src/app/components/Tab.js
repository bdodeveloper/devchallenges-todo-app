import React from 'react';
import { getContext } from '../TodoContext';

export default function Tab({ tabName = '' }) {
  const { tabSelected, setTabSelected } = getContext();
  return <>
    <div className="flex flex-col items-center mx-10 cursor-default" onClick={() => { setTabSelected(tabName) }}>
      <div className="mb-4 text-sm">
        {
          tabName[0].toUpperCase() + tabName.slice(1, tabName.length)
        }
      </div>
      <div
        className="h-1 w-22 rounded-t -mb-0.5"
        style={{
          background: tabSelected === tabName ? '#6DA6F2' : 'transparent'
        }}
      />
    </div>
  </>
}