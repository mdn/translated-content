---
title: ":focus-visible"
slug: Web/CSS/:focus-visible
---

Псевдокласс **`:focus-visible`** применяется, в то время как элемент соответствует псевдоклассу :focus, и UA ({{glossary("User Agent")}}) определяет с помощью эвристики, что фокус должен быть сделан очевидным для элемента.

Этот селектор полезен для предоставления другого индикатора фокуса, основанного на модальности ввода пользователя (мышь против клавиатуры).

Обратите внимание, что Firefox поддерживает аналогичную функциональность через старый псевдокласс с префиксом `:-moz-focusring`.

## Синтаксис

{{CSSSyntax}}

## Пример

### Базовый пример

В этом примере селектор `:focus-visible` использует поведение UA, чтобы определить, когда соответствовать. Сравните, что происходит, когда вы щёлкаете мышью по разным элементам управления, и что происходит при переходе по ним с помощью клавиатуры. Обратите внимание на разницу в поведении элементов, оформленных с помощью `:focus`.

```html
<input value="Default styles" /><br />
<button>Default styles</button><br />
<input class="focus-only" value=":focus only" /><br />
<button class="focus-only">:focus only</button><br />
<input class="focus-visible-only" value=":focus-visible only" /><br />
<button class="focus-visible-only">:focus-visible only</button>
```

```css
input,
button {
  margin: 10px;
}

.focus-only:focus {
  outline: 2px solid black;
}

.focus-visible-only:focus-visible {
  outline: 4px dashed darkorange;
}
```

{{EmbedLiveSample("Базовый_пример", "100%", 300)}}

### Выборочное отображение индикатора фокусировки

Пользовательский элемент управления, такой как кнопка [настраиваемого элемента](/ru/docs/User:Andreas_Wuest/Custom_Elements), может использовать: focus-visible для выборочного применения индикатора фокуса только к фокусу клавиатуры. Это соответствует собственному поведению фокуса для таких элементов управления, как {{htmlelement ("button")}}.

```html
<custom-button tabindex="0" role="button">Click Me</custom-button>
```

```css
custom-button {
  display: inline-block;
  margin: 10px;
}

custom-button:focus {
  /* Обеспечьте резервный стиль для браузеров,
которые не поддерживают: focus-visible */
  outline: none;
  background: lightgrey;
}

custom-button:focus:not(:focus-visible) {
  /* Remove the focus indicator on mouse-focus for browsers
     that do support :focus-visible */
  background: transparent;
}

custom-button:focus-visible {
  /* Draw a very noticeable focus style for
     keyboard-focus on browsers that do support
     :focus-visible */
  outline: 4px dashed darkorange;
  background: transparent;
}
```

{{EmbedLiveSample("Выборочное_отображение_индикатора_фокусировки", "100%", 300)}}

## Polyfill

You can polyfill `:focus-visible` using [focus-visible.js](https://github.com/WICG/focus-visible).

## Accessibility concerns

### Low vision

Make sure the visual focus indicator can be seen by people with low vision. This will also benefit anyone use a screen in a brightly lit space (like outside in the sun). [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) requires that the visual focus indicator be at least 3 to 1.

- Accessible Visual Focus Indicators: [Give Your Site Some Focus! Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Cognition

It may not be obvious as to why the focus indicator is appearing and disappearing if a person is using mixed forms of input. For users with cognitive concerns, or who are less technologically literate, this lack of consistent behavior for interactive elements may be confusing.

## Specifications

| Specification                                                                 | Status                      | Comment             |
| ----------------------------------------------------------------------------- | --------------------------- | ------------------- |
| {{SpecName("CSS4 Selectors", "#the-focus-visible-pseudo", ":focus-visible")}} | {{Spec2("CSS4 Selectors")}} | Initial definition. |

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
