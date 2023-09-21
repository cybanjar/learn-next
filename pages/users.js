import OnlyFooterLayout from '@/components/OnlyFooterLayout';
import { useEffect, useState } from 'react'

export const Users = () => {
  const [list, setList] = useState([])
  
  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((result) => setList(result))
        .catch((error) => {
          console.log('error: ', error.message)
        })
    }

    getData()
  }, [])

  const listUser = list.map((item) => <li key={item.id}> {item.name} </li>)
  
  return (
    <div className="text-center max-w-[80%] mx-auto">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-20 !leading-[1.4]">
        Get our Weekly Developer&apos;s Tips via Email
      </h3>
      <button
        type="button"
        className="btn-full"
      >
        Reload
      </button>

      <ul>{listUser}</ul>
    </div>
  );
};

Users.getLayout = (page) => (
  <OnlyFooterLayout>{page}</OnlyFooterLayout>
);

export default Users;