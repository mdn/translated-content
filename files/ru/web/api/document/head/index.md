---
title: Document.head
slug: Web/API/Document/head
---

{{APIRef("DOM")}}

Возвращает элемент {{HTMLElement("head")}} текущего документа. Если имеется более одного элемента `<head>`, будет возвращён первый из них.

## Синтаксис

```
var objRef = document.head;
```

### Значение

{{domxref("HTMLHeadElement")}}.

## Пример

```
<!doctype html>
<head id="my-document-head">
  <title>Example: using document.head</title>
</head>

<script>
  var theHead = document.head;

  console.log(theHead.id); // "my-document-head";

  console.log( theHead === document.querySelector("head") ); // true
</script>
```

## Примечание

`document.head` доступно только для чтения. Присвоить значение этому свойству нельзя. При попытке это сделать ошибка вызвана не будет, только если вы не используете [Strict Mode](/ru/docs/Web/JavaScript/Reference/Strict_mode). В данном случае будет вызвано {{jsxref("TypeError")}} .

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("document.body")}}
