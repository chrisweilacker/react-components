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
  }
  render() {
    return (<li>{this.props.item}</li>);
  }

}


ReactDOM.render(<GroceryList items={['Milk', 'Eggs', 'Yogurt', 'Bacon']}/>, document.getElementById("app"));