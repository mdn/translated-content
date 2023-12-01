---
title: Document.querySelector()
slug: Web/API/Document/querySelector
---

{{ApiRef("DOM")}}

{{domxref("Document")}} метод **`querySelector()`** возвращает первый элемент ({{domxref("Element")}}) документа, который соответствует указанному селектору или группе селекторов. Если совпадений не найдено, возвращает значение `null`.

> **Примечание:** Сопоставление выполняется с использованием обхода по предварительному порядку в глубину узлов документа, начиная с первого элемента в разметке документа и повторяя последовательные узлы по порядку количества дочерних узлов.

## Синтаксис

```js
element = document.querySelector(selectors);
```

### Параметры

- _селекторы_
  - : {{domxref("DOMString")}}, содержащий один или более селекторов для сопоставления. Эта строка должна быть допустимой строкой селектора CSS; если же нет, генерируется исключение `SYNTAX_ERR`. Смотрите [Расположение элементов DOM с использованием селекторов](/ru/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) для того, чтобы узнать больше о селекторах и о том, как ими управлять.

> **Примечание:** Символы, которые не являются частью стандартного синтаксиса CSS должны быть экранированы символом обратной косой черты. Поскольку JavaScript также использует экранирование символом обратной косой черты, будьте особенно внимательны при написании строковых литералов с использованием этих символов. См. [Escaping special characters](#escaping_special_characters) для получения дополнительной информации.

### Возвращаемое значение

Ссылка на объект типа {{domxref("Element")}}, являющийся первым элементов в документе, который соответствует указанному набору [CSS селекторов](/ru/docs/Web/CSS/CSS_%D0%A1%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%8B), либо `null`, если совпадений нет.

Если вам нужен список всех элементов, соответствующих указанным селекторам, используйте функцию {{domxref("Document.querySelectorAll", "querySelectorAll()")}}.

### Исключения

- `SYNTAX_ERR`
  - : Некорректный синтаксис указанных селекторов _selectors_.

## Примечания по использованию

Если указанный селектор соответствует идентификатору, который неправильно используется более одного раза в документе, возвращается первый элемент с этим идентификатором.

[Псевдо-элементы CSS](/ru/docs/Web/CSS/Pseudo-elements) никогда не вернут никаких элементов, как указано в [API селекторов](http://www.w3.org/TR/selectors-api/#grammar).

### Экранирование специальных символов

Чтобы сопоставить ID или селекторы, которые не соответствуют стандартному синтаксису CSS (например, использующих ненадлежащим образом двоеточие или пробел), необходимо экранировать символ обратной косой чертой ("`\`"). Поскольку обратная косая черта также является экранирующим символом в JavaScript, то при вводе литеральной строки необходимо экранировать её _дважды_ (первый раз для строки JavaScript и второй для `querySelector()`):

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  console.log("#foo\bar"); // "#fooar" (\b is the backspace control character)
  document.querySelector("#foo\bar"); // Does not match anything

  console.log("#foo\\bar"); // "#foo\bar"
  console.log("#foo\\\\bar"); // "#foo\\bar"
  document.querySelector("#foo\\bar"); // Match the first div

  document.querySelector("#foo:bar"); // Does not match anything
  document.querySelector("#foo\\:bar"); // Match the second div
</script>
```

## Примеры

### Выбор первого элемента с совпадающим классом

В этом примере, нам вернётся первый элемент в документе с классом "`myclass`":

```js
var el = document.querySelector(".myclass");
```

### Более сложный селектор

Селекторы, передаваемые в querySelector, могут быть использованы и для точного поиска, как показано в примере ниже. В данном примере возвращается элемент \<input name="login"/>, находящийся в \<div class="user-panel main">:

```js
var el = document.querySelector("div.user-panel.main input[name=login]");
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Locating DOM elements using selectors](/ru/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- {{domxref("document.querySelectorAll()")}}
- {{domxref("element.querySelector()")}}
- {{domxref("element.querySelectorAll()")}}
- [Фрагменты кода для querySelector](/ru/docs/Code_snippets/QuerySelector)
