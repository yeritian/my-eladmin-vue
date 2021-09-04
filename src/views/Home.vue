<template>
    
    <div>
   <h2>Hom11e</h2>
   <el-button @click.native.prevent="logout">logout</el-button>
        
    </div>
 
</template>

<script>
import { removeToken } from '@/utils/auth'
import * as Config from '@/settings'
    export default {
        name: "Dashboard",
        methods:{
            logout(){
                //请求后端接口删除该用户的token，同时前端Cookies也要删除该用户的token
               this.$request.delete('http://localhost:8000/auth/logout').then(res=>{ // eslint-disable-line no-unused-vars
                     removeToken(Config.TokenKey)
                     this.$router.replace('/')
                })
            }
        }
    }
</script>

<style scoped>

</style>
