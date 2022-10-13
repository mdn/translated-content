---
title: URL.hostname
slug: Web/API/URL/hostname
---

{{ApiRef("URL API")}}

{{domxref("URL")}} インターフェイスの **`hostname`** プロパティは、URL のドメインを含む {{domxref("USVString")}} です。

{{AvailableInWorkers}}

## 構文

```
string = object.hostname;
object.hostname = string;
```

### 値

{{domxref("USVString")}}。

## 例

```js
var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname');
var result = url.hostname; // 戻り値: 'developer.mozilla.org'
```

## 仕様

| 仕様                                                                         | 状態                 | コメント |
| ---------------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-url-hostname', 'URL.hostname')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.hostname")}}

## 関連情報

- {{domxref("URL")}} インターフェイスに属します。
