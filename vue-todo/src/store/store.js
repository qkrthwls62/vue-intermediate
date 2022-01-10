import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'


//.use = vue의 플러그인
Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) { 
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    getters,
    mutations
    // mutations: {
    //     addOneItem(state, todoItem) {
    //         const obj = {completed: false, item: todoItem};
    //         //localStorage.setItem();
    //         // JSON.stringify: 자바스크립트를 string으로 변환해주는 메서드
    //         localStorage.setItem(todoItem, JSON.stringify(obj));
    //         state.todoItems.push(obj);
    //     },
    //     removeOneItem(state, payload) {
    //         localStorage.removeItem(payload.todoItem.item);
    //   // 특정 index에서 1개 지우기
    //         state.todoItems.splice(payload.index, 1);
    //     },
    //     toggleOneItem(state, payload) {
    //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //         localStorage.removeItem(payload.todoItem.item);
    //         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    //   // 특정 index에서 1개 지우기
    //     },
    //     clearAllItems(state) {
    //         localStorage.clear();
    //         // clearall 눌럿을때 list 화면에 다 사라져 보이게 함
    //         state.todoItems = [];
    //     }

    // }
});