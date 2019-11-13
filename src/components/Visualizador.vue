<template>
  <div>
    <div class="row">
      <div class="col-12 my-auto"> <span>Contador: {{contador}}</span> </div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ contador: "getContador" })
  }
};
</script>
<style scoped>
.row {
  background-color: #191414;
}
span {
  color: aliceblue;
  font-size: 50px;
}
</style>