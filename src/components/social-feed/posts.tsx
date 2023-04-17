import { FiClock } from "react-icons/fi";
import posts from "json/posts.json";
import Input from "./input";
import Comments from "./comments";
import Icons from "./icons";

export type Post = {
  title: string;
  sentence: string;
  description: string;
  sentences: string;
  paragraphs: string;
  number: number;
  largeImage: string;
  img: string;
  timeago: string;
};

const Posts: React.FC = () => {
  const items: Post[] = posts;
  return (
    <div className="w-full">
      <input type="file" className="w-full h-20 px-2 mb-8 border-gray-300 rounded-md border" placeholder="Product Description" />
    </div>
  );
};

export default Posts;
