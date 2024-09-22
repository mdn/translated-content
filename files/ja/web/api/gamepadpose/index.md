---
title: GamepadPose
slug: Web/API/GamepadPose
l10n:
  sourceCommit: 5e98fd9cfbec6e28044a27c58bffca5ae464ec8b
---

{{securecontext_header}}{{APIRef("Gamepad API")}}{{SeeCompatTable}}

[Gamepad API](/ja/docs/Web/API/Gamepad_API) の **`GamepadPose`** インターフェイスは、指定のタイムスタンプにおける [WebVR](/ja/docs/Web/API/WebVR_API) コントローラーの姿勢を表します。これには、向き・位置・速度・加速度の情報が含まれます。

このインターフェイスは、{{domxref("Gamepad.pose")}} プロパティからアクセスできます。

## インスタンスプロパティ

- {{domxref("GamepadPose.hasOrientation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ゲームパッドが向きの情報を返すことができる (`true`) か否 (`false`) かを表す真理値を返します。
- {{domxref("GamepadPose.hasPosition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ゲームパッドが位置の情報を返すことができる (`true`) か否 (`false`) かを表す真理値を返します。
- {{domxref("GamepadPose.position")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("Gamepad")}} の位置を 3 次元ベクトルで返します。
- {{domxref("GamepadPose.linearVelocity")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("Gamepad")}} の線速度 (メートル毎秒) を返します。
- {{domxref("GamepadPose.linearAcceleration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("Gamepad")}} の線加速度 (メートル毎秒毎秒) を返します。
- {{domxref("GamepadPose.orientation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("Gamepad")}} の向きをクォータニオン値で返します。
- {{domxref("GamepadPose.angularVelocity")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("Gamepad")}} の角速度 (ラジアン毎秒) を返します。
- {{domxref("GamepadPose.angularAcceleration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("Gamepad")}} の角加速度 (メートル毎秒毎秒) を返します。

## 例

TBD

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
- [Gamepad API](/ja/docs/Web/API/Gamepad_API)
