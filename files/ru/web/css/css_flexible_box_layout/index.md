---
title: CSS Flexible Box Layout
slug: Web/CSS/CSS_flexible_box_layout
---

{{CSSRef}}

**Способ CSS раскладки Flexible Box** (CSS Flexible Box Layout или **Flexbox**) — это способ CSS раскладки, означающий [блочную модель CSS](/ru/docs/Web/CSS/CSS_Box_Model), оптимизированную для построения пользовательских интерфейсов. Во флекс-модели потомки флекс-контейнера могут выстраиваться в любом направлении (право/лево, верх/низ), растягиваться, заполняя свободное пространство, или сжиматься во избежание переполнения родительского контейнера. Доступно различное выравнивание потомков по горизонтали и вертикали. Комбинация из родительского и вложенных блоков позволяют создавать такой layout, при котором элементы автоматически выстраиваются в столбы или строки.

## Базовый пример

В следующем примере контейнер объявлен как `display: flex`, таким образом его три потомка становятся флекс-элементами. Свойству `justify-content` присвоено значение `space-between` для того, чтобы, во-первых, задать между элементами равные интервалы по основной оси, и, во-вторых, «примагнитить» первый и последний элементы к левому и правому краям контейнера соответственно. Также можно заметить, что флекс-элементы растянуты перпендикулярно оси; это происходит из-за того, что дефолтным значением `align-items` является `stretch`. Так как высота родительского контейнера не задана, элементы растягиваются по высоте и принимают значение высоты самого высокого из них.

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 500)}}

## Reference

### CSS Properties

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}
- {{cssxref("order")}}

## Guides

- [Using CSS flexible boxes](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
  - : Step-by-step tutorial about how to build layouts using this feature.
- [Using flexbox to lay out Web applications](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_flexbox_to_lay_out_web_applications)
  - : Tutorial explaining how to use flexbox in the specific context of Web applications.

## Спецификации

| Specification                  | Status                      | Comment             |
| ------------------------------ | --------------------------- | ------------------- |
| {{ SpecName('CSS3 Flexbox') }} | {{ Spec2('CSS3 Flexbox') }} | Initial definition. |
