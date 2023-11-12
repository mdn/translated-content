---
title: Using z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index
---

{{cssref}}

The first part of this article, [Stacking without the z-index property](/en/CSS/Understanding_z-index/Stacking_without_z-index), explains how stacking is arranged by default. If you want to create a custom stacking order, you can use the {{cssxref("z-index")}} property on a [positioned](/ru/docs/Web/CSS/position#Types_of_positioning) element.

Свойство `z-index` может иметь значение в целых числах (положительные, ноль, или отрицательные), что представляет собой позицию элемента вдоль оси z. Если вы не знакомы с **осью** z, представьте себе страницу как стопку слоёв, имеющих собственное порядковое число. Слои представлены в числовом порядке, with larger numbers above smaller numbers.

- bottom layer _(farthest from the observer)_
- ...
- Layer -3
- Layer -2
- Layer -1
- Layer 0 _(default rendering layer)_
- Layer 1
- Layer 2
- Layer 3
- ...
- top layer _(closest to the observer)_

> **Примечание:**
>
> - When no `z-index` property is specified, elements are rendered on the default rendering layer 0 (zero).
> - If several elements share the same `z-index` value (i.e., they are placed on the same layer), stacking rules explained in the section [Stacking without z-index](/en/CSS/Understanding_z-index/Stacking_without_z-index) apply.

In the following example, the layers' stacking order is rearranged using `z-index`. The `z-index` of element #5 has no effect since it is not a positioned element.

{{EmbedLiveSample("Source_code_for_the_example", 600, 400)}}

## Source code for the example

### HTML

```html
<div id="abs1">
  <b>DIV #1</b>
  <br />position: absolute; <br />z-index: 5;
</div>

<div id="rel1">
  <b>DIV #2</b>
  <br />position: relative; <br />z-index: 3;
</div>

<div id="rel2">
  <b>DIV #3</b>
  <br />position: relative; <br />z-index: 2;
</div>

<div id="abs2">
  <b>DIV #4</b>
  <br />position: absolute; <br />z-index: 1;
</div>

<div id="sta1">
  <b>DIV #5</b>
  <br />no positioning <br />z-index: 8;
</div>
```

### CSS

```css
div {
  padding: 10px;
  opacity: 0.7;
  text-align: center;
}

b {
  font-family: sans-serif;
}

#abs1 {
  z-index: 5;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  left: 10px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#rel1 {
  z-index: 3;
  height: 100px;
  position: relative;
  top: 30px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  z-index: 2;
  height: 100px;
  position: relative;
  top: 15px;
  left: 20px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  right: 10px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  z-index: 8;
  height: 70px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

## See also

- [Stacking without the z-index property](/en/CSS/Understanding_z-index/Stacking_without_z-index): The stacking rules that apply when `z-index` is not used.
- [Stacking with floated blocks](/en/CSS/Understanding_z-index/Stacking_and_float): How floating elements are handled with stacking.
- [The stacking context](/en/CSS/Understanding_z-index/The_stacking_context): Notes on the stacking context.
- [Stacking context example 1](/en/CSS/Understanding_z-index/Stacking_context_example_1): 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/en/CSS/Understanding_z-index/Stacking_context_example_2): 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/en/CSS/Understanding_z-index/Stacking_context_example_3): 3-level HTML hierarchy, z-index on the second level
