<template>
  <div class="about">
	  {{list}}
    <h1>This is an about page</h1>
  </div>
</template>

<script>
	export default{
		name:About,
		data(){
			return{
				list:[]
			}
		},
		computed:{
			list() {
				return this.$store.state.listx;
			}
		}
	}
</script>