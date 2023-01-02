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
  <Layout title="SafeTube">
    <Container>
      <Title>
        SafeTube <Badge>2022-</Badge>
      </Title>
      <P>
        Lightweight build of YouTube with a minimilistic design 
        where users are protected from potentially harmful media. 
        Features: hide comments and dislikes, child-friendly 
        interface that prevents registering, subscribing, and donating.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://safetube.netlify.app/">
            https://safetube.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, MUI, Node, JavaScript, Tailwind, HTML, RapidAPI, Axios, Emotion
          </span>
        </ListItem>
        <ListItem>
          <Meta>Repo</Meta>
          <Link target="_blank" href="https://github.com/vua11/safetube/">
            https://github.com/vua11/safetube/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/safetube.png" alt="safetube" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
