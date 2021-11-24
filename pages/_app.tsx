import { FC } from 'react';
import '../styles/tailwind.css';
import Layout from '../components/Layout';

interface Props {
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
