---
title: scale3d()
slug: Web/CSS/transform-function/scale3d
---

{{CSSRef}}

`scale3d()` CSS функция изменяет размер элемента. Благодаря величине масштабирования определённой вектором, может изменять различные размеры в разных масштабах.

Это преобразование характеризуется вектором, координаты которого определяют, сколько масштабирования выполняется в каждом направлении. Если все три координаты вектора равны, масштабирование равномерно или изотропно, а форма элемента сохраняется. В этом случае функция масштабирования определяет гомотетическое преобразование.

Когда вне диапазона \[-1, 1], масштабирование увеличивает элемент в направлении координаты; Когда внутри диапазона он сжимает элемент в этом направлении. При равном 1 он ничего не делает, а когда отрицательный, он выполняет точечное отражение и модификацию размера.

## Синтаксис

```
scale3d(sx, sy, sz)
```

## Значения

- _sx_
  - : Является {{cssxref("&lt;number&gt;")}} , представляющим абсцисс вектора масштабирования.
- _sy_
  - : Является {{cssxref("&lt;number&gt;")}} , представляющим ординату вектора масштабирования.
- _sz_
  - : Является {{cssxref("&lt;number&gt;")}}, представляющим z-компонент масштабирующего вектора.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Cartesian coordinates on ℝ<sup>2</sup></th>
      <th scope="col">Homogeneous coordinates on ℝℙ<sup>2</sup></th>
      <th scope="col">Cartesian coordinates on ℝ<sup>3</sup></th>
      <th scope="col">Homogeneous coordinates on ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2">
        Это преобразование применяется к пространству 3D и не может быть
        представлено на плоскости.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Примеры

### Without changing the origin

#### HTML

```html
<p>foo</p>
<p class="transformed">bar</p>
```

#### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformed {
  transform: perspective(500px) scale3d(0.8, 2, 0.2) translateZ(100px);
  background-color: blue;
}
```

#### Result

{{EmbedLiveSample("Without_changing_the_origin","100%","200")}}

### Translating the origin of the transformation

#### HTML

```html
<p>foo</p>
<p class="transformed">bar</p>
```

#### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformed {
  transform: scale3d(2, 3, 0);
  transform-origin: center;
  background-color: blue;
}
```

#### Result

{{EmbedLiveSample("Translating_the_origin_of_the_transformation","100%","200")}}
