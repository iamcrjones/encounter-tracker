import MapMenu from "./MapMenu";

type LayoutProps = {
  children: React.ReactNode[] | React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/*Left menu will be maps*/}
      <div className="absolute left-8 h-full">
        <MapMenu />
      </div>
      {/*Right menu will be entities (players, enemies etc.)*/}
      {children}
      {/*Bottom will be drawing functions*/}
    </>
  );
};
export default Layout;