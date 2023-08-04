import React from 'react';
import { Button, Space, DatePicker, version } from 'antd';

const App = () => (
  <div style={{ padding: '0 24px' }}>
    <h1>antd version: {version}</h1>
    <Space>
      <Button onClick={()=>{console.log("antd integrated.")}} type="primary">Primary Button</Button>
    </Space>
    <button onClick={()=>{console.log("hello")}}>hello</button>
  </div>
);

export default App;
