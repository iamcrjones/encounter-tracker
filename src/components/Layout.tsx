import EntityMenu from "./EntityMenu";
import MapMenu from "./MapMenu";

type LayoutProps = {
  children: React.ReactNode[] | React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/*Left menu will be maps*/}
      <div className="absolute left-0 h-full py-6">
        <MapMenu />
      </div>{" "}
      <div className="absolute right-0 h-full py-6">
        <EntityMenu />
      </div>
      {/*Right menu will be entities (players, enemies etc.)*/}
      {children}
      {/*Bottom will be drawing functions*/}
    </div>
  );
};
export default Layout;
