<template>
  <div class="flex justify-between w-full h-16 bg-gray-300 p-3 rounded-lg">
    <div class="text-3xl">Navbar</div>
    <div>
      <button @click="increment">You clicked me {{ number }} times.</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    increment() {
      this.number++;
    },
    decrement() {
      this.number-1;
    }

  },
};

</script>