import nav from "./nav"
import { Menu, Button } from "antd"
const { Item } = Menu;

const NavMenu = () => {
    return (
        <Menu mode="horizontal" disabledOverflow={true} style={{ marginLeft: 'auto', float: 'right' }}>
            {nav.map((item, index) => (
                <Item key={index}>
                    <a href={item.link}>{item.name}</a>
                </Item>
            ))}
            {/* Add two buttons at the end */}
            <Item>
                <Button>Get Your FusionApe</Button>
            </Item>
            <Item>
                <Button type="primary">Connect Wallet</Button>
            </Item>
            
        </Menu>
    )
}

export default NavMenu;