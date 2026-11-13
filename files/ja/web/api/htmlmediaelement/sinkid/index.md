---
title: "HTMLMediaElement: sinkId プロパティ"
short-title: sinkId
slug: Web/API/HTMLMediaElement/sinkId
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

**`sinkId`** は {{domxref("HTMLMediaElement")}} インターフェイスの読み取り専用プロパティで、出力を配信する音声機器の固有の ID である文字列を返します。

この ID は {{domxref("MediaDevices.enumerateDevices()")}} から返される {{domxref("MediaDeviceInfo.deviceId")}} の値、`id-multimedia`、`id-communications` のいずれかである必要があります。
ユーザーエージェントの既定の機器が使用されている場合は、空文字列を返します。

## 値

出力を配信する音声機器の固有の ID である文字列を返します。ユーザーエージェントの既定の機器が使用されている場合は、空文字列を返します。

## セキュリティの要件

このプロパティにアクセスするには、以下の制約があります。

- このプロパティは、[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)で呼び出す必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オーディオ出力機器 API](/ja/docs/Web/API/Audio_Output_Devices_API)
- {{domxref("MediaDevices.selectAudioOutput()")}}
- {{domxref("HTMLMediaElement.setSinkId()")}}
