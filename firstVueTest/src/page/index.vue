<template>
  <div>
    <myHeader></myHeader>
    <div class="article_list">
      <ul>
        <li v-for="i in list">
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
          <time class="publishtime" v-text="$utils.goodTime(i.create_at)"></time>
        </li>
      </ul>
    </div>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
import style from '../style/scss/_index.scss'
export default {
  components: { myHeader, myFooter },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}
</script>
