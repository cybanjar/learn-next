import { useEffect, useState } from "react"

export default function List() {
  const [list, setlist] = useState([])
  
  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((result) => setlist(result))
        .catch((error) => {
          console.log('error: ', error.message)
        })
    }

    getData()
  }, [])

  const listUser = list.map((item) => <li key={item.id}> {item.name} </li> )

  return (
    <ul>{listUser}</ul>
  )
}
