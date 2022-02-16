---
title: display
slug: Web/Manifest/display
tags:
  - マニフェスト
  - ウェブ
  - display
browser-compat: html.manifest.display
translation_of: Web/Manifest/display
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

`display` メンバーは、開発者が推奨するウェブサイトの表示モードを判別する文字列です。この表示モードは、ブラウザーの UI をどれだけユーザーに見せるかを変更するものであり、 `browser` (ブラウザーのウィンドウが完全に見える) から `fullscreen` (アプリが全画面になる) までの範囲を取ります。

> **Note:** ブラウザーは指定されたモードに対応していなかった場合は、定義済みの代替チェーンに従います。これは `fullscreen` → `standalone` → `minimal-ui` → `browser` であり、 `browser` が `display` メンバーが指定されていなかった場合の既定値です。

> **Note:** 表示モードに応じて選択的に CSS を提供するには、 {{cssxref("@media/display-mode", "display-mode")}} メディア特性を使用することができます。これにより、サイトを URL から起動した場合とデスクトップアイコンから起動した場合とでユーザーの操作に一貫性を持たせることができます。

## 値

以下の値を利用することができます。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">表示モード</th>
      <th scope="col">説明</th>
      <th scope="col">代替表示モード</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>fullscreen</code></td>
      <td>
        利用可能な画面の領域をすべて使用し、ユーザーエージェントの{{Glossary("chrome", "クローム")}}は表示されなくなります。
      </td>
      <td><code>standalone</code></td>
    </tr>
    <tr>
      <td><code>standalone</code></td>
      <td>
        アプリケーションの外見は、単独のアプリケーションのようになります。これは、アプリケーションに別のウィンドウを持たせたり、アプリケーションランチャーに独自のアイコンを追加したりすることができるようになります。このモードでは、ユーザーエージェントはナビゲーションを制御するための UI 要素を除外しますが、ステータスバーなどの他の UI 要素を含めることはできます。
      </td>
      <td><code>minimal-ui</code></td>
    </tr>
    <tr>
      <td><code>minimal-ui</code></td>
      <td>
        アプリケーションの外見は、単独のアプリケーションのようになりますが、ナビゲーションを制御するために最小限の UI 要素が表示されます。要素はブラウザーによって異なります。
      </td>
      <td><code>browser</code></td>
    </tr>
    <tr>
      <td><code>browser</code></td>
      <td>
        アプリケーションはブラウザーやプラットフォームに応じた一般的なブラウザータブや新しいウインドウで表示されます。これが既定値です。
      </td>
      <td>(なし)</td>
    </tr>
  </tbody>
</table>

## 例

```json
"display": "standalone"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
