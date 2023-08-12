import { AppMenuItem } from 'components/sidebars'

export function DefaultMenuItems({
  onClick
}: {
  onClick?: (...args: any[]) => void
}) {
  return (
    <>
      <AppMenuItem link={{ href: '/app' }} onClick={onClick}>
        Voucher
      </AppMenuItem>
      <AppMenuItem link={{ href: '/app/register' }} onClick={onClick}>
        Register
      </AppMenuItem>
    </>
  )
}
