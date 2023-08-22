---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/stack
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}} {{non-standard_header}}

## Сводка

Нестандартное свойство **`stack`** объекта {{jsxref("Error")}} возвращает трассировку стека вызываемых функций в порядке их выполнения, вместе с номерами строк, именами файлов и аргументами. Строка со стеком заполняется от самых недавних вызовов до вызова из глобальной области видимости.

## Описание

Каждый шаг находится на отдельной строке; первая часть строки содержит имя функции (если это не вызов из глобальной области видимости), затем знак собаки (`@`), местоположение файла (кроме случая, когда функция является конструктором ошибки, которую она выбрасывает), двоеточие и, если есть местоположение файла, номер строки. Обратите внимание, что объект {{jsxref("Error")}} также обладает свойствами `fileName`, `lineNumber` и `columnNumber`, позволяющими извлечь имя файла, номер строки и столбца из выброшенной ошибки (но только самой ошибки, а не всего стека вызовов).

Обратите внимание, что такой формат используется в Firefox. Нет никакого «стандартного формата». Однако, Safari 6+ и Opera 12- используют очень похожий формат. С другой стороны, браузеры, использующие движок JavaScript V8 (например, Chrome, Opera 15+, Браузер Android) и IE10+, используют другой формат (смотрите эту статью по [`error.stack`](http://msdn.microsoft.com/ru-ru/library/windows/apps/hh699850.aspx) в MSDN).

**Значения аргументов в стеке**: до Firefox 14 ({{bug("744842")}}) за именем функции и прямо перед знаком собаки (`@`) в круглых скобках следовали значения аргументов, преобразованные в строки. Хотя объекты (или массивы и прочее) преобразовывались в форму `"[object Object]"`, и, таким образом, невозможно было узнать их содержимое, скалярные значения могли быть извлечены (это всё ещё можно использовать в Firefox 14 — однако проще для получения аргументов использовать `arguments.callee.caller.arguments`, а для получения имени функции — `arguments.callee.caller.name`). Значение `"undefined"` показывалось как `"(void 0)"`. Обратите внимание, что если строковые аргументы содержали значения, включающие символы `"@"`, `"("`, `")"` (или если они включали имена файлов), вам не так то просто было разбить строку на составные части. Таким образом, в Firefox 14 и более поздних версиях это перестало быть проблемой.

## Примеры

Следующая разметка HTML демонстрирует использование свойства `stack`.

```html
<!doctype html>
<meta charset="UTF-8" />
<title>Пример трассировки стека</title>
<body>
  <script>
    function trace() {
      try {
        throw new Error("Моя ошибка");
      } catch (e) {
        alert(e.stack);
      }
    }
    function b() {
      trace();
    }
    function a() {
      b(3, 4, "\n\n", undefined, {});
    }
    a("первый вызов, первый аргумент");
  </script>
</body>
```

Предполагается, что разметка выше сохранена как `C:\example.html` в файловой системе Windows. Она выводит следующий текст в диалоговом окне:

Начиная с Firefox 30 и более поздних версий, вывод содержит номер колонки ({{bug("762556")}}):

```
trace@file:///C:/example.html:9:17
b@file:///C:/example.html:16:13
a@file:///C:/example.html:19:13
@file:///C:/example.html:21:9
```

с Firefox 14 по Firefox 29:

```
trace@file:///C:/example.html:9
b@file:///C:/example.html:16
a@file:///C:/example.html:19
@file:///C:/example.html:21
```

Firefox 13 и более ранние версии выводят следующий текст:

```
Error("Моя ошибка")@:0
trace()@file:///C:/example.html:9
b(3,4,"\n\n",(void 0),[object Object])@file:///C:/example.html:16
a("первый вызов, первый аргумент")@file:///C:/example.html:19
@file:///C:/example.html:21
```

### Стек кода в функции `eval()`

Начиная с Firefox 30, стек вызовов кода в вызовах `Function()` и `eval()` даёт более подробную информацию о номере строки и колонки внутри этих вызовов. Вызовы `Function` обозначаются `"> Function"`, а вызовы `eval()` обозначаются `"> eval"`. Смотрите {{bug("332176")}}.

```js
try {
  new Function("throw new Error()")();
} catch (e) {
  console.log(e.stack);
}

// anonymous@file:///C:/example.html line 7 > Function:1:1
// @file:///C:/example.html:7:6

try {
  eval("eval('FAIL')");
} catch (x) {
  console.log(x.stack);
}

// @file:///C:/example.html line 7 > eval line 1 > eval:1:1
// @file:///C:/example.html line 7 > eval:1:1
// @file:///C:/example.html:7:6
```

Также для именования исходного кода в функции `eval()` вы можете использовать директиву `//# sourceURL`. Смотрите раздел [Отладка исходных кодов в функции `eval()`](/ru/docs/Tools/Debugger/How_to/Debug_eval_sources) в документации по [отладчику](/ru/docs/Tools/Debugger), а также эту [запись в блоге](http://fitzgeraldnick.com/weblog/59/) (на английском).

## Спецификации

Не является частью какой-либо спецификации. Не стандартно.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Components.stack](/ru/docs/Components.stack)
- Внешние проекты: [TraceKit](https://github.com/csnover/TraceKit/) и [javascript-stacktrace](https://github.com/eriwen/javascript-stacktrace)
- MSDN: документация по [error.stack](http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx)
- [Обзор API трассировки стека в движке JavaScript V8](https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi)
