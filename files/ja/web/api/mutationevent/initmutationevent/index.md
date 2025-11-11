---
title: "MutationEvent: initMutationEvent() メソッド"
short-title: initMutationEvent()
slug: Web/API/MutationEvent/initMutationEvent
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("UI Events")}}{{deprecated_header}}

**`initMutationEvent()`** は {{domxref("MutationEvent")}} インターフェイスのメソッドで、一度作成された変異イベントの値を初期化します（通常は {{domxref("Document.createEvent()")}} メソッドを使用します）。

このメソッドは、 {{ domxref("EventTarget.dispatchEvent()") }} を使用して、配信される前にイベントを設定するために呼び出される必要があります。

> [!NOTE]
> 一般に、これらのイベントを自分で作成することはなく、ブラウザーが作成します。

## 構文

```js-nolint
initMutationEvent(type, canBubble, cancelable, relatedNode,
                  prevValue, newValue, attrName, attrChange)
```

### 引数

- `type`
  - : イベントの {{domxref("Event.type", "type")}} に設定する文字列。ブラウザーは {{domxref("MutationEvent")}} に次の値を設定します。
    `DOMAttrModified`, `DOMAttributeNameChanged`, `DOMCharacterDataModified`, `DOMElementNameChanged`, `DOMNodeInserted`, `DOMNodeInsertedIntoDocument`, `DOMNodeRemoved`, `DOMNodeRemovedFromDocument`,`DOMSubtreeModified`
- `canBubble`
  - : 論理値で、イベントがバブリングするかどうかを示します。 {{domxref("Event.bubbles")}} の値を設定します。
- `cancelable`
  - : 論理値で、イベントの既定のアクションを阻止できるかどうかを示します。 {{domxref("Event.cancelable")}} の値を設定します。
- `relatedNode`
  - : 文字列で、変更するノードの新しい値を表します。 {{domxref("MutationEvent.relatedNode")}} の値を設定します。
- `prevValue`
  - : 文字列で、変更するノードの前回値を表します。 {{domxref("MutationEvent.prevValue")}} の値を設定します。
- `newValue`
  - : 文字列で、変更するノードの新しい値を表します。 {{domxref("MutationEvent.newValue")}} の値を設定します。
- `attrName`
  - : 文字列で、もしあれば、変更された {{domxref("Attr")}} ノードの名前を表します。 {{domxref("MutationEvent.attrName")}} の値を設定します。
- `attrChange`
  - : 整数で、属性ノードが変更された理由を表します。 {{domxref("MutationEvent.attrChange")}} の値を設定します。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
