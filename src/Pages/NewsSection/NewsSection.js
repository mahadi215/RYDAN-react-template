import React from 'react';
import codingimg from '../../assest/images/coding.jpg'
import gpximg from '../../assest/images/gpx.jpeg'
import marketingimg from '../../assest/images/marketing.jpeg'

const NewsSection = () => {
    const newses = [
        {
            date: 'by Admin 10 jan, 2023',
            image: codingimg,
            title: 'Code like a pro developer.',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        },
        {
            date: 'by Admin 3 jan, 2023',
            image: gpximg,
            title: 'Vector Art like a pro Grapix Designer.',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        },
        {
            date: 'by Admin 17 jan, 2023',
            image: marketingimg,
            title: 'How to grow your marketing knowlegde.',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        },
    ]
    return (
        <section className='p-16'>
            <h2 className='text-2xl font-bold text-center mb-2'>LATEST BLOG</h2>
            <div className='lg:p-10 lg:px-20 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-10 w-full overflow-hidden '>
                {
                    newses.map(news => <div key={news.index}
                        className=" card cursor-pointer shadow-md overflow-hidden border-b-4 hover:border-blue-800">
                        <img className='w-full h-1/2 rounded' src={news.image} alt="Movie" />
                        <div className="card-body">
                            <h2 className="card-title">{news.title}</h2>
                            <p>{news.date}</p>
                            <p>{news.des}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default NewsSection;