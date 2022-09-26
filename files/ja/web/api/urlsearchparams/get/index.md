---
title: URLSearchParams.get()
slug: Web/API/URLSearchParams/get
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} インターフェースの **`get()`** メソッドは、指定された検索パラメーターに関連付けられた最初の値を返します。

{{availableinworkers}}

## 構文

```
URLSearchParams.get(name)
```

### パラメーター

- name
  - : 返すパラメーターの名前。

### 戻り値

指定された検索パラメーターが見つかった場合、{{domxref("USVString")}}。 それ以外の場合、**`null`**。

## 例

ページの URL が `https://example.com/?name=Jonathan&age=18` の場合、次を使用して 'name' および 'age' のパラメーターを解析できます。

```
let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name"); // 文字列 "Jonathan" です。
let age = parseInt(params.get("age"), 10); // 数値 18 です。
```

クエリー文字列に存在しないパラメーターを要求すると、**`null`** が返されます。

```
let address = params.get("address"); // null
```

## 仕様

| 仕様                                                                         | 状態                 | コメント |
| ---------------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-urlsearchparams-get', "get()")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.get")}}
