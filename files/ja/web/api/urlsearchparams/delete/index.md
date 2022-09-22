---
title: URLSearchParams.delete()
slug: Web/API/URLSearchParams/delete
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} インターフェイスの **`delete()`** メソッドは、すべての検索パラメーターのリストから、指定された検索パラメーターとそれに関連するすべての値を削除します。

{{availableinworkers}}

## 構文

```
URLSearchParams.delete(name)
```

### パラメーター

- name
  - : 削除するパラメーターの名前。

### 戻り値

無効

## 例

```js
let url = new URL('https://example.com?foo=1&bar=2&foo=3');
let params = new URLSearchParams(url.search.slice(1));

// foo パラメーターを削除します。
params.delete('foo'); // クエリー文字列は現在: 'bar=2'
```

## 仕様

| 仕様                                                                                 | 状態                 | コメント |
| ------------------------------------------------------------------------------------ | -------------------- | -------- |
| {{SpecName('URL', '#dom-urlsearchparams-delete', "delete()")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.delete")}}
