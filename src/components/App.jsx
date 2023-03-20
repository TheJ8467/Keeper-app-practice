import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [post, setPost] = useState({ title: "", content: "" });
  const [posts, setPosts] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setPost((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function addItem(prevItems) {
    setPosts((prevItems) => {
      return [...prevItems, post];
    });
    setPost({ title: "", content: "" });
  }

  function deleteItem(id) {
    setPosts((prevItems) => {
      return prevItems.filter((_, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        onChange={handleChange}
        tName="title"
        cName="content"
        tValue={post.title}
        cValue={post.content}
        addClick={addItem}
      />
      {posts.map((todoItem, index) => (
        <Note
          key={index}
          id={index}
          title={todoItem.title}
          content={todoItem.content}
          deleteClick={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
