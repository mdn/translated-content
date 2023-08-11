---
title: ":placeholder-shown"
slug: Web/CSS/:placeholder-shown
---

{{CSSRef}}{{SeeCompatTable}}[CSS псевдокласс](/ru/docs/Web/CSS) **`:placeholder-shown`** представляет любой {{htmlElement("input")}} или {{htmlElement("textarea")}} элемент, который отображает в данный момент [текст заполнитель (плейсхолдер)](/ru/docs/Web/HTML/Element/input#attr-placeholder).

```css
/* Выбирает любой элемент с активным плейсхолдером */
:placeholder-shown {
  border: 2px solid silver;
}
```

## Синтаксис

{{csssyntax}}

## Примеры

### Простой пример

#### HTML

```html
<input placeholder="Type something here!" />
```

#### CSS

```css hidden
input:-ms-input-placeholder {
  border-color: silver;
}

input:-moz-placeholder {
  border-color: silver;
}
```

```css
input {
  border: 2px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border-color: silver;
}
```

#### Результат

{{EmbedLiveSample("Простой_пример", 200, 60)}}

### Переполнение текстом

На узких экранах, таких как смартфоны, ширина полей поиска и других полей формы может быть значительно сокращена. Это может привести к нежелательному обрезанию текста плейсхолдера. Часто бывает полезно изменить это поведение с помощью свойства {{cssxref("text-overflow")}}.

#### HTML

```html
<input placeholder="Enter something into this field, if you please!" />
```

#### CSS

```css hidden
input:-ms-input-placeholder {
  text-overflow: ellipsis;
}

input:-moz-placeholder {
  text-overflow: ellipsis;
}
```

```css
input:placeholder-shown {
  text-overflow: ellipsis;
}
```

#### Результат

{{EmbedLiveSample("Переполнение_текстом", 200, 60)}}

### Цветной текст

#### HTML

```html
<input placeholder="Type something here!" />
```

#### CSS

```css hidden
input:-ms-input-placeholder {
  color: red;
  font-style: italic;
}

input:-moz-placeholder {
  color: red;
  font-style: italic;
}
```

```css
input:placeholder-shown {
  color: red;
  font-style: italic;
}
```

#### Результат

{{EmbedLiveSample("Цветной_текст", 200, 60)}}

### Кастомизированное поле ввода

В следующем примере выделены поля Branch и ID с пользовательским стилем.

#### HTML

```html
<form id="test">
  <p>
    <label for="name">Enter Student Name:</label>
    <input id="name" placeholder="Student Name" />
  </p>
  <p>
    <label for="branch">Enter Student Branch:</label>
    <input id="branch" placeholder="Student Branch" />
  </p>
  <p>
    <label for="sid">Enter Student ID:</label>
    <input
      type="number"
      pattern="[0-9]{8}"
      title="8 digit ID"
      id="sid"
      class="studentid"
      placeholder="8 digit id" />
  </p>
  <input type="submit" />
</form>
```

#### CSS

```css hidden
input.studentid:-ms-input-placeholder {
  background-color: yellow;
  color: red;
  font-style: italic;
}

input.studentid:-moz-placeholder {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

```css
input {
  background-color: #e8e8e8;
  color: black;
}

input.studentid:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

#### Результат

{{EmbedLiveSample("Кастомизированное_поле_ввода", 200, 180)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Псевдоэлемент {{cssxref("::placeholder")}}, применяющий стили к _самому себе_.
- Связанные HTML-элементы: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML формы](/ru/docs/Learn/HTML/Forms)
