<template>

    <div class="app-container">
        <el-form ref="form" :model="form" label-width="40px" class="register-form">
            <div >
                <h3 class="title">用户注册</h3>
            </div>
            <el-form-item label="账号">
                <el-input v-model="form.name" placeholder="请输入账号" maxlength="10" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input placeholder="请输入密码" v-model="form.password" ></el-input>
            </el-form-item>




            <el-form-item>
                <el-button type="primary" @click="onSubmit">注册</el-button>
                <el-button @click="onCancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
export default {
    name: "RegisterForm",
    data() {
        return {
            form: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$message('提交成功')
            // 注册的业务逻辑
        },
        onCancel() {
            this.$message({
                message: '取消注册',
                type: 'warning'
            })
            this.form = {}

        }
    }
}
</script>

<style scoped>

.app-container {
    text-align: center;
    .register-form{
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;
    }
}
</style>
