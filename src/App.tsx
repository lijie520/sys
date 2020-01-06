import React from 'react';
import './App.less';
import { Button } from 'antd';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Button</Button>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
         <a href='./markerdown.md'/>
      </header>
    </div>
  );
};

export default App;
