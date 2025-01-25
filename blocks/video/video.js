export default async function decorate(block) {
    // Find the first anchor tag containing ".com" in the href attribute
    const urlElement = block.querySelector('a[href*=".mp4"]');
    console.log('URL Element:', urlElement);
    

    // Safely retrieve the URL if the element exists
    if (urlElement) {
        const url = urlElement.href;
        console.log('URL:', url);

        // Find the first anchor tag in the block
        const link = block.querySelector("a");
        console.log('Link Element:', link);

        if (link) {
            // Create a video element and set its src attribute to the URL
            const video = document.createElement("video");
            video.src = url;
            video.controls = true; // Optional: Add controls to the video element
            video.autoplay=true; 
            link.replaceWith(video);
            console.log('Video Element:', video);
        } else {
            console.error('No <a> tag found in the block');
        }
    } else {
        console.error('No <a> tag with href containing ".com" found in the block');
    }


    
}
