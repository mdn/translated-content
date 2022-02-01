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
{{APIRef}}

L'interface **CanvasRenderingContext2D** est utilisée pour dessiner des rectangles, du texte, des images et d'autres objets sur l'élément canvas. Il fournit le contexte de rendu 2D pour la surface de dessin d'un élément {{HTMLElement("canvas")}}.

Pour obtenir un objet de cette interface, appelez {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} sur un élément `<canvas>`, en fournissant "2d" comme argument :

    var canevas = document.getElementById('tutorial'); // dans votre HTML, cet élément apparaît comme <canvas id="monCanevas"></canvas>
    var ctx = canevas.getContext('2d');

Une fois que vous avez le contexte de rendu 2D pour un canevas, vous pouvez dessiner à l'intérieur. Par exemple :

    ctx.fillStyle = "rgb(200,0,0)"; // définit la couleur de remplissage du rectangle
    ctx.fillRect(10, 10, 55, 50);   // dessine le rectangle à la position 10, 10 d'une largeur de 55 et d'une hauteur de 50

Voir les propriétés et les méthodes dans la barre latérale et plus bas. Le [tutoriel canvas](/fr-FR/docs/Web/API/Canvas_API/Tutorial) a davantage d'informations, d'exemples et de ressources également.

## Dessin de rectangles

Il existe trois méthodes qui dessinent immédiatement des rectangles sur la bitmap.

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Initialise tous les pixels dans le rectangle défini par le point de départ _(x, y)_ et la taille _(largeur, hauteur)_ à noir transparent, en effaçant tout contenu précédemment dessiné.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Dessine un rectangle rempli à la position _(x, y)_ dont la taille est déterminée par _largeur_ et _hauteur_.
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Peint un rectangle ayant un point de départ en *(x, y)*, une largeur *l* et une hauteur _h_ sur le canevas, en utilisant le style de trait en cours.

## Dessiner du texte

Les méthodes suivantes permettent de dessiner du texte. Voir aussi l'objet {{domxref("TextMetrics")}} pour les propriétés du texte.

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : Dessine (rempli) un texte donné à la position (x,y) donnée.
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : Dessine (contour) un texte donné à la position (x, y) donnée.
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : Renvoie un objet {{domxref("TextMetrics")}}.

## Styles de ligne

Les méthodes et propriétés suivantes controllent comment les lignes sont dessinées.

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : Largeur des lignes. Défaut `1.0`
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : Type de finission pour la fin de la ligne. Valeurs possible: `butt` (défaut), `round`, `square`.
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : Définit le type de coin quand deux lignes se rejoignent. Valeurs possible: `round`, `bevel`, `miter` (défaut).
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : Le taux limite du miter. Sa valeur par défaut est `10`.
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : Retourne le tableau de modèle du trait courant contenant un nombre pair de nombre positifs.
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : Définit le modèle du trait courant.
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : Specifies where to start a dash array on a line.

## Styles de texte

Les propriétés suivantes contrôlent la manière dont le texte est rendu à l’affichage.

- {{domxref("CanvasRenderingContext2D.font")}}
  - : Paramètre de fonte dont la valeur par défaut est `10px sans-serif`.
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : Paramètre d’alignement horizontal. Ses valeurs possibles sont : `start` (par défaut), `end`, `left`, `right` et `center`.
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : Paramètre d’alignement vertical par rapport à la ligne de base du texte. Ses valeurs possibles sont : `top`, `hanging`, `middle`, `alphabetic` (par défaut), `ideographic`, `bottom`.
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : Direction d’affichage. Ses valeurs possibles sont : `ltr, rtl`, `inherit` (par défaut).

## Fill and stroke styles

Fill styling is used for colors and styles inside shapes and stroke styling is used for the lines around shapes.

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : Color or style to use inside shapes. Default `#000` (black).
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : Color or style to use for the lines around shapes. Default `#000` (black).

## Gradients and patterns

- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : Creates a linear gradient along the line given by the coordinates represented by the parameters.
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : Creates a radial gradient given by the coordinates of the two circles represented by the parameters.
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : Creates a pattern using the specified image (a {{domxref("CanvasImageSource")}}). It repeats the source in the directions specified by the repetition argument. This method returns a {{domxref("CanvasPattern")}}.

## Shadows

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
  - : Specifies the blurring effect. Default `0`
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : Color of the shadow. Default fully-transparent black.
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : Horizontal distance the shadow will be offset. Default 0.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : Vertical distance the shadow will be offset. Default 0.

## Paths

The following methods can be used to manipulate paths of objects.

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : Starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : Causes the point of the pen to move back to the start of the current sub-path. It tries to draw a straight line from the current point to the start. If the shape has already been closed or has only one point, this function does nothing.
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
  - : Moves the starting point of a new sub-path to the **(x, y)** coordinates.
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
  - : Connects the last point in the subpath to the `x, y` coordinates with a straight line.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}
  - : Adds a cubic Bézier curve to the path. It requires three points. The first two points are control points and the third one is the end point. The starting point is the last point in the current path, which can be changed using `moveTo()`before creating the Bézier curve.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}
  - : Adds a quadratic Bézier curve to the current path.
- {{domxref("CanvasRenderingContext2D.arc()")}}
  - : Adds an arc to the path which is centered at *(x, y)* position with radius *r* starting at *startAngle* and ending at *endAngle* going in the given direction by *anticlockwise* (defaulting to clockwise).
- {{domxref("CanvasRenderingContext2D.arcTo()")}}
  - : Adds an arc to the path with the given control points and radius, connected to the previous point by a straight line.
- {{domxref("CanvasRenderingContext2D.ellipse()")}} {{experimental_inline}}
  - : Adds an ellipse to the path which is centered at *(x, y)* position with the radii *radiusX* and *radiusY* starting at *startAngle* and ending at *endAngle* going in the given direction by *anticlockwise* (defaulting to clockwise).
- {{domxref("CanvasRenderingContext2D.rect()")}}
  - : Creates a path for a rectangle at position *(x, y)* with a size that is determined by *width* and *height*.

## Drawing paths

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : Fills the subpaths with the current fill style.
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : Strokes the subpaths with the current stroke style.
- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : If a given element is focused, this method draws a focus ring around the current path.
- {{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}}
  - : Scrolls the current path or a given path into the view.
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : Creates a clipping path from the current sub-paths. Everything drawn after `clip()` is called appears inside the clipping path only. For an example, see [Clipping paths](/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing) in the Canvas tutorial.
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : Reports whether or not the specified point is contained in the current path.
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : Reports whether or not the specified point is inside the area contained by the stroking of a path.

## Transformations

Objects in the `CanvasRenderingContext2D` rendering context have a current transformation matrix and methods to manipulate it. The transformation matrix is applied when creating the current default path, painting text, shapes and {{domxref("Path2D")}} objects. The methods listed below remain for historical and compatibility reasons as {{domxref("SVGMatrix")}} objects are used in most parts of the API nowadays and will be used in the future instead.

- {{domxref("CanvasRenderingContext2D.currentTransform")}}
  - : Current transformation matrix ({{domxref("SVGMatrix")}} object).
- {{domxref("CanvasRenderingContext2D.rotate()")}}
  - : Adds a rotation to the transformation matrix. The angle argument represents a clockwise rotation angle and is expressed in radians.
- {{domxref("CanvasRenderingContext2D.scale()")}}
  - : Adds a scaling transformation to the canvas units by x horizontally and by y vertically.
- {{domxref("CanvasRenderingContext2D.translate()")}}
  - : Adds a translation transformation by moving the canvas and its origin x horzontally and y vertically on the grid.
- {{domxref("CanvasRenderingContext2D.transform()")}}
  - : Multiplies the current transformation matrix with the matrix described by its arguments.
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - : Resets the current transform to the identity matrix, and then invokes the `transform()` method with the same arguments.
- {{domxref("CanvasRenderingContext2D.resetTransform()")}} {{experimental_inline}}
  - : Resets the current transform by the identity matrix.

## Compositing

- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
  - : Alpha value that is applied to shapes and images before they are composited onto the canvas. Default `1.0`(opaque).
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : With `globalAlpha` applied this sets how shapes and images are drawn onto the existing bitmap.

## Drawing images

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : Draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.

## Pixel manipulation

See also the {{domxref("ImageData")}} object.

- {{domxref("CanvasRenderingContext2D.createImageData()")}}
  - : Creates a new, blank {{domxref("ImageData")}} object with the specified dimensions. All of the pixels in the new object are transparent black.
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
  - : Returns an {{domxref("ImageData")}} object representing the underlying pixel data for the area of the canvas denoted by the rectangle which starts at *(sx, sy)* and has an *sw* width and *sh* height.
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
  - : Paints data from the given {{domxref("ImageData")}} object onto the bitmap. If a dirty rectangle is provided, only the pixels from that rectangle are painted.

## Image smoothing

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} {{experimental_inline}}
  - : Image smoothing mode; if disabled, images will not be smoothed if scaled.

## The canvas state

The `CanvasRenderingContext2D` rendering context contains a variety of drawing style states (attributes for line styles, fill styles, shadow styles, text styles). The following methods help you to work with that state:

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : Saves the current drawing style state using a stack so you can revert any change you make to it using `restore()`.
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : Restores the drawing style state to the last element on the 'state stack' saved by `save()`.
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : A read-only back-reference to the {{domxref("HTMLCanvasElement")}}. Might be {{jsxref("null")}} if it is not associated with a {{HTMLElement("canvas")}} element.

## Hit regions

- {{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}
  - : Adds a hit region to the canvas.
- {{domxref("CanvasRenderingContext2D.removeHitRegion()")}} {{experimental_inline}}
  - : Removes the hit region with the specified `id` from the canvas.
- {{domxref("CanvasRenderingContext2D.clearHitRegions()")}} {{experimental_inline}}
  - : Removes all hit regions from the canvas.

## Non-standard APIs

### Blink and WebKit

Most of these APIs are [deprecated and will be removed in the future](https://code.google.com/p/chromium/issues/detail?id=363198).

- {{non-standard_inline}} `CanvasRenderingContext2D.clearShadow()`
  - : Removes all shadow settings like {{domxref("CanvasRenderingContext2D.shadowColor")}} and {{domxref("CanvasRenderingContext2D.shadowBlur")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.drawImageFromRect()`
  - : This is redundant with an equivalent overload of `drawImage`.
- {{non-standard_inline}} `CanvasRenderingContext2D.setAlpha()`
  - : Use {{domxref("CanvasRenderingContext2D.globalAlpha")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setCompositeOperation()`
  - : Use {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineWidth()`
  - : Use {{domxref("CanvasRenderingContext2D.lineWidth")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineJoin()`
  - : Use {{domxref("CanvasRenderingContext2D.lineJoin")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineCap()`
  - : Use {{domxref("CanvasRenderingContext2D.lineCap")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setMiterLimit()`
  - : Use {{domxref("CanvasRenderingContext2D.miterLimit")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setStrokeColor()`
  - : Use {{domxref("CanvasRenderingContext2D.strokeStyle")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setFillColor()`
  - : Use {{domxref("CanvasRenderingContext2D.fillStyle")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setShadow()`
  - : Use {{domxref("CanvasRenderingContext2D.shadowColor")}} and {{domxref("CanvasRenderingContext2D.shadowBlur")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitLineDash`
  - : Use {{domxref("CanvasRenderingContext2D.getLineDash()")}} and {{domxref("CanvasRenderingContext2D.setLineDash()")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitLineDashOffset`
  - : Use {{domxref("CanvasRenderingContext2D.lineDashOffset")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitImageSmoothingEnabled`
  - : Use {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} instead.

### Blink only

- {{non-standard_inline}} `CanvasRenderingContext2D.isContextLost()`
  - : Inspired by the same `WebGLRenderingContext` method it returns `true` if the Canvas context has been lost, or `false` if not.

### WebKit only

- {{non-standard_inline}} `CanvasRenderingContext2D.webkitBackingStorePixelRatio`
  - : The backing store size in relation to the canvas element. See [High DPI Canvas](http://www.html5rocks.com/en/tutorials/canvas/hidpi/).
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitGetImageDataHD`
  - : Intended for HD backing stores, but removed from canvas specifications.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitPutImageDataHD`
  - : Intended for HD backing stores, but removed from canvas specifications.

<!---->

### Gecko only

- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.filter")}}
  - : CSS and SVG filters as Canvas APIs. Likely to be standardized in a new version of the specification.

#### Prefixed APIs

- {{non-standard_inline}} `CanvasRenderingContext2D.mozCurrentTransform`
  - : Sets or gets the current transformation matrix, see {{domxref("CanvasRenderingContext2D.currentTransform")}}.  {{ gecko_minversion_inline("7.0") }}
- {{non-standard_inline}} `CanvasRenderingContext2D.mozCurrentTransformInverse`
  - : Sets or gets the current inversed transformation matrix.  {{ gecko_minversion_inline("7.0") }}
- {{non-standard_inline}} `CanvasRenderingContext2D.mozImageSmoothingEnabled`
  - : See {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozTextStyle`
  - : Introduced in in Gecko 1.9, deprecated in favor of the {{domxref("CanvasRenderingContext2D.font")}} property.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.mozDrawText()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.strokeText()")}} or {{domxref("CanvasRenderingContext2D.fillText()")}} instead.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.mozMeasureText()`
  - : This method was introduced in Gecko 1.9 and is unimplemented starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.measureText()")}} instead.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.mozPathText()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.mozTextAlongPath()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.

#### Internal APIs (chrome-context only)

- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.drawWindow()")}}
  - : Renders a region of a window into the `canvas`. The contents of the window's viewport are rendered, ignoring viewport clipping and scrolling.
- {{non-standard_inline}} `CanvasRenderingContext2D.demote()`
  - : This causes a context that is currently using a hardware-accelerated backend to fallback to a software one. All state should be preserved.

### Internet Explorer

- {{non-standard_inline}} `CanvasRenderingContext2D.msFillRule`
  - : The [fill rule](http://cairographics.org/manual/cairo-cairo-t.html#cairo-fill-rule-t) to use. This must be one of `evenodd` or `nonzero` (default).

## Specifications

| Specification                                                                                                                                    | Status                           | Comment |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#2dcontext:canvasrenderingcontext2d", "CanvasRenderingContext2D")}} | {{Spec2('HTML WHATWG')}} |         |

## Browser compatibility

{{Compat("api.CanvasRenderingContext2D")}}

## See also

- {{domxref("HTMLCanvasElement")}}
