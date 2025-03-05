---
title: "URLSearchParams: has() メソッド"
short-title: has()
slug: Web/API/URLSearchParams/has
l10n:
  sourceCommit: 42d23bc68c42b3eaef5a4a7990499bdf88ff680f
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

**`has()`** は {{domxref("URLSearchParams")}} インターフェイスのメソッドは、指定された名前のパラメーターが存在するかどうかを示す論理値を返します。

パラメーター名とオプションの値は、パラメーターの照合に使用されます。
パラメーター名のみが指定された場合、このメソッドはクエリー文字列内のいずれかのパラメーターがその名前と一致した場合に `true` を返し、それ以外の場合は `false` を返します。
パラメーター名と値の両方が指定された場合、あるパラメーターの名前と値の両方が一致した場合に `true` を返します。

## 構文

```js-nolint
has(name)
has(name, value)
```

### 引数

- `name`
  - : 照合するパラメーターの名前です。
- `value`
  - : パラメーターの値で、指定された名前と一緒に照合されます。

### 返値

論理値です。

## 例

### 指定された名前のパラメーターをチェック

この例では、クエリー文字列に特定の名前のパラメーターがあるかどうかをチェックする方法を示します。

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() はそのパラメーターがクエリー文字列にある場合に true を返す
console.log(`bar?:\t${params.has("bar")}`);
console.log(`bark?:\t${params.has("bark")}`);
console.log(`foo?:\t${params.has("foo")}`);
```

以下のログは、パラメーター `bar`、`bark`、`foo` がクエリー文字列内に存在するかどうかを示しています。

```plain
bar?:  true
bark?: false
foo?:  true
```

### 指定された名前と値を持つパラメーターをチェック

この例では、クエリー文字列に特定の名前と値の両方が一致するパラメーターがあるかどうかをチェックする方法を示します。

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() は、一致する名前と値を持つパラメーターがクエリー文字列内にある場合に true を返します。
console.log(`bar=1?:\t${params.has("bar", "1")}`);
console.log(`bar=2?:\t${params.has("bar", "2")}`);
console.log(`foo=4?:\t${params.has("foo", "4")}`);
```

パラメーター名が `bar` で値が `2` のもののみが一致するので、上記の 2 番目の値のみが `true` になるはずです。

```plain
bar=1?: false
bar=2?: true
foo=4?: false
```

ブラウザーが `value` オプションに対応していない場合、このメソッドは名前に一致し、結果はすべて `true` になるはずです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`URLSearchParams` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#url-and-urlsearchparams)
