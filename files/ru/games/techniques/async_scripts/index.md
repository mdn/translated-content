---
title: Асинхронные скрипты для asm.js
slug: Games/Techniques/Async_scripts
---

Каждая средняя или большая игра должна компилировать код [asm.js](/ru/docs/Games/Tools/asm.js) как часть асинхронного скрипта, чтобы дать браузеру максимальную гибкость для оптимизации процесса компиляции. В Gecko асинхронная компиляция позволяет движку JavaScript компилировать asm.js из основного потока когда игра загружается, и кешировать сгенерированный машинный код, так что игру не нужно компилировать при последующих загрузках (начиная с Firefox 28). Чтобы увидеть разницу, переключите `javascript.options.parallel_parsing` в `about:config`.

## Написание асинхронного скрипта

Получить асинхронную компиляцию легко: при написании JavaScript просто используйте `async` атрибут следующим образом:

```
<script async src="file.js"></script>
```

или, чтобы сделать то же самое через скрипт:

```
var script = document.createElement('script');
script.src = "file.js";
document.body.appendChild(script);
```

(скрипты создаются из скрипта по умолчанию `async`.) Стандартная оболочка HTML, которую генерирует Emscripten, создаёт последнее.

## Когда асинхронный не асинхронный?

Две распространённые ситуации, в которых сценарий не асинхронен (как [определено спецификацией HTML](http://www.w3.org/TR/html5/scripting-1.html) ):

```html
<script async src="file.js"></script>
```

а также

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

Оба считаются «встроенными» скриптами, компилируются и запускаются сразу

Что если ваш код находится в строке JS? Вместо использования `eval` или `innerHTML`, оба из которых запускают синхронную компиляцию, вы должны использовать BLOB-объект с URL объекта:

```
var blob = new Blob([codeString]);
var script = document.createElement('script');
var url = URL.createObjectURL(blob);
script.onload = script.onerror = function() { URL.revokeObjectURL(url); };
script.src = url;
document.body.appendChild(script);
```

Настройка `src` вместо настройки `innerHTML` делает этот скрипт асинхронным.
