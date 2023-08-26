---
title: MathML の属性値
slug: Web/MathML/Values
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/ja/docs/Web/MathML")}}
</section>

## MathML 固有の型

[CSS データ型](/ja/docs/Web/CSS/CSS_Types)に加え、一部の MathML 属性は以下の型を受け入れます。

- `<unsigned-integer>`: [`<integer>`](/ja/docs/Web/CSS/integer) で、最初の文字が U+002D HYPHEN-MINUS character (-) でも U+002B PLUS SIGN (+) でもないものです。例えば `1234` です。
- `<boolean>`: `true` または `false` の文字列で、論理値を表します。

## MathML における古い長さ

{{deprecated_header}}

[`<length-percentage>`](/ja/docs/Web/CSS/length-percentage) の代わりに、 MathML は独自の[長さを記述するための型](https://www.w3.org/TR/MathML3/chapter2.html#type.length)を定義していました。受け入れられる値には、単位のないゼロ以外の長さの値（例えば、 `500%` を意味する `5`）、ドットで終わる数字を含む値（例えば、 `34.px`）、名前付きの空間（例えば、 `thinmathspace`）が含まれていました。互換性のために、等価な [`<percentage>`](/ja/docs/Web/CSS/percentage) 値でゼロでない単位なしの長さの値を置き換えること、数字で不要なドットを削除すること、名前付きの長さには以下の置き換えを使用することが推奨されています。

```
veryverythinmathspace  => 0.05555555555555555em
verythinmathspace      => 0.1111111111111111em
thinmathspace          => 0.16666666666666666em
mediummathspace        => 0.2222222222222222em
thickmathspace         => 0.2777777777777778em
verythickmathspace     => 0.3333333333333333em
veryverythickmathspace => 0.3888888888888889em
```

### 単位

| 単位 | 説明                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------- |
| `em` | {{ Cssxref("font-size", "Font-relative") }} 単位                                                        |
| `ex` | {{ Cssxref("font-size", "Font-relative") }} 単位（その要素の "x" 高、多くのフォントでは `1ex ≈ 0.5em`） |
| `px` | ピクセル                                                                                                |
| `in` | インチ（1 インチ = 2.54 センチメートル）                                                                |
| `cm` | センチメートル                                                                                          |
| `mm` | ミリメートル                                                                                            |
| `pt` | ポイント (1 point = 1/72 inch)                                                                          |
| `pc` | パイカ (1 pica = 12 points)                                                                             |
| `%`  | 既定値のパーセント値                                                                                    |

### 定数

| 定数                             | 値        |
| -------------------------------- | --------- |
| `veryverythinmathspace`          | 1/18`em`  |
| `verythinmathspace`              | 2/18`em`  |
| `thinmathspace`                  | 3/18`em`  |
| `mediummathspace`                | 4/18`em`  |
| `thickmathspace`                 | 5/18`em`  |
| `verythickmathspace`             | 6/18`em`  |
| `veryverythickmathspace`         | 7/18`em`  |
| `negativeveryverythinmathspace`  | -1/18`em` |
| `negativeverythinmathspace`      | -2/18`em` |
| `negativethinmathspace`          | -3/18`em` |
| `negativemediummathspace`        | -4/18`em` |
| `negativethickmathspace`         | -5/18`em` |
| `negativeverythickmathspace`     | -6/18`em` |
| `negativeveryverythickmathspace` | -7/18`em` |

## ブラウザーの互換性

{{Compat}}
