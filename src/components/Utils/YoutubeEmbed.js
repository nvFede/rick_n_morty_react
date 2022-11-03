import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbedCSS.css";

const YoutubeEmbed = ({ title, embedId }) => (
  <>
  
 {title ? <h1 className="text-2xl mb-5">{title}</h1> : null }

  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  
  </>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default  YoutubeEmbed ;
