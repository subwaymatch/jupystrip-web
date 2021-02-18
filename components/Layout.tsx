import Head from "next/head";
import Header from "components/Header";

interface ILayoutProps {
  children: React.ReactNode;
  excludeHeader?: boolean;
}

export default function Layout({ children, excludeHeader }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>JupyStrip</title>
      </Head>

      {excludeHeader !== true && <Header />}

      {children}
    </>
  );
}
