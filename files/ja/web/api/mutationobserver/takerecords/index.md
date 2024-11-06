---
title: "MutationObserver: takeRecords() メソッド"
short-title: takeRecords()
slug: Web/API/MutationObserver/takeRecords
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}} の **`takeRecords()`** メソッドは、検出されたがオブザーバーのコールバック関数で処理されていない DOM の変更に一致するすべてのリストを返し、変更キューは空のままにします。

最も一般的な使用例は、オブザーバーを切断する直前に保留中の変更記録をすべて取得し、オブザーバーを停止する際に保留中の変更を処理できるようにすることです。

## 構文

```js-nolint
takeRecords()
```

### 引数

なし。

### 返値

{{domxref("MutationRecord")}} オブジェクトの配列で、そのそれぞれが文書の DOM ツリーの監視された部分に適用された変更を記述します。

> [!NOTE]
> 発生したものの、オブザーバーのコールバックに伝えられなかった変更キューは、 `takeRecords()`をコールした後は空のままになります。

## 例

この例では、オブザーバーを切断する直前に `takeRecords()`を呼び出して、未伝達の{{domxref("MutationRecord")}}を処理する方法を示します。

```js
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* 後で、監視を停止する時点になったら... */

/* 未処理のままのすべての変更を処理する */

let mutations = observer.takeRecords();

observer.disconnect();

if (mutations.length > 0) {
  callback(mutations);
}
```

このコードは、処理されていない変更の記録を取得し、その記録を処理できるようにコールバックを呼び出します。これは、{{domxref("MutationObserver.disconnect", "disconnect()")}} を呼び出して DOM の観測を停止する直前に行われます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
