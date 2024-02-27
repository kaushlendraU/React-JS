import Item from "./components/Item"
import Cart from "./components/Cart"

function App() {

  return (
    <>
      <div>
        <Item name='MacBook' price={100000} />
        <Item name='Pendrive' price={400} />
        <Item name='Mobile' price={35000} />
        <Cart />
      </div>
    </>
  )
}

export default App
