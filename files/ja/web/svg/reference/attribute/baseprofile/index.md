---
title: baseProfile
slug: Web/SVG/Reference/Attribute/baseProfile
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{Deprecated_Header}}

**`baseProfile`** 属性は、コンテンツを正しくレンダリングするために必要であると作成者が考える、SVG 言語プロファイルの最低要件を記述するものです。この属性は処理上の制限を規定するものではなく、メタデータとみなすことができます。

たとえば、この属性の値は、作成ツールが、ユーザーが指定されたベースプロファイルの範囲を超えて文書を変更しようとした際に、警告を表示するために使用されることがあります。

各 SVG プロファイルでは、この属性に適したテキストを定義する必要があります。

この属性は、次の SVG 要素で使用できます。

- {{SVGElement("svg")}}

## コンテキストのメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>プロファイル名</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>なし</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 例

```svg
<svg width="120" height="120" version="1.1"
 xmlns="http://www.w3.org/2000/svg" baseProfile="full">

  ...

</svg>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
