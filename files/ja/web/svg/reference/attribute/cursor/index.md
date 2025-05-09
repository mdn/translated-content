---
title: cursor
slug: Web/SVG/Reference/Attribute/cursor
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

`cursor` 属性は、マウスポインタが要素の上にあるときに表示されるマウスカーソルを指定します。

> [!NOTE]
> プレゼンテーション属性であるため、 `cursor` には対応する CSS プロパティ {{cssxref("cursor")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は CSS の {{cssxref("cursor")}} プロパティと全く同じ動作をしますが、 {{ SVGElement("cursor") }} 要素に対応しているブラウザーであれば [\<FuncIRI>](/ja/docs/Web/SVG/Guides/Content_type#funciri) 記法を使用して使用することができます。

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
        [[<a href="/ja/docs/Web/SVG/Guides/Content_type#funciri">&#x3C;FuncIRI></a
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
      <th scope="row">正規ドキュメント</th>
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

- [コンテナー要素](/ja/docs/Web/SVG/Reference/Element#コンテナー要素)
- [グラフィック要素](/ja/docs/Web/SVG/Reference/Element#グラフィック要素)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("cursor")}} プロパティ
