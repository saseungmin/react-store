import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 부트스트랩
import "bootstrap/dist/css/bootstrap.css";
// 폰트어썸
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 앱이 오프라인에서 더 빠르게 작동하기 원한다면 unregister(); => register(); 로 변경
// 그러나 주의사항 참고
// https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
serviceWorker.unregister();
