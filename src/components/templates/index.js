import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  BsArrowLeft,
  BsChevronDown,
  BsChevronRight,
  BsSearch,
} from 'react-icons/bs';

import DATA_ARTICLES from '../../lib/data/article.json';
import DATA_TAGS from '../../lib/data/tags.json';
import ArticleCardList from '../organism/ArticleCardList/index.js';
import FilterTag from '../organism/FilterTag/index.js';

export default function AgreeTechnicalTest() {
  const [keyword, setKeyword] = React.useState('');

  const handleSearch = e => {
    setKeyword(e.target.value);
  };

  console.log(DATA_ARTICLES.data);
  return (
    <>
      <Container maxW={'1440px'}>
        <HStack my={'2rem'}>
          <Box>
            <BsArrowLeft />
          </Box>
          <Box
            color={'secondary.text'}
            fontSize={'1.25rem'}
            fontWeight={'medium'}
          >
            Kembali Kehalaman Utama
          </Box>
        </HStack>
        <HStack spacing={'1rem'} alignItems={'stretch'}>
          <Box flex={2} p={'2rem'}>
            <VStack alignItems={'left'} spacing={'1.5rem'}>
              <Box color={'primary.text'} fontWeight={'bold'} fontSize={'2rem'}>
                Artikel Agreepedia
              </Box>
              {keyword === '' ? (
                <Box color={'secondary.text'} fontSize={'1.25rem'}>
                  Menampilkan{' '}
                  <Box as="span" fontWeight={'medium'}>
                    semua artikel
                  </Box>{' '}
                </Box>
              ) : (
                <Box color={'secondary.text'} fontSize={'1.25rem'}>
                  Menampilkan pencarian kata kunci
                  <Box as="span" fontWeight={'medium'}>
                    {`"${keyword}"`}
                  </Box>{' '}
                </Box>
              )}
              <Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant="outline"
                    rightIcon={<BsChevronDown />}
                  >
                    Urutkan : Terbaru
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Terbaru</MenuItem>
                    <MenuItem>Terlama</MenuItem>
                    <MenuItem>Rekomendasi</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </VStack>
            <Box mt={'3rem'}>
              <ArticleCardList
                DATA_ARTICLE={DATA_ARTICLES.data.filter(data => {
                  return (
                    data.title.toLowerCase().includes(keyword.toLowerCase()) ||
                    data.user_name.toLowerCase().includes(keyword.toLowerCase())
                  );
                })}
              />
            </Box>
          </Box>
          <Box>
            <Divider orientation={'vertical'} h={'50rem'} position={'fixed'} />
          </Box>
          <Box flex={1} p={'2rem'}>
            <Box position={'fixed'} maxW={'25rem'}>
              <VStack alignItems={'left'} spacing={'1.5rem'}>
                <InputGroup>
                  <Input
                    placeholder="Cari artikel dan penulis disini"
                    rounded={'full'}
                    onChange={handleSearch}
                    size={'lg'}
                  />
                  <InputRightElement
                    children={<BsSearch size={24} />}
                    mr={2}
                    mt={1}
                  />
                </InputGroup>
                <Box color={'secondary.text'} fontSize={'1.25rem'}>
                  Atau
                </Box>
                <Box color={'primari.text'} fontWeight={'bold'}>
                  Cari Artikel Berdasarkan Tag
                </Box>
                <FilterTag TagList={DATA_TAGS.list} />
                <HStack>
                  <BsChevronDown />
                  <Box fontSize={'1rem'} fontWeight={'medium'}>
                    Lihat Lebih Banyak
                  </Box>
                </HStack>
              </VStack>

              <VStack alignItems={'left'} my={'2rem'}>
                <Divider />
                <HStack spacing={'3rem'}>
                  <VStack alignItems={'left'}>
                    <Box
                      color={'primary.text'}
                      fontWeight={'bold'}
                      fontSize={'3rem'}
                    >
                      1.1RB
                    </Box>
                    <Box fontWeight={'medium'} fontSize={'1.5rem'}>
                      Artikel
                    </Box>
                  </VStack>
                  <VStack alignItems={'left'}>
                    <Box
                      color={'primary.text'}
                      fontWeight={'bold'}
                      fontSize={'3rem'}
                    >
                      99+
                    </Box>
                    <Box fontWeight={'medium'} fontSize={'1.5rem'}>
                      Penulis
                    </Box>
                  </VStack>
                </HStack>
                <Divider />
              </VStack>

              <Box
                mt={'3rem'}
                position={'relative'}
                bg={'card.background'}
                p={'1.5rem'}
                borderRadius={'0.8rem'}
              >
                <VStack alignItems={'left'} spacing={'1.5rem'}>
                  <Box
                    color={'primary.text'}
                    fontWeight={'bold'}
                    fontSize={'1.5rem'}
                  >
                    Ayo berbagi pengetahuan
                  </Box>
                  <Box>
                    Tulis artikel dan berikan manfaatnya bagi orang banyak
                  </Box>
                  <Button
                    width={'40%'}
                    background={'primary.main'}
                    color={'white'}
                    size={'lg'}
                    rightIcon={<BsChevronRight />}
                    _hover={{
                      background: 'primary.text',
                    }}
                  >
                    Tulis Artikel
                  </Button>
                </VStack>
                <Box position={'absolute'} right={0} bottom={0}>
                  <Image src="/assets/megaphone.png" />
                </Box>
              </Box>
            </Box>
          </Box>
        </HStack>
      </Container>
    </>
  );
}
