---
title: URL.host
slug: Web/API/URL/host
---

{{ApiRef("URL API")}}

{{domxref("URL")}} インターフェイスの **`host`** プロパティは、ホストを含む {{domxref("USVString")}} です。 ホストは、*ホスト名*の後に、URL の*ポート*が空でない場合、`':'`、および URL の*ポート*が続きます。

{{AvailableInWorkers}}

## 構文

```
string = object.host;
object.host = string;
```

### 値

{{domxref("USVString")}}。

## 例

```js
var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/host');
var result = url.host // "developer.mozilla.org"

var url = new URL('https://developer.mozilla.org:443/en-US/docs/Web/API/URL/host');
var result = url.host // "developer.mozilla.org"
// 443 がスキームのデフォルトポートであるため、ポート番号は含まれません

var url = new URL('https://developer.mozilla.org:4097/en-US/docs/Web/API/URL/host');
var result = url.host // "developer.mozilla.org:4097"
```

## 仕様

| 仕様                                                             | 状態                 | コメント |
| ---------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-url-host', 'URL.host')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.host")}}

## 関連情報

- {{domxref("URL")}} インターフェイスに属します。
