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

<pre class="brush: json">  "orientation": "portrait-primary"</pre>

## 仕様書

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
   <th scope="col">フィードバック</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>
    {{SpecName('Manifest', '#orientation-member', 'orientation')}}
   </td>
   <td>
    {{Spec2('Manifest')}}
   </td>
   <td>
    初回定義
   </td>
   <td>
    [Web App Manifest Working Group drafts](https://github.com/w3c/manifest/issues/)
   </td>
  </tr>
 </tbody>
</table>

## ブラウザーの互換性

{{Compat("html.manifest.orientation")}}
