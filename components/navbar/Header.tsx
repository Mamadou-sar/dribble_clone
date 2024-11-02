'use client';
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuList,
   NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '../ui/button';
import { Menu, Search } from 'lucide-react';
import Link from 'next/link';
import HeaderNavigationMenuContent from './HeaderNavigationMenuContent';
import { Input } from '../ui/input';
import { ModeToggle } from '../mode-toggle';

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <header className='flex justify-between items-center p-4'>
         {/* Mobil menu */}
         <div className='flex items-center lg:hidden'>
            <Sheet
               open={isMenuOpen}
               onOpenChange={setIsMenuOpen}
            >
               <SheetTrigger asChild>
                  <Button
                     variant='ghost'
                     size='icon'
                  >
                     <Menu className='h-6 w-6' />
                     <span className='sr-only'>Open menu</span>
                  </Button>
               </SheetTrigger>
               <SheetContent
                  className='w-full'
                  side='top'
               >
                  <nav className='flex flex-col space-y-4'>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                           <Button
                              variant='ghost'
                              size='icon'
                              className='w-full justify-start'
                           >
                              Find desginers
                           </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                           <DropdownMenuItem>
                              <Link
                                 className='w-full'
                                 href='/'
                              >
                                 Designer search
                              </Link>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              <Link
                                 className='w-full'
                                 href='/'
                              >
                                 Post a job
                              </Link>
                           </DropdownMenuItem>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <Link
                        className='text-sm font-medium text-muted-foreground hover:text-foreground w-full'
                        href='/'
                     >
                        Inspirations
                     </Link>
                     <Link
                        className='text-sm font-medium text-muted-foreground hover:text-foreground w-full'
                        href='/'
                     >
                        Jobs
                     </Link>
                     <Link
                        className='text-sm font-medium text-muted-foreground hover:text-foreground w-full'
                        href='/'
                     >
                        Go Pro
                     </Link>
                  </nav>
               </SheetContent>
            </Sheet>
         </div>
         {/* Desktop menu */}
         <nav className='hidden lg:flex items-center space-x-6'>
            <NavigationMenu>
               <NavigationMenuList>
                  <NavigationMenuItem className='hover:bg-transparent'>
                     <NavigationMenuTrigger>Find designers</NavigationMenuTrigger>
                     <NavigationMenuContent>
                        <div className='w-[250px] gap-3 flex flex-col p-4 items-center'>
                           <HeaderNavigationMenuContent
                              title='Designe search '
                              subtitle='Find designers for our members'
                           />
                           <HeaderNavigationMenuContent
                              title='Designe search '
                              subtitle='Find designers for our members'
                           />
                        </div>
                     </NavigationMenuContent>
                  </NavigationMenuItem>
               </NavigationMenuList>
            </NavigationMenu>
            <Link
               className='text-sm font-medium text-muted-foreground hover:text-foreground'
               href='/'
            >
               Inspirations
            </Link>
            <Link
               className='text-sm font-medium text-muted-foreground hover:text-foreground'
               href='/'
            >
               Jobs
            </Link>
            <Link
               className='text-sm font-medium text-muted-foreground hover:text-foreground'
               href='/'
            >
               Go Pro
            </Link>
         </nav>
         <Link
            href='/'
            className='text-2xl font-bold hover:text-foreground/65'
         >
            Dribble
         </Link>

         <div className='flex items-center space-x-4'>
            <Button
               variant='ghost'
               size='icon'
               className='lg:hidden'
            >
               <Search className='h-5 w-5' />
               <span className='sr-only'>Open search</span>
            </Button>
            <div className='hidden lg:block relative'>
               <Search className='h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground' />
               <Input
                  className='pl-10 pr-5 py-5 rounded-full'
                  placeholder='Search dribble'
                  type='search'
               />
            </div>
            <Button
               className='hidden lg:inline-flex text-sm font-medium hover:bg-transparent'
               variant={'ghost'}
            >
               Login
            </Button>
            <Button
               size={'lg'}
               className='rounded-full  p-6 bg-foreground text-white hover:bg-foreground/80'
            >
               Sign up
            </Button>
            <ModeToggle />
         </div>
      </header>
   );
}
