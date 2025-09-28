// Google Drive Page Downloader
// Run this in browser console on any page

async function downloadGoogleDrivePages() {
    // Base URL with page parameter that we'll modify
    const baseUrl = "";
    
    const startPage = 0;
    const endPage = 93;
    const delay = 1000; // 1 second delay between downloads
    
    console.log(`Starting download of pages ${startPage} to ${endPage}`);
    
    for (let page = startPage; page <= endPage; page++) {
        try {
            // Replace PAGE_NUM with current page number
            const url = baseUrl.replace('PAGE_NUM', page);
            
            console.log(`Downloading page ${page}...`);
            
            // Fetch the image
            const response = await fetch(url);
            
            if (!response.ok) {
                console.error(`Failed to fetch page ${page}: ${response.status}`);
                continue;
            }
            
            // Get the image blob
            const blob = await response.blob();
            
            // Create download link
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = `page_${page.toString().padStart(3, '0')}.webp`; // e.g., page_009.webp
            
            // Trigger download
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            // Clean up object URL
            window.URL.revokeObjectURL(downloadUrl);
            
            console.log(`✓ Downloaded page ${page}`);
            
            // Add delay to be respectful to the server
            if (page < endPage) {
                await new Promise(resolve => setTimeout(resolve, delay));
            }
            
        } catch (error) {
            console.error(`Error downloading page ${page}:`, error);
        }
    }
    
    console.log('Download process completed!');
}

// Start the download process
downloadGoogleDrivePages();
