import { PostMetadata } from './postMetadata';
import fs from 'fs';
import matter from 'gray-matter';

const getmetadata = (): PostMetadata[] => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markedpost = files.filter((files) => files.endsWith('.md'));

  const posts = markedpost.map((filename) => {
    const fileContent = fs.readFileSync(`posts/${filename}`, 'utf-8');
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: filename.replace('.md', ''),
    };
  });
  return posts;
};
export default getmetadata;
