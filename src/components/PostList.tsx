import { Heading, Stack } from "@chakra-ui/react";

import PostListItem from "./PostListItem";
import Section from "./Section";

export const PostList = ({ posts }) => {
  return (
    <Stack alignContent="center" px={20}>
      <Section pb={20} delay={0.1}>
        <Heading size="3xl">Posts</Heading>
      </Section>
      {posts.map((post, index) => {
        return (
          <Section delay={(index + 1) / 10 + 0.3}>
            <PostListItem {...post.frontMatter} />
          </Section>
        );
      })}
    </Stack>
  );
};
