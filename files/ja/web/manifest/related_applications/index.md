---
title: related_applications
slug: Web/Manifest/related_applications
---

{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td>配列 (<code>Array</code>)</td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

`related_applications` フィールドはオブジェクトの配列で、基礎となるプラットフォームにインストール可能、またはアクセス可能なネイティブアプリケーション — たとえば、 Google Play ストアで入手可能なネイティブの Android アプリケーションなどを指定します。このようなアプリケーションは、ネイティブアプリの同等品のように、同様または同等の機能を提供するマニフェストのウェブサイトの代替品となることを意図しています。

> **メモ:** 開発者は `prefer_related_applications` に `true` を設定することで、ネイティブアプリケーションがウェブアプリケーションよりも推奨されることを示すことができます。

## 例

```json
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }, {
    "platform": "itunes",
    "url": "https://itunes.apple.com/app/example-app1/id123456789"
  }
]
```

## 関連アプリケーションの値

アプリケーションオブジェクトには、次の値を入れることができます。

| メンバー   | 説明                                                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `platform` | アプリケーションを見つけることができるプラットフォームです。[利用できる値の一覧](https://github.com/w3c/manifest/wiki/Platforms) |
| `url`      | アプリケーションを見つけることができる URL です。                                                                                |
| `id`       | 指定されたプラットフォームでアプリケーションを表す ID です。                                                                     |

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
