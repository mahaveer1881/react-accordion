import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface AccordionProps {
  item: {
    heading: string;
    desc: string;
  };
}

function Accordion({ item }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToast = () => {
    toast.info('Please Google this question to read more...');
  };
  return (
    <div className='w-[80%] md:w-1/2 mx-auto border-1 border-[#090979] shadow-md rounded-xl bg-[#fcffbc]'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='flex justify-between items-center cursor-pointer py-3 px-3 sm:px-6 text-md sm:text-xl font-semibold rounded-xl text-[#090979] bg-[#fcffbc]'
      >
        <h1>{item.heading}</h1>
        <div>
          {isOpen ? (
            <ChevronUp className='font-bold' />
          ) : (
            <ChevronDown className='font-bold' />
          )}
        </div>
      </div>

      {isOpen ? (
        <div className='bg-[#fdffd2] rounded-b-xl'>
          <p className='border-2 border-[#b6b6ff]'></p>
          <div className='px-6 py-4 rounded-b-lg'>
            <p className=' py-2 text-[#168aba] text-base sm:text-lg'>
              {item.desc}
            </p>
            <button
              onClick={handleToast}
              className='border-2 border-[#b6b6ff] px-6 py-2 mt-6 rounded-md text-lg  text-[#090979] bg-[#faff8e] font-bold'
            >
              Read More...
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Accordion;
