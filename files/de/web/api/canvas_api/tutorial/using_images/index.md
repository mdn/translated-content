---
title: Bilder
slug: Web/API/Canvas_API/Tutorial/Using_images
translation_of: Web/API/Canvas_API/Tutorial/Using_images
original_slug: Web/Guide/HTML/Canvas_Tutorial/Bilder
---
{{CanvasSidebar}}

Natürlich können auch Bilder gezeichnet werden. Diese können die unterschiedlichsten Formate haben: PNG, GIF, JPEG oder bestimmte HTML Elemente.

Um Bilder zu importieren bedarf es bloß zwei Schritte:

1.  Ein {{domxref("HTMLImageElement")}} Objekt erzeugen oder das HTML Element selektieren.
2.  Das Bild mithilfe der `drawImage()` Funktion zeichnen.

## Bilder importieren

Die canvas API unterstützt folgende Typen als Bilder:

- {{domxref("HTMLImageElement")}}
  - : Diese Bilder können mithilfe des `Image()` Konstruktor oder mithilfe eines {{HTMLElement("img")}} Element erstellt werden.
- {{domxref("HTMLVideoElement")}}
  - : Der aktuelle Frame des {{HTMLElement("video")}} Element wird als Bild genutzt.
- {{domxref("HTMLCanvasElement")}}
  - : Ein anderes {{HTMLElement("canvas")}} Element kann ebenfalls als Bild dienen.
- {{domxref("ImageBitmap")}}
  - : Eine hochleistungsfähige Bitmap, welche mit niedriger Verzögerung gerendert werden kann. Sie lässt sich aus allen der oben genannten Quellen, sowie aus mehreren weitern erstellen.

These sources are collectively referred to by the type {{domxref("CanvasImageSource")}}.

There are several ways to get images for use on a canvas.

### Bilder von derselben Seite

Um Bilder von derselben Seite zu bekommen, können diese Methoden genutzt werden:

- Die {{domxref("document.images")}} Sammlung
- Die {{domxref("document.getElementsByTagName()")}} Methode
- Die {{domxref("document.getElementById()")}} Methode, wenn eine Id festgelegt worden ist

### Bilder von anderen Seiten nutzen

Mithilfe des {{htmlattrxref("crossorigin", "img")}} Attributs eines {{domxref("HTMLImageElement")}} ist es möglich die Erlaubnis zur Benutzung eines Bildes von einer anderen Domain zu nutzen. Wenn die Domain jenen Zugriff gestattet, kann das Image genutzt werden und das Bild wird wie gewollt angezeigt; andernfalls entsteht ein ["getaintes Canvas"](/de/docs/Web/HTML/CORS_enabled_image#What_is_a_.22tainted.22_canvas.3F).

### Andere Canvas Elemente benutzen

Genau wie normalen Bildern auch, können wir ein anderes Canvas durch {{domxref("document.getElementsByTagName()")}} oder {{domxref("document.getElementById()")}} ansprechen.

Sei dabei sicher, dass du auf deinem Canvas etwas gezeichnet hast, bevor du es im Zielcanvas verwendest.

Eine sinnvoller Einsatz ist zum Beispiel das zweite Canvas als Vorschaubild (Thumbnail) des ersten zu verwenden.

### Ein Bild von Grund auf

Eine andere Option ist ein neues {{domxref("HTMLImageElement")}} in JavaScript zu erstellen. Um das zu tun, können wir den `Image()`-Konstruktor verwenden:

```js
var img = new Image(); // Erstelle neues Image-Objekt
img.src = 'myImage.png'; // Setze den Pfad zum Bild
```

Wird dieses Skript ausgeführt, fängt das Bild an zu laden.

> **Note:** **Achtung**: Wenn `drawImage()` vor dem Laden des Bildes ausgeführt wird, wird nichts passieren (In älteren Browsern kann es eine Fehlermeldung geben). Um jenen Fehler zu vermeiden, muss also sichergestellt werden, dass das load-Event benutzt wird.

```js
var img = new Image();   // Erstelle neues Image-Objekt
img.addEventListener("load", function() {
  // füge hier den drawImage()-Befehl ein
}, false);
img.src = 'myImage.png'; // Setze den Pfad zum Bild
```

Wenn nur ein externes Bild geladen werden muss, ist das eine gute Möglichkeit. Wenn jedoch mehrere Bilder benötigt werden, sollte es besser anders gelöst werden. Es ist nicht das Ziel deises Tutorials auf das Vorladen von Bildern einzugehen, aber für eine komplette Lösung kannst du dir [JavaScript Image Preloader](http://www.webreference.com/programming/javascript/gr/column3/) angucken (ist leder auf Englisch).

### Embedding an image via data: URL

Another possible way to include images is via the [data: url](/de/docs/data_URIs "http://en.wikipedia.org/wiki/Data:_URL"). Data URLs allow you to completely define an image as a Base64 encoded string of characters directly in your code.

```js
var img_src = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';
```

One advantage of data URLs is that the resulting image is available immediately without another round trip to the server. Another potential advantage is that it is also possible to encapsulate in one file all of your [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML), and images, making it more portable to other locations.

Some disadvantages of this method are that your image is not cached, and for larger images the encoded url can become quite long.

### Using frames from a video

You can also use frames from a video being presented by a {{HTMLElement("video")}} element (even if the video is not visible). For example, if you have a {{HTMLElement("video")}} element with the ID "myvideo", you can do this:

```js
function getMyVideo() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    return document.getElementById('myvideo');
  }
}
```

This returns the {{domxref("HTMLVideoElement")}} object for the video, which, as covered earlier, is one of the objects that can be used as a `CanvasImageSource`.

## Drawing images

Once we have a reference to our source image object we can use the `drawImage()` method to render it to the canvas. As we will see later the `drawImage()` method is overloaded and has several variants. In its most basic form it looks like this:

- `drawImage(image, x, y)`
  - : Draws the `CanvasImageSource` specified by the `image` parameter at the coordinates (`x`, `y`).

### Example: A simple line graph

In the following example, we will use an external image as the backdrop for a small line graph. Using backdrops can make your script considerably smaller because we can avoid the need for code to generate the background. In this example, we're only using one image, so I use the image object's `load` event handler to execute the drawing statements. The `drawImage()` method places the backdrop at the coordinate (0, 0), which is the top-left corner of the canvas.

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="180" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img,0,0);
    ctx.beginPath();
    ctx.moveTo(30,96);
    ctx.lineTo(70,66);
    ctx.lineTo(103,76);
    ctx.lineTo(170,15);
    ctx.stroke();
  };
  img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
}
```

The resulting graph looks like this:

{{EmbedLiveSample("Example_A_simple_line_graph", 220, 160, "https://mdn.mozillademos.org/files/206/Canvas_backdrop.png")}}

## Scaling

The second variant of the `drawImage()` method adds two new parameters and lets us place scaled images on the canvas.

- `drawImage(image, x, y, width, height)`
  - : This adds the `width` and `height` parameters, which indicate the size to which to scale the image when drawing it onto the canvas.

### Example: Tiling an image

In this example, we'll use an image as a wallpaper and repeat it several times on the canvas. This is done simply by looping and placing the scaled images at different positions. In the code below, the first `for` loop iterates over the rows. The second `for` loop iterates over the columns. The image is scaled to one third of its original size, which is 50x38 pixels.

> **Note:** Images can become blurry when scaling up or grainy if they're scaled down too much. Scaling is probably best not done if you've got some text in it which needs to remain legible.

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function(){
    for (var i=0;i<4;i++){
      for (var j=0;j<3;j++){
        ctx.drawImage(img,j*50,i*38,50,38);
      }
    }
  };
  img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
}
```

The resulting canvas looks like this:

{{EmbedLiveSample("Example_Tiling_an_image", 160, 160, "https://mdn.mozillademos.org/files/251/Canvas_scale_image.png")}}

## Slicing

The third and last variant of the `drawImage()` method has eight parameters. It lets us cut out a section of the source image, then scale and draw it on our canvas.

- `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`
  - : Given an `image`, this function takes the area of the source image specified by the rectangle whose top-left corner is (`sx`, `sy`) and whose width and height are `sWidth` and `sHeight` and draws it into the canvas, placing it on the canvas at (`dx`, `dy`) and scaling it to the size specified by `dWidth` and `dHeight`.

![](https://mdn.mozillademos.org/files/225/Canvas_drawimage.jpg)To really understand what this does, it may help to look at the image to the right. The first four parameters define the location and size of the slice on the source image. The last four parameters define the rectangle into which to draw the image on the destination canvas.

Slicing can be a useful tool when you want to make compositions. You could have all elements in a single image file and use this method to composite a complete drawing. For instance, if you want to make a chart you could have a PNG image containing all the necessary text in a single file and depending on your data could change the scale of your chart fairly easily. Another advantage is that you don't need to load every image individually, which can improve load performance.

### Example: Framing an image

In this example, we'll use the same rhino as in the previous example, but we'll slice out its head and composite it into a picture frame. The picture frame image is a 24-bit PNG which includes a drop shadow. Because 24-bit PNG images include a full 8-bit alpha channel, unlike GIF and 8-bit PNG images, it can be placed onto any background without worrying about a matte color.

```html
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
   <div style="display:none;">
     <img id="source" src="https://mdn.mozillademos.org/files/5397/rhino.jpg" width="300" height="227">
     <img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150">
   </div>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // Draw slice
  ctx.drawImage(document.getElementById('source'),
                33, 71, 104, 124, 21, 20, 87, 104);

  // Draw frame
  ctx.drawImage(document.getElementById('frame'),0,0);
}
```

We took a different approach to loading the images this time. Instead of loading them by creating new {{domxref("HTMLImageElement")}} objects, we included them as {{HTMLElement("img")}} tags directly in our HTML source and retrieved the images from those. The images are hidden from output by setting the CSS property {{cssxref("display")}} to none for those images.

{{EmbedLiveSample("Example_Framing_an_image", 160, 160, "https://mdn.mozillademos.org/files/226/Canvas_drawimage2.jpg")}}

The script itself is very simple. Each {{HTMLElement("img")}} is assigned an ID attribute, which makes them easy to select using {{domxref("document.getElementById()")}}. We then simply use `drawImage()` to slice the rhino out of the first image and scale him onto the canvas, then draw the frame on top using a second `drawImage()` call.

## Art gallery example

In the final example of this chapter, we'll build a little art gallery. The gallery consists of a table containing several images. When the page is loaded, a {{HTMLElement("canvas")}} element is inserted for each image and a frame is drawn arround it.

In this case, every image has a fixed width and height, as does the frame that's drawn around them. You could enhance the script so that it uses the image's width and height to make the frame fit perfectly around it.

The code below should be self-explanatory. We loop through the {{domxref("document.images")}} container and add new canvas elements accordingly. Probably the only thing to note, for those not so familiar with the DOM, is the use of the {{domxref("Node.insertBefore")}} method. `insertBefore()` is a method of the parent node (a table cell) of the element (the image) before which we want to insert our new node (the canvas element).

```html
<html>
 <body onload="draw();">
     <table>
      <tr>
        <td><img src="https://mdn.mozillademos.org/files/5399/gallery_1.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5401/gallery_2.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5403/gallery_3.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5405/gallery_4.jpg"></td>
      </tr>
      <tr>
        <td><img src="https://mdn.mozillademos.org/files/5407/gallery_5.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5409/gallery_6.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5411/gallery_7.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5413/gallery_8.jpg"></td>
      </tr>
     </table>
     <img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150">
 </body>
</html>
```

And here's some CSS to make things look nice:

```css
body {
  background: 0 -100px repeat-x url(https://mdn.mozillademos.org/files/5415/bg_gallery.png) #4F191A;
  margin: 10px;
}

img {
  display: none;
}

table {
  margin: 0 auto;
}

td {
  padding: 15px;
}
```

Tying it all together is the JavaScript to draw our framed images:

```js
function draw() {

  // Loop through all images
  for (var i=0;i<document.images.length;i++){

    // Don't add a canvas for the frame image
    if (document.images[i].getAttribute('id')!='frame'){

      // Create canvas element
      canvas = document.createElement('canvas');
      canvas.setAttribute('width',132);
      canvas.setAttribute('height',150);

      // Insert before the image
      document.images[i].parentNode.insertBefore(canvas,document.images[i]);

      ctx = canvas.getContext('2d');

      // Draw image to canvas
      ctx.drawImage(document.images[i],15,20);

      // Add frame
      ctx.drawImage(document.getElementById('frame'),0,0);
    }
  }
}
```

{{EmbedLiveSample("Art_gallery_example", 725, 400, "https://mdn.mozillademos.org/files/205/Canvas_art_gallery.jpg")}}

## Controlling image scaling behavior

As mentioned previously, scaling images can result in fuzzy or blocky artifacts due to the scaling process. You can use the drawing context's imageSmoothingEnabled property to control the use of image smoothing algorithms when scaling images within your context. By default, this is `true`, meaning images will be smoothed when scaled. You can disable this feature like this:

```js
ctx.mozImageSmoothingEnabled = false;
```

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Drawing_shapes", "Web/Guide/HTML/Canvas_tutorial/Applying_styles_and_colors")}}
