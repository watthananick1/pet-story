import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/clientApp';

const q = query(collection(db, 'Users'));

export default function PostList() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
        console.log(doc);
      });
      setDataList(data);
      console.log(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      {dataList.map((data,i) => (
        <div key={i}>
          <h2>{data.firstName} {data.lastName}</h2>
          <p>{data.dateOfBirth}</p>
        </div>
      ))}
    </div>
  );
}
