import React from 'react';
import Head from 'next/head';

const HeadTag = (props) => (
    <Head>
      <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css" />
      <link rel="stylesheet" href="/dist/css/adminlte.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
      {props.children}
    </Head>
)

export default HeadTag;