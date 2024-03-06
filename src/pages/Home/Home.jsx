import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import "./index.css";
import "../../common/css/layout.css";

function Home(props) {
  return (
    <div className="home-container">
      <div className="inner-container">
        <section className="section">
          <div className="section-heading">
            <h3>Popular</h3>
          </div>
          <div className="card-content">
          <BookCard 
              className="card"
              src={`https://admin.gitapress.org/assets/uploads/media-uploader/624e8560d2c85.webp`}
              title={`Book Title`}
              author={`Book Author`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://admin.gitapress.org/assets/uploads/media-uploader/624e8560d2c85.webp`}
              title={`Book Title`}
              author={`Book Author`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://admin.gitapress.org/assets/uploads/media-uploader/624e8560d2c85.webp`}
              title={`Book Title`}
              author={`Book Author`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://admin.gitapress.org/assets/uploads/media-uploader/624e8560d2c85.webp`}
              title={`Book Title`}
              author={`Book Author`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://admin.gitapress.org/assets/uploads/media-uploader/624e8560d2c85.webp`}
              title={`Book Title`}
              author={`Book Author`}
              publisher={`Book Publisher`} />    
          </div>
        </section> 
        
        <section className="section">
          <div className="section-heading">
            <h3>Newest</h3>
          </div>
          <div className="card-content">
          <BookCard 
              className="card"
              src={`https://admin.gitapress.org/assets/uploads/media-uploader/624e7fc34b4b1.webp`}
              title={`Book Title`}
              author={`Book Author`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://admin.gitapress.org/assets/uploads/media-uploader/624e7fc34b4b1.webp`}
              title={`Book Title`}
              author={`Book Author`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://admin.gitapress.org/assets/uploads/media-uploader/624e7fc34b4b1.webp`}
              title={`Book Title`}
              author={`Book Author`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://admin.gitapress.org/assets/uploads/media-uploader/624e7fc34b4b1.webp`}
              title={`Book Title`}
              author={`Book Author`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://admin.gitapress.org/assets/uploads/media-uploader/624e7fc34b4b1.webp`}
              title={`Book Title`}
              author={`Book Author`}
              publisher={`Book Publisher`} />  
          </div>
        </section> 
        
        <section className="section">
          <div className="section-heading">
            <h3>स्वामी अखंडानंद सरस्वती</h3>
          </div>
          <div className="card-content">
          <BookCard 
              className="card"
              src={`https://archive.org/services/img/sankhya-yoga-akhandananda_202301/full/pct:200/0/default.jpg`}
              title={`भक्तियोग`}
              author={`स्वामी अखंडानंद सरस्वती`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cYMzU78wJ_58s1UhKAGH8GCJtAV6APMK07md6VsQulpQiTAxthGu3K545ejDSsJTohQ&usqp=CAU`}
              title={`रास-रस`}
              author={`स्वामी अखंडानंद सरस्वती`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://cdn.exoticindia.com/images/products/thumbnails/t800x600/books/nzc659.jpg`}
              title={`ध्यानयोग`}
              author={`स्वामी अखंडानंद सरस्वती`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books/nzb831.jpg`}
              title={`सांख्ययोग`}
              author={`स्वामी अखंडानंद सरस्वती`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://imgv2-2-f.scribdassets.com/img/document/432716021/original/74ea83e201/1705208191?v=1`}
              title={`वेदांतबोध`}
              author={`स्वामी अखंडानंद सरस्वती`}
              publisher={`Book Publisher`} />  
          </div>
        </section> 
        
        <section className="section">
          <div className="section-heading">
            <h3>स्वामी रामसुखदासजी महाराज</h3>
          </div>
          <div className="card-content">
          <BookCard 
              className="card"
              src={`https://cdn.kobo.com/book-images/af50ed90-2ac7-4f9f-8ffc-02b5dcbfb2bd/1200/1200/False/murtipooja-aur-naamjap-hindi-religious.jpg`}
              title={`मूर्तिपूजा और नामजप`}
              author={`स्वामी रामसुखदासजी महाराज`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://m.media-amazon.com/images/I/81hja6y4Q9L._AC_UF1000,1000_QL80_.jpg`}
              title={`सत्संग का प्रसाद`}
              author={`स्वामी रामसुखदासजी महाराज`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books/gpa085.jpg`}
              title={`भगवन्नाम`}
              author={`स्वामी रामसुखदासजी महाराज`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books/gpa114.jpg`}
              title={`सब साधनों का सार`}
              author={`स्वामी रामसुखदासजी महाराज`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books/gpa447.jpg`}
              title={`सत्य की खोज`}
              author={`स्वामी रामसुखदासजी महाराज`}
              publisher={`Book Publisher`} />  
          </div>
        </section> 
        
        <section className="section">
          <div className="section-heading">
            <h3>Robert E. Svaboda</h3>
          </div>
          <div className="card-content">
          <BookCard 
              className="card"
              src={`https://m.media-amazon.com/images/I/81oWknj7EkL._AC_UF1000,1000_QL80_.jpg`}
              title={`Aghora I`}
              author={`Robert E. Svaboda`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://m.media-amazon.com/images/I/711VYZxxjVL._AC_UF1000,1000_QL80_.jpg`}
              title={`Aghora II`}
              author={`Robert E. Svaboda`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://cdn10.bigcommerce.com/s-g9n04qy/products/719406/images/734515/51mtfRyVGiL._SL1350___05024.1687810454.1280.1280.jpg?c=2`}
              title={`Aghora III`}
              author={`Robert E. Svaboda`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://images-us.bookshop.org/ingram/9780940985629.jpg?height=500&v=v2`}
              title={`The Greateness of Saturn`}
              author={`Robert E. Svaboda`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348387321i/136583.jpg`}
              title={`Light On Life`}
              author={`Robert E. Svaboda`}
              publisher={`Book Publisher`} />  
          </div>
        </section> 

        <section className="section">
          <div className="section-heading">
            <h3>श्री जयदयाल गोयन्दका</h3>
          </div>
          <div className="card-content">
          <BookCard 
              className="card"
              src={`https://admin.gitapress.org/assets/uploads/media-uploader/624e84e26416c.webp`}
              title={`Gems of Truth`}
              author={`श्री जयदयाल गोयन्दका`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://sanatan.in/cdn/shop/products/286_1.jpg?v=1656398310&width=1008`}
              title={`बाल शिक्षा`}
              author={`श्री जयदयाल गोयन्दका`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://rukminim2.flixcart.com/image/850/1000/jxdkpzk0/regionalbooks/d/j/m/chinta-shok-kaise-miten-original-imafhrnqpfudfmsy.jpeg?q=20&crop=false`}
              title={`चिंता शोक कैसे मिटें?`}
              author={`श्री जयदयाल गोयन्दका`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://m.media-amazon.com/images/I/51gm3Nr7uiL._AC_UF1000,1000_QL80_.jpg`}
              title={`पारमार्थिक पत्र`}
              author={`श्री जयदयाल गोयन्दका`}
              publisher={`Book Publisher`} />  
 
            <BookCard 
              className="card"
              src={`https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books/gpa141.jpg`}
              title={`ईश्वर और संसार`}
              author={`श्री जयदयाल गोयन्दका`}
              publisher={`Book Publisher`} />  
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;