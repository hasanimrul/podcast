import React from 'react';
import styles from './style/index.module.css'
import Main from '@/templates/Main';
import PrimaryButton from '@/components/button/primary/primaryButton';
const Index = () => {
  return (
    <Main>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <h1>Welcome to fauget music services</h1>
          <PrimaryButton name="Sign Up"/>
          <PrimaryButton name="Sign In" />
        </div>

      </div>
    </Main>
  );
};

export default Index;