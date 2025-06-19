

type Props ={
    text: string;
}
function SimpleButton(props:Props){
    return(
        <button className="bg-black-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            {props.text}

        </button>
    )
}export default SimpleButton