<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름 ="현재 위치 컴포넌트"></TodoList> -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
  components: {
    //  컴포넌트 태그명 : 컴포넌트 내용
    // [리팩토링]:ES6 향상된 객체 리터럴 - 속성명 두개 같을 때 하나로 축약가능
    // 'TodoHeader' : TodoHeader,
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}

</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
