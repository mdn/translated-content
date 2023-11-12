---
title: d
slug: Web/SVG/Attribute/d
---

{{SVGRef}}

**`d`** 属性定义了一个要绘制的路径。

路径定义是一个[路径命令](#路径命令)组成的列表，其中的每一个命令由命令字母和用于表示命令参数的数字组成。命令已在[下方列出](#路径命令)。

你可以将此属性与以下 SVG 元素一起使用：[`<path>`](#path)、[`<glyph>`](#path)、[`<missing-glyph>`](#missing-glyph)。

`d` 是一个[表现属性](/zh-CN/docs/Web/SVG/Attribute/Presentation)，因此可以[用于作为 CSS 属性](#将_d_作为_css_属性)。

## 示例

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

{{EmbedLiveSample('示例', '100%', 200)}}

## path

对于 {{SVGElement('path')}}，`d` 是一个字符串，其中包含一组路径命令，用于定义要绘制的路径。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <strong><a href="/zh-CN/docs/Web/SVG/Content_type#String">&#x3C;string></a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><em>无</em></td>
    </tr>
    <tr>
      <th scope="row">动画</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## glyph

> **警告：** 自 SVG2 起，{{SVGElement('glyph')}} 已被弃用，不应该继续使用。

对于 {{SVGElement('glyph')}}，`d` 是一个字符串，其中包一组路径命令，用于定义字形（glyph）的轮廓形状。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <strong><a href="/zh-CN/docs/Web/SVG/Content_type#String">&#x3C;string></a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><em>无</em></td>
    </tr>
    <tr>
      <th scope="row">动画</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

> **备注：** 原点（坐标 `0`,`0`）通常是上下文的*左上角*。但 {{SVGElement("glyph")}} 元素的原点是其字形框的*左下角*。

## missing-glyph

> **警告：** 自 SVG2 起，{{SVGElement('missing-glyph')}} 已被弃用，不应该继续使用。

对于 {{SVGElement('missing-glyph')}}，`d` 是一个字符串，其中包一组路径命令，用于定义字形（glyph）的轮廓形状。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <strong><a href="/zh-CN/docs/Web/SVG/Content_type#String">&#x3C;string></a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><em>无</em></td>
    </tr>
    <tr>
      <th scope="row">动画</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 将 d 作为 CSS 属性

`d` 是一个[表现属性](/zh-CN/docs/Web/SVG/Attribute/Presentation)，因此也可以使用 CSS 进行修改。该属性采用 [path()](/zh-CN/docs/Web/CSS/path) 或 `none`。

下面的示例展示了如何在悬停在元素上时应用新的路径。新的路径与旧的路径现统，但额外增加了一条穿过心形图案的线。

```css
html,
body,
svg {
  height: 100%;
}

/* This path is displayed on hover*/
#svg_css_ex1:hover path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90"
  );
}
```

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z
       " />
</svg>
```

{{EmbedLiveSample('将 d 作为 CSS 属性', '100%', 200)}}

## 路径命令

路径命令是对要绘制的路径的说明。每一个命令由代表命令的字母和代表参数的数字组成。

SVG 定义了六种路径命令类型，一共 20 条命令：

- 移动到：`M`、`m`
- 画线至：`L`、`l`、`H`、`h`、`V`、`v`
- 三次方贝塞尔曲线：`C`、`c`、`S`、`s`
- 二次方贝塞尔曲线：`Q`、`q`、`T`、`t`
- 椭圆曲线：`A`、`a`
- 封闭路径：`Z`、`z`

> **备注：** 命令是*大小写敏感*的。大写的命令指定绝对坐标，而小写命令指定相对（于当前位置的）坐标。

始终可以将负值作为命令的参数：

- 负的角度是逆时针的；
- *绝对*坐标中，负的 _x_ 和 _y_ 将被解释为负坐标；
- *相对*坐标中，负的 _x_ 值为向左移动，负的 _y_ 值为向上移动。

### MoveTo 路径命令

_Moveto_ 指令可以被想象成拎起绘图笔，落脚到另一处。即，从*当前位置*（_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}），移动到*新的位置*（_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}），且新的位置与 _P<sub>o</sub>_ 之间不会绘制线段。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">命令</th>
      <th scope="col">参数</th>
      <th scope="col">备注</th>
    </tr>
    <tr>
      <th scope="row">M</th>
      <td>
        (<code><var>x</var></code
        >, <code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          将<em>当前位置</em>移动到坐标
          <code><var>x</var></code
          >,<code><var>y</var></code
          >。后续子坐标序列将被解释为隐式的绝对位置的
          LineTo（<code>L</code>）命令的参数（<em
            >见下方</em
          >）。
        </p>
        <p>
          <strong>公式：</strong> <var>P<sub>n</sub></var> = {<code
            ><var>x</var></code
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">m</th>
      <td>
        (<code><var>dx</var></code
        >, <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          将<em>当前位置</em>沿 x 轴移动
          <code><var>dx</var></code>，沿 y 轴移动
          <code><var>dy</var></code>。后续子坐标序列将被解释为隐式的相对位置的
          LineTo（<code>l</code>）命令的参数（<em
            >见下方</em
          >）。
        </p>
        <p>
          <strong>公式：</strong> <var>P<sub>n</sub></var> = {<var
            >x<sub>o</sub></var
          >
          + <code><var>dx</var></code
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
      </td>
    </tr>
  </tbody>
</table>

#### 示例

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

{{EmbedLiveSample('MoveTo 路径命令', '100%', 200)}}

- 位于绝对位置 x=50, y= 100：`<path d="M50,100..." />`
- 往右移 50，往下移 100：`<path d="m50,100..." />`

### Lineto 路径命令

_Lineto_ 指令将绘制一条直线段。这个直线段从*当前位置*（_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}）移到*指定位置*（_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}）。然后，_指定位置_（_P<sub>n</sub>_）将变成下一个命令中的*当前位置*（_P<sub>o</sub>′_）。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">命令</th>
      <th scope="col">参数</th>
      <th scope="col">备注</th>
    </tr>
    <tr>
      <th scope="row">L</th>
      <td>(<code>x</code>, <code>y</code>)+</td>
      <td>
        <p>
          在<em>当前位置</em>和<em>指定位置</em>
          <code><var>x</var></code
          >,<code><var>y</var></code
          > 之间绘制一条线段。后续子坐标序列将被解释为隐式的绝对位置的
          LineTo（<code>L</code>）命令的参数。
        </p>
        <p>
          <strong>公式：</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<code><var>x</var></code
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">l</th>
      <td>
        (<code><var>dx</var></code
        >, <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>指定位置</em>之间绘制一条线段，<em>指定位置</em>为<em>当前位置</em>沿
          x 轴偏移 <code><var>dx</var></code> 以及沿
          y 轴偏移 <code><var>dy</var></code>
          处。后续子坐标序列将被解释为隐式的相对位置的
          LineTo（<code>L</code>）命令的参数。
        </p>
        <p>
          <strong>公式：</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> +
          <code><var>dx</var></code
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">H</th>
      <td>
        <code><var>x</var></code
        >+
      </td>
      <td>
        <p>
          在<em>当前位置</em>与<em>指定位置</em>之间绘制一条水平线段。<em>指定位置</em>由
          <code><var>x</var></code> 参数和<em>当前位置</em>的
          <code>y</code> 坐标指定。后续子序列的值将被解释为隐式的绝对位置的
          LineTo（<code>H</code>）命令的参数。
        </p>
        <p>
          <strong>公式：</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<code><var>x</var></code
          >, <var>y<sub>o</sub></var
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">h</th>
      <td>
        <code><var>dx</var></code
        >+
      </td>
      <td>
        <p>
          在<em>当前位置</em>与<em>指定位置</em>之间绘制一条水平线段。<em>指定位置</em>由<em>当前位置</em>沿
          x 轴偏移 <code><var>dx</var></code>
          的 <code>x</code> 坐标和<em>当前位置</em>的
          <code>y</code> 坐标指定。后续子序列的值将被解释为隐式的相对位置的
          LineTo（<code>h</code>）命令的参数。
        </p>
        <p>
          <strong>公式：</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> +
          <code><var>dx</var></code
          >, <var>y<sub>o</sub></var
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">V</th>
      <td>
        <code><var>y</var></code
        >+
      </td>
      <td>
        <p>
          在<em>当前位置</em>与<em>指定位置</em>之间绘制一条垂直线段。<em>指定位置</em>由
          <code><var>y</var></code> 参数和<em>当前位置</em>的
          <code>x</code> 坐标指定。后续子序列的值将被解释为隐式的绝对位置的
          LineTo（<code>V</code>）命令的参数。
        </p>
        <p>
          <strong>公式：</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">v</th>
      <td>
        <code><var>dy</var></code
        >+
      </td>
      <td>
        <p>
          在<em>当前位置</em>与<em>指定位置</em>之间绘制一条垂直线段。<em>指定位置</em>由<em>当前位置</em>沿
          y 轴偏移 <code><var>dy</var></code>
          的 <code>y</code> 坐标和<em>当前位置</em>的
          <code>x</code> 坐标指定。后续子序列的值将被解释为隐式的相对位置的
          LineTo（<code>v</code>）命令的参数。
        </p>
        <p>
          <strong>公式：</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
      </td>
    </tr>
  </tbody>
</table>

#### 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- LineTo commands with absolute coordinates -->
  <path
    fill="none"
    stroke="red"
    d="M 10,10
           L 90,90
           V 10
           H 50" />

  <!-- LineTo commands with relative coordinates -->
  <path
    fill="none"
    stroke="red"
    d="M 110,10
           l 80,80
           v -80
           h -40" />
</svg>
```

{{EmbedLiveSample('Lineto 路径命令', '100%', 200)}}

## 三次贝塞尔曲线

*三次[贝塞尔曲线](/zh-CN/docs/Glossary/Bezier_curve)*是使用四个点定义的平滑曲线：

- 起始点（当前位置）
  - : (_P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_})
- 终点
  - : (_P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_})
- 起始控制点
  - : (_P<sub>cs</sub>_ = {_x<sub>cs</sub>_, _y<sub>cs</sub>_})（控制在起点附近的曲线的曲率）
- 终点控制点
  - : (_P<sub>ce</sub>_ = {_x<sub>ce</sub>_, _y<sub>ce</sub>_})（控制在终点附近的曲线的曲率）

绘制后，_终点_（_P<sub>n</sub>_）将成为下一个命令中的*当前位置*（_P<sub>o</sub>′_）。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">命令</th>
      <th scope="col">参数</th>
      <th scope="col">备注</th>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>
        (<code><var>x1</var></code
        >,<code><var>y1</var></code
        >, <code><var>x2</var></code
        >,<code><var>y2</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>
          <code><var>x</var></code
          >,<code><var>y</var></code
          > 之间绘制一条三次贝塞尔曲线。<em>起始控制点</em>通过
          <code><var>x1</var></code
          >,<code><var>y1</var></code>
          指定，而<em>终点控制点</em>通过
          <code><var>x2</var></code
          >,<code><var>y2</var></code
          > 指定。后续的三元组坐标序列将被解释为隐式的绝对位置的三次贝塞尔曲线（<code>C</code>）命令的参数。
        </p>
        <dl>
          <dt>公式：</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >} ;<br /><var>P<sub>cs</sub></var> = {<code><var>x1</var></code
            >, <code><var>y1</var></code
            >} ;<br /><var>P<sub>ce</sub></var> = {<code><var>x2</var></code
            >, <code><var>y2</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">c</th>
      <td>
        (<code><var>dx1</var></code
        >,<code><var>dy1</var></code
        >, <code><var>dx2</var></code
        >,<code><var>dy2</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>（<em>终点</em>为<em>当前位置</em>沿
          x 轴偏移 <code><var>dx</var></code>
          以及沿 y 轴偏移 <code><var>dy</var></code>
          处）之间绘制一条三次贝塞尔曲线。<em>起始控制点</em>为<em>当前位置</em>沿 x 轴偏移
          <code><var>dx1</var></code> 以及沿
          y 轴偏移 <code><var>dy1</var></code>
          处；而<em>终点控制点</em>为<em>当前位置</em>沿 x 轴偏移
          <code><var>dx2</var></code> 以及沿
          y 轴偏移 <code><var>dy2</var></code>
          处。后续的三元组坐标序列将被解释为隐式的相对位置的三次贝塞尔曲线（<code>c</code>）命令的参数。
        </p>
        <dl>
          <dt>公式：</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >} ;<br /><var>P<sub>cs</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx1</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy1</var></code
            >} ;<br /><var>P<sub>ce</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx2</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy2</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">S</th>
      <td>
        (<code><var>x2</var></code
        >,<code><var>y2</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        在<em>当前位置</em>和<em>终点</em>
        <code><var>x</var></code
        >,<code><var>y</var></code
        > 之间绘制一条平滑的三次贝塞尔曲线。<em>终点控制点</em>通过
        <code><var>x2</var></code
        >,<code><var>y2</var></code
        > 指定。<em>起始控制点</em>是上一条曲线命令的<em>终点控制点</em>在<em>当前位置</em>上的反射点；若上一条命令不是曲线命令，则其与曲线的起始点（<em>当前位置</em>）相同。后续成对的坐标序列将被解释为隐式的绝对位置的平滑三次贝塞尔曲线（<code>S</code>）命令的参数。
      </td>
    </tr>
    <tr>
      <th scope="row">s</th>
      <td>
        (<code><var>dx2</var></code
        >,<code><var>dy2</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        在<em>当前位置</em>和<em>终点</em>（<em>终点</em>为<em>当前位置</em>沿
        x 轴偏移 <code><var>dx</var></code>
        以及沿 y 轴偏移 <code><var>dy</var></code>
        处）之间绘制一条平滑的三次贝塞尔曲线。<em>终点控制点</em>为<em>当前位置</em>沿
        x 轴偏移 <code><var>dx2</var></code
        >
        以及沿 y 轴偏移 <code><var>dy2</var></code>
        处。<em>起始控制点</em>是上一条曲线命令的<em>终点控制点</em>在<em>当前位置</em>上的反射点；若上一条命令不是曲线命令，则其与曲线的起始点（<em>当前位置</em>）相同。后续成对的坐标序列将被解释为隐式的相对位置的平滑三次贝塞尔曲线（<code>s</code>）命令的参数。
      </td>
    </tr>
  </tbody>
</table>

#### 示例

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
  <!-- Cubic Bézier curve with absolute coordinates -->
  <path
    fill="none"
    stroke="red"
    d="M 10,90
           C 30,90 25,10 50,10
           S 70,90 90,90" />

  <!-- Cubic Bézier curve with relative coordinates -->
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

    <!-- Second smooth command control points (the first one is implicit) -->
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

{{EmbedLiveSample('三次贝塞尔曲线', '100%', 200)}}

### 二次贝塞尔曲线

*二次[贝塞尔曲线](/zh-CN/docs/Glossary/Bezier_curve)*是使用三个点定义的平滑曲线：

- 起始点（当前位置）
  - : _P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_}
- 终点
  - : _P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_}
- 控制点
  - : _P<sub>c</sub>_ = {_x<sub>c</sub>_, _y<sub>c</sub>_}（控制曲率）

绘制后，_终点_（_P<sub>n</sub>_）将成为下一个命令中的*当前位置*（_P<sub>o</sub>′_）。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">命令</th>
      <th scope="col">参数</th>
      <th scope="col">备注</th>
    </tr>
    <tr>
      <th scope="row">Q</th>
      <td>
        (<code><var>x1</var></code
        >,<code><var>y1</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>
          <code><var>x</var></code
          >,<code><var>y</var></code
          > 之间绘制一条二次贝塞尔曲线。<em>控制点</em>通过
          <code><var>x1</var></code
          >,<code><var>y1</var></code>
          指定。后续成对的坐标序列将被解释为隐式的绝对位置的二次贝塞尔曲线（<code>Q</code>）命令的参数。
        </p>
        <dl>
          <dt><strong>公式：</strong></dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >} ;<br /><var>P<sub>c</sub></var> = {<code><var>x1</var></code
            >, <code><var>y1</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">q</th>
      <td>
        (<code><var>dx1</var></code
        >,<code><var>dy1</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>（<em>终点</em>为<em>当前位置</em>沿
          x 轴偏移 <code><var>dx</var></code>
          以及沿 y 轴偏移 <code><var>dy</var></code>
          处）之间绘制一条二次贝塞尔曲线。<em>控制点</em>为<em>当前位置</em>（曲线的起始点）沿
          x 轴偏移 <code><var>dx1</var></code>
          以及沿 y 轴偏移 <code><var>dy1</var></code>
          处。后续成对的坐标序列将被解释为隐式的相对位置的二次贝塞尔曲线（<code>q</code>）命令的参数。
        </p>
        <dl>
          <dt>公式：</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >} ;<br /><var>P<sub>c</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx1</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy1</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">T</th>
      <td>
        (<code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>
          <code><var>x</var></code
          >,<code><var>y</var></code
          > 之间绘制一条平滑的二次贝塞尔曲线。<em>控制点</em>是上一条曲线命令的<em>控制点</em>在<em>当前位置</em>上的反射点；若上一条命令不是曲线命令，则其与曲线的起始点（<em>当前位置</em>）相同。后续的坐标序列将被解释为隐式的绝对位置的平滑二次贝塞尔曲线（<code>T</code>）命令的参数。
        </p>
        <dl>
          <dt>公式：</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">t</th>
      <td>
        (<code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>（<em>终点</em>为<em>当前位置</em>沿
          x 轴偏移 <code><var>dx</var></code>
          以及沿 y 轴偏移 <code><var>dy</var></code>
          处）之间绘制一条平滑的二次贝塞尔曲线。<em>控制点</em>是上一条曲线命令的<em>控制点</em>在<em>当前位置</em>上的反射点；若上一条命令不是曲线命令，则其与曲线的起始点（<em>当前位置</em>）相同。后续的坐标序列将被解释为隐式的相对位置的平滑二次贝塞尔曲线（<code>t</code>）命令的参数。
        </p>
        <dl>
          <dt>公式：</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

#### 示例

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
  <!-- Quadratic Bézier curve with implicit repetition -->
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

    <!-- Curve vertex points -->
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

{{EmbedLiveSample('二次贝塞尔曲线', '100%', 200)}}

### 椭圆曲线

*椭圆曲线*是定义为椭圆的一部分的曲线。有时，使用椭圆曲线绘制高度规则的曲线会比使用贝塞尔曲线更容易。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">命令</th>
      <th scope="col">参数</th>
      <th scope="col">备注</th>
    </tr>
    <tr>
      <th scope="row">A</th>
      <td>
        (<code><var>rx</var></code> <code><var>ry</var></code>
        <code><var>angle</var></code> <code><var>large-arc-flag</var></code>
        <code><var>sweep-flag</var></code> <code><var>x</var></code>
        <code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          在当前位置和坐标
          <code><var>x</var></code
          >,<code><var>y</var></code
          > 之间绘制一条椭圆曲线。用于绘制圆弧的椭圆中心根据命令的其他参数确定：
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> 和<code><var>ry</var></code> 是椭圆的两个半径；
          </li>
          <li>
            <code><var>angle</var></code> 表示椭圆相对于
            x 轴的旋转角度；
          </li>
          <li>
            <code><var>large-arc-flag</var></code> 和
            <code><var>sweep-flag</var></code> 允许选择必须绘制的弧线，因为其他参数可以绘制
            4 条可能的弧线。
            <ul>
              <li>
                <code><var>large-arc-flag</var></code>
                允许选择一个大弧线（<code>1</code>）或一个小弧线（<code>0</code>），
              </li>
              <li>
                <code><var>sweep-flag</var></code>
                允许选择一条顺时针旋转的弧线（<code>1</code>）或一条逆时针旋转的弧线（<code>0</code>）
              </li>
            </ul>
          </li>
        </ul>
        坐标 <code><var>x</var></code
        >,<code><var>y</var></code> 将成为下一个命令中的当前位置。后续参数集合的序列将被解释为隐式的绝对位置的椭圆曲线（<code>A</code>）命令的参数。
      </td>
    </tr>
    <tr>
      <th scope="row">a</th>
      <td>
        (<code><var>rx</var></code> <code><var>ry</var></code>
        <code><var>angle</var></code> <code><var>large-arc-flag</var></code>
        <code><var>sweep-flag</var></code> <code><var>dx</var></code>
        <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          在当前位置和指定位置之间绘制一条椭圆曲线。指定位置为当前位置沿
          x 轴偏移 <code><var>dx</var></code>
          以及沿 y 轴偏移 <code><var>dy</var></code>
          处。用于绘制圆弧的椭圆中心根据命令的其他参数确定：
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> 和 <code><var>ry</var></code> 是椭圆的两个半径；
          </li>
          <li>
            <code><var>angle</var></code> 表示椭圆相对于
            x 轴的旋转角度；
          </li>
          <li>
            <code><var>large-arc-flag</var></code> 和
            <code><var>sweep-flag</var></code> 允许选择必须绘制的弧线，因为其他参数可以绘制
            4 条可能的弧线。
            <ul>
              <li>
                <code><var>large-arc-flag</var></code>
                允许选择一个大弧线（<code>1</code>）或一个小弧线（<code>0</code>），
              </li>
              <li>
                <code><var>sweep-flag</var></code>
                允许选择一条顺时针旋转的弧线（<code>1</code>）或一条逆时针旋转的弧线（<code>0</code>）
              </li>
            </ul>
          </li>
        </ul>
        当前位置沿 x 轴偏移 <code><var>dx</var></code>
        以及沿 y 轴偏移后的位置将成为下一个命令中的当前位置。后续参数集合的序列将被解释为隐式的相对位置的椭圆曲线（<code>a</code>）命令的参数。
      </td>
    </tr>
  </tbody>
</table>

#### 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <!-- The influence of the arc flags with which the arc is drawn -->
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

{{EmbedLiveSample('椭圆曲线', '100%', 200)}}

## ClosePath

_ClosePath_ 命令将从*当前位置*绘制一条直线到路径中的第一个点。

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">命令</th>
      <th scope="col">参数</th>
      <th scope="col">备注</th>
    </tr>
    <tr>
      <th scope="row">Z, z</th>
      <td></td>
      <td>
        通过连接路径的最后一个点与路径的起始点来闭合当前的子路径。如果这两个点的坐标不同，则在两者之间绘制一条直线。
      </td>
    </tr>
  </tbody>
</table>

> **备注：** 使用 _ClosePath_ 命令闭合的形状的外观可能与使用其他命令向起始点绘制一条线而闭合的形状不同，因为前者是将线条的末端连接在一起（根据 {{SVGAttr('stroke-linejoin')}} 的设置），而不是仅仅绘制到坐标点上。

#### 示例

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
  the path different to the first one
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
  A closed shape with the last point of
  the path different to the first one
  -->
  <path
    stroke="red"
    d="M 25,1
           l -4,8 8,0
           z" />
</svg>
```

{{EmbedLiveSample('ClosePath', '100%', 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
