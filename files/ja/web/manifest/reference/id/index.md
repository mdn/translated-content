---
title: id
slug: Web/Manifest/Reference/id
original_slug: Web/Manifest/id
l10n:
  sourceCommit: ed5b57dbb91b53f94502aea6d37d27f276d45139
---

{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

`id` メンバーは、_ウェブアプリケーションのアイデンティティ_ すなわち、ウェブアプリケーションの一意な識別子です。ウェブアプリケーション ID が既存の ID と一致しない場合、URL が同じであっても一意なアイデンティティとして扱われます。

> **メモ:** `id` メンバーはアプリケーションを一意に識別するために使用可能です。`id` メンバーは `start_url` と同様に処理されますが、ナビゲーション対象のリソースを指すわけではないので、[スコープ](/ja/docs/Web/Manifest/scope)の範囲外でも大丈夫です。

## 例

```json
"id": "?homescreen=1"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
