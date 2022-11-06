---
title: URL.searchParams
slug: Web/API/URL/searchParams
---

{{APIRef("URL API")}}

{{domxref("URL")}} インターフェイスの **`searchParams`** 読み取り専用プロパティは、URL に含まれる GET デコードされたクエリー引数へのアクセスを可能にする {{domxref("URLSearchParams")}} オブジェクトを返します。

{{AvailableInWorkers}}

## 構文

```
var urlSearchParams = URL.searchParams;
```

### 値

{{domxref("URLSearchParams")}} オブジェクト。

## 例

ページの URL が `https://example.com/?name=Jonathan%20Smith&age=18` の場合、次を使用して 'name' および 'age' パラメーターを解析できます。

```js
let params = (new URL(document.location)).searchParams;
let name = params.get('name'); // 文字列 "Jonathan Smith" です。
let age = parseInt(params.get('age')); // 数値 18 です。
```

## 仕様

| 仕様                                                                             | 状態                 | コメント |
| -------------------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-url-searchparams', 'searchParams')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.searchParams")}}
