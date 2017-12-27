<template>
  <div>
    <h1 v-bind:title="msg">hi</h1>
    <p v-if="seen">现在你看到我了</p>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
    <ol>
      <li v-for="user in userlist">
        名字：{{user.username}} <br/>
        创建时间： {{user.createTime}}
      </li>
    </ol>
    <el-button @click="getUser">获取用户信息</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      seen: true,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      userlist: []
    }
  },
  http: {
    // root: '',
    headers: {
      // Authorization: '',
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    },
    emulateJSON: true,
    emulateHTTP: true
  },
  mounted: function () {
    // GET /someUrl
  },
  methods: {
    getUser () {
      this.$http.get('/user/test/lym').then(response => {
        console.log(response.data)
        this.userlist = response.data
      }, response => {
        console.log('error')
      })
    }
  }
}
</script>