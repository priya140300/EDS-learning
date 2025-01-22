import { fetchPlaceholders } from "../../scripts/aem";
// fetch placeholders sheet  from the 'en' folder
const placeholders = await fetchPlaceholders('en');
// retrieve the value for key 'foo'
const { English} = placeholders;
const landingBlock = document.getElementByClassName("land block")[0];
const para = landingBlock.getElementByTagName('p')[0];
para.textContent=English;
