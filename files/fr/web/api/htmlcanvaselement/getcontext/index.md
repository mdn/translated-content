---
title: HTMLCanvasElement.getContext()
slug: Web/API/HTMLCanvasElement/getContext
tags:
  - API
  - Canevas
  - HTMLCanvasElement
  - Méthode
  - Reference
translation_of: Web/API/HTMLCanvasElement/getContext
---
{{APIRef("Canvas API")}}

La méthode **`HTMLCanvasElement.getContext()`** retourne un contexte de dessin sur le canevas, ou {{jsxref("null")}} si l'identificateur de contexte n'est pas supporté.

## Syntaxe

    canvas.getContext(typeDeContexte, attributsDeContexte);

### Paramètres

- typeDeContexte

  - : Est un {{domxref("DOMString")}} contenant l'identifcateur de contexte définissant le contexte de dessin associé au canevas. Les valeurs possibles sont :

    - `"2d`", conduisant à la création d'un objet {{domxref("CanvasRenderingContext2D")}} représentant un contexte de représentation bi-dimensionnel.
    - `"webgl"` (ou `"experimental-webgl"`) pour créer un objet {{domxref("WebGLRenderingContext")}} représentant un contexte de représentation tri-dimensionnel. Ce contexte est seulement disponible sur les navigateurs implémentant la version 1 de [WebGL](/en-US/docs/Web/WebGL) (OpenGL ES 2.0).
    - "`webgl2`" pour créer un objet {{domxref("WebGL2RenderingContext")}} représentant un contexte de représentation tri-dimensionnel. Ce contexte est seulement disponible sur les navigateurs implémentant la version 2 de [WebGL](/en-US/docs/Web/WebGL) (OpenGL ES 3.0). {{experimental_inline}}.
    - `"bitmaprenderer"` pour créer un {{domxref("ImageBitmapRenderingContext")}} ne fournissant que la fonctionnalité de remplacement du contenu du canevas par une {{domxref("ImageBitmap")}} donnée.

    Note : l'identificateur "`experimental-webgl`" est utilisé dans les nouvelles implémentations de WebGL. Ces implémentations n'ont pas encore obtenu la conformité à la suite de test, ou l'emploi des pilotes graphiques sur la plateforme n'est pas encore stable. Le [Khronos Group](https://www.khronos.org/) certifie les implémentations WebGL sous certaines [règles de conformité](https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `attributsDeContexte`

  - : Vous pouvez utiliser plusieurs attributs de contexte quand vous créez votre contexte de représentation, par exemple :

    ```js
    canvas.getContext('webgl',
                     { antialias: false,
                       depth: false });
    ```

    attributs de contexte 2d :

    - **`alpha`**&nbsp;: booléen indiquant que le canevas contient un canal alpha. Si positionné à `false`, le navigateur saura ainsi que l'arrière-plan est toujours opaque, ce qui peut alors accélérer le dessin de contenus et d'images transparents.
    - {{non-standard_inline}} (Gecko seulement) **`willReadFrequently`**&nbsp;: booléen indiquant si de nombreuses opérations de relecture sont prévues ou non. Cela forcera l'utilisation d'un canevas 2D logiciel (au lieu d'un canevas accéléré matériellement) et peut faire économiser de la mémoire lors d'appels fréquents à [`getImageData()`](/fr/docs/Web/API/CanvasRenderingContext2D/getImageData). Cette option est seulement disponible si l'indicateur `gfx.canvas.willReadFrequently.enable` est positionné à `true` (ce qui, par défaut, est seulement le cas pour B2G/Firefox OS).
    - {{non-standard_inline}} (Blink seulement) **`storage`**&nbsp;: chaîne indiquant quel stockage est utilisé (`persistent` par défaut).

    attributs de contexte WebGL :

    - **`alpha`**&nbsp;: booléen indiquant que le canevas contient un tampon alpha.
    - **`depth`**&nbsp;: booléen indiquant que le tampon de dessin a un tampon de profondeur d'au moins 16 bits.
    - **`stencil`**&nbsp;: booléen indiquant que le tampon de dessin a un tampon stencil d'au moins 8 bits.
    - **`antialias`**&nbsp;: booléen indiquant si un anti-aliasing doit être effectué ou non.
    - **`premultipliedAlpha`**&nbsp;: booléen indiquant que le composeur de page supposera que le tampon de dessin contient des couleurs avec alpha pré-multiplié.
    - **`preserveDrawingBuffer`**&nbsp;: si la valeur est `true`, les tampons ne seront pas effacés et conserveront leurs valeurs jusqu'à ce qu'elles soient effacées ou réécrites par l'auteur.
    - **`failIfMajorPerformanceCaveat`** : booléen indiquant qu'un contexte sera créé si la performance du système est faible.

### Valeur retournée :

Un {{domxref("RenderingContext")}}, qui est soit un

- {{domxref("CanvasRenderingContext2D")}} pour `"2d"`,
- {{domxref("WebGLRenderingContext")}} pour `"webgl"` et `"experimental-webgl"`,
- {{domxref("WebGL2RenderingContext")}} pour `"webgl2"` ou
- {{domxref("ImageBitmapRenderingContext")}} pour `"bitmaprenderer"`.

Si le *typeDeContexte* ne correspond pas à un contexte de dessin possible, `null` est retourné.

## Exemples

Étant donné l'élément {{HTMLElement("canvas")}} :

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

vous pouvez obtenir un contexte 2d du canevas grâce au code suivant :

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
console.log(ctx); // CanvasRenderingContext2D { ... }
```

Vous avez alors le [contexte 2D de représentation](/en-US/docs/Web/API/CanvasRenderingContext2D) pour un canevas, et vous pouvez dessiner à l'intérieur.

## Spécifications

| Spécification                                                                                                                        | Statut                           | Commentaire                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-canvas-getcontext", "HTMLCanvasElement.getContext")}} | {{Spec2('HTML WHATWG')}} | Pas de changement depuis l'instantané le plus récent, {{SpecName('HTML5 W3C')}} |
| {{SpecName('HTML5.1', "scripting-1.html#dom-canvas-getcontext", "HTMLCanvasElement.getContext")}}     | {{Spec2('HTML5.1')}}     |                                                                                        |
| {{SpecName('HTML5 W3C', "scripting-1.html#dom-canvas-getcontext", "HTMLCanvasElement.getContext")}} | {{Spec2('HTML5 W3C')}}     | Instantané du {{SpecName('HTML WHATWG')}} contenant la définition initiale.   |

## Compatibilité navigateurs

{{Compat("api.HTMLCanvasElement.getContext")}}

## Voir aussi

- L'interface la définissant, {{domxref("HTMLCanvasElement")}}.
- {{domxref("OffscreenCanvas.getContext()")}}.
- Contextes de représentation disponibles : {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}} et {{domxref("WebGL2RenderingContext")}} et {{domxref("ImageBitmapRenderingContext")}}.
