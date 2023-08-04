---
title: WebGLRenderingContext.getShaderParameter()
slug: Web/API/WebGLRenderingContext/getShaderParameter
---

{{APIRef("WebGL")}}

La méthode `WebGLRenderingContext.getShaderParameter()` de l'API WebGL retourne des informations sur le shader donné.

## Syntaxe

```js
quelconque gl.getShaderParameter(shader, nomp);
```

### Parameters

- shader
  - : Un {{domxref("WebGLShader")}} depuis lequel obtenir une information de paramètre.
- nomp

  - : Un {{domxref("Glenum")}} indiquant l'information à retrouver. Valeurs possibles :

    - `gl.DELETE_STATUS`&nbsp;: retourne un {{domxref("GLboolean")}} indicating si le shader est marqué pour suppression ou non.
    - `gl.COMPILE_STATUS`&nbsp;: retourne un {{domxref("GLboolean")}} indiquant si la dernière compilation du shader a réussi ou non.
    - `gl.SHADER_TYPE`&nbsp;: retourne un {{domxref("GLenum")}} indiquant si le shader est un objet shader de sommets (`gl.VERTEX_SHADER`) ou shader de fragment (`gl.FRAGMENT_SHADER`).

### Valeur retournée

Retourne l'information de shader demandée (telle qu'indiquée par `nomp`).

## Exemples

```js
gl.getShaderParameter(shader, gl.SHADER_TYPE);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
