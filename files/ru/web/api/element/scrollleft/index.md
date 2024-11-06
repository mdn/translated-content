---
title: Элемент.scrollLeft
slug: Web/API/Element/scrollLeft
---

{{ APIRef("DOM") }}

Свойство **`scrollLeft`** получает или устанавливает количество пикселей, на которое контент элемента прокручен влево.

Заметьте, что если свойство {{cssxref("direction")}}: `rtl` (right-to-left), то `scrollLeft` равен `0`, когда скроллбар на его самой правой позиции (с начала прокрученного контента), а затем становится отрицательным по мере прокрутки к концу контента.

## Синтаксис

```
// Получаем количество прокрученных пикселей
var sLeft = element.scrollLeft;
```

_sLeft_ - целое число, представленное количеством пикселей, на которые элемент был прокручен влево.

```
// Устанавливаем количество прокрученных пикселей
element.scrollLeft = 10;
```

`scrollLeft` может быть установлен, как любое целое число, однако:

- Если элемент не может быть прокручен (т.е. у него нет переполнения), `scrollLeft` устанавливается в 0.
- Если установили значение меньше 0 (больше 0 при расположении элементов справа налево), `scrollLeft` устанавливается в 0.
- Если установлено значение больше, чем максимум прокручиваемого контента, `scrollLeft` устанавливается в максимум.

## Пример

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      #container {
        border: 1px solid #ccc;
        height: 100px;
        overflow: scroll;
        width: 100px;
      }
      #content {
        background-color: #ccc;
        width: 250px;
      }
    </style>
    <script>
      document.addEventListener(
        "DOMContentLoaded",
        function () {
          var button = document.getElementById("slide");
          button.onclick = function () {
            document.getElementById("container").scrollLeft += 20;
          };
        },
        false,
      );
    </script>
  </head>
  <body>
    <div id="container">
      <div id="content">Бла-бла-бла</div>
    </div>
    <button id="slide" type="button">Пролистать</button>
  </body>
</html>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
