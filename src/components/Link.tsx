type Props = {
    href:string;
    label : string;
};
function Link(props:Props){
    return(
        <a href="
        href = {props.href}
        className = text-blue-500 hover:underline transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        
        
        >
             {
                props.label
             }
       
        </a>
    )
    
}
export default Link;