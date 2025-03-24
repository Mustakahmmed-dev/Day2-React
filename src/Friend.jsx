export default function Friend({friend}){
    console.log(friend)
    const {name, email, phone, website} = friend;
    return(
        <div>
            <h3>Name: {name} </h3>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
            <p>Website: {website} </p>
        </div>
    )
}