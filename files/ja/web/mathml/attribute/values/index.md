---
title: Values
slug: Web/MathML/Attribute/Values
---

{{MathMLRef}}

## Lengths

いくつかの MathML プレゼンテーション要素には、サイズまたは間隔に使用される長さの値を受け入れる属性があります。 MathML は、長さを指定するための様々な単位と定数を受け入れます。

### 単位

| 単位 | 説明                                                                                                                        |
| ---- | --------------------------------------------------------------------------------------------------------------------------- |
| `em` | {{ Cssxref("font-size", "Font-relative") }} unit                                                               |
| `ex` | {{ Cssxref("font-size", "Font-relative") }} unit. (The "x"-height of the element, `1ex ≈ 0.5em` in many fonts) |
| `px` | Pixels                                                                                                                      |
| `in` | Inches (1 inch = 2.54 centimeters)                                                                                          |
| `cm` | センチメートル                                                                                                              |
| `mm` | ミリメートル                                                                                                                |
| `pt` | Points (1 point = 1/72 inch)                                                                                                |
| `pc` | Picas (1 pica = 12 points)                                                                                                  |
| `%`  | Percentage of the default value.                                                                                            |

### 定数

{{deprecated_header}}

以下の廃止された定数の代わりは次のとおりです:

```
veryverythinmathspace  => 0.05555555555555555em
verythinmathspace      => 0.1111111111111111em
thinmathspace          => 0.16666666666666666em
mediummathspace        => 0.2222222222222222em
thickmathspace         => 0.2777777777777778em
verythickmathspace     => 0.3333333333333333em
veryverythickmathspace => 0.3888888888888889em
```

<table class="standard-table">
  <thead>
    <tr>
      <th>定数</th>
      <th>値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>veryverythinmathspace</code></td>
      <td>1/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>verythinmathspace</code></td>
      <td>2/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>thinmathspace</code></td>
      <td>3/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>mediummathspace</code></td>
      <td>4/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>thickmathspace</code></td>
      <td>5/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>verythickmathspace</code></td>
      <td>6/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>veryverythickmathspace</code></td>
      <td>7/18<code>em</code></td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colspan="2">
        Negative <em>contstants</em> are introduced in Gecko 7.0
        {{ geckoRelease("7.0") }} ({{ bug(650530) }})
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>negativeveryverythinmathspace</code></td>
      <td>-1/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativeverythinmathspace</code></td>
      <td>-2/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativethinmathspace</code></td>
      <td>-3/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativemediummathspace</code></td>
      <td>-4/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativethickmathspace</code></td>
      <td>-5/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativeverythickmathspace</code></td>
      <td>-6/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativeveryverythickmathspace</code></td>
      <td>-7/18<code>em</code></td>
    </tr>
  </tbody>
</table>

Note: [Namedspace のバインディングの廃止](http://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) は MathML3 で行われ、 Gecko 15.0 {{ geckoRelease("15.0") }} で削除されました。 ([bug 673759](https://bugzilla.mozilla.org/show_bug.cgi?id=673759)).
