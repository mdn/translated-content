---
title: "GamepadPose: orientation プロパティ"
slug: Web/API/GamepadPose/orientation
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

{{domxref("GamepadPose")}} の読み取り専用プロパティ **`orientation`** は、{{domxref("Gamepad")}} の向きをクォータニオン値で返します。

値は、以下の値からなる {{jsxref("Float32Array")}} です。

- ピッチ: X 軸のまわりの回転です。
- ヨー: Y 軸のまわりの回転です。
- ロール: Z 軸のまわりの回転です。
- w: 4 次元目 (通常は 1) です。

向きのうちヨー (y 軸のまわりの回転) は、センサーから値を最初に取得したときのヨーの初期値からの相対値です。

## 値

{{jsxref("Float32Array")}}、もしくは VR センサーが向きデータを提供できない場合は `null` です。

## 例

TBD

> [!NOTE]
> 向き `{ x: 0, y: 0, z: 0, w: 1 }` が「前」とみなされます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
- [Gamepad API](/ja/docs/Web/API/Gamepad_API)
