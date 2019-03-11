import React from 'react'
import BasePage from '../components/shared/BasePage'
import BaseLayout from '../components/layout/BaseLayout'

class CallBack extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>Verifyng login data...</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default CallBack;