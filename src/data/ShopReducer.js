import { ActionTypes } from './Types';

// 액션은 데이터스토어의 리듀서에 의해 처리
// 리듀서 : 데이터 스토어의 현재 콘텐츠와 액션 객체를 가져와 변경 작업을 수행하는 함수
export const ShopReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      // 변경사항이 담긴 새 객체를 만들어 리턴
      return {
        ...storeData,
        // 새 객체
        [action.payload.dataType]: action.payload.data,
      };
    // 액션 타입이 인식되지 않으면 변경되지 않는 데이터 스토어 객체를 그대로 리턴
    default:
      return storeData || {};
  }
};
