<template>
<div>
  {{ cellData.value }}
</div>
</template>

<script>
  export default {
    name: "CellTemplate",
    props: {
      cellData: {
        default: () => {}
      },
    },
  }
</script>

<style scoped>

</style>
