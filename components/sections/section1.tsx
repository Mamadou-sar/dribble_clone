import React from 'react';
import { Button } from '../ui/button';

const SectionOne = () => {
   return (
      <div className='h-full flex flex-col bg-background'>
         <div className='max-w-4xl mx-auto px-4 py-16 text-center'>
            <div className='inline-block px-4 py-2 mb-6 rounded-full bg-pink-100 text-pink-800 text-sm font-medium'>
               Over 3 million ready-to-work creatives!
            </div>
            <h1 className='text-4xl md:text-6xl font-bold font-serif mb-6'>
               Discover the world’s top designers
            </h1>
            <p className='text-xl text-muted-foreground mb-8'>
               Explore work from the most talented and accomplished designers ready to take on your
               next project
            </p>
            <Button
               className='bg-foreground text-white hover:bg-foreground/80 p-6 rounded-full'
               size={'lg'}>
               Get Started
            </Button>
         </div>
      </div>
   );
};

export default SectionOne;
