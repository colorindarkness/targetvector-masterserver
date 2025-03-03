import {
  // faAddressCard, faBell, faFileLines, faStar,
  faAddressCard, faStar,
} from '@fortawesome/free-regular-svg-icons'
import {
  faBug,
  // faCalculator,
  // faChartPie,
  faCode,
  // faDroplet,
  faGauge,
  // faLayerGroup,
  // faLocationArrow,
  // faPencil,
  faPuzzlePiece,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import React, { PropsWithChildren } from 'react'
import { Badge } from 'react-bootstrap'
import SidebarNavGroup from '@/components/Layout/Dashboard/Sidebar/SidebarNavGroup'
import SidebarNavItem from '@/components/Layout/Dashboard/Sidebar/SidebarNavItem'
import { getDictionary } from '@/locales/dictionary'

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

export default async function SidebarNav() {
  const dict = await getDictionary()
  return (
    <ul className="list-unstyled">
      <SidebarNavItem icon={faGauge} href="/">
        {dict.sidebar.items.dashboard}
        <small className="ms-auto"><Badge bg="info" className="ms-auto">NEW</Badge></small>
      </SidebarNavItem>
      <SidebarNavItem icon={faCode} href="/pokemons">
        {dict.sidebar.items.sample}
        <small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small>
      </SidebarNavItem>

      <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText={dict.sidebar.items.updates}>
        <SidebarNavItem href="/updates/news">{dict.sidebar.items.updates_news}</SidebarNavItem>
        <SidebarNavItem href="/updates/gameupdates">{dict.sidebar.items.updates_gameupdates}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText={dict.sidebar.items.servers}>
        <SidebarNavItem href="#">{dict.sidebar.items.servers_featured}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.servers_mostpopular}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.servers_newest}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.servers_oldest}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText={dict.sidebar.items.status}>
        <SidebarNavItem href="#">{dict.sidebar.items.status_activity}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.status_statistics}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavTitle>{dict.sidebar.items.admin}</SidebarNavTitle>

      <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText={dict.sidebar.items.admin_dashboard}>
        <SidebarNavItem href="#">{dict.sidebar.items.admin_cloud}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.admin_reports}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.admin_gameservices}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText={dict.sidebar.items.admin_servers}>
        <SidebarNavItem href="#">{dict.sidebar.items.admin_maps}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.admin_mods}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.admin_analytics}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavTitle>{dict.sidebar.items.extras}</SidebarNavTitle>

      <SidebarNavGroup toggleIcon={faStar} toggleText={dict.sidebar.items.pages}>
        <SidebarNavItem icon={faRightToBracket} href="login">{dict.sidebar.items.login}</SidebarNavItem>
        <SidebarNavItem icon={faAddressCard} href="register">{dict.sidebar.items.register}</SidebarNavItem>
        <SidebarNavItem icon={faBug} href="#">{dict.sidebar.items.error404}</SidebarNavItem>
        <SidebarNavItem icon={faBug} href="#">{dict.sidebar.items.error500}</SidebarNavItem>
      </SidebarNavGroup>
    </ul>
  )
}
