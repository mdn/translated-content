---
title: URL.username
slug: Web/API/URL/username
---

{{ApiRef("URL API")}}

{{domxref("URL")}} インターフェイスの **`username`** プロパティは、ドメイン名の前に指定されたユーザー名を含む {{domxref("USVString")}} です。

{{AvailableInWorkers}}

## 構文

```
string = object.username;
object.username = string;
```

### 値

{{domxref("USVString")}}。

## 例

```js
var url = new URL("https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username");
var user = url.username; // 戻り値: 'anonymous'
```

## 仕様

| 仕様                                                                 | 状態                 | コメント |
| -------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-url-username', 'username')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.username")}}

## 関連情報

- {{domxref("URL")}} インターフェイスに属します。
