---
title: Document.createComment()
slug: Web/API/Document/createComment
---

{{ApiRef("DOM")}}

## Основное

`createComment()` создаёт новый комментарий и возвращает его.

## Синтаксис

```
CommentNode = document.createComment(data)
```

### Аргументы

- `data`
  - : Строка, которая будет внутри комментария

## Пример

```js
var docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
var comment = docu.createComment("Это комментарий на странице");

docu.getElementsByTagName("xml")[0].appendChild(comment);

alert(new XMLSerializer().serializeToString(docu));
// Выведет: <xml><!--Это комментарий на странице--></xml>
```

## Примечания

- Вернёт **`NS_ERROR_DOM_INVALID_CHARACTER_ERR`**, если "--" есть в содержимом тега.

## Спецификация

- [createComment](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createComment)
