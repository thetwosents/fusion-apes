import LinkList from "./LinkList";
import Search from './Search';
import GanList from "./GanList";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>Welcome to the GAN</h1>
            <p>Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight.</p>
            <LinkList />
            <Search />
            <GanList />
        </div>
    )
}

export default Sidebar;

