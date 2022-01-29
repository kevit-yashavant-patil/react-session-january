export const Box = ({ children, ...rest}) => {
    return(
        <div className="border border-indigo-500 rounded" {...rest} >
        {children}
        </div>
    );
}