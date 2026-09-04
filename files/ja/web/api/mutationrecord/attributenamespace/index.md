---
title: "MutationRecord: attributeNamespace プロパティ"
slug: Web/API/MutationRecord/attributeNamespace
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

{{domxref("MutationRecord")}} の読み取り専用プロパティ **`attributeNamespace`** は、{{domxref("MutationObserver")}} で観測された {{domxref("MutationRecord")}} 内で変更された属性の名前空間です。

## 値

レコードの [`type`](/ja/docs/Web/API/MutationRecord/type) が `attributes` である場合は、このプロパティは変更の対象の変更された属性の名前空間を表す文字列です。そうでない場合は `null` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
