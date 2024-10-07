---
title: "GamepadPose: linearVelocity プロパティ"
slug: Web/API/GamepadPose/linearVelocity
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

{{domxref("GamepadPose")}} インターフェイスの読み取り専用プロパティ **`linearVelocity`** は、{{domxref("Gamepad")}} の線速度ベクトル (メートル毎秒) を表す配列を返します。

言い換えると、センサーが `x` 軸・`y` 軸・`z` 軸方向に現在動いている速度です。

## 値

{{jsxref("Float32Array")}}、もしくはゲームパッドが線速度データを提供できないときは `null` です。

## 例

TBD

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
- [Gamepad API](/ja/docs/Web/API/Gamepad_API)
