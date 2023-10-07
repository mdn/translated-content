---
title: ":out-of-range"
slug: Web/CSS/:out-of-range
---

{{CSSRef}}

## Summary

CSS [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:out-of-range` находит элементы, значение которых находится вне диапазона их ограничений. Он позволяет странице показывать, когда значение элемента находится вне допустимого диапазона. Значение будет вне диапазона, если оно меньше или больше, чем минимальное и максимальное значения.

> **Примечание:** этот псевдокласс применяется только к элементам с заданным диапазоном ограничений. При отсутствии такого ограничения, элемент не может быть ни "в зоне допустимых значений", ни "вне диапазона".

## Пример

### HTML

```html
<form action="" id="form1">
    <ul>Приминаются значения между 1 и 10.
        <li>
            <input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12">
            <label for="value1">Your value is </label>
        </li>
</form>
```

### CSS

```css
li {
  list-style: none;
  margin-bottom: 1em;
}
input {
  border: 1px solid black;
}
input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}
input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
  border: 2px solid red;
}
input:in-range + label::after {
  content: " НОРМАЛЬНОЕ";
}
input:out-of-range + label::after {
  content: "вне диапазона!";
}
```

{{EmbedLiveSample('Пример',600,140)}}

## Спецификации

| Спецификация                                                                         | Статус                      | Комментарий                                                |
| ------------------------------------------------------------------------------------ | --------------------------- | ---------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'scripting.html#selector-out-of-range', ':out-of-range')}} | {{Spec2('HTML WHATWG')}}    | Определяет, когда `:out-of-range` находит элементы в HTML. |
| {{SpecName('CSS4 Selectors', '#out-of-range-pseudo', ':out-of-range')}}              | {{Spec2('CSS4 Selectors')}} | Изначальное определение.                                   |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{cssxref(":in-range")}}
- [Руководство валидации данных в формах](/ru/docs/Web/Guide/HTML/Forms/Data_form_validation)
