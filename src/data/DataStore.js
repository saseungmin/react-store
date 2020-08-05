import { createStore } from 'redux';
import { ShopReducer } from './ShopReducer';

// 리듀서를 사용해 새 데이터 스토어를 생성
export const SportsStoreDataStore = createStore(ShopReducer);