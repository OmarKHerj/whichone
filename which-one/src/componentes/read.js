import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Read() {
  // Use useParams to get the id from the URL
  const { id } = useParams();
  const [post, setPostData] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/posts/${id}/`,{
          method: 'GET',
        });
        const data = await response.json();// Log the fetched data
        setPostData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchRecentPosts = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/`);
            const data = await response.json();
            // Assuming data is an array of posts
            const slicedPosts = data.slice(0, 3); // Get the first three posts
            setRecentPosts(slicedPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    fetchRecentPosts();
}, []);

  if (!post) {
    return <div className="mainPost">Loading...</div>;
  }

  return (
    <><div className="heading-page header-text">
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-content">
                <h4>Post Details</h4>
                <h2>Single blog post</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      <section className="blog-posts grid-system" key={post.id}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="all-blog-posts">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="blog-post">
                        <div className="blog-thumb">
                          <img src={`http://127.0.0.1:8000${post.image}`} alt=""/>
                          </div>
                        <div className="down-content">
                          <span>{post.category_names}</span>
                          <a href="post-details.html"><h4>{post.title}</h4></a>
                          <ul className="post-info">
                            <li><a href="#">Admin</a></li>
                            <li><a href="#">May 12, 2020</a></li>
                            <li><a href="#">10 Comments</a></li>
                          </ul>
                          <p>{post.description}</p>
                              <div className="post-options">
                                <div className="row">
                                  <div className="col-6">
                                    <ul className="post-tags">
                                      <li><i className="fa fa-tags"></i></li>
                                      <li><a href="#">Best Templates</a>,</li>
                                      <li><a href="#">TemplateMo</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-6">
                                    <ul className="post-share">
                                      <li><i className="fa fa-share-alt"></i></li>
                                      <li><a href="#">Facebook</a>,</li>
                                      <li><a href="#"> Twitter</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                            <input type="text" name="q" className="searchText" placeholder="type to search..." autoComplete="on"/>
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
                            {recentPosts.map((post) => (
                                                    <li key={post.id}>
                                                        <Link to={`/post/${post.id}`}>
                                                        <h5>
                                                            {post.title}
                                                        </h5></Link>
                                                    </li>))}
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
                            <li><Link to="/compare">- Compare</Link></li>
                          <li><Link to={"/how-to"}>- How To</Link></li>
                          <li><Link to={"/deals"}>- Deals</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>                          
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section></>
  );
}
