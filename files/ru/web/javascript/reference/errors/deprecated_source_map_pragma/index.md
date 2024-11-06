---
title: "SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead"
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
---

{{jsSidebar("Errors")}}

## Сообщение

```
Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
```

## Тип ошибки

Предупреждение о том, что произошла ошибка {{jsxref("SyntaxError")}}. Выполнение скрипта не будет остановлено.

## Что пошло не так?

Есть устаревший синтаксис карты кода в исходном коде JavaScript.

Файлы JavaScript нередко объединяются и сокращаются, чтобы доставлять их с сервера более эффективно. С [картой кода](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/), отладчик может сопоставить код выполнения для исходных файлов.

Спецификация карты кода меняет синтаксис из-за конфликта с IE всякий раз, когда он был найден в странице после `//@cc_on` было интерпретировано для включения условной компиляции в IE JScript engine. [Комментарий условной компиляции](https://msdn.microsoft.com/en-us/library/8ka90k2e%28v=vs.94%29.aspx) для IE малоизвестен, и это разбивает карты кода [jQuery](https://bugs.jquery.com/ticket/13274) и других библиотек.

## Примеры

### Устаревший синтаксис

Синтаксис с использованием знака "@" устарел.

```js example-bad
//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

### Стандартный синтаксис

Используйте знак "#".

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Или, в качестве альтернативы, вы можете установить заголовок для вашего JavaScript-файла чтобы избежать комментирования:

```js example-good
X-SourceMap: /path/to/file.js.map
```

## Смотрите также

- [Как использовать карты кода – документация Firefox Tools](/ru/docs/Tools/Debugger/How_to/Use_a_source_map)
- [Введение в карты кода – HTML5 rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
