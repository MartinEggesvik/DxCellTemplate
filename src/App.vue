<template>
  <div id="app">
    <button @click="refreshGrid">Refresh</button><span> Clicked {{ clickCount }} times ~ {{(150+(clickCount*100))+"mb" }}</span>
    <div id="gridWindow">
      <DxDataGrid
        id="gridContainer"
        :row-alternation-enabled="true"
        :data-source="employees"
        :show-borders="true"
      >
        <DxPaging :enabled="false" />
        <DxColumn
          :width="200"
          :allow-sorting="false"
          data-field="Picture"
          cell-template="cellTemplate"
        />
        <DxColumn
          :width="100"
          data-field="Prefix"
          caption="Title"
          cell-template="cellTemplate"
        />
        <DxColumn
          :width="100"
          data-field="BirthDate"
          data-type="date"
        />
        <DxColumn
          :width="100"
          data-field="HireDate"
          data-type="date"
        />
        <template #cellTemplate="{ data }">
          <CellTemplate :cell-data="data"/>
        </template>
      </DxDataGrid>
    </div>
  </div>
</template>

<script>

import { DxDataGrid, DxColumn, DxPaging } from 'devextreme-vue/data-grid';
import service from './data.js';
import CellTemplate from "./CellTemplate";

export default {
  name: 'app',
  components: {
    CellTemplate,
    DxDataGrid,
    DxPaging,
    DxColumn
  },
  data() {
    return {
      employees: service.getEmployees(),
      clickCount: 0
    };
  },
  methods: {
    refreshGrid() {
      this.employees = [];
      this.employees = service.getEmployees();
      this.clickCount++;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

  #gridWindow {
    height: 500px;
    width: 500px;
  }
</style>
