---
title: background-attachment
slug: Web/CSS/background-attachment
---

{{CSSRef}}

## Краткое описание

Если указано {{Cssxref("background-image")}}, [CSS](/ru/docs/CSS) свойство `background-attachment` определяет, является ли позиция этого изображения фиксированной в области просмотра, или прокручивается вместе с содержащим его блоком.

{{cssinfo}}

## Синтаксис

```css
/* Ключевые значения */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Глобальные значения */
background-attachment: inherit;
background-attachment: initial;
background-attachment: unset;
```

Значение свойства `background-attachment` задаётся одним из ключевых значений из списка ниже.

### Значения

- `fixed`
  - : Фон фиксируется относительно области просмотра. Даже если элемент имеет механизм прокрутки, фон не перемещается вместе с элементом. (Это значение несовместимо с {{cssxref("background-clip", "background-clip: text", "#text")}}.)
- `local`
  - : Фон фиксируется относительно содержимого элемента. Если элемент имеет механизм прокрутки, фон прокручивается с содержимым элемента, и область рисования фона и область позиционирования фона относятся к прокручиваемой области элемента, а не к границе, обрамляющей их.
- `scroll`
  - : Фон фиксируется относительно самого элемента и не прокручивается с его содержимым. (Он фактически прикреплён к границе элемента.)

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Простой пример

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
</p>
```

#### CSS

```css
p {
  background-image: url("starsolid.gif");
  background-attachment: fixed;
}
```

#### Результат

{{EmbedLiveSample("Простой_пример")}}

### Поддержка нескольких фоновых изображений

Это свойство поддерживает несколько фоновых изображений. Вы можете указать разные `<attachment>` для каждого фона, разделённых запятыми. Каждое изображение сопоставляется с соответствующим типом вложения, от первого указанного до последнего.

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
  Suddenly she came upon a little three-legged table, all made of solid glass;
  there was nothing on it except a tiny golden key, and Alice's first thought
  was that it might belong to one of the doors of the hall; but, alas! either
  the locks were too large, or the key was too small, but at any rate it would
  not open any of them. However, on the second time round, she came upon a low
  curtain she had not noticed before, and behind it was a little door about
  fifteen inches high: she tried the little golden key in the lock, and to her
  great delight it fitted!
</p>
```

#### CSS

```css
p {
  background-image: url("starsolid.gif"), url("startransparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### Результат

{{EmbedLiveSample("Поддержка_нескольких_фоновых_изображений")}}

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- [Несколько фонов](/ru/docs/CSS/Multiple_backgrounds)
