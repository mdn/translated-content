---
title: "AggregateError: No Promise in Promise.any was resolved"
slug: Web/JavaScript/Reference/Errors/Promise_any_all_rejected
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "No Promise in Promise.any was resolved" は、{{jsxref("Promise.any()")}} に渡されたすべてのプロミスが拒否された場合に発生します。これは、{{jsxref("AggregateError")}} の唯一の組み込みでの使用例です。

## エラーメッセージ

```plain
AggregateError: All promises were rejected (V8-based)
AggregateError: No Promise in Promise.any was resolved (Firefox)
AggregateError (Safari)
```

## エラーの種類

{{jsxref("AggregateError")}}

## エラーの原因

`Promise.any()` は、渡されたすべてのプロミスが拒否された場合にのみ拒否されます。拒否の理由の配列は {{jsxref("AggregateError/errors", "errors")}} から取得できます。非同期で拒否されたプロミスの扱い方については、[プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises#エラー処理)を参照してください。また、このエラーは `Promise.any()` に空の反復可能オブジェクトが渡された場合にも発生します。

## 例

### 空の反復可能オブジェクト

```js
Promise.any([]).catch((error) => {
  console.error(error); // AggregateError: No Promise in Promise.any was resolved
});
```

### すべての拒否の処理

```js
const promises = [
  fetch("/data-location1"),
  fetch("/data-location1"),
  fetch("/data-location1"),
];

Promise.any(promises)
  .then((value) => console.log(value))
  .catch((error) => {
    // いずれのフェッチも成功しなかった場合
    for (const e of error.errors) {
      console.error(e);
    }
  });

// await を使用する場合
async function fetchFirstSuccessful() {
  try {
    const value = await Promise.any(promises);
    console.log(value);
  } catch (error) {
    for (const e of error.errors) {
      console.error(e);
    }
  }
}
```

## 関連情報

- {{jsxref("AggregateError")}}
- {{jsxref("Promise.any()")}}
