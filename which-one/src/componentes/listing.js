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
    <>
      <section className="blog-posts">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="all-blog-posts">
                <div className="row">
                {postData.slice(0, postsToShow).map((post) => (
                  <div className="col-lg-12" key={post.id}>
                    <div className="blog-post">
                      <div className="blog-thumb">
                        <img src={`http://127.0.0.1:8000${post.image}`} alt="" />
                      </div>
                      <div className="down-content">
                        <span>{post.category_names}</span>
                        <a href="post-details.html">
                          <h4>{post.title}</h4>
                        </a>
                        <ul className="post-info">
                          <li>
                            <a href="#">Admin</a>
                          </li>
                          <li>
                            <a href="#">May 31, 2020</a>
                          </li>
                          <li>
                            <a href="#">12 Comments</a>
                          </li>
                        </ul>
                        <p>
                          {post.description}{" "}
                          <Link className="main-button" to={`/post/${post.id}`}>
                            Read more
                          </Link>
                        </p>
                        <div className="post-options">
                          <div className="row">
                            <div className="col-6">
                              <ul className="post-tags">
                                <li>
                                  <i className="fa fa-tags"></i>
                                </li>
                                <li>
                                  <a href="#">Beauty</a>,
                                </li>
                                <li>
                                  <a href="#">Nature</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-6">
                              <ul className="post-share">
                                <li>
                                  <i className="fa fa-share-alt"></i>
                                </li>
                                <li>
                                  <a href="#">Facebook</a>,
                                </li>
                                <li>
                                  <a href="#"> Twitter</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>))}

                  <div className="col-lg-12">
                  {postsToShow < postData.length && (
                    <div className="main-button">
                      <a onClick={loadMorePosts}>View All Posts</a>
                    </div>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sidebar-item search">
                      <form id="search_form" name="gs" method="GET" action="#">
                        <input
                          type="text"
                          name="q"
                          className="searchText"
                          placeholder="type to search..."
                          autoComplete="on"
                        />
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="sidebar-item recent-posts">
                      <div className="sidebar-heading">
                        <h2>Recent Posts</h2>
                      </div>
                      <div className="content">
                        <ul>
                          <li>
                            <a href="post-details.html">
                              <h5>
                                Vestibulum id turpis porttitor sapien facilisis
                                scelerisque
                              </h5>
                              <span>May 31, 2020</span>
                            </a>
                          </li>
                          <li>
                            <a href="post-details.html">
                              <h5>
                                Suspendisse et metus nec libero ultrices varius
                                eget in risus
                              </h5>
                              <span>May 28, 2020</span>
                            </a>
                          </li>
                          <li>
                            <a href="post-details.html">
                              <h5>
                                Swag hella echo park leggings, shaman cornhole
                                ethical coloring
                              </h5>
                              <span>May 14, 2020</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="sidebar-item categories">
                      <div className="sidebar-heading">
                        <h2>Categories</h2>
                      </div>
                      <div className="content">
                        <ul>
                          <li>
                            <a href="#">- Nature Lifestyle</a>
                          </li>
                          <li>
                            <a href="#">- Awesome Layouts</a>
                          </li>
                          <li>
                            <a href="#">- Creative Ideas</a>
                          </li>
                          <li>
                            <a href="#">- Responsive Templates</a>
                          </li>
                          <li>
                            <a href="#">- HTML5 / CSS3 Templates</a>
                          </li>
                          <li>
                            <a href="#">- Creative &amp; Unique</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="sidebar-item tags">
                      <div className="sidebar-heading">
                        <h2>Tag Clouds</h2>
                      </div>
                      <div className="content">
                        <ul>
                          <li>
                            <a href="#">Lifestyle</a>
                          </li>
                          <li>
                            <a href="#">Creative</a>
                          </li>
                          <li>
                            <a href="#">HTML5</a>
                          </li>
                          <li>
                            <a href="#">Inspiration</a>
                          </li>
                          <li>
                            <a href="#">Motivation</a>
                          </li>
                          <li>
                            <a href="#">PSD</a>
                          </li>
                          <li>
                            <a href="#">Responsive</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
