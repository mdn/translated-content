---
title: "LockManager: query() メソッド"
slug: Web/API/LockManager/query
l10n:
  sourceCommit: cd9d3e7af3ce8c2ef8620ba9294502116b4008c0
---

{{APIRef("Web Locks")}}

{{domxref("LockManager")}} インターフェイスの **`query()`** メソッドは、確保中のロックと獲得待ち中のロックに関する情報を持ったオブジェクトで解決する {{jsxref('Promise')}} を返します。

## 構文

```js-nolint
query()
```

### 引数

なし

### 返値

{{domxref("LockManager")}} の状態のスナップショットを持ったオブジェクトで解決する {{jsxref('Promise')}} を返します。このオブジェクトは以下のプロパティを持ちます。

- `held`: 確保中のロックに関する {{domxref('LockInfo')}} オブジェクトの配列です。
- `pending`: 獲得待ち中のロックに関する {{domxref('LockInfo')}} オブジェクトの配列です。

### 例外

このメソッドは、以下のいずれかの種類の {{domxref("DOMException")}} で拒否される {{jsxref('Promise')}} を返す可能性があります。

- `InvalidStateError` {{domxref("DOMException")}}
  - : ドキュメントが完全にアクティブでない環境のとき投げられます。
- `SecurityError` {{domxref("DOMException")}}
  - : 現在の環境でロックマネージャーが取得できないとき投げられます。

## 例

```js
const state = await navigator.locks.query();
for (const lock of state.held) {
  console.log(`確保中のロック: 名前 ${lock.name}, モード ${lock.mode}`);
}
for (const request of state.pending) {
  console.log(`要求中のロック: 名前 ${request.name}, モード ${request.mode}`);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
