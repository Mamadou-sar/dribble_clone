import React from 'react';

type HeaderNavigationMenuContentProps = {
   title: string;
   subtitle: string;
};
export default function HeaderNavigationMenuContent({
   title,
   subtitle,
}: HeaderNavigationMenuContentProps) {
   return (
      <div className='w-full flex flex-col space-y-1'>
         <div className='font-bold'>{title}</div>
         <div className='text-sm'>{subtitle}</div>
      </div>
   );
}
