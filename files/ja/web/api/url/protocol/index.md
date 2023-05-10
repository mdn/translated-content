---
title: URL.protocol
slug: Web/API/URL/protocol
---

{{ApiRef("URL API")}}

{{domxref("URL")}} インターフェイスの **`protocol`** プロパティは、最後の `':'` を含む URL のプロトコルスキームを表す {{domxref("USVString")}} です。

{{AvailableInWorkers}}

## 構文

```
string = object.protocol;
object.protocol = string;
```

### 値

{{domxref("USVString")}}。

## 例

```js
var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol');
var result = url.protocol; // 戻り値: "https:"
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.URL.protocol")}}

## 関連情報

- {{domxref("URL")}} インターフェイスに属します。
