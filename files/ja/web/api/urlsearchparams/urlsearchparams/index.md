---
title: "URLSearchParams: URLSearchParams() コンストラクター"
short-title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("URL API")}}

**`URLSearchParams()`** コンストラクターは、新しい {{domxref("URLSearchParams")}} オブジェクトを作成して返します。

{{availableinworkers}}

## 構文

```js-nolint
new URLSearchParams()
new URLSearchParams(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のいずれか。
    - 文字列。先頭の文字 `'?'` は無視され、`application/x-www-form-urlencoded` 形式としてパースされます。
    - 名前を表す文字列と値を表す文字列のペアのリテラル列、もしくはそのような文字列のペアの列を生成する[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators#%E3%82%A4%E3%83%86%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC)を持つ任意のオブジェクト（たとえば {{domxref("FormData")}} のオブジェクト）。なお、{{domxref("File")}} のエントリーは（`application/x-www-form-urlencoded` 形式で期待される）ファイル名ではなく `[object File]` としてシリアライズされます。
    - 文字列のキーと文字列の値からなるレコード。なお、ネストには対応していません。

### 返値

{{domxref("URLSearchParams")}} のインスタンスです。

## 例

以下の例では、様々な入力から {{domxref("URLSearchParams")}} オブジェクトを生成する方法を示します。

```js
// url.search からパラメーターを取得し、コンストラクターに渡す
const url = new URL("https://example.com?foo=1&bar=2");
const params1 = new URLSearchParams(url.search);

// URL オブジェクトから直接 URLSearchParams オブジェクトを取得する
const params1a = url.searchParams;

// 文字列リテラルを渡す
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");

// ペアの列を渡す
const params3 = new URLSearchParams([
  ["foo", "1"],
  ["bar", "2"],
]);

// レコードを渡す
const params4 = new URLSearchParams({ foo: "1", bar: "2" });
```

この例では、検索パラメーターを持つ既存の URL から、検索パラメーターを表すオブジェクトを用い、新しい URL を構築する方法を示します。

```js
const url = new URL("https://example.com/?a=hello&b=world");

console.log(url.href);
// https://example.com/?a=hello&b=world

console.log(url.origin);
// https://example.com

const add_params = {
  c: "a",
  d: new String(2),
  e: false.toString(),
};

const new_params = new URLSearchParams([
  ...Array.from(url.searchParams.entries()), // [["a","hello"],["b","world"]]
  ...Object.entries(add_params), // [["c","a"],["d","2"],["e","false"]]
]).toString();
console.log(new_params);
// a=hello&b=world&c=a&d=2&e=false

const new_url = new URL(`${url.origin}${url.pathname}?${new_params}`);

console.log(new_url.href);
// https://example.com/?a=hello&b=world&c=a&d=2&e=false

// (URL, Record<string, string>) を受け取る関数の形式で
const addSearchParams = (url, params = {}) =>
  new URL(
    `${url.origin}${url.pathname}?${new URLSearchParams([
      ...Array.from(url.searchParams.entries()),
      ...Object.entries(params),
    ])}`,
  );
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
