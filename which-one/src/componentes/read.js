import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Read() {
  // Use useParams to get the id from the URL
  const { id } = useParams();
  const [post, setPostData] = useState([]);

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

  if (!post) {
    return <div className="mainPost">Loading...</div>;
  }

  return (
    <div>
      {/* Use {} for JavaScript expressions inside JSX */}
        <div key={post.id}>
          <div className="title">{post.title}</div>
          <div className="mainPost">
            <h3>{post.description}</h3>
          </div>
        </div>
    </div>
  );
}
