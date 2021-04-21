import { Col } from "reactstrap";
import LazyLoad from "react-lazyload";
import styles from "./ImageCard.module.css";

const ImageCard = ({ id, author }) => (
  <Col lg={3} sm={6} xs={12}>
    <div className={`${styles.wrapper} mb-5`}>
      <div className={styles.imagePlaceholder}>
        <LazyLoad height={200} offset={200} once>
          <img
            className={styles.image}
            alt=""
            src={`https://picsum.photos/id/${id}/550/400`}
          />
        </LazyLoad>
      </div>
      <div className={styles.author} aria-label={`Picture taken by ${author}`}>
        {author}
      </div>
    </div>
  </Col>
);

export default ImageCard;
