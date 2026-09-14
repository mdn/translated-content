---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`encodeURIComponent()`** 関数は {{Glossary("URI")}} を、特定の文字の各インスタンスを、その文字の {{Glossary("UTF-8")}} エンコード方式を表す 1 つから 4 つのエスケープシーケンスで置き換えることでエンコードします (2 つのサロゲート文字で構成される文字の場合は 4 つのエスケープシーケンスになります)。 {{jsxref("encodeURI()")}} と比較すると、この関数は URI 構文の一部を含むより多くの文字をエンコードします。

{{InteractiveExample("JavaScript デモ: encodeURIComponent()", "shorter")}}

```js interactive-example
// Encodes characters such as ?,=,/,&,:
console.log(`?x=${encodeURIComponent("test?")}`);
// 予想される結果: "?x=test%3F"

console.log(`?x=${encodeURIComponent("шеллы")}`);
// 予想される結果: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
```

## 構文

```js-nolint
encodeURIComponent(uriComponent)
```

### 引数

- `uriComponent`
  - : URI の部分（パス、クエリー文字列、フラグメントなど）としてエンコードされる文字列。他にも[文字列に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)される値があります。

### 返値

与えられた文字列を表す URI 構成要素としてエンコードされた新しい文字列です。

### 例外

- {{jsxref("URIError")}}
  - : `uriComponent` に[孤立サロゲート](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)があると発生します。

## 返値

`encodeURIComponent()` はグローバルオブジェクトの関数プロパティです。

`encodeURIComponent` は {{jsxref("encodeURI()")}} で説明されているのと同じエンコーディングアルゴリズムを使用します。**下記を除く**すべての文字をエスケープします。

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )
```

{{jsxref("encodeURI()")}} と比較すると、 `encodeURIComponent()` はより多くの文字セットをエスケープします。サーバーに送信されるフォームのユーザー入力フィールドには `encodeURIComponent()` を使用してください。これにより、{{glossary("character reference", "文字参照")}}のデータ入力中に不注意で生成される可能性のある `&` 記号や、エンコード/デコードが要求されるその他の文字がエンコードされます。例えば、ユーザーが `Jack & Jill` と入力した場合、`encodeURIComponent()` を使用しないと、アンパサンドはサーバー上で新しいフィールドの開始として解釈され、データの整合性が損なわれるおそれがあります。

[`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm) では、スペースは `+` に置換されます。そのため、`encodeURIComponent()` による置換に加えて `%20` を `+` に置き換えることが望まれるかもしれません。

## 例

### Content-Disposition とリンクヘッダーのエンコーディング

次の例は、サーバーレスポンスヘッダー引数の {{HTTPHeader("Content-Disposition")}} や {{HTTPHeader("Link")}} で (UTF-8 からなるファイル名などに) 必要となる特別な UTF-8 エンコーディングを提供します。

```js
const fileName = "my file(2).txt";
const header = `Content-Disposition: attachment; filename*=UTF-8''${encodeRFC5987ValueChars(
  fileName,
)}`;

console.log(header);
// "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // The following creates the sequences %27 %28 %29 %2A (Note that
      // the valid encoding of "*" is %2A, which necessitates calling
      // toUpperCase() to properly encode). Although RFC3986 reserves "!",
      // RFC5987 does not, so we do not need to escape it.
      .replace(
        /['()*]/g,
        (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
      )
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
  );
}
```

### RFC3986 のエンコーディング

最新の [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) では、 `!`, `'`, `(`, `)`, `*` を、たとえこれらの文字が正式な URI 区切り文字として使用されていないとしても予約しています。 {{Glossary("IPv6")}} の URI 構文の一部である `[` と `]` もエンコードします。 RFC3986 に準拠した `encodeURI` の実装では、これらをエスケープすべきではありません。これは [encodeURI() の例](/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encoding_for_rfc3986)で示されています。

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### 孤立サロゲートのエンコードによる例外

上位・下位のペアでないサロゲート文字をエンコードしようとした場合 {{jsxref("URIError")}} が発生します。

```js
// 上位・下位の正しいペア
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// 上位のみであり "URIError: malformed URI sequence" が発生
encodeURIComponent("\uD800");

// 下位のみであり "URIError: malformed URI sequence" が発生
encodeURIComponent("\uDFFF");
```

{{jsxref("String.prototype.toWellFormed()")}} を使用することができます。これは孤立サロゲートを Unicode 置換文字 (U+FFFD) に置き換えることで、このエラーを避けることができます。また、 {{jsxref("String.prototype.isWellFormed()")}} を使用することで、文字列を `encodeURIComponent()` に渡す前に、孤立サロゲートが含まれているかどうかを調べることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
