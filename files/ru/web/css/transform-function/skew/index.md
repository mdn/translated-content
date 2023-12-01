---
title: skew()
slug: Web/CSS/transform-function/skew
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) функция **`skew()`** трансформирует элемент, наклоняя его в 2D-пространстве.

{{EmbedInteractiveExample("pages/css/function-skew.html")}}

Данная трансформация является линейным преобразованием векторного пространства (трансвекция или [shear mapping](https://en.wikipedia.org/wiki/Shear_mapping)), которое деформирует каждую точку элемента на определённый угол по горизонтали или вертикали. Координаты каждой точки изменяются на величину, пропорциональную указанному углу и расстоянию до точки, относительно которой выполняется трансформация (origin); таким образом, чем больше расстояние до смещаемой точки элемента, тем больше она будет смещена по горизонтали или вертикали.

## Синтаксис

Функция `skew()` задаётся одним или двумя значениями которые отображают наклон в каждом из направлений.

```
skew(ax)

skew(ax, ay)
```

### Значения

- `ax`
  - : Указывается значение {{cssxref("&lt;angle&gt;")}}, которое является углом наклона вдоль оси X.
- `ay`
  - : Указывается значение {{cssxref("&lt;angle&gt;")}}, которое является углом наклона вдоль оси Y. Если данное значение не задано, то по умолчанию оно равно `0`. В этом случае вертикального наклона не будет, а будет только горизонтальный.

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
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ><mtr></mtr></mtable></mfenced
        ></math>
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[1 tan(ay) tan(ax) 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Примеры

### Используя только наклон по оси x

#### HTML

```html
<div>Обычный</div>
<div class="skewed">Наклонённый</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg); /* Equal to skewX(10deg) */
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample("Используя_только_наклон_по_оси_x", 200, 200)}}

### Используя два угла

#### HTML

```html
<div>Обычный</div>
<div class="skewed">Наклонённый</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg, 10deg);
  background-color: pink;
}
```

#### Результат

{{EmbedLiveSample("Используя_два_угла", 200, 200)}}

## Поддержка браузеров

Please see the [`<transform-function>`](/ru/docs/Web/CSS/transform-function#Browser_compatibility) data type for compatibility info.

## Смотрите также

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
