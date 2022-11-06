---
title: URLSearchParams.getAll()
slug: Web/API/URLSearchParams/getAll
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} インターフェイスの **`getAll()`** メソッドは、指定された検索パラメーターに関連付けられたすべての値を配列として返します。

{{availableinworkers}}

## 構文

```
URLSearchParams.getAll(name)
```

### パラメーター

- name
  - : 返すパラメーターの名前。

### 戻り値

{{domxref("USVString")}} の配列。

## 例

```js
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

// 2番目の foo パラメーターを追加します。
params.append('foo', 4);

console.log(params.getAll('foo')) // ["1","4"] を表示します。
```

## 仕様

| 仕様                                                                                 | 状態                 | コメント |
| ------------------------------------------------------------------------------------ | -------------------- | -------- |
| {{SpecName('URL', '#dom-urlsearchparams-getall', "getAll()")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.getAll")}}
