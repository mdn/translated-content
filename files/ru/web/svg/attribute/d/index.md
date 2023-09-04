---
title: d
slug: Web/SVG/Attribute/d
---

{{SVGRef}}

Атрибут **`d`** предоставляет определение пути для рисования.

Определение пути - это [список команд пути](#Path_commands), в которых каждая команда состоит из буквы и некоторых чисел, представляющих параметр команды. Ниже приведены все возможные команды.

Три элемента используют этот атрибут: {{SVGElement("path")}}, {{SVGElement("glyph")}}, и {{SVGElement("missing-glyph")}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z" />
</svg>
```

{{EmbedLiveSample('Example', '100%', 200)}}

## path

Для {{SVGElement('path')}}, `d` - строка, содержащая ряд команд пути, которые определяют путь, который должен нарисован.(maybe 'drawn' not 'drown')

| Value         | **[\<string>](/docs/Web/SVG/Content_type#String)** |
| ------------- | -------------------------------------------------- |
| Default value | _none_                                             |
| Animatable    | Yes                                                |

## glyph

> **Предупреждение:** Начиная с SVG2 {{SVGElement('glyph')}} устарел и не должен использоваться.

Для {{SVGElement('glyph')}}, `d` является строкой, содержащей серию команд пути, которые определяют форму контура глифа.

| Value         | **[\<string>](/docs/Web/SVG/Content_type#String)** |
| ------------- | -------------------------------------------------- |
| Default value | _none_                                             |
| Animatable    | Yes                                                |

> **Примечание:** Точка происхождения (координата `0`, `0`) обычно является верхним левым углом контекста. Однако элемент {{SVGElement("glyph")}} имеет своё происхождение в левом нижнем углу своего бокса.

## missing-glyph

> **Предупреждение:** **Внимание:** Начиная с SVG2 {{SVGElement('missing-glyph')}} устарел и не должен использоваться.

Для {{SVGElement('missing-glyph')}}, `d` является строкой, содержащей серию команд пути, которые определяют форму контура глифа.

| Value         | **[\<string>](/docs/Web/SVG/Content_type#String)** |
| ------------- | -------------------------------------------------- |
| Default value | _none_                                             |
| Animatable    | Yes                                                |

## Команды пути

_(Path commands)_

Команды пути - это команды, объединённые вместе в одну строку и определяющие путь, который нужно нарисовать. Каждая команда состоит из буквы, следующей за некоторыми числами, которые представляют параметры команды.

SVG определяет 6 типов команд пути для всех 20 команд:

- MoveTo: `M`, `m`
- LineTo: `L`, `l`, `H`, `h`, `V`, `v`
- Cubic Bézier Curve: `C`, `c`, `S`, `s`
- Quadratic Bézier Curve: `Q`, `q`, `T`, `t`
- Elliptical Arc Curve: `A`, `a`
- ClosePath: `Z`, `z`

> **Примечание:** Команды чувствительны к регистру; команда верхнего регистра указывает свои аргументы как абсолютные позиции, тогда как команда нижнего регистра указывает точки относительно текущей позиции.

Всегда можно указать отрицательное значение в качестве аргумента для команды: отрицательные углы будут вращаться против часовой стрелки, абсолютные позиции x и y будут приниматься за отрицательные координаты, отрицательные относительные значения x будут перемещаться влево, а отрицательные относительные значения y будут двигаться вверх.

### Команды перемещения

_(MoveTo path commands)_

_MoveTo_ инструкции можно рассматривать как собирание чертёжного инструмента и установку его в другом месте. Между предыдущей точкой и указанной точкой нет линии.

> **Примечание:** Хорошей практикой является открытие всех путей с помощью команды **moveto**, потому что без начального **moveto** команды будут выполняться с начальной точки, где бы это ни было ранее, что может привести к неопределённому поведению.

| Команда | Параметры     | Примечания                                                                                                                                                                                                                                                          |
| ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| M       | (`x`, `y`)+   | Движение начала следующего под-пути к координатам `x`, `y`. Любая последующая координатная пара(ы) интерпретируется как параметр(ы) для неявных абсолютных команд LineTo(L) (см. Ниже). Формула: Pn = {`x`, `y`}                                                    |
| m       | (`dx`, `dy`)+ | Перемещает начало следующего подпути, сдвинув последнюю известную позицию пути на `dx` вдоль оси `x` и на `dy` вдоль оси `y`. Любая последующая пара координат считается неявной относительной командой LineTo (`l`) (см. ниже) Формула: Pn= {xo + `dx`, yo + `dy`} |

#### Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 40,20 h 10
       m  0,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 50,50 h 10
       m-20,10 h 10
       m-20,10 h 10
       m-20,10 h 10" />
</svg>
```

{{EmbedLiveSample('Команды_перемещения', '100%', 200)}}

### LineTo path commands

_LineTo_ инструкции проводят прямую линию от _current point_ (Po; {xo, yo}), до _end point_ (Pn; {xn, yn}), на основе указанных параметров. Конечная точка _end point_ (Pn) становится текущей точкой для следующей команды (Po').

| Command | Parameters    | Notes                                                                                                                                                                                                                                                                                                                                                                   |
| ------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L       | (`x`, `y`)+   | Рисует линию из _текущей точки в конечную точку определённую_ `x`, `y`. Любая последующая пара(ы) координат интерпретируется как параметр(ы) для неявной абсолютной команд(ы) LineTo (`L`). Формула: Po' = Pn = {`x`, `y`}                                                                                                                                              |
| l       | (`dx`, `dy`)+ | Draw a line from the current point to a point for which coordinates are those of the current point shifted by `dx` along the x-axis and `dy` along the y-axis. The current point gets its X and Y coordinates shifted by `dx` and `dy` for the next command. All usubsequente pair of coordinates are considered implicite relative LineTo (`l`) command (_see below_). |
| H       | `x`+          | Draw a horizontal line from the current point to the new `x` coordinate (_y coordinate stay unchanged_). The current point get its x coordinate updated for the next command. All subsequente value are considered an implicite absolute horizontal LineTo (`H`) command.                                                                                               |
| h       | `dx`+         | Draw a horizontal line from the current point to a point shift by `dx` along the the x-axis (_y coordinate stay unchanged_). The current point get its X coordinate updated by `dx` for the next command. All subsequente value are considered an implicite relative horizontal LineTo (`h`) command.                                                                   |
| V       | `y`+          | Draw a vertical line from the current point to the new `y` coordinate (_x coordinate stay unchanged_). The current point get its y coordinate updated for the next command. All subsequente value are considered an implicite absolute vertical LineTo (`V`) command.                                                                                                   |
| v       | `dy`+         | Draw a vertical line from the current point to a point shift by `dy` along the y-axis (_x coordinate stay unchanged_). The current point get its Y coordinate updated by `dy` for the next command. All subsequente value are considered an implicite relative vertical LineTo (`v`) command.                                                                           |

#### Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- LineTo commands in absolute coordinates -->
  <path
    fill="none"
    stroke="red"
    d="M 10,10
           L 90,90
           V 10
           H 50" />

  <!-- LineTo commands in relative coordinates -->
  <path
    fill="none"
    stroke="red"
    d="M 110,10
           l 80,80
           v -80
           h -40" />
</svg>
```

{{EmbedLiveSample('LineTo_path_commands', '100%', 200)}}

### Cubic Bézier Curve

_Cubic [Bézier curves](https://en.wikipedia.org/wiki/Bézier_curve)_ are smooth curve definitions using four points: A starting point, a end point, and two control points to define the curvature.

| Command | Parameters                                | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C       | (`x1`, `y1`, `x2`, `y2`, `x`, `y`)+       | Draw a Bézier curve from the current point to the coordinate `x`, `y`. `x1`, `y1` are the coordinates of the control point at the begining of the curve where `x2`, `y2` are the coordinates of the controle point at the end of the curve. The coordinate `x`, `y` become the new current point for the next command. All subsequente triplets of coordinates are considered implicite absolute cubic Bézier curve (`C`) command.                                                                                                                                                                                                                                                                                                                                                                            |
| c       | (`dx1`, `dy1`, `dx2`, `dy2`, `dx`, `dy`)+ | Draw a Bézier curve from the current point to a point for which coordinates are those of the current point shifted by `dx` along the x-axis and `dy` along the y-axis. `dx1`, `dy1` are the coordinates of the control point at the beginning of the curve relative to the starting point of the curve and `dx2`, `dy2` are the coordinates of the controle point at the end of the curve relative to the starting point of the curve. The current point gets its X and Y coordinates shifted by `dx` and `dy` for the next command. All subsequente triplets of coordinates are considered implicite relative cubic Bézier curve (`c`) command.                                                                                                                                                              |
| S       | (`x2`, `y2`, `x`, `y`)+                   | Draw a smooth Bézier curve from the current point to the coordinate `x`, `y`. `x2`, `y2` are the coordinates of the controle point at the end of the curve. The controle point at the begining of the curve is a reflexion of the controle points at the end of the previous curve command. If the previous command wasn't a curve, then the coordinate of the controle point at the begining of the curve match those of the curve starting point. The coordinate `x`, `y` become the new current point for the next command. All subsequente duo of coordinates are considered implicite absolute smooth cubic Bézier curve (`S`) command.                                                                                                                                                                  |
| s       | (`dx2`, `dy2`, `dx`, `dy`)+               | Draw a smooth Bézier curve from the current point to a point for which coordinates are those of the current point shifted by `dx` along the x-axis and `dy` along the y-axis. `dx2`, `dy2` are the coordinates of the controle point at the end of the curve relative to the starting point of the curve. The controle point at the begining of the curve is a reflexion of the controle points at the end of the previous curve command. If the previous command wasn't a curve, then the coordinate of the controle point at the begining of the curve match those of the curve starting point. The current point gets its X and Y coordinates shifted by `dx` and `dy` for the next command. All subsequente duo of coordinates are considered implicite relative smooth cubic Bézier curve (`s`) command. |

#### Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 200 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Quadratic Bézier curve with absolute coordinate -->
  <path
    fill="none"
    stroke="red"
    d="M 10,90
           C 30,90 25,10 50,10
           S 70,90 90,90" />

  <!-- Quadratic Bézier curve with relative coordinate -->
  <path
    fill="none"
    stroke="red"
    d="M 110,90
           c 20,0 15,-80 40,-80
           s 20,80 40,80" />

  <!-- Highlight the curve vertex and control points -->
  <g id="ControlPoints">
    <!-- First cubic command control points -->
    <line x1="10" y1="90" x2="30" y2="90" stroke="lightgrey" />
    <circle cx="30" cy="90" r="1.5" />

    <line x1="50" y1="10" x2="25" y2="10" stroke="lightgrey" />
    <circle cx="25" cy="10" r="1.5" />

    <!-- Second smooth command control points (the first one is implicite) -->
    <line
      x1="50"
      y1="10"
      x2="75"
      y2="10"
      stroke="lightgrey"
      stroke-dasharray="2" />
    <circle cx="75" cy="10" r="1.5" fill="lightgrey" />

    <line x1="90" y1="90" x2="70" y2="90" stroke="lightgrey" />
    <circle cx="70" cy="90" r="1.5" />

    <!-- curve vertex points -->
    <circle cx="10" cy="90" r="1.5" />
    <circle cx="50" cy="10" r="1.5" />
    <circle cx="90" cy="90" r="1.5" />
  </g>
  <use xlink:href="#ControlPoints" x="100" />
</svg>
```

{{EmbedLiveSample('Cubic_Bézier_Curve', '100%', 200)}}

### Quadratic Bézier Curve

_Quadratic [Bézier curves](https://en.wikipedia.org/wiki/Bézier_curve)_ are smooth curve definitions using three points: A starting point, a end point, and a control point to define the curvature.

| Command | Parameters                  | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Q       | (`x1`, `y1`, `x`, `y`)+     | Draw a Bézier curve from the current point to the coordinate `x`, `y`. `x1`, `y1` are the coordinates of the control point for the curve. The coordinate `x`, `y` become the new current point for the next command. All subsequente duo of coordinates are considered implicite absolute quadratic Bézier curve (`Q`) command.                                                                                                                                                                                                                                                                                                                                 |
| q       | (`dx1`, `dy1`, `dx`, `dy`)+ | Draw a Bézier curve from the current point to a point for which coordinates are those of the current point shifted by `dx` along the x-axis and `dy` along the y-axis. `dx1`, `dy1` are the coordinates of the control point for the curve relative to the starting point of the curve. The current point gets its X and Y coordinates shifted by `dx` and `dy` for the next command. All subsequente duo of coordinates are considered implicite relative quadratic Bézier curve (`q`) command.                                                                                                                                                                |
| T       | (`x`, `y`)+                 | Draw a smooth Bézier curve from the current point to the coordinate `x`, `y`. The controle point for the curve is a reflexion of the controle points at the end of the previous curve command. If the previous command wasn't a curve, then the coordinate of the controle point at the begining of the curve match those of the curve starting point. The coordinate `x`, `y` become the new current point for the next command. All subsequente coordinates are considered implicite absolute smooth quadratic Bézier curve (`T`) command.                                                                                                                    |
| t       | (`dx`, `dy`)+               | Draw a smooth Bézier curve from the current point to a point for which coordinates are those of the current point shifted by `dx` along the x-axis and `dy` along the y-axis. The controle point for the curve is a reflexion of the controle points at the end of the previous curve command. If the previous command wasn't a curve, then the coordinate of the controle point at the begining of the curve match those of the curve starting point. The current point gets its X and Y coordinates shifted by `dx` and `dy` for the next command. All subsequente coordinates are considered implicite relative smooth quadratic Bézier curve (`t`) command. |

#### Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 200 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Quadratic Bézier curve with implicite repetition -->
  <path
    fill="none"
    stroke="red"
    d="M 10,50
           Q 25,25 40,50
           t 30,0 30,0 30,0 30,0 30,0" />

  <!-- Highlight the curve vertex and control points -->
  <g>
    <polyline points="10,50 25,25 40,50" stroke="rgba(0,0,0,.2)" fill="none" />
    <circle cx="25" cy="25" r="1.5" />

    <!-- curve vertex points -->
    <circle cx="10" cy="50" r="1.5" />
    <circle cx="40" cy="50" r="1.5" />

    <g id="SmoothQuadraticDown">
      <polyline
        points="40,50 55,75 70,50"
        stroke="rgba(0,0,0,.2)"
        stroke-dasharray="2"
        fill="none" />
      <circle cx="55" cy="75" r="1.5" fill="lightgrey" />
      <circle cx="70" cy="50" r="1.5" />
    </g>

    <g id="SmoothQuadraticUp">
      <polyline
        points="70,50 85,25 100,50"
        stroke="rgba(0,0,0,.2)"
        stroke-dasharray="2"
        fill="none" />
      <circle cx="85" cy="25" r="1.5" fill="lightgrey" />
      <circle cx="100" cy="50" r="1.5" />
    </g>

    <use xlink:href="#SmoothQuadraticDown" x="60" />
    <use xlink:href="#SmoothQuadraticUp" x="60" />
    <use xlink:href="#SmoothQuadraticDown" x="120" />
  </g>
</svg>
```

{{EmbedLiveSample('Quadratic_Bézier_Curve', '100%', 200)}}

### Elliptical Arc Curve

_Elliptical arc curves_ are curves define as a portion of an ellipse. It is sometimes easier than Bézier curve to draw highly regular curves.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Command</th>
      <th scope="col">Parameters</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">A</th>
      <td>
        (<code>rx</code> <code>ry</code> <code>angle</code>
        <code>large-arc-flag</code> <code>sweep-flag</code> <code>x</code>
        <code>y</code>)+
      </td>
      <td>
        <p>
          Draw an Arc curve from the current point to the coordinate
          <code>x</code>,<code>y</code>. The center of the ellipse used to draw
          the arc is determine automatically based on the other parameters of
          the command:
        </p>
        <ul>
          <li>
            <code>rx</code> and <code>ry</code> are the two radii of the
            ellipse;
          </li>
          <li>
            <code>angle</code> represente a rotation (in degree) of the ellipse
            relative to the x-axis;
          </li>
          <li>
            <code>large-arc-flag</code> and <code>sweep-flag</code> allows to
            chose which arc must be drawn as 4 possible arcs can be drawn out of
            the other parameters.
            <ul>
              <li>
                <code>large-arc-flag</code> allows to chose one of the large arc
                (<strong>1</strong>) or small arc (<strong>0</strong>),
              </li>
              <li>
                <code>sweep-flag</code> allows to chose one of the clockwise
                turning arc (<strong>1</strong>) or anticlockwise turning arc
                (<strong>0</strong>)
              </li>
            </ul>
          </li>
        </ul>
        The coordinate <code>x</code>,<code>y</code> become the new current
        point for the next command. All subsequente set of parameters are
        considered implicite absolute arc curve (<code>A</code>) command.
      </td>
    </tr>
    <tr>
      <th scope="row">a</th>
      <td>
        (<code>rx</code> <code>ry</code> <code>angle</code>
        <code>large-arc-flag</code> <code>sweep-flag</code> <code>dx</code>
        <code>dy</code>)+
      </td>
      <td>
        <p>
          Draw an Arc curve from the current point to to a point for which
          coordinates are those of the current point shifted by
          <code>dx</code> along the x-axis and <code>dy</code> along the y-axis.
          The center of the ellipse used to draw the arc is determine
          automatically based on the other parameters of the command:
        </p>
        <ul>
          <li>
            <code>rx</code> and <code>ry</code> are the two radii of the
            ellipse;
          </li>
          <li>
            <code>angle</code> represente a rotation (in degree) of the ellipse
            relative to the x-axis;
          </li>
          <li>
            <code>large-arc-flag</code> and <code>sweep-flag</code> allows to
            chose which arc must be drawn as 4 possible arcs can be drawn out of
            the other parameters.
            <ul>
              <li>
                <code>large-arc-flag</code> allows to chose one of the large arc
                (<strong>1</strong>) or small arc (<strong>0</strong>),
              </li>
              <li>
                <code>sweep-flag</code> allows to chose one of the clockwise
                turning arc (<strong>1</strong>) or anticlockwise turning arc
                (<strong>0</strong>)
              </li>
            </ul>
          </li>
        </ul>
        The current point gets its X and Y coordinates shifted by
        <code>dx</code> and <code>dy</code> for the next command. All
        subsequente set of parameters are considered implicite relative arc
        curve (<code>a</code>) command.
      </td>
    </tr>
  </tbody>
</table>

#### Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <!-- The influence of the arc flags on which arc is drawn -->
  <path
    fill="none"
    stroke="red"
    d="M 6,10
           A 6 4 10 1 0 14,10" />

  <path
    fill="none"
    stroke="lime"
    d="M 6,10
           A 6 4 10 1 1 14,10" />

  <path
    fill="none"
    stroke="purple"
    d="M 6,10
           A 6 4 10 0 1 14,10" />

  <path
    fill="none"
    stroke="pink"
    d="M 6,10
           A 6 4 10 0 0 14,10" />
</svg>
```

{{EmbedLiveSample('Elliptical_Arc_Curve', '100%', 200)}}

### ClosePath

_ClosePath_ instructions draw a straight line from the current position, to the first point in the path.

| Command | Parameters | Notes                                                                                                                                                                                             |
| ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Z, z    |            | Close the curent subpath by connecting the last point of the path with its initial point. If the two points doesn't have the same coordinates, a straight line is drawn between those two points. |

> **Примечание:** The appearance of a shape closed with closepath may be different to that of one closed by drawing a line to the origin, using one of the other commands, because the line ends are joined together (according to the {{SVGAttr('stroke-linejoin')}} setting), rather than just being placed at the same coordinates.

#### Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 30 11" xmlns="http://www.w3.org/2000/svg">
  <!--
  An open shape with the last point of
  the path different than the first one
  -->
  <path
    stroke="red"
    d="M 5,1
           l -4,8 8,0" />

  <!--
  An open shape with the last point of
  the path matching the first one
  -->
  <path
    stroke="red"
    d="M 15,1
           l -4,8 8,0 -4,-8" />

  <!--
  An closed shape with the last point of
  the path different than the first one
  -->
  <path
    stroke="red"
    d="M 25,1
           l -4,8 8,0
           z" />
</svg>
```

{{EmbedLiveSample('ClosePath', '100%', 200)}}

## Specification

| Specification                                                    | Status              | Comment                                                |
| ---------------------------------------------------------------- | ------------------- | ------------------------------------------------------ |
| {{SpecName("SVG2", "paths.html#DProperty", "d")}}                | {{Spec2("SVG2")}}   | Definition for `<path>`                                |
| {{SpecName("SVG1.1", "fonts.html#GlyphElementDAttribute", "d")}} | {{Spec2("SVG1.1")}} | Initial definition for `<glyph>` and `<missing-glyph>` |
| {{SpecName("SVG1.1", "paths.html#DAttribute", "d")}}             | {{Spec2("SVG1.1")}} | Initial definition for `<path>`                        |
