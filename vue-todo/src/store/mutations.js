const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem};
    //localStorage.setItem();
    // JSON.stringify: 자바스크립트를 string으로 변환해주는 메서드
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
// 특정 index에서 1개 지우기
    state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
// 특정 index에서 1개 지우기
}

const clearAllItems = (state) => {
    localStorage.clear();
    // clearall 눌럿을때 list 화면에 다 사라져 보이게 함
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }