import '../assets/style/footer.scss'

export	default{
	data() {
		return {
			name:'juill'
		}
		
	},
	render(){
		return(
			<div id="footer">
				<span>Writeen by {this.name}</span>
			</div>
		)
	}		
}