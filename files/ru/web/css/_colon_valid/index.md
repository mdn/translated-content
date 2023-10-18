---
title: ":valid"
slug: Web/CSS/:valid
---

{{ CSSRef() }}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:valid` находит любые {{ HTMLElement("input") }} или {{ HTMLElement("form") }} элементы, контент которых [валиден](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation), в соответствии с типом поля. Он позволяет вам легко менять внешний вид полей, что помогает понять пользователю, что он ввёл данные правильно.

## Пример

Этот пример представляет собой простую форму, цвета элементов которой зелёные, когда данные корректные, и красные, когда нет.

### HTML

```html
<form>
  <label>Введите URL:</label>
  <input type="url" />
  <br />
  <br />
  <label>Введите адрес эл. почты:</label>
  <input type="email" required />
</form>
```

### CSS

```css
input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}
```

{{ EmbedLiveSample('Пример',600,150) }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{ cssxref(":invalid") }}, {{ cssxref(":required") }}, {{ cssxref(":optional") }}
