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
      tableData: [
        {
          date: '1',
          name: '王',
          province: '上海',
          city: '普陀区',
          address: '金沙江路',
          zip: 20,
        },
      ],
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
      console.log(res)
    },
  },
}
</script>

<style scoped lang="less"></style>
