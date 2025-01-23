

// const landingBlock = document.getElementByClassName("land")[0];
// const para = landingBlock.getElementByTagName('p')[0];
// para.textContent=English;

import { fetchPlaceholders, getMetadata } from '../../scripts/aem.js'; 

export default async function decorate(block) { 
    
    // fetch placeholders sheet  from the 'en' folder
    const placeholders = await fetchPlaceholders('en'); 
    // retrieve the value for key 'foo'
    const { English} = placeholders;
    console.log(English);

} 