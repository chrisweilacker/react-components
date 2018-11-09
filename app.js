// TODO
var GroceryList = (props) => {

  return (<ul>
    {props.items.map((value, index) => {
    return <GroceryListItem item ={value} key = {index}  />;
     })}
    </ul>);
};




class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     bolded: false
    };
  }

  onListItemHover() {
    this.setState({
      bolded: !this.state.bolded
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bolded ? 'bold' : 'normal'
    };
    return (<li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>);
  }

}


ReactDOM.render(<GroceryList items={['Milk', 'Eggs', 'Yogurt', 'Bacon']}/>, document.getElementById("app"));