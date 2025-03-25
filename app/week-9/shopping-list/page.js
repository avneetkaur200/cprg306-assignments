"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
export default function Page() {
   const [items, setItems] = useState(itemsData);
   const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
      setItems((prevItems) => [...prevItems, newItem]);
    };
    const handleItemSelect = (itemName) => {
        const cleanedName = itemName.split(",")[0].trim().replace(/\p{Emoji}/gu, "");
        setSelectedItemName(cleanedName);
    };
    return (
        <main className=" bg-black p-8 ">
            <div>
                <h1 className="text-4xl font-extrabold text-center text-white mb-6">
                    Shopping List
                </h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
                {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
            </div>
        </main>
    );
}
