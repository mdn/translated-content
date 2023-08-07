---
title: Document.hasFocus()
slug: Web/API/Document/hasFocus
---

{{APIRef}}Метод **`Document.hasFocus()`** возвращает значение {{jsxref("Boolean")}}, указывающее имеет ли документ или любой элемент внутри документа фокус. Этот метод может быть использован, чтобы определить, имеет ли активный элемент в документе фокус.

> **Примечание:** При просмотре документа элемент с фокусом всегда является активным элементом документа, но активный элемент не обязательно должен иметь фокус. Например, активный элемент внутри всплывающего окна, которое находится не на переднем плане, не имеет фокус.

## Синтаксис

```
focused = document.hasFocus();
```

### Возвращаемое значение

`false` если активный элемент в документе не имеет фокуса; `true` если активный элемент в документе имеет фокус.

## Пример

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>TEST</title>
    <style>
      #message {
        font-weight: bold;
      }
    </style>
    <script>
      setInterval( checkPageFocus, 200 );

      function checkPageFocus() {
        var info = document.getElementById("message");

        if ( document.hasFocus() ) {
          info.innerHTML = "Документ имеет фокус.";
        } else {
          info.innerHTML = "Документ не имеет фокус.";
        }
      }

      function openWindow() {
        window.open (
          "http://developer.mozilla.org/",
          "mozdev",
          "width=640,
          height=300,
          left=150,
          top=260"
        );
      }
    </script>
  </head>
  <body>
    <h1>JavaScript hasFocus пример</h1>
    <div id="message">Ожидание действий со стороны пользователя</div>
    <div><button onclick="openWindow()">Открыть новое окно</button></div>
  </body>
</html>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using the Page Visibility API](/ru/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)
