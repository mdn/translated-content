---
title: "Document: createComment() メソッド"
short-title: createComment()
slug: Web/API/Document/createComment
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`createComment()`** は新たにコメントノードを作成し、返します。

## 構文

```js-nolint
createComment(data)
```

### 引数

- `data`
  - : 文字列で、コメントに追加されるデータを含みます。

### 返値

新しい {{domxref("Comment")}} オブジェクトです。

## 例

```js
const docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const comment = docu.createComment(
  "This is a not-so-secret comment in your document",
);

docu.querySelector("xml").appendChild(comment);

console.log(new XMLSerializer().serializeToString(docu));
// 表示結果: <xml><!--This is a not-so-secret comment in your document--></xml>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
