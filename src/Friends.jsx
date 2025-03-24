import { use } from "react";
import Friend from "./Friend";

export default function Friends({fetchUsers}){
    const usersPromise = use(fetchUsers);
    // console.log(usersPromise)

    return (
        <div>
           
           {
            usersPromise.map(friend => <Friend key={friend.id} friend={friend}></Friend> )
           }
        </div>
    )
}