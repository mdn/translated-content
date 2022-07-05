---
title: WebGLRenderingContext.viewport()
slug: Web/API/WebGLRenderingContext/viewport
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/viewport
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.viewport()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) définit le viewport, qui indique la transformation affine de x et de y, de coordonnées d'appareil normalisées en coordonnées de fenêtre.

## Syntaxe

    void gl.viewport(x, y, largeur, hauteur);

### Paramètres

- `x`
  - : Un {{domxref("GLint")}} indiquant la coordonnée horizontale du coin inférieur gauche de l'origine du viewport. Valeur par défaut : 0.
- `y`
  - : Un {{domxref("GLint")}} indiquant la coordonnée verticale du coin inférieur gauche de l'origine du viewport. Valeur par défaut : 0.
- largeur
  - : Un {{domxref("Glsizei")}} non négatif indiquant la largeur du viewport. Valeur par défaut : la largeur du canevas.
- height
  - : Un {{domxref("Glsizei")}} non négatif indiquant la hauteur du viewport. Valeur par défaut : la hauteur du canevas.

### Valeur retournée

Aucune.

### Erreurs déclenchées

Si *largeur* ou *hauteur* est une valeur négative, une erreur `gl.INVALID_VALUE` est déclenchée.

## Exemples

Lorsque vous créez un contexte WebGL pour la première fois, la taille de la fenêtre correspondra à celle du canevas. Toutefois, si vous redimensionnez le canevas, vous devrez indiquer au contexte de WebGL une nouvelle définition de viewport. Dans cette situation, vous pouvez utiliser `gl.viewport`.

```js
gl.viewport(0, 0, canevas.width, canevas.height);
```

La largeur et la hauteur de la fenêtre sont limitées à une plage dépendante de l'implémentation. Pour obtenir cette plage, vous pouvez utiliser la constante `MAX_VIEWPORT_DIMS`, qui renvoie un {{jsxref ("Int32Array")}}.

```js
gl.getParameter(gl.MAX_VIEWPORT_DIMS);
// Par ex., Int32Array[16384, 16384]
```

Pour obtenir le viewport en cours, faites une requête sur la constante `VIEWPORT`.

```js
gl.getParameter(gl.VIEWPORT);
// e.g. Int32Array[0, 0, 640, 480]
```

## Spécifications

| Spécification                                                                    | Statut                               | Commentaire               |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------------- |
| {{SpecName('WebGL', "#5.14.4", "viewport")}}                     | {{Spec2('WebGL')}}             | Définition initiale.      |
| {{SpecName('OpenGL ES 2.0', "glViewport.xml", "glViewport")}} | {{Spec2('OpenGL ES 2.0')}} | Page man de l'API OpenGL. |

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.viewport")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.scissor()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
