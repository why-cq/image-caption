<template>
    <div>
        <el-table
                :data="userList"
                stripe
                style="width: 100%"
                @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="100"/>
            <el-table-column type="index" width="100" label="序号"/>
            <el-table-column prop="name" width="100" label="用户名"/>
            <el-table-column prop="phone" width="100" label="电话"/>
            <el-table-column prop="sex" width="100" label="性别" />
            <el-table-column prop="id_number" width="100" label="身份证号码"/>
            <el-table-column prop="status" width="100" label="状态"/>

        </el-table>

    </div>


</template>

<script>
import {getUserList} from '@/api/login'


export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "UserLists",
    data() {
        return {
            userList: [{"name": "why", "phone": "1234556","sex":'男',"id_number":"12345","status":"1"},
                {"name": "why", "phone": "1234556","sex":'男',"id_number":"12345","status":"1"},
                {"name": "why", "phone": "1234556","sex":'男',"id_number":"12345","status":"1"},
                {"name": "why", "phone": "1234556","sex":'男',"id_number":"12345","status":"1"}]

        }
    },
    created() {
        // this.getUserList()
    },
    methods: {
        getUsers() {
            getUserList().then(
                resp => {
                    console.log(resp)
                    this.userList = resp.data
                }
            ).catch(error => {
                    console.log(error)
                })
        },
    }
}
</script>

<style scoped>

</style>
