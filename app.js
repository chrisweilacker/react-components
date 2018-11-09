// TODO
var GroceryList = (props) => {

  return (<ul>
    {props.items.map((value, index) => {
    return <GroceryListItem item ={value} key = {index}  />;
     })}
    </ul>);
};




var GroceryListItem = (props) => (
  <li>{props.item}</li>
);


ReactDOM.render(<GroceryList items={['Milk', 'Eggs', 'Yogurt']}/>, document.getElementById("app"));