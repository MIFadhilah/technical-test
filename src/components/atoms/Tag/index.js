import React from 'react';

import { Tag } from '@chakra-ui/react';

export default function Tagline({ tagName }) {
  return (
    <Tag
      variant={'outline'}
      rounded="full"
      size={'md'}
      color={'primary.main'}
      boxShadow={'inset 0 0 0px 1px #47AF64'}
    >
      {tagName}
    </Tag>
  );
}
