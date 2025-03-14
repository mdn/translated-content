---
title: "SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead"
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Errors")}}

Предупреждение JavaScript «Using `//@` to indicate sourceURL pragmas is deprecated. Use `//#` instead» появляется, когда в JavaScript-коде присутствует устаревший синтаксис карт исходного кода.

## Сообщение

```plain
Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
```

## Тип ошибки

Предупреждение о том, что произошла ошибка {{jsxref("SyntaxError")}}. Выполнение JavaScript не будет остановлено.

## Что пошло не так?

В исходном JavaScript-коде присутствует устаревший синтаксис карт кода.

Файлы JavaScript часто объединяются и минифицируются, чтобы доставлять их с сервера более эффективно. С [картами исходного кода](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html), отладчик может сопоставить выполняемый код с исходными файлами.

Спецификация карт исходного кода была изменена из-за конфликта с Internet Explorer, который при обнаружении на странице `//@cc_on` включал условную компиляцию в движке IE JScript. [Комментарий условной компиляции](https://stackoverflow.com/questions/24473882/what-does-this-comment-cc-on-0-do-inside-an-if-statement-in-javascript) в IE — малоизвестная функция, но она нарушала работу карт исходного кода [jQuery](https://bugs.jquery.com/ticket/13274) и других библиотек.

## Примеры

### Устаревший синтаксис

Синтаксис с использованием символа `@` устарел.

```js example-bad
//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

### Стандартный синтаксис

Следует использовать символ `#`.

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Или можно установить заголовок {{HTTPHeader("SourceMap")}} для нужного JavaScript-файла, чтобы отключить комментирование:

```http example-good
SourceMap: /path/to/file.js.map
```

## Смотрите также

- [Use a source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) в документации исходного кода Firefox
- [Introduction to JavaScript source maps](https://developer.chrome.com/blog/sourcemaps/) на developer.chrome.com (2012)
- {{HTTPHeader("SourceMap")}}
