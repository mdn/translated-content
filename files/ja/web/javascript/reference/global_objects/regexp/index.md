---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
tags:
  - クラス
  - JavaScript
  - リファレンス
  - RegExp
  - 正規表現
  - ポリフィル
browser-compat: javascript.builtins.RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp
---
{{JSRef}}

**`RegExp`** オブジェクトは、パターンでテキストを検索するために使用します。

正規表現を詳しく知りたい方は [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions) の [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions) を参考にしてください。

## 解説

### リテラル記法とコンストラクター

`RegExp` オブジェクトを生成するには 2 通りの方法があります。*リテラル記法*と*コンストラクター*です。

- **リテラル記法**は引数をスラッシュで囲み、引用符は使用しません。
- **コンストラクター関数**の引数はスラッシュで囲むのではなく、引用符を使用します。

以下の 3 つの式は、同じ正規表現を生成します。

```js
let re = /ab+c/i; // リテラル記法
let re = new RegExp('ab+c', 'i') // 最初の引数に文字列のパターンを渡したコンストラクター
let re = new RegExp(/ab+c/, 'i') // 最初の引数に正規表現リテラルを渡したコンストラクター（ECMAScript 6 から）
```

リテラル記法では、正規表現が評価されるときにコンパイルを行います。正規表現が変化しない場合は、リテラル記法を使用してください。例えばループ内で使用する正規表現を生成するためにリテラル記法を使用すると、反復処理のたびに正規表現を再コンパイルすることはありません。

`new RegExp('ab+c')` といった正規表現オブジェクトのコンストラクターは、実行時に正規表現をコンパイルします。正規表現パターンが変わることがわかっている場合や、パターンが不明でありユーザー入力など別のソースからパターンを取得する場合は、コンストラクター関数を使用してください。

### コンストラクターのフラグ

ECMAScript 6 から、 `new RegExp(/ab+c/, 'i')` のように第 1 引数が正規表現 (`RegExp`) であり、第 2 引数 `flags` が存在する場合には {{jsxref("TypeError")}} ("can't supply flags when constructing one RegExp from another") が発生しなくなりました。引数を元に新たな `RegExp` が生成されます。

コンストラクター関数を使用する場合は、通常の文字エスケープ規則 (文字列内に特殊文字が含まれるとき、前に `\` を付加する) が必須です。

例えば、以下 2 つの構文は同等です。

```js
let re = /\w+/
let re = new RegExp('\\w+')
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
- {{jsxref("RegExp.lastIndex", "RegExp: lastIndex")}}
  - : 次の照合を開始する位置です。

## インスタンスメソッド

- {{JSxRef("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : スクリプトの実行中に正規表現を (再) コンパイルします。
- {{JSxRef("RegExp.prototype.exec()")}}
  - : 文字列引数の中で一致するものを検索します。
- {{JSxRef("RegExp.prototype.test()")}}
  - : 文字列引数で一致するものがあるかどうか検査します。
- {{JSxRef("RegExp.prototype.toString()")}}
  - : 指定されたオブジェクトを表す文字列を返します。{{JSxRef("Object.prototype.toString()")}} メソッドを上書きします。
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

以下のスクリプトは、{{jsxref("Global_Objects/String", "String")}} インスタンスの {{jsxref("String.prototype.replace()", "replace()")}} メソッドを使用して、 *名 姓* の形式の名前に一致させ、*姓, 名* の形式で出力します。

スクリプトでは、置換テキスト中で `$1` と `$2` を使用して、それぞれ対応する正規表現パターンで一致する括弧がキャプチャした結果を指定しています。

```js
let re = /(\w+)\s(\w+)/
let str = 'John Smith'
let newstr = str.replace(re, '$2, $1')
console.log(newstr)
```

これは、 `"Smith, John"` と表示します。

### 正規表現を使用したさまざまな行末/行の終端/改行での行の分割

既定の改行文字は、プラットフォーム (Unix、Windows など) によって異なります。この例で実行する行分割は、あらゆるプラットフォームで動作します。

```js
let text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end'
let lines = text.split(/\r\n|\r|\n/)
console.log(lines) // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

正規表現内のパターンの順序が重要であることに注意してください。

### 複数行で正規表現を使用する

```js
let s = 'Please yes\nmake my day!'

s.match(/yes.*day/);
// null を返す

s.match(/yes[^]*day/);
// Returns ["yes\nmake my day"]
```

### sticky フラグ付きの正規表現の使用

{{JSxRef("Global_Objects/RegExp/sticky", "sticky")}} フラグは、正規表現の sticky 照合を実行することを示しており、対象文字列で {{jsxref("RegExp.prototype.lastIndex")}} の位置から照合を試みます。

```js
let str = '#foo#'
let regex = /foo/y

regex.lastIndex = 1
regex.test(str)      // true
regex.lastIndex = 5
regex.test(str)      // false (sticky フラグがあるので lastIndex から始める)
regex.lastIndex      // 0 (照合に失敗した後はリセット)
```

### sticky フラグと global フラグの違い

sticky フラグ `y` を付けると、次の照合は `lastIndex` の位置で行われるのに対し、グローバルフラグ `g` を付けると、検索は `lastIndex` の位置から始められます。

```js
re = /\d/y;
while (r = re.exec("123 456")) console.log(r, "AND re.lastIndex", re.lastIndex);

// [ '1', index: 0, input: '123 456', groups: undefined ] AND re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] AND re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] AND re.lastIndex 3
//   ... あとは一致しない
```

グローバルフラグ `g` を付けると、 3 桁だけでなく、 6 桁すべてに一致します。

### 正規表現と Unicode 文字

上の表にもある通り、`\w` や `\W` は ASCII 基本文字にのみ一致します。具体的には `a` から `z` 、`A` から `Z` 、 `0` から `9` および `_` です。

キリル語やヘブライ語で使われるような非 ASCII 文字に一致させるには `\uhhhh` 形式 (`hhhh` の部分は 16 進表記の Unicode 値) を使ってください。

この例は、文字列全体から Unicode 文字列だけを抜き出す方法を示しています。

```js
let text = 'Образец text на русском языке'
let regex = /[\u0400-\u04FF]+/g

let match = regex.exec(text)
console.log(match[0])        // logs 'Образец'
console.log(regex.lastIndex) // logs '7'

let match2 = regex.exec(text)
console.log(match2[0])       // logs 'на' ['text' は出力しない]
console.log(regex.lastIndex) // logs '15'

// 以下同様
```

[Unicode プロパティエスケープ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)機能は `\p{scx=Cyrl}` のように簡潔な表記ができるようにする解決策を導入しています。

### URL からのサブドメイン名の抽出

```js
let url = 'http://xxx.domain.com'
console.log(/[^.]+/.exec(url)[0].substr(7)) // logs 'xxx'
```

> **Note:** URL を解釈するには、ふつうは正規表現を使用するより、 [URL API](/ja/docs/Web/API/URL_API) におけるブラウザー内蔵の URL パーサーを使用することをお勧めします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### Firefox 固有の注意事項

Firefox 34 より、量指定子を伴うキャプチャグループが動作を妨げている場合に、キャプチャグループに一致するテキストは空文字列ではなく `undefined` になりました。

```js
// Firefox 33 以前
'x'.replace(/x(.)?/g, function(m, group) {
  console.log("'group:" + group + "'");
});
// 'group:'

// Firefox 34 以降
'x'.replace(/x(.)?/g, function(m, group) {
  console.log("'group:" + group + "'");
});
// 'group:undefined'
```

ウェブの互換性のため `RegExp.$N` は引き続き、 `undefined` ではなく空文字列を返します ([bug 1053944](https://bugzilla.mozilla.org/show_bug.cgi?id=1053944))。

## 関連情報

- `RegExp` の新しい機能の多くのポリフィル (`dotAll`、`sticky` フラグ、名前付きキャプチャグループ、など）が [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp) で利用できます。
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)の節（[JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)内）
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
