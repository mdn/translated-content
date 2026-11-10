---
title: MutationRecord
slug: Web/API/MutationRecord
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("DOM")}}

**`MutationRecord`** は読み取り専用のインターフェイスで、DOM に生じた個々の変更のうち、{{domxref("MutationObserver")}} で監視されているものを表します。これは {{domxref("MutationObserver")}} のコールバック関数に渡されるオブジェクトです。

## インスタンスプロパティ

- {{domxref("MutationRecord.addedNodes")}} {{ReadOnlyInline}}
  - : 追加されたノードを返します。何もノードが追加されていなかった場合は、空の {{domxref("NodeList")}} を返します。
- {{domxref("MutationRecord.attributeName")}} {{ReadOnlyInline}}
  - : 変更された属性のローカル名、もしくは `null` を返します。
- {{domxref("MutationRecord.attributeNamespace")}} {{ReadOnlyInline}}
  - : 変更された属性の名前空間、もしくは `null` を返します。
- {{domxref("MutationRecord.nextSibling")}} {{ReadOnlyInline}}
  - : 追加あるいは削除されたノードの直後にあるノード、もしくは `null` を返します。
- {{domxref("MutationRecord.oldValue")}} {{ReadOnlyInline}}
  - : {{domxref("MutationRecord.type")}} によって変わる値です。
    - `attributes` の場合、これは変更が行われる前の、変更された属性の値です。
    - `characterData` の場合、変更前のノードのデータです。
    - `childList` の場合、`null` です。
- {{domxref("MutationRecord.previousSibling")}} {{ReadOnlyInline}}
  - : 追加あるいは削除されたノードの直前にあるノード、もしくは `null` を返します。
- {{domxref("MutationRecord.removedNodes")}} {{ReadOnlyInline}}
  - : 削除されたノードを返します。何もノードが削除されていなかった場合は、空の {{domxref("NodeList")}} を返します。
- {{domxref("MutationRecord.target")}} {{ReadOnlyInline}}
  - : 変更の影響を受けたノードを、 `MutationRecord.type` に応じて返します。
    - `attributes` の場合、属性が変更された要素となります。
    - `characterData` の場合、`CharacterData` ノードとなります。
    - `childList` の場合、子ノードが変更されたノードとなります。
- {{domxref("MutationRecord.type")}} {{ReadOnlyInline}}
  - : 変更の種類の文字列です。属性の変更の場合は `attributes`、`CharacterData` ノードへの変更の場合は `characterData`、ノードのツリーへの変更の場合は `childList` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
