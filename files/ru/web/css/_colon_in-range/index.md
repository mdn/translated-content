---
title: ":in-range"
slug: Web/CSS/:in-range
---

{{CSSRef}}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:in-range` находит элементы, значение которых соответствует указанному для них диапазону ограничений. Он позволяет странице показывать, когда значение элемента находится в допустимом диапазоне.

> **Примечание:** этот псевдокласс применяется только к элементам с заданным диапазоном ограничений. При отсутствии такого ограничения, элемент не может быть ни "в зоне допустимых значений", ни "вне диапазона".

## Пример

### HTML

```html
<form action="" id="form1">
    <ul>Приминаются значения между 1 и 10.
        <li>
            <input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12">
            <label for="value1">Ваше значение </label>
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

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{cssxref(":out-of-range")}}
- [Руководство валидации данных в формах](/ru/docs/Web/Guide/HTML/Forms/Data_form_validation)
