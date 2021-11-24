<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="firstname">
  <button @click="handleClick">click here</button>
  <div v-if="showModal">
    <Modal header="Sign up for the GIVEAWAY!!" theme="sale" @close="toggleModal">
      <!-- This Form Is A Slot -->
      <form action="#">
        <label for="name">First Name</label>
        <input type="text" id="name">
        <br/>
        <label for="email">Email Address</label>
        <input type="text" id="email">
        <br/>
        <button type="submit">Send</button>
      </form>
    </Modal>
  </div>

  <div v-if="showModal2">
    <Modal header="Sign up for the GIVEAWAY!!" theme="sale" @close="toggleModal2">

      <!-- This Table Is A Named Slot -->
      <template v-slot:tablo> 
        
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Samsung</td>
            <td>440$</td>
          </tr>
          <tr>
            <td>Iphone</td>
            <td>1500$</td>
          </tr>
      
      </template>

    </Modal>
  </div>

  <!-- First Modal Button -->
  <button @click="toggleModal">open modal</button>
  <!-- Second Modal Button -->
  <button @click="toggleModal2">open modal 2</button>

</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: 'App',
  components: { Modal },
  data(){
    return {
      title: "My First Vue App",
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    handleClick() {
      // Template Refs
      this.$refs.firstname.classList.add('active');
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
