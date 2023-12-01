---
title: ":focus-within"
slug: Web/CSS/:focus-within
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) [Псевдо-класс](/ru/docs/Web/CSS/Pseudo-classes) **`:focus-within`** соответствует элементу, который либо сам находится в фокусе, либо содержит элемент, который находится в фокусе. Другими словами, он представляет элементу, который соответствует псевдоклассу {{CSSxRef(":focus")}} либо имеет потомка, который соответствует `:focus`. (Включая потомков в [shadow trees](/ru/docs/Web/Web_Components/Shadow_DOM).)

```css
/* Выделяет <div> когда один из его потомков находится в фокусе */
div:focus-within {
  background: cyan;
}
```

Этот селектор может оказаться полезным, например, для подсвечивания всего контейнера {{HTMLElement("form")}}, когда пользователь устанавливает фокус на одном из его полей ввода {{HTMLElement("input")}}.

## Синтаксис

{{CSSSyntax}}

## Пример

В этом примере форма раскрашивается при помощи специального правила стилей, когда один из её дочерних полей для ввода находится в фокусе.

### HTML

```html
<p>Try typing into this form.</p>

<form>
  <label for="given_name">Given Name:</label>
  <input id="given_name" type="text" />
  <br />
  <label for="family_name">Family Name:</label>
  <input id="family_name" type="text" />
</form>
```

### CSS

```css
form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ff8;
  color: black;
}

input {
  margin: 4px;
}
```

### Итог

{{EmbedLiveSample("Пример", 500, 150)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
