---
title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
---

{{ApiRef("URL API")}}

**`URLSearchParams()`** コンストラクターは、新しい {{domxref("URLSearchParams")}} オブジェクトを作成して返します。 先頭の `'?'` 文字は無視されます。

{{availableinworkers}}

## 構文

```
var URLSearchParams = new URLSearchParams(init);
```

### パラメーター

- _`init`_ {{optional_inline}}
  - : {{domxref("USVString")}} のインスタンス、{{domxref("URLSearchParams")}} のインスタンス、{{domxref("USVString")}} のシーケンス、または {{domxref("USVString")}} を含むレコード。 `URLSearchParams` インスタンスの使用は推奨されないことに注意してください。 ブラウザーは単に _`init`_ に `USVString` を使用するようになります。

### 戻り値

{{domxref("URLSearchParams")}} のインスタンス。

## 例

次の例は、URL 文字列から {{domxref("URLSearchParams")}} オブジェクトを作成する方法を示しています。

```js
// 文字列リテラルを渡す
var url = new URL('https://example.com?foo=1&bar=2');
// window.location から取得
var url2 = new URL(window.location);

// url.search を介してパラメーターを取得し、コンストラクターに渡す
var params = new URLSearchParams(url.search);
var params2 = new URLSearchParams(url2.search);

// シーケンスを渡す
var params3 = new URLSearchParams([["foo", 1],["bar", 2]]);

// レコードを渡す
var params4 = new URLSearchParams({"foo" : 1 , "bar" : 2});
```

## 仕様

| 仕様                                                                                                         | 状態                 | コメント |
| ------------------------------------------------------------------------------------------------------------ | -------------------- | -------- |
| {{SpecName('URL', '#dom-urlsearchparams-urlsearchparams', "URLSearchParams()")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.URLSearchParams")}}
