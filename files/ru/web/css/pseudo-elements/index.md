---
title: Псевдоэлементы
slug: Web/CSS/Pseudo-elements
---

{{CSSRef}}

**Псевдоэлемент** в CSS — _это ключевое слово, добавляемое к селектору,_ которое позволяет стилизовать определённую часть выбранного элемента. Например, псевдоэлемент {{ Cssxref("::first-line") }} может быть использован для изменения шрифта первой строки абзаца.

```css
/* Первая строка каждого элемента <p>. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

> **Примечание:** В отличие от псевдоэлементов, [псевдоклассы](/ru/docs/Web/CSS/Псевдо-классы) могут быть использованы для стилизации элемента на основе его _состояния_.

## Синтаксис

```
selector::pseudo-element {
  property: value;
}
```

В селекторе можно использовать только один псевдоэлемент. Он должен находиться после простых селекторов в выражении.

> **Примечание:** Как правило, следует использовать двойное двоеточие (`::`) вместо одинарного (`:`). В этом состоит различие между псевдоклассами и псевдоэлементами. Однако, так как это различие не присутствовало в старых версиях спецификации W3C, большинство браузеров поддерживают оба синтаксиса для псевдоэлементов.

## Список стандартных псевдоэлементов

- {{ Cssxref("::after") }}
- {{ Cssxref("::before") }}
- {{ cssxref("::cue")}}
- {{ Cssxref("::first-letter") }}
- {{ Cssxref("::first-line") }}
- {{ Cssxref("::selection") }}
- {{ Cssxref("::slotted") }}
- {{ Cssxref("::backdrop") }} {{experimental_inline}}
- {{ Cssxref("::placeholder") }} {{experimental_inline}}
- {{ Cssxref("::marker") }} {{experimental_inline}}
- {{ Cssxref("::spelling-error") }} {{experimental_inline}}
- {{ Cssxref("::grammar-error") }} {{experimental_inline}}

<table class="standard-table">
  <tbody>
    <tr>
      <th>Браузер</th>
      <th>Начиная с версии</th>
      <th>Поддерживает</th>
    </tr>
    <tr>
      <td rowspan="2">Internet Explorer</td>
      <td>8.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>9.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td>1.0 (1.0)</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>1.0 (1.5)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Opera</td>
      <td>4.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>7.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>1.0 (85)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
  </tbody>
</table>

## Смотрите также

- [Псевдоклассы](/ru/docs/Web/CSS/Псевдо-классы)
