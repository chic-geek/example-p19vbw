import { classList } from '../../utils'

export default function Button({ children, variant, handleClick }, props) {
  const buttonClasses = classList(
    'rounded-lg',
    'border-0',
    'text-blue-500',
    'cursor-pointer',
    'font-bold',
    'pt-4 pb-4',
    'pl-9 pr-9',
    variant === 'primary' && 'bg-blue-500 text-white',
    variant === 'tertiary' && 'bg-white',
  )

  return (
    <button {...props} className={buttonClasses} onClick={handleClick}>
      {children}
    </button>
  )
}
