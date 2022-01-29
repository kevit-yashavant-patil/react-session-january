export const Button = ({ children, ...rest}) => {
    return(
        <button className="rounded text-white px-2 py-1 m-2 bg-sky-600 hover:bg-sky-700" {...rest} >
        {children}
        </button>
    );
}