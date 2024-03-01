import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react'

import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import Skeleton from 'react-loading-skeleton'

import s from './dropdown.module.scss'

export type DropdownProps = {
  children: ReactNode
  photo: string | null
  name: string
  isOwner?: boolean
} & ComponentPropsWithoutRef<typeof DropdownRadix.Content>

export const Dropdown = forwardRef<ElementRef<typeof DropdownRadix.Content>, DropdownProps>(
  ({ children, name, isOwner, photo }, ref) => {
    const [open, setOpen] = useState(false)

    return (
      <DropdownRadix.Root modal={false} open={open} onOpenChange={setOpen}>
        <DropdownRadix.Trigger className={s.trigger}>
          {!isOwner ? (
            <>
              <img src={photo || ''} alt="User Photo" />
              <span className={s.name}>{name}</span>
            </>
          ) : (
            <>
              <Skeleton circle className={s.skeletonCircle} />
              <Skeleton count={1} className={s.skeletonText} />
            </>
          )}
        </DropdownRadix.Trigger>
        {open && (
          <DropdownRadix.Portal>
            <DropdownRadix.Content
              onClick={event => event.stopPropagation()}
              ref={ref}
              className={s.content}
              sideOffset={5}
            >
              <DropdownRadix.Item className={s.item}>{children}</DropdownRadix.Item>
            </DropdownRadix.Content>
          </DropdownRadix.Portal>
        )}
      </DropdownRadix.Root>
    )
  }
)
