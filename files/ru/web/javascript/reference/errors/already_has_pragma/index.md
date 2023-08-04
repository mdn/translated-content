---
title: "Warning: -file- is being assigned a //# sourceMappingURL, but already has one(Внимание: -file- является в сущности назначенным //# sourceMappingURL, но уже имеет один)"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
---

{{jsSidebar("Errors")}}

## Сообщение

```
Опасно: Внимание: -file- является в сущности назначенным //# sourceMappingURL, но уже имеет один)
```

## Тип ошибки

Предупреждение. Выполнение скрипта не будет остановлено.

## Что вы сделали не так?

Для данного источника JavaScript исходная карта была указана несколько раз.

Источники JavaScript часто объединяются и минимизируются, чтобы сделать их доставку с сервера более эффективной. С помощью сопоставлений исходного кода отладчик может сопоставить выполняемый код с исходными файлами. Существует два способа назначения исходной карты: с помощью комментария или путём установки заголовка для файла JavaScript.

## Примеры

Настройка исходной карты с помощью комментария в файле:

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Или, в качестве альтернативы, вы можете установить заголовок, на ваш JavaScript файл :

```js example-good
X-SourceMap: /path/to/file.js.map
```

## Смотрите также

- [How to use a source map – Firefox Tools documentation](/ru/docs/Tools/Debugger/How_to/Use_a_source_map)
- [Introduction to source maps – HTML5 rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
