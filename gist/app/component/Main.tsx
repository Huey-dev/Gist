import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

interface Post {
    id: number; // Add the id property to match your data structure
    title: string;
    content: string;
  }
  
  interface MainProps {
    posts: Post[]; // Use the Post interface instead of redefining it
    title: string;
  }

export default function Main(props: MainProps) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <div key={post.id}>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          <Typography paragraph>
            {post.content}
          </Typography>
        </div>
      ))}
    </Grid>
  );
}
