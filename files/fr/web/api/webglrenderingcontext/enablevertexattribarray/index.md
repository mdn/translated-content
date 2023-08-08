---
title: WebGLRenderingContext.enableVertexAttribArray()
slug: Web/API/WebGLRenderingContext/enableVertexAttribArray
---

{{APIRef("WebGL")}}

La méthode {{domxref ("WebGLRenderingContext")}} **`enableVertexAttribArray()` -** qui fait partie de l'API WebGL - active le tableau générique des attributs de sommet à l'indice spécifié dans la liste des tableaux d'attributs.

> **Note :** Vous pouvez désactiver le tableau d'attributs en appelant {{domxref("WebGLRenderingContext.disableVertexAttribArray", "disableVertexAttribArray()")}}.

Dans WebGL, les valeurs s'appliquant à un sommet particulier sont stockées dans des attributs. Ceux-ci ne sont disponibles que pour le code JavaScript et le shader de sommet. Les attributs sont référencés par un numéro d'indice dans la liste des attributs gérés par la GPU. Certains indices d'attributs de sommet peuvent avoir des buts prédéfinis, suivant la plate-forme et/ou la GPU. D'autres sont affectés par la couche WebGL lorsque vous créez les attributs.

De toute façon, puisque les attributs ne peuvent pas être utilisés sauf s'ils sont activés, et ils sont désactivés par défaut, vous devez appeler `enableVertexAttribArray()` pour activer les attributs individuels, afin qu'ils puissent être utilisés. Ceci fait, d'autres méthodes peuvent être utilisées pour accéder à l'attribut, y compris {{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}}, {{domxref("WebGLRenderingContext.vertexAttrib", "vertexAttrib*()")}}, et {{domxref("WebGLRenderingContext.getVertexAttrib"," getVertexAttrib()")}}.

## Syntaxe

```js
void gl.enableVertexAttribArray(indice);
```

### Paramètres

- `indice`
  - : Un {{domxref("GLuint")}} indiquant le numéro d'indice identifiant de façon unique l'attribut de sommet à activer. Si vous connaissez le nom de l'attribut mais pas son indice, vous pouvez obtenir l'indice en appelant {{domxref ("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}}.

### Valeur retournée

`undefined`.

### Erreurs

Pour vérifier d'éventuelles erreurs après l'appel à `enableVertexAttribArray()`, appelez {{domxref("WebGLRenderingContext.getError", "getError()")}}.

- `WebGLRenderingContext.INVALID_VALUE`
  - : L'`indice` spécifié est invalide, c'est-à-dire qu'il est supérieur ou égal au nombre maximal d'entrées autorisées dans la liste des attributs de sommet du contexte, comme indiqué par la valeur de `WebGLRenderingContext.MAX_VERTEX_ATTRIBS`.

## Exemple

Ce code — un extrait de l'exemple complet [Un exemple d'animation 2D WebGL de base](/fr-FR/docs/Web/API/WebGL_API/Basic_2D_animation_example) — montre l'utilisation de `enableVertexArray()` pour activer l'attribut qui sera utilisé par la couche WebGL pour passer des sommets individuels depuis le tampon des sommets à la fonction shader de sommet.

```js
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

aVertexPosition = gl.getAttribLocation(programmeShader, "aVertexPosition");

gl.enableVertexAttribArray(aVertexPosition);
gl.vertexAttribPointer(
  aVertexPosition,
  vertexNumComponents,
  gl.FLOAT,
  false,
  0,
  0,
);

gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
```

> **Note :** Cet extrait de code provient de [la fonction animateScene()](/fr-FR/docs/Web/API/WebGL_API/Basic_2D_animation_example#Drawing_and_animating_the_scene) dans "Un exemple d'animation WebGL 2D de base". Voir cet article pour l'exemple complet et pour voir l'animation résultante en action.

Ce code définit le tampon des sommets qui sera utilisé pour dessiner les triangles de la forme en appelant {{domxref("WebGLRenderingContext.bindBuffer", "bindBuffer()")}}. Ensuite, l'indice de l'attribut de position des sommets est obtenu à partir du programme shader en appelant {{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}}.

Avec l'indice de l'attribut de position des sommets maintenant disponible dans `aVertexPosition`, nous appelons `enableVertexAttribArray()` pour activer l'attribut de position afin qu'il puisse être utilisé par le programme shader (en particulier, par le shader de sommet).

Le tampon des sommets est alors lié à l'attribut `aVertexPosition` en appelant {{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}}. Cette étape n'est pas évidente, puisque cette liaison est presque un effet de biais. Mais cela a pour résultat qu'un accès à `aVertexPosition` récupére désormais des données à partir du tampon des sommets.

Avec l'association définie entre le tampon des sommets de notre forme et l'attribut `aVertexPosition` utilisé pour fournir les sommets un par un dans le shader de sommet, nous sommes prêts à dessiner la forme en appelant {{domxref ("WebGLRenderingContext.drawArrays", "drawArrays()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Données en WebGL](/fr-FR/docs/Web/API/WebGL_API/Data)
- [Ajout de contenu 2D à un contexte WebGL](/fr-FR/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
- [Un exemple d'animation WebGL 2D de base](/fr-FR/docs/Web/API/WebGL_API/Basic_2D_animation_example)
- {{domxref("WebGLRenderingContext.disableVertexAttribArray", "disableVertexAttribArray()")}}
