<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale'}">
            <h2>{{ header }}</h2>
            <p>{{ text }}</p>

            <!-- This Is How Slots Are Used -->
            <slot></slot>

            <!-- This Is How Named Slots Are Used -->
            <table class="price__table">
                <slot name="tablo"></slot>
            </table>
        </div>
    </div>
</template>


<script>
export default {
    props: ['header', 'theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    },
    data() {
        return {
            text: "modal content"
        }
    }
}
</script>


<style scoped>
    .modal {
        width:400px;
        padding:20px;
        margin: 200px auto;
        background:white;
        border-radius:10px;
    }
    .backdrop {
        top:0;
        position:fixed;
        background:rgba(0, 0, 0, 0.5);
        width:100%;
        height:100%;
    }
    .modal.sale {
        background: crimson;
        color:white;
    }
    .modal.sale h2 {
        color: white;
    }
    .price__table{
      margin:0 auto;
    }
</style>