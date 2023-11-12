---
title: Document.createEntityReference()
slug: conflicting/Web/API/Document
original_slug: Web/API/Document/createEntityReference
---

{{ApiRef("DOM")}}{{deprecated_header}}

Gecko 7.0 より前では、このメソッドはバグ [Firefox バグ 9850](https://bugzil.la/9850) の影響で、常に null のみを返すものとして登場しました。唯一の用途は、テキストノード、 CDATA セクション、属性ノード値など、エンティティから [Unicode エスケープシーケンス](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#unicode_escape_sequences) または [fromCharCode()](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) を使用して参照される値があるもののみでした。

## 仕様書

[createEntityReference](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-392B75AE)

## ブラウザーの互換性

{{Compat}}
