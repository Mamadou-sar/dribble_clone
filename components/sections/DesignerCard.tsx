import Image from 'next/image';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Bookmark, Eye, Heart } from 'lucide-react';

type DesignerCardProps = {
   image: string;
   title: string;
   author: string;
   authorType: string;
   authorAvatar: string;
   likes: number;
   views: string;
};
export default function DesignerCard({ card }: { card: DesignerCardProps }) {
   const [isHovered, setIsHovered] = useState(false);
   return (
      <div
         className='relative bg-white rounded-lg overflow-hidden group'
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <Image
            src={card.image}
            alt='Design'
            width={200}
            height={200}
            className='object-cover w-full h-full'
         />
         <div className='p-4'>
            <h2 className='text-lg font-bold mb-2'>{card.title}</h2>
            <div className='flex items-center justify-between'>
               <div className='flex items-center'>
                  <Image
                     src={card.authorAvatar}
                     alt='Author'
                     width={200}
                     height={200}
                     className='w-6 h-6 rounded-full object-cover mr-2'
                  />
                  <span>{card.likes}</span>
                  <Badge
                     variant='secondary'
                     className='ml-2 text-sm'
                  >
                     {card.authorType}
                  </Badge>
               </div>
               <div className='flex items-center space-x-2'>
                  <div className='flex items-center'>
                     <Heart className='w-4 h-4 mr-1' />
                     <span className='text-sm'>{card.likes}</span>
                  </div>
                  <div className='flex items-center'>
                     <Eye className='w-4 h-4 mr-1' />
                     <span className='text-sm'>{card.views}</span>
                  </div>
               </div>
            </div>
         </div>
         {isHovered && (
            <div className='absolute inset-0 bg-gradient-to-top from-black to-transparent flex items-end transition-opacity duration-200  '>
               <div className='p-4  w-full'>
                  <div className='flex justify-between items-center text-white'>
                     <div className='font-bold'>{card.title} </div>
                     <div className='flex space-x-2'>
                        <Badge className='bg-primary hover:bg-primary/80 text-primary-foreground p-1.5 rounded-full'>
                           <Bookmark className='w-4 h-4' />
                        </Badge>
                        <Badge className='bg-primary hover:bg-primary/80 text-primary-foreground p-1.5 rounded-full'>
                           <Heart className='w-4 h-4' />
                        </Badge>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
