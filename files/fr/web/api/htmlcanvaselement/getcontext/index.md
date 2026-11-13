---
title: "HTMLCanvasElement : méthode getContext()"
short-title: getContext()
slug: Web/API/HTMLCanvasElement/getContext
l10n:
  sourceCommit: 5ed97586afb0b74aea8b32b24ea630698520732a
---

{{APIRef("Canvas API")}}

La méthode **`getContext()`** de l'interface {{DOMxRef("HTMLCanvasElement")}} retourne un contexte de dessin pour le canevas, ou {{JSxRef("null")}} si l'identifiant de contexte n'est pas pris en charge, ou si le canevas a déjà été configuré pour un autre mode de contexte.

Les appels ultérieurs à cette méthode sur un même élément canevas, avec le même argument `contextType`, retourneront toujours la même instance de contexte de dessin que celle retournée lors du premier appel. Il n'est pas possible d'obtenir un autre objet de contexte de dessin pour un même élément canevas.

## Syntaxe

```js-nolint
getContext(contextType)
getContext(contextType, contextAttributes)
```

### Paramètres

- `contextType`
  - : Une chaîne de caractères contenant l'identifiant de contexte définissant le contexte de dessin associé au canevas. Les valeurs possibles sont&nbsp;:
    - `"2d"`
      - : Crée un objet {{DOMxRef("CanvasRenderingContext2D")}} représentant un contexte de représentation bidimensionnel.
    - `"webgl"` (ou `"experimental-webgl"`)
      - : Crée un objet {{DOMxRef("WebGLRenderingContext")}} représentant un contexte de représentation tridimensionnel. Ce contexte n'est disponible que sur les navigateurs implémentant la version 1 de [WebGL](/fr/docs/Web/API/WebGL_API) (OpenGL ES 2.0).
    - `"webgl2"`
      - : Crée un objet {{DOMxRef("WebGL2RenderingContext")}} représentant un contexte de représentation tridimensionnel. Ce contexte n'est disponible que sur les navigateurs implémentant la version 2 de [WebGL](/fr/docs/Web/API/WebGL_API) (OpenGL ES 3.0).
    - `"webgpu"`
      - : Crée un objet {{DOMxRef("GPUCanvasContext")}} représentant un contexte de rendu pour les pipelines WebGPU. Ce contexte n'est disponible que sur les navigateurs implémentant [l'API WebGPU](/fr/docs/Web/API/WebGPU_API).
    - `"bitmaprenderer"`
      - : Crée un {{DOMxRef("ImageBitmapRenderingContext")}} qui ne fournit que la fonctionnalité de remplacement du contenu du canevas par une {{DOMxRef("ImageBitmap")}} donnée.

    > [!NOTE]
    > L'identifiant `"experimental-webgl"` est utilisé
    > dans les nouvelles implémentations de WebGL. Ces implémentations n'ont pas encore
    > atteint la conformité à la suite de tests, ou les pilotes graphiques sur la plateforme ne sont pas encore
    > stables. Le [Khronos Group <sup>(angl.)</sup>](https://www.khronos.org/) certifie les implémentations WebGL
    > selon certaines [règles de conformité <sup>(angl.)</sup>](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes` {{Optional_Inline}}
  - : Vous pouvez utiliser plusieurs attributs de contexte lors de la création de votre contexte de rendu, par exemple&nbsp;:

    ```js
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
    });
    ```

    Attributs du contexte 2D&nbsp;:
    - `alpha`
      - : Valeur booléenne indiquant si le canevas contient un canal alpha. Si la valeur est `false`, l'agent utilisateur sait que l'arrière-plan est toujours opaque, ce qui peut accélérer le rendu de contenus et d'images transparentes.
    - `colorSpace` {{Optional_Inline}}
      - : Définit l'espace colorimétrique du contexte de rendu. Valeurs possibles&nbsp;:
        - `"srgb"` sélectionne l'espace colorimétrique [sRGB](https://fr.wikipedia.org/wiki/SRGB). C'est la valeur par défaut.
        - `"display-p3"` sélectionne l'espace colorimétrique [display-p3](https://fr.wikipedia.org/wiki/DCI-P3).
    - `colorType` {{Optional_Inline}}
      - : Définit le type de couleur du contexte de rendu. Valeurs possibles&nbsp;:
        - `"unorm8"` définit les canaux de couleur sur des valeurs entières non signées sur 8 bits (valeur par défaut).
        - `"float16"` définit les canaux de couleur sur des valeurs en virgule flottante 16 bits.
    - `desynchronized`
      - : Valeur booléenne suggérant à l'agent utilisateur de réduire la latence en désynchronisant le cycle de peinture du canevas de la boucle d'évènements.
    - `willReadFrequently`
      - : Valeur booléenne indiquant si de nombreuses opérations de lecture sont prévues. Cela forcera l'utilisation d'un canevas 2D logiciel (plutôt que matériel) et peut réduire l'utilisation mémoire lors d'appels fréquents à {{DOMxRef("CanvasRenderingContext2D.getImageData", "getImageData()")}}.

    Attributs du contexte WebGL&nbsp;:
    - `alpha`
      - : Valeur booléenne indiquant si le canevas contient un tampon alpha.
    - `depth`
      - : Valeur booléenne indiquant que le tampon de dessin doit posséder un tampon de profondeur d'au moins 16 bits.
    - `stencil`
      - : Valeur booléenne indiquant que le tampon de dessin doit posséder un tampon stencil d'au moins 8 bits.
    - `desynchronized`
      - : Valeur booléenne suggérant à l'agent utilisateur de réduire la latence en désynchronisant le cycle de peinture du canevas.
    - `antialias`
      - : Valeur booléenne indiquant s'il faut tenter de réaliser de l'anti-aliasing.
    - `failIfMajorPerformanceCaveat`
      - : Valeur booléenne indiquant si la création du contexte doit échouer lorsque les performances système sont faibles ou qu'aucun GPU matériel n'est disponible.
    - `powerPreference`
      - : Indication à l'agent utilisateur sur la configuration GPU souhaitée pour le contexte WebGL. Valeurs possibles&nbsp;:
        - `"default"`
          - : Laisser l'agent utilisateur décider de la configuration GPU la plus adaptée (valeur par défaut).
        - `"high-performance"`
          - : Priorise les performances de rendu par rapport à la consommation d'énergie.
        - `"low-power"`
          - : Priorise l'économie d'énergie par rapport aux performances de rendu.

    - `premultipliedAlpha`
      - : Valeur booléenne indiquant que le composeur de page supposera que le tampon de dessin contient des couleurs avec alpha pré-multiplié.
    - `preserveDrawingBuffer`
      - : Si la valeur est vraie, les tampons ne seront pas effacés et conserveront leurs valeurs jusqu'à ce qu'ils soient effacés ou réécrits par l'auteur·ice.
    - `xrCompatible`
      - : Valeur booléenne suggérant à l'agent utilisateur d'utiliser un adaptateur graphique compatible pour un [appareil XR immersif](/fr/docs/Web/API/WebXR_Device_API). Il est déconseillé de définir ce drapeau de manière synchrone à la création du contexte&nbsp;; préférez appeler la méthode asynchrone {{DOMxRef("WebGLRenderingContext.makeXRCompatible()")}} au moment où vous prévoyez de démarrer une session XR.

    > [!NOTE]
    > La spécification WebGPU ne définit pas d'attributs spécifiques pour `getContext()`. Elle propose plutôt des options de configuration via la méthode {{DOMxRef("GPUCanvasContext.configure()")}}.

### Valeur retournée

Un contexte de rendu, qui est soit un

- {{DOMxRef("CanvasRenderingContext2D")}} pour `"2d"`,
- {{DOMxRef("WebGLRenderingContext")}} pour `"webgl"` et `"experimental-webgl"`,
- {{DOMxRef("WebGL2RenderingContext")}} pour `"webgl2"`,
- {{DOMxRef("GPUCanvasContext")}} pour `"webgpu"`,
- {{DOMxRef("ImageBitmapRenderingContext")}} pour `"bitmaprenderer"`.

Si l'identifiant de contexte n'est pas pris en charge, ou si le canevas a déjà été configuré pour un autre mode de contexte, `null` est retourné.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Est levée si le canevas a transféré son contrôle à un `OffscreenCanvas` en appelant {{DOMxRef("HTMLCanvasElement.transferControlToOffscreen()")}}.

## Exemples

Étant donné l'élément HTML {{HTMLElement("canvas")}}&nbsp;:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

vous pouvez obtenir un contexte `2d` du canevas grâce au code suivant&nbsp;:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx); // CanvasRenderingContext2D { /* … */ }
```

Vous avez alors le [contexte 2D de représentation](/fr/docs/Web/API/CanvasRenderingContext2D) pour un canevas, et vous pouvez dessiner à l'intérieur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("HTMLCanvasElement")}}&nbsp;: Interface définissant la méthode `HTMLCanvasElement.getContext()`
- La méthode {{DOMxRef("OffscreenCanvas.getContext()")}}
- Les méthodes {{DOMxRef("CanvasRenderingContext2D.getContextAttributes()")}}, {{DOMxRef("WebGLRenderingContext.getContextAttributes()")}}
- Contextes de représentation disponibles&nbsp;: {{DOMxRef("CanvasRenderingContext2D")}}, {{DOMxRef("ImageBitmapRenderingContext")}}, {{DOMxRef("WebGLRenderingContext")}}, {{DOMxRef("WebGL2RenderingContext")}}, {{DOMxRef("GPUCanvasContext")}}
- [Espace colorimétrique DCI-P3](https://fr.wikipedia.org/wiki/DCI-P3)
- [Espace colorimétrique sRGB](https://fr.wikipedia.org/wiki/SRGB)
