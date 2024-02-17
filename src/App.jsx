import { useState } from "react";
import menu from "./data.js";
import Title from "./Title.jsx";
import "./index.css";
import Category from "./Category.jsx";
import Menu from "./Menu.jsx";

// const tempcat = menu.map((item) => item.category);
// const tempSet = new Set(tempcat);
// const newcat = ["all", ...tempSet];

const newcat = ["all", ...new Set(menu.map((item) => item.category))];
console.log(newcat);

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [category, setCategory] = useState(newcat);

  const filterItems = (category) => {
    if (category === "all") {
      console.log("inside all");
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title title="Our Menu" />
        <Category category={category} filterItems={filterItems} />
      </section>
      <div className="section-center">
        {menuItems.map((item) => {
          return <Menu key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
}

export default App;
