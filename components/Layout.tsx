import { Container } from "@mantine/core";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container size="lg">{children}</Container>
    </>
  );
};

export default Layout;
