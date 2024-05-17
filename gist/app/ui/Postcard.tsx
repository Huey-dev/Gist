import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PostCard = ({ post }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {post.date}
        </Typography>
        <Typography variant="body2" component="p">
          {post.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
