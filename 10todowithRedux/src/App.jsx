import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  
  return (
    <>
      <h1 className='text-center mt-9 text-3xl'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App