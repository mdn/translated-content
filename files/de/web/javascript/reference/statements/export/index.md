---
title: export
slug: Web/JavaScript/Reference/Statements/export
tags:
  - ECMAScript 2015
  - JavaScript
  - Modules
  - Statement
  - export
translation_of: Web/JavaScript/Reference/Statements/export
---
{{jsSidebar("Statements")}}

Das **export-Statement** wird verwendet, um Funktionen und Objekte aus einer gegebenen Datei (oder _Modul_) zu exportieren.

## Syntax

    export { name1, name2, …, nameN };
    export { variable1 as name1, variable2 as name2, …, nameN };
    export let name1, name2, …, nameN; // oder: var
    export let name1 = …, name2 = …, …, nameN; // oder: var, const

    export default expression;
    export default function (…) { … } // oder: class, function*
    export default function name1(…) { … } // oder: class, function*
    export { name1 as default, … };

    export * from …;
    export { name1, name2, …, nameN } from …;
    export { import1 as name1, import2 as name2, …, nameN } from …;

- `nameN`
  - : Bezeichner der exportiert werden soll (damit er in einem anderen Script via [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) importiert werden kann).

## Beschreibung

Es gibt zwei verschiedene Arten von Exports, die jeweils der oben angegebene Syntax entsprechen:

- Benannte Exports:

  ```js
  export { myFunction }; // exportiert eine Funktion, die zuvor deklariert wurde
  export const foo = Math.sqrt(2); // exportiert eine Konstante
  ```

- Default-Exports (nur einer je Script):

  ```js
  export default function() {} // oder 'export default class {}'
  // hier ist kein Semikolon
  ```

Benannte Exports sind nützlich um mehrere Werte zu exportieren. Beim Import kann man den selben Namen verwenden um auf den entsprechenden Wert zu verweisen.

Bezüglich Default-Export: es kann nur einen einzigen Default-Export pro Modul geben. Ein Default-Export kann eine Funktion sein, eine Klasse, ein Objekt oder irgendetwas anderes. Da dieser Wert am einfachsten importiert werden kann wird er als der "Haupt-Export" des Moduls angesehen.

## Beispiele

### Benannte Exports

Im Modul können wir den folgenden Code verwenden:

```js
// Modul "my-module.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
export { cube, foo };
```

Daraufhin könnten wir nun in einem anderen Script (cf. [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import)) wie folgt vorgehen:

```js
import { cube, foo } from 'my-module';
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888
```

### Standard-Export

Wenn wir nur einen einzelnen Wert exportieren wollen, oder einen Fallback-Wert für unser Modul zur Verfügung haben möchten, können wir einen Default-Export verwenden:

```js
// Modul "my-module.js"
export default function cube(x) {
  return x * x * x;
}
```

In einem anderen Script kann dieser Default-Export dann unkompliziert importiert werden:

```js
import myFunction from 'my-module';
console.log(myFunction(3)); // 27
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar            |
| -------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-exports', 'Exports')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-exports', 'Exports')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.statements.export")}}

## Siehe auch

- {{jsxref("Statements/import", "import")}}
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks Blog-Post von Jason Orendorff
- [Axel Rauschmayer's Buch: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)
