import React from 'react'
import { classList } from '../../utils';

const backgroundImageUrl = `url("data:image/svg+xml,%3Csvg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_3)'%3E%3Crect width='16.8' height='16.8' fill='white'/%3E%3Cpath d='M4.74286 6L8.6 9.21428L12.4571 6L14 6.64286L8.6 11.1428L3.2 6.64286L4.74286 6Z' fill='%23BBBBBB'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_3'%3E%3Crect width='16.8' height='16.8' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")`

export default function FormSelect({ name, value, options, genericOption, handleChange }) {
  const formSelectClasses = classList(
    'appearance-none',
    'bg-white',
    'bg-[right_1rem_center]',
    'bg-no-repeat',
    'bg-auto',
    'border-stone-200',
    'border-2',
    'rounded-lg',
    'border-solid',
    'text-stone-500',
    'text-base',
    'pt-4',
    'pb-4',
    'pl-6',
    'pr-10',
    'w-full',
  )

  return (
    <div>
      <label htmlFor={name} className="sr-only">
        Choose an organisation
      </label>
      <select
        name={name}
        id={name}
        className={formSelectClasses}
        style={{ backgroundImage: backgroundImageUrl }}
        value={value}
        onChange={handleChange}
      >
        <option>{genericOption}</option>
        {options.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  );
}
