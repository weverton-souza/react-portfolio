import { Container } from "reactstrap"

const BasePage = ({className, children}) => {
  return (
    <div classeName={`base-page ${ className }`}>
      <Container>
        { children }
      </Container>
    </div>
  )
}

BasePage.defaultProp = {
  className: ''
}

export default BasePage