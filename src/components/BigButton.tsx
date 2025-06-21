type Props = {
    text:string;
}
function BigButton(props: Props){
    return(
        <button className="bg-gray-900 text-white px-12 py-4 rounded hover:bg-green transition w-full max-w-md">
            {props.text}

        </button>
    )
}
export default BigButton