---
title: URLSearchParams
slug: Web/API/URLSearchParams
---

{{ApiRef("URL API")}}

**`URLSearchParams`** インターフェイスは URL のクエリー文字列の操作に役立つメソッドを定義します。

`URLSearchParams` を実装するオブジェクトは 直接 {{jsxref("Statements/for...of", "for...of")}} で使うことができます。例えば次の 2 行は等価です。

```js
for (const [key, value] of mySearchParams) {}
for (const [key, value] of mySearchParams.entries()) {}
```

{{availableinworkers}}

## コンストラクター

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : `URLSearchParams` オブジェクトを返すコンストラクターです。

## メソッド

- {{domxref("URLSearchParams.append()")}}
  - : 指定されたキーと値のペアを新しい検索パラメーターとして追加します。
- {{domxref("URLSearchParams.delete()")}}
  - : 指定された検索パラメーターとその値を、検索パラメーターのリストからすべて削除します。
- {{domxref("URLSearchParams.entries()")}}
  - : このオブジェクトに含まれるすべてのキーと値のペアを列挙するための {{jsxref("Iteration_protocols","iterator")}} を返します。
- {{domxref("URLSearchParams.forEach()")}}
  - : コールバック関数を介して、このオブジェクトに含まれるすべての値を列挙します。
- {{domxref("URLSearchParams.get()")}}
  - : 指定された検索パラメーターに対応する最初の値を返します。
- {{domxref("URLSearchParams.getAll()")}}
  - : 指定された検索パラメーターに対応するすべての値を返します。
- {{domxref("URLSearchParams.has()")}}
  - : 指定された検索パラメーターが存在するかを表す {{jsxref("Boolean")}} 値を返します。
- {{domxref("URLSearchParams.keys()")}}
  - : このオブジェクトに含まれるすべてのキーと値のペアの**キー**を列挙する {{jsxref("Iteration_protocols", "iterator")}} を返します。
- {{domxref("URLSearchParams.set()")}}
  - : 指定された検索パラメーターに対応する値を設定します。複数の値が存在していた場合、それらは削除されます。
- {{domxref("URLSearchParams.sort()")}}
  - : すべてのキーと値のペアを、キーを基準にソートします。
- {{domxref("URLSearchParams.toString()")}}
  - : URL で使用するのに適したクエリー文字列を返します。
- {{domxref("URLSearchParams.values()")}}
  - : このオブジェクトに含まれるすべてのキーと値のペアの**値**を列挙する {{jsxref("Iteration_protocols", "iterator")}} を返します。

## 例

```js
var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

// 検索パラメーターを列挙する
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
```

### コラム

`URLSearchParams` コンストラクターは完全な URL をパースしません。ただし、先頭に `?` が存在すれば、読み飛ばします。

```js
var paramsString1 = "http://example.com/search?query=%40";
var searchParams1 = new URLSearchParams(paramsString1);

searchParams1.has("query"); // false
searchParams1.has("http://example.com/search?query"); // true

searchParams1.get("query"); // null
searchParams1.get("http://example.com/search?query"); // "@" (equivalent to decodeURIComponent('%40'))

var paramsString2 = "?query=value";
var searchParams2 = new URLSearchParams(paramsString2);
searchParams2.has("query"); // true

var url = new URL("http://example.com/search?query=%40");
var searchParams3 = new URLSearchParams(url.search);
searchParams3.has("query") // true
```

## 仕様書

| 仕様書                                                                       | 状態                 | 備考     |
| ---------------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#urlsearchparams', "URLSearchParams")}} | {{Spec2('URL')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams")}}

## 関連情報

- {{domxref("URL")}} インターフェイス。
- [Google Developers: URLSearchParams を使用した簡単な URL 操作](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en) (英語)
