import ItemList from "./item-list";

export default function Page() {
    return (
        <main className=" bg-black p-8 ">
            <div>
                <h1 className="text-4xl font-extrabold text-center text-white mb-6">
                    Shopping List
                </h1>
                <ItemList />
            </div>
        </main>
    );
}
