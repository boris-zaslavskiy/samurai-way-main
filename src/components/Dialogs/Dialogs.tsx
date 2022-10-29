import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type dialogItemProps = {
    id: string,
    name: string
}

type messageItemProps = {
    message: string
}

const DialogItem = (props: dialogItemProps) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: messageItemProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Peter" />
                <DialogItem id="2" name="Vasya" />

            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="Wow" />

            </div>
        </div>
    )

}

export default Dialogs;