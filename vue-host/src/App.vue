<script setup lang="jsx">
import Counter from "remoteApp/Counter";
import ColorPicker from "remoteApp/ColorPicker";
import { onMounted } from "vue"
import ReactDOM from 'react-dom/client'
import React from 'react'

onMounted(() => {
  ReactDOM.createRoot(document.getElementById('react_counter')).render(
    <Counter />
  )
  ReactDOM.createRoot(document.getElementById('react_colorpicker')).render(
    <ColorPicker />
  )

})

</script>

<template>
  <div>
    <h1>Vue host</h1>
    <div id="react_counter"></div>
    <div id="react_colorpicker"></div>
  </div>
</template>
