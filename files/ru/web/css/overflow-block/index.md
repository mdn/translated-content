---
title: overflow-block
slug: Web/CSS/overflow-block
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`overflow-block`** устанавливает, что будет отображаться, когда содержимое переполняет начальные и конечные края блока. Это может быть ничего, полоса прокрутки или содержимое переполнения.

> **Примечание:** Свойство `overflow-block` отображается на {{Cssxref("overflow-y")}} или {{Cssxref("overflow-x")}} в зависимости от режима записи документа.

## Синтаксис

```css
/* Значения свойства */
overflow-block: visible;
overflow-block: hidden;
overflow-block: scroll;
overflow-block: auto;

/* Глобальные значения */
overflow-block: inherit;
overflow-block: initial;
overflow-block: unset;
```

Свойство `overflow-block` указывается как одно ключевое слово, выбранное из списка значений ниже.

### Значения

- `visible`
  - : Содержимое не обрезается и может отображаться за пределами начального и конечного краёв блока отступа.
- `hidden`
  - : При необходимости содержимое обрезается, чтобы соответствовать размеру блока в поле заполнения. Полосы прокрутки отсутствуют.
- `scroll`
  - : При необходимости содержимое обрезается, чтобы поместиться в размер блока в поле заполнения. Браузеры отображают полосы прокрутки вне зависимости от того, вырезано ли содержимое. (Это предотвращает появление или исчезновение полос прокрутки при изменении содержимого.) Принтеры могут по-прежнему печатать переполненное содержимое.
- `auto`
  - : Зависит от пользовательского агента. Если содержимое помещается в поле дополнения, оно выглядит так же, как visible, но всё же устанавливает новый контекст форматирования блока. Настольные браузеры устанавливают полосы прокрутки, если содержимое переполняется.

### Формат синтаксиса

{{csssyntax}}

## Примеры

### HTML

```html
<ul>
  <li>
    <code>overflow-block:hidden</code> — скрывает текст за пределами поля
    <div id="div1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block:scroll</code> — всегда добавляет полосу прокрутки
    <div id="div2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block:visible</code> — отображает текст вне поля, если это
    необходимо
    <div id="div3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block:auto</code> — в большинстве браузеров, что эквивалентно
    <code>scroll</code>
    <div id="div4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width: 250px;
  height: 100px;
}

#div1 {
  overflow-block: hidden;
  margin-bottom: 12px;
}
#div2 {
  overflow-block: scroll;
  margin-bottom: 12px;
}
#div3 {
  overflow-block: visible;
  margin-bottom: 120px;
}
#div4 {
  overflow-block: auto;
  margin-bottom: 120px;
}
```

### Результат

{{EmbedLiveSample("Примеры", "100%", "780")}}

## Спецификации

{{Specifications}}{{cssinfo}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- Связанные свойства CSS: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
- [Логические свойства CSS](/ru/docs/Web/CSS/CSS_Logical_Properties)
- [Режимы письма](/ru/docs/Web/CSS/CSS_Writing_Modes)
