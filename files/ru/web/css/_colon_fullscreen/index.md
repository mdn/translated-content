---
title: ":fullscreen"
slug: Web/CSS/:fullscreen
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) [Псевдокласс](/ru/docs/Web/CSS/%D0%9F%D1%81%D0%B5%D0%B2%D0%B4%D0%BE-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B) **`:fullscreen`** соответствует элементу, который в данный момент находится в полноэкранном режиме. Если в полноэкранном режиме находятся несколько элементов, то выбираются все они.

## Синтаксис

{{csssyntax}}

## Примечания по использованию

Псевдокласс `:fullscreen` позволяет настроить ваши таблицы стилей для автоматического регулирования размера, стилю или шаблона содержимого, когда элемент переключается между полноэкранным режимом и традиционным представлением.

## Пример

В этом примере, цвет кнопки меняется в зависимости от того, находится ли документ в полноэкранном режиме. Он выполнен без принудительного изменения стиля посредством JavaScript.

### HTML

HTML выглядит так:

```html
<h1>MDN Web Docs Demo: :fullscreen pseudo-class</h1>

<p>
  This demo uses the <code>:fullscreen</code> pseudo-class to automatically
  change the style of a button used to toggle full-screen mode on and off,
  entirely using CSS.
</p>

<button id="fs-toggle">Toggle Fullscreen</button>
```

{{HTMLElement("button")}} с ID `"fs-toggle"` будет изменятся между бледно-красный и бледно-зелёный в зависимости от того, находится ли документ в полноэкранном режиме.

### CSS

Магия происходит в CSS. Используются два правила. Первое устанавливает цвет фона кнопки на "Toggle Full-screen Mode", когда элемент не находится в полноэкранном режиме. Для этого используется ключ `:not(:fullscreen)`, который выглядит как элемент, не имеющий установленного псевдокласса `:fullscreen`.

```css
#fs-toggle:not(:fullscreen) {
  background-color: #afa;
}
```

Когда документ находится в полноэкранном режиме, применяется следующее правило CSS, устанавливающее цвет фона на оттенок бледно-красного.

```css
#fs-toggle:fullscreen {
  background-color: #faa;
}
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## See also

- [Fullscreen API](/ru/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/ru/docs/Web/API/Fullscreen_API/Guide)
- {{cssxref(":not")}}
- {{cssxref("::backdrop")}}
- DOM API: {{ domxref("Element.requestFullscreen()") }}, {{ domxref("Document.exitFullscreen()") }}, {{ domxref("Document.fullscreenElement") }}
- [`allowfullscreen`](/ru/docs/Web/HTML/Element/iframe#allowfullscreen) attribute
