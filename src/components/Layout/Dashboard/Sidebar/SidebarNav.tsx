import {
  // faAddressCard, faBell, faFileLines, faStar,
  faAddressCard, faStar,
} from '@fortawesome/free-regular-svg-icons'
import {
  faNewspaper,
  faServer,
  faPlug,
  faHouseChimney,
  faCircleNodes,
  faCubes,
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

      <SidebarNavGroup toggleIcon={faNewspaper} toggleLink="/updates/" toggleText={dict.sidebar.items.updates}>
        <SidebarNavItem icon={faNewspaper} href="/updates/news/">{dict.sidebar.items.updates_news}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/updates/gameupdates/">{dict.sidebar.items.updates_gameupdates}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faServer} toggleLink="/servers/" toggleText={dict.sidebar.items.servers}>
        <SidebarNavItem icon={faNewspaper} href="/servers/featured/">{dict.sidebar.items.servers_featured}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/servers/popular/">{dict.sidebar.items.servers_mostpopular}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/servers/newest/">{dict.sidebar.items.servers_newest}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/servers/oldest/">{dict.sidebar.items.servers_oldest}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faPlug} toggleLink="/status/" toggleText={dict.sidebar.items.status}>
        <SidebarNavItem icon={faNewspaper} href="/status/activity/">{dict.sidebar.items.status_activity}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/status/stats/">{dict.sidebar.items.status_statistics}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faHouseChimney} toggleLink="/host/" toggleText={dict.sidebar.items.host}>
        <SidebarNavItem icon={faNewspaper} href="/host/">{dict.sidebar.items.host_dashboard}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/host/servers/">{dict.sidebar.items.host_servers}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/host/stats/">{dict.sidebar.items.host_analytics}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/host/reports/">{dict.sidebar.items.host_reports}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/host/sanctions/">{dict.sidebar.items.host_sanctions}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleLink="/dev/" toggleText={dict.sidebar.items.dev}>
        <SidebarNavItem icon={faNewspaper} href="/dev/">{dict.sidebar.items.dev_dashboard}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/dev/events">{dict.sidebar.items.dev_events}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/dev/maps">{dict.sidebar.items.dev_maps}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/dev/mods">{dict.sidebar.items.dev_mods}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/dev/stats">{dict.sidebar.items.dev_analytics}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/dev/issues">{dict.sidebar.items.dev_issues}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/dev/reports">{dict.sidebar.items.dev_reports}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavTitle>{dict.sidebar.items.admin}</SidebarNavTitle>

      <SidebarNavGroup toggleIcon={faCircleNodes} toggleLink="/admin/" toggleText={dict.sidebar.items.admin_devops}>
        <SidebarNavItem icon={faNewspaper} href="/admin/devops/">{dict.sidebar.items.admin_dashboard}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/admin/devops/cloud/">{dict.sidebar.items.admin_cloud}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/admin/devops/servers/">{dict.sidebar.items.admin_servers}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/admin/devops/stats/">{dict.sidebar.items.admin_analytics}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/admin/devops/issues/">{dict.sidebar.items.admin_issues}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/admin/devops/reports/">{dict.sidebar.items.admin_reports}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/admin/devops/gameservices/">{dict.sidebar.items.admin_gameservices}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faCubes} toggleLink="/admin/content/" toggleText={dict.sidebar.items.admin_content}>
        <SidebarNavItem icon={faNewspaper} href="/admin/content/maps/">{dict.sidebar.items.admin_maps}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/admin/content/mods/">{dict.sidebar.items.admin_mods}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/admin/content/stats/">{dict.sidebar.items.admin_analytics}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/admin/content/issues/">{dict.sidebar.items.admin_content_issues}</SidebarNavItem>
        <SidebarNavItem icon={faNewspaper} href="/admin/content/reports/">{dict.sidebar.items.admin_content_reports}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavTitle>{dict.sidebar.items.extras}</SidebarNavTitle>

      <SidebarNavGroup toggleIcon={faStar} toggleLink="/updates/" toggleText={dict.sidebar.items.pages}>
        <SidebarNavItem icon={faRightToBracket} href="login">{dict.sidebar.items.login}</SidebarNavItem>
        <SidebarNavItem icon={faAddressCard} href="register">{dict.sidebar.items.register}</SidebarNavItem>
        <SidebarNavItem icon={faBug} href="/404/">{dict.sidebar.items.error404}</SidebarNavItem>
        <SidebarNavItem icon={faBug} href="/500/">{dict.sidebar.items.error500}</SidebarNavItem>
      </SidebarNavGroup>
    </ul>
  )
}
