---
title: export
slug: Web/JavaScript/Reference/Statements/export
---

{{jsSidebar("Statements")}}

Инструкция **export** используется для экспорта функций, объектов или примитивов из файла (или модуля).

> **Примечание:** Эта функциональность не реализована в браузерах на данный момент, но она реализована во многих транспайлерах, таких как [Traceur Compiler](https://github.com/google/traceur-compiler), [Babel](http://babeljs.io/) or [Rollup](https://github.com/rollup/rollup).

## Синтаксис

```
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // или var
export let name1 = …, name2 = …, …, nameN; // или var, const

export default выражение;
export default function (…) { … } // или class, function*
export default function name1(…) { … } // или class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

- `nameN`
  - : Идентификатор для экспорта (чтобы он мог быть импортирован с помощью {{jsxref("Statements/import", "import")}} в другом файле (скрипте)).

## Описание

Существует два типа экспорта, каждый из которых описан ниже:

- Именованный экспорт:

  ```js
  export { myFunction }; // экспорт ранее объявленной функции
  export const foo = Math.sqrt(2); // экспорт константы
  ```

- Дефолтный экспорт (экспорт по умолчанию) (один на скрипт):

  ```js
  export default function () {} // или 'export default class {}'
  // тут не ставится точка с запятой
  ```

Именованная форма более применима для экспорта нескольких величин. Во время импорта, можно будет использовать одно и то же имя, чтобы обратиться к соответствующему экспортируемому значению.

Касательно экспорта по умолчанию (default), он может быть только один для каждого отдельного модуля (файла). Дефолтный экспорт может представлять собой функцию, класс, объект или что-то другое. Это значение следует рассматривать как "основное", так как его будет проще всего импортировать.

## Примеры

### Использование именованного экспорта

Мы могли бы использовать следующий код в модуле:

```js
// модуль"my-module.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
export { cube, foo };
```

Таким образом в другом скрипте при помощи импорта (см. [`import`](/ru/docs/Web/JavaScript/Reference/Statements/import)) мы могли бы получить следующее:

```js
import { cube, foo } from "my-module";
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

### Использование export default

Если мы хотим экспортировать единственное значение или иметь резервное значение (fallback) для данного модуля, мы можем использовать `export default`.

```js
// модуль"my-module.js"
export default function cube(x) {
  return x * x * x;
}
```

Затем, в другом скрипте можно импортировать это значение по умолчанию таким образом:

```js
import cube from "my-module";
console.log(cube(3)); // 27
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Statements/import", "import")}}
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- [Axel Rauschmayer's book: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)
