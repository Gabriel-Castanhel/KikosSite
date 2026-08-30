import Carousel from "../component/Carousel/Carousel";
import Navbar from "../component/Navbar/Navbar"

function Home() {

  const images = [
  'src/assets/img/img_carousel1.jpg',
  'src/assets/img/img_carousel2.jpg',
  'src/assets/img/img_carousel3.jpg',
];

  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center h-screen">
      <Carousel images={images} />
    </div>

    <div className="flex justify-center items-center h-screen">
      <p className="text-lg text-white">This is the home page content.</p>
    </div>
    </>
  )
}

export default Home