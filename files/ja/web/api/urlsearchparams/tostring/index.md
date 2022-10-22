---
title: URLSearchParams.toString()
slug: Web/API/URLSearchParams/toString
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} インターフェイスの **`toString()`** メソッドは、URL での使用に適したクエリー文字列を返します。

> **メモ:** このメソッドは、疑問符のないクエリー文字列を返します。 これは、それを含む [`window.location.search`](/ja/docs/Web/API/HTMLHyperlinkElementUtils/search) とは異なります。

{{availableinworkers}}

## 構文

```
URLSearchParams.toString()
```

### パラメーター

なし。

### 戻り値

疑問符のない {{domxref("DOMString")}}。

## 例

```js
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

// 2番目の foo パラメーターの追加
params.append('foo', 4);
console.log(params.toString());
// 'foo=1&bar=2&foo=4' を表示

// メモ: params は直接作成することもできます
let url = new URL('https://example.com?foo=1&bar=2');
let params = url.searchParams;

// または、さらに単純に
let params = new URLSearchParams('foo=1&bar=2');
```

## 仕様

| 仕様                                                                                                             | 状態                 | コメント |
| ---------------------------------------------------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#interface-urlsearchparams', "toString() (see \"stringifier\")")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.toString")}}

## 関連項目

- {{domxref("URL")}} インターフェイス。
- [Google Developers: URLSearchParams を使用した簡単な URL 操作](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)（英語）
