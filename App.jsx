import { useState } from "react"

const items = ["red","green","blue","yellow","white","purple","orange","silver","black","yellow","green","red"]

const App = () => {


  const [searchItem, setSearchItem] = useState('');

  const [filteredItems, setFilteredItems] = useState(items);

  const handleInputChange = (e) => { 
    const searchValue  = e.target.value;
    setSearchItem(searchValue)

    
    
    const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredItems(filteredItems);
  }

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      <h2>Similar items are :</h2>
      <ul>
        {filteredItems.map(item => <li> {item}</li>)}
      </ul>
    </>
  )
}

export default App;