---
title: Document.getElementsByTagName()
slug: Web/API/Document/getElementsByTagName
---

{{ ApiRef("DOM") }}

Возвращает {{domxref("HTMLCollection")}} элементов с указанным именем тега. Поиск осуществляется по всему документу, включая корневой узел. Возвращаемая HTMLCollection живая, это значит что она автоматически обновляет сама себя чтобы оставаться синхронизированной с DOM деревом без необходимости вызова document.getElementByTagName() снова.

## Синтаксис

```
var elements = document.getElementsByTagName(name);
```

- `elements` это живая {{domxref("HTMLCollection")}} (с учётом примечания внизу) найденных документов в таком порядке в каком они появляются в дереве.
- `name` строка представляющая собой имя элемента. Специальная строка "\*" позволяет получить все элементы.

> **Примечание:** [Последняя W3C спецификация](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html) говорит что `elements` является `HTMLCollection`; между тем, данный метод возвращает {{domxref("NodeList")}} в WebKit браузерах. См. {{bug(14869)}} для большей информации.

## Примеры

В следующем примере, getElementByTagName() стартует из отдельного родительского элемента и ищет сверху-вниз рекурсивно по DOM начиная с родительского элемента просматривая дочерние элементы на соответствие тегов параметру name.

Отметим что когда узел в котором `getElementsByTagName()` был вызван не является узлом `document`, по факту используется метод {{domxref("element.getElementsByTagName()")}}.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>getElementsByTagName example</title>
    <script>
      function getAllParaElems() {
        var allParas = document.getElementsByTagName("p");
        var num = allParas.length;
        alert("There are " + num + " paragraph in this document");
      }

      function div1ParaElems() {
        var div1 = document.getElementById("div1");
        var div1Paras = div1.getElementsByTagName("p");
        var num = div1Paras.length;
        alert("There are " + num + " paragraph in #div1");
      }

      function div2ParaElems() {
        var div2 = document.getElementById("div2");
        var div2Paras = div2.getElementsByTagName("p");
        var num = div2Paras.length;
        alert("There are " + num + " paragraph in #div2");
      }
    </script>
  </head>
  <body style="border: solid green 3px">
    <p>Some outer text</p>
    <p>Some outer text</p>

    <div id="div1" style="border: solid blue 3px">
      <p>Some div1 text</p>
      <p>Some div1 text</p>
      <p>Some div1 text</p>

      <div id="div2" style="border: solid red 3px">
        <p>Some div2 text</p>
        <p>Some div2 text</p>
      </div>
    </div>

    <p>Some outer text</p>
    <p>Some outer text</p>

    <button onclick="getAllParaElems();">show all p elements in document</button
    ><br />

    <button onclick="div1ParaElems();">
      show all p elements in div1 element</button
    ><br />

    <button onclick="div2ParaElems();">
      show all p elements in div2 element
    </button>
  </body>
</html>
```

## Примечания

Когда вызывается на HTML document, `getElementsByTagName()` переводит в нижний регистр свой аргумент перед работой. Это может быть неожиданным при попытке найти соответствие для camelCase SVG элементов в поддереве HTML документа. В таком случае может быть полезен {{Domxref("document.getElementsByTagNameNS()")}}. Смотрите также {{Bug(499656)}}.

`document.getElementsByTagName()` подобен {{domxref("element.getElementsByTagName()")}}, за исключением того что поиск охватывает весь документ.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
