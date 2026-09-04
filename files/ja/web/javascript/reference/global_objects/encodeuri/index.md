---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`encodeURI()`** 関数は、特定の文字を、その文字の {{Glossary("UTF-8")}} エンコードを表す 1～4 つのエスケープシーケンスに置き換えて、{{Glossary("URI")}} をエンコードします（2 つのサロゲート文字で構成される文字の場合は、 4 つのエスケープシーケンスのみになります）。{{jsxref("encodeURIComponent()")}} と比較すると、この関数はエンコードする文字の数が少なく、URI 構文の一部である文字はそのまま残します。

{{InteractiveExample("JavaScript デモ: encodeURI()")}}

```js interactive-example
const uri = "https://mozilla.org/?x=шеллы";
const encoded = encodeURI(uri);
console.log(encoded);
// 予想される結果: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // 予想される結果: "https://mozilla.org/?x=шеллы"
} catch (e) {
  // Catches a malformed URI
  console.error(e);
}
```

## 構文

```js-nolint
encodeURI(uri)
```

### 引数

- `uri`
  - : URI としてエンコードされる文字列です。

### 返値

指定された文字列を URI としてエンコードした新しい文字列を表します。

### 例外

- {{jsxref("URIError")}}
  - : `uri` に[孤立サロゲート](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)が含まれている場合に発生します。

## 解説

`encodeURI()` は、グローバルオブジェクトの関数プロパティです。

`encodeURI()` 関数は、UTF-8 コード単位で文字をエスケープし、それぞれのオクテットを `%XX` の書式でエンコードし、必要に応じて左側に 0 を補います。UTF-16 の孤立サロゲートは、有効な Unicode 文字をエンコードしないため、`encodeURI()` に {{jsxref("URIError")}} を発生させます。

`encodeURI()` は、以下の文字を**除く**すべての文字をエスケープします。

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )

; / ? : @ & = + $ , #
```

2 行目の文字は URI 構文の一部である可能性のある文字であり、`encodeURIComponent()` によってのみエスケープされます。`encodeURI()` と `encodeURIComponent()` はどちらも、「非予約マーク」として知られる `-.!~*'()` という文字をエンコードしません。これらの文字は予約された用途は持っていませんが、URI では「そのまま」使用することができます。（[RFC2396](https://datatracker.ietf.org/doc/html/rfc2396) を参照してください。）

`encodeURI()` 関数は、URI に対して特別な意味を持つ文字（予約文字）はエンコードしません。次の例は、URI に含まれる可能性のあるすべての部分を示しています。特定の文字が特別な意味を表すために使用されていることに注意してください。

```url
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

`encodeURI` は、その名前が示すとおり、URL がすでに正しい形式であると仮定して、URL 全体をエンコードするために使用します。文字列の値を動的に URL に組み立てたい場合は、不要な場所に URL 構文文字が入らないように、それぞれの動的セグメントに {{jsxref("encodeURIComponent()")}} を使用することをお勧めします。

```js
const name = "Ben & Jerry's";

// This is bad:
const link = encodeURI(`https://example.com/?choice=${name}`); // "https://example.com/?choice=Ben%20&%20Jerry's"
console.log([...new URL(link).searchParams]); // [['choice', 'Ben '], [" Jerry's", '']

// Instead:
const link = encodeURI(
  `https://example.com/?choice=${encodeURIComponent(name)}`,
);
// "https://example.com/?choice=Ben%2520%2526%2520Jerry's"
console.log([...new URL(link).searchParams]); // [['choice', "Ben%20%26%20Jerry's"]]
```

## 例

### encodeURI() と encodeURIComponent()

`encodeURI()` は以下のように {{jsxref("encodeURIComponent()")}} とは異なります。

```js
const set1 = ";/?:@&=+$,#"; // 予約文字
const set2 = "-.!~*'()"; // 予約されていない記号
const set3 = "ABC abc 123"; // 英数字 + 空白

console.log(encodeURI(set1)); // ;/?:@&=+$,#
console.log(encodeURI(set2)); // -.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (空白は %20 にエンコードされる)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (空白は %20 にエンコードされる)
```

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

このエラーを避けるには、孤立サロゲートを Unicode 置換文字 (U+FFFD) に置き換える {{jsxref("String.prototype.toWellFormed()")}} を使用することができます。また、文字列を `encodeURI()` に渡す前に、その文字列に孤立サロゲートが含まれているかどうかを調べるには、{{jsxref("String.prototype.isWellFormed()")}} を使用することができます。

### RFC3986 のエンコード

最近の [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) では、角括弧は（{{glossary("IPv6")}} 用の）予約文字となっているため、角括弧が（ホスト名など） URL の一部を形成している場合はエンコードされていないほうがよいでしょう。また、URI の区切り文字として正式に使用されていない !, ', (, ), \* も予約文字として予約されています。次の関数は、RFC3986 準拠の URL 書式に文字列をエンコードします。

```js
function encodeRFC3986URI(str) {
  return encodeURI(str)
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]")
    .replace(
      /[!'()*]/g,
      (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
    );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("decodeURIComponent()")}}
