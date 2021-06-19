<template>
	<div class="home">
		<h2>add todo</h2>
    	<br/>

		<div class="inp">
			<input type="text" placeholder="请输入..." v-model='inp'>
			<button @click='add'>添加</button>
		</div>
		<br />
		筛选：<select v-model="listnum" @change="show">
			<option>10</option>
			<option>150</option>
			<option>200</option>
		</select>
		<br />
		<br />
		<button class="btn" @click="ider=0">全部显示</button>
		<button class="btn" @click="ider=1">已完成</button>
		<button class="btn" @click="ider=2">未完成</button>
		<br />
		<br />
		<p v-for="item in newlist">
			<span :class="item.completed?'color':''" @click="huan(item.id)">{{item.title}}</span>
		</p>
	</div>
</template>

<script>
	import Todo from '@/components/Todo.vue'
	export default {
		name: 'Home',
		data() {
			return {
				ider: 0,
				inp: "",
				listnum: 10,
			}
		},
		created() {
			this.getData()
		},
		methods: {
			show() {
				console.log(this.listnum)
				this.getData()
			},
			add() {
				var reg = /\S/;
				if (reg.test(this.inp)) {
					let obj = {
						completed: false,
						id: new Date().getTime(),
						title: this.inp
					}
					this.list.unshift(obj)
				} else {
					alert("内容不能为空")
				}
				this.inp = ""
			},
			huan(aid) {
				this.list.map((v, i, a) => {
					if (v.id == aid) {
						v.completed = !v.completed
					}
				})
			}
		},
		components: {
			Todo
		},
		computed: {
			list() {
				return this.$store.state.listx
			},
			newlist() {
				if (this.ider == 0) {
					return this.list;
				} else if (this.ider == 1) {
					return this.list.filter(v => v.completed == false)
				} else {
					return this.list.filter(v => v.completed)
				}
			}
		}
	}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}
	.home{
		width: 60%;
		margin: 0 auto;
	}
	input {
		width: 950px;
		height: 40px;
	}

	button {
		width: 40px;
		height: 40px;
	}

	.btn {
		width: 333px;
		height: 30px;
		border: 0;
		background-color: transparent;
	}

	span {
		display: block;
		height: 50px;
		padding: 0 10px;
		margin: 5px;
		line-height: 50px;
		float: left;
		background-color: #42B983;
		border-radius: 5px;
	}

	.color {
		background-color: #ccc;
	}
</style>
