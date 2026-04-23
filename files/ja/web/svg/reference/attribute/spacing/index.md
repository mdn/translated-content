---
title: spacing
slug: Web/SVG/Reference/Attribute/spacing
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`spacing`** 属性は、パスに沿って描画される文字の間隔をユーザーエージェントがどのように決定すべきかを指定します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("textPath")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>auto</code> | <code>exact</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>exact</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : この値は、ユーザーエージェントが視覚的に魅力的な結果を得るために、文字間を調整する際にパス上のテキストレイアウトアルゴリズムを使用すべきであることを示します。
- `exact`
  - : この値は、パス上のテキストのレイアウト規則で指定された間隔規則に厳密に従って、組版用文字をレンダリングすべきであることを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
