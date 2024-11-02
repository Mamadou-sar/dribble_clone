import Header from '@/components/navbar/Header';
import React from 'react';

type Props = {
   children: React.ReactNode;
};
export default function layout({ children }: Props) {
   return (
      <div className='min-h-screen w-full'>
         <Header />
         {children}
      </div>
   );
}
