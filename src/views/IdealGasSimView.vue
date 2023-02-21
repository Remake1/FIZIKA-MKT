<script setup>
  import setSimulation from "@/components/simulation";
  import {reactive} from "vue";

  const params = reactive({
    numParticles: 150,
    timestep: 0.04,
    velocity: 30,
    radius: 3,
    color: "#000"
  });
  function handleStart(){
    setSimulation(params.numParticles, params.timestep, params.velocity, params.radius, params.color);
  }

</script>

<template>
  <div class="simulation">
<!--      canvas -->
      <div class="canvasContent">
        <canvas width="400" height="300"></canvas>
      </div>
<!--      form -->
      <div class="params">
        <form @submit.prevent="handleStart">
<!--          Number of particles -->
          <label for="numParticles">Number of particles</label>
          <input v-model="params.numParticles" type="number" id="numParticles" name="numParticles" min="1" max="1000">
<!--          Это температура?-->
          <label for="timestep">Time</label>
          <input v-model="params.timestep" type="number" id="timestep" name="temp" step="0.01" min="0.01" max="0.1">

<!--          velocity (отскок?)-->
          <label for="velocity">Velocity</label>
          <input v-model="params.velocity" type="number" id="velocity" name="velocity" min="1" max="100">

<!--          radius-->
          <label for="radius">Radius</label>
          <input v-model="params.radius" type="number" id="radius" name="radius" min="1" max="15">

<!--          color-->
          <label for="color">Color</label>
          <input v-model="params.color" type="color" id="color" name="color">

          <button type="submit">Start/Reset</button>

<!--          <button type="reset">Reset</button>-->
        </form>
      </div>
  </div>
</template>

<style scoped>
.simulation{
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
}
canvas{
  border: 1px solid #000;
}
</style>