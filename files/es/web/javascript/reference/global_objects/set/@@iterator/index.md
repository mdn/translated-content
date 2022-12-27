---
title: Set.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
tags:
  - Iteradores
translation_of: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
original_slug: Web/JavaScript/Referencia/Objetos_globales/Set/@@iterator
---
{{JSRef}}

El valor inicial de la propiedad **`@@iterator`**, es la misma función objeto que el valor inicial de la propiedad {{jsxref("Set.prototype.values()", "values")}}.

{{EmbedInteractiveExample("pages/js/set-prototype-@@iterator.html")}}

El código fuente de este ejemplo interactivo lo puedes encontrar en el repositorio de Github. Si quieres contribuir con más ejemplos interactivos, por favor clona <https://github.com/mdn/interactive-examples> y envíanos una pull request.

## Sintaxis

```
mySet[Symbol.iterator]
```

### Valor retornado

La función **iteradora** `Set` , la cuál es {{jsxref("Set.prototype.values()", "values()")}} por defecto.

## Ejemplos

### Usando `[@@iterator]()`

```js
const mySet = new Set();
mySet.add('0');
mySet.add(1);
mySet.add({});

const setIter = mySet[Symbol.iterator]();

console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // Object
```

### Usando `[@@iterator]()` con `for..of`

```js
const mySet = new Set();
mySet.add('0');
mySet.add(1);
mySet.add({});

for (const v of mySet) {
  console.log(v);
}
```

## Especificaciones

| Especificación                                                                                                   | Estado                       | Comentario          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-set.prototype-@@iterator', 'Set.prototype[@@iterator]')}} | {{Spec2('ES2015')}}     | Definición inicial. |
| {{SpecName('ESDraft', '#sec-set.prototype-@@iterator', 'Set.prototype[@@iterator]')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidad en navegadores

{{Compat("javascript.builtins.Set.@@iterator")}}

## Vea también

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
