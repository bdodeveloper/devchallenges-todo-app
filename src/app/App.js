import React from 'react';
import { render } from 'react-dom';
import Title from './components/Title';
import TabsContainer from './components/TabsContainer';
import TodoInput from './components/TodoInput';
import TodoProvider from './TodoContext';
import TodoContainer from './components/TodoContainer';
import '../style.css';

function App() {
  return <>
    <TodoProvider>
      <div className="flex flex-col items-center justify-between h-screen">
        <div style={{ width: '608px' }}>
          <Title />
          <TabsContainer />
          <TodoInput />
          <TodoContainer />
        </div>
        <a
          target="blank"
          href="https://devchallenges.io/portfolio/bdocoder"
          style={{
            fontFamily: 'Montserrat',
            color: '#A9A9A9'
          }}
          className="font-normal text-sm leading-17px my-5"
        >
          Abdullah Ahmad (bdocoder) @ DevChallenges.io
        </a>
      </div>
    </TodoProvider>
  </>
}

render(<App />, document.querySelector("#app"));
