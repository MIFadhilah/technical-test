import { StackDivider, VStack } from '@chakra-ui/react';
import React from 'react';
import ArticleCard from '../../molecules/ArticleCard/index.js';

export default function ArticleCardList({ DATA_ARTICLE }) {
  return (
    <VStack alignItems={'left'} spacing={'2rem'} divider={<StackDivider />}>
      {DATA_ARTICLE.map((data, index) => (
        <ArticleCard
          key={index}
          title={data.title}
          subtitle={data.subtitle}
          tags={data.tags}
          writer={data.user_name}
          date={data.created_date}
        />
      ))}
    </VStack>
  );
}
