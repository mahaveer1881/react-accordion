import Accordion from './Accordion';

const data = [
  {
    heading: 'What is Geopolitics?',
    desc: 'Geopolitics is the study of how geography, resources, and power dynamics influence political decisions and international relations. It examines how factors like location, natural resources, and military capabilities shape the behavior of states and other international actors on the global stage.',
  },
  {
    heading: 'What are the main drivers of geopolitics?',
    desc: 'Geopolitics is driven by a complex interplay of factors including geography (such as proximity to key resources or strategic locations), economic interests (access to markets, resources, or trade routes), military capabilities (defense and projection of power), ideology (political beliefs and values), and historical relationships among nations. ',
  },
  {
    heading: 'How does geopolitics affect international relations?',
    desc: 'Geopolitics shapes international relations by influencing how countries interact with each other, form alliances, negotiate treaties, and pursue their national interests. It determines which regions or issues become focal points for conflict, cooperation, or competition among nations.',
  },
  {
    heading: 'What role does geopolitics play in global conflicts?',
    desc: 'Geopolitics often serves as a critical factor in triggering and sustaining conflicts. Disputes over territory, access to resources (such as oil or water), strategic military positions, or ideological differences can escalate into international conflicts as states compete to secure their interests and influence.',
  },
  {
    heading: 'How is geopolitics changing in the modern world?',
    desc: 'In the modern world, geopolitics is evolving due to factors like globalization, technological advancements, environmental challenges, and shifting power dynamics. Issues such as cybersecurity, climate change, economic interdependence, and non-state actors (like multinational corporations and terrorist organizations) are increasingly influencing geopolitical strategies and outcomes.',
  },
];

function Home() {
  return (
    <div className=' h-screen overflow-auto'>
      <h1 className='text-center pt-5 sm:pt-6 text-2xl sm:text-3xl font-semibold text-white '>
        A Simple Accordion
      </h1>
      <div className='space-y-4 my-10'>
        {data.map((item, index) => {
          return <Accordion key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
