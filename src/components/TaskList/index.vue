<template>
  <div class="result">
    <div class="operation">
      <el-button
        type="primary"
        icon="el-icon-search"
        class="newCreate"
        @click="dialogVisible = true"
        >新建</el-button
      >
      <!-- 弹框 S-->
      <el-dialog
        title="新增工单"
        :visible.sync="dialogVisible"
        :before-close="handleClose"
        style="width:630px height:484px"
        class="dialogVisible"
      >
        <el-form label-width="100px">
          <el-form-item
            label="设备编号"
            :rules="{
              required: true,

              trigger: 'blur',
            }"
          >
            <el-input
              type="text"
              placeholder="请输入内容"
              v-model="Form.deviceNum"
              maxlength="10"
              show-word-limit
            ></el-input
          ></el-form-item>

          <el-form-item
            label="工单类型"
            :rules="{
              required: true,

              trigger: 'blur',
            }"
          >
            <el-select v-model="Form.type" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="补货数量">
            <el-button style="color: #5f84ff" icon="el-icon-edit-outline"
              >补货清单</el-button
            >
          </el-form-item>
          <el-form-item
            label="运营人员"
            :rules="{
              required: true,

              trigger: 'blur',
            }"
          >
            <el-select v-model="Form.people" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            label="备注"
            prop="desc"
            :rules="{
              required: true,

              trigger: 'blur',
            }"
          >
            <el-input
              type="textarea"
              placeholder="请输入备注（不超过40字）"
              v-model="Form.desc"
              maxlength="30"
              show-word-limit
            >
            </el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button
            @click="dialogVisible = false"
            style="background: #fbf4f0; color: black"
            >取 消</el-button
          >
          <el-button
            style="
              color: white;
              background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
            "
            @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <!-- 弹框 E-->
      <el-button
        style="background: #fbf4f0; color: black; font-weight: 400"
        @click="taskMake = true"
        >工单配置</el-button
      >
      <!-- 弹框 S-->
      <el-dialog
        title="工单配置"
        :visible.sync="taskMake"
        :before-close="taskMakeFn"
        style="width:630px height:484px"
        class="dialogVisible"
      >
        <el-form label-width="100px">
          <el-form-item
            label="补货警戒线"
            :rules="{
              required: true,

              trigger: 'blur',
            }"
          >
            <el-input
              type="text"
              placeholder="请输入内容"
              v-model="taskMake.cordon"
            >
              <template slot="append"></template>
              <template slot="append"></template> </el-input
          ></el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="taskMake = false">取 消</el-button>
          <el-button type="primary" @click="taskMake = false">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 弹框 E-->
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed type="index" label="序号"> </el-table-column>
        <el-table-column prop="taskCode" label="工单编号"> </el-table-column>
        <el-table-column prop="innerCode" label="设备编号"> </el-table-column>
        <el-table-column prop="taskType.typeName" label="工单类型">
        </el-table-column>
        <el-table-column prop="createType" label="工单方式"> </el-table-column>
        <el-table-column
          prop="taskStatusTypeEntity.statusName"
          label="工单状态"
        >
        </el-table-column>
        <el-table-column prop="userName" label="运营人员"> </el-table-column>
        <el-table-column prop="createTime" label="创建日期"> </el-table-column>
        <el-table-column prop="查看详情" label="操作"> </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-row type="flex">
        <el-col>
          <div>
            共
            <span> 90</span>

            条记录 第<span>1/95</span>页
          </div></el-col
        >

        <el-col :span="5">
          <el-button type="primary">上一页</el-button>
          <el-button type="primary">下一页</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tableData'],
  data() {
    return {
      dialogVisible: false,
      taskMake: false,

      // 表单
      Form: {
        deviceNum: '',
        type: '',
        people: '',
        desc: '',
        list: '',
      },
      taskMake: { cordon: '' },
    }
  },

  created() {},
  computed: {},
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    taskMakeFn() {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
  },
}
</script>

<style scoped lang="less">
.app-container .result {
  padding: 20px 15px 19px 17px;
  background-color: #fff;
  .operation {
    margin-bottom: 20px;
    .el-button {
      width: 80px !important;
      height: 36px;
      padding: 0;
      border: none;
    }
    .newCreate {
      background: linear-gradient(135deg, #f9b37a, #ff5e20) !important;
      margin-right: 10px;
    }
  }
}
.pagination-container {
  background: #fff;
  padding: 32px 16px;
}
.dialogVisible {
  :deep(.el-dialog) {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 630px;
    height: 484px;
  }
  .el-dialog .el-dialog__body .el-form-item .el-form-item__content {
    width: 396px;
  }
}
</style>
