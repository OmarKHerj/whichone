import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Define the Listing component
export default function Listing() {
  // State to store the fetched post data
  const [postData, setPostData] = useState([]);
  // State to track the number of posts to display
  const [postsToShow, setPostsToShow] = useState(8);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'https://api.example.com/posts' with your actual API endpoint
        const response = await fetch('http://127.0.0.1:8000/');
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  // Function to load more posts
  const loadMorePosts = () => {
    setPostsToShow(postsToShow + 8); // Increase the number of posts to display
  };

  // Render the component
  return (
    <div className="main">
      <div className="categorySelection">
        <div className="tags">
          <div className="selected">
            <div className="selectedFont">All</div>
          </div>
        </div>
        <div className="tags">
          <div className="unSelected">
            <div className="unSelectedFont">Compare</div>
          </div>
        </div>
        <div className="tags">
          <div className="unSelected">
            <div className="unSelectedFont">How To</div>
          </div>
        </div>
        <div className="tags">
          <div className="unSelected">
            <div className="unSelectedFont">Deals</div>
          </div>
        </div>
      </div>
      <div className="listing">
        {postData.slice(0, postsToShow).map((post) => (
          <div className="post" key={post.id}>
            <div className="postImg" >
              <img src={`http://127.0.0.1:8000${post.image}`} alt={post.title} style={{ width: '270px', height: '200px'}}/>
            </div>
            <div className="postText">
              <div className="postCategoryColor">
                <div className="postCategory">{post.category}</div>
              </div>
              <div className="postTitle">{post.title}</div>
              <div className="postReadContainer">
                <Link to={`/post/${post.id}`} className="postRead">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {postsToShow < postData.length && (
        <div className="postReadContainer" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="postRead"  onClick={loadMorePosts}>Load More</div>
        </div>
      )}
    </div>
  );
}
