---
title: "Permissions-Policy: speaker-selection"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーの `speaker-selection` ディレクティブは、現在の文書がオーディオ出力機器（スピーカー、ヘッドフォンなど）を列挙および選択できるかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、

- {{domxref("MediaDevices.enumerateDevices()")}} は _audio output_ 型の機器を返しません。
- {{domxref("MediaDevices.selectAudioOutput()")}} は、音声出力を選択するためのポップアップを表示せず、返されるプロミス ({{jsxref("Promise")}}) は {{domxref("DOMException")}} の `NotAllowedError` 型で拒否されます。
- {{domxref("HTMLMediaElement.setSinkId()")}} および {{domxref("AudioContext.setSinkId()")}} は、オーディオ出力用に呼び出された場合、 `NotAllowedError` 例外を発生します。

## 構文

```http
Permissions-Policy: speaker-selection=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`speaker-selection` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
