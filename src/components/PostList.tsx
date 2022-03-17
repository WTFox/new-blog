import { Divider, Heading, Stack } from "@chakra-ui/react";

import PostListItem from "./PostListItem";
import { PostListItemProps } from "./PostListItem";
import Section from "./Section";

// TODO: properly type this
export const PostList = ({ posts }) => {
  posts = posts.sort((a: PostListItemProps, b: PostListItemProps) => {
    return new Date(a.frontMatter.date) < new Date(b.frontMatter.date);
  });

  return (
    <Stack px={{ base: 8, lg: 20 }}>
      <Section pb={5} delay={0.1}>
        <Heading id="Posts" size="lg">
          Writings
        </Heading>
        <Divider pt={5} size={"md"} />
      </Section>
      {posts.map((post: PostListItemProps, index: number) => {
        return (
          <Section key={index} delay={(index + 1) / 10 + 0.3}>
            <PostListItem {...post} />
          </Section>
        );
      })}
    </Stack>
  );
};
