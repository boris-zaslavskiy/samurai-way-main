import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="My first post" likesCount="0"/>
                <Post message="My second post" likesCount="23"/>
                <Post message="3rd post" likesCount="12"/>
            </div>


        </div>
    )
}

export default MyPosts;