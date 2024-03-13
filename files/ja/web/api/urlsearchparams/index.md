---
title: URLSearchParams
slug: Web/API/URLSearchParams
l10n:
  sourceCommit: 92ae2da158d7462890f6d76d9bd605468bd906eb
---

{{ApiRef("URL API")}}

**`URLSearchParams`** インターフェイスは URL のクエリー文字列の操作に役立つメソッドを定義します。

`URLSearchParams` を実装しているオブジェクトは、{{jsxref("Statements/for...of", "for...of")}} 構造の中で直接使用して、キーと値のペアをクエリー文字列に現れるのと同じ順序で反復処理することができます。例えば次の 2 行は等価です。

```js
for (const [key, value] of mySearchParams) {
}
for (const [key, value] of mySearchParams.entries()) {
}
```

{{availableinworkers}}

## コンストラクター

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : `URLSearchParams` オブジェクトを返すコンストラクターです。

## インスタンスプロパティ

- {{domxref("URLSearchParams.size", 'size')}}
  - : 検索パラメーター項目の総数を示します。

## インスタンスメソッド

- {{domxref("URLSearchParams.append()")}}
  - : 指定されたキーと値のペアを新しい検索パラメーターとして追加します。
- {{domxref("URLSearchParams.delete()")}}
  - : 指定された名前と値に一致する検索パラメーターを、検索パラメーターのリストからすべて削除します。
- {{domxref("URLSearchParams.entries()")}}
  - : このオブジェクトに含まれるすべてのキーと値のペアを、クエリー文字列に現れるのと同じ順序で反復処理することができる{{jsxref("Iteration_protocols","イテレーター")}}を返します。
- {{domxref("URLSearchParams.forEach()")}}
  - : コールバック関数を介して、このオブジェクトに含まれるすべての値を反復処理します。
- {{domxref("URLSearchParams.get()")}}
  - : 指定された検索パラメーターに対応する最初の値を返します。
- {{domxref("URLSearchParams.getAll()")}}
  - : 指定された検索パラメーターに対応するすべての値を返します。
- {{domxref("URLSearchParams.has()")}}
  - : 指定されたパラメーター、またはパラメーターと値のペアが存在するかどうかを示す論理値を返します。
- {{domxref("URLSearchParams.keys()")}}
  - : このオブジェクトに含まれるすべてのキーと値のペアのキーを反復処理する {{jsxref("Iteration_protocols", "イテレーター")}}を返します。
- {{domxref("URLSearchParams.set()")}}
  - : 指定された検索パラメーターに結び付けられた値を指定された値に設定します。複数の値が存在していた場合、他のものは削除されます。
- {{domxref("URLSearchParams.sort()")}}
  - : すべてのキーと値のペアを、キーを基準にソートします。
- {{domxref("URLSearchParams.toString()")}}
  - : URL で使用するのに適したクエリー文字列を返します。
- {{domxref("URLSearchParams.values()")}}
  - : このオブジェクトに含まれるすべてのキーと値のペアの値を反復処理する {{jsxref("Iteration_protocols", "イテレーター")}}を返します。

## 例

```js
const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);

// 検索パラメーターの列挙
for (const p of searchParams) {
  console.log(p);
}

console.log(searchParams.has("topic")); // true
console.log(searchParams.has("topic", "fish")); // false
console.log(searchParams.get("topic") === "api"); // true
console.log(searchParams.getAll("topic")); // ["api"]
console.log(searchParams.get("foo") === null); // true
console.log(searchParams.append("topic", "webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
console.log(searchParams.set("topic", "More webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=More+webdev"
console.log(searchParams.delete("topic"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams"
```

```js
// 検索パラメーターはオブジェクトにすることもできる
const paramsObj = { foo: "bar", baz: "bar" };
const searchParams = new URLSearchParams(paramsObj);

console.log(searchParams.toString()); // "foo=bar&baz=bar"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // "bar"
```

### 重複する検索パラメーター

```js
const paramStr = "foo=bar&foo=baz";
const searchParams = new URLSearchParams(paramStr);

console.log(searchParams.toString()); // "foo=bar&foo=baz"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // bar （最初の値のみを返す）
console.log(searchParams.getAll("foo")); // ["bar", "baz"]
```

### URL の解釈なし

`URLSearchParams` コンストラクターは URL 全体を解釈しません。しかし、文字列から最初の `?` 以降が存在すれば、削除します。

```js
const paramsString1 = "http://example.com/search?query=%40";
const searchParams1 = new URLSearchParams(paramsString1);

console.log(searchParams1.has("query")); // false
console.log(searchParams1.has("http://example.com/search?query")); // true

console.log(searchParams1.get("query")); // null
console.log(searchParams1.get("http://example.com/search?query")); // "@" （decodeURIComponent('%40') と同じ）

const paramsString2 = "?query=value";
const searchParams2 = new URLSearchParams(paramsString2);
console.log(searchParams2.has("query")); // true

const url = new URL("http://example.com/search?query=%40");
const searchParams3 = new URLSearchParams(url.search);
console.log(searchParams3.has("query")); // true
```

### プラス記号の温存

`URLSearchParams` コンストラクターはプラス記号 (`+`) をスペースとして解釈します。以下の例では、[16 進エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#16_進エスケープシーケンス) を使って、URL 検索パラメーターに格納する必要のあるバイナリデータ（各バイトが情報を持つ）を含む文字列を模倣しています。`btoa()` でエンコードされた文字列は `+` を含んでおり、 `URLSearchParams` では温存されないことに注意してください。

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams(`bin=${base64Data}`); // 'bin=E+AXQB+A'
const binQuery = searchParams.get("bin"); // 'E AXQB A', '+' はスペースに置き換えられる

console.log(atob(binQuery) === rawData); // false
```

You can avoid this by encoding the data with the {{jsxref("encodeURIComponent", "encodeURIComponent()")}}.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'
const encodedBase64Data = encodeURIComponent(base64Data); // 'E%2BAXQB%2BA'

const searchParams = new URLSearchParams(`bin=${encodedBase64Data}`); // 'bin=E%2BAXQB%2BA'
const binQuery = searchParams.get("bin"); // 'E+AXQB+A'

console.log(atob(binQuery) === rawData); // true
```

### 空の値と値なし

`URLSearchParams` は `=` の後に何もないパラメーターと、`=` もないパラメーターの区別をしません。

```js
const emptyVal = new URLSearchParams("foo=&bar=baz");
console.log(emptyVal.get("foo")); // returns ''
const noEquals = new URLSearchParams("foo&bar=baz");
console.log(noEquals.get("foo")); // also returns ''
console.log(noEquals.toString()); // 'foo=&bar=baz'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`URLSearchParams` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- {{domxref("URL")}} インターフェイス。
- [Google Developers: URLSearchParams を使用した簡単な URL 操作](https://developer.chrome.com/blog/urlsearchparams/) (英語)
