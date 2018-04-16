<template>
	<section class="real-app">
		<input
		type="text"
		class="add-input"
		autofocus="autofocus"
		placeholder="接下来要做什么？"
		@keyup.enter="addTodo"
	>
	<item 
		:todo="todo"
		v-for="todo in toggleFilterTodo"
		:key="todo.id"
		@del="deleteTodo"
	/>
	<tabs :filter="filter"
		  :todos ="todos"
		  @toggle="toggleFilter"
		  @clearCompletedTodo="clearCompletedTodo"
	>
	</tabs>
	</section>
</template>

<script>
	import Item from './item'
	import Tabs from "./tabs";
	let id = 0;
	export default{
		data(){
			return {
				todos:[],
				filter:'all'
			}		
		},
		computed:{
			toggleFilterTodo() {
				if (this.filter ==='all') {
					return this.todos
				}
				const completed = this.filter === 'completed'
				return this.todos.filter(todo => completed === todo.completed)
			}
		},
		methods:{
			addTodo(e) {
				this.todos.unshift({
					id:id++,
					content:e.target.value.trim(),
					completed:false
				})
				e.target.value=''
			},
			deleteTodo(id){
				this.todos.splice(this.todos.findIndex(todo => todo.id===id),1)
			},
			toggleFilter(state){
				this.filter=state
			},
			clearCompletedTodo(){
				this.todos = this.todos.filter(todo => !todo.completed)
			}		
		},
		components:{
			Item,
			Tabs
		}
	}
</script>

<style lang="scss" scoped>
	.real-app{
		width:600px;
		margin:0 auto;
		box-shadow:0 0 5px #666;
	}

	.add-input{
		position:relative;
		margin:0;
		width:100%;
		font-size:24px;
		font-family:inherit;
		font-weight:inherit;
		line-height:1.4em;
		outline:none;
		color:inherit;
		box-sizing:border-box;
		font-smoothing:antialiased;
		padding:16px 16px 16px 60px;
		border:none;
		box-shadow:inset 0 0 1px rgba(0,0,0,0.5);
	}
</style>