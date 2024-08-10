---
title: MutationEvent
slug: Web/API/MutationEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

**`MutationEvent`** インターフェイスは、 Document Object Model (DOM) の階層とノードの変更に特化したイベントプロパティを提供します。

> [!NOTE]
> mutation イベントを使用するのは問題があります。
>
> - 設計上の[欠陥](https://lists.w3.org/Archives/Public/public-webapps/2011JulSep/0779.html)があります。
> - 文書に DOM の mutation リスナーを追加すると、その文書に対するその後の DOM 変更の[パフォーマンスが著しく低下します](https://groups.google.com/d/topic/mozilla.dev.platform/L0Lx11u5Bvs?pli=1)（1.5 倍から 7 倍も遅くなります）。さらに、リスナーを削除してもダメージは元に戻りません。
> - クロスブラウザー互換性が低いです。 Safari は `DOMAttrModified` に対応しておらず（[WebKit のバグ 8191](https://webkit.org/b/8191) を参照）、Firefox は mutation name イベント（`DOMElementNameChanged` や `DOMAttributeNameChanged` など）に対応していません。
>
> これらは非推奨になり、[変異オブザーバー](/ja/docs/Web/API/MutationObserver)に置き換えられました。**こちらの使用を検討してください。**

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには親である {{domxref("UIEvent")}} と、間接的に {{domxref("Event")}} から継承したプロパティがあります。_

- {{domxref("MutationEvent.attrChange")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : どのような変更が `DOMAttrModified` イベントのトリガーとなったかを示します。これは `MODIFICATION` (`1`)、`ADDITION` (`2`)、`REMOVAL` (`3`)のいずれかです。他のイベントに対しては意味を持たず、 `0` に設定されます。
- {{domxref("MutationEvent.attrName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : `DOMAttrModified` イベントの影響を受けるノードの名前を示します。他のイベントでは意味を持たず、空文字列 (`""`) に設定されます。
- {{domxref("MutationEvent.newValue")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : `DOMAttrModified` イベントでは、変更された {{domxref("Attr")}} ノードの新しい値が格納されます。 `DOMCharacterDataModified` イベントでは、変更された {{domxref("CharacterData")}} ノードの新しい値を返します。それ以外の場合は、空文字列 (`""`) を返します。
- {{domxref("MutationEvent.prevValue")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : `DOMAttrModified` イベントでは、変更前の {{domxref("Attr")}} ノードの値が格納されます。 `DOMCharacterDataModified` イベントでは、変更された {{domxref("CharacterData")}} ノードの新しい値を返します。それ以外の場合は、空文字列 (`""`) を返します。
- {{domxref("MutationEvent.relatedNode")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : `DOMSubtreeModified` のサブツリー内の変更されたノードのように、イベントに関連するノードを示します。

## インスタンスメソッド

- {{domxref("MutationEvent.initMutationEvent()")}} {{Deprecated_Inline}}
  - : コンストラクターメソッドで、与えられた引数で構成された新しい `MutationEvent` を返します。

## 変異イベント一覧

以下はすべての変異イベントの一覧です。

- `DOMAttrModified` （Safari では未対応）
- `DOMAttributeNameChanged` （Firefox では未対応）
- `DOMCharacterDataModified`
- `DOMElementNameChanged` （Firefox では未対応）
- `DOMNodeInserted`
- `DOMNodeInsertedIntoDocument`
- `DOMNodeRemoved`
- `DOMNodeRemovedFromDocument`
- `DOMSubtreeModified`

## 例

変異イベントのリスナーは、 {{DOMxRef("EventTarget.addEventListener()")}} を使って以下のように登録できます。

```js
element.addEventListener(
  "DOMNodeInserted",
  (event) => {
    // …
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("MutationObserver")}}
