---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
tags:
  - API
  - Canevas
  - Experimental
  - Interface
  - Reference
browser-compat: api.OffscreenCanvas
translation_of: Web/API/OffscreenCanvas
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

L'interface `OffscreenCanvas` fournit un canevas qui peut être restitué hors écran. Il est disponible dans les contextes à la fois window et [worker](/fr-FR/docs/Web/API/Web_Workers_API).

> **Note :** Cette API n'est actuellement implémentée que pour les contextes [WebGL1](/fr-FR/docs/Web/API/WebGLRenderingContext) et[WebGL2](/fr-FR/docs/Web/API/WebGL2RenderingContext). Voir {{bug(801176)}} pour le support de l'[API canvas](/fr-FR/docs/Web/API/Canvas_API) depuis les workers.

## Constructeur

- {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}}
  - : Constructeur `OffscreenCanvas`. Crée un nouvel objet `OffscreenCanvas`.

## Propriétés

- {{domxref("OffscreenCanvas.height")}}
  - : La hauteur du canevas hors écran.
- {{domxref("OffscreenCanvas.width")}}
  - : La largeur du canevas hors écran.

## Méthodes

- {{domxref("OffscreenCanvas.getContext()")}}
  - : Retourne un contexte de rendu pour le canevas hors écran.

<!---->

- {{domxref("OffscreenCanvas.toBlob()")}}
  - : Crée un objet {{domxref("Blob")}} représentant l'image contenue dans le canevas.

<!---->

- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
  - : Crée un objet {{domxref("ImageBitmap")}} à partir de l'image la plus récemment générée du `OffscreenCanvas`.

## Exemples

### Affichage synchrone d'images produites par un `OffscreenCanvas`

Une façon d'utiliser l'API `OffscreenCanvas` est d'utiliser un {{domxref("RenderingContext")}} obtenu à partir d'un objet `OffscreenCanvas` pour générer de nouvelles images. Une fois qu'une nouvelle image a fini d'être générée dans ce contexte, la méthode {{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}} peut être appelée pour sauvegarder l'image générée la plus récente. Cette méthode retourne un objet {{domxref("ImageBitmap")}}, qui peut être utilisé dans une grande variété d'API Web et également dans un second canevas, sans créer de copie par transfert.

Pour afficher l'`ImageBitmap`, vous pouvez utiliser un contexte {{domxref("ImageBitmapRenderingContext")}}, qui peut être créé en appelant `canvas.getContext("bitmaprenderer")` sur un élément canevas (visible). Ce contexte fournit uniquement des fonctionnalités pour remplacer le contenu du canevas par l'`ImageBitmap` donnée. Un appel à {{domxref("ImageBitmapRenderingContext.transferImageBitmap()")}} avec l'`ImageBitmap` précédemment affichée et enregistrée à partir de OffscreenCanvas, affichera l'`ImageBitmap` sur le canevas et transférera son appartenance au canevas. Un seul `OffscreenCanvas` peut transférer des images dans un nombre arbitraire d'autres objets `ImageBitmapRenderingContext`.

Étant donnés ces deux éléments {{HTMLElement("canvas")}} :

```html
<canvas id="une"></canvas>
<canvas id="deux"></canvas>
```

le code suivant fournira la restitution, en utilisant un `OffscreenCanvas` comme décrit ci-dessus.

```js
var une = document.getElementById("une").getContext("bitmaprenderer");
var deux = document.getElementById("deux").getContext("bitmaprenderer");

var horsEcran = new OffscreenCanvas(256, 256);
var gl = horsEcran.getContext('webgl');

// ... un peu de dessin pour le premier canevas en utilisant le contexte gl ...

// Exécuter la restitution dans le premier canevas
var bitmapUne = horsEcran.transferToImageBitmap();
une.transferImageBitmap(bitmapUne);

// ... davantage de dessin pour le second canevas en utilisant le context gl ...

// Exécuter la restitution pour le second canevas
var bitmapDeux = horsEcran.transferToImageBitmap();
deux.transferImageBitmap(bitmapDeux);
```

### Affichage asynchrone d'images produites par un `OffscreenCanvas`

Une autre façon d'utiliser l'API `OffscreenCanvas` est d'appeler {{domxref("HTMLCanvasElement.transferControlToOffscreen", "transferControlToOffscreen()")}} sur un élément {{HTMLElement("canvas")}}, soit sur un worker, soit sur le thread principal, ce qui retournera un objet `OffscreenCanvas` à partir d'un objet {{domxref("HTMLCanvasElement")}} depuis le thread principal. Appeler {{domxref("OffscreenCanvas.getContext", "getContext()")}} permettra d'obtienir alors un `RenderingContext` à partir de ce `OffscreenCanvas`.

Afin de rendre les cadres visibles, vous pouvez appeler `commit()` sur ce `RenderingContext`, afin que les cadres soient renvoyés dans l'élément {{HTMLElement ("canvas")}} original.

Notez que dans Firefox, cette API n'est actuellement implémentée que pour le [contexte WebGL](/fr-FR/docs/Web/API/WebGL_API) ({{domxref ("WebGLRenderingContext.commit()")}}). Pour la prise en charge de l'API Canvas 2D par les employés, voir {{bug (801176)}}.

main.js (code du thread principal) :

```js
var canevasHtml = document.getElementById("canevas");
var horsEcran = canevasHtml.transferControlToOffscreen();

var worker = new Worker("offscreencanvas.js");
worker.postMessage({canvas: offscreen}, [offscreen]);
```

offscreencanvas.js (code worker) :

```js
onmessage = function(evt) {
  var canevas = evt.data.canvas.
  var gl = canevas.getContext("webgl");

  // ... un peu de dessin en utilisant le contexte gl ...

  // Renvoyer les images dans l'HTMLCanvasElement original
  gl.commit();
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat("api.OffscreenCanvas")}}

## Voir aussi

- [WebGL Off the Main Thread – Mozilla Hacks](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/)
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageBitmapRenderingContext")}}
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
- {{domxref("WebGLRenderingContext.commit()")}}
