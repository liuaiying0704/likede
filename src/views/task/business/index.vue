<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 搜索 -->
      <Search></Search>

      <!--  运营列表 -->
      <TaskList :tableData="tableData"></TaskList>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search'
import TaskList from '@/components/TaskList'
// api
import { taskSearch } from '@/api/task'
export default {
  data() {
    return {
      tableData: [],
    }
  },
  components: {
    Search,
    TaskList,
  },
  created() {
    this.taskSearch()
  },

  methods: {
    onSubmit() {
      console.log('submit!')
    },
    // 获取列表
    async taskSearch() {
      const res = await taskSearch()
      console.log(res.data)
      this.tableData = res.data.currentPageRecords
    },
  },
}
</script>

<style scoped lang="less"></style>
