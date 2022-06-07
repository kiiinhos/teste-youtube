import React from 'react';
import { Button } from '@material-ui/core';
import Layout from '../components/Layout/layout';



export default function Home() {
  return (
    <Layout title='Youtube'>
      Clone youtube
      <Button variant="contained" color="primary">Contained</Button>
    </Layout>
    
  );
}
