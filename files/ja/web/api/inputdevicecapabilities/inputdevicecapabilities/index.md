---
title: "InputDeviceCapabilities: InputDeviceCapabilities() コンストラクター"
slug: Web/API/InputDeviceCapabilities/InputDeviceCapabilities
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

`InputDeviceCapabilities()` コンストラクターは新しい {{domxref("InputDeviceCapabilities")}} オブジェクトを作成し、タッチイベントを生成する物理機器に関する情報を提供します。

## 構文

```js-nolint
new InputDeviceCapabilities()
new InputDeviceCapabilities(InputDeviceCapabilitiesInit)
```

### 返値

{{domxref("InputDeviceCapabilities")}} インターフェイスのインスタンスです。

### 引数

- `InputDeviceCapabilitiesInit` {{optional_inline}}
  - : 一連の機器能力を格納する辞書オブジェクト。以下のプロパティを持ちます。
    - `fireTouchEvents`: 機器でタッチイベントが配信されるかどうかを示す論理値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
