---
title: d
slug: Web/SVG/Attribute/d
translation_of: Web/SVG/Attribute/d
---
{{SVGRef}}

**`d`** 속성은 그릴 패스를 정의합니다.

A path definition is a list of [path commands](#Path_commands) where each command is composed of a command letter and numbers that represent the command parameters. The commands are detailed below.

Three elements have this attribute: {{SVGElement("path")}}, {{SVGElement("glyph")}}, and {{SVGElement("missing-glyph")}}

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red"
    d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z" />
</svg>
```

{{EmbedLiveSample('Example', '100%', 200)}}

## path

For {{SVGElement('path')}}, `d` is a string containing a series of path commands that define the path to be drawn.

| Value         | **[\<string>](/docs/Web/SVG/Content_type#String)** |
| ------------- | ------------------------------------------------- |
| Default value | _none_                                            |
| Animatable    | Yes                                               |

## glyph

> **경고:** As of SVG2 {{SVGElement('glyph')}} is deprecated and shouldn't be used.

For {{SVGElement('glyph')}}, `d` is a string containing a series of path commands that define the outline shape of the glyph.

| Value         | **[\<string>](/docs/Web/SVG/Content_type#String)** |
| ------------- | ------------------------------------------------- |
| Default value | _none_                                            |
| Animatable    | Yes                                               |

> **참고:** The point of origin (the coordinate `0`,`0`) is usually the _upper left corner_ of the context. However the {{SVGElement("glyph")}} element has its origin in the _bottom left corner_ of its letterbox.

## missing-glyph

> **경고:** As of SVG2 {{SVGElement('missing-glyph')}} is deprecated and shouldn't be used.

For {{SVGElement('missing-glyph')}}, `d` is a string containing a series of path commands that define the outline shape of the glyph.

| Value         | **[\<string>](/docs/Web/SVG/Content_type#String)** |
| ------------- | ------------------------------------------------- |
| Default value | _none_                                            |
| Animatable    | Yes                                               |

## Path commands

Path commands are instructions that define a path to be drawn. Each command is composed of a command letter and numbers that represent the command parameters.

SVG defines 6 types of path commands, for a total of 20 commands:

- MoveTo: `M`, `m`
- LineTo: `L`, `l`, `H`, `h`, `V`, `v`
- Cubic Bézier Curve: `C`, `c`, `S`, `s`
- Quadratic Bézier Curve: `Q`, `q`, `T`, `t`
- Elliptical Arc Curve: `A`, `a`
- ClosePath: `Z`, `z`

> **참고:** Commands are case-sensitive; an upper-case command specifies its arguments as absolute positions, while a lower-case command specifies points relative to the current position.

It is always possible to specify a negative value as an argument to a command: negative angles will be anti-clockwise; absolute x and y positions will be taken as negative coordinates; negative relative x values will move to the left; and negative relative y values will move upwards.

### MoveTo path commands

_MoveTo_ instructions can be thought of as picking up the drawing instrument, and setting it down somewhere else, i.e. moving the _current point_ (Po; {xo, yo}). There is no line drawn between Po and the new _current point_ (Pn; {xn, yn}).

| Command | Parameters    | Notes                                                                                                                                                                                                                                                                                               |
| ------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| M       | (`x`, `y`)+   | Move the _current point_ to the coordinate `x`,`y`. Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit absolute LineTo (`L`) command(s) (_see below_). Formula: Pn = {`x`, `y`}                                                                                         |
| m       | (`dx`, `dy`)+ | Move the _current point_ by shifting the last known position of the path by `dx` along the x-axis and by `dy` along the y-axis. Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit relative LineTo (`l`) command(s) (_see below_). Formula: Pn = {xo + `dx`, yo + `dy`} |

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red"
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

{{EmbedLiveSample('MoveTo_path_commands', '100%', 200)}}

### LineTo path commands

_LineTo_ instructions draw a straight line from the _current point_ (Po; {xo, yo}) to the _end point_ (Pn; {xn, yn}), based on the parameters specified. The _end point_ (Pn) then becomes the _current point_ for the next command (Po').

| Command | Parameters    | Notes                                                                                                                                                                                                                                                                                                                                        |
| ------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L       | (`x`, `y`)+   | Draw a line from the _current point_ to the _end point_ specified by `x`,`y`. Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit absolute LineTo (`L`) command(s). Formula: Po' = Pn = {`x`, `y`}                                                                                                                |
| l       | (`dx`, `dy`)+ | Draw a line from the _current point_ to the _end point,_ which is the _current point_ shifted by `dx` along the x-axis and `dy` along the y-axis. Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit relative LineTo (`l`) command(s) (_see below_). Formula: Po' = Pn = {xo + `dx`, yo + `dy`}                  |
| H       | `x`+          | Draw a horizontal line from the _current point_ to the _end point_, which is specified by the `x` parameter and the _current point's_ y coordinate. Any subsequent value(s) are interpreted as parameter(s) for implicit absolute horizontal LineTo (`H`) command(s). Formula: Po' = Pn = {`x`, yo}                                          |
| h       | `dx`+         | Draw a horizontal line from the _current point_ to the _end point,_ which is specified by the _current point_ shifted by `dx` along the x-axis and the _current point's_ y coordinate. Any subsequent value(s) are interpreted as parameter(s) for implicit relative horizontal LineTo (`h`) command(s). Formula: Po' = Pn = {xo + `dx`, yo} |
| V       | `y`+          | Draw a vertical line from the _current point_ to the _end point_, which is specified by the `y` parameter and the _current point's_ x coordinate. Any subsequent values are interpreted as parameters for implicit absolute vertical LineTo (`V`) command(s). Formula: Po' = Pn = {xo, `y`}                                                  |
| v       | `dy`+         | Draw a vertical line from the _current point_ to the _end point,_ which is specified by the _current point_ shifted by `dy` along the y-axis and the _current point's_ x coordinate. Any subsequent value(s) are interpreted as parameter(s) for implicit relative vertical LineTo (`v`) command(s). Formula: Po' = Pn = {xo, yo + `dy`}     |

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- LineTo commands with absolute coordinates -->
  <path fill="none" stroke="red"
        d="M 10,10
           L 90,90
           V 10
           H 50" />

  <!-- LineTo commands with relative coordinates -->
  <path fill="none" stroke="red"
        d="M 110,10
           l 80,80
           v -80
           h -40" />
</svg>
```

{{EmbedLiveSample('LineTo_path_commands', '100%', 200)}}

### Cubic Bézier Curve

_Cubic [Bézier curves](https://en.wikipedia.org/wiki/Bézier_curve)_ are smooth curve definitions using four points:

- _starting point (current point)_ (Po = {xo, yo})
- _end point_ (Pn = {xn, yn})
- _start control point_ (Pcs = {xcs, ycs}) (controls curvature near the start of the curve)
- _end control point_ (Pce = {xce, yce}) (controls curvature near the end of the curve).

After drawing, the _end point_ (Pn) becomes the _current point_ for the next command (Po').

| Command | Parameters                             | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C       | (`x1`,`y1`, `x2`,`y2`, `x`,`y`)+       | Draw a cubic Bézier curve from the _current point_ to the _end point_ specified by `x`,`y`. The _start control point_ is specified by `x1`,`y1` and the _end control point_ is specified by `x2`,`y2`_._ Any subsequent triplet(s) of coordinate pairs are interpreted as parameter(s) for implicit absolute cubic Bézier curve (`C`) command(s). Formulae: Po' = Pn = {`x`, `y`} ; Pcs = {`x1`, `y1`} ; Pce = {`x2`, `y2`}                                                                                                                                                                                                                                                                                    |
| c       | (`dx1`,`dy1`, `dx2`,`dy2`, `dx`,`dy`)+ | Draw a cubic Bézier curve from the _current point_ to the _end point,_ which is the _current point_ shifted by `dx` along the x-axis and `dy` along the y-axis. The _start control point_ is the _current point_ (starting point of the curve) shifted by `dx1` along the x-axis and `dy1` along the y-axis. The _end control point_ is the _current point_ (starting point of the curve) shifted by `dx2` along the x-axis and `dy2` along the y-axis. Any subsequent triplet(s) of coordinate pairs are interpreted as parameter(s) for implicit relative cubic Bézier curve (`c`) command(s). Formulae: Po' = Pn = {xo + `dx`, yo + `dy`} ; Pcs = {xo + `dx1`, yo + `dy1`} ; Pce = {xo + `dx2`, yo + `dy2`} |
| S       | (`x2`,`y2`, `x`,`y`)+                  | Draw a smooth cubic Bézier curve from the _current point_ to the _end point_ specified by `x`,`y`. The _end control point_ is specified by `x2`,`y2`. The _start control point_ is a reflection of the _end control point_ of the previous curve command. If the previous command wasn't a curve, the _start control point_ is the same as the curve starting point (_current point_). Any subsequent pair(s) of coordinate pairs are interpreted as parameter(s) for implicit absolute smooth cubic Bézier curve (`S`) commands.                                                                                                                                                                              |
| s       | (`dx2`,`dy2`, `dx`,`dy`)+              | Draw a smooth cubic Bézier curve from the _current point_ to the _end point_, which is the _current point_ shifted by `dx` along the x-axis and `dy` along the y-axis. The _end control point_ is the _current point_ (starting point of the curve) shifted by `dx2` along the x-axis and `dy2` along the y-axis. The _start control point_ is a reflection of the _end control point_ of the previous curve command. If the previous command wasn't a curve, the _start control point_ is the same as the curve starting point (_current point_). Any subsequent pair(s) of coordinate pairs are interpreted as parameter(s) for implicit relative smooth cubic Bézier curve (`s`) commands.                  |

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

  <!-- Cubic Bézier curve with absolute coordinates -->
  <path fill="none" stroke="red"
        d="M 10,90
           C 30,90 25,10 50,10
           S 70,90 90,90" />

  <!-- Cubic Bézier curve with relative coordinates -->
  <path fill="none" stroke="red"
        d="M 110,90
           c 20,0 15,-80 40,-80
           s 20,80 40,80" />

  <!-- Highlight the curve vertex and control points -->
  <g id="ControlPoints">

    <!-- First cubic command control points -->
    <line x1="10" y1="90" x2="30" y2="90" stroke="lightgrey" />
    <circle cx="30" cy="90" r="1.5"/>

    <line x1="50" y1="10" x2="25" y2="10" stroke="lightgrey" />
    <circle cx="25" cy="10" r="1.5"/>

    <!-- Second smooth command control points (the first one is implicit) -->
    <line x1="50" y1="10" x2="75" y2="10" stroke="lightgrey" stroke-dasharray="2" />
    <circle cx="75" cy="10" r="1.5" fill="lightgrey"/>

    <line x1="90" y1="90" x2="70" y2="90" stroke="lightgrey" />
    <circle cx="70" cy="90" r="1.5" />

    <!-- curve vertex points -->
    <circle cx="10" cy="90" r="1.5"/>
    <circle cx="50" cy="10" r="1.5"/>
    <circle cx="90" cy="90" r="1.5"/>
  </g>
  <use xlink:href="#ControlPoints" x="100" />
</svg>
```

{{EmbedLiveSample('Cubic_Bézier_Curve', '100%', 200)}}

### Quadratic Bézier Curve

_Quadratic [Bézier curves](https://en.wikipedia.org/wiki/Bézier_curve)_ are smooth curve definitions using three points:

- _starting point (current point)_ (Po = {xo, yo})
- _end point_ (Pn = {xn, yn})
- _control point_ (Pc = {xc, yc}) (controls curvature)

After drawing, the _end point_ (Pn) becomes the _current point_ for the next command (Po').

| Command | Parameters                | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Q       | (`x1`,`y1`, `x`,`y`)+     | Draw a quadratic Bézier curve from the _current point_ to the _end point_ specified by `x`,`y`. The _control point_ is specified by `x1`,`y1`. Any subsequent pair(s) of coordinate pairs are interpreted as parameter(s) for implicit absolute quadratic Bézier curve (`Q`) command(s). Formulae: Po' = Pn = {`x`, `y`} ; Pc = {`x1`, `y1`}                                                                                                                                                                                                                                    |
| q       | (`dx1`,`dy1`, `dx`,`dy`)+ | Draw a quadratic Bézier curve from the _current point_ to the _end point_, which is the _current point_ shifted by `dx` along the x-axis and `dy` along the y-axis. The _control point_ is the _current point_ (starting point of the curve) shifted by `dx1` along the x-axis and `dy1` along the y-axis. Any subsequent pair(s) of coordinate pairs are interpreted as parameter(s) for implicit relative quadratic Bézier curve (`q`) command(s). Formulae: Po' = Pn = {xo + `dx`, yo + `dy`} ; Pc = {xo + `dx1`, yo + `dy1`}                                                |
| T       | (`x`,`y`)+                | Draw a smooth quadratic Bézier curve from the _current point_ to the _end point_ specified by `x`,`y`. The _control point_ is a reflection of the _control point_ of the previous curve command. If the previous command wasn't a curve, the _control point_ is the same as the curve starting point (_current point_). Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit absolute smooth quadratic Bézier curve (`T`) command(s). Formula: Po' = Pn = {`x`, `y`}                                                                                  |
| t       | (`dx`,`dy`)+              | Draw a smooth quadratic Bézier curve from the _current point_ to the _end point_, which is the _current point_ shifted by `dx` along the x-axis and `dy` along the y-axis. The _control point_ is a reflection of the _control point_ of the previous curve command. If the previous command wasn't a curve, the _control point_ is the same as the curve starting point (_current point_). Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit relative smooth quadratic Bézier curve (`t`) command(s). Formulae: Po' = Pn = {xo + `dx`, yo + `dy`} |

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

  <!-- Quadratic Bézier curve with implicite repetition -->
  <path fill="none" stroke="red"
        d="M 10,50
           Q 25,25 40,50
           t 30,0 30,0 30,0 30,0 30,0" />

  <!-- Highlight the curve vertex and control points -->
  <g>
    <polyline points="10,50 25,25 40,50" stroke="rgba(0,0,0,.2)" fill="none" />
    <circle cx="25" cy="25" r="1.5" />

    <!-- curve vertex points -->
    <circle cx="10" cy="50" r="1.5"/>
    <circle cx="40" cy="50" r="1.5"/>

    <g id="SmoothQuadraticDown">
      <polyline points="40,50 55,75 70,50" stroke="rgba(0,0,0,.2)" stroke-dasharray="2" fill="none" />
      <circle cx="55" cy="75" r="1.5" fill="lightgrey" />
      <circle cx="70" cy="50" r="1.5" />
    </g>

    <g id="SmoothQuadraticUp">
      <polyline points="70,50 85,25 100,50" stroke="rgba(0,0,0,.2)" stroke-dasharray="2" fill="none" />
      <circle cx="85" cy="25" r="1.5" fill="lightgrey" />
      <circle cx="100" cy="50" r="1.5" />
    </g>

    <use xlink:href="#SmoothQuadraticDown" x="60" />
    <use xlink:href="#SmoothQuadraticUp"   x="60" />
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
            <code>angle</code> represents a rotation (in degree) of the ellipse
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
        point for the next command. All subsequent sets of parameters are
        considered implicit absolute arc curve (<code>A</code>) commands.
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
            <code>angle</code> represents a rotation (in degree) of the ellipse
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
        <code>dx</code> and <code>dy</code> for the next command. All subsequent
        sets of parameters are considered implicit relative arc curve
        (<code>a</code>) commands.
      </td>
    </tr>
  </tbody>
</table>

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

  <!-- The influence of the arc flags on which arc is drawn -->
  <path fill="none" stroke="red"
        d="M 6,10
           A 6 4 10 1 0 14,10" />

  <path fill="none" stroke="lime"
        d="M 6,10
           A 6 4 10 1 1 14,10" />

  <path fill="none" stroke="purple"
        d="M 6,10
           A 6 4 10 0 1 14,10" />

  <path fill="none" stroke="pink"
        d="M 6,10
           A 6 4 10 0 0 14,10" />
</svg>
```

{{EmbedLiveSample('Elliptical_Arc_Curve', '100%', 200)}}

### ClosePath

_ClosePath_ instructions draw a straight line from the current position, to the first point in the path.

| Command | Parameters | Notes                                                                                                                                                                                              |
| ------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Z, z    |            | Close the current subpath by connecting the last point of the path with its initial point. If the two points doesn't have the same coordinates, a straight line is drawn between those two points. |

> **참고:** The appearance of a shape closed with closepath may be different to that of one closed by drawing a line to the origin, using one of the other commands, because the line ends are joined together (according to the {{SVGAttr('stroke-linejoin')}} setting), rather than just being placed at the same coordinates.

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 -1 30 11" xmlns="http://www.w3.org/2000/svg">

  <!--
  An open shape with the last point of
  the path different than the first one
  -->
  <path stroke="red"
        d="M 5,1
           l -4,8 8,0" />

  <!--
  An open shape with the last point of
  the path matching the first one
  -->
  <path stroke="red"
        d="M 15,1
           l -4,8 8,0 -4,-8" />

  <!--
  An closed shape with the last point of
  the path different than the first one
  -->
  <path stroke="red"
        d="M 25,1
           l -4,8 8,0
           z" />
</svg>
```

{{EmbedLiveSample('ClosePath', '100%', 200)}}

## Specification

| Specification                                                                        | Status                   | Comment                                                |
| ------------------------------------------------------------------------------------ | ------------------------ | ------------------------------------------------------ |
| {{SpecName("SVG2", "paths.html#DProperty", "d")}}                     | {{Spec2("SVG2")}} | Definition for `<path>`                                |
| {{SpecName("SVG1.1", "fonts.html#GlyphElementDAttribute", "d")}} | {{Spec2("SVG1.1")}} | Initial definition for `<glyph>` and `<missing-glyph>` |
| {{SpecName("SVG1.1", "paths.html#DAttribute", "d")}}                 | {{Spec2("SVG1.1")}} | Initial definition for `<path>`                        |
