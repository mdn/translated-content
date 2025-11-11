---
title: Document.anchors
slug: Web/API/Document/anchors
---

{{APIRef("DOM")}}

**`anchors`** возвращает массив всех якорей в документе.

## Синтаксис

```
nodeList = document.anchors;
```

### Значение

{{domxref("HTMLCollection")}}.

## Пример

```js
if (document.anchors.length >= 5) {
  dump("найдено слишком много якорей");
  window.location = "http://www.google.com";
}
```

Следующий пример автоматически генерирует список якорей из заглавий блоков, имеющихся на странице:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Test</title>
    <script>
      function init() {
        var toc = document.getElementById("toc");
        var i, li, newAnchor;
        for (i = 0; i < document.anchors.length; i++) {
          li = document.createElement("li");
          newAnchor = document.createElement("a");
          newAnchor.href = "#" + document.anchors[i].name;
          newAnchor.innerHTML = document.anchors[i].text;
          li.appendChild(newAnchor);
          toc.appendChild(li);
        }
      }
    </script>
  </head>
  <body onload="init()">
    <h1>Title</h1>
    <h2><a name="contents">Contents</a></h2>
    <ul id="toc"></ul>

    <h2><a name="plants">Plants</a></h2>
    <ol>
      <li>Apples</li>
      <li>Oranges</li>
      <li>Pears</li>
    </ol>

    <h2><a name="veggies">Veggies</a></h2>
    <ol>
      <li>Carrots</li>
      <li>Celery</li>
      <li>Beats</li>
    </ol>
  </body>
</html>
```

[Посмотреть на JSFiddle](https://jsfiddle.net/S4yNp)

## Примечание

По причине обратной совместимости возвращаемый массив якорей включает в себя лишь якоря, созданные с помощью атрибута **name**, а не а **id**.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
