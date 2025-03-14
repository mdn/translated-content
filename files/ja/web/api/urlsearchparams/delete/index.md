---
title: "URLSearchParams: delete() メソッド"
short-title: delete()
slug: Web/API/URLSearchParams/delete
l10n:
  sourceCommit: ed8ef3722c476fffa19914bef27689e7b2048b0e
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

**`delete()`** は {{domxref("URLSearchParams")}} インターフェイスのメソッドで、すべての検索パラメーターのリストから、指定された検索パラメーターとそれに関連するすべての値を削除します。

パラメーター名とオプションの値は、パラメーターの照合に使用されます。
パラメーター名のみが指定された場合、その名前に一致するすべての検索パラメーターが、関連する値とともに削除されます。
パラメーター名と値の両方が指定された場合、パラメーター名と値の両方に一致するすべての検索パラメーターが削除されます。

## 構文

```js-nolint
delete(name)
delete(name, value)
```

### 引数

- `name`
  - : 削除するパラメーターの名前。
- `value` {{optional_inline}}
  - : パラメーターを削除するために、指定された名前とともにパラメーターが一致しなければならない値。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 指定された名前のすべてのパラメーターを削除

この例では、特定の名前を持つクエリーパラメーター（および値）をすべて削除する方法を示します。

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);
console.log(`クエリー文字列（変更前）:\t ${params}`);
params.delete("foo");
console.log(`クエリー文字列（変更後）:\t ${params}`);
```

以下のログは、`foo` という名前を持つパラメーターがすべて削除されていることを示しています。

```plain
クエリー文字列（変更前）:  foo=1&bar=2&foo=3
クエリー文字列（変更後）:   bar=2
```

### 指定した名前と値を持つパラメーターの削除

この例では、特定の名前と値に一致するクエリーパラメーターを削除する方法を示します。

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3&foo=1");
const params = new URLSearchParams(url.search);
console.log(`クエリー文字列（変更前）:\t ${params}`);
params.delete("foo", "1");
console.log(`クエリー文字列（変更後）:\t ${params}`);
```

パラメーターの `name` と `value` の両方が一致するパラメーターがすべて削除されるはずです（上記のように、同じ名前と値を持つパラメーターを 2 つ指定する理由はありません）。

```plain
クエリー文字列（変更前）:  foo=1&bar=2&foo=3&foo=1
クエリー文字列（変更後）:   bar=2&foo=3
```

ブラウザーが `value` オプションに対応している場合、"after" の文字列は `bar=2&foo=3` となります。
そうでない場合、結果は前の例 (`bar=2`) と同じになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`URLSearchParams` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#url-and-urlsearchparams)
