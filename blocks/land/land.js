

// const landingBlock = document.getElementByClassName("land")[0];
// const para = landingBlock.getElementByTagName('p')[0];
// para.textContent=English;
import { fetchPlaceholders, getMetadata } from '../../scripts/aem.js';

export default async function decorate(block) {
  // Fetch placeholders sheet from the 'en' folder
  const placeholders = await fetchPlaceholders('en');
  console.log('Placeholders:', placeholders);

  // Safely destructure and check for undefined
  if (placeholders) {
    const { english } = placeholders;
    console.log('English Placeholder:', english);
  } else {
    console.error('Placeholders object is null or undefined');
  }
}
