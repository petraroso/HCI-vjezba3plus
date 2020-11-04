import React from 'react'

import Logo from '../../components/Logo'
import Navigation from '../../components/Navigation'
import ContactBar from '../../components/contactBar'

import styles from './style.module.css'

const NavigationHeader = (props) => (
  <>
    <ContactBar />
    <section className={styles.navigationHeader}>
      <Logo />
      <Navigation activeTab={props.activeTab} />
    </section>
  </>
)
export default NavigationHeader