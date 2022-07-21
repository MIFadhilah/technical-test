import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import Moment from 'react-moment';
import Tagline from '../../atoms/Tag/index.js';

export default function ArticleCard({ title, subtitle, tags, writer, date }) {
  return (
    <HStack width={'full'} spacing={'1rem'} alignItems={'stretch'}>
      <Box>
        <Image width={'12rem'} src="/assets/article-img.png" />
      </Box>
      <VStack alignItems={'left'} spacing={'1rem'}>
        <Box colo={'primary.text'} fontWeight={'bold'} fontSize={'1.25rem'}>
          {title}
        </Box>
        <Box width={'34rem'} noOfLines={2} >
          {subtitle}
        </Box>
        <HStack>
          {tags.map((tag, index) => (
            <Tagline tagName={tag} key={index} />
          ))}
        </HStack>
        <HStack>
          <Box>
            <Image src="/assets/avatar.png" />
          </Box>
          <Box>{writer}</Box>
          <BsFillCircleFill size={'4px'} />
          <Box>
            <Moment format="D MMM YYYY" withTitle>
              {date}
            </Moment>
          </Box>
        </HStack>
      </VStack>
    </HStack>
  );
}
