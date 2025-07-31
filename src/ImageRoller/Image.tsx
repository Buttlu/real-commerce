import './Image.css'

// the files from public/photo_images
const images = [
  "a.JPG",
  "b.JPG",
  "c.jpg",
];

interface ImageData {
  index: number,
  positionNumber: number,
}

export function Image(props: ImageData) {
  return (
    <img 
      src={`/photo_images/${images[props.index%images.length]}`} 
      className={`image`}
      id={`image${props.positionNumber}`} /> 
  )
}