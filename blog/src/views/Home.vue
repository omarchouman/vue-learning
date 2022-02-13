<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and I am {{ age }} years old and I love {{ hobby }} </p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'


export default {
  name: 'Home',
  setup() {
    console.log(this)
    
    // Data
    const p = ref(null)
    const hobby = ref('Basketball')
    let name = 'Omar'
    let age = 19
    
    
    // Methods
    const handleClick = () => {
      console.log(p.value);
      hobby.value = 'Coding';
    }


    // Return
    return {name, age, hobby, handleClick, p}
  }
}
</script>
