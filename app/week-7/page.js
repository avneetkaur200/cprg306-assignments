"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
export default function Page() {
   const [items, setItems] = useState(itemsData);
   

    const handleAddItem = (newItem) => {
      setItems((prevItems) => [...prevItems, newItem]);
    };
    return (
        <main className=" bg-black p-8 ">
            <div>
                <h1 className="text-4xl font-extrabold text-center text-white mb-6">
                    Shopping List
                </h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </main>
    );
}
