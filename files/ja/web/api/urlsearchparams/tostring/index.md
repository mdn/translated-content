---
title: "URLSearchParams: toString() メソッド"
short-title: toString()
slug: Web/API/URLSearchParams/toString
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ApiRef("URL API")}}

**`toString()`** は {{domxref("URLSearchParams")}} インターフェイスのメソッドで、URL での使用に適したクエリー文字列を返します。

> **メモ:** このメソッドは、疑問符のないクエリー文字列を返します。これは、それを含む [window.location.search](/ja/docs/Web/API/HTMLAnchorElement/search) とは異なります。

{{availableinworkers}}

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

疑問符を除いた文字列です。（検索パラメーターが設定されていない場合は空文字列を返します。）

## 例

```js
const url = new URL("https://example.com?foo=1&bar=2");
const params = new URLSearchParams(url.search);

// 2番目の foo パラメーターの追加
params.append("foo", 4);
console.log(params.toString()); // 'foo=1&bar=2&foo=4' と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- {{domxref("URL")}} インターフェイス。
- [Google Developers: URLSearchParams を使用した簡単な URL 操作](https://developer.chrome.com/blog/urlsearchparams/)（英語）
