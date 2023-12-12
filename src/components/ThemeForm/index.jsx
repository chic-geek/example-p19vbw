import Button from '../Button'
import FormSelect from '../FormSelect'
import DATA from '../../data/orgs.json'
import { useTheme } from '../../contexts/themeContext'

const ORG_OPTIONS = DATA
  .map((orgData, index) => ({ id: index, value: orgData.org_name, label: orgData.org_name }))

const GENERIC_OPTION = 'Choose an organisation'

export default function ThemeForm() {
  const { state: { theme }, dispatch } = useTheme()

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function handleSelectChange(e) {
    const org_name = e.target.value
    const payload = DATA.find((org) => org.org_name === org_name)

    if (org_name === GENERIC_OPTION) {
      dispatch({ type: 'RESET_THEME' })
      return
    }

    dispatch({ type: 'SET_THEME', payload })
  }

  function handleResetTheme() {
    dispatch({
      type: 'RESET_THEME'
    })
  }

  function handleApplyTheme() {
    dispatch({
      type: 'APPLY_THEME'
    })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <FormSelect
        name="organisation"
        value={theme.org_name}
        options={ORG_OPTIONS}
        genericOption={GENERIC_OPTION}
        handleChange={handleSelectChange}
      />
      <footer className="mt-20 space-x-4">
        <Button variant="tertiary" handleClick={handleResetTheme}>Reset</Button>
        <Button variant="primary" handleClick={handleApplyTheme}>Apply theme</Button>
      </footer>
    </form>
  )
}
