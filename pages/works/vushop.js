import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="VuShop">
    <Container>
      <Title>
        VuShop <Badge>2022-</Badge>
      </Title>
      <P>
        Ecommerce app with full CRUD capabilities where owners can 
        manage their stores on the go using a headless CMS. Features: 
        Sanity platform for simple product management, real payment 
        functionality with Stripe, modern UI/UX.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://vushop.vercel.app/">
            https://vushop.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Next, Sanity, Node, JavaScript, Tailwind, HTML, Stripe, Babel, ESLint, Canvas
          </span>
        </ListItem>
        <ListItem>
          <Meta>Repo</Meta>
          <Link target="_blank" href="https://github.com/vua11/vushop/">
            https://github.com/vua11/vushop/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/vushop.png" alt="vushop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
