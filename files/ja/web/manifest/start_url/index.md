---
title: start_url
slug: Web/Manifest/start_url
tags:
  - マニフェスト
  - ウェブ
  - start_url
browser-compat: html.manifest.start_url
translation_of: Web/Manifest/start_url
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

_`start_url`_ メンバーは文字列で、_ウェブアプリケーションの開始 URL_ を表します。 — ユーザーがウェブアプリケーションを起動したとき (例えば、ユーザーが端末のアプリケーションメニューやホーム画面でウェブアプリケーションのアイコンをタップしたときなど) に読み込まれるべき推奨 URL です。

> **Note:** `start_url` メンバーは純粋に参考であり、ユーザーエージェントがこれを無視したり、インストール時やその後でユーザーに変更を許したりすることがあります。

## 例

### 絶対 URL

```json
"start_url": "https://example.com"
```

### 相対 URL

相対 URL の場合、解決のためのベース URL にはマニフェストの URL が使われます。

```json
"start_url": "../startpoint.html"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
