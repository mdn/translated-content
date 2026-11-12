---
title: fetchpriority
slug: Web/SVG/Reference/Attribute/fetchpriority
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

{{SeeCompatTable}}{{non-standard_header}}

`fetchpriority` 属性は、外部リソースを取得する際に使用する相対的な優先度について、ブラウザーにヒントを与えます。これは、HTML の {{HTMLElement("img", "", "#fetchpriority")}} 要素や {{HTMLElement("script", "", "#fetchpriority")}} 要素の `fetchpriority` 属性と同じように動作します。

この属性は、次の SVG 要素で使用できます。

- {{SVGelement("feimage")}}
- {{SVGelement("image")}}
- {{SVGelement("script")}}

## 例

次の例では、SVG の {{SVGelement("script")}} 要素の優先度を `high` に設定する方法を示します。

```html
<svg
  viewBox="0 0 10 10"
  height="120px"
  width="120px"
  xmlns="http://www.w3.org/2000/svg">
  <circle id="normal" cx="5" cy="5" r="4" />
  <script href="./color-change.js" fetchpriority="high"></script>
</svg>
```

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>high</code> | <code>low</code> | <code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>auto</code></td>
    </tr>
  </tbody>
</table>

- `high`
  - : 外部リソースを、他の外部リソースに対して高い優先度で取得します。
- `low`
  - : 外部リソースを、他の外部リソースに対して低い優先度で取得します。
- `auto`
  - : フェッチ優先度の設定を行いません。
    値が設定されていない場合、または無効な値が設定された場合に使用されます。
    これがデフォルトです。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG {{SVGelement("script")}} 要素
- HTML の [`fetchpriority`](/ja/docs/Web/HTML/Reference/Attributes/fetchpriority) 属性
