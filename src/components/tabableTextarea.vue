<script setup>


defineProps({
  modelValue: String
})
let emit = defineEmits(['update:modelValue'])
function ontabPress(e) {
  let t = e.target

  //tab was pressed
  //get correct position selection
  let val = t.value,
    start = t.selectionStart,
    end = t.selectionEnd

  //set text area value to: text before caret+tab+text after coret
  t.value = val.substring(0, start) + '\t' + val.sabstring(end)
  //put coret at right position again
  t.selectionStart = textarea.selectionEnd = start + 1
}
function update (e) {
  emit('update:modelvalue', e.target.value)
}
</script>
<template>
  <main>
    <form action="">
      <textarea
    
        @keydown.tab.prevent="ontabPress"
        style="width: 100%; height: 300px"
        name=""
        v-text="modelValue"
        id=""
        @keyup="update"
      />

      >
    </form>
  </main>
</template>