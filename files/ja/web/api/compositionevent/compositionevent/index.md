---
title: CompositionEvent.CompositionEvent()
slug: Web/API/CompositionEvent/CompositionEvent
---

{{APIRef("DOM Events")}}

**`CompositionEvent()`** コンストラクターは新しい {{domxref("CompositionEvent")}} オブジェクトのインスタンスを作成します。

## 構文

```
 myEvent = new CompositionEvent(typeArg, CompositionEventInit)
```

### 値

- _typeArg_
  - : イベントの名前を表す {{domxref("DOMString")}}。
- _CompositionEventInit_{{optional_inline}}

  - : `CompositionEventInit` 辞書オブジェクトは、次のメンバーを含むことができます:

    - `data`: {{domxref("CompositionEvent")}} オブジェクトの {{domxref("CompositionEvent.data", "data")}} 属性を IME コンポジションにより生成された文字に初期化します。

    > **メモ:** `CompositionEventInit` 辞書は、{{domxref("UIEvent.UIEvent", "UIEventInit")}} 辞書から継承するため、そこで定義されたメンバーも受け入れます。

## 仕様

| 仕様書                                                                                                                   | 策定状況                         | 備考       |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{SpecName('DOM3 Events','#dom-compositionevent-compositionevent','CompositionEvent()')}} | {{Spec2('DOM3 Events')}} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.CompositionEvent.CompositionEvent")}}

## 関連情報

- {{domxref("CompositionEvent")}}、これを構築するオブジェクトのインターフェイス。
