import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(result);
      setlistOfUSer(result.data);
    };
    fetchdata();
  }, []);

  const [listOfUSer, setlistOfUSer] = useState([]);

  return (
    <>
      <h1 className="font-black text-lg font-mono text-blue-ta3i">
        list of users
      </h1>
      <div className="container mx-auto flex flex-wrap bg-move-ta3i rounded">
        {listOfUSer.map((user, i) => {
          return (
            <div
              className="h-30 w-65  p-5 m-8 text-center bg-cyan-600 rounded"
              key={i}
            >
              <h1 className=" font-mono text-lg  ">{user.name}</h1>
              <h2 className=" font-mono text-lg ">{user.username}</h2>
              <h2 className=" font-mono text-lg">{user.email}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UserList;
