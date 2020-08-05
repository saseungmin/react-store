import {ActionTypes} from "./Types";
import {data as phData} from "./placeholderData";

// 액션 생성자 : 데이터 스토어가 데이터를 변경하기 위해 처리하는 액션 객체 생성
export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD, // 필수
    // 액션 객체를 리턴하는데, 이는 데이터 스토어의 모든 액션에서 관례적으로 사용하기 위해 만든 프로퍼티
    payload: {
        dataType, // 데이터의 타입
        data: phData[dataType] // 데이터 스토어에 추가될 데이터를 제공하는 data 프로퍼티
    }
})