---
title: "MediaDeviceInfo: label プロパティ"
slug: Web/API/MediaDeviceInfo/label
l10n:
  sourceCommit: b606916508183550bb9e41101e1e8cb5046733a1
---

{{APIRef("Media Capture")}}

{{domxref("MediaDeviceInfo")}} インターフェイスの読み取り専用プロパティ **`label`** は、デバイスの説明の文字列 (例：`"External USB Webcam"`) を返します。

活動中の `MediaStream` の使用中か、永続的な許可を得られているときのみ参照できます。

## 値

メディアデバイスを説明する文字列です。セキュリティ上の理由で、1 個以上のメディアデバイスを使用する許可を得られていないときは、`label` は常に空文字列 (`""`) です。この許可は、マイクまたはカメラからのストリームを開始するか、永続的な許可を得ることで得られます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
