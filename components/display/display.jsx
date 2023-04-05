const message = (props) => {
    return (
        <h1 className="flex justify-center shadow-inner shadow-gray-500 mx-auto w-60 text-5xl h-auto sm:w-80 rounded-lg  pt-5 pb-2 sm:pt-7 bg-rose-200  sm:text-9xl text-center my-12 font-Alkatra font-bold"> 
            {props.value}
        </h1>
    )
}

export default message