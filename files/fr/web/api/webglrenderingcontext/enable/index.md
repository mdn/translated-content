---
title: WebGLRenderingContext.enable()
slug: Web/API/WebGLRenderingContext/enable
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/enable
original_slug: Web/API/WebGLRenderingContext/activer
---
{{APIRef("WebGL")}}

La méthode `WebGLRenderingContext.enable()` de l'API WebGL active des fonctionnalités WebGL particulières pour ce contexte.

## Syntaxe

    void gl.enable(fon);

### Paramètres

- `fon`

  - : Un {{domxref("GLenum")}} indiquant quelle fonctionnalité WebGL activer. Valeurs possibles :

    | Constante                     | Description                                                                                                                                                                |
    | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Active le mélange des valeurs de couleur de fragment calculées. Voir {{domxref("WebGLRenderingContext.blendFunc()")}}.                                     |
    | `gl.CULL_FACE`                | Active le masquage des polygones. Voir {{domxref("WebGLRenderingContext.cullFace()")}}.                                                                   |
    | `gl.DEPTH_TEST`               | Active les comparaisons et les mises à jour dans le tampon de profondeur. Voir {{domxref("WebGLRenderingContext.depthFunc()")}}.                           |
    | `gl.DITHER`                   | Active le tramage des composantes de couleur avant qu'elles ne soient écrites dans le tampon de couleur.                                                                   |
    | `gl.POLYGON_OFFSET_FILL`      | Active l'ajout d'un décalage aux valeurs de profondeur des fragments de polygone. Voir {{domxref("WebGLRenderingContext.polygonOffset()")}}.               |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Active le calcul d'une valeur de couverture temporaire déterminée par la valeur alpha.                                                                                     |
    | `gl.SAMPLE_COVERAGE`          | Active le ET de la couverture des fragments avec la valeur de couverture temporaire. Voir {{domxref("WebGLRenderingContext.sampleCoverage()")}}.        |
    | `gl.SCISSOR_TEST`             | Active le test de détourage qui supprime les fragments se trouvant en dehors du rectangle de détourage. Voir {{domxref("WebGLRenderingContext.scissor()")}}. |
    | `gl.STENCIL_TEST`             | Active le test et les mises à jour stencil dans le stencil buffer. Voir {{domxref("WebGLRenderingContext.stencilFunc()")}}.                              |

    Lors de l'utilisation d'un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, les valeurs suivantes sont en outre disponibles :

    | Constante               | Description                                                                                                                                                                        |
    | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Les primitives sont supprimées immédiatement après l'étape de rastérisation, mais après l'étape de renvoi de transformation optionnelle. Les commandes `gl.clear()` sont ignorées. |

### Valeur retournée

Aucune.

## Exemples

```js
gl.enable(gl.DITHER);
```

Pour vérifier que cette fonctionnalité est activée, utilisez la méthode {{domxref("WebGLRenderingContext.isEnabled()")}} :

```js
gl.isEnabled(gl.DITHER);
// true
```

## Spécifications

| Spécification                                                                    | Statut                               | Commentaire                          |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------ |
| {{SpecName('WebGL', "#5.14.3", "enable")}}                         | {{Spec2('WebGL')}}             | Définition initiale pour WebGL.      |
| {{SpecName('OpenGL ES 2.0', "glEnable.xml", "glEnable")}}     | {{Spec2('OpenGL ES 2.0')}} | Page man de l'API OpenGL ES 2.0.     |
| {{SpecName('OpenGL ES 3.0', "glEnable.xhtml", "glEnable")}} | {{Spec2('OpenGL ES 3.0')}} | Page man de l'API OpenGL ES 3.0 API. |

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.enable")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.disable()")}}
- {{domxref("WebGLRenderingContext.isEnabled()")}}
