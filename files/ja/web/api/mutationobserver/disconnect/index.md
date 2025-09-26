---
title: "MutationObserver: disconnect() メソッド"
short-title: disconnect()
slug: Web/API/MutationObserver/disconnect
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}} の **`disconnect()`** メソッドは、オブザーバーに変更の監視を停止させます。

オブザーバーは、{{domxref("MutationObserver.observe", "observe()")}} メソッドを再度呼び出すことで再利用できます。

## 構文

```js-nolint
disconnect()
```

### 引数

なし。

### 返値

`undefined`。

> [!NOTE]
> すでに検出されているが、まだオブザーバーに報告されていない変化の通知はすべて破棄されます。
> 検出されているが未報告の変化を保持し、処理するには、{{domxref("MutationObserver.takeRecords()", "takeRecords()")}} メソッドを使用してください。

## 使用上の注意

監視対象の要素が DOM から除去され、その後ブラウザーのガベージコレクション機構によって解放された場合、`MutationObserver` は除去された要素の監視を停止します。しかし、`MutationObserver` 自体は、他にも監視対象の要素が存在する場合には、その監視を続けることができます。

## 例

この例では、オブザーバーを作成してから切断し、再利用できるようにします。

```js
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* some time later… */

observer.disconnect();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
