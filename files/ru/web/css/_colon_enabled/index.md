---
title: ":enabled"
slug: Web/CSS/:enabled
---

{{CSSRef}}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:enabled` находит любой включённый элемент. Элемент включён, если его можно активировать (например, выбрать, нажать на него или ввести текст) или поставить фокус. У элемента также есть отключённое состояние, когда его нельзя активировать или сфокусировать.

## Пример

Следующий пример делает цвет текста средне-зелёного оттенка, когда поле включено, и серым, когда отключено. Это позволяет понимать пользователю какие элементы интерактивны, а какие нет.

Следующий HTML...

```html
<form action="url_of_form">
  <label for="FirstField">Первое поле (включено):</label>
  <input type="text" id="FirstField" value="Lorem" /><br />
  <label for="SecondField">Второе поле (отключено):</label>
  <input type="text" id="SecondField" value="Ipsum" disabled="disabled" /><br />
  <input type="button" value="Submit" />
</form>
```

...используем со следующим CSS...

```css
input:enabled {
  color: #22aa22;
}
input:disabled {
  color: #d9d9d9;
}
```

...результат:

{{EmbedLiveSample("Enabled_Disabled_Inputs_Example",550,95)}}Заметьте, цвет текста кнопки также зелёный, так как она тоже включена.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{Cssxref(":disabled")}}
