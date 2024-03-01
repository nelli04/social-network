import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  id?: string
  label?: string
} & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, 'asChild'>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, onCheckedChange, disabled, name, label, id, className, ...rest }, ref) => {
    return (
      <div className={`${s.container} ${className}`}>
        <div className={s.label}>
          <CheckboxRadix.Root
            ref={ref}
            id={id}
            name={name}
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            required={rest.required}
            className={s.root}
            defaultChecked
          >
            {checked && (
              <CheckboxRadix.Indicator className={s.indicator}>
                <Check size={12} className={s.check} />
              </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
          {label}
        </div>
      </div>
    )
  }
)
