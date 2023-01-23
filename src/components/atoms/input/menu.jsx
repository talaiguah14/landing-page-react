import React from "react";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';

const MenuBasico =({...props})=> {
    return(
        <div>
            {props.children}
        </div>
    )
};

export default MenuBasico;