---
title: text-overflow
slug: Web/SVG/Reference/Attribute/text-overflow
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

SVG の **`text-overflow`** 属性は、テキストが行ボックスからオーバーフローした場合に、テキストコンテンツを持つブロック要素がどのように描画されるかを指定します。これは、例えば、{{SVGAttr("white-space")}} 属性や CSS の {{CSSxref("white-space")}} プロパティの値が `nowrap` に設定されている場合などに発生します。このプロパティは、事前書式化されたテキストやパス上に配置されたテキストには適用されません。

SVG では、`text-overflow` は、テキストコンテンツブロック要素の {{CSSxref("overflow")}} プロパティの計算値にかかわらず、有効に指定された折り返し領域が存在する場合に効果を発揮します。この効果は純粋に視覚的なものであり、切り取られたテキストは DOM から除去されず、省略記号が存在する場合でも、それ自体は DOM の一部にはなりません。すべての DOM メソッドにおいて、あたかも `text-overflow` が適用されていないかのように、また、折り返し領域がテキストを制約していないかのように扱われます。

> [!NOTE]
> プレゼンテーション属性であるため、 `text-overflow` には対応する CSS プロパティ {{cssxref("text-overflow")}} もあります。両方が指定された場合、 CSS プロパティが優先されます。

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>clip</code> | <code>ellipses</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>clip</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `clip`
  - : 折り返し領域であふれたテキストはクリップされます。文字が部分的にしか表示されない場合があります。これがデフォルト値です。
- `ellipsis`
  - : レンダリング対象のテキストが折り返し領域でオーバーフローした場合、テキストは切り詰められ、指定された領域内に収まるように省略記号が表示されます。

値の説明は、[CSS の `text-overflow`](/ja/docs/Web/CSS/Reference/Properties/text-overflow#値) プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{cssxref("text-overflow")}} プロパティ
