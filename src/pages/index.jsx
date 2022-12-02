import React from 'react';

import InfoBlock from '../components/infoBlock';
import Header from '../components/header';
import Footer from '../components/footer';
import Slider from '../components/slider';
import {blockHeader, blockDescription} from '../__mocks__/';
import bigLadyJulia from '../assets/images/BigLadyJulia.jpg';
import bigLadyTaisiia from '../assets/images/BigLadyTaisiia.jpg';

import bigLadyJulia2 from '../assets/images/BigLadyJulia2.jpg';
import bigLadyTaisiia2 from '../assets/images/BigLadyTaisiia2.jpg';

import 'url:../assets/fonts/OrchideaPro-Regular.ttf';

const MainPage = () => {
  return (
    <div>
      <Header />
      <InfoBlock
        topImageSource={bigLadyJulia}
        topHeaderText={blockHeader}
        topDescriptionText={blockDescription}

        bottomImageSource={bigLadyTaisiia}
        bottomHeaderText={blockHeader}
        bottomDescriptionText={blockDescription}
      />
      <Slider />
      <InfoBlock
        topImageSource={bigLadyJulia2}
        topHeaderText={blockHeader}
        topDescriptionText={blockDescription}

        bottomImageSource={bigLadyTaisiia2}
        bottomHeaderText={blockHeader}
        bottomDescriptionText={blockDescription}
      />
      <Footer />
    </div>
  );
};

// const MainPage = () => (
//   <ReactFullpage
//     scrollOverflow={true}
//     scrollHorizontally={true}
//     render={({state, fullpageApi}) => {
//       return (
//         // <div>
//       // <Header />
//         <ReactFullpage.Wrapper>
//           <div>
//             <div className='section fp-auto-height'>
//               <InfoBlock
//                 topImageSource={bigLadyJulia}
//                 topHeaderText={blockHeader}
//                 topDescriptionText={blockDescription}

//                 bottomImageSource={bigLadyTaisiia}
//                 bottomHeaderText={blockHeader}
//                 bottomDescriptionText={blockDescription}
//               />
//             </div>
//             <div className='section'>
//               <Slider />
//             </div>
//             <div className='section fp-auto-height-responsive' >
//               <InfoBlock
//                 topImageSource={bigLadyJulia2}
//                 topHeaderText={blockHeader}
//                 topDescriptionText={blockDescription}

//                 bottomImageSource={bigLadyTaisiia2}
//                 bottomHeaderText={blockHeader}
//                 bottomDescriptionText={blockDescription}
//               />
//             </div>
//           </div>
//         </ReactFullpage.Wrapper>
//         // </div>
//       );
//     }}
//   />
// );


export default MainPage;
