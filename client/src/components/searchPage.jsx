class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recipeList: []
    }
  }

  componentWillMount() {
    this.setState({
      recipeList: this.props.searchRecipe
    });
  }

  render(){
    return(
      <div className='searchpage'>
        <Header />
        <input className="searchbox" type='text' value={this.state.value}/>
        <button className='submitButton'>Search</button>
        <SavedRecipeList />
        <RecipeList recipeList={this.state.recipeList}/>
      </div>
    )
  }
}

window.SearchPage = SearchPage;