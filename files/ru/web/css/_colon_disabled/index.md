---
title: ":disabled"
slug: Web/CSS/:disabled
---

{{CSSRef}}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:disabled` находит любой отключённый элемент. Элемент отключён, если не может быть активирован (например, его нельзя выбрать, нажать на него или ввести текст) или получить фокус. У элемента также есть включённое состояние, когда его можно активировать или сфокусировать.

## Примеры

### Пример селекторов

- input:disabled
  - : Выберет все отключённые поля ввода
- select.country:disabled
  - : Найдёт все отключённые `select` элементы с классом `country`

### Пример использования

Следующий CSS:

```css
input[type="text"]:disabled {
  background: #ccc;
}
```

Применим к этому HTML5 фрагменту:

```html
<form action="#">
  <fieldset>
    <legend>Адрес доставки</legend>
    <input type="text" placeholder="Имя" />
    <input type="text" placeholder="Адрес" />
    <input type="text" placeholder="Почтовый индекс" />
  </fieldset>
  <fieldset id="billing">
    <legend>Адрес оплаты</legend>
    <label for="billing_is_shipping">Такой же как адрес доставки:</label>
    <input type="checkbox" onchange="javascript:toggleBilling()" checked />
    <br />
    <input type="text" placeholder="Имя" disabled />
    <input type="text" placeholder="Адрес" disabled />
    <input type="text" placeholder="Почтовый индекс" disabled />
  </fieldset>
</form>
```

Добавим немного javascript:

```js
function toggleBilling() {
  var billingItems = document.querySelectorAll('#billing input[type="text"]');
  for (var i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}
```

Результатом будет отключение всех полей в группе адреса оплаты и окраска их в серый цвет.

{{EmbedLiveSample('Пример_использования', '300px', '250px')}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{Cssxref(":enabled")}}
