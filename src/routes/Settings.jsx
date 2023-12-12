import React from 'react'
import ThemedContainer from '../components/ThemedContainer'
import PageFooter from '../components/PageFooter'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import ThemeForm from '../components/ThemeForm'

export default function Homepage() {
  return (
    <React.Fragment>
      <ThemedContainer containerFooter={<ContainerFooter />}>
        <Modal>
          <ThemeForm />
        </Modal>
      </ThemedContainer>
    </React.Fragment>
  )
}

function ContainerFooter() {
  return (
    <PageFooter>
      <Link to="/homepage" className="text-blue-600 text-xl">Your homepage</Link>
    </PageFooter>
  )
}
