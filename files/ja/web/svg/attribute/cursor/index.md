---
title: cursor
slug: Web/SVG/Attribute/cursor
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{SVGRef}}

[SVG 属性リファレンスホーム](/ja/docs/Web/SVG/Attribute)

`cursor` 属性は、マウスポインタが要素の上にあるときに表示されるマウスカーソルを指定します。

この属性は CSS の {{cssxref("cursor")}} プロパティと全く同じ動作をしますが、 {{ SVGElement("cursor") }} 要素に対応しているブラウザーであれば [\<FuncIRI>](/ja/docs/Web/SVG/Content_type#funciri) 記法を使用して使用することができます。

プレゼンテーション属性として、 CSS スタイルシート内で直接プロパティとして使用することもできます。詳しくは CSS の {{cssxref("cursor")}} を参照してください。

## 使用コンテキスト

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">カテゴリー</th>
      <td>プレゼンテーション属性</td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td>
        [[<a href="/ja/docs/Web/SVG/Content_type#funciri">&#x3C;FuncIRI></a
        >,]* [ <strong>auto</strong> | crosshair | default | pointer | move |
        e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize |
        s-resize | w-resize| text | wait | help ]] | inherit
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">標準化文書</th>
      <td>
        <a href="https://www.w3.org/TR/SVG11/interact.html#CursorProperty"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## 要素

以下の要素で `cursor` 属性を使用することができます。

- [コンテナー要素](/ja/docs/Web/SVG/Element#コンテナー要素)
- [グラフィック要素](/ja/docs/Web/SVG/Element#グラフィック要素)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("cursor")}}
