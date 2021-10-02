---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - graphique
translation_of: Web/API/CanvasRenderingContext2D
---
<p>{{APIRef}}</p>

<p>L'interface <strong>CanvasRenderingContext2D</strong> est utilisée pour dessiner des rectangles, du texte, des images et d'autres objets sur l'élément canvas. Il fournit le contexte de rendu 2D pour la surface de dessin d'un élément {{HTMLElement("canvas")}}.</p>

<p>Pour obtenir un objet de cette interface, appelez {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} sur un élément <code>&lt;canvas&gt;</code>, en fournissant "2d" comme argument :</p>

<pre>var canevas = document.getElementById('tutorial'); // dans votre HTML, cet élément apparaît comme &lt;canvas id="monCanevas"&gt;&lt;/canvas&gt;
var ctx = canevas.getContext('2d');
</pre>

<p>Une fois que vous avez le contexte de rendu 2D pour un canevas, vous pouvez dessiner à l'intérieur. Par exemple :</p>

<pre>ctx.fillStyle = "rgb(200,0,0)"; // définit la couleur de remplissage du rectangle
ctx.fillRect(10, 10, 55, 50);   // dessine le rectangle à la position 10, 10 d'une largeur de 55 et d'une hauteur de 50
</pre>

<p>Voir les propriétés et les méthodes dans la barre latérale et plus bas. Le <a href="/fr-FR/docs/Web/API/Canvas_API/Tutorial">tutoriel canvas</a> a davantage d'informations, d'exemples et de ressources également.</p>

<h2 id="Dessin_de_rectangles">Dessin de rectangles</h2>

<p>Il existe trois méthodes qui dessinent immédiatement des rectangles sur la bitmap.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.clearRect()")}}</dt>
 <dd>Initialise tous les pixels dans le rectangle défini par le point de départ <em>(x, y)</em> et la taille <em>(largeur, hauteur)</em> à noir transparent, en effaçant tout contenu précédemment dessiné.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.fillRect()")}}</dt>
 <dd>Dessine un rectangle rempli à la position <em>(x, y)</em> dont la taille est déterminée par <em>largeur</em> et <em>hauteur</em>.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.strokeRect()")}}</dt>
 <dd>Peint un rectangle ayant un point de départ en <em>(x, y)</em>, une largeur <em>l</em> et une hauteur <em>h</em> sur le canevas, en utilisant le style de trait en cours.</dd>
</dl>

<h2 id="Dessiner_du_texte">Dessiner du texte</h2>

<p>Les méthodes suivantes permettent de dessiner du texte. Voir aussi l'objet {{domxref("TextMetrics")}} pour les propriétés du texte.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.fillText()")}}</dt>
 <dd>Dessine (rempli) un texte donné à la position (x,y) donnée.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.strokeText()")}}</dt>
 <dd>Dessine (contour) un texte donné à la position (x, y) donnée.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.measureText()")}}</dt>
 <dd>Renvoie un objet {{domxref("TextMetrics")}}.</dd>
</dl>

<h2 id="Styles_de_ligne">Styles de ligne</h2>

<p>Les méthodes et propriétés suivantes controllent comment les lignes sont dessinées.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.lineWidth")}}</dt>
 <dd>Largeur des lignes. Défaut <code>1.0</code></dd>
 <dt>{{domxref("CanvasRenderingContext2D.lineCap")}}</dt>
 <dd>Type de finission pour la fin de la ligne. Valeurs possible: <code>butt</code> (défaut), <code>round</code>, <code>square</code>.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.lineJoin")}}</dt>
 <dd>Définit le type de coin quand deux lignes se rejoignent. Valeurs possible: <code>round</code>, <code>bevel</code>, <code>miter</code> (défaut).</dd>
 <dt>{{domxref("CanvasRenderingContext2D.miterLimit")}}</dt>
 <dd>Le taux limite du miter. Sa valeur par défaut est <code>10</code>.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.getLineDash()")}}</dt>
 <dd>Retourne le tableau de modèle du trait courant contenant un nombre pair de nombre positifs.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.setLineDash()")}}</dt>
 <dd>Définit le modèle du trait courant.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.lineDashOffset")}}</dt>
 <dd>Specifies where to start a dash array on a line.</dd>
</dl>

<h2 id="Styles_de_texte">Styles de texte</h2>

<p>Les propriétés suivantes contrôlent la manière dont le texte est rendu à l’affichage.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.font")}}</dt>
 <dd>Paramètre de fonte dont la valeur par défaut est <code>10px sans-serif</code>.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.textAlign")}}</dt>
 <dd>Paramètre d’alignement horizontal. Ses valeurs possibles sont : <code>start</code> (par défaut), <code>end</code>, <code>left</code>, <code>right</code> et <code>center</code>.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.textBaseline")}}</dt>
 <dd>Paramètre d’alignement vertical par rapport à la ligne de base du texte. Ses valeurs possibles sont : <code>top</code>, <code>hanging</code>, <code>middle</code>, <code>alphabetic</code> (par défaut), <code>ideographic</code>, <code>bottom</code>.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.direction")}}</dt>
 <dd>Direction d’affichage. Ses valeurs possibles sont : <code>ltr, rtl</code>, <code>inherit</code> (par défaut).</dd>
</dl>

<h2 id="Fill_and_stroke_styles">Fill and stroke styles</h2>

<p>Fill styling is used for colors and styles inside shapes and stroke styling is used for the lines around shapes.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.fillStyle")}}</dt>
 <dd>Color or style to use inside shapes. Default <code>#000</code> (black).</dd>
 <dt>{{domxref("CanvasRenderingContext2D.strokeStyle")}}</dt>
 <dd>Color or style to use for the lines around shapes. Default <code>#000</code> (black).</dd>
</dl>

<h2 id="Gradients_and_patterns">Gradients and patterns</h2>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.createLinearGradient()")}}</dt>
 <dd>Creates a linear gradient along the line given by the coordinates represented by the parameters.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.createRadialGradient()")}}</dt>
 <dd>Creates a radial gradient given by the coordinates of the two circles represented by the parameters.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.createPattern()")}}</dt>
 <dd>Creates a pattern using the specified image (a {{domxref("CanvasImageSource")}}). It repeats the source in the directions specified by the repetition argument. This method returns a {{domxref("CanvasPattern")}}.</dd>
</dl>

<h2 id="Shadows">Shadows</h2>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.shadowBlur")}}</dt>
 <dd>Specifies the blurring effect. Default <code>0</code></dd>
 <dt>{{domxref("CanvasRenderingContext2D.shadowColor")}}</dt>
 <dd>Color of the shadow. Default fully-transparent black.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.shadowOffsetX")}}</dt>
 <dd>Horizontal distance the shadow will be offset. Default 0.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.shadowOffsetY")}}</dt>
 <dd>Vertical distance the shadow will be offset. Default 0.</dd>
</dl>

<h2 id="Paths">Paths</h2>

<p>The following methods can be used to manipulate paths of objects.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.beginPath()")}}</dt>
 <dd>Starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.closePath()")}}</dt>
 <dd>Causes the point of the pen to move back to the start of the current sub-path. It tries to draw a straight line from the current point to the start. If the shape has already been closed or has only one point, this function does nothing.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.moveTo()")}}</dt>
 <dd>Moves the starting point of a new sub-path to the <strong>(x, y)</strong> coordinates.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.lineTo()")}}</dt>
 <dd>Connects the last point in the subpath to the <code>x, y</code> coordinates with a straight line.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}</dt>
 <dd>Adds a cubic Bézier curve to the path. It requires three points. The first two points are control points and the third one is the end point. The starting point is the last point in the current path, which can be changed using <code>moveTo()</code>before creating the Bézier curve.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}</dt>
 <dd>Adds a quadratic Bézier curve to the current path.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.arc()")}}</dt>
 <dd>Adds an arc to the path which is centered at <em>(x, y)</em> position with radius<em> r</em> starting at <em>startAngle</em> and ending at <em>endAngle</em> going in the given direction by <em>anticlockwise</em> (defaulting to clockwise).</dd>
 <dt>{{domxref("CanvasRenderingContext2D.arcTo()")}}</dt>
 <dd>Adds an arc to the path with the given control points and radius, connected to the previous point by a straight line.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.ellipse()")}} {{experimental_inline}}</dt>
 <dd>Adds an ellipse to the path which is centered at <em>(x, y)</em> position with the radii <em>radiusX</em> and <em>radiusY</em> starting at <em>startAngle</em> and ending at <em>endAngle</em> going in the given direction by <em>anticlockwise</em> (defaulting to clockwise).</dd>
 <dt>{{domxref("CanvasRenderingContext2D.rect()")}}</dt>
 <dd>Creates a path for a rectangle at<em> </em>position <em>(x, y)</em> with a size that is determined by <em>width</em> and <em>height</em>.</dd>
</dl>

<h2 id="Drawing_paths">Drawing paths</h2>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.fill()")}}</dt>
 <dd>Fills the subpaths with the current fill style.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.stroke()")}}</dt>
 <dd>Strokes the subpaths with the current stroke style.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}</dt>
 <dd>If a given element is focused, this method draws a focus ring around the current path.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}}</dt>
 <dd>Scrolls the current path or a given path into the view.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.clip()")}}</dt>
 <dd>Creates a clipping path from the current sub-paths. Everything drawn after <code>clip()</code> is called appears inside the clipping path only. For an example, see <a href="/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing">Clipping paths</a> in the Canvas tutorial.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.isPointInPath()")}}</dt>
 <dd>Reports whether or not the specified point is contained in the current path.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.isPointInStroke()")}}</dt>
 <dd>Reports whether or not the specified point is inside the area contained by the stroking of a path.</dd>
</dl>

<h2 id="Transformations">Transformations</h2>

<p>Objects in the <code>CanvasRenderingContext2D</code> rendering context have a current transformation matrix and methods to manipulate it. The transformation matrix is applied when creating the current default path, painting text, shapes and {{domxref("Path2D")}} objects. The methods listed below remain for historical and compatibility reasons as {{domxref("SVGMatrix")}} objects are used in most parts of the API nowadays and will be used in the future instead.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.currentTransform")}}</dt>
 <dd>Current transformation matrix ({{domxref("SVGMatrix")}} object).</dd>
 <dt>{{domxref("CanvasRenderingContext2D.rotate()")}}</dt>
 <dd>Adds a rotation to the transformation matrix. The angle argument represents a clockwise rotation angle and is expressed in radians.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.scale()")}}</dt>
 <dd>Adds a scaling transformation to the canvas units by x horizontally and by y vertically.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.translate()")}}</dt>
 <dd>Adds a translation transformation by moving the canvas and its origin x horzontally and y vertically on the grid.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.transform()")}}</dt>
 <dd>Multiplies the current transformation matrix with the matrix described by its arguments.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.setTransform()")}}</dt>
 <dd>Resets the current transform to the identity matrix, and then invokes the <code>transform()</code> method with the same arguments.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.resetTransform()")}} {{experimental_inline}}</dt>
 <dd>Resets the current transform by the identity matrix.</dd>
</dl>

<h2 id="Compositing">Compositing</h2>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.globalAlpha")}}</dt>
 <dd>Alpha value that is applied to shapes and images before they are composited onto the canvas. Default <code>1.0</code>(opaque).</dd>
 <dt>{{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}</dt>
 <dd>With <code>globalAlpha</code> applied this sets how shapes and images are drawn onto the existing bitmap.</dd>
</dl>

<h2 id="Drawing_images">Drawing images</h2>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.drawImage()")}}</dt>
 <dd>Draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.</dd>
</dl>

<h2 id="Pixel_manipulation">Pixel manipulation</h2>

<p>See also the {{domxref("ImageData")}} object.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.createImageData()")}}</dt>
 <dd>Creates a new, blank {{domxref("ImageData")}} object with the specified dimensions. All of the pixels in the new object are transparent black.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.getImageData()")}}</dt>
 <dd>Returns an {{domxref("ImageData")}} object representing the underlying pixel data for the area of the canvas denoted by the rectangle which starts at <em>(sx, sy)</em> and has an <em>sw</em> width and <em>sh</em> height.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.putImageData()")}}</dt>
 <dd>Paints data from the given {{domxref("ImageData")}} object onto the bitmap. If a dirty rectangle is provided, only the pixels from that rectangle are painted.</dd>
</dl>

<h2 id="Image_smoothing">Image smoothing</h2>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} {{experimental_inline}}</dt>
 <dd>Image smoothing mode; if disabled, images will not be smoothed if scaled.</dd>
</dl>

<h2 id="The_canvas_state">The canvas state</h2>

<p>The <code>CanvasRenderingContext2D</code> rendering context contains a variety of drawing style states (attributes for line styles, fill styles, shadow styles, text styles). The following methods help you to work with that state:</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.save()")}}</dt>
 <dd>Saves the current drawing style state using a stack so you can revert any change you make to it using <code>restore()</code>.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.restore()")}}</dt>
 <dd>Restores the drawing style state to the last element on the 'state stack' saved by <code>save()</code>.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.canvas")}}</dt>
 <dd>A read-only back-reference to the {{domxref("HTMLCanvasElement")}}. Might be {{jsxref("null")}} if it is not associated with a {{HTMLElement("canvas")}} element.</dd>
</dl>

<h2 id="Hit_regions">Hit regions</h2>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}</dt>
 <dd>Adds a hit region to the canvas.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.removeHitRegion()")}} {{experimental_inline}}</dt>
 <dd>Removes the hit region with the specified <code>id</code> from the canvas.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.clearHitRegions()")}} {{experimental_inline}}</dt>
 <dd>Removes all hit regions from the canvas.</dd>
</dl>

<h2 id="Non-standard_APIs">Non-standard APIs</h2>

<h3 id="Blink_and_WebKit">Blink and WebKit</h3>

<p>Most of these APIs are <a href="https://code.google.com/p/chromium/issues/detail?id=363198">deprecated and will be removed in the future</a>.</p>

<dl>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.clearShadow()</code></dt>
 <dd>Removes all shadow settings like {{domxref("CanvasRenderingContext2D.shadowColor")}} and {{domxref("CanvasRenderingContext2D.shadowBlur")}}.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.drawImageFromRect()</code></dt>
 <dd>This is redundant with an equivalent overload of <code>drawImage</code>.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.setAlpha()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.globalAlpha")}} instead.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.setCompositeOperation()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}} instead.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.setLineWidth()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.lineWidth")}} instead.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.setLineJoin()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.lineJoin")}} instead.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.setLineCap()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.lineCap")}} instead.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.setMiterLimit()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.miterLimit")}} instead.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.setStrokeColor()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.strokeStyle")}} instead.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.setFillColor()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.fillStyle")}} instead.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.setShadow()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.shadowColor")}} and {{domxref("CanvasRenderingContext2D.shadowBlur")}} instead.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.webkitLineDash</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.getLineDash()")}} and {{domxref("CanvasRenderingContext2D.setLineDash()")}} instead.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.webkitLineDashOffset</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.lineDashOffset")}} instead.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.webkitImageSmoothingEnabled</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} instead.</dd>
</dl>

<h3 id="Blink_only">Blink only</h3>

<dl>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.isContextLost()</code></dt>
 <dd>Inspired by the same <code>WebGLRenderingContext</code> method it returns <code>true</code> if the Canvas context has been lost, or <code>false</code> if not.</dd>
</dl>

<h3 id="WebKit_only">WebKit only</h3>

<dl>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.webkitBackingStorePixelRatio</code></dt>
 <dd>The backing store size in relation to the canvas element. See <a href="http://www.html5rocks.com/en/tutorials/canvas/hidpi/">High DPI Canvas</a>.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.webkitGetImageDataHD</code></dt>
 <dd>Intended for HD backing stores, but removed from canvas specifications.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.webkitPutImageDataHD</code></dt>
 <dd>Intended for HD backing stores, but removed from canvas specifications.</dd>
</dl>

<dl>
</dl>

<h3 id="Gecko_only">Gecko only</h3>

<dl>
 <dt>{{non-standard_inline}} {{domxref("CanvasRenderingContext2D.filter")}}</dt>
 <dd>CSS and SVG filters as Canvas APIs. Likely to be standardized in a new version of the specification.</dd>
</dl>

<h4 id="Prefixed_APIs">Prefixed APIs</h4>

<dl>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.mozCurrentTransform</code></dt>
 <dd>Sets or gets the current transformation matrix, see {{domxref("CanvasRenderingContext2D.currentTransform")}}.  {{ gecko_minversion_inline("7.0") }}</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.mozCurrentTransformInverse</code></dt>
 <dd>Sets or gets the current inversed transformation matrix.  {{ gecko_minversion_inline("7.0") }}</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.mozImageSmoothingEnabled</code></dt>
 <dd>See {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}.</dd>
 <dt>{{non-standard_inline}} {{deprecated_inline}} <code>CanvasRenderingContext2D.mozTextStyle</code></dt>
 <dd>Introduced in in Gecko 1.9, deprecated in favor of the {{domxref("CanvasRenderingContext2D.font")}} property.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.mozDrawText()</code></dt>
 <dd>This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.strokeText()")}} or {{domxref("CanvasRenderingContext2D.fillText()")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.mozMeasureText()</code></dt>
 <dd>This method was introduced in Gecko 1.9 and is unimplemented starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.measureText()")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.mozPathText()</code></dt>
 <dd>This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.mozTextAlongPath()</code></dt>
 <dd>This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.</dd>
</dl>

<h4 id="Internal_APIs_(chrome-context_only)">Internal APIs (chrome-context only)</h4>

<dl>
 <dt>{{non-standard_inline}} {{domxref("CanvasRenderingContext2D.drawWindow()")}}</dt>
 <dd>Renders a region of a window into the <code>canvas</code>. The contents of the window's viewport are rendered, ignoring viewport clipping and scrolling.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.demote()</code></dt>
 <dd>This causes a context that is currently using a hardware-accelerated backend to fallback to a software one. All state should be preserved.</dd>
</dl>

<h3 id="Internet_Explorer">Internet Explorer</h3>

<dl>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.msFillRule</code></dt>
 <dd>The <a href="http://cairographics.org/manual/cairo-cairo-t.html#cairo-fill-rule-t">fill rule</a> to use. This must be one of <code>evenodd</code> or <code>nonzero</code> (default).</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#2dcontext:canvasrenderingcontext2d", "CanvasRenderingContext2D")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.CanvasRenderingContext2D")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("HTMLCanvasElement")}}</li>
</ul>
