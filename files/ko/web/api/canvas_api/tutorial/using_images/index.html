---
title: Using images
slug: Web/API/Canvas_API/Tutorial/Using_images
tags:
  - Advanced
  - Canvas
  - Graphics
  - HTML
  - Tutorial
translation_of: Web/API/Canvas_API/Tutorial/Using_images
original_slug: Web/HTML/Canvas/Tutorial/Using_images
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}</div>

<div class="summary">
<p>지금까지 우리는 Canvas를 가지고 스스로 <a href="/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes">도형</a>을 만들고 그 도형에 <a href="/ko/docs/Web/HTML/Canvas/Tutorial/Applying_styles_and_colors">스타일 적용</a> 해 보았습니다. 이미지를 사용 하는 기능은 {{HTMLElement("canvas")}}의 가장 흥미로운 기능중 하나입니다. 이 기능은 게임의 그래픽 배경이나 혹은 다이나믹한 사진 도음들을 위해 사용 될 수 있습니다. PNG,GIF, JPEG등 브라우저에서 지원되는 포맷형태라면 어떠한 외부 이미지라도 사용 될 수 있습니다. 같은 페이지 소스에서 다른 Canvas요소로 만들어진 이미지 또한 사용할수 있습니다!</p>
</div>

<p>이미지를 캔버스로 불러오는것은 기본적으로 두 단계를 필요로 합니다:</p>

<ol>
 <li>{{domxref("HTMLImageElement")}} object를 참조하거나 다른 캔버스 요소를 소스로 사용합니다. 이는 URL을 가지고 이미지를 사용 할 수 있습니다.</li>
 <li><code>drawImage()</code> function을 사용하여 캔버스에 나타난 이미지 위에 그림을 그립니다.</li>
</ol>

<p>이 과정이 어떻게 되는지 봅시다.</p>

<h2 id="이미지_불러오기">이미지 불러오기</h2>

<p>canvas API는 아래의 데이터 타입을 이미지 소스로 사용 할 수 있습니다:</p>

<dl>
 <dt>{{domxref("HTMLImageElement")}}</dt>
 <dd>{{HTMLElement("img")}} element와 마찬가지로, <code>Image()</code> constructor를 통해 만들어진 이미지입니다.</dd>
</dl>

<dl>
 <dt>{{domxref("SVGImageElement")}}</dt>
 <dd>{{SVGElement("image")}} element 를 사용해 불러온 이미지입니다.</dd>
</dl>



<dl>
 <dt>{{domxref("HTMLVideoElement")}}</dt>
 <dd>HTML {{HTMLElement("video")}} 요소를 이미지 소스로 사용하여 비디오의 현재 프레임을 이미지로 불러옵니다.</dd>
 <dt>{{domxref("HTMLCanvasElement")}}</dt>
 <dd>다른 {{HTMLElement("canvas")}} 요소를 이미지 소스로 사용합니다.</dd>
</dl>

<p>이렇게 얻은 소스들은 {{domxref("CanvasImageSource")}}.를 사용하여 불러 올 수 있습니다.</p>

<p>다음은 캔버스에 놓인 이미지를 사용하는 여러가지 방법입니다.</p>

<h3 id="같은_페이지의_이미지_사용하기">같은 페이지의 이미지 사용하기</h3>

<p>우리는 다음을 사용하여 같은 페이지에 있는 캔버스나 이미지를 참고 할 수 있습니다.</p>

<ul>
 <li>{{domxref("document.images")}} 모음</li>
 <li>{{domxref("document.getElementsByTagName()")}} 메소드</li>
 <li>사용 하고자 하는 특정한 이미지의 ID를 알고 있다면, {{domxref("document.getElementById()")}} 를 사용하여 특정한 이미지를 참고할 수 있습니다.</li>
</ul>

<h3 id="다른_도메인의_이미지_사용하기">다른 도메인의 이미지 사용하기</h3>

<p>Using the {{htmlattrxref("crossorigin", "img")}} attribute of an {{HTMLElement("img")}} element (reflected by the {{domxref("HTMLImageElement.crossOrigin")}} property), you can request permission to load an image from another domain for use in your call to <code>drawImage()</code>. If the hosting domain permits cross-domain access to the image, the image can be used in your canvas without tainting it; otherwise using the image will <a href="https://developer.mozilla.org/en-US/docs/HTML/CORS_Enabled_Image#What_is_a_.22tainted.22_canvas.3F" rel="internal">taint the canvas</a>.</p>

<h3 id="다른_캔버스_요소_canvas_elements_사용하기">다른 캔버스 요소 (canvas elements) 사용하기</h3>

<p>Just as with normal images, we access other canvas elements using either the {{domxref("document.getElementsByTagName()")}} or {{domxref("document.getElementById()")}} method. Be sure you've drawn something to the source canvas before using it in your target canvas.</p>

<p>One of the more practical uses of this would be to use a second canvas element as a thumbnail view of the other larger canvas.</p>

<h3 id="처음부터_이미지_만들기">처음부터 이미지 만들기</h3>

<p>Another option is to create new {{domxref("HTMLImageElement")}} objects in our script. To do this, you can use the convenient <code>Image()</code> constructor:</p>

<pre class="brush: js notranslate">var img = new Image();   // Create new img element
img.src = 'myImage.png'; // Set source path
</pre>

<p>When this script gets executed, the image starts loading.</p>

<p>If you try to call <code>drawImage()</code> before the image has finished loading, it won't do anything (or, in older browsers, may even throw an exception). So you need to be sure to use the load event so you don't try this before the image has loaded:</p>

<pre class="brush: js notranslate">var img = new Image();   // Create new img element
img.addEventListener('load', function() {
  // execute drawImage statements here
}, false);
img.src = 'myImage.png'; // Set source path
</pre>

<p>If you're only using one external image this can be a good approach, but once you need to track more than one we need to resort to something more clever. It's beyond the scope of this tutorial to look at image pre-loading tactics, but you should keep that in mind.</p>

<h3 id="데이터를_사용하여_이미지_불러오기Embedding_an_image_via_data_URL">데이터를 사용하여 이미지 불러오기Embedding an image via data: URL</h3>

<p>Another possible way to include images is via the <a class="external" href="/en-US/docs/Web/HTTP/data_URIs" rel="external" title="http://en.wikipedia.org/wiki/Data:_URL">data: url</a>. Data URLs allow you to completely define an image as a Base64 encoded string of characters directly in your code.</p>

<pre class="brush: js notranslate">var img = new Image();   // Create new img element
img.src = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';
</pre>

<p>One advantage of data URLs is that the resulting image is available immediately without another round trip to the server. Another potential advantage is that it is also possible to encapsulate in one file all of your <a href="/en-US/docs/Web/CSS" title="/en-US/docs/Web/CSS">CSS</a>, <a href="/en-US/docs/Web/JavaScript" title="/en-US/docs/Web/JavaScript">JavaScript</a>, <a href="/en-US/docs/Web/HTML" title="/en-US/docs/Web/HTML">HTML</a>, and images, making it more portable to other locations.</p>

<p>Some disadvantages of this method are that your image is not cached, and for larger images the encoded url can become quite long.</p>

<h3 id="비디오_프레임_사용하기Using_frames_from_a_video">비디오 프레임 사용하기Using frames from a video</h3>

<p>You can also use frames from a video being presented by a {{HTMLElement("video")}} element (even if the video is not visible). For example, if you have a {{HTMLElement("video")}} element with the ID "myvideo", you can do this:</p>

<pre class="brush: js notranslate">function getMyVideo() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    return document.getElementById('myvideo');
  }
}
</pre>

<p>This returns the {{domxref("HTMLVideoElement")}} object for the video, which, as covered earlier, is one of the objects that can be used as a <code>CanvasImageSource</code>.</p>

<h2 id="이미지_그리기">이미지 그리기</h2>

<p>Once we have a reference to our source image object we can use the <code>drawImage()</code> method to render it to the canvas. As we will see later the <code>drawImage()</code> method is overloaded and has several variants. In its most basic form it looks like this:</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, x, y)")}}</dt>
 <dd>Draws the <code>CanvasImageSource</code> specified by the <code>image</code> parameter at the coordinates (<code>x</code>, <code>y</code>).</dd>
</dl>

<div class="note">
<p>SVG images must specify a width and height in the root &lt;svg&gt; element.</p>
</div>

<h3 id="예제_기본_선_그래프">예제: 기본 선 그래프</h3>

<p>In the following example, we will use an external image as the backdrop for a small line graph. Using backdrops can make your script considerably smaller because we can avoid the need for code to generate the background. In this example, we're only using one image, so I use the image object's <code>load</code> event handler to execute the drawing statements. The <code>drawImage()</code> method places the backdrop at the coordinate (0, 0), which is the top-left corner of the canvas.</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="180" height="150"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush: js;highlight[5] notranslate">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };
  img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
}</pre>

<p>The resulting graph looks like this:</p>

<p>{{EmbedLiveSample("Example_A_simple_line_graph", 220, 160, "https://mdn.mozillademos.org/files/206/Canvas_backdrop.png")}}</p>

<h2 id="비례_크기_조정">비례 크기 조정</h2>

<p>The second variant of the <code>drawImage()</code> method adds two new parameters and lets us place scaled images on the canvas.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, x, y, width, height)")}}</dt>
 <dd>This adds the <code>width</code> and <code>height</code> parameters, which indicate the size to which to scale the image when drawing it onto the canvas.</dd>
</dl>

<h3 id="예제_이미지를_타일처럼_배치">예제: 이미지를 타일처럼 배치</h3>

<p>In this example, we'll use an image as a wallpaper and repeat it several times on the canvas. This is done simply by looping and placing the scaled images at different positions. In the code below, the first <code>for</code> loop iterates over the rows. The second <code>for</code> loop iterates over the columns. The image is scaled to one third of its original size, which is 50x38 pixels.</p>

<div class="note">
<p><strong>Note</strong>: Images can become blurry when scaling up or grainy if they're scaled down too much. Scaling is probably best not done if you've got some text in it which needs to remain legible.</p>
</div>

<div class="hidden">
<pre class="brush: html notranslate">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush: js notranslate">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function() {
    for (var i = 0; i &lt; 4; i++) {
      for (var j = 0; j &lt; 3; j++) {
        ctx.drawImage(img, j * 50, i * 38, 50, 38);
      }
    }
  };
  img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
}</pre>

<p>The resulting canvas looks like this:</p>

<p>{{EmbedLiveSample("Example_Tiling_an_image", 160, 160, "https://mdn.mozillademos.org/files/251/Canvas_scale_image.png")}}</p>

<h2 id="이미지_자르기">이미지 자르기</h2>

<p>The third and last variant of the <code>drawImage()</code> method has eight parameters in addition to the image source. It lets us cut out a section of the source image, then scale and draw it on our canvas.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)")}}</dt>
 <dd>Given an <code>image</code>, this function takes the area of the source image specified by the rectangle whose top-left corner is (<code>sx</code>, <code>sy</code>) and whose width and height are <code>sWidth</code> and <code>sHeight</code> and draws it into the canvas, placing it on the canvas at (<code>dx</code>, <code>dy</code>) and scaling it to the size specified by <code>dWidth</code> and <code>dHeight</code>.</dd>
</dl>

<p><img alt="" class="internal" src="https://mdn.mozillademos.org/files/225/Canvas_drawimage.jpg" style="float: right; height: 290px; width: 300px;">To really understand what this does, it may help to look at the image to the right. The first four parameters define the location and size of the slice on the source image. The last four parameters define the rectangle into which to draw the image on the destination canvas.</p>

<p>Slicing can be a useful tool when you want to make compositions. You could have all elements in a single image file and use this method to composite a complete drawing. For instance, if you want to make a chart you could have a PNG image containing all the necessary text in a single file and depending on your data could change the scale of your chart fairly easily. Another advantage is that you don't need to load every image individually, which can improve load performance.</p>

<h3 id="예제_이미지_프레임_넣기">예제: 이미지 프레임 넣기</h3>

<p>In this example, we'll use the same rhino as in the previous example, but we'll slice out its head and composite it into a picture frame. The picture frame image is a 24-bit PNG which includes a drop shadow. Because 24-bit PNG images include a full 8-bit alpha channel, unlike GIF and 8-bit PNG images, it can be placed onto any background without worrying about a matte color.</p>

<pre class="brush: html notranslate">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;
   &lt;div style="display:none;"&gt;
     &lt;img id="source" src="https://mdn.mozillademos.org/files/5397/rhino.jpg" width="300" height="227"&gt;
     &lt;img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150"&gt;
   &lt;/div&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>

<pre class="brush: js notranslate">function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // Draw slice
  ctx.drawImage(document.getElementById('source'),
                33, 71, 104, 124, 21, 20, 87, 104);

  // Draw frame
  ctx.drawImage(document.getElementById('frame'), 0, 0);
}</pre>

<p>We took a different approach to loading the images this time. Instead of loading them by creating new {{domxref("HTMLImageElement")}} objects, we included them as {{HTMLElement("img")}} tags directly in our HTML source and retrieved the images from those. The images are hidden from output by setting the CSS property {{cssxref("display")}} to none for those images.</p>

<p>{{EmbedLiveSample("Example_Framing_an_image", 160, 160, "https://mdn.mozillademos.org/files/226/Canvas_drawimage2.jpg")}}</p>

<p>The script itself is very simple. Each {{HTMLElement("img")}} is assigned an ID attribute, which makes them easy to select using {{domxref("document.getElementById()")}}. We then simply use <code>drawImage()</code> to slice the rhino out of the first image and scale him onto the canvas, then draw the frame on top using a second <code>drawImage()</code> call.</p>

<h2 id="아트_갤러리_예제">아트 갤러리 예제</h2>

<p>In the final example of this chapter, we'll build a little art gallery. The gallery consists of a table containing several images. When the page is loaded, a {{HTMLElement("canvas")}}  element is inserted for each image and a frame is drawn around it.</p>

<p>In this case, every image has a fixed width and height, as does the frame that's drawn around them. You could enhance the script so that it uses the image's width and height to make the frame fit perfectly around it.</p>

<p>The code below should be self-explanatory. We loop through the {{domxref("document.images")}} container and add new canvas elements accordingly. Probably the only thing to note, for those not so familiar with the DOM, is the use of the {{domxref("Node.insertBefore")}} method. <code>insertBefore()</code> is a method of the parent node (a table cell) of the element (the image) before which we want to insert our new node (the canvas element).</p>

<pre class="brush: html notranslate">&lt;html&gt;
 &lt;body onload="draw();"&gt;
     &lt;table&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5399/gallery_1.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5401/gallery_2.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5403/gallery_3.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5405/gallery_4.jpg"&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5407/gallery_5.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5409/gallery_6.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5411/gallery_7.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5413/gallery_8.jpg"&gt;&lt;/td&gt;
      &lt;/tr&gt;
     &lt;/table&gt;
     &lt;img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150"&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>And here's some CSS to make things look nice:</p>

<pre class="brush: css notranslate">body {
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
</pre>

<p>Tying it all together is the JavaScript to draw our framed images:</p>

<pre class="brush: js notranslate">function draw() {

  // Loop through all images
  for (var i = 0; i &lt; document.images.length; i++) {

    // Don't add a canvas for the frame image
    if (document.images[i].getAttribute('id') != 'frame') {

      // Create canvas element
      canvas = document.createElement('canvas');
      canvas.setAttribute('width', 132);
      canvas.setAttribute('height', 150);

      // Insert before the image
      document.images[i].parentNode.insertBefore(canvas,document.images[i]);

      ctx = canvas.getContext('2d');

      // Draw image to canvas
      ctx.drawImage(document.images[i], 15, 20);

      // Add frame
      ctx.drawImage(document.getElementById('frame'), 0, 0);
    }
  }
}</pre>

<p>{{EmbedLiveSample("Art_gallery_example", 725, 400)}}</p>

<h2 id="이미지_비율_습성scaling_behavior_제어하기">이미지 비율 습성(scaling behavior) 제어하기</h2>

<p>As mentioned previously, scaling images can result in fuzzy or blocky artifacts due to the scaling process. You can use the drawing context's {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} property to control the use of image smoothing algorithms when scaling images within your context. By default, this is <code>true</code>, meaning images will be smoothed when scaled. You can disable this feature like this:</p>

<pre class="brush: js notranslate">ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
</pre>

<p>{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}</p>
