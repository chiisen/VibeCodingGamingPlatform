<template>
  <div class="category-tabs">
    <button 
      v-for="tab in tabs" 
      :key="tab.id"
      :class="{ active: modelValue === tab.id }"
      @click="$emit('update:modelValue', tab.id)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.category-tabs {
  display: flex;
  gap: 10px;
  padding: 20px;
  background-color: #1e1e1e;
  overflow-x: auto;
}

button {
  padding: 8px 20px;
  background-color: #333;
  border: 1px solid #444;
  border-radius: 20px;
  color: #ccc;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s;
}

button:hover {
  background-color: #444;
  color: #fff;
}

button.active {
  background-color: #ffd700;
  color: #000;
  border-color: #ffd700;
  font-weight: bold;
}
</style>
