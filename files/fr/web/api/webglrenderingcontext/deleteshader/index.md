---
title: WebGLRenderingContext.deleteShader()
slug: Web/API/WebGLRenderingContext/deleteShader
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.deleteShader()`** de l'API WebGL marque l'objet {{domxref("WebGLShader")}} indiqué pour suppression. Il sera ensuite supprimé dès que le shader ne sera plus utilisé. Cette méthode n'a aucun effet si le shader a déjà été supprimé, et le {{domxref ("WebGLShader")}} est automatiquement marqué pour la suppression lorsqu'il est détruit par le garbage collector.

## Syntaxe

```js
void gl.deleteShader(shader);
```

### Paramètres

- shader
  - : Un objet {{domxref("WebGLShader")}} à détruire.

### Valeur retournée

Aucune.

## Exemples

### Suppression d'un shader

```js
gl.deleteShader(shader);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
