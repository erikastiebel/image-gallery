import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    images &&
    images.map((image) => (
      <ImageCard key={image.id} id={image.id} author={image.author} />
    ))
  );
};

export default ImageGallery;
