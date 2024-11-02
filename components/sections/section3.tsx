'use client';

import DesignerCard from './DesignerCard';

const designCards = [
   {
      image: '/img.jpg?height=400&width=400',
      title: 'Kia Branding',
      author: 'Lepisov Branding',
      authorType: 'TEAM',
      authorAvatar: '/img.jpg?height=40&width=40',
      likes: 112,
      views: '13.7k',
   },
   {
      image: '/img.jpg?height=400&width=400',
      title: 'Music Streaming App',
      author: 'Yehor Kosinov',
      authorType: 'PRO',
      authorAvatar: '/img.jpg?height=40&width=40',
      likes: 73,
      views: '9.3k',
   },
   {
      image: '/img.jpg?height=400&width=400',
      title: '99finder',
      author: 'woop',
      authorType: 'TEAM',
      authorAvatar: '/img.jpg?height=40&width=40',
      likes: 74,
      views: '9.9k',
   },
   {
      image: '/img.jpg?height=400&width=400',
      title: 'Logo Collection',
      author: 'Mihai Dolganiuc',
      authorType: 'PRO',
      authorAvatar: '/img.jpg?height=40&width=40',
      likes: 54,
      views: '4.5k',
   },
   {
      image: '/img.jpg?height=400&width=400',
      title: 'Kia Branding',
      author: 'Lepisov Branding',
      authorType: 'TEAM',
      authorAvatar: '/img.jpg?height=40&width=40',
      likes: 112,
      views: '13.7k',
   },
   {
      image: '/img.jpg?height=400&width=400',
      title: 'Music Streaming App',
      author: 'Yehor Kosinov',
      authorType: 'PRO',
      authorAvatar: '/img.jpg?height=40&width=40',
      likes: 73,
      views: '9.3k',
   },
   {
      image: '/img.jpg?height=400&width=400',
      title: '99finder',
      author: 'woop',
      authorType: 'TEAM',
      authorAvatar: '/img.jpg?height=40&width=40',
      likes: 74,
      views: '9.9k',
   },
   {
      image: '/img.jpg?height=400&width=400',
      title: 'Logo Collection',
      author: 'Mihai Dolganiuc',
      authorType: 'PRO',
      authorAvatar: '/img.jpg?height=40&width=40',
      likes: 54,
      views: '4.5k',
   },
];

function SectionThree() {
   return (
      <div className='container mx-auto px-4 py-8'>
         <h1 className='text-4xl font-medium my-16 text-center'>Expore inspiring designs</h1>
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {designCards.map((card, index) => (
               <DesignerCard
                  key={index}
                  card={card}
               />
            ))}
         </div>
      </div>
   );
}

export default SectionThree;
