---
title: Обратная совместимость Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Backwards_compatibility_of_flexbox
---

{{CSSRef}}

Flexbox очень хорошо поддерживается современными браузерами, однако есть несколько проблем, с которыми вы могли столкнуться. В этом руководстве мы рассмотрим, насколько хорошо flexbox поддерживается браузерами, а так же некоторые потенциальные проблемы, ресурсы и методы для создания обходных путей и запасных вариантов.

## История flexbox

Как и все спецификации CSS, flexbox претерпела огромное количество изменений, прежде чем стать Кандидатом в рекомендации W3C. У спецификации в этом статусе не должно быть значительных изменений, однако с предыдущими итерациями все было иначе.

Flexbox был реализован экспериментальным путём в нескольких браузерах. В то время метод создания экспериментальных реализаций подразумевал использование вендорных префиксов. Идея этих префиксов была в том, чтобы позволить инженерам браузеров и веб-разработчикам исследовать и протестировать новшества спецификации без конфликтов с другими реализациями. Идея заключалась в том, чтобы не использовать экспериментальные реализации на продакшене. Однако, в конечном счёте префиксы всё равно попали в продакшн, и изменения в экспериментальной спецификации вынудили людей обновлять сайты, чтобы этой самой спецификации соответствовать.

[В 2009](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) спецификация выглядела совсем по-другому. Чтобы создать flex-контейнер, вам нужно было использовать `display: box` и несколько `box-*` свойств, которые делали то, что сегодня вы понимаете под flexbox.

Очередное [обновление](https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/) спецификации поменяло синтаксис на `display: flexbox` — и опять с вендорными префиксами.

В конечном счёте спецификация была обновлена, чтобы определить `display: flex` как способ создания flex-контейнера. Начиная с этого момента поддержка браузерами обновлённой версии спецификации отличная.

Существует несколько старых статей, которые описывают более ранние версии flexbox, их довольно легко вычислить по тому, как они описывают создание flex-контейнера. Если вы нашли что-то вроде `display: box` или `display: flexbox`, то это уже устаревшая информация.

## Поддержка браузерами

Браузеры отлично поддерживают flexbox, и на данный момент большинству из них не нужны префиксы для этого. Safari последним из основных браузеров избавился от префиксов после релиза Safari 9 в 2015. Два браузера, о которых вам нужно помнить для обеспечения кроссбраузерности, это:

- Internet Explorer 10, который внедрил `display: flexbox` версию спецификации с префиксом `-ms-`.
- UC Browser, который все ещё поддерживает спецификацию версии 2009 год с `display: box` и префиксом `-webkit-`.

Также возьмите на заметку, что Explorer 11 поддерживает современный `display: flex,` однако не без багов.

## Common issues

The majority of issues with flexbox relate to the changes in the specification, as it has been developed, and the fact that many of us were attempting to use an experimental specification in production. If you are trying to ensure backwards compatibility with old versions of browsers, and in particular IE10 and 11, the [Flexbugs](https://github.com/philipwalton/flexbugs) site is a helpful resource. You will see that many of the listed bugs apply to old browser versions and are fixed in current browsers. Each of the bugs has a workaround listed — which can save you many hours of puzzling.

If you want to include very old browsers with flexbox support then you can include the vendor prefixes in your CSS in addition to the unprefixed version. This is becoming less and less of a requirement today as support is widespread.``

```css
.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
```

[Autoprefixer Online](https://autoprefixer.github.io/) is a useful way to see which prefixes are recommended, depending on how many versions you wish to go back with browser support. You can also check [Can I Use](https://caniuse.com/#feat=flexbox) for information about when prefixes were removed in browsers to make your decision.

## Useful fallback techniques

Given that flexbox usage is initiated with value of the {{cssxref("display")}} property, when needing to support very old browsers which do not support flexbox at all, fallbacks can be created by overwriting one layout method with another. The specification defines what happens if you use other layout methods on an element which then becomes a flex item.

### Floated items

> "float and clear do not create floating or clearance of flex item, and do not take it out-of-flow." - [3. Flex Containers](https://www.w3.org/TR/css-flexbox-1/#flex-containers)

In the following live example, I have floated two blocks and then set `display: flex` on the container. The items are now flex items, which means they stretch to equal height. Any float behaviour does not apply.

You can test the fallback behaviour by removing `display: flex` from the wrapper.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/float.html", '100%', 550)}}

### display: inline-block

Once an `inline-block` item becomes a flex item, it is `block`ified and so behavior of `display: inline-block` like preserving white space between items no longer applies.

Remove `display: flex` to see the fallback behavior. You'll see white space added between the items, which is what happens when using `display: inine-block` as it prefers white space like other inline items.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/inline-block.html", '100%', 550)}}

### display: table-

The CSS table display properties are potentially very useful as a fallback, due to the fact that they allow design patterns such as full height columns and vertical centering and work back as far as Internet Explorer 8.

If you use `display: table-cell` on an item in your HTML it takes on the styling of an HTML table cell. CSS creates anonymous boxes to represent these items so that you do not need to wrap each item in a wrapper to represent the HTML table row, and a second one to represent the table element itself, You can't see or style these anonymous boxes; they are there purely to fix up the tree.

If you then declare `display: flex` on the parent item, these anonymous boxes do not get created and so your item remains a direct child and can become a flex item — losing any of the table display features.

> "Note: Some values of display normally trigger the creation of anonymous boxes around the original box. If such a box is a flex item, it is blockified first, and so anonymous box creation will not happen. For example, two contiguous flex items with display: table-cell will become two separate display: block flex items, instead of being wrapped into a single anonymous table." - [4. Flex Items](https://www.w3.org/TR/css-flexbox-1/#flex-items)

{{EmbedGHLiveSample("css-examples/flexbox/browsers/table-cell.html", '100%', 550)}}

### The vertical-align property

The live example below demonstrates use of the {{cssxref("vertical-align")}} property along with `display: inline-block`. Both `display: table-cell` and `display: inline-block` allow for the use of this property. Use of `vertical-align` enables vertical alignment prior to flexbox. The property is ignored by flexbox and so you can use it in conjunction with `display: table-cell` or `display: inline-block` as a fallback and then safely use box alignment properties in flexbox instead.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/vertical-align.html", '100%', 550)}}

## Feature Queries and flexbox

You can use [feature queries](/ru/docs/Web/CSS/%40supports) to detect flexbox support:

```css
@supports (display: flex) {
  // code for supporting browsers
}
```

Note that Internet Explorer 11 does not support feature queries yet _does_ support flexbox. If you decide the IE11 implementation is too buggy and you wish to serve it the fallback layout then you could use feature queries to serve flexbox rules only to those browsers with good flexbox support. Remember that if you want to include versions of browsers that had vendor-prefixed flexbox you would need to include the prefixed version in your feature query. The following feature query would include UC Browser, which supports feature queries and old flexbox syntax, prefixed:

```css
@supports (display: flex) or (display: -webkit-box) {
  // code for supporting browsers
}
```

For more information about using Feature Queries see [Using Feature Queries in CSS](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/) on the Mozilla Hacks blog.

## Conclusion

While I've spent some time in this guide going through potential issues and fallbacks, flexbox is very much ready for you to be using in production work. This guide will help you in those cases where you do come across an issue or have the requirement to support older browsers.
