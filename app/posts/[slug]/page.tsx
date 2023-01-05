import getpostdata from 'components/getmetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const postContent = fs.readFileSync(file, `utf-8`);
  const matterResult = matter(postContent);
  return matterResult.content;
};
export const generateStaticParams = async () => {
  const post = getpostdata();
  return post.map((pos) => ({ slug: pos.slug }));
};

const page = (props: any) => {
  const slug1 = props.params.slug;
  const data = getPostContent(slug1);
  return (
    <>
        
      
      <div className="mx-auto w-11/12  overscroll-x-none content-center md:w-4/5 ">
          <article className="break-word mx-auto px-1.5  prose  overflow-hidden md:min-w-fit md:prose-xl ">
          <Link
        href="/"
        className="rounded-lg mx-auto ml-12 bg-black py-1.5 px-4 font-mono  font-semibold text-white no-underline shadow-md hover:shadow-yellow-200  "
      >
        Home
      </Link>
          <div className="w-full mt-6 text-2xl font-bold md:mx-auto md:text-5xl">
          This is the slug page{slug1}
        </div>
            <Markdown >{data}</Markdown>
          </article>
        
      </div>
    </>
  );
};
export default page;
