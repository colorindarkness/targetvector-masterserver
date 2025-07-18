import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import LoginForm from '@/app/(authentication)/login/login'
import { SearchParams } from '@/types/next'
import { getDictionary } from '@/locales/dictionary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteamSymbol } from '@fortawesome/free-brands-svg-icons'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { callbackUrl } = searchParams
  const dict = await getDictionary()

  const getCallbackUrl = () => {
    if (!callbackUrl) {
      return '/' // Default redirect to home page
    }

    return callbackUrl.toString()
  }

  return (
    <Row className="justify-content-center align-items-center px-3">
      <Col lg={8}>
        <Row>
          <Col md={7} className="bg-white dark:bg-dark border p-5">
            <div>
              <h1>{dict.login.title}</h1>
              <Link className="btn btn-lg btn-dark mt-3" href="/register">
                <FontAwesomeIcon icon={faSteamSymbol} />
                {dict.login.steam}
              </Link>
              <Link className="btn btn-lg btn-dark mt-3" href="/register">
                <FontAwesomeIcon icon={faDragon} />
                {dict.login.epic}
              </Link>
              <p className="text-black-50 dark:text-gray-500">{dict.login.description}</p>
              <FontAwesomeIcon icon={faDragon} />
              <LoginForm callbackUrl={getCallbackUrl()} />
            </div>
          </Col>
          <Col
            md={5}
            className="bg-primary text-white d-flex align-items-center justify-content-center p-5"
          >
            <div className="text-center">
              <h2>{dict.login.signup.title}</h2>
              <p>{dict.login.signup.description}</p>
              <Link className="btn btn-lg btn-dark mt-3" href="/register">
                <FontAwesomeIcon icon={faSteamSymbol} />
                {dict.signup.steam}
              </Link>
              <Link className="btn btn-lg btn-dark mt-3" href="/register">
                <FontAwesomeIcon icon={faDragon} />
                {dict.signup.epic}
              </Link>
              <Link className="btn btn-lg btn-light mt-3" href="/register">
                <FontAwesomeIcon icon={faEnvelope} />
                {dict.signup.register_now}
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
