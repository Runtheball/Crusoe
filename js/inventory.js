//Try to display inventory & camp items

//option one

function displayInv(element){
    for(var i = 0; i < inv.length;i++){
        if(inv[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
};    
    

    
//option 2
   
function imageCache(base, firstNum, lastNum) {
    this.cache = [];
    var img;
    for (var i = firstNum; i <= lastnum; i++) {
        img = new Image();
        img.src = base + i + ".jpg";
        this.cache.push(img);
    }
}

imageCache.prototype.nextImage(id) {
    var element = document.getElementById(id);
    var targetSrc = element.src;
    var cache = this.cache;
    for (var i = 0; i < cache.length; i++) {
        if (cache[i].src) === targetSrc) {
            i++;
            if (i >= cache.length) {
                i = 0;
            }
            element.src = cache[i].src;
            return;
        }
    }
}

// sample usage

var myCache = new imageCache('images/inv/spear.jpg', 1, 6);
myCache.nextImage("foo");

/*Some advantages of this more object oriented and DRYed approach:

You can add more images by just creating the images in the numeric sequences and changing one numeric value in the constructor rather than copying lots more lines of array declarations.
You can use this more than one place in your app by just creating more than one imageCache object.
You can change the base URL by changing one string rather than N strings.
The code size is smaller (because of the removal of repeated code).
The cache object could easily be extended to offer more capabilities such as first, last, skip, etc...
You could add centralize error handling in one place so if one image doesn't exist and doesn't load successfully, it's automatically removed from the cache.*/
