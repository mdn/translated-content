---
title: "URIError: malformed URI sequence"
slug: Web/JavaScript/Reference/Errors/Malformed_URI
---

{{jsSidebar("Errors")}}

JavaScript の例外 "malformed URI sequence" は、 URI エンコードまたはデコードに失敗したときに発生します。

## エラーメッセージ

```js
URIError: The URI to be encoded contains invalid character (Edge)
URIError: malformed URI sequence (Firefox)
URIError: URI malformed (Chrome)
```

## エラータイプ

{{jsxref("URIError")}}

## 何がうまくいかなかったのか？

URI エンコードまたはデコードが成功しませんでした。{{jsxref("decodeURI")}} か {{jsxref("encodeURI")}}、{{jsxref("encodeURIComponent")}}、{{jsxref("decodeURIComponent")}} 関数の引数が無効のため、関数は適切にエンコード、またはデコードできませんでした。

## 例

### エンコード

エンコードは、特定の文字インスタンスをそれぞれ、文字の UTF-8 エンコーディングを表す 1 から 4 つの並びに置き換えます。高低ペアの一部ではないサロゲートをエンコードしようとした場合、次のように {{jsxref("URIError")}} が発生します。

```js example-bad
encodeURI("\uD800");
// "URIError: malformed URI sequence"

encodeURI("\uDFFF");
// "URIError: malformed URI sequence"
```

高低ペアが正しい場合の例です。

```js example-good
encodeURI("\uD800\uDFFF");
// "%F0%90%8F%BF"
```

### デコード

デコードでは、エンコードされた URI の部分に含まれるそれぞれのエスケープシーケンスを、それを表す文字に置き換えます。そのような文字がない場合、エラーが発生します。

```js example-bad
decodeURIComponent("%E0%A4%A");
// "URIError: malformed URI sequence"
```

適切な入力を行うと、通常は次のようになります。

```js example-good
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

## 関連項目

- {{jsxref("URIError")}}
- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("decodeURIComponent")}}
