---
title: "CompositionEvent: initCompositionEvent() メソッド"
short-title: initCompositionEvent()
slug: Web/API/CompositionEvent/initCompositionEvent
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{deprecated_header}}{{APIRef("UI Events")}}

**`initCompositionEvent()`** は {{domxref("CompositionEvent")}} インターフェイスのメソッドで、 `CompositionEvent` オブジェクトインスタンスの属性を初期化します。

> **メモ:** {{domxref("CompositionEvent")}} を生成する正しい方法は、 {{domxref("CompositionEvent.CompositionEvent", "CompositionEvent()")}} コンストラクターを使用する方法です。

## 構文

```js-nolint
initCompositionEvent(type, canBubble, cancelable, view, data, locale)
```

### 引数

- `type`
  - : composition イベントの種類を表す文字列です。これは、 `compositionstart`, `compositionupdate`, `compositionend` のいずれかになります。
- `canBubble`
  - : 論理値で、イベントがバブリング可能するかどうかを指定します。
- `cancelableArg`
  - : 論理値で、イベントがキャンセル可能かどうかを表します。
- `view`
  - : イベント生成元の {{domxref("Window")}} オブジェクト。
- `data`
  - : 文字列で、`data` 属性の値を表します。
- `localeArg`
  - : 文字列で、`locale` 属性の値を表します。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

このメソッドは標準化の予定がなくなりました。これは互換性のために残されています。 {{domxref("CompositionEvent.CompositionEvent", "CompositionEvent()")}} コンストラクターを使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CompositionEvent")}}
