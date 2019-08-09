import Head from 'next/head';
import Header from "./Header";
import '../styles/style.css';

const Layout =( props )=>{
  return (
    <div>
      <Head>
      <title>woocommerce whit react theme</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"></link>
      </Head>
      <Header/>

      { props.children }
    </div>
  );
}
export default Layout;
