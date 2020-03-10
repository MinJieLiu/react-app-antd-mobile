import React from 'react';
import { WingBlank, List, Picker, WhiteSpace } from 'antd-mobile';
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import 'react-photo-view/dist/index.css';

const years = [
  {
    label: '2013',
    value: '2013',
  },
  {
    label: '2014',
    value: '2014',
  },
  {
    label: '2015',
    value: '2015',
  },
];

function App() {
  return (
    <WingBlank className="App">
      <h1>Hello CodeSandbox</h1>

      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker data={years}>
          <List.Item arrow="horizontal">Picker</List.Item>
        </Picker>
      </List>
      <PhotoProvider>
        <WhiteSpace size="lg" />
        <PhotoConsumer src="https://avatars3.githubusercontent.com/u/6167727?s=460&v=4">
          <img src="https://avatars3.githubusercontent.com/u/6167727?s=460&v=4" width="80px" height="80px" alt="" />
        </PhotoConsumer>
      </PhotoProvider>
    </WingBlank>
  );
}

export default App;
