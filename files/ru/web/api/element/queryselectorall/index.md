---
title: Element.querySelectorAll()
slug: Web/API/Element/querySelectorAll
---

## Общая информация

Возвращает статичный (не «живой») список типа [NodeList](/ru/docs/Web/API/NodeList), состоящий из всех элементов, которые являются потомками для элемента, над которым была выполнена функция и удовлетворяющим условию выборки.

## Синтаксис

```
elementList = baseElement.querySelectorAll(selectors);
```

где

- `elementList —` результирующий список объектов типа [element](/ru/docs/Web/API/Element) (результаты).
- `baseElement —` [элемент](/ru/docs/Web/API/Element), над которым выполняется функция.
- `selectors —` [текст селектора](/ru/docs/Web/Guide/CSS/Getting_Started/Selectors) для выбора нужных элементов.

## Примеры

Этот пример возвращает список всех элементов с тегом p, которые находятся в теле документа:

```js
var matches = document.body.querySelectorAll("p");
```

Этот пример возвращает список всех элементов с тегом p, которые находятся непосредственно в элементах-контейнерах с тегом div, имеющих класс 'highlighted', которые в свою очередь находятся внутри элемента с идентификатором 'test':

```js
var el = document.querySelector("#test");
var matches = el.querySelectorAll("div.highlighted > p");
```

Этот пример возвращает список всех элементов iframe, которые имеют атрибут "data-src":

```js
var matches = el.querySelectorAll("iframe[data-src]");
```

## Примечания

Функция выбрасывает исключение SYNTAX_ERR, если текст селектора неправильный.

querySelectorAll() был представлен как часть WebApps API.

Строка указанная в качестве текста селектора, должна соответствовать синтаксису CSS.

Помните, что возвращённый в качестве результата список [NodeList](/ru/docs/Web/API/NodeList) не рекомендуется для использования в циклах (например, в for(...)) в качестве массива, т.к., это не массив в «традиционном» понятии Javascript, а объект типа [NodeList](/ru/docs/Web/API/NodeList), который, хоть и схож по свойствам с массивом, но не является таковым в полной мере (не поддерживает все методы, доступные массиву), так что будьте осторожны.

## Поддержка браузерами

{{Compat}}

## Ссылки на спецификации

- [Selectors API](http://www.w3.org/TR/selectors-api/)

## Смотрите также

- [`document.querySelectorAll`](/ru/docs/DOM/Document.querySelectorAll)
- [`document.querySelector`](/ru/docs/DOM/Document.querySelector)
- [Сниппеты для `querySelector`](/ru/docs/Code_snippets/QuerySelector)
