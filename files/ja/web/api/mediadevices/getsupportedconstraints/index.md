---
title: "MediaDevices: getSupportedConstraints() メソッド"
short-title: getSupportedConstraints()
slug: Web/API/MediaDevices/getSupportedConstraints
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

**`getSupportedConstraints()`** は {{domxref("MediaDevices")}} インターフェイスのメソッドで、 {{domxref("MediaTrackSupportedConstraints")}} 辞書に基づくオブジェクトを返却し、そのそれぞれのメンバーフィールドは、{{Glossary("user agent", "ユーザーエージェント")}}が理解する制約可能なプロパティの 1 つを指定します。

## 構文

```js-nolint
getSupportedConstraints()
```

### 引数

なし。

### 返値

{{domxref("MediaTrackSupportedConstraints")}} 辞書に基づく新しいオブジェクトです。このオブジェクトはユーザーエージェントが扱うことができるメディア制約の一覧を含みます。
この一覧に含まれているものは、ユーザーエージェントが取り扱えるものだけなので、全ての論理型のプロパティは `true` の値になっています。

## 例

この例は、実行中のブラウザーで対応している制約の一覧を出力するものです。

```html hidden
<p>このブラウザーは、以下のメディア制約に対応しています。</p>

<ul id="constraintList"></ul>
```

```css hidden
body {
  font:
    15px Arial,
    sans-serif;
}
```

```js
const constraintList = document.querySelector("#constraintList");
const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();

for (const constraint of Object.keys(supportedConstraints)) {
  const elem = document.createElement("li");
  elem.appendChild(document.createElement("code")).textContent = constraint;
  constraintList.appendChild(elem);
}
```

### 結果

{{ EmbedLiveSample('Examples', 600, 350) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
