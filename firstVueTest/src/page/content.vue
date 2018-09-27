<!--//准备些cnodejs的内容页面-->
<template>
  <div>
    <myHeader></myHeader>
  <div class="conts">

    <h2 v-text="dat.title"></h2>
    <p class="authorinfo">作者：{{dat.author.loginname}}　　发表于：{{$utils.goodTime(dat.create_at)}}</p>
    <hr>
    <article class="contanier" v-html="dat.content"></article>
    <h3 class="comment">评论列表</h3>
    <hr>
    <ul>
      <li class="contlist" v-for="i in dat.replies">
        <p class="personinfo">评论者：{{i.author.loginname}}　　<span class="commentDate">评论于：{{$utils.goodTime(i.create_at)}}</span></p>
        <article class="commentInfo" v-html="i.content"></article>
      </li>
    </ul>
    <myFooter></myFooter>
    </div>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
import style from '../style/scss/_content.scss'
export default {
  components: { myHeader, myFooter },
  data () {
    return {
      id: this.$route.params.id,
      dat: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topic/' + this.id, null, r => {
      console.log(r)
        this.dat = r.data
      })
    }
  }
}
</script>
