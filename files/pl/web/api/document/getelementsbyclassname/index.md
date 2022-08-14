---
title: Document.getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
tags:
  - API
  - DOM
  - HTML5
  - Klasy
translation_of: Web/API/Document/getElementsByClassName
---
{{APIRef("DOM")}}

Zwraca obiekt podobny do tablicy, zawierający wszystkie elementy, które mają przypisaną daną klasę. Kiedy użyjemy tej funkcji w odniesieniu do elementu document, cały dokument jest przeszukiwany - na wszystkich poziomach.

Możesz również użyć funkcji {{domxref("Element.getElementsByClassName", "getElementsByClassName()")}} na dowolnym elemencie; wtedy zwróci jedynie elementy zawierające daną klasę, które zawierają się w obrębie elementu wskazanego przez nas.

## Składnia

    var elements = document.getElementsByClassName(names); // or:
    var elements = rootElement.getElementsByClassName(names);

- _elements_ jest bieżącym zbiorem znalezionych elementów.
- *names* jest łańcuchem reprezentującym listę szukanych przez nas nazw klas (nazwy klas są oddzielone od siebie spacjami)
- getElementsByClassName może być użyta na dowolnym elemencie - nie tylko w całym dokumencie.

## Przykłady

Szukamy wszystkich elementów posiadających klasę 'test':

```js
document.getElementsByClassName('test');
```

Szukamy elementów, które posiadają jednocześnie klasę 'red' oraz 'test':

```js
document.getElementsByClassName('red test');
```

Szukamy elementów posiadających klasę 'test', w obrębie elementu o ID 'main':

```js
document.getElementById('main').getElementsByClassName('test');
```

Możemy też użyć metody Array.prototype. W ten sposób znajdziemy wszystkie elementy div posiadające klasę 'test':

```js
var testElements = document.getElementsByClassName('test');
var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'DIV';
});
```

## Uwagi

Należy zwrócić uwagę na różnice w zwracanej wartości w zależności od składni (aby została zwrócona konkretna wartość należy posłużyć się indeksem):

    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <div id="parent-id">
            <p>hello word1</p>
            <p class="test">hello word2</p>
            <p >hello word3</p>
            <p>hello word4</p>
        </div>
        <script>
            var parentDOM = document.getElementById("parent-id");

            var test=parentDOM.getElementsByClassName("test");//test is not target element
            console.log(test);//HTMLCollection[1]

            var testTarget=parentDOM.getElementsByClassName("test")[0];//here , this element is target
            console.log(testTarget);//<p class="test">hello word2</p>
        </script>
    </body>
    </html>

## Specyfikacja

- [W3C: getElementsByClassName](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-document-getelementsbyclassname)
