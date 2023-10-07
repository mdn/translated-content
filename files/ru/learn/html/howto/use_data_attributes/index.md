---
title: Использование data-* атрибутов
slug: Learn/HTML/Howto/Use_data_attributes
---

[HTML5](/ru/docs/Web/Guide/HTML/HTML5) спроектирован с возможностью расширения данных ассоциированных с каким-либо элементом, но в то же время не обязательно имеющих определённое значение. [`data-*` атрибуты](/ru/docs/Web/HTML/Global_attributes#data-*) позволяют хранить дополнительную информацию в стандартных элементах HTML, без хаков вроде нестандартных атрибутов, лишних DOM-свойств или {{domxref("Node.setUserData()")}}.

## Синтаксис HTML

Синтаксис прост — любой атрибут, чьё имя начинается с `data-`, является `data-*` атрибутом. Предположим у нас имеется статья и мы хотим сохранить дополнительную информацию без визуального представления. Для этого можно использовать `data`-атрибуты:

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  ...
</article>
```

## Доступ в JavaScript

Чтение `data-`атрибутов в [JavaScript](/ru/docs/Web/JavaScript) осуществляется также просто. Для этого можно использовать метод {{domxref("Element.getAttribute", "getAttribute()")}} с параметром, равным полному имени атрибута. Но есть и более простой способ, используя объект {{domxref("HTMLElement.dataset", "dataset")}}.

Чтобы получить `data`-атрибут можно взять свойство объекта `dataset` с именем, равным части имени атрибута после `data-` (обратите внимание, что дефисы в имени преобразуются в camelCase).

```
var article = document.getElementById('electriccars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
```

Каждое свойство является строкой и может быть прочитано и записано. В приведённом выше примере выполнение кода `article.dataset.columns = 5` приведёт к тому, что новое значение атрибута станет равным `"5"`.

## Доступ в CSS

Заметим, что `data`-атрибуты являются обычными HTML-атрибутами, к которым можно получить доступ в [CSS](/ru/docs/Web/CSS). Например, чтобы показать родительские данные о статье можно использовать [генерируемый контент](/ru/docs/Web/CSS/content) и CSS функцию {{cssxref("attr")}}:

```css
article::before {
  content: attr(data-parent);
}
```

Также можно использовать [селекторы атрибутов](/ru/docs/Web/CSS/Attribute_selectors) в CSS для изменения стилей в соответствии с данным:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Увидеть как это работает можно [в примере на JSBin](https://jsbin.com/ujiday/2/edit).

`Data`-атрибуты также могут использоваться для хранения информации, которая постоянно изменяется, например, счёт в игре. Используя CSS селекторы и возможности JavaScript можно создавать некоторые изящные эффекты, без необходимости писать свои функции отображения. Посмотрите [скринкаст](https://www.youtube.com/watch?v=On_WyUB1gOk) чтобы увидеть больше примеров использующих сгенерированный контент и переходы на CSS. [Пример кода из скринкаста можно также посмотреть на JSBin](https://jsbin.com/atawaz/3/edit).

## Проблемы

Не храните данные, которые должны быть видимы и доступны в `data`-атрибутах. Дело в том, что вспомогательная техника (assistive technology) может не получить к ним доступ. В дополнение, поисковые роботы не индексируют данные, содержащиеся в `data`-атрибутах.

Печально, что всё простое и полезное в этой жизни не достаётся бесплатно. Internet Explorer 11+ поддерживает этот стандарт, но все более ранние версии [не поддерживают `dataset`](https://caniuse.com/#feat=dataset). Для поддержки IE 10 и более ранних версий получение доступа к `data`-атрибутам необходимо осуществлять через {{domxref("Element.getAttribute", "getAttribute()")}}. Также, [производительность чтения `data-`атрибутов](https://jsperf.com/data-dataset) по сравнению с хранением этих данных в хранилище данных JS значительно хуже. Использование `dataset` ещё медленнее, чем чтение данных с `getAttribute()`.

Тем не менее, для пользовательских метаданных, связанных с элементами, `data-`атрибуты являются отличным решением.

## Смотрите также

- This article is adapted from [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- [How to use HTML5 data attributes](https://www.sitepoint.com/use-html5-data-attributes/) (Sitepoint)
