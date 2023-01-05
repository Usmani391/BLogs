import getpostdata from 'components/getmetadata';
import Postpreview from 'components/PostPreview';


const Homepage = () => {
  const postmetadata = getpostdata();
  const postpreviews = postmetadata.map((post) => (
    <Postpreview key={post.slug} {...post}/>
  ));

  return (
    <>
    <div className="flex mx-2 justify-center  ">
      <div className="min-w-min grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto ">{postpreviews}</div>
    </div>
    </>
  );
};

export default Homepage;
