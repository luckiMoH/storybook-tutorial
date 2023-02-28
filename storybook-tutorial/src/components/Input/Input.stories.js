import React from "react";
import Input from "./Input";

export default {
    title: 'form/Input',
    component: Input,
}

export const Default = () => <Input size='default' placeholder='Default Size' type='password'/>
export const Small = () => <Input size='small' placeholder='Small Size' type='number'/>
export const Big = () => <Input size='big' placeholder='Big Size'/>

Small.storyName = 'Small Input';