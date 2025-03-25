
export default function Post({post}){
    // console.log(post)
    const {title, body} = post;
    return(
        //postTitle, postBody
         <div>
            <h2>{title}</h2>
            <p> {body} </p>
        </div>
    )
}