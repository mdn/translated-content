---
title: text-size-adjust
slug: Web/CSS/text-size-adjust
---

{{CSSRef}}{{SeeCompatTable}}

Свойство **`text-size-adjust`** контролирует алгоритм увеличения текста, используемый на некоторых смартфонах и планшетах. Другие браузеры будут игнорировать это свойство.

Так как это свойство нестандартное, нужно использовать префиксы: `-moz-text-size-adjust`, `-webkit-text-size-adjust`, и `-ms-text-size-adjust`.

Поскольку при разработке многих сайтов не подразумевался их просмотр на мобильных устройствах, то мобильные браузеры отличаются от браузеров для настольных компьютеров способом вывода страницы на экран. Для размещения страниц они используют не ширину экрана устройства, а {{glossary("viewport")}}, который значительно шире, обычно 800 или 1000 пикселей. Чтобы вернуть соответствие слишком широкой страницы истинному размеру устройства, они или показывают лишь часть того, что на самом деле визуализировано, или же уменьшают размер viewport до размеров устройства.

Так как текст, который был уменьшен для того, чтобы уместиться на мобильном экране, может стать очень маленьким, многие мобильные браузеры применяют алгоритм увеличения текста для того, чтобы масштабировать текст и сделать его более удобным для чтения. Когда элемент, содержащий текст, использует 100% ширины экрана, алгоритм увеличивает размер его текста, но без изменения макета. Свойство `text-size-adjust` позволяет веб-разработчикам отменить или изменить это поведение, так как веб-страницы, созданные с учётом вывода на маленькие экраны, не нуждаются в нём.

This approach has been used as numerous web sites are not able to cope with small screens and are not usable when using the classical layout algorithm. This technique has drawbacks: the text is so tiny that it is unreadable without zooming. Even so, the user experience is better with the classical approach, which often leads to put secondary content at the top of the smartphone display, effectively pushing the main content of the page outside the viewport.

But when the user zoomed in until the text becomes readable, an horizontal scrollbar is often needed as the line becomes larger than the width of the screen. This horizontal scrollbar has to be used to read each line of the text, which is a user experience nightmare. To prevent this, several mobile browsers implement a text **inflation** algorithm. When a focused element containing text use 100 % of the width of the screen, its text size is increased until it reached a readable size, without modifying the layout and removing the need of an horizontal scrollbar.

The `text-size-adjust` property allows Web authors to opt out from this behavior, as Web pages designed to handle small screen widths do not need it.

> **Предупреждение**: Это свойство является нестандартным. In order to use it, Web authors have to duplicate, or even triplicate it, prefixed for each engine supporting it.
>
> - Its behavior, and even the syntax, is slightly different from one browser engine to the other. Web developers should read the browser compatibility section with the required attention.
> - **Это свойство работает только на смартфонах.** As there is no inflation algorithm on desktop browsers, and on some tablet browsers like the iPad, the property is not supported there (and ignored). This property is only designed to opt out, or to cancel this opt-out, of the inflating behavior, _not to opt in_.
> - If `-webkit-text-size-adjust` is explicitly set to `none`, old versions of Webkit-based desktop and tablet browsers, like Chrome≤26 or Safari≤5, instead of ignoring the property, will prevent the user to zoom in or out the Web page.[#](https://bugs.webkit.org/show_bug.cgi?id=56543)
> - Not all engines do allow to control the final size of the text using a percentage value (E.g. Webkit and Trident do allow it, Gecko doesn't). Again Web developers should read the browser compatibility section with the required attention.

{{cssinfo}}

## Синтаксис

```css
/* Text is never inflated */
text-size-adjust: none;

/* Text may be inflated */
text-size-adjust: auto;

/* Text may be inflated in this exact proportion */
text-size-adjust: 80%;

/* Глобальные значения */
text-size-adjust: inherit;
text-size-adjust: initial;
text-size-adjust: unset;
```

### Значения

- `none`
  - : Is a keyword preventing the usage of the inflation algorithm on the element. Basically, this means that the element will be displayed without its font inflated. On old WebKit-based desktop browsers (Chrome≤26, Safari≤5), this will instead prevent the user from zooming the webpage in or out.
- `auto`
  - : Is a keyword allowing the usage of the inflation algorithm on the element. Browsers are not forced to use it and they won't do it on desktops and on some tablets. Its main use is to cancel a `none` value previously set.
- `<percentage>`
  - : A percentage value is a synonym of the `auto` keyword, with the additional information that the percentage value is the increase rate to be applied to the font size when the inflation algorithm is applied.

### Формальный синтаксис

{{csssyntax}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Документация](https://developer.apple.com/library/ios/#DOCUMENTATION/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html) от Apple.
- [Описание поведения](http://dbaron.org/log/20111126-font-inflation) Gecko от L. David Baron.
- [Документация](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff462082(v=vs.105).aspx>) от Microsoft.
