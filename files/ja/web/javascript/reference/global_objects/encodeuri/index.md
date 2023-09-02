---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
---

{{jsSidebar("Objects")}}

**`encodeURI()`** 関数は、{{glossary("URI")}} (Uniform Resource Identifier; 統一資源識別子) をエンコードし、各文字のインスタンスをそれぞれ {{glossary("UTF-8")}} 符号の文字を表す 1 個から 4 個のエスケープシーケンスに置き換えます (サロゲート文字のペアのみ 4 個のエスケープシーケンスになります)。

{{EmbedInteractiveExample("pages/js/globalprops-encodeuri.html")}}

## 構文

```
encodeURI(URI)
```

### 引数

- `URI`
  - : 完全 URI です。

### 返値

URI (Uniform Resource Identifier) としてエンコードされた指定された文字列を表す新しい文字列です。

## 解説

`encodeURI()` 関数では、 URI において特別な意味を持つ文字 (予約文字) はエンコードされません。下記の例は URI "scheme" に含まれる可能性がある全ての箇所を示しています。特定の文字がどのように特殊な意味を表すために使われているかに注意してください。

```
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

したがって、 `encodeURI()` は完全な URI を表すのに必要な文字はエンコード**しません**。また、 `encodeURI()` は "unreserved marks" (予約されていないが "そのまま" URI に使用できる) 文字をエンコード**しません**。 ([RFC2396](https://www.ietf.org/rfc/rfc2396.txt) を確認してください。)

`encodeURI()` は下記**以外**の全ての文字をエスケープします。

```
エスケープされないもの:

    A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
```

## 例

### encodeURI と encodeURIComponent

`encodeURI()` は以下のように {{jsxref("encodeURIComponent", "encodeURIComponent()")}} とは異なります。

```js
var set1 = ";,/?:@&=+$#"; // 予約文字
var set2 = "-_.!~*'()"; // 予約されていない記号
var set3 = "ABC abc 123"; // 英数字 + 空白

console.log(encodeURI(set1)); // ;,/?:@&=+$#
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (空白は %20 にエンコードされる)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (空白は %20 にエンコードされる)
```

なお、`encodeURI()` のみでは、 HTTP の {{HTTPMethod("GET")}} および {{HTTPMethod("POST")}} リクエストを {{domxref("XMLHttpRequest")}} のように適切に構成できません。なぜなら、 "`&`", "`+`", "`=`" は `GET` および `POST` リクエストにおいて特別な文字であり、それらがエンコードされないからです。 `encodeURIComponent()` の場合、それらがエンコードされます。

### 単独のサロゲート文字のエンコード

サロゲートペアになっていない 1 個のサロゲート文字をエンコードしようとすると {{jsxref("URIError")}} が発生することに注意してください。例えば、

```js
// サロゲートペアは OK
console.log(encodeURI("\uD800\uDFFF"));

// 上位サロゲートのみだと "URIError: malformed URI sequence" エラーが発生
console.log(encodeURI("\uD800"));

// 下位サロゲートのみだと "URIError: malformed URI sequence" エラーが発生
console.log(encodeURI("\uDFFF"));
```

### IPv6 のエンコード

また、 URL 記述のために最近の [RFC3986](http://tools.ietf.org/html/rfc3986) 仕様に従おうとする場合、角括弧 `[]` は ({{glossary("IPv6")}} 用の) 予約文字となっているため、角括弧が (ホスト名など) URL の一部を形成している場合はエンコードされていないほうがよいでしょう。そういう場合は以下のコードが役に立ちます。

```js
function fixedEncodeURI(str) {
  return encodeURI(str).replace(/%5B/g, "[").replace(/%5D/g, "]");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.encodeURI")}}

## 関連情報

- {{jsxref("decodeURI", "decodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("decodeURIComponent", "decodeURIComponent()")}}
