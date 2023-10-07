---
title: user-select
slug: Web/CSS/user-select
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`user-select`** определяет может ли пользователь выбрать текст. Оно не влияет на контент, загруженный как {{Glossary("Chrome", "chrome")}}, за исключением текстовых блоков.

```css
/* Ключевые слова в значении */
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;

/* Глобальные значения */
user-select: inherit;
user-select: initial;
user-select: unset;

/* Специфичные для Mozilla значения */
-moz-user-select: none;
-moz-user-select: text;
-moz-user-select: all;

/* Специфичные для WebKit значения */
-webkit-user-select: none;
-webkit-user-select: text;
-webkit-user-select: all; /*Не работает Safari; используйте только
                             "none" или "text", или, в противном случае, оно
                             будет разрешать ввод в <html> контейнер */

/* Специфичные для Microsoft значения */
-ms-user-select: none;
-ms-user-select: text;
-ms-user-select: element;
```

{{cssinfo}}

## Синтаксис

- `none`
  - : Текст элемента и вложенных в него элементов не выбирается. Обратите внимание, что объект {{domxref("Selection")}} может содержать эти элементы.
- `auto`
  - : Вычисляемое значение, автоматически определяется следующим образом:
    - Для псевдо-элементов `::before` и `::after` вычисляемое значение - `none`
    - Если элемент является редактируемым, вычисляемое значение - `contain`
    - Иначе, если вычисляемое значение `user-select` для родителя этого элемента - `all`, вычисляемое значение - `all`
    - Иначе, если вычисляемое значение `user-select` для родителя этого элемента - `none`, вычисляемое значение - `none`
    - Иначе, вычисляемое значение - `text`
- `text`
  - : Текст может быть выбран пользователем.
- `all`
  - : В HTML-редакторе, если двойной клик или контекстный клик произошёл во вложенном элементе, будет выбрано все содержимое коренного предка с этим значением свойства.
- `contain`
  - : Позволяет начать выбор внутри элемента; однако, выбор будет содержаться внутри границ данного элемента.
- `element`{{non-standard_inline}} (IE-specific alias)
  - : Аналогичен `contain`. Поддерживается только в Internet Explorer.

> **Примечание:** CSS UI 4 [renames user-select: element to contain](https://github.com/w3c/csswg-drafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05).

### Формальный синтаксис

{{csssyntax}}

## Примеры

### HTML

```html
<p>You should be able to select this text.</p>
<p class="unselectable">Hey, you can't select this text!</p>
<p class="all">Clicking once will select all of this text.</p>
```

### CSS

```css
.unselectable {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.all {
  -moz-user-select: all;
  -webkit-user-select: all;
  -ms-user-select: all;
  user-select: all;
}
```

### Результат

{{EmbedLiveSample("Примеры")}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{Cssxref("::selection")}}
- Объект JavaScript {{domxref("Selection")}}.
- [user-select](http://www.w3.org/TR/css-ui-4/#propdef-user-select) in [CSS Basic User Interface Module Level 4](http://www.w3.org/TR/css-ui-4/).
