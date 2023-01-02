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
  <Layout title="ChatGPT App">
    <Container>
      <Title>
        ChatGPT App <Badge>2023</Badge>
      </Title>
      <P>
      Implemented a fully-functioning ChatGPT application to test out the OpenAI API and learn how to take advantage of text/code completion, image generation, fine-tuning, and embeddings.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://chatgpt-vua11.vercel.app">
            https://chatgpt-vua11.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, Node.js/Express, HTML, CSS, Vite</span>
        </ListItem>
        <ListItem>
          <Meta>Repo</Meta>
          <Link target="_blank" href="https://github.com/vua11/chatgpt-app">
            https://github.com/vua11/chatgpt-app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/chatgpt.png" alt="chatgpt" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'