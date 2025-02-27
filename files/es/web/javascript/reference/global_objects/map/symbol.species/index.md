---
title: Map[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

La propiedad estática de acceso **`Map[Symbol.species]`** es una propiedad de acceso no utilizada que especifica como hacer copias de objetos `Map`.

## Sintaxis

```js-nolint
Map[Symbol.species]
```

### Valor devuelto

El valor de el constructor (`this`) en el cual se llamó `get [Symbol.species]`. El valor devuelto es usado para construir copias de instancias de `Map`.

## Descripción

La propiedad de acceso `[Symbol.species]` regresa el constructor por defecto para los objetos `Map`. Los constructores de las subclases pueden sobreescribirla para cambiar la asignación del constructor.

> [!NOTE]
> Esta es una propiedad que actualmente no es utilizada por ningúno de los métodos de `Map`.

## Ejemplos

### Species en objetos ordinarios

La propiedad `[Symbol.species]` regresa la función constructora por defecto, la cual es el constructor `Map` para `Map`.

```js
Map[Symbol.species]; // function Map()
```

### Species en objetos derivados

En una instancia de una subclase personalizada `Map`, como lo es `MyMap`, la propiedad _species_ de `MyMap` es el constructor de `MyMap`. Sin embargo, podrías desear sobreescribirla para regresar objetos del objeto padre `Map` en los métodos de tu clase derivada:

```js
class MyMap extends Map {
  // Sobrescribir species de MyMap en el constructor del Map padre
  static get [Symbol.species]() {
    return Map;
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
