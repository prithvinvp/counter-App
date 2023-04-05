const button = (props) => {

    return (
        <button className='rounded-lg  bg-slate-200 p-2 m-2 shadow-md shadow-black font-Alkatra font-extrabold text-3xl text-center'
        onClick={props.onClick}        
        > {props.name} </button>
    )
}

export default button
