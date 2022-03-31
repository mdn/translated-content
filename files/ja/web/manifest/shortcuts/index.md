---
title: shortcuts
slug: Web/Manifest/shortcuts
tags:
  - マニフェスト
  - ウェブ
  - shortcuts
browser-compat: html.manifest.shortcuts
translation_of: Web/Manifest/shortcuts
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

`shortcuts` メンバーは、ウェブアプリ内の主要なタスクやページへのショートカットやリンクの配列を定義します。ユーザーエージェントはこれらの値を用いて、ユーザーがウェブアプリのアイコンを操作したときにオペレーティングシステムが表示するコンテキストメニューを作成することができます。ユーザーがショートカットを呼び出すと、ユーザーエージェントはショートカットの `url` メンバーで指定されたアドレスに誘導します。

## ショートカット項目の値

ショートカットオブジェクトには、以下の値を指定することができます（`name` と `url` のみ必須）。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">メンバー</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>コンテキストメニューでユーザーに表示することができる文字列です。</td>
    </tr>
    <tr>
      <td><code>short_name</code></td>
      <td>
        ショートカットのフルネームを表示するのに十分なスペースがない場合に表示することができる文字列です。
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>
        ショートカットの目的を記述した文字列です。支援技術に公開される可能性があります。
      </td>
    </tr>
    <tr>
      <td><code>url</code></td>
      <td>
        ショートカットを有効にしたときに開く、アプリケーション内の URL です。
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        ショートカットを表すアイコンのセットです。コンテキストメニューなどで使用することができます。このアイコンを指定する場合、 96x96 ピクセルのアイコンを指定する必要があります。
      </td>
    </tr>
  </tbody>
</table>

## 例

カレンダーアプリが持つ可能性があるショートカットのリストです。

```json
"shortcuts" : [
  {
    "name": "Today's agenda",
    "url": "/today",
    "description": "List of events planned for today"
  },
  {
    "name": "New event",
    "url": "/create/event"
  },
  {
    "name": "New reminder",
    "url": "/create/reminder"
  }
]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
