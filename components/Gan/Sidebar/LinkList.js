import Link from "next/link";
import links from "./links";

const LinkList = () => {
    return (
        <>
            {
                links.map(link => {
                    return (
                        <Link href={link.href} key={link.title}>
                            <a>{link.title}</a>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default LinkList;