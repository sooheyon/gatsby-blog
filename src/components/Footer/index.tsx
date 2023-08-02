import React from "react"
import config from "../../configs"
import styled from "styled-components"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"

const Footer = () => {
  const author = config.bio.author

  return (
    <FooterStyled>
      <div className="left-container">
        <div className="footer-copyright">
          © {new Date().getFullYear()} {author}, Built with{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
        <div className="footer-info">
          {config.bio?.location && <p>{config.bio?.location}</p>}
        </div>
      </div>

      <div className="right-container">
        <div className="contact-info-container">
          {config.bio?.email && (
            <a
              className="icon-wrap"
              href={`mailto:${config.bio?.email}`}
              rel="noreferrer"
              target="_blank"
            >
              <MdAlternateEmail size={20} />
            </a>
          )}

          {config.bio?.linkedin && (
            <a
              className="icon-wrap"
              href={config.bio.linkedin}
              rel="external"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
          )}
          {config.bio?.github && (
            <a
              className="icon-wrap"
              href={config.bio.github}
              rel="external"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: row;
  padding: 20px 0px 40px 0px;

  .left-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px 40px;

    > .footer-copyright {
      display: flex;
      flex-direction: row;
    }
  }

  .right-container {
    display: flex;
    flex-direction: column;
    padding: 20px 40px;

    .contact-info-container {
      display: flex;
      flex-direction: row;
      padding: 12px 0px 0px 0px;

      a.icon-wrap {
        margin: 0px 0px 0px 8px;

        &:nth-child(1) {
          margin: 0;
        }
      }
    }
  }
`

export default Footer
