import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbUniswapv4 from '../public/images/works/uniswapv4.png'
import thumbVushop from '../public/images/works/vushop.png'
import thumbSafetube from '../public/images/works/safetube.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="uniswapv4"
            title="Uniswap V4"
            thumbnail={thumbUniswapv4}
          >
            Built on top of Uniswap V3, users can trade cryptocurrencies 
            on the Ethereum blockchain through a Web3 dApp.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="vushop"
            title="VuShop"
            thumbnail={thumbVushop}
          >
            Ecommerce app with full CRUD capabilities where owners can 
            manage their stores on the go using a headless CMS.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="safetube"
            title="SafeTube"
            thumbnail={thumbSafetube}
          >
            Lightweight build of YouTube with a minimilistic design 
            where users are protected from potentially harmful media.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
