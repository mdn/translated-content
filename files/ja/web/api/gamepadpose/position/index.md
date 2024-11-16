---
title: "GamepadPose: position プロパティ"
slug: Web/API/GamepadPose/position
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

{{domxref("GamepadPose")}} インターフェイスの読み取り専用プロパティ **`position`** は、{{domxref("Gamepad")}} の位置を 3 次元ベクトルで返します。

座標系は以下の通りです。

- X の正の方向はユーザーの右方向です。
- Y の正の方向は上です。
- Z の正の方向はユーザーの後ろです。

位置は原点 (センサーから値が最初に取得された時の位置) からのメートル単位で計測されます。

## 値

{{jsxref("Float32Array")}}、もしくはゲームパッドが位置データを提供できないときは `null` です。

> [!NOTE]
> ユーザーエージェントは、いくつかの方法でエミュレートされた位置の値を提供する可能性があります。そうする場合でも、{{domxref("GamepadPose.hasPosition")}} は `false` を報告するべきです。

## 例

TBD

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
- [Gamepad API](/ja/docs/Web/API/Gamepad_API)
