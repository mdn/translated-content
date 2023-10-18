---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
---

{{jsSidebar("Objects")}}

**`encodeURIComponent()`** 関数は、 {{glossary("URI")}} (Uniform Resource Identifier) 構成要素を特定の文字を {{glossary("UTF-8")}} 文字エンコーディングで表された 1 個から 4 個のエスケープシーケンスに置き換えることでエンコードします (サロゲートペアで構成される文字のみ 4 個のエスケープシーケンスになります)。

{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html","shorter")}}

## 構文

```
encodeURIComponent(str);
```

### 引数

- `str`
  - : URI の構成要素となる文字列です。

### 返値

与えられた文字列を表す URI 構成要素としてエンコードされた新しい文字列です。

## 返値

`encodeURIComponent` は**下記を除く**すべての文字をエスケープします。

```
エスケープされないもの:

    A-Z a-z 0-9 - _ . ! ~ * ' ( )
```

`encodeURIComponent()` と **`encodeURI`** の違いは以下の通りです。

```js
var set1 = ";,/?:@&=+$"; // Reserved Characters
var set2 = "-_.!~*'()"; // Unescaped Characters
var set3 = "#"; // Number Sign
var set4 = "ABC abc 123"; // Alphanumeric Characters + Space

console.log(encodeURI(set1)); // ;,/?:@&=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (the space gets encoded as %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (the space gets encoded as %20)
```

上位・下位のペアでないサロゲート文字をエンコードしようとした場合 {{jsxref("URIError")}} が発生します。

```js
// 上位・下位の正しいペア
console.log(encodeURIComponent("\uD800\uDFFF"));

// 上位のみであり "URIError: malformed URI sequence" が発生
console.log(encodeURIComponent("\uD800"));

// 下位のみであり "URIError: malformed URI sequence" が発生
console.log(encodeURIComponent("\uDFFF"));
```

フォームからサーバーに {{HTTPMethod("POST")}} されるユーザー入力値には `encodeURIComponent` を使用してください。これは、特殊な HTML エンティティやエンコード/デコードを必要とする他の文字のデータ入力中に誤って生成される可能性がある `&` 記号をエンコードします。

例えば、ユーザーが `Jack & Jill` と入力した場合、テキストは `Jack &amp; Jill` とエンコードされる可能性があります。`encodeURIComponent()` を使用しない場合は "&" が新しいフィールドの始まりとしてサーバー上で解釈され、データの完全性が損なわれる可能性があります。

[`application/x-www-form-urlencoded`](https://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm) では、スペースは `+` に置換されます。そのため、`encodeURIComponent()` による置換に加えて `%20` を `+` に置き換えることが望まれるかもしれません。

( ! ' ( ) \* が予約語になっている) [RFC 3986](http://tools.ietf.org/html/rfc3986) 仕様を忠実に順守するには、これらの URI 区切り文字としての役目が失われてしまうものの、以下の例が問題なく使用できます。

```js
function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
}
```

## 例

### Content-Disposition とリンクヘッダーのエンコーディング

次の例は、サーバーレスポンスヘッダー引数の {{HTTPHeader("Content-Disposition")}} や {{HTTPHeader("Link")}} で (UTF-8 からなるファイル名などに) 必要となる特別な UTF-8 エンコーディングを提供します。

```js
var fileName = "my file(2).txt";
var header =
  "Content-Disposition: attachment; filename*=UTF-8''" +
  encodeRFC5987ValueChars(fileName);

console.log(header);
// logs "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // Note that although RFC3986 reserves "!", RFC5987 does not,
      // so we do not need to escape it
      .replace(/['()]/g, escape) // i.e., %27 %28 %29
      .replace(/\*/g, "%2A")
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(?:7C|60|5E)/g, unescape)
  );
}

// here is an alternative to the above function
function encodeRFC5987ValueChars2(str) {
  return (
    encodeURIComponent(str)
      // Note that although RFC3986 reserves "!", RFC5987 does not,
      // so we do not need to escape it
      .replace(/['()*]/g, (c) => "%" + c.charCodeAt(0).toString(16)) // i.e., %27 %28 %29 %2a (Note that valid encoding of "*" is %2A
      // which necessitates calling toUpperCase() to properly encode)
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
  );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.encodeURIComponent")}}

## 関連情報

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("decodeURIComponent")}}
