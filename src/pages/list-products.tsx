import Widget from "components/social-feed/widget";
import Widget4 from "components/user-widgets/widget-4";
import Friends from "components/social-feed/friends";
import Posts from "components/social-feed/posts";

const Index: React.FC = () => {
  return (
    <Widget>
      <div className="w-full mb-4">
        <Widget4 />
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap">
        {/* <div className="w-full lg:w-3/4">
          <Posts />
        </div> */}
        {/* <div className="w-full lg:w-1/4">
          <Friends />
        </div> */}
      </div>
    </Widget>
  );
};
export default Index;
