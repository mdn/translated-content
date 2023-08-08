---
title: Stacking without z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index
---

### Наложения без Z-индекса

Когда элементы не имеют z-индекса, они накладываются в таком порядке(снизу вверх):

1\. Фон и границы корневого элемента.

2\. Дочерние блоки в нормальном потоке в порядке размещения(в HTML порядке).

3\. Дочерние позиционированные элементы, в порядке размещения (в HTML порядке).

В следующем примере, абсолютно и относительно спозиционированным блокам определена величина и позиция таким образом, чтобы продемонстрировать правила наложения.

> **Примечания:**
>
> - Given a homogeneous group of elements without any z-index property, such as the positioned blocks (DIV #1 to #4) in the example, the element's stacking order is their order in the HTML hierarchy, regardless of their position.
> - Standard blocks (DIV #5) in the normal flow, without any positioning property, are always rendered before positioned elements, and appear below them, even if they come later in the HTML hierarchy.

![understanding_zindex_01.png](/@api/deki/files/910/=understanding_zindex_01.png)

## Пример

### HTML

```html
<div id="absdiv1">
  <br /><span class="bold">DIV #1</span> <br />position: absolute;
</div>
<div id="reldiv1">
  <br /><span class="bold">DIV #2</span> <br />position: relative;
</div>
<div id="reldiv2">
  <br /><span class="bold">DIV #3</span> <br />position: relative;
</div>
<div id="absdiv2">
  <br /><span class="bold">DIV #4</span> <br />position: absolute;
</div>
<div id="normdiv">
  <br /><span class="bold">DIV #5</span> <br />no positioning
</div>
```

### CSS

```css
.bold {
  font-weight: bold;
  font: 12px Arial;
}
#normdiv {
  height: 70px;
  border: 1px dashed #999966;
  background-color: #ffffcc;
  margin: 0px 50px 0px 50px;
  text-align: center;
}
#reldiv1 {
  opacity: 0.7;
  height: 100px;
  position: relative;
  top: 30px;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  margin: 0px 50px 0px 50px;
  text-align: center;
}
#reldiv2 {
  opacity: 0.7;
  height: 100px;
  position: relative;
  top: 15px;
  left: 20px;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  margin: 0px 50px 0px 50px;
  text-align: center;
}
#absdiv1 {
  opacity: 0.7;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  left: 10px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
  text-align: center;
}
#absdiv2 {
  opacity: 0.7;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  right: 10px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
  text-align: center;
}
```

### Результат

(If the image does not display in CodePen, click the Tidy button in the CSS section)

{{ EmbedLiveSample('Пример') }}

### Так же посмотрите

- [Stacking and float](/en/CSS/Understanding_z-index/Stacking_and_float) : How floating elements are handled
- [Adding z-index](/en/CSS/Understanding_z-index/Adding_z-index) : Using z-index to change default stacking
- [The stacking context](/en/CSS/Understanding_z-index/The_stacking_context) : Notes on the stacking context
- [Stacking context example 1](/en/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/en/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/en/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level
