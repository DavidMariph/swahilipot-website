import image4 from '../assets/partner1.jpg';
import image5 from '../assets/partner2.jpg';
import image6 from '../assets/partner3.jpg';
import image7 from '../assets/partner4.jpg';
import GDI from '../assets/GDI.jpeg';
import konza from '../assets/konza.jpeg';
import mombasacountgo from '../assets/mombasacountgo.jpeg';



export default function Partners() {
    return (
      <section id="partners" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <img src={image4} alt="Partner 1" className="w-32" />
            <img src={image5} alt="Partner 2" className="w-32" />
            <img src={image6} alt="Partner 3" className="w-32" />
            <img src={image7} alt="Partner 4" className="w-32" />
            <img src={GDI} alt="GDI" className="w-32" />
            <img src={konza} alt="konza" className="w-32" />
            <img src={mombasacountgo} alt="mombasacountgo" className="w-32" />
           
            

          </div>
        </div>
      </section>
    );
  }