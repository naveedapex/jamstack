import React from 'react';
import { Link } from "gatsby";
import Header from '../components/header'
import Layout from '../components/Layout';
function Show() {
    return (
        <Layout>
    <div >
        <Header text='h1 heading' subtext='sub heading'></Header>
        Hello world from Naveed!
     
    </div>
    </Layout>
    )
}
export default Show;