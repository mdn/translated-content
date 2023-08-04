---
title: Document.querySelectorAll()
slug: Web/API/Document/querySelectorAll
---

{{ ApiRef("DOM") }}

Метод **`querySelectorAll()`** {{domxref("Document")}} возвращает статический (не динамический) {{domxref("NodeList")}}, содержащий все найденные элементы документа, которые соответствуют указанному селектору.

> **Примечание:** Данный метод реализован на основе миксина {{domxref("ParentNode")}} {{domxref("ParentNode.querySelectorAll", "querySelectorAll()")}} метода.

## Синтаксис

```js
elementList = document.querySelectorAll(selectors);
```

### Параметры

- **`selectors`**
  - : Строка {{domxref("DOMString")}}, содержащая один или более [CSS селектор](/ru/docs/Web/Guide/CSS/Getting_Started/Selectors). Эта строка должна быть валидным [CSS селектором](/ru/docs/Web/CSS/CSS_Selectors). Если это не так, то генерируется `SyntaxError`. Смотрите [Поиск элементов DOM с использованием селекторов](/ru/docs/DOM/DOM_Reference/Locating_DOM_elements_using_selectors) для получения информации о том, распознавать элементы. Несколько селекторов нужно разделить запятыми.

> **Примечание:** Символы, которые не являются частью стандартного синтаксиса CSS, должны быть экранированы с помощью символа обратной косой черты (`\`). Поскольку в JavaScript также используется экранирование обратной косой черты, при написании строковых литералов с использованием этих символов следует соблюдать особую осторожность. Для более подробной информации смотри [Escaping special characters](#escaping_special_characters).

### Возвращаемое значение

Статический (non-live) {{domxref("NodeList")}}, содержащий все элементы в пределах документа, которые соответствуют как минимум одному из указанных селекторов, или пустой {{domxref("NodeList")}} в случае отсутствия совпадений.

> **Примечание:** Если в строке `selectors` содержатся [CSS псевдоэлементы](/ru/docs/Web/CSS/Pseudo-elements), то возвращаемый список будет всегда пуст.

### Исключения

- `SyntaxError`
  - : Исключение `SYNTAX_ERR` происходит в случае передачи некорректной группы селекторов.

## Примеры

### Получение списка совпадений

Чтобы получить {{domxref("NodeList")}} всех элементов {{HTMLElement("p")}} в документе:

```js
var matches = document.querySelectorAll("p");
```

В этом примере возвращается список всех элементов {{HTMLElement ("div")}} в документе, которые имеют класс `note` или `alert`:

```js
var matches = document.querySelectorAll("div.note, div.alert");
```

Здесь мы получаем список элементов `<p>`, чьим непосредственным родительским элементом является {{HTMLElement("div")}} с классом `highlighted`, который расположен внутри контейнера с идентификатором `test`.

```js
var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");
```

В этом примере используются [селекторы атрибутов](/ru/docs/Web/CSS/Attribute_selectors), чтобы вернуть список элементов {{HTMLElement("iframe")}}, которые содержат атрибут `data-src`:

```js
var matches = document.querySelectorAll("iframe[data-src]");
```

Здесь селектор атрибута используется для возврата элементов списка, содержащихся в списке с идентификатором `"userlist"`, который имеет атрибут `"data-active"` со значением `"1"`:

```js
var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active='1']");
```

### Доступ к совпадениям

Вернув {{domxref("NodeList")}} совпадений один раз, вы можете использовать его как простой массив. Если массив пустой (т. е. свойство `length` равно 0), то совпадений не было найдено.

В другом случае, вы можете использовать стандартную запись массива для доступа к содержимому. Вы можете использовать любой оператор зацикливания, например:

```js
var highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function (userItem) {
  deleteUser(userItem);
});
```

## Примечания пользователя

`querySelectorAll()` ведёт себя не так, как большинство библиотек JavaScript DOM. Это может привести к неожиданным результатам.

### HTML

Рассмотрим этот HTML с тремя вложенными {{HTMLElement("div")}} блоками.

```html
<div class="outer">
  <div class="select">
    <div class="inner"></div>
  </div>
</div>
```

### JavaScript

```js
var select = document.querySelector(".select");
var inner = select.querySelectorAll(".outer .inner");
inner.length; // 1, не 0!
```

В данном примере, когда мы выбрали `".outer .inner"` в контексте `<div>` с классом `"select"`, элемент с классом `".inner"` был всё равно найден, хотя `.outer` не является потомком элемента в котором происходил поиск (`".select"`). По умолчанию, `querySelectorAll()` проверяет только последний элемент без учёта контекста.

Псевдокласс {{cssxref(":scope")}} даёт нам ожидаемый результат. Только соответствующие селекторы в потомках базового элемента:

```js
var select = document.querySelector(".select");
var inner = select.querySelectorAll(":scope .outer .inner");
inner.length; // 0
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.querySelector()")}} and {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("DocumentFragment.querySelector()")}} and {{domxref("DocumentFragment.querySelectorAll()")}}
- {{domxref("ParentNode.querySelector()")}} and {{domxref("ParentNode.querySelectorAll()")}}
- [Code snippets for `querySelector`](/ru/docs/Code_snippets/QuerySelector)
