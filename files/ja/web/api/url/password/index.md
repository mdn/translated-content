---
title: URL.password
slug: Web/API/URL/password
---

{{ApiRef("URL API")}}

{{domxref("URL")}} インターフェイスの **`password`** プロパティは、ドメイン名の前に指定されたパスワードを含む {{domxref("USVString")}} です。

最初に [`username`](/ja/docs/Web/API/URL/username) プロパティを設定せずに設定しようとすると、静かに失敗します。

{{AvailableInWorkers}}

## 構文

```
string = object.password;
object.password = string;
```

### 値

{{domxref("USVString")}}。

## 例

```js
var url = new URL('https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/password');
var result = url.password; // 戻り値: "flabada"
```

## 仕様

| 仕様                                                                         | 状態                 | コメント |
| ---------------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-url-password', 'URL.password')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.password")}}

## 関連情報

- {{domxref("URL")}} インターフェイスに属します。
