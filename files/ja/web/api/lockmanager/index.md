---
title: LockManager
slug: Web/API/LockManager
l10n:
  sourceCommit: 4fc950fa096f3d250c398b4a87ec88a5010dc793
---

{{APIRef("Web Locks")}}

[Web Locks API](/ja/docs/Web/API/Web_Locks_API) の **`LockManager`** インターフェイスは、新しい {{domxref('Lock')}} オブジェクトを要求するメソッドと、既存の `Lock` オブジェクトを取得するメソッドを提供します。`LockManager` のインスタンスを得るには、{{domxref('navigator.locks')}} を参照します。

## インスタンスメソッド

- {{domxref('LockManager.request()')}}
  - : 名前と性質を指定する引数をとり、{{domxref('Lock')}} オブジェクトを要求します。
- {{domxref('LockManager.query()')}}
  - : 確保中のロックと獲得待ち中のロックに関する情報を持ったオブジェクトで解決する {{jsxref('Promise')}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
