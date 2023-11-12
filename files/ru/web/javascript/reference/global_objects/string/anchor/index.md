---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
---

{{JSRef("Global_Objects", "String")}} {{deprecated_header}}

## Сводка

Метод **`anchor()`** создаёт якорный HTML-элемент {{HTMLElement("a")}}, используемый в качестве цели гиперссылки.

## Синтаксис

```
str.anchor(name)
```

### Параметры

- `name`
  - : Строка, представляющая атрибут `name` создаваемого тега.

## Описание

Метод `anchor()` используется для программного создания и отображения якоря в документе.

Текстовая строка представляет из себя буквальный текст, который вы хотите показать пользователю. Строковый параметр `name` представляет атрибут `name` элемента {{HTMLElement("a")}}.

Якоря, созданные методом `anchor()`, становятся элементами в массиве {{domxref("document.anchors")}}.

## Примеры

### Пример: использование метода `anchor()`

```js
var myString = "Оглавление";

document.body.innerHTML = myString.anchor("contents_anchor");
```

приведёт к выводу следующего HTML:

```html
<a name="contents_anchor">Оглавление</a>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.link()")}}
