---
title: CompositionEvent.initCompositionEvent()
slug: Web/API/CompositionEvent/initCompositionEvent
---

{{deprecated_header}}{{APIRef("DOM Events")}}

{{domxref("CompositionEvent")}} インターフェイスの **`initCompositionEvent()`** メソッドは、`CompositionEvent` オブジェクトインスタンスの属性を初期化します。

## 構文

```
 compositionEventInstance.initCompositionEvent(typeArg, canBubbleArg, cancelableArg, viewArg, dataArg, localeArg)
```

### 引数

- `typeArg`
  - : composition イベントの種類を表す {{domxref("DOMString")}}。これは、`compositionstart`, `compositionupdate`, `compositionend` のいずれかになります。
- `canBubbleArg`
  - : イベントがバブリング可能するかどうかを指定する {{domxref("Boolean")}}。
- `cancelableArg`
  - : イベントがキャンセル可能かどうかを表す {{domxref("Boolean")}}。
- `viewArg`
  - : イベント生成元の {{domxref("Window")}} オブジェクト。
- `dataArg`
  - : `data` 属性の値を表す {{domxref("DOMString")}}。
- `localeArg`
  - : `locale` 属性の値を表す {{domxref("DOMString")}}。

### 戻り値

Void.

## 仕様

| 仕様書                                                                                                                               | 策定状況                         | 備考       |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{SpecName('DOM3 Events','#idl-interface-CompositionEvent-initializers','initCompositionEvent()')}} | {{Spec2('DOM3 Events')}} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.CompositionEvent.initCompositionEvent")}}

## 関連情報

- {{domxref("CompositionEvent")}}
