---
title: URL.pathname
slug: Web/API/URL/pathname
---

{{ApiRef("URL API")}}

{{domxref("URL")}} インターフェイスの **`pathname`** プロパティは、最初の `'/'` とその後に続く URL のパス（またはパスがない場合は空の文字列）を含む {{domxref("USVString")}} です。

{{AvailableInWorkers}}

## 構文

```
string = object.pathname;
object.pathname = string;
```

### 値

{{domxref("USVString")}}。

## 例

```js
var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname');
var result = url.pathname; // 戻り値: "/en-US/docs/Web/API/URL/pathname"
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.URL.pathname")}}

## 関連情報

- {{domxref("URL")}} インターフェイスに属します。
