---
title: URLSearchParams.has()
slug: Web/API/URLSearchParams/has
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} インターフェイスの **`has()`** メソッドは、指定された名前のパラメーターが存在するかどうかを示す {{jsxref("Boolean")}} を返します。

{{availableinworkers}}

## 構文

```
var hasName = URLSearchParams.has(name)
```

### パラメーター

- name
  - : 検索するパラメーターの名前。

### 戻り値

{{jsxref("Boolean")}}。

## 例

```js
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

params.has('bar') === true; // true
```

## 仕様

| 仕様                                                                         | 状態                 | コメント |
| ---------------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-urlsearchparams-has', "has()")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.has")}}
