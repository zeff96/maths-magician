import { useEffect, useState } from 'react';
import './Quotes.scss';

const category = 'education';
const baseUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

const Quotes = () => {
  const [post, setPost] = useState(null);
  const [pending, isPending] = useState(true);
  const [error, showError] = useState(null);
  useEffect(() => {
    fetch(baseUrl, {
      headers: {
        'X-Api-Key': 'nw9eQpDWTpDeal/wtrsxYg==RlidSTGQe0KjjXlw',
      },
    })
      .then((res) => {
        if (!res.ok) throw Error('data could not be retrieved!');
        return res.json();
      })
      .then((data) => {
        const body = `${data[0].quote}  -${data[0].author}`;
        setPost(body);
        isPending(false);
        showError(null);
      })
      .catch((e) => {
        showError(e.message);
        isPending(false);
      });
  }, []);
  return (
    <div className="quotes">
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      {post && <div>{post}</div>}
    </div>
  );
};

export default Quotes;
