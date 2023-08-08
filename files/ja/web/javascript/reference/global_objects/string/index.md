---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{JSRef}}

**`String`** オブジェクトは文字の並びを表したり操作したりするために使用されます。

## 解説

文字列は、テキスト形式で表現可能なデータを保持するのに便利です。最もよく使われる操作として、文字列の長さをチェックする {{jsxref("String/length", "length")}} プロパティ、 [文字列に対する + および += 演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#文字列演算子)を用いた文字列の連結、文字列の中の部分文字列の存在や位置をチェックする {{jsxref("String.prototype.indexOf()", "indexOf()")}} メソッド、部分文字列を取り出す {{jsxref("String.prototype.substring()", "substring()")}} メソッドが挙げられます。

### 文字列の生成

文字列は文字列リテラルからプリミティブとして、または {{jsxref("String/String", "String()")}} コンストラクターを使用してオブジェクトとして生成することができます。

```js-nolint
const string1 = "文字列プリミティブ";
const string2 = 'これも文字列プリミティブ';
const string3 = `別な文字列プリミティブ`;
```

```js
const string4 = new String("文字列オブジェクト");
```

文字列プリミティブと文字列オブジェクトは多くの動作を共有していますが、その他に重要な相違点と注意点があります。
下記の「[文字列プリミティブと String オブジェクト](#文字列プリミティブと_string_オブジェクト)」を参照してください。

文字列リテラルは単一引用符または二重引用符を使用して指定することができ、どちらでも同様に扱われますが、逆引用符文字 <kbd>`</kbd> を使用することもできます。最後の形は[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)を指定しています。この形式では式を補完することができます。文字列リテラルの構文については、[字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#文字列リテラル)を参照してください。

### 文字へのアクセス

文字列内の個々の文字へのアクセス方法には、2 通りの方法があります。そのひとつは {{jsxref("String.prototype.charAt()", "charAt()")}} メソッドです。

```js
"ねこ".charAt(1); // "こ" が返される
```

他にも、文字列を配列風のオブジェクトとして扱い、個々の文字を数値インデックスに対応させる方法もあります。

```js
"ねこ"[1]; // "こ" が返される。
```

ブラケット記法を使用した文字アクセスでは、これらのプロパティに値を設定したり削除したりすることはできません。関連するプロパティを書き込んだり設定したりすることもできません。（より詳細な情報は {{jsxref("Object.defineProperty()")}} を参照してください。）

### 文字列の比較

文字列を比較するには[小なり / 大なり演算子](/ja/docs/Web/JavaScript/Reference/Operators)を用います。

```js
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} は ${b} より小さい`);
} else if (a > b) {
  console.log(`${a} は ${b} より大きい`);
} else {
  console.log(`${a} と ${b} は等しい`);
}
```

なお、すべての比較演算子は、[`===`](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality) および [`==`](/ja/docs/Web/JavaScript/Reference/Operators/Equality) を含め、文字列を大文字小文字を区別して比較します。文字列の大文字小文字を区別せずに比較する一般的な方法は、両方の文字列を同じ種類（大文字または小文字）に変換してから比較することです。

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

[`toUpperCase()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) と [`toLowerCase()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) のどちらで変換するかはほとんど自由ですが、ラテン文字以外に広げると、どちらが完全に堅牢なとは言えません。例えば、ドイツ語の小文字 `ß` と `ss` は `toUpperCase()` によってどちらも `SS` に変換されますが、トルコ語の文字 `ı` は [`toLocaleLowerCase("tr")`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase) を使用しない限り、 `toLowerCase()` によって `I` と等しくない文字として誤って報告されてしまいます。

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

ロケールを意識して大文字と小文字を区別せずに比較するための堅牢な解決策は、{{jsxref("Intl.Collator")}} API を使用するか、文字列の [`localeCompare()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) メソッド（インターフェイスは同じです）を [`sensitivity`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) オプションで `"accent"` または `"base"` に設定します。

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

`localeCompare()` メソッドは `strcmp()` と同様の方法で文字列を比較することができます。ロケールを意識した方法で文字列を並べ替えることができます。

### 文字列プリミティブと String オブジェクト

JavaScript では、 `String` オブジェクトと{{Glossary("Primitive", "プリミティブ文字列")}}は区別されることに注意してください。（{{jsxref("Boolean")}} や {{jsxref("Global_Objects/Number", "Number")}} にも同じことが言えます。）

文字列リテラル（二重引用符または単一引用符で示されます）、および `String` 関数をコンストラクター以外の場面で（すなわち {{jsxref("Operators/new", "new")}} キーワードを使わずに）呼び出した場合はプリミティブの文字列になります。
文字列プリミティブに対してメソッドを呼び出したり、プロパティを参照したりするコンテキストでは、JavaScript は自動的に文字列プリミティブをラップし、ラッパーオブジェクトに対してメソッドを呼び出したり、プロパティを参照したりします。

```js
const strPrim = "foo"; // リテラルは文字列プリミティブ
const strPrim2 = String(1); // 文字列プリミティブ "1" に変換
const strPrim3 = String(true); // 文字列プリミティブ "true" に変換
const strObj = new String(strPrim); // new を付けて String を呼び出すと文字列ラッパーオブジェクトを返す

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
```

> **警告:** `String` をコンストラクターとして使用することはほとんどないでしょう。

プリミティブの文字列と `String` オブジェクトは {{jsxref("Global_Objects/eval", "eval()")}} を使用すると異なる結果となります。 `eval` に渡されたプリミティブは、ソースコードとして扱われます。 `String` オブジェクトは他のオブジェクトと同様に、オブジェクトとしてそのままの文字列を返します。

```js
const s1 = "2 + 2"; // 文字列プリミティブを生成
const s2 = new String("2 + 2"); // String オブジェクトを生成
console.log(eval(s1)); // 数値の 4 を返す
console.log(eval(s2)); // 文字列の "2 + 2" を返す
```

こういった理由から、プリミティブの文字列を期待して実装されたコードは `String` オブジェクトでうまく動作しないことがあります。しかし、一般的にはこれらの違いを考慮しなければならないことはあまりありません。

なお、`String` オブジェクトは {{jsxref("String.prototype.valueOf()", "valueOf()")}} メソッドを用いることで、プリミティブの文字列に変換することができます。

```js
console.log(eval(s2.valueOf())); // 数値の 4 を返す
```

### 文字列変換

文字列を期待する組み込み操作の多くは、最初に引数を文字列に変換します（これが `String` オブジェクトが文字列プリミティブと同じように動作する主な理由です）。[処理](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring)は以下のように要約できます。

- 文字列はそのまま返します。
- [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) は `"undefined"` なります。
- [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) は `"null"` になります。
- `true` は `"true"` に、`false` は `"false"` になります。
- 数値は [`toString(10)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) と同じアルゴリズムで変換されます。
- [長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)は [`toString(10)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) と同じアルゴリズムで変換されます。
- [シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)は {{jsxref("TypeError")}} が発生します。
- オブジェクトは最初に[プリミティブに変換](/ja/docs/Web/JavaScript/Data_structures#primitive_coercion)され、これは [`[@@toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) を（`"string"` をヒントとして）呼び出すことで行われ、次に `toString()`、そして `valueOf()` メソッドがこの順序で呼び出されます。結果のプリミティブはそれから文字列に変換されます。

JavaScript でほぼ同じ効果を得る方法はいくつかあります。

- [テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` は埋め込まれた式に対して、上記で説明した文字列変換と同じ手順を踏みます。
- [`String()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/String) 関数: `String(x)` は `x` を変換するのに同じアルゴリズムを使用しますが、[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)でも {{jsxref("TypeError")}} が発生せず、`"Symbol(description)"` の形で `description` にそのシンボルの[説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)が入ったものを返します。
- [`+` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` はオペランドを文字列ではなくプリミティブに変換します。一部のオブジェクトでは、通常の文字列変換とは完全に異なる動作をします。詳しくは[リファレンスページ](/ja/docs/Web/JavaScript/Reference/Operators/Addition)を参照してください。

用途によっては `` `${x}` `` （組み込みの動作を模倣するため）または `String(x)`（エラーを発生させずにシンボル値を処理するため）を使用したいかもしれませんが、 `"" + x` は使用しないでください。

### UTF-16 文字、Unicode コードポイント、書記素クラスター

文字列は基本的に [UTF-16 コード単位](https://ja.wikipedia.org/wiki/UTF-16)の並びとして表します。UTF-16 エンコーダーでは、すべてのコード単位は正確に 16 ビット長です。つまり、単一の UTF-16 コード単位として表現可能な文字は、最大で 2<sup>16</sup> 個、つまり 65536 通りあります。この文字集合は[基本多言語面 (BMP)](<https://ja.wikipedia.org/wiki/基本多言語面>) と呼ばれ、ラテン語、ギリシャ語、キリル文字のような最も一般的な文字や多くの東アジアの文字を含みます。各コード単位は `u` の文字列の後にちょうど 4 つの 16 進数を続けて書くことができます。

しかし、Unicode の文字集合全体は 65536 よりはるかにずっと大きいのです。追加の文字は UTF-16 でサロゲートペアとして格納されます。これは単一の文字を表す 16 ビットのコード単位のペアです。曖昧さを避けるために、ペアの 2 つの部分は `0xD800` と `0xDFFF` の間でなければならず、これらのコード単位は単一のコード単位の文字をエンコードするためには使用しません。（より正確には、高サロゲートは `0xD800` から `0xDBFF` までの値があり、低サロゲートは `0xDC00` から `0xDFFF` までの値があります）。各 Unicode 文字は、 1 つないし 2 つの UTF-16 コード単位から成っており、Unicode コードポイントとも呼ばれます。各 Unicode コードポイントは文字列の中で `\u{xxxxxx}` と書くことができ、ここで `xxxxxx` は 1-6 桁の 16 進数を表します。

「孤立サロゲート」とは、下記の記述のいずれかを満たす 16 ビットのコード単位です。

- `0xD800` から `0xDBFF` までの範囲（つまり高サロゲート）にあるものの、文字列の最後のコード単位であるか、次のコード単位が低サロゲートではないもの。
- `0xDC00` から `0xDFFF` までの範囲（つまり低サロゲート）にあるものの、文字列の最初のコード単位であるか、前のコード単位が高サロゲートではないもの。

孤立サロゲートは Unicode 文字を表しません。すべて UTF-16 コード単位に基づいて動作するため、ほとんどの JavaScript 組み込みメソッドは正しく扱いますが、他のシステムとやりとりするとき、孤立サロゲートはしばしば有効な値ではありません。例えば、[`encodeURI()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) は孤立サロゲートがあると {{jsxref("URIError")}} が発生します。これは URI エンコーディングが UTF-8 エンコーディングを使用しており、孤立サロゲートに対するエンコーディングを持たないためです。孤立サロゲートを格納しない文字列は _well-formed_ 文字列と呼ばれ、UTF-16 を扱わない関数（`encodeURI()` や {{domxref("TextEncoder")}} など）で使用しても安全です。{{jsxref("String/isWellFormed", "isWellFormed()")}} メソッドで文字列が整形されているか調べたり、{{jsxref("String/toWellFormed", "toWellFormed()")}} メソッドで孤立サロゲートをサニタイズすることができます。

Unicode 文字の上に、書記素クラスターと呼ばれる 1 つの視覚単位として扱われるべき Unicode 文字並びがあります。最も一般的なケースは絵文字で、様々なバリエーションがある絵文字の多くは、実際には複数の絵文字で形成されており、たいていの場合、\<ZWJ> (`U+200D`) 文字で結合されています。

どのレベルの文字を反復処理するのかに注意する必要があります。例えば、[`split("")`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split) は UTF-16 コード単位で分割し、サロゲートペアを区切ります。文字列インデックスも各 UTF-16 コード単位のインデックスを参照します。他にも、[`@@iterator()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) はUnicode コードポイントで反復処理します。書記素クラスターを反復処理するには独自のコードが必要です。

```js
"😄".split(""); // ['\ud83d', '\ude04']; 孤立サロゲートを 2 つに分割

// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// 基本的な "Backhand Index Pointing Right" の絵文字と
// "Dark skin tone" の絵文字に分割

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// "Man" と "Boy" の絵文字を ZWJ で結合

// アメリカの国旗
[..."🇺🇳"]; // [ '🇺', '🇳' ]
// 2 つの "region indicator" 文字である "U" と "N"
// すべての国旗の絵文字は、2 文字の地域識別文字を結合することで構成されている
```

## コンストラクター

- {{jsxref("String/String", "String()")}}
  - : 新しい `String` オブジェクトを生成するために使用します。コンストラクターではなく関数として呼び出されたときは型変換を行うので、普通はより有用です。

## 静的メソッド

- {{jsxref("String.fromCharCode()")}}
  - : 指定された Unicode 値の並びから生成した文字列を返します。
- {{jsxref("String.fromCodePoint()")}}
  - : 指定された Unicode コードポイントの並びから生成した文字列を返します。
- {{jsxref("String.raw()")}}
  - : 生のテンプレート文字列から生成した文字列を返します。

## インスタンスプロパティ

以下のプロパティは `String.prototype` で定義されており、すべての `String` インスタンスで共有されます。

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。文字列インスタンスの場合、初期値は {{jsxref("String/String", "String")}} コンストラクターです。

以下のプロパティはそれぞれの `String` インスタンスに固有のプロパティです。

- {{jsxref("String/length", "length")}}
  - : 文字列の `length` を反映します。読み取り専用です。

## インスタンスメソッド

- {{jsxref("String.prototype.at()")}}
  - : 指定した `index` にある文字（UTF-16 コード単位）を返します。負の整数を受け入れ、その場合は文字列の最後の文字から遡ります。
- {{jsxref("String.prototype.charAt()")}}
  - : `index` で指定された位置の文字（UTF-16 コード単位 1 つ）を返します。
- {{jsxref("String.prototype.charCodeAt()")}}
  - : `index` で指定された位置の文字の UTF-16 コード単位の値を示す数を返します。
- {{jsxref("String.prototype.codePointAt()")}}
  - : `pos` で指定された位置から始まる UTF-16 エンコードされた際のコードポイントの、コードポイントの値である正の整数を返します。
- {{jsxref("String.prototype.concat()")}}
  - : 2 つ（以上）の文字列を連結し、新しい文字列を返します。
- {{jsxref("String.prototype.endsWith()")}}
  - : 文字列が `searchString` の文字列で終わるかどうかを判定します。
- {{jsxref("String.prototype.includes()")}}
  - : 呼び出した文字列に `searchString` が含まれているかを返します。
- {{jsxref("String.prototype.indexOf()")}}
  - : 呼び出す {{jsxref("String")}} オブジェクト内で、`searchValue` が最初に現れる位置を返します。見つからなかった場合は `-1` を返します。
- {{jsxref("String.prototype.isWellFormed()")}}
  - : 文字列に[孤立サロゲート](#utf-16_characters_unicode_code_points_and_grapheme_clusters)が含まれているかどうかを示す論理値を返します。
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : 呼び出した {{jsxref("String")}} オブジェクト内で、`searchValue` が最後に現れる位置を返します。見つからない場合は `-1` を返します。
- {{jsxref("String.prototype.localeCompare()")}}
  - : 参照文字列 `compareString` が、並べ替え順において、与えられた文字列の前になるか後になるか、あるいは、同じかどうかを示す数値を返します。
- {{jsxref("String.prototype.match()")}}
  - : 文字列に対して正規表現 `regexp` を一致させるために使用されます。
- {{jsxref("String.prototype.matchAll()")}}
  - : `regexp` が一致するものすべてのイテレーターを返します。
- {{jsxref("String.prototype.normalize()")}}
  - : 呼び出された文字列の値の Unicode 正規化形式を返します。
- {{jsxref("String.prototype.padEnd()")}}
  - : 現在の文字列の末尾から指定された文字列で埋めた、長さ `targetLength` 文字の新たな文字列を返します。
- {{jsxref("String.prototype.padStart()")}}
  - : 現在の文字列の先頭から指定した文字列で埋めた、長さ `targetLength` 文字の新たな文字列を作成します。
- {{jsxref("String.prototype.repeat()")}}
  - : オブジェクトの要素を `count` 回繰り返した文字列を返します。
- {{jsxref("String.prototype.replace()")}}
  - : `searchFor` が現れたところを `replaceWith` で置換するために使用します。`searchFor` は文字列または正規表現であり、`replaceWith` は文字列または関数です。
- {{jsxref("String.prototype.replaceAll()")}}
  - : `searchFor` が現れたところすべてを `replaceWith` で置換するために使用します。`searchFor` は文字列または正規表現であり、`replaceWith` は文字列または関数です。
- {{jsxref("String.prototype.search()")}}
  - : 正規表現 `regexp` と呼び出された文字列が一致するところを検索します。
- {{jsxref("String.prototype.slice()")}}
  - : 文字列の一区間を取り出し、新しい文字列を返します。
- {{jsxref("String.prototype.split()")}}
  - : 呼び出した文字列を、部分文字列 `sep` が現れるところで分割し、文字列の配列を生成して返します。
- {{jsxref("String.prototype.startsWith()")}}
  - : 呼び出した文字列が文字列 `searchString` で開始されているかを判断します。
- {{jsxref("String.prototype.substr()")}} {{Deprecated_Inline}}
  - : 指定されたインデックスから、指定された文字数だけ文字列の一部を返します。
- {{jsxref("String.prototype.substring()")}}
  - : 呼び出した文字列の指定された位置以降（または区間）にある文字が入った新しい文字列を返します。
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : 文字列内の文字が、現在のロケールに沿って小文字に変換されます。

    ほとんどの言語では、これは {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} と同じものを返します。

- {{jsxref("String.prototype.toLocaleUpperCase()")}}

  - : 文字列内の文字が、現在のロケールに沿って大文字に変換されます。

    ほとんどの言語では、これは {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} と同じものを返します。

- {{jsxref("String.prototype.toLowerCase()")}}
  - : 小文字に変換された文字列の値を呼び出して返します。
- {{jsxref("String.prototype.toString()")}}
  - : 指定されたオブジェクトの文字列を返します。{{jsxref("Object.prototype.toString()")}} メソッドを上書きします。
- {{jsxref("String.prototype.toUpperCase()")}}
  - : 大文字に変換された文字列の値を呼び出して返します。
- {{jsxref("String.prototype.toWellFormed()")}}
  - : この文字列の[孤立サロゲート](#utf-16_文字、unicode_コードポイント、書記素クラスター)をすべて Unicode 置換文字 U+FFFD に置き換えた文字列を返します。
- {{jsxref("String.prototype.trim()")}}
  - : 文字列の先頭と末尾にあるホワイトスペースを削除します。
- {{jsxref("String.prototype.trimEnd()")}}
  - : 文字列の末尾にあるホワイトスペースを削除します。
- {{jsxref("String.prototype.trimStart()")}}
  - : 文字列の先頭にあるホワイトスペースを削除します。
- {{jsxref("String.prototype.valueOf()")}}
  - : 指定されたオブジェクトのプリミティブ値を返します。{{jsxref("Object.prototype.valueOf()")}} メソッドを上書きします。
- [`String.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
  - : 文字列値のコードポイントを反復処理し、文字列値として各コードポイントを返す、新しいイテレーターオブジェクトを返します。

### HTML ラッパーメソッド

> **メモ:** 非推奨です。これらのメソッドは避けてください。
>
> これらはとても古い HTML 標準に基づいており、現在利用できる HTML タグや属性のサブセットしか提供していないため、使用するのには限界があります。多くが今日では非推奨または標準外のマークアップを生成します。さらに、単純な文字列の連結を検証やサニタイズなしに行うため、[`innerHTML`](/ja/docs/Web/API/Element/innerHTML) を使用して直接挿入するとセキュリティ上の脅威となる可能性があります。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model)、例えば [`document.createElement()`](/ja/docs/Web/API/Document/createElement) など使用してください。

- {{jsxref("String.prototype.anchor()")}} {{Deprecated_Inline}}
  - : [`<a name="name">`](/ja/docs/Web/HTML/Element/a#name)（ハイパーテキストのターゲット）
- {{jsxref("String.prototype.big()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("big")}}
- {{jsxref("String.prototype.blink()")}} {{Deprecated_Inline}}
  - : `<blink>`
- {{jsxref("String.prototype.bold()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("b")}}
- {{jsxref("String.prototype.fixed()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("tt")}}
- {{jsxref("String.prototype.fontcolor()")}} {{Deprecated_Inline}}
  - : [`<font color="color">`](/ja/docs/Web/HTML/Element/font#color)
- {{jsxref("String.prototype.fontsize()")}} {{Deprecated_Inline}}
  - : [`<font size="size">`](/ja/docs/Web/HTML/Element/font#size)
- {{jsxref("String.prototype.italics()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("i")}}
- {{jsxref("String.prototype.link()")}} {{Deprecated_Inline}}
  - : [`<a href="url">`](/ja/docs/Web/HTML/Element/a#href)（URL へのリンク）
- {{jsxref("String.prototype.small()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("sup")}}

これらのメソッドは文字列そのものが HTML タグを含むかどうかを調べないので、無効な HTML を作成する可能性があることに注意してください。

```js
"</b>".bold(); // <b></b></b>
```

これらが行う唯一のエスケープは、属性値中の `"` を（{{jsxref("String/anchor", "anchor()")}}、{{jsxref("String/fontcolor", "fontcolor()")}}、{{jsxref("String/fontsize", "fontsize()")}}、{{jsxref("String/link", "link()")}}において）`&quot;` に置き換えることです。

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## 例

### 文字列変換

`String` を使用すると、 {{jsxref("String.prototype.toString()", "toString()")}} よりも信頼性の高い代替手段となり、[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) および {{jsxref("undefined")}} に対して使用することもできます。

```js
const nullVar = null;
nullVar.toString(); // TypeError: nullVar is null
String(nullVar); // "null"

const undefinedVar = undefined;
undefinedVar.toString(); // TypeError: undefinedVar is undefined
String(undefinedVar); // "undefined"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドのテキスト処理](/ja/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("RegExp")}}
