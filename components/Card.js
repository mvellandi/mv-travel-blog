import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { forwardRef } from "react";
import Tag from "./Tag";

// eslint-disable-next-line react/display-name
const Card = forwardRef(({ onClick, href, post }, ref) => {
  const { title, publishedAt, mainImage, username, authorImage, categories } =
    post;

  return (
    <div className="card-container" href={href} onClick={onClick} ref={ref}>
      <h2>{title}</h2>
      <p>Published on: {new Date(publishedAt).toDateString()}</p>

      <div className="image-container">
        <Image
          className="main-image"
          alt={title + " image"}
          src={urlFor(mainImage).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <hr />

      <div className="info-container">
        <p>Posted by: {username}</p>
        <div className="image-container">
          <Image
            className="avatar"
            alt={username + " avatar"}
            src={urlFor(authorImage).url(50)}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="tag-container">
        {categories.map((category) => (
          <div key={category._id}>
            {category && <Tag title={category?.title} />}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Card;
