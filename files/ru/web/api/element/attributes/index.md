---
title: Element.attributes
slug: Web/API/Element/attributes
---

{{ APIRef("DOM") }}

Свойство **`Element.attributes`** возвращает группу атрибутов всех узлов, зарегистрированных в указанном узле. Это {{domxref("NamedNodeMap")}}, то есть полученные данные не являются массивом `Array`, не содержат {{jsxref("Array")}} методы и {{domxref("Attr")}} индекс узлов может отличаться в различных браузерах. Если сказать более точно, атрибуты **(attributes)** это строка, пара ключ/значение которая представляет собой информацию относительно этого атрибута.

## Синтаксис

```
var attr = element.attributes;
```

## Пример

### Базовые примеры

```js
// Получить первый элемент <p> содержащийся в документе
var para = document.getElementsByTagName("p")[0];
var atts = para.attributes;
```

### Перечисление атрибутов элементов

Числовое индексирование полезно для прохождения всех атрибутов элемента.
Следующий пример проходит через узлы атрибутов для элемента в документе с идентификатором «p1» и печатает значение каждого атрибута.

```html
<!doctype html>

<html>
  <head>
    <title>Attributes example</title>
    <script type="text/javascript">
      function listAttributes() {
        var paragraph = document.getElementById("paragraph");
        var result = document.getElementById("result");

        // Во-первых,  давайте убедимся, что в абзаце есть какие-то атрибуты
        if (paragraph.hasAttributes()) {
          var attrs = paragraph.attributes;
          var output = "";
          for (var i = attrs.length - 1; i >= 0; i--) {
            output += attrs[i].name + "->" + attrs[i].value;
          }
          result.value = output;
        } else {
          result.value = "No attributes to show";
        }
      }
    </script>
  </head>

  <body>
    <p id="paragraph" style="color: green;">Sample Paragraph</p>
    <form action="">
      <p>
        <input
          type="button"
          value="Show first attribute name and value"
          onclick="listAttributes();" />
        <input id="result" type="text" value="" />
      </p>
    </form>
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("NamedNodeMap")}}, the interface of the returned object
- Cross-browser compatibility considerations: on [quirksmode](http://www.quirksmode.org/dom/w3c_core.html#attributes)
