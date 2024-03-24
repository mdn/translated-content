---
title: Document.getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
---

{{APIRef("DOM")}}

Возвращает массивоподобный (итерируемый) объект всех дочерних элементов, соответствующих всем из указанных имён классов. В случае вызова по отношению к объекту 'document', поиск происходит по всему документу, включая корневой элемент. Вызывать {{domxref("Element.getElementsByClassName", "getElementsByClassName()")}} можно также применительно к любому элементу: возвращены будут лишь те элементы, которые являются потомками указанного корневого элемента и имеют при этом указанные классы.

## Синтаксис

```
var elements = document.getElementsByClassName(names); // или:
var elements = rootElement.getElementsByClassName(names);
```

- _В "elements"_ будет текущая {{ domxref("HTMLCollection") }} найденных элементов.
- _"names"_ - строка, состоящая из списка имён искомых классов; имена классов разделяют пробелами.
- getElementsByClassName может быть вызвана по отношению к любому элементу, не только для документа целиком. ("document"). Элемент, по отношению к которому осуществляется вызов, используется для целей поиска в качестве корневого элемента.

## Примеры

Получить все элементы класса 'test':

```js
document.getElementsByClassName("test");
```

Получить все элементы, для которых заданы класс 'red' и класс 'test':

```js
document.getElementsByClassName("red test");
```

Получить все элементы класса 'test', являющиеся дочерними для элемента с ID 'main':

```js
document.getElementById("main").getElementsByClassName("test");
```

Мы также можем использовать методы из Array.prototype по отношению к любой {{ domxref("HTMLCollection") }}, передавая коллекцию в качестве значения _this_ метода. Код в примере найдёт все элементы 'div' с классом 'test':

```js
var testElements = document.getElementsByClassName("test");
var testDivs = Array.prototype.filter.call(
  testElements,
  function (testElement) {
    return testElement.nodeName === "DIV";
  },
);
```

## Получение элементов класса 'test'

Ниже приведён пример наиболее употребительного способа использования данного метода.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div id="parent-id">
      <p>hello word1</p>
      <p class="test">hello word2</p>
      <p>hello word3</p>
      <p>hello word4</p>
    </div>
    <script>
      var parentDOM = document.getElementById("parent-id");

      var test = parentDOM.getElementsByClassName("test"); //test is not target element
      console.log(test); //HTMLCollection[1]

      var testTarget = parentDOM.getElementsByClassName("test")[0]; //hear , this element is target
      console.log(testTarget); //<p class="test">hello word2</p>
    </script>
  </body>
</html>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
