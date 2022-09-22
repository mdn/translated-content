---
title: <mfenced>
slug: Web/MathML/Element/mfenced
---

{{MathMLRef}}

MathML `<mfenced>` 要素は、独自の括弧類 (角括弧など) や区切り記号 (カンマやセミコロンなど) を数式に追加する機能を提供します。

## 属性

- class, id, style
  - : [スタイルシート](/ja/docs/CSS)で使用するために用意されます。
- close
  - : 閉じ記号の文字列を与えます。既定値は ")" です。空白文字はすべて無くされます。
- href
  - : 指定された URI へのハイパーリンクを設定するために使用されます。
- mathbackground
  - : 背景色。#`#rgb`、`#rrggbb`、および[HTML の色名](/ja/docs/CSS/color_value#Color_Keywords)を使用できます。
- mathcolor
  - : テキストの色と分数数線の色。 `#rgb`、`#rrggbb`、および[HTML の色名](/ja/docs/CSS/color_value#Color_Keywords)を使用できます。
- open
  - : 開き記号の文字列を与えます。既定値は "(" です。空白文字はすべて無くされます。
- separators
  - : 区切り記号を表すゼロ個以上の文字の列を与えます。空白で区切っても構いません。空白は無視されます。既定値は "," です。複数指定することにより，各子要素間に別個の区切り記号を当てることが出来ます。余分に指定した分は無視されます。少なく指定した場合は，最後のものが繰り返されます。

## 例

### 最後の区切り記号（`,`）は繰り返される

サンプルレンダリング: ![{a;b;c,d,e}](mfenced01.png)

ブラウザーでのレンダリング: <math><mfenced close="}" open separators=";;,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```html
<math>
  <mfenced open="{" close="}" separators=";;,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

### 余分な区切り記号（`,`）は無視される

サンプルレンダリング: ![[a|b|c|d|e]](mfenced02.png)

ブラウザーでのレンダリング: <math><mfenced close="]" open separators="||||,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```html
<math>
  <mfenced open="[" close="]" separators="||||,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

## Specifications

| Specification                                                                            | Status                       | Comment               |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mfenced', 'mfenced') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mfenced', 'mfenced') }} | {{ Spec2('MathML2') }} | Initial specification |

## ブラウザー互換性

{{Compat("mathml.elements.mfenced")}}
