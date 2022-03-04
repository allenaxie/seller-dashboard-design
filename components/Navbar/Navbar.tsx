import Link from 'next/link';
import { Menu, Avatar } from 'antd';
import classes from './Navbar.module.css';

const Navbar = () => {

    const {SubMenu} = Menu;
    return (
        <>
            <Menu theme="dark" mode="horizontal" className={classes.menu}>
                <Menu.Item>
                    <Link href="/">
                        LOGO
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="">
                        EVENTS
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="">
                        FEATURES
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="">
                        COMMUNITY
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="">
                        CATALOG
                    </Link>
                </Menu.Item>
                <SubMenu className={classes.avatar} icon={<Avatar src="https://i.imgur.com/tuQtA1X.jpg"/>}>
                    <Menu.Item>
                        PROFILE
                    </Menu.Item>
                    <Menu.Item>
                        SELLER DASHBOARD
                    </Menu.Item>
                    <Menu.Item>
                        LOGOUT
                    </Menu.Item>
                </SubMenu>
                

            </Menu>
        </>
    )
}

export default Navbar