---
title: "HTMLMediaElement: setMediaKeys() メソッド"
short-title: setMediaKeys()
slug: Web/API/HTMLMediaElement/setMediaKeys
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("HTML DOM")}}{{SecureContext_Header}}

**`setMediaKeys()`** は {{domxref("HTMLMediaElement")}} インターフェイスのメソッドで、再生中にメディアの暗号を解除するために使用される {{domxref("MediaKeys")}} を設定します。

返されるプロミス {{jsxref("Promise")}} は、新しいキーが正常に設定された場合は履行され、キーが設定できない場合は拒否されます。

## 構文

```js-nolint
setMediaKeys(mediaKeys)
```

### 引数

- `mediaKeys`
  - : 再生中にメディアデータの復号のために {{domxref("HTMLMediaElement")}} が使用できる {{domxref("MediaKeys")}} オブジェクトです。

### 返値

{{jsxref("Promise")}} で、{{jsxref('undefined')}} で履行されます。

### 例外

プロミスは以下のエラーで拒否される可能性があります。

- `InvalidStateError` {{domxref("DOMException")}}
  - : メディアキーが既に接続中であるか、または（例えば、具体的な実装が再生時刻に除去を許可していないために）前回使用したキーが現時点で除去されていない場合。
- `QuotaExceededError` {{domxref("DOMException")}}
  - : 渡されたキーは他の要素で既に使用されているか、ブラウザーが他の理由でこの要素で使用することができません。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 現在メディアに関連付けられているメディアキーは、CDM とブラウザーが対応していないため、関連付けを解除することはできません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
