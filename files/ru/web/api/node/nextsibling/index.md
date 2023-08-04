---
title: Node.nextSibling
slug: Web/API/Node/nextSibling
---

{{APIRef("DOM")}}

Свойство **`Node.nextSibling`** используется только для чтения и возвращает узел, непосредственно следующий за данным узлом в списке {{domxref("Node.childNodes","childNodes")}} его родительского элемента, или `null` если данный узел последний в этом списке.

## Синтаксис

```
nextNode = node.nextSibling
```

## Примечания

Браузеры, основанные на Gecko, вставляют текстовые узлы в документ для представления пробелов в разметке.
Поэтому узел, полученный, например, при использовании [`Node.firstChild`](/ru/docs/Web/API/Node/firstChild) или [`Node.previousSibling`](/ru/docs/Web/API/Node/previousSibling) может относиться к
пробелу, а не к тому элементу, который автор хотел получить.

Смотрите [Пробел в DOM](/ru/docs/Web/Guide/DOM/Whitespace_in_the_DOM) и
[W3C DOM 3 FAQ: Почему некоторые текстовые узлы пустые?](http://www.w3.org/DOM/faq.html#emptytext)
для дополнительной информации.

## Пример

```html
<div id="div-01">Вот div-01</div>
<div id="div-02">Вот div-02</div>

<script type="text/javascript">
  var el = document.getElementById("div-01").nextSibling,
    i = 1;

  console.log("Потомки div-01:");

  while (el) {
    console.log(i + ". " + el.nodeName);
    el = el.nextSibling;
    i++;
  }
</script>

<!--
  Следующий пример напишет в консоль:

     Потомки div-01:

      1. #text
      2. DIV
      3. #text
      4. SCRIPT

-->
```

В приведённом выше примере вы можете видеть, что `#text` узлы вставляются в DOM, где между тегами встречаются пробелы (т.е. после закрывающего тега элемента и до открывающего тега рядом). Не создаётся пробелов между элементами, вставленных с помощью `document.write`

Возможность включения текстовых узлов в DOM должна быть разрешена, когда DOM обходится с помощью `nextSibling`. Смотрите раздел "Примечания".

## Спецификации

- [DOM Level 1 Core: nextSibling](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-nextSibling)
- [DOM Level 2 Core: nextSibling](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6AC54C2F)

## Смотрите также

- {{domxref("Element.nextElementSibling")}}
