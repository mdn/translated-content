---
title: unicode-bidi
slug: Web/SVG/Reference/Attribute/unicode-bidi
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

**`unicode-bidi`** 属性は、{{SVGAttr("direction")}} 属性と共に、文書内の双方向テキストの扱いを指定します。例えば、テキストブロックに左書き (LTR) と右書き (RTL) の両方のテキストが含まれている場合、ユーザーエージェントは、複雑な Unicode アルゴリズムを用いてテキストの表示方法を決定します。 `unicode-bidi` 属性は、このアルゴリズムを上書きして開発者がテキストの埋め込みを制御できるようにします。 <!-- この部分の記述が原文で明らかに間違っているので、CSS プロパティの説明を一時的に流用しています。原文の更新後にその翻訳で置き換えてください。 -->

> [!NOTE]
> プレゼンテーション属性であるため、 `unicode-bidi` には対応する CSS プロパティ {{cssxref("unicode-bidi")}} もあります。両方が指定された場合、 CSS プロパティが優先されます。

## 要素

この属性は次の SVG 要素に使用することができます。

- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
- {{SVGElement("tspan")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("unicode-bidi", "", "#形式文法")}} を参照</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

値の説明は、CSS の {{cssxref("unicode-bidi")}} プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("unicode-bidi")}} プロパティ
