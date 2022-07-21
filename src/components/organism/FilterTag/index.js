import { Flex } from '@chakra-ui/react';
import React from 'react';
import Tagline from '../../atoms/Tag/index.js';

export default function FilterTag({ TagList }) {
  return (
    <>
    <Flex gap={"1rem"} flexWrap={"wrap"} >
      {TagList.map((tag, index) => (
        <Tagline key={index} tagName={tag} />
      ))}
    </Flex>
    </>
  );
}
