<template>
<el-table @cell-click="handleCellClick">
  <el-table-column prop="name" label="Name" cell-class-name="cellClassName">
    <div v-if="isCurrentCell(scope.row, scope.column)">
      {{scope.row.name}}

      <i class="el-icon-edit-outline"></i>
    </div>
  </el-table-column>

</el-table>
</template>

<script>
// 引入 Element UI
import {
  ElTable,
  ElTableColumn,
  ElInput
} from 'element-ui';

// 数据源
const tableData = [{
    name: 'John',
    age: 20,
    address: 'No.1 Street'
  },
  {
    name: 'Jim',
    age: 22,
    address: 'No.2 Street'
  },
  {
    name: 'Joe',
    age: 25,
    address: 'No.3 Street'
  }
];

// 是否选中map
const selectedMap = {};

// Vue组件
export default {
  components: {
    ElTable,
    ElTableColumn,
    ElInput
  },
  data() {
    return {
      tableData,
      selectedMap,
      highlightedCells: [],
      currentCell: null
    }
  },
  methods: {
    handleCellClick(row, column) {
      this.currentCell = {
        row,
        column
      };
      if (event.ctrlKey) {
        const cell = this.highlightedCells.find(c => c.row === row && c.column === column);
        this.highlightedCells.push({
          row,
          column
        });
        if (cell) {
          cell.selected = !cell.selected;
        } else {
          // 新增时默认选中
          this.highlightedCells.push({
            row,
            column,
            selected: true
          });
        }
      } else if (event.shiftKey) {
        // 根据 currentCell 和本次点击单元格计算范围
        let range = this.getRange(this.currentCell, {
          row,
          column
        });

        // 添加到高亮数组中  
        this.highlightedCells.push(...range);
      } else {
        this.highlightedCells = [{
          row,
          column
        }];
      }
    },
    // 计算高亮范围的工具函数
    getRange(start, end) {

      let cells = [];

      // 计算起始和结束行号
      let startRow = Math.min(start.row, end.row);
      let endRow = Math.max(start.row, end.row);

      // 计算起始和结束列号
      let startCol = Math.min(start.column, end.column);
      let endCol = Math.max(start.column, end.column);

      // 遍历行和列,填充单元格
      for (let r = startRow; r <= endRow; r++) {
        for (let c = startCol; c <= endCol; c++) {
          cells.push({
            row: r,
            column: c
          });
        }
      }

      return cells;

    },
    cellClassName({
      row,
      column
    }) {
      if (this.currentCell.row === row && this.currentCell.column === column) {
        return 'current-cell';
      }
      if (this.clickedCell.row === row && this.clickedCell.column === column) {
        return 'highlighted-cell';
      }
    }
  }
}
</script>

<style lang="less">
.highlighted-cell {
  background: blue;
  color: #fff;
}

.current-cell {
  background: red;
  color: #fff;
}
</style>
