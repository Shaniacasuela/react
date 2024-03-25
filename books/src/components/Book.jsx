const Book = ({image, title, author}) => {
    
    return (
         <>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <img src={image} alt={title} /> 
    </> );
}
 
export default Book;