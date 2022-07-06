---
title: 'HTML 属性: capture'
slug: Web/HTML/Attributes/capture
tags:
  - API
  - 属性
  - Attributes
  - Capture
  - 制約検証
  - HTML
spec-urls: https://w3c.github.io/html-media-capture/#the-capture-attribute
translation_of: Web/HTML/Attributes/capture
---

{{HTMLSidebar}}

**`capture`** 属性は、オプションとして、新しいファイルをキャプチャすることと、 [`accept`](accept) 属性で定義された種類の新しいメディアをどの機器でキャプチャするかを指定します。

値としては、 `user` と `environment` があります。 capture 属性は {{HTMLElement("input/file", "file")}} 入力型が対応しています。

`capture` 属性は、 [accept](accept) 属性が画像や動画データの入力に使用するカメラの種類を指定する文字列を値とするものです。

| 値         | 説明                                                |
| ------------- | ---------------------------------------------------------- |
| `user`        | ユーザー側のカメラやマイクを使用します。   |
| `environment` | 外向きのカメラやマイクを使用します。 |

> **Note:** capture は、以前は論理属性で、存在する場合、ファイル入力を要求する代わりに、カメラやマイクなどの機器のメディアキャプチャ機器を使用するように要求していました。

## 例

ファイル入力型に設定すると、マイクやカメラを搭載した OS では、既存のファイルから選択したり、新規にファイルを作成したりできるユーザーインターフェースが表示されます。

```html
<p>
  <label for="soundFile">What does your voice sound like?:</label>
  <input type="file" id="soundFile" capture="user" accept="audio/*">
  </p>
  <p>
  <label for="videoFile">Upload a video:</label>
  <input type="file" id="videoFile" capture="environment" accept="video/*">
  </p>
  <p>
  <label for="imageFile">Upload a photo of yourself:</label>
  <input type="file" id="imageFile" capture="user" accept="image/*">
  </p>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

なお、これらはモバイル端末でより効果的に機能します。お使いの端末がデスクトップコンピュータの場合、一般的なファイルピッカーが表示されるでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.attribute.capture")}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File/Using_files_from_web_applications)
- [ファイル API](/ja/docs/Web/API/File)
- {{domxref('HTMLInputElement.files')}}
