export default function Item(props){
    return(
        <li className="bg-gray-100 dark:bg-gray-800 p-4 m-4 rounded-lg shadow-md  gap-2">
            <h2 className="font-bold text-blue-900 items-center"> {props.name}</h2>
            <p className="text-gray-700 dark:text-gray-400">
                <span  className="font-medium">Quantity:</span>{props.quantity}
            </p>
            <p className="text-gray-700 dark:text-gray-400">
                <span  className="font-medium">Category:</span>{props.category}
            </p>
        </li>
    );
}