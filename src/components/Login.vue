<template>
  <div id="login">
    <h1>欢迎来到登录页面</h1>
    <form @submit.prevent="handleSubmit">
      <input type='text' placeholder="请输入用户名" v-model="username"/><br/><br/>
      <input type='password' placeholder="请输入密码" v-model="password"/><br/><br/>
      <!-- <button>注册</button> -->
      <button type="submit">登陆</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      console.log(this.username, this.password)
      const username = this.username
      const password = this.password
      this.axios.post('/login',
        {username: username, password: password},
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.data.code === 0) {
            this.$router.replace({path: '/one'})
          } else {
            this.$message.error(response.data.msg)
          }
        }, response => {
          console.log('error')
        })
    }
  }
}
</script>