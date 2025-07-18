'use client'

import { IconDefinition } from '@fortawesome/free-regular-svg-icons'
import React, {
  PropsWithChildren, useContext, useEffect, useState,
} from 'react'
import {
  Accordion, AccordionContext, Button, useAccordionButton, NavLink,
} from 'react-bootstrap'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
// import { useRouter } from "next/navigation"

type SidebarNavGroupToggleProps = {
  eventKey: string;
  icon: IconDefinition;
  link: string;
  setIsShow: (isShow: boolean) => void;
} & PropsWithChildren

const SidebarNavGroupToggle = (props: SidebarNavGroupToggleProps) => {
  // https://react-bootstrap.github.io/components/accordion/#custom-toggle-with-expansion-awareness
  const { activeEventKey } = useContext(AccordionContext)
  const {
    eventKey, icon, link, children, setIsShow,
  } = props

  const decoratedOnClick = useAccordionButton(eventKey)

  const isCurrentEventKey = activeEventKey === eventKey

  useEffect(() => {
    setIsShow(activeEventKey === eventKey)
  }, [activeEventKey, eventKey, setIsShow])

  return (
    <span className="rounded-0 nav-link px-3 py-2 d-flex align-items-center flex-fill w-100 shadow-none">
      <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
      <Link href={link} passHref legacyBehavior>
        <NavLink className="px-3 py-2 d-flex align-items-center">
          {children}
        </NavLink>
      </Link>
      <Button
        variant="link"
        type="button"
        className={classNames('rounded-0 nav-link px-3 py-2 d-flex align-items-center align-self-end shadow-none', {
          collapsed: !isCurrentEventKey,
        })}
        onClick={decoratedOnClick}
      >
        <div className="nav-chevron ms-auto text-end">
          <FontAwesomeIcon size="xs" icon={faChevronUp} />
        </div>
      </Button>
    </span>
  )
}

type SidebarNavGroupProps = {
  toggleIcon: IconDefinition;
  toggleText: string;
  toggleLink: string;
} & PropsWithChildren

export default function SidebarNavGroup(props: SidebarNavGroupProps) {
  const {
    toggleIcon,
    toggleText,
    toggleLink,
    children,
  } = props

  const [isShow, setIsShow] = useState(false)

  return (
    <Accordion as="li" bsPrefix="nav-group" className={classNames({ show: isShow })}>
      <SidebarNavGroupToggle icon={toggleIcon} link={toggleLink} eventKey="0" setIsShow={setIsShow}>{toggleText}</SidebarNavGroupToggle>
      <Accordion.Collapse eventKey="0">
        <ul className="nav-group-items list-unstyled">
          {children}
        </ul>
      </Accordion.Collapse>
    </Accordion>
  )
}
