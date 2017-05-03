<template>
<div id="app">
<p>hello world</p>
<p>1.open url</p>
<p>2.clipboard writeText:"Example String"</p>
<button class="ui button active" @click="exopen">electron lib test</button>
</div>
</template>

<script>
import { shell,clipboard } from 'electron'
export default {
    components: {
    },
    data () {
      return {

      }
    },
    filters: {

    },
    mounted () {

    },
    methods: {
      exopen(){
        shell.openExternal("http://joinwed.com")
        clipboard.writeText('Example String')
      }
    }
  }
</script>
