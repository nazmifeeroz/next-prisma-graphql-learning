import "../styles/tailwind.css";
import Layout from "../components/Layout";
import { FC } from "react";

interface Props {
  // any props that come into the component
  Component: any;
  pageProps: any;
}

const MyApp: FC<Props> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
