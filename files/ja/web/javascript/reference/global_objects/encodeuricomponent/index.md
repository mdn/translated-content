---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
l10n:
  sourceCommit: 0c3c464abb1422b0534a5e3f5e81e9bbae13544c
---

**`encodeURIComponent()`** 関数は {{Glossary("URI")}} を、特定の文字の各インスタンスを、その文字の {{Glossary("UTF-8")}} エンコード方式を表す 1 つから 4 つのエスケープシーケンスで置き換えることでエンコードします（2 つのサロゲート文字で構成される文字の場合は 4 つのエスケープシーケンスになります）。 {{jsxref("encodeURI()")}} と比較すると、この関数は URI 構文の一部を含むより多くの文字をエンコードします。

{{InteractiveExample("JavaScript デモ: encodeURIComponent()", "shorter")}}

```js interactive-example
// ?, =, /, &, : などの文字をエンコード
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

{{jsxref("encodeURI()")}} と比較すると、`encodeURIComponent()` はより多くの文字をエスケープします。サーバーに送信するフォームのユーザー入力フィールドには `encodeURIComponent()` を使用してください。これにより、{{glossary("character reference", "文字参照")}}などの入力時に意図せず生成されることがある `&` 記号や、エンコード/デコードが必要なその他の文字をエンコードできます。例えば、ユーザーが `Jack & Jill` と入力した場合、`encodeURIComponent()` を使用しないと、アンパサンドはサーバー上で新しいフィールドの開始として解釈され、データの整合性が損なわれるおそれがあります。

[`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm) では、スペースは `+` に置換されます。そのため、`encodeURIComponent()` の実行後に `%20` を `+` に置き換えることも検討できます。

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
      // %27 %28 %29 %2A に変換
      // "*" の正しいエンコードは %2A。大文字化のため toUpperCase() を使用
      // "!" は RFC3986 では予約されるが
      // RFC5987 では予約されないため、エスケープ不要
      .replace(
        /['()*]/g,
        (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
      )
      // RFC5987 ではパーセントエンコード不要な文字。
      // 読みやすさため |`^ をそのまま使用
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
  );
}
```

### RFC3986 のエンコーディング

最新の [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) では、`!`、`'`、`(`、`)`、`*` を、これらの文字が正式な URI 区切り文字として使われていなくても予約しています。次の関数は、RFC3986 に準拠する URL 構成要素の形式で文字列をエンコードします。また、{{Glossary("IPv6")}} の URI 構文の一部である `[` と `]` もエンコードします。RFC3986 に準拠した `encodeURI` の実装では、これらをエスケープすべきではありません。これは [encodeURI() の例](/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encoding_for_rfc3986)で示されています。

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### 孤立サロゲートのエンコードによる例外

上位サロゲートと下位サロゲートのペアを形成していないサロゲートをエンコードしようとすると、{{jsxref("URIError")}} が発生します。例えば:

```js
// 上位サロゲートと下位サロゲートのペア
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// 上位サロゲートのみ。"URIError: malformed URI sequence" が発生
encodeURIComponent("\uD800");

// 下位サロゲートのみ。"URIError: malformed URI sequence" が発生
encodeURIComponent("\uDFFF");
```

{{jsxref("String.prototype.toWellFormed()")}} を使用すると、孤立サロゲートを Unicode 置換文字 (U+FFFD) に置き換えてこのエラーを避けることができます。また、{{jsxref("String.prototype.isWellFormed()")}} を使うと、文字列を `encodeURIComponent()` に渡す前に孤立サロゲートが含まれているかどうかを調べられます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
