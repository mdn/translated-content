---
title: Раздельная навигация
slug: Web/CSS/Layout_cookbook/Split_Navigation
---

{{CSSRef}}

Навигационный паттерн, в котором один или более элементов отделены от остальных элементов навигации.

![Items separated into two groups.](split-navigation.png)

## Требования

Распространённый навигационный шаблон имеет один элемент, который отделен от остальных. Мы можем использовать Flexbox для того, чтобы сделать это, без необходимости создавать два набора элементов в двух раздельных flex контейнерах.

## Рецепт

{{EmbedGHLiveSample("css-examples/css-cookbook/split-navigation.html", '100%', 520)}}

> **Примечание:** [Download this example](https://github.com/mdn/css-examples/blob/master/css-cookbook/split-navigation--download.html)

## Choices made

Этот паттерн объединяет margin со значением auto и Flexbox для разделения элементов.

Auto margin поглощает все доступное пространство в указанном направлении. Так же работает центрирование блока с автоматическими margin - вы имеете отступы на каждой стороне блока, пытающиеся занять все доступное пространство, таким образом толкая блок в центр.

В этом случаи левый auto margin занимает любое доступное пространство и толкает элемент к правому краю. Вы могли применить класс push к любому элементу в списке.

## Поддержка браузерами

The various layout methods have different browser support. See the charts below for details on basic support for the properties used.

#### Flexbox

{{Compat("css.properties.flex")}}

## Смотрите также

- [CSS Flexible Box Layout](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout)
