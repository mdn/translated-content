---
title: opacity
slug: Web/CSS/opacity
---

{{CSSRef}}

CSS-свойство **`opacity`** устанавливает непрозрачность элемента. Непрозрачность - это степень, в которой содержимое скрывается за элементом, является противоположностью прозрачности.

{{EmbedInteractiveExample("pages/css/opacity.html")}}

`opacity` применяется к элементу в целом, включая его содержимое, даже если значение не наследуется дочерними элементами. Таким образом, элемент и его потомки имеют одинаковую непрозрачность относительно фона элемента, даже если они имеют различную непрозрачность относительно друг друга.

Использование `opacity` со значением, отличным от `1`, помещает элемент в новый [контекст наложения](/ru/docs/CSS/Understanding_z-index/The_stacking_context).

Если вы [не хотите применять opacity к дочерним элементам](http://stackoverflow.com/questions/13508877/resetting-the-opacity-of-a-child-elements-maple-browser-samsung-tv-app), используйте взамен свойство {{cssxref("background")}}. Например:

```css
background: rgba(0, 0, 0, 0.4);
```

## Синтаксис

### Значения

- `<alpha-value>`
  - | : {{cssxref("number", "число")}} в пределах от `0.0` до `1.0`, включительно, или {{cssxref("percentage", "проценты")}} в пределах от `0%` до `100%`, включительно, представляет непрозрачность канала (т.е. значение его альфа-канала). Любое значение вне интервала, хотя и является валидным, округляется до ближайшего предела в диапазоне. | Значение                                                         | Действие |
    | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------- |
    | `0`                                                                                                                                                                                                                                                                                                                                            | Элемент полностью прозрачен (он становится невидимым).           |
    | Любое {{cssxref("number", "число")}} строго между `0` и `1`                                                                                                                                                                                                                                                                                    | Элемент полупрозрачный (т.е. содержимое элемента можно увидеть). |
    | `1` (значение по умолчанию)                                                                                                                                                                                                                                                                                                                    | Элемент полностью непрозрачный (видимый).                        |

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Базовый пример

```css
div {
  background-color: yellow;
}
.light {
  opacity: 0.2; /* Едва видимый текст на фоне */
}
.medium {
  opacity: 0.5; /* Видимость текста более чёткая на фоне */
}
.heavy {
  opacity: 0.9; /* Видимость текста очень чёткая на фоне */
}
```

```html
<div class="light">You can barely see this.</div>
<div class="medium">This is easier to see.</div>
<div class="heavy">This is very easy to see.</div>
```

{{EmbedLiveSample('Базовый_пример', '640', '64')}}

### Различная непрозрачность с `:hover`

```css
img.opacity {
  opacity: 1;
  filter: alpha(opacity=100); /* IE8 и ниже */
  zoom: 1; /* Триггеры "hasLayout" в IE 7 и ниже */
}

img.opacity:hover {
  opacity: 0.5;
  filter: alpha(opacity=50);
  zoom: 1;
}
```

```html
<img
  src="https://developer.mozilla.org/mdn-social-share.png"
  alt="MDN logo"
  width="128"
  height="146"
  class="opacity" />
```

{{EmbedLiveSample('Различная_непрозрачность_с_hover', '150', '175')}}

## Проблемы доступности

Если непрозрачность текста регулируется, важно убедиться, что коэффициент контрастности между цветом текста и фоном, на котором размещён текст, достаточно высок, чтобы люди, испытывающие проблемы со слабым зрением, могли читать содержимое страницы.

Коэффициент цветовой контрастности определяется путём сравнения яркости текста с откорректированной непрозрачностью и значением цвета фона. Чтобы соответствовать действующим [Рекомендациям по доступности веб-контента (WCAG)](https://www.w3.org/WAI/intro/wcag), для текстового содержимого требуется соотношение 4.5:1 и 3:1 для более крупного текста, такого как заголовки. Большой текст определяется как 18.66px и [жирный](/ru/docs/Web/CSS/font-weight) или крупнее, или 24px или выше.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Спецификации

{{Specifications}}

{{cssinfo}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Microsoft's filter:alpha(opacity=xx)](http://msdn.microsoft.com/en-us/library/ms532910%28VS.85%29.aspx)
