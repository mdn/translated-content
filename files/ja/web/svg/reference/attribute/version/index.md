---
title: version
slug: Web/SVG/Reference/Attribute/version
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

**`version`** 属性は、SVG 文書がどの仕様に準拠しているかを示すために使用されます。この属性は、ルート要素である {{SVGElement("svg")}} でのみ使用することができます。これはあくまで参考情報であり、レンダリングや処理には影響を与えません。

任意の数値を受け付けると指定されていますが、現在有効な選択肢は `1.0` と `1.1` の 2 つだけです。

この属性は、次の SVG 要素で使用できます。

- {{SVGElement("svg")}}

```html
<svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="80" height="80" />
</svg>
```

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
