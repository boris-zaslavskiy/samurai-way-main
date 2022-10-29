import React from "react";
import c from "./Post.module.css";

type PostPropsType = {
    message: string,
    likesCount: string
}

const Post = (props: PostPropsType) => {
    return <div>{props.message}, {props.likesCount} likes</div>

}

export default Post;