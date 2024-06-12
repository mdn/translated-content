---
title: "URLSearchParams: append() メソッド"
short-title: append()
slug: Web/API/URLSearchParams/append
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

**`append()`** は {{domxref("URLSearchParams")}} インターフェイスのメソッドで、指定されたキー/値のペアを新しい検索パラメーターとして追加します。

下にある例に示すように、同じキーが複数回追加された場合、各値がパラメーター文字列に複数回現れます。

## 構文

```js-nolint
append(name, value)
```

### 引数

- `name`
  - : 追加するパラメーターの名前。
- `value`
  - : 追加するパラメーターの値。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// 2番目の foo パラメーターを追加します。
params.append("foo", 4);
// クエリー文字列はこうなる: 'foo=1&bar=2&foo=4'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- {{domxref("URL")}}
- [Google Developers: URLSearchParams を使用した簡単な URL 操作](https://developer.chrome.com/blog/urlsearchparams/)（英語）
