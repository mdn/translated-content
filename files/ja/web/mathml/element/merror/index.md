---
title: <merror>
slug: Web/MathML/Element/merror
---

{{MathMLRef}}

MathML `<merror>` 要素は、エラーメッセージとしてコンテンツを表示するために使用されます。Firefox でこのエラーメッセージは、典型的な XML エラーメッセージのようにレンダリングされます。MathML マークアップが間違っているか整形式でない XML のときに、このエラーがスロー**されない**ことに注意してください。`<merror>` とは何の関係もない、（MathML の XHTML 表記の場合に）依然として XML 解析エラーが発生します。

## 属性

- class, id, style
  - : [スタイルシート](/ja/docs/CSS)と一緒に用いて提供されます。
- href
  - : 指定された URI へのハイパーリンクの設定に使用されます。
- mathbackground
  - : 背景色。`#rgb`、`#rrggbb`および[HTML 色名](/ja/docs/CSS/color_value#Color_Keywords)を使用できます。
- mathcolor
  - : 文字色と分数の線の色。`#rgb`、`#rrggbb`および[HTML 色名](/ja/docs/CSS/color_value#Color_Keywords)を使用できます。

## 例

```html
<math>
  <merror>
    <mrow>
      <mtext> Division by zero: </mtext>
      <mfrac>
        <mn> 1 </mn>
        <mn> 0 </mn>
      </mfrac>
    </mrow>
  </merror>
</math>
```

## 仕様

{{Specifications}}

## ブラウザー互換性

{{Compat("mathml.elements.merror")}}
