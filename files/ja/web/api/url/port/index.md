---
title: URL.port
slug: Web/API/URL/port
---

{{ApiRef("URL API")}}

{{domxref("URL")}} インターフェイスの **`port`** プロパティは、URL のポート番号を含む {{domxref("USVString")}} です。 URL に明示的なポート番号が含まれていない場合は、`''` に設定されます。

{{AvailableInWorkers}}

## 構文

```
string = object.port;
object.port = string;
```

### 値

{{domxref("USVString")}}。

## 例

```js
var url = new URL('https://mydomain.com:80/svn/Repos/');
var result = url.port; // 戻り値: '80'
```

## 仕様

| 仕様                                                             | 状態                 | コメント |
| ---------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-url-port', 'URL.port')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.port")}}

## 関連情報

- {{domxref("URL")}} インターフェイスに属します。
