import React from 'react'
import BasePage from '../components/shared/BasePage'
import BaseLayout from '../components/layout/BaseLayout'

class Blogs extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>Blog's Page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Blogs;