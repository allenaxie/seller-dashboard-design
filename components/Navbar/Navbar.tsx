import Link from 'next/link';
import { Menu } from 'antd';
import classes from './Navbar.module.css';

const Navbar = () => {
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

            </Menu>
        </>
    )
}

export default Navbar