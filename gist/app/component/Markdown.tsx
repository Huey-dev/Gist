import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface Post {
  id: number;
  title: string;
  content: string;
}

const MarkdownListItem = (props: any) => {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
};

const Markdown = (props: { post: Post }) => {
  const { post } = props;

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Typography paragraph>
        {post.content}
      </Typography>
    </div>
  );
};

export default Markdown;
