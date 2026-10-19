---
title: Copia superficial
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: b7c5617fc1d8eb00c6884a708983da21ad61b228
---

{{GlossarySidebar}}

Una **copia superficial** (_shallow copy_) de un objeto es aquella cuyas propiedades comparten las mismas {{Glossary("object reference", "referencias")}} (apuntando a los mismos valores subyacentes) que las del objeto original a partir del cual se creó la copia. Como resultado, al modificar el objeto original o la copia, es posible que el otro objeto también cambie. Este comportamiento contrasta con el de una {{Glossary("deep copy")}} en la que el original y la copia son totalmente independientes.

La copia superficial suele implementarse de la siguiente manera:

1. Se crea un nuevo objeto del mismo tipo. La cadena de prototipos casi siempre se conserva. Por ejemplo, realizar una copia profunda de un {{jsxref("Map")}} debería dar como resultado un {{jsxref("Map")}} y no otra cosa.
2. Por cada propiedad propia del objeto original, se define una propiedad con la misma clave en el nuevo objeto.
3. El valor de cada nueva propiedad se establece con la misma referencia que el valor de la propiedad original. Si el valor de la propiedad es un tipo primitivo, no se realiza ninguna copia.
4. Cualquier dato que no se exponga como propiedades (como {{jsxref("Map")}}) se transfiere, pero sin copiar las referencias a objetos contenidas en dichos datos, siempre que la implementación reconozca el tipo de objeto y sepa cómo recuperar y establecer la información.

Cabe señalar que, dado que JavaScript no dispone de un mecanismo nativo para realizar una copia superficial genérica (los existentes solo contemplan tipos de objetos específicos, como objetos simples o matrices), las implementaciones de las distintas bibliotecas suelen diferir en aspectos técnicos, tales como:

- Si se copian las propiedades no enumerables o las propiedades de tipo símbolo
- Si se copian los descriptores de propiedad
- Si las propiedades de acceso se copian como tales
- Qué estructuras de datos admiten la copia de datos que no son propiedades

La copia de un objeto cuyas propiedades tienen todas valores primitivos encaja tanto en la definición de {{Glossary("deep copy")}} (copia profunda) como en la de copia superficial. Sin embargo, resulta poco útil hablar de la profundidad de dicha copia, ya que no posee propiedades anidadas, y generalmente se habla de copia profunda en el contexto de la mutación de propiedades anidadas.

En las copias superficiales, solo se copian las propiedades de nivel superior, no los valores de los objetos anidados. Por lo tanto:

- Reasignar propiedades de nivel superior de la copia no afecta al objeto de origen.
- Reasignar propiedades de objetos anidados de la copia sí afecta al objeto de origen.

En JavaScript, todas las operaciones estándar integradas de copia de objetos ([spread syntax](/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from), y [`Object.assign()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) crean copias superficiales en lugar de copias profundas.

Considera el siguiente ejemplo, en el que se crea un objeto de tipo arreglo `ingredientsList` y, a continuación, se crea un objeto `ingredientsListCopy` copiando dicho objeto `ingredientsList`.

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]
```

La reasignación del valor de una propiedad anidada será visible en ambos objetos.

```js
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]
```

Reasignar el valor de una propiedad de nivel superior (el índice `0` en este caso) solo será visible en el objeto modificado.

```js
ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
console.log(JSON.stringify(ingredientsListCopy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredientsList));
// ["noodles",{"list":["rice flour","water"]}]
```

## Véase también

- Términos de glosario relacionados:
  - {{Glossary("Deep equality")}}
  - {{Glossary("Deep copy")}}
