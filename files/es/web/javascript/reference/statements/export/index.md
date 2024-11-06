---
title: export
slug: Web/JavaScript/Reference/Statements/export
---

{{jsSidebar("Statements")}}

La declaración **`export`** se utiliza al crear módulos de JavaScript para exportar funciones, objetos o tipos de dato primitivos del módulo para que puedan ser utilizados por otros programas con la sentencia {{jsxref("Statements/import", "import")}}.

Los módulos exportados están en {{jsxref("Strict_mode","strict mode")}} tanto si se declaran así como si no. La sentencia export no puede ser utilizada en scripts embebidos.

## Sintaxis

```js
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // también var
export let name1 = …, name2 = …, …, nameN; // también var, const
export function FunctionName(){...}
export class ClassName {...}

export default expression;
export default function (…) { … } // también class, function*
export default function name1(…) { … } // también class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

- `nameN`
  - : Identificador a ser exportado (es posible importarlo a través de {{jsxref("Statements/import", "import")}} en otro script).

## Descripción

Existen dos tipos diferentes de exportación , **nombrada** y **por defecto**. Se pueden tener varias exportaciones nombradas por módulo pero sólo una exportación por defecto. Cada tipo corresponde a una de las sintaxis siguientes:

- Exports con nombre:

  ```js
  // exporta la función previamente declarada
  export { myFunction };

  // exporta una constante
  export const foo = Math.sqrt(2);
  ```

- Exports por defecto (function):

  ```js
  export default function () {}
  ```

- Exports por defecto (class):

  ```js
  export default class {}
  ```

Los export con nombre son útiles cuando se necesitan exportar múltiples valores. Durante el import, es obligatorio usar el mismo nombre que el correspondiente objeto.

Pero un export por defecto puede ser importado con cualquier nombre, por ejemplo:

```js
export default k = 12; // en el archivo test.js

import m from "./test"; // notese que tenemos la libertad de usar import m en lugar de import k, porque k era el export por defecto

console.log(m); // escribirá 12
```

Sólo puede haber un export por defecto.

La siguiente sintaxis no exporta un export por defecto del módulo importado:

```js
export * from …;
```

Si necesita exportar por defecto, escriba lo siguiente en su lugar:

```js
import mod from "mod";
export default mod;
```

## Ejemplos

### Usando exports con nombre

En el módulo, podremos usar el siguiente código:

```js
// module "my-module.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw: function () {
    console.log("From graph draw function");
  },
};
export { cube, foo, graph };
```

De esta forma, en otro script, podemos tener:

```js
//You should use this script in html with the type module ,
//eg ''<script type="module" src="demo.js"></script>",
//open the page in a httpserver,otherwise there will be a CORS policy error.
//script demo.js

import { cube, foo, graph } from "my-module";
graph.options = {
  color: "blue",
  thickness: "3px",
};
graph.draw();
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

### Usando el export por defecto

Si queremos exportar un sólo valor o tener uno por defecto para nuestro módulo, podemos usar un export por defecto:

```js
// module "my-module.js"
export default function cube(x) {
  return x * x * x;
}
```

De esta forma la importación de un export default será sumamemte sencilla:

```js
import cube from "my-module";
console.log(cube(3)); // 27
```

Tenga en cuenta que no es posible usar `var`, `let` o `const` con `export default`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Sentencias/import", "import")}}
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), publicación del blog de Hacks por Jason Orendorff
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), publicación del blog de Hacks por Lin Clark
- [Libro de Axel Rauschmayer: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)
