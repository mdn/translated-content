---
title: URL.toString()
slug: Web/API/URL/toString
---

{{ApiRef("URL API")}}

`URL.toString()` 文字列化メソッドは、URL 全体を含む {{domxref("USVString")}} を返します。 これは事実上、{{domxref("URL.href")}} の読み取り専用バージョンです。

{{AvailableInWorkers}}

## 構文

```
string = url.toString();
```

### パラメーター

なし。

### 戻り値

{{domxref("USVString")}}。

## 例

```js
const url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/toString");
url.toString() // URL を文字列として返します
```

## 仕様

| 仕様                                                                                     | 状態                 | コメント |
| ---------------------------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#URL-stringification-behavior', 'stringifier')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.toString")}}

## 関連情報

- {{domxref("URL")}} インターフェイスに属します。
