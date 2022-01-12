---
title: orientation
slug: Web/Manifest/orientation
tags:
  - マニフェスト
  - Orientation
  - ウェブ
browser-compat: html.manifest.orientation
translation_of: Web/Manifest/orientation
---
{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td>`String`</td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

`orientation` メンバーは、ウェブサイトの最上位の{{Glossary("Browsing context", "閲覧コンテキスト")}}すべてについて、既定の向きを定義します。

> **Note:** ユーザーエージェントの表示モードによっては、 `orientation` やその中の特定の値に対応していないことがあります。これらに対応することが、特定のコンテキストでは意味がないからです。

> **Note:** 実行時に画面の向きを変更するには、 [Screen Orientation API](/ja/docs/Web/API/Screen/orientation) を利用して実現することができます。

## 値

`orientation` は以下の値の内の一つを取ることができます。

- `any`
- `natural`
- `landscape`
- `landscape-primary`
- `landscape-secondary`
- `portrait`
- `portrait-primary`
- `portrait-secondary`

## 例

```json
"orientation": "portrait-primary"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
