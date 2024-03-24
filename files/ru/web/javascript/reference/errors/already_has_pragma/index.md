---
title: "Warning: -file- is being assigned a //# sourceMappingURL, but already has one"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
---

{{jsSidebar("Errors")}}

Предупреждение "-file- is being assigned a //# sourceMappingURL, but already has one." возникает, когда для JavaScript-файла исходная карта была указана несколько раз.

## Сообщение

```plain
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## Тип ошибки

Предупреждение. Выполнение скрипта не будет остановлено.

## Что не так?

Для данного источника JavaScript исходная карта была указана несколько раз.

Источники JavaScript часто объединяются и минимизируются, чтобы сделать их доставку с сервера более эффективной. С помощью сопоставлений [исходного кода](https://developer.chrome.com/blog/sourcemaps/) отладчик может сопоставить выполняемый код с исходными файлами. Существует два способа назначения исходной карты: с помощью комментария или путём установки заголовка для файла JavaScript.

## Примеры

Настройка исходной карты с помощью комментария в файле:

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Или, в качестве альтернативы, вы можете установить заголовок на ваш JavaScript-файл:

```http example-good
X-SourceMap: /path/to/file.js.map
```

## Смотрите также

- [Использование исходных карт](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) in the Firefox source docs
- [Введение в исходные карты в JavaScript](https://developer.chrome.com/blog/sourcemaps/) on developer.chrome.com (2012)
