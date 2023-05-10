---
title: XMLHttpRequest.responseURL
slug: Web/API/XMLHttpRequest/responseURL
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef('XMLHttpRequest')}}

**`XMLHttpRequest.responseURL`** プロパティは読み取り専用で、レスポンスのシリアライズされた URL を返します。 URL が `null` の場合は、空文字を返します。 URL に存在する URL フラグメントはすべて取り除かれます。 `responseURL` の値は、任意のリダイレクト後に得られる最後の URL になります。

## 例

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/test', true);
xhr.onload = () => {
  console.log(xhr.responseURL); // http://example.com/test
};
xhr.send(null);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
