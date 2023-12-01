---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`RegExp`** オブジェクトは、テキストをパターンと照合するために使用します。

正規表現の入門記事は、 [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions) の [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions) をお読みください。

## 解説

### リテラル記法とコンストラクター

`RegExp` オブジェクトを生成するには 2 通りの方法があります。*リテラル記法*と*コンストラクター*です。

- _リテラル記法_ はパターンを 2 本のスラッシュで囲み、 2 本目のスラッシュの後にオプションでフラグが続きます。
- _コンストラクター関数_ は文字列または `RegExp` オブジェクトを最初の引数として取り、オプションのフラグを文字列で 2 番目の引数として取ります。

以下の 3 つの式は、同じ正規表現オブジェクトを生成します。

```js
const re = /ab+c/i; // リテラル記法
const re = new RegExp("ab+c", "i"); // 最初の引数に文字列のパターンを渡したコンストラクター
const re = new RegExp(/ab+c/, "i"); // 最初の引数に正規表現リテラルを渡したコンストラクター
```

正規表現は使用できるようになる前に、コンパイルする必要があります。この処理によって、より効率的に一致を行うことができるようになります。この処理の詳細は[ドットネットのドキュメント](https://docs.microsoft.com/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions)に記載されています。

リテラル記法では、正規表現が評価されるときにコンパイルが行われます。一方、`RegExp` オブジェクトのコンストラクターである `new RegExp('ab+c')` は、実行時に正規表現をコンパイルすることになります。

[動的な入力から正規表現を生成する](#動的な入力からの正規表現の構築)場合には、 `RegExp()` コンストラクターの最初の引数として、文字列を使用してください。

### コンストラクターのフラグ

`new RegExp(/ab+c/, flags)` という式は、第 1 引数を最初の引数の元として使用し、第 2 引数を指定されたフラグとして使用して `RegExp` を生成します。

コンストラクター関数を使用する場合は、通常の文字エスケープ規則（文字列内に特殊文字が含まれるとき、前に `\` を付加する）が必須です。

例えば、以下 2 つの構文は同等です。

```js
const re = /\w+/;
// または
const re = new RegExp("\\w+");
```

### 正規表現の特殊な扱い

> **メモ:** 何かが「正規表現」であるかどうかは、[ダックタイピング](https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%83%E3%82%AF%E3%83%BB%E3%82%BF%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0)になります。 `RegExp` である必要はありません。

いくつかの組み込みメソッドは、正規表現を特別に扱います。 `x` が正規表現であるかどうかを[複数のステップ](https://tc39.es/ecma262/#sec-isregexp)を経て判断します。

1. `x` はオブジェクトでなければなりません（プリミティブではない）。
2. [`x[Symbol.match]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) が `undefined` でない場合、これが[真値](/ja/docs/Glossary/Truthy)であるかどうかを調べます。
3. そうではない場合、 `x[Symbol.match]` が `undefined` であれば、 `x` が `RegExp` コンストラクターで作られたかどうかを調べます。（このステップが発生するのは稀です。 `x` が改ざんされていない `RegExp` オブジェクトであれば、 `Symbol.match` プロパティを持つはずだからです。）

ほとんどの場合、 `Symbol.match` のチェックを通ることに注意してください。これはつまり、次のようなことです。

- 実際の `RegExp` オブジェクトの `Symbol.match` プロパティの値が[偽値](/ja/docs/Glossary/Falsy)であるが `undefined` ではなかった場合、（[`exec`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) や [`@@replace`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) のように他のすべてがそのままでも）、正規表現ではないかのように使用することができます。
- `RegExp` ではないオブジェクトが `Symbol.match` プロパティを持っていると、正規表現であるかのように扱われます。

この選択は `@@match` が照合に使用することを意図したプロパティであることを最もよく表しているからです。（`exec` も使用することができますが、シンボルのプロパティではないので、誤検出が多すぎるでしょう）。正規表現を特別扱いする場所は次のとおりです。

- [`String.prototype.endsWith()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [`includes()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/includes) では、最初の引数が正規表現の場合は {{jsxref("TypeError")}} が発生します。
- [`String.prototype.matchAll()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) と [`replaceAll()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) は、最初の引数が正規表現である場合、 [global](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) フラグが [`@@matchAll`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) または [`@@replace`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) メソッドを呼び出す前に設定されます。
- [`RegExp()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) コンストラクターは、 `pattern` が（他のいくつかの条件を満たして）正規表現と判断された場合、 `pattern` を直接返します。 `pattern` が正規表現である場合、 `pattern` を文字列に変換するのではなく、 `source` と `flags` プロパティに問い合わせることになります。

例えば、 [`String.prototype.endsWith()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) はすべての入力値を文字列へと強制しますが、引数が正規表現の場合、この関数が文字列と照合するだけのために設計されており、正規表現を使用することは開発者の間違いと考えるため、例外を発生させます。

```js
"foobar".endsWith({ toString: () => "bar" }); // true
"foobar".endsWith(/bar/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

このチェックを回避するには、 `@@match` に `undefined` ではない[偽値](/ja/docs/Glossary/Falsy)を設定してください。この場合、正規表現は `String.prototype.match()` には使用できませんが(`@@match` がなければ `match()` は [`re.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) で追加したスラッシュ 2 本を持つ新しい `RegExp` オブジェクトを構築するので）、事実上他のすべてに使用することが可能です。

```js
const re = /bar/g;
re[Symbol.match] = false;
"/bar/g".endsWith(re); // true
re.exec("bar"); // [ 'bar', index: 0, input: 'bar', groups: undefined ]
"bar & bar".replace(re, "foo"); // 'foo & foo'
```

### Perl 風の RegExp プロパティ

{{JSxRef("RegExp")}} のプロパティのいくつかは長い名前と短い（Perl 風の）名前があります。どちらの名前も同じ値を参照します。（Perl は JavaScript が正規表現をモデルにしたプログラミング言語です。）[非推奨の `RegExp` のプロパティ](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp_のプロパティ)も参照してください。

## コンストラクター

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : 新しい `RegExp` オブジェクトを生成します。

## 静的プロパティ

- {{jsxref("RegExp.@@species", "get RegExp[@@species]")}}
  - : 派生オブジェクトを生成するために使用されるコンストラクター関数です。

## インスタンスプロパティ

- {{JSxRef("RegExp.prototype.flags")}}
  - : `RegExp` オブジェクトのフラグから成る文字列です。
- {{JSxRef("RegExp.prototype.dotAll")}}
  - : `.` を改行文字に一致させるかどうかのフラグです。
- {{JSxRef("RegExp.prototype.global")}}
  - : 対象文字列で一致する可能性があるすべてのものに対して正規表現をテストするか、それとも、最初に一致するものに対してのみテストするどうかのフラグです。
- {{JSxRef("RegExp.prototype.hasIndices")}}
  - : 正規表現の結果で、キャプチャした部分文字列の先頭と末尾の位置を出力するかどうかのフラグです。
- {{JSxRef("RegExp.prototype.ignoreCase")}}
  - : 文字列を照合する際に、大文字と小文字の違いを無視するかどうかのフラグです。
- {{JSxRef("RegExp.prototype.multiline")}}
  - : 複数行に渡って文字列を検索するかどうかのフラグです。
- {{JSxRef("RegExp.prototype.source")}}
  - : パターンのテキストです。
- {{JSxRef("RegExp.prototype.sticky")}}
  - : 検索が先頭固定 (sticky) であるかどうかのフラグです。
- {{JSxRef("RegExp.prototype.unicode")}}
  - : Unicode 機能が有効かどうかのフラグです。
- {{jsxref("RegExp.prototype.lastIndex")}}
  - : 次の照合を開始する位置です。

## インスタンスメソッド

- {{JSxRef("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : スクリプトの実行中に正規表現を (再) コンパイルします。
- {{JSxRef("RegExp.prototype.exec()")}}
  - : 文字列引数の中で一致するものを検索します。
- {{JSxRef("RegExp.prototype.test()")}}
  - : 文字列引数で一致するものがあるかどうか検査します。
- {{JSxRef("RegExp.prototype.toString()")}}
  - : 指定されたオブジェクトを表す文字列を返します。 {{JSxRef("Object.prototype.toString()")}} メソッドを上書きします。
- {{JSxRef("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
  - : 指定された文字列と照合を実行し、照合結果を返します。
- {{JSxRef("RegExp.prototype.@@matchAll()", "RegExp.prototype[@@matchAll]()")}}
  - : 文字列で正規表現に一致するものをすべて返します。
- {{JSxRef("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
  - : 指定された文字列で一致する部分を新しい部分文字列で置き換えます。
- {{JSxRef("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
  - : 指定された文字列で一致する部分を検索し、その文字列で見つかったパターンの位置を返します。
- {{JSxRef("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
  - : 文字列を部分文字列に分割し、指定された文字列を配列に分割します。

## 例

### 正規表現を使用したデータ形式の変更

以下のスクリプトは、{{jsxref("Global_Objects/String", "String")}} インスタンスの {{jsxref("String.prototype.replace()", "replace()")}} メソッドを使用して、 _名 姓_ の形式の名前に一致させ、_姓, 名_ の形式で出力します。

スクリプトでは、置換テキスト中で `$1` と `$2` を使用して、それぞれ対応する正規表現パターンで一致する括弧がキャプチャした結果を指定しています。

```js
const re = /(\w+)\s(\w+)/;
const str = "John Smith";
const newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

これは、 `"Smith, John"` と表示します。

### 正規表現を使用したさまざまな行末/行の終端/改行での行の分割

既定の改行文字は、プラットフォーム (Unix、Windows など) によって異なります。この例で実行する行分割は、あらゆるプラットフォームで動作します。

```js
const text = "Some text\nAnd some more\r\nAnd yet\rThis is the end";
const lines = text.split(/\r\n|\r|\n/);
console.log(lines); // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

正規表現内のパターンの順序が重要であることに注意してください。

### 複数行で正規表現を使用する

```js
const s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// null を返す

s.match(/yes[^]*day/);
// Returns ["yes\nmake my day"]
```

### sticky フラグ付きの正規表現の使用

{{JSxRef("Global_Objects/RegExp/sticky", "sticky")}} フラグは、正規表現の sticky 照合を実行することを示しており、対象文字列で {{jsxref("RegExp.prototype.lastIndex")}} の位置から照合を試みます。

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (sticky フラグがあるので lastIndex から始める)
regex.lastIndex; // 0 (照合に失敗した後はリセット)
```

### sticky フラグと global フラグの違い

sticky フラグ `y` を付けると、次の照合は `lastIndex` の位置で行われるのに対し、 global フラグ `g` を付けると、検索は `lastIndex` の位置から始められます。

```js
const re = /\d/y;
let r;
while ((r = re.exec("123 456"))) {
  console.log(r, "AND re.lastIndex", re.lastIndex);
}

// [ '1', index: 0, input: '123 456', groups: undefined ] AND re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] AND re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] AND re.lastIndex 3
//   ... あとは一致しない
```

global フラグ `g` を付けると、 3 桁だけでなく、 6 桁すべてに一致します。

### 正規表現と Unicode 文字

上の表にもある通り、`\w` や `\W` は ASCII 基本文字にのみ一致します。具体的には `a` から `z` 、`A` から `Z` 、 `0` から `9` および `_` です。

キリル語やヘブライ語で使われるような非 ASCII 文字に一致させるには `\uhhhh` 形式 (`hhhh` の部分は 16 進表記の Unicode 値) を使ってください。

この例は、文字列全体から Unicode 文字列だけを抜き出す方法を示しています。

```js
const text = "Образец text на русском языке";
const regex = /[\u0400-\u04FF]+/g;

const match = regex.exec(text);
console.log(match[0]); // logs 'Образец'
console.log(regex.lastIndex); // '7' と出力

const match2 = regex.exec(text);
console.log(match2[0]); // logs 'на' ['text' は出力しない]
console.log(regex.lastIndex); // '15' と出力

// 以下同様
```

[Unicode プロパティエスケープ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)機能は `\p{scx=Cyrl}` のように簡潔な表記ができるようにする解決策を導入しています。

### URL からのサブドメイン名の抽出

```js
const url = "http://xxx.domain.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx' と出力
```

> **メモ:** URL を解釈するには、正規表現を使用するより、 [URL API](/ja/docs/Web/API/URL_API) におけるブラウザー内蔵の URL パーサーを使用することをお勧めします。

### 動的な入力からの正規表現の構築

```js
const breakfasts = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
const order = "Let me get some bacon and eggs, please";

order.match(new RegExp(`\\b(${breakfasts.join("|")})\\b`, "g"));
// ['bacon', 'eggs'] を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### Firefox 固有の注意事項

Firefox 34 より、量指定子を伴うキャプチャグループが動作を妨げている場合に、キャプチャグループに一致するテキストは空文字列ではなく `undefined` になりました。

```js
// Firefox 33 以前
"x".replace(/x(.)?/g, (m, group) => {
  console.log(`group: ${JSON.stringify(group)}`);
});
// group: ""

// Firefox 34 以降
"x".replace(/x(.)?/g, (m, group) => {
  console.log(`group: ${group}`);
});
// group: undefined
```

ウェブの互換性のため `RegExp.$N` は引き続き、 `undefined` ではなく空文字列を返します ([bug 1053944](https://bugzilla.mozilla.org/show_bug.cgi?id=1053944))。

## 関連情報

- [`RegExp` の新しい機能の多くのポリフィル (`dotAll`、`sticky` フラグ、名前付きキャプチャグループ、など (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp) で利用できます。
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)の節（[JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)内）
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
