---
title: MutationObserver.takeRecords()
slug: Web/API/MutationObserver/takeRecords
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}} の **`takeRecords()`** メソッドは、検出されたがオブザーバのコールバック関数で処理されていない DOM の変更に一致するすべてのリストを返し、変更キューは空のままにします。 最も一般的な使用例は、オブザーバを切断する直前に保留中の変更記録をすべて取得し、オブザーバを停止する際に保留中の変更を処理できるようにすることです。

## 構文

```
const mutationRecords = mutationObserver.takeRecords()
```

### 引数

なし

### 戻り値

{{domxref("MutationRecord")}} オブジェクトの配列で、そのそれぞれがドキュメントの DOM ツリーの監視された部分に適用された変更を記述します。

> **メモ:** 発生したものの、オブザーバーのコールバックに伝えられなかった変更キューは、 `takeRecords()`をコールした後は空のままになります。

## 例

この例では、オブザーバを切断する直前に `takeRecords()`を呼び出して、未伝達の{{domxref("MutationRecord")}}を処理する方法を示します。

```js
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* ...later, when it's time to stop observing... */

/* handle any still-pending mutations */

let mutations = observer.takeRecords();

observer.disconnect();

if (mutations) {
  callback(mutations);
}
```

12-17 行目のコードは、処理されていない変更の記録を取得し、その記録を処理できるようにコールバックを呼び出します。これは、{{domxref("MutationObserver.disconnect", "disconnect()")}} を呼び出して DOM の観測を停止する直前に行われます。

## 仕様

{{Specifications}}

## ブラウザ互換性

{{Compat("api.MutationObserver.takeRecords")}}
