import Link from "next/link";
import { PostMetadata } from "./postMetadata";

const Postpreview = (props:PostMetadata) => {
  return (
    <div className=" w-full border-gray-600  border-1 shadow-md shadow-purple-900 rounded-lg p-4 duration-200 hover:translate-y-3 ">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="no-underline text-purple-900 font-bold">{props.title}</h2>
      </Link>
      <p className="font-medium">{props.subtitle}</p>
      <p className="font-bold">{props.date}</p>
    </div>
  );
};
export default Postpreview;
