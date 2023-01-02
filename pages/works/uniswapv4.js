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
  <Layout title="Uniswap V4">
    <Container>
      <Title>
        Uniswap V4 <Badge>2022-</Badge>
      </Title>
      <P>
        Built on top of Uniswap V3, users can trade cryptocurrencies 
        on the Ethereum blockchain through a Web3 dApp. Features: 
        create your own ERC20 tokens, live smart contract data 
        fetching, rapid exchange, MetaMask integration.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://uniswap-v4.netlify.app/">
            https://uniswap-v4.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Node, JavaScript, Tailwind, HTML, Uniswap, Cranq, 
            UseDApp, Alchemy, Goerli, Etherscan
          </span>
        </ListItem>
        <ListItem>
          <Meta>Repo</Meta>
          <Link target="_blank" href="https://github.com/vua11/uniswap-v4/">
            https://github.com/vua11/uniswap-v4/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/uniswapv4.png" alt="uniswapv4" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
