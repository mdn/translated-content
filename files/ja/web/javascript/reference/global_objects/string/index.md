---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
---

{{JSRef}}

**`String`** オブジェクトは文字の並びを表したり操作したりするために使用されます。

## 解説

文字列は、テキスト形式で表現可能なデータを保持するのに便利です。最もよく使われる操作として、文字列の長さをチェックする {{jsxref("String.length", "length")}} プロパティ、 [文字列に対する + および += 演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#文字列演算子)を用いた文字列の連結、文字列の中の部分文字列の存在や位置をチェックする {{jsxref("String.prototype.indexOf()", "indexOf()")}} メソッド、部分文字列を取り出す {{jsxref("String.prototype.substring()", "substring()")}} メソッドが挙げられます。

### 文字列の生成

文字列は文字列リテラルからプリミティブとして、または {{jsxref("String/String", "String()")}} コンストラクターを使用して文字列として生成することができます。

```
const string1 = "文字列プリミティブ";
const string2 = 'これも文字列プリミティブ';
const string3 = `別な文字列プリミティブ`;
```

```
const string4 = new String("文字列オブジェクト");
```

文字列プリミティブと文字列オブジェクトは、ほとんどの場合は交換して使用することができます。下記の「[文字列プリミティブと String オブジェクト](#文字列プリミティブと_string_オブジェクト)」を参照してください。

文字列リテラルは単一引用符または二重引用符を使用して指定することができ、どちらでも同様に扱われますが、逆引用符文字 <kbd>`</kbd> を使用することもできます。最後の形は[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)を指定し、この形式では式を補完することができます。

### 文字へのアクセス

文字列内の個々の文字へのアクセス方法には、二通りの方法があります。そのひとつは {{jsxref("String.prototype.charAt()", "charAt()")}} メソッドです。

```js
return 'ねこ'.charAt(1)  // "こ" が返される
```

そしてもうひとつは、文字列を配列のようなオブジェクトとして扱い、数値の添字を用いる方法です。 (ECMAScript 5 で導入)

```js
return 'ねこ'[1]  // "こ" が返される。
```

ブラケット記法を使用した文字アクセスでは、これらのプロパティに値を設定したり削除したりすることはできません。関連したプロパティを書き込んだり設定したりすることもできません。 (より詳細な情報は {{jsxref("Object.defineProperty()")}} を参照してください。)

### 文字列の比較

C 言語では 文字列の比較の為に `strcmp()` 関数を用います。 JavaScript では単純に [小なり / 大なり演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)を用います。

```js
let a = 'a'
let b = 'b'
if (a < b) { // true
  console.log(a + ' は ' + b + ' より小さい')
} else if (a > b) {
  console.log(a + ' は ' + b + ' より大きい')
} else {
  console.log(a + ' と ' + b + ' は等しい')
}
```

`String` インスタンスから継承される {{jsxref("String.prototype.localeCompare()", "localeCompare()")}} メソッドを使用して同等の結果を得ることもできます。

なお、 `a == b` は `a` と `b` の文字列が等しいかどうかを、通常の大文字小文字を区別して比較します。大文字小文字に関係なく比較したい場合は、次のように関数を使用してください。

```
function isEqual(str1, str2)
{
    return str1.toUpperCase() === str2.toUpperCase()
} // isEqual
```

この関数では、特定の UTF-8 文字の変換に問題があるため、小文字の代わりに大文字を使用します。

### 文字列プリミティブと String オブジェクト

JavaScript では、 `String` オブジェクトと{{Glossary("Primitive", "プリミティブ文字列")}}は区別されることに注意してください。 ({{jsxref("Boolean")}} や {{jsxref("Global_Objects/Number", "Number")}} にも同じことが言えます。)

文字列リテラル (二重引用符または単一引用符で示されます)、および `String` 関数をコンストラクター以外の場面で (すなわち {{jsxref("Operators/new", "new")}} キーワードを使わずに) 呼び出した場合はプリミティブの文字列になります。 JavaScript では、必要に応じてプリミティブの文字列が自動的に `String` オブジェクトに変換されるので、プリミティブの文字列に対して `String` オブジェクトのメソッドを使用することができます。プリミティブの文字列に対して、メソッドの呼び出しやプロパティの参照が行われようとした場合、 JavaScript は自動的にプリミティブの文字列をオブジェクトでラップし、メソッドを呼び出したりプロパティの参照を行ったりします。

```js
let s_prim = 'foo'
let s_obj = new String(s_prim)

console.log(typeof s_prim) // Logs "string"
console.log(typeof s_obj)  // Logs "object"
```

プリミティブの文字列と `String` オブジェクトは {{jsxref("Global_Objects/eval", "eval()")}} を使用すると異なる結果となります。 `eval` に渡されたプリミティブは、ソースコードとして扱われます。 `String` オブジェクトは他のオブジェクトと同様に、オブジェクトとしてそのままの文字列を返します。

```js
let s1 = '2 + 2'              // 文字列プリミティブを生成
var s2 = new String('2 + 2')  // String オブジェクトを生成
console.log(eval(s1))         // 数値の 4 を返す
console.log(eval(s2))         // 文字列の "2 + 2" を返す
```

こういった理由から、プリミティブの文字列を期待して実装されたコードは `String` オブジェクトでうまく動作しないことがあります。しかし、一般的にはこれらの違いを考慮しなければならないことはあまりありません。

なお、 `String` オブジェクトは {{jsxref("String.prototype.valueOf()", "valueOf()")}} メソッドを用いることで、プリミティブの文字列に変換することができます。

```js
console.log(eval(s2.valueOf()))  // 数値の 4 を返す
```

### エスケープ表記

通常の文字列とは異なる特殊な文字を表示するためには、エスケープ表記を使用します。

| コード                                                                                | 出力                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `\XXX` (`XXX` = 1 ～ 3 桁の 8 進数、 `0`～`377` の範囲)                               | ISO-8859-1 の文字または U+0000 から U+00FF の間の Unicode コードポイントです。 |
| `\'`                                                                                  | 単一引用符                                                                     |
| `\"`                                                                                  | 二重引用符                                                                     |
| `\\`                                                                                  | バックスラッシュ (\文字)                                                       |
| `\n`                                                                                  | 改行                                                                           |
| `\r`                                                                                  | 復帰                                                                           |
| `\v`                                                                                  | 垂直タブ                                                                       |
| `\t`                                                                                  | 水平タブ                                                                       |
| `\b`                                                                                  | バックスペース                                                                 |
| `\f`                                                                                  | ページ送り                                                                     |
| `\uXXXX` (`XXXX` = 4 桁の 16 進数、 `0x0000`～`0xFFFF` の範囲)                        | UTF-16 のコード単位 / `U+0000` から `U+FFFF` の間の Unicode コードポイント     |
| `\u{X}` ... `\u{XXXXXX}` (`X…XXXXXX` = 1 ～ 6 桁の 16 進数、 `0x0`–`0x10FFFF` の範囲) | UTF-32 のコード単位 / `U+0000` から `U+10FFFF` の間の Unicode コードポイント   |
| `\xXX` (`XX` = 2 桁の 16 進数、 `0x00`～`0xFF` の範囲)                                | ISO-8859-1 の文字 / `U+0000` から `U+00FF` の間の Unicode コードポイント       |

### 長い文字列リテラル

時には、コードに非常に長い文字列が含まれる場合があります。行を延々と長くしたり、エディターに任せて折り返したりするよりも、実際の文字列の内容に影響を与えずに文字列をソースコード内で複数行に分割したいことがあります。これを行うには 2 つの方法があります。

#### 方法 1

[+](/ja/docs/Web/JavaScript/Reference/Operators/Addition) 演算子を使用して、次のように複数の文字列を追加することができます。

```js
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable."
```

#### 方法 2

各行の末尾にバックスラッシュ文字 (`\`) を使用して、文字列が次の行に続くことを示すことができます。バックスラッシュの後に、 (改行を除いて) 空白やその他の文字を置いたり、インデントを置いたりしていないか確認してください。さもないと動作しません。

この形式は以下のようになります。

```js
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."
```

これらの結果はともに同じ文字列が生成されます。

## コンストラクター

- {{jsxref("String/String", "String()")}}
  - : 新しい `String` オブジェクトを生成するために使用します。コンストラクターではなく関数として呼び出されたときは型変換を行うので、普通はより有用です。

## 静的メソッド

- {{jsxref("String.fromCharCode()", "String.fromCharCode(<var>num1</var> [, ...[, <var>numN</var>]])")}}
  - : 指定された Unicode 値の列から生成した文字列を返します。
- {{jsxref("String.fromCodePoint()", "String.fromCodePoint(<var>num1</var> [, ...[, <var>numN</var>)")}}
  - : 指定された Unicode コードポイントの列から生成した文字列を返します。
- {{jsxref("String.raw()")}}
  - : 生のテンプレート文字列から生成した文字列を返します。

## インスタンスプロパティ

- {{jsxref("String.prototype.length")}}
  - : 文字列の `length` を反映します。読み取り専用です。

## インスタンスメソッド

- {{jsxref("String.prototype.charAt()", "String.prototype.charAt(<var>index</var>)")}}
  - : `index` で指定された位置の文字 (UTF-16 コード 1 つから成ります) を返します。
- {{jsxref("String.prototype.charCodeAt()", "String.prototype.charCodeAt(<var>index</var>)")}}
  - : `index` で与えられた位置の文字の UTF-16 の値を示す数を返します。
- {{jsxref("String.prototype.codePointAt()", "String.prototype.codePointAt(<var>pos</var>)")}}
  - : `pos` で指定された位置から始まる UTF-16 エンコードされた際のコードポイントの、コードポイントの値である正の整数を返します。
- {{jsxref("String.prototype.concat()", "String.prototype.concat(<var>str </var>[, ...<var>strN </var>])")}}
  - : 2 つ (以上) の文字列を連結し、新しい文字列を返します。
- {{jsxref("String.prototype.includes()", "String.prototype.includes(<var>searchString</var> [, <var>position</var>])")}}
  - : 文字列中に `searchString` が含まれているかを返します。
- {{jsxref("String.prototype.endsWith()", "String.prototype.endsWith(<var>searchString</var> [, <var>length</var>])")}}
  - : 文字列の末尾に指定された文字列 `searchString` が含まれているかを返します。
- {{jsxref("String.prototype.indexOf()", "String.prototype.indexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}
  - : 呼び出す {{jsxref("String")}} オブジェクト中で、 `searchValue` が最初に現れる位置を返します。見つからなかった場合は `-1` を返します。
- {{jsxref("String.prototype.lastIndexOf()", "String.prototype.lastIndexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}
  - : 呼び出す {{jsxref("String")}} オブジェクト中で、 `searchValue` が最後に現れる位置を返します。見つからない場合は `-1` を返します。
- {{jsxref("String.prototype.localeCompare()", "String.prototype.localeCompare(<var>compareString</var> [, <var>locales</var> [, <var>options</var>]])")}}
  - : 参照文字列 `compareString` が、並べ替え順において、与えられた文字列の前になるか後になるか、あるいは、同じかどうかを示す数値を返します。
- {{jsxref("String.prototype.match()", "String.prototype.match(<var>regexp</var>)")}}
  - : 文字列に対して正規表現 `regexp` を一致させるために使用されます。
- {{jsxref("String.prototype.matchAll()", "String.prototype.matchAll(<var>regexp</var>)")}}
  - : `regexp` が一致するものすべてのイテレーターを返します。
- {{jsxref("String.prototype.normalize()", "String.prototype.normalize([<var>form</var>])")}}
  - : 呼び出された文字列の値の Unicode 正規化形式を返します。
- {{jsxref("String.prototype.padEnd()", "String.prototype.padEnd(<var>targetLength</var> [, <var>padString</var>])")}}
  - : 現在の文字列の末尾から指定された文字列で埋めた、長さ `targetLength` 文字の新たな文字列を返します。
- {{jsxref("String.prototype.padStart()", "String.prototype.padStart(<var>targetLength</var> [, <var>padString</var>])")}}
  - : 現在の文字列の先頭から指定した文字列で埋めた、長さ `targetLength` 文字の新たな文字列を作成します。
- {{jsxref("String.prototype.repeat()", "String.prototype.repeat(<var>count</var>)")}}
  - : オブジェクトの要素を `count` 回繰り返した文字列を返します。
- {{jsxref("String.prototype.replace()" , "String.prototype.replace(<var>searchFor</var>, <var>replaceWith</var>)")}}
  - : `searchFor` が現れたところを `replaceWith` で置換するために使用します。 `searchFor` は文字列または正規表現であり、 `replaceWith` は文字列または関数です。
- {{jsxref("String.prototype.replaceAll()" , "String.prototype.replaceAll(<var>searchFor</var>, <var>replaceWith</var>)")}}
  - : `searchFor` が現れたところすべてを `replaceWith` で置換するために使用します。 `searchFor` は文字列または正規表現であり、 `replaceWith` は文字列または関数です。
- {{jsxref("String.prototype.search()", "String.prototype.search(<var>regexp</var>)")}}
  - : 正規表現 `regexp` と呼び出された文字列が一致するところを検索します。
- {{jsxref("String.prototype.slice()", "String.prototype.slice(<var>beginIndex</var>[, <var>endIndex</var>])")}}
  - : 文字列の一区間を取り出し、新しい文字列を返します。
- {{jsxref("String.prototype.split()", "String.prototype.split([<var>sep</var> [, <var>limit</var>] ])")}}
  - : 呼び出した文字列を、部分文字列 `sep` が現れるところで分割し、文字列の配列を生成して返します。
- {{jsxref("String.prototype.startsWith()", "String.prototype.startsWith(<var>searchString</var> [, <var>length</var>])")}}
  - : 呼び出した文字列が文字列 `searchString` で開始されているかを判断します。
- {{jsxref("String.prototype.substr()")}}
  - : 文字列において、指定された位置から指定された文字数の文字を返します。
- {{jsxref("String.prototype.substring()", "String.prototype.substring(<var>indexStart</var> [, <var>indexEnd</var>])")}}
  - : 呼び出した文字列の指定された位置以降 (または区間) にある文字が入った新しい文字列を返します。
- {{jsxref("String.prototype.toLocaleLowerCase()", "String.prototype.toLocaleLowerCase( [<var>locale</var>, ...<var>locales</var>])")}}

  - : 文字列内の文字が、現在のロケールに沿って小文字に変換されます。

    ほとんどの言語では、これは {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} と同じものを返します。

- {{jsxref("String.prototype.toLocaleUpperCase()", "String.prototype.toLocaleUpperCase( [<var>locale</var>, ...<var>locales</var>])")}}

  - : 文字列内の文字が、現在のロケールに沿って大文字に変換されます。

    ほとんどの言語では、これは {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} と同じものを返します。

- {{jsxref("String.prototype.toLowerCase()")}}
  - : 小文字に変換された文字列の値を呼び出して返します。
- {{jsxref("String.prototype.toString()")}}
  - : 指定されたオブジェクトの文字列を返します。{{jsxref("Object.prototype.toString()")}} メソッドを上書きします。
- {{jsxref("String.prototype.toUpperCase()")}}
  - : 大文字に変換された文字列の値を呼び出して返します。
- {{jsxref("String.prototype.trim()")}}
  - : 文字列の先頭と末尾にある空白を削除します。 ECMAScript 5 標準の一部です。
- {{jsxref("String.prototype.trimStart()")}}
  - : 文字列の先頭にある空白を削除します。
- {{jsxref("String.prototype.trimEnd()")}}
  - : 文字列の末尾にある空白を削除します。
- {{jsxref("String.prototype.valueOf()")}}
  - : 指定されたオブジェクトのプリミティブ値を返します。 {{jsxref("Object.prototype.valueOf()")}} メソッドを上書きします。
- {{jsxref("String.prototype.@@iterator()")}}
  - : 文字列値のコードポイントを反復処理し、文字列値として各コードポイントを返す、新しい `Iterator` オブジェクトを返します。

## HTML ラッパーメソッド

> **メモ:** **非推奨です。これらのメソッドは避けてください。**
>
> 以下のメソッドは、それぞれ、特定の HTML タグでラップされた文字列のコピーを返します。

- {{jsxref("String.prototype.anchor()")}}
  - : {{htmlattrxref("name", "a", "&lt;a name=\"name\"&gt;")}} (ハイパーテキストのターゲット)
- {{jsxref("String.prototype.big()")}}
  - : {{HTMLElement("big")}}
- {{jsxref("String.prototype.blink()")}}
  - : {{HTMLElement("blink")}}
- {{jsxref("String.prototype.bold()")}}
  - : {{HTMLElement("b")}}
- {{jsxref("String.prototype.fixed()")}}
  - : {{HTMLElement("tt")}}
- {{jsxref("String.prototype.fontcolor()")}}
  - : {{htmlattrxref("color", "font", "&lt;font color=\"color\"&gt;")}}
- {{jsxref("String.prototype.fontsize()")}}
  - : {{htmlattrxref("size", "font", "&lt;font size=\"size\"&gt;")}}
- {{jsxref("String.prototype.italics()")}}
  - : {{HTMLElement("i")}}
- {{jsxref("String.prototype.link()")}}
  - : {{htmlattrxref("href", "a", "&lt;a href=\"url\"&gt;")}} (URL へのリンク)
- {{jsxref("String.prototype.small()")}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}}
  - : {{HTMLElement("sup")}}

## 例

### 文字列変換

`String` を使用すると、 {{jsxref("String.prototype.toString()", "toString()")}} よりも信頼性の高い代替手段となり、 {{jsxref("null")}}, {{jsxref("undefined")}}, {{jsxref("Symbol", "symbols")}} に対して使用することもできます。

```js
let outputStrings = []
for (let i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.String")}}

## 関連情報

- [JavaScript ガイドのテキスト処理](/ja/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("RegExp")}}
- {{domxref("DOMString")}}
- [`StringView` — 型付き配列に基づいた C 風の文字列の表現](/ja/Add-ons/Code_snippets/StringView)
- [バイナリ文字列](/ja/docs/Web/API/DOMString/Binary)
