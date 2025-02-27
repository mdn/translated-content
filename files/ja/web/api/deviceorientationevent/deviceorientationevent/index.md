---
title: "DeviceOrientationEvent: DeviceOrientationEvent() コンストラクター"
short-title: DeviceOrientationEvent()
slug: Web/API/DeviceOrientationEvent/DeviceOrientationEvent
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

**`DeviceOrientationEvent()`** コンストラクターは、新しい {{domxref("DeviceOrientationEvent")}} オブジェクトを作成します。

## 構文

```js-nolint
new DeviceOrientationEvent(type)
new DeviceOrientationEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字の区別があり、ブラウザーは `deviceorientation` または `deviceorientationabsolute` に設定します。
    後者の場合、 `options.absolute` は常に `true` です。
- `options` {{optional_inline}}
  - : オブジェクトで、 _{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `alpha` {{optional_inline}}
      - : Z 軸における端末の動きを表す数値で、 0 ～ 360 の範囲の度数で表します。
        既定値は `null` です。
    - `beta` {{optional_inline}}
      - : X 軸における端末の動きを表す数値で、 -180 ～ 180 の範囲の度数で表します。
        これは端末の前後方向の動きを表します。
        既定値は `null` です。
    - `gamma` {{optional_inline}}
      - : X 軸における端末の動きを表す数値で、 -90 ～ 90 の範囲の度数で表します。
        これは端末の左右方向の動きを表します。
        既定値は `null` です。
    - `absolute`
      - : 論理値で、端末yが絶対に方向データを提供しているかどうかを示します。
        既定値は `false` です。

## 返値

新しい {{domxref("DeviceOrientationEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
