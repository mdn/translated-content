---
title: Sticky footers
slug: Web/CSS/Layout_cookbook/Sticky_footers
---

{{CSSRef}}

Шаблон нижнего колонтитула - это шаблон, в котором нижний колонтитул вашей страницы «прилипает» к нижней части области просмотра в тех случаях, когда содержимое короче высоты области просмотра. Рассмотрим два способа, как этого достичь.

![A sticky footer pushed to the bottom of a box](cookbook-footer.png)

## Requirements

Липкий шаблон нижнего колонтитула должен соответствовать следующим требованиям:

- Нижний колонтитул прилипает к нижней части области просмотра, когда содержание короткое.
- Если содержимое страницы выходит за нижнюю часть области просмотра, нижний колонтитул располагается ниже содержимого, как обычно.

## The recipe

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer.html", '100%', 720)}}

> **Примечание:** [Download this example](https://github.com/mdn/css-examples/blob/master/css-cookbook/sticky-footer--download.html)

> **Примечание:** In this example and the following one we are using a wrapper set to `min-height: 100%` in order that our live example works. You could also achieve this for a full page by setting a {{cssxref("min-height")}} of `100vh` on the {{htmlelement("body")}} and then using it as your grid container.

## Выбор сделан

В приведённом выше примере мы получаем липкий нижний колонтитул, используя CSS Grid Layout. Класс `.wrapper` имеет минимальную высоту `100%`, что означает, что он такой же высоты, как и контейнер, в котором он находится. Затем мы создаём сетку с одним столбцом с тремя строками, по одной строке для каждой части нашего макета.

При автоматическом размещении сетки наши элементы будут располагаться в исходном порядке, поэтому заголовок переходит на первую дорожку с автоматическими размерами, основное содержимое - на дорожку `1fr`, а нижний колонтитул - в конечную дорожку с автоматическими размерами. Трек `1fr` будет занимать все доступное пространство и поэтому будет увеличиваться, чтобы заполнить этот пробел.

## Alternate method

If you need compatibility with browsers that do not support Grid Layout you can also use Flexbox to create a sticky footer.

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer-flexbox.html", '100%', 720)}}

The flexbox example starts out in the same way, but we use `display:flex` rather than `display:grid` on the `.wrapper`; we also set `flex-direction` to `column`. Then we set our main content to `flex-grow: 1` and the other two elements to `flex-shrink: 0` — this prevents them from shrinking smaller when content fills the main area.

## Browser compatibility

#### grid-template-rows

{{Compat("css.properties.grid-template-rows")}}

#### flex-direction

{{Compat("css.properties.flex-direction")}}

#### flex-grow

{{Compat("css.properties.flex-grow")}}

#### flex-shrink

{{Compat("css.properties.flex-shrink")}}

## Resources on MDN

- [Basic concepts of Grid Layout](/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
