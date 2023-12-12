import React from 'react'
import ThemedContainer from '../components/ThemedContainer'
import PageFooter from '../components/PageFooter'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/themeContext'

export default function Homepage() {
  const { state: { theme } } = useTheme()

  return (
    <React.Fragment>
      <ThemedContainer containerFooter={<ContainerFooter />}>
        <h1 className="text-5xl font-bold">
          Welcome to the {theme.org_name} homepage!
        </h1>
      </ThemedContainer>
    </React.Fragment>
  )
}

function ContainerFooter() {
  return (
    <PageFooter>
      <Link to="/" className="text-blue-600 text-xl">Back to settings</Link>
    </PageFooter>
  )
}
