import { schema, normalize } from 'normalizr';

// schema definitions
const comments = new schema.Entity('comments');
const posts = new schema.Entity('posts', {
  comments: [comments],
});
const postsList = [posts];

const postseNormalizer = postsResult => normalize(postsResult, postsList);

export default postseNormalizer;
