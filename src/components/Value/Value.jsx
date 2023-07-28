import React from 'react';
import './value.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion.jsx';

function Value() {
  // Initialize the expandedIndex state
  let expandedIndex = 0;

  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        {/* left side*/}
        <div className='v-left'>
          <div className='image-container'>
            <img src='./value.png' alt='home'></img>
          </div>
        </div>

        <div className='flexColStart v-right'>
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We Give To You</span>
          <span className='secondaryText'>
            We always ready to help by providing the best services for you.
            <br></br>
            We believe a good place to live can make your life better
          </span>

          <Accordion className='accordian' allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordianItem ${expandedIndex === i ? 'expanded' : 'collapsed'}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordianButton'>
                      <AccordionItemState>
                        {({ expanded }) => {
                          // When the state changes, update the expandedIndex
                          if (expanded) expandedIndex = i;
                        }}
                      </AccordionItemState>
                      <div className='flexCenter icon'>{item.icon}</div>
                      <span className='primaryText'>{item.heading}</span>
                      <div className='flexCenter icon'>
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className='secondaryText'>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
