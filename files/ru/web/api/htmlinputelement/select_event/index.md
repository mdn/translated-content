---
title: GlobalEventHandlers.onselect
slug: Web/API/HTMLInputElement/select_event
---

{{ ApiRef("HTML DOM") }}

Обработчик события select окна браузера.

## Синтаксис

```
window.onselect = funcRef;
```

- `funcRef` - функция

## Пример

```html
<html>
  <head>
    <title>onselect test</title>

    <style type="text/css">
      .text1 {
        border: 2px solid red;
      }
    </style>

    <script type="text/javascript">
      window.onselect = selectText;

      function selectText() {
        alert("select event detected!");
      }
    </script>
  </head>

  <body>
    <textarea class="text1" cols="30" rows="3">
Highlight some of this text
with the mouse pointer
to fire the onselect event.
</textarea
    >
  </body>
</html>
```

## Замечание

Событие select происходит только, когда текст выделяют в поле input с type='text' или в поле textarea. Событие происходит только после того, как текст будет выделен.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
