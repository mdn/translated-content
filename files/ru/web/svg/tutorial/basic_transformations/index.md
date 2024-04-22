---
title: Базовые трансформации
slug: Web/SVG/Tutorial/Basic_Transformations
---

{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}

Теперь мы готовы начать изменять наши замечательные изображения. Но сначала давайте ознакомимся с {{SVGElement("g")}} элементом. С его помощью вы можете назначить свойства для любого набора элементов. На самом деле, в этом и состоит его единственная цель.

#### Пример

```html
<svg width="30" height="10">
  <g fill="red">
    <rect x="0" y="0" width="10" height="10" />
    <rect x="20" y="0" width="10" height="10" />
  </g>
</svg>
```

{{ EmbedLiveSample('Пример', '30', '10') }}

Все последующие преобразования суммируются в атрибуте преобразования элемента `transform` . Преобразования могут быть последовательно суммированы, разделителем выступает пробел.

## Перемещения

Иногда необходимо сместить элемент, хотя вы спозиционировали его согласно определённым атрибутам. Для этого используется `translate()`.

```html
<svg width="40" height="50" style="background-color:#bff;">
  <rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
</svg>
```

Пример генерирует прямоугольник, перемещённый в точку (30,40) вместо точки (0,0).

{{ EmbedLiveSample('Перемещения', '40', '50') }}

если второе значение не задано, то оно приравнивается _0_.

## Вращение

Вращение элементов - это достаточно типичная задача. Используйте `rotate()` для этого:

```html
<svg width="31" height="31">
  <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
</svg>
```

Данный пример показывает квадрат который повернули на 45 градусов. Значение для `rotate()` задаётся в градусах.

{{ EmbedLiveSample('Вращение', '31', '31') }}

## Смещение углов

Чтобы сделать ромб из нашего прямоугольника, доступны преобразования skewX () и skewY (). Каждый из них принимает угол, определяющий, насколько элемент будет искажён.

## Масштабирование

`scale()` изменяем размер элемента. Он использует 2 параметра. Первый - это коэффициент масштабирования по оси Х, а второй - по оси Y. Коэффициенты выражают сжатие по отношению к оригинальному изображению. Например, _0.5 уменьшает на 50%. Если второй параметр отсутствует, то тогда он принимается равным первому._

## Комплексные перемещения с `matrix()`

Все приведённые выше преобразования могут быть описаны с помощью матрицы перемещений 2x3. Чтобы объединить несколько перемещений, можно установить результирующую матрицу с помощью `matrix(a, b, c, d, e, f)`, которая преобразует координаты из предыдущей системы координат в новую систему координат посредством:

<math display="block"><semantics><mrow><mo>{</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>new</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>new</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr></mtable></mrow><annotation encoding="TeX">\left\{ \begin{matrix} x*{\mathrm{prevCoordSys}} = a x*{\mathrm{newCoordSys}} + c y*{\mathrm{newCoordSys}} + e \\ y*{\mathrm{prevCoordSys}} = b x*{\mathrm{newCoordSys}} + d y*{\mathrm{newCoordSys}} + f \end{matrix} \right.</annotation></semantics></math>

См. [конкретный пример документации SVG](/ru/docs/Web/SVG/Attribute/transform#General_Transformation). Подробную информацию об этом свойстве можно найти в [SVG Рекомендациях](http://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined).

## Эффекты на системе координат

В случае использования преобразований вы устанавливаете новую систему координат внутри элемента, к которому применяются изменения. Это означает, что единицы измерения которые вы определяете и его дочерние еи не будут соответствовать 1:1, но также будут искажены, повёрнуты, перемещены и смаштабированы в соответствии с преобразованиями.

```html
<svg width="100" height="100">
  <g transform="scale(2)">
    <rect width="50" height="50" />
  </g>
</svg>
```

В результата прямоугольник в примере выше будет 100x100px. Более интригующие эффекты возникают, когда вы используете такие атрибуты, как `userSpaceOnUse`.

{{ EmbedLiveSample('Эффекты_на_системе_координат', '100', '100') }}

## Встраивание SVG в SVG

В отличие от HTML, SVG позволяет встраивать другие `svg` элементы без разрыва. Таким образом вы можете запросто создать новую координатную систему используя `viewBox`, `width` и `height` внутреннего `svg` элемента.

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
  <svg width="100" height="100" viewBox="0 0 50 50">
    <rect width="50" height="50" />
  </svg>
</svg>
```

На примере выше, так же как и на других примерах ранее, вы можете видеть такой же эффект увеличения изображения в два раза.

{{ EmbedLiveSample('Встраивание_SVG_в_SVG', '100', '100') }}

{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}
