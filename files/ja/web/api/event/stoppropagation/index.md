---
title: Event.stopPropagation()
slug: Web/API/Event/stopPropagation
page-type: web-api-instance-method
tags:
  - メソッド
  - リファレンス
browser-compat: api.Event.stopPropagation
translation_of: Web/API/Event/stopPropagation
---
{{APIRef("DOM")}}

**`stopPropagation()`** は {{domxref("Event")}} インターフェイスのメソッドで、キャプチャおよびバブリング段階において現在のイベントのさらなる伝播を阻止します。しかし、これは既定の動作の発生を妨げるものではありません。例えば、リンクのクリックはまだ処理されます。これらの動作を止めたい場合は、{{domxref("Event.preventDefault", "preventDefault()")}} メソッドを参照してください。また、他のイベントハンドラーへの即時伝搬も防げません。それらを止めたい場合は、{{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}}を参照してください。

## 構文

```js
event.stopPropagation();
```

### 引数

なし。

### 返値

なし。

## 例

[イベントの伝播](/ja/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
