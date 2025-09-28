## Script to extract a PNG of each page in a download/copy protected Google drive PDF. 

### Instructions
1. Find the img that is referenced for each page in the PDF which can be found under the sources section in the inspect tool. It typically is under drive.google.com/u/0/drive-viewer and each img will be named under a unique UUID ex. 0aaf6f6b-9f14-452c-97c1-c7957a036114
2. Right click one of the PNG images and click *Open in Network Panel* find one of the images which will typically start with an **img?...**. The request URL is what you will place in the double quotations variable called **BASE_URL**. Enter the first desired page and the last desired page. 
3. **WARNING: Make sure you manually view each page in the pdf so that it can be rendered.** 
4. Lastly you'll have a few webp files, use a converter online to convert the webp to PDF. Some converters will convert all of them into one atmoic PDF automatically :) 
