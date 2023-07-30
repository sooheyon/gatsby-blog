import * as React from "react"
import { Link } from "gatsby"
import Footer from "../Footer"
import { styled } from "styled-components"
import Header from "../Header"
import Bio from "../Bio"

interface LayoutProps {
  location: any //!
  title: string
  children?: React.ReactNode
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <LayoutStyled data-is-root-path={isRootPath}>
      <Header title={title} />

      <main>
        <div className="layout-row-container">
          <div className="left-container">
            <Bio />
          </div>

          <div className="right-container">{children}</div>
        </div>
      </main>

      <Footer />
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .layout-row-container {
    display: flex;
    flex-direction: row;
    height: 100%;

    > .left-container {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    > .right-container {
      display: flex;
      flex-direction: column;
      padding: 20px;
      flex: 1;
    }
  }
`

export default Layout
