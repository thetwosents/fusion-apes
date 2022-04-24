// A container with className container that renders the html and components inside of it.
//
const Container = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}
export default Container;