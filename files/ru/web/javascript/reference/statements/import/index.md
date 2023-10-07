---
title: import
slug: Web/JavaScript/Reference/Statements/import
---

{{jsSidebar("Statements")}}

Инструкция **import** используется для импорта ссылок на значения, экспортированные из внешнего модуля. Импортированные модули находятся в {{JSxRef ("Strict_mode", "строгом режиме")}} независимо от того, объявляете ли вы их как таковые или нет. Для работы инструкции во встроенных скриптах нужно прописать у тэга script `type="module"`.

Существует также function-like динамический `import()`, который не требует скриптов с типом "`module`".

Обратная совместимость может быть обеспечена с помощью атрибута `nomodule` тега [script](/ru/docs/Web/HTML/Element/script).

Динамический импорт полезен в ситуациях, когда вы хотите загрузить модуль условно или по требованию. Статическая форма предпочтительна для загрузки начальных зависимостей и может быть более полезна для инструментов статического анализа и [tree shaking](/ru/docs/Glossary/Tree_shaking).

> **Примечание:** На данный момент эта функциональность [только начинает поддерживаться](https://jakearchibald.com/2017/es-modules-in-browsers/) браузерами. Полноценная реализация присутствует во многих транспайлерах, таких как TypeScript и [Babel](http://babeljs.io/), а также в сборщиках, например, в [Rollup](https://github.com/rollup/rollup) и [Webpack](https://webpack.js.org/).

## Синтаксис

```
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , […] } from "module-name";
import defaultExport, { export [ , […] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
import("/module-name.js").then(module => {…}) // Динамический импорт
```

- `defaultExport`
  - : Имя объекта, который будет ссылаться на значение экспорта по умолчанию (дефолтный экспорт) из модуля.
- `module-name`
  - : Имя модуля для импорта. Это зачастую относительный или абсолютный путь к `.js` файлу модуля без указания расширения `.js`. Некоторые сборщики могут разрешать или даже требовать использования расширения; проверяйте своё рабочее окружение. Допускаются только строки с одиночными или двойными кавычками.
- `name`
  - : Имя локального объекта, который будет использован как своего рода пространство имён, ссылающееся на импортируемые значения.

<!---->

- `export, exportN`
  - : Имена значений, которые будут импортированы.

<!---->

- `alias, aliasN`
  - : Имена, которые будут ссылаться на импортируемые значения.

## Описание

Параметр `name` это имя локального объекта, который будет использован как своего рода пространство имён, ссылающееся на импортируемые значения. Параметры `export` определяют отдельные именованные значения, в то время как `import * as name` импортирует все значения. Примеры ниже объясняют синтаксис.

### Импорт всего содержимого модуля

Этот код вставляет объект `myModule` в текущую область видимости, содержащую все экспортированные значения из модуля, находящегося в файле `/modules/my-module.js`.

```js
import * as myModule from "/modules/my-module.js";
```

В данном случае, доступ к импортируемым значениям можно осуществить с использованием имени модуля (в данном случае "myModule") в качестве пространства имён. Например, если импортируемый выше модуль включает в себя экспорт метода `doAllTheAmazingThings()`, вы можете вызвать его так:

```js
myModule.doAllTheAmazingThings();
```

### Импорт единичного значения из модуля

Определённое ранее значение, названное `myExport,` которое было экспортировано из модуля `my-module` либо неявно (если модуль был экспортирован целиком), либо явно (с использованием инструкции {{jsxref("Statements/export", "export")}}), позволяет вставить `myExport` в текущую область видимости.

```js
import { myExport } from "/modules/my-module.js";
```

### Импорт нескольких единичных значений

Этот код вставляет оба значения `foo` и `bar` в текущую область видимости.

```js
import { foo, bar } from "/modules/my-module.js";
```

### Импорт значений с использованием более удобных имён

Вы можете переименовать значения, когда импортируете их. Например, этот код вставляет `shortName` в текущую область видимости.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

### Переименование нескольких значений в одном импорте

Код, который импортирует несколько значений из модуля, используя более удобные имена.

```js
import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short,
} from "/modules/my-module.js";
```

### Импорт модуля для использования его побочного эффекта

Импорт всего модуля только для использования побочного эффекта от его вызова, не импортируя что-либо. Это запускает глобальный код модуля, но в действительности не импортирует никаких значений.

```js
import "/modules/my-module.js";
```

### Импорт значения по умолчанию

Есть возможность задать дефолтный {{jsxref("Statements/export", "export")}} (будь то объект, функция, класс или др.). Инструкция `import` затем может быть использована для импорта таких значений.

Простейшая версия прямого импорта значения по умолчанию:

```js
import myDefault from "/modules/my-module.js";
```

Возможно также использование такого синтаксиса с другими вариантами из перечисленных выше (импорт пространства имён или именованный импорт). В таком случае, импорт значения по умолчанию должен быть определён первым. Для примера:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule использовано как пространство имён
```

или

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
// именованный импорт конкретных значений
```

### Импорт переменных

Если вы импортируете переменные, то в данной области видимости они ведут себя как константы.

Такой код выведет ошибку:

##### my-module.js

```js
export let a = 2;
export let b = 3;
```

##### main.js

```js
import { a, b } from "/modules/my-module.js";
a = 5;
b = 6;
// Uncaught TypeError: Assignment to constant variable.
```

Для импорта можно воспользоваться объектом в котором хранятся эти переменные.

Такой код будет рабочим:

##### my-module.js

```js
export let obj = { a: 2, b: 4 };
```

##### main.js

```js
import { obj } from "/modules/my-module.js";

obj.a = 1;
obj.b = 4;
```

Учитывая, что `import` хранит именно ссылки на значения, экспортированные из внешнего модуля, то это можно использовать как замыкания.

### Динамический импорт

Ключевое слово `import` можно использовать как функцию для динамического импорта модулей. Вызов `import()` возвращает Promise.

```js
import("/modules/my-module.js").then((module) => {
  // Делаем что-нибудь с модулем
});
```

Как следствие возврата Promise, с динамическим импортом можно использовать ключевое слово `await`

```js
let module = await import("/modules/my-module.js");
```

Обратите внимание, что несмотря на то, что динамический импорт выглядит как вызов функции, он им по сути не является, т.е. не наследует от `Function.prototype` и, как следствие, его невозможно использовать вместе с методами `.call`, `.apply` и `.bind`

## Примеры

Импорт из вспомогательного модуля для помощи в обработке запроса AJAX JSON.

### Модуль: file.js

```js
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, (data) => callback(JSON.parse(data)));
}
```

### Основной код: main.js

```js
import { getUsefulContents } from "/modules/file.js";

getUsefulContents("http://www.example.com", (data) => {
  doSomethingUseful(data);
});
```

### Динамический импорт

Этот пример показывает, как можно загрузить на страницу дополнительный модуль в зависимости от действий пользователя (в данном случае, по клику на кнопку), а затем использовать функции из загруженного модуля. Промисы - это не единственный способ использовать динамический импорт. Функция `import()` также может использоваться совместно с `await`.

```js
const main = document.querySelector("main");
for (const link of document.querySelectorAll("nav > a")) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    import("/modules/my-module.js")
      .then((module) => {
        module.loadPageInto(main);
      })
      .catch((err) => {
        main.textContent = err.message;
      });
  });
}
```

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}

## Смотрите также

- {{jsxref("Statements/export", "export")}}
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- [Axel Rauschmayer's book: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)
