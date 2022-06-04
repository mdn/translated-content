---
title: MediaDevices.getSupportedConstraints()
slug: Web/API/MediaDevices/getSupportedConstraints
tags:
  - API
  - メディア
  - メディアキャプチャとストリーム API
  - メディアストリーム API
  - MediaDevices
  - メソッド
  - リファレンス
  - WebRTC
  - getSupportedConstraints
browser-compat: api.MediaDevices.getSupportedConstraints
translation_of: Web/API/MediaDevices/getSupportedConstraints
---
{{APIRef("Media Capture and Streams")}}

**`getSupportedConstraints()`** は {{domxref("MediaDevices")}} インターフェイスのメソッドで、 {{domxref("MediaTrackSupportedConstraints")}} 辞書に基づくオブジェクトを返却し、そのそれぞれのメンバーフィールドは、{{Glossary("user agent", "ユーザーエージェント")}}が理解する制約可能なプロパティの 1 つを指定します。

## 構文

```js
getSupportedConstraints()
```

### 引数

なし。

### 返値

{{domxref("MediaTrackSupportedConstraints")}} 辞書に基づく新しいオブジェクトです。このオブジェクトはユーザーエージェントが扱うことができるメディア制約の一覧を含みます。この一覧に含まれているものは、ユーザーエージェントが取り扱えるものだけなので、全ての論理型のプロパティは `true` の値になっています。

## 例

この例は、実行中のブラウザーで対応している制約の一覧を出力するものです。

```html hidden
<p>あなたのブラウザーは、以下のメディア制約に対応しています。</p>

<ul id="constraintList">
</ul>
```

```css hidden
body {
  font: 15px Arial, sans-serif;
}
```

```js
let constraintList = document.getElementById("constraintList");
let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();

for (let constraint in supportedConstraints) {
  if (supportedConstraints.hasOwnProperty(constraint)) {
    let elem = document.createElement("li");

    elem.innerHTML = "<code>" + constraint + "</code>";
    constraintList.appendChild(elem);
  }
}
```

### 結果

{{ EmbedLiveSample('Examples', 600, 350) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
