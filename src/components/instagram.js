import React, { useState, useEffect } from 'react'

const url = `https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables=%7B%22id%22%3A%2234140794436%22%2C%22first%22%3A12%7D`;

function useInstagram() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setPosts(slimUpPosts(data))
    });
  }, []);
  return posts;
}

function slimUpPosts(data) {
  return data.data.user.edge_owner_to_timeline_media.edges.map(edge => ({
    postUrl: `https://instagram.com/p/${edge.node.shortcode}`,
    imageUrl: edge.node.display_url,
    id: edge.node.id,
    caption: edge.node.edge_media_to_caption.edges[0].node.text,
    likes: edge.node.edge_media_preview_like.count,
    comments: edge.node.edge_media_to_comment.count
  }))
}

export default function Instagram() {
  const gramz = useInstagram();

  return (
    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-primary mb-0">#SimplementeUmami</h3>
          <h2 className="mb-5 text-secondary">Instagram</h2>
        </div>
        <div className="row no-gutters">
          {gramz.map(gram => (
            <div className="col-lg-4" key={gram.id}>
              <a className="portfolio-item" href={gram.postUrl}>
                <span className="caption">
                  <span className="caption-content">
                    <h2 style={{fontSize: '24px'}}>
                      <i className="fa fa-heart" style={{marginRight: '5px'}}></i>{gram.likes} 
                      <i className="fa fa-comment" style={{marginLeft: '30px',marginRight: '5px'}}></i>{gram.comments}
                    </h2>
                    <p className="mb-0">
                    </p>
                  </span>
                </span>
                <img className="img-fluid img-responsive" src={gram.imageUrl} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
