---
title: JavaScript のデータ型とデータ構造
slug: Web/JavaScript/Data_structures
l10n:
  sourceCommit: 97ad54b6eb1427c994ca15cae352850b71b154aa
---

{{jsSidebar("More")}}

プログラミング言語には、どれにも組み込みデータ構造がありますが、ふつうは言語ごとに異なります。この記事では、JavaScript で使用可能な組み込みデータ構造の一覧と、他のデータ構造の構築にも使えるように、それらがどのような性質を持ち合わせているかについて述べることにします。

[言語概要](/ja/docs/Web/JavaScript/Language_Overview)では、一般的なデータ型を同様にまとめていますが、もっと他の言語との比較も行っています。

## 動的かつ弱い型付け

JavaScript は[動的](https://ja.wikipedia.org/wiki/動的プログラミング言語)言語であり、[動的型付け](https://ja.wikipedia.org/wiki/動的型付け)の言語です。JavaScript では、変数が直接的に特定のデータ型に関連付けられているわけではなく、どの変数にもあらゆる型の値を代入（および再代入）することができます。

```js
let foo = 42; // foo は数値型になった
foo = "bar"; // foo は文字列型になった
foo = true; // foo は論理型になった
```

JavaScriptは[弱い型付け](https://en.wikipedia.org/wiki/Strong_and_weak_typing)の言語でもあります。これは、処理に不一致の型が含まれる場合、型エラーを発生させるのではなく、暗黙の型変換を可能にすることを意味しています。

```js
const foo = 42; // foo は数値型
const result = foo + "1"; // JavaScript は、foo を文字列に変換し、他のオペランドと連結することができます
console.log(result); // 421
```

暗黙の型変換はとても便利ですが、開発者が変換を意図していなかったり、他の方向への変換（例えば、数値から文字列ではなく文字列から数値）を意図していた場合、足かせになる可能性があります。[シンボル](#シンボル型)と[長整数](#長整数型)については、JavaScript は意図的に特定の暗黙の型変換を禁止してきました。

## プリミティブ値

[オブジェクト](#オブジェクト)を除くすべての型は、言語の最下層で直接表現される[不変](/ja/docs/Glossary/Immutable)値を定義しています。これらの型の値を _プリミティブ値_ と呼びます。

[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を除くすべてのプリミティブ型は、[`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof) 演算子で確認することができます。`typeof null` は `"object"` を返すので、`null` であることを確認するには `=== null` を使用しなければなりません。

[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) と [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) を除くすべてのプリミティブ型には、対応するオブジェクトラッパー型があり、そのオブジェクトはプリミティブ値の操作を行うために有用なメソッドを提供しています。例えば、[`Number`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number) オブジェクトは [`toExponential()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) などのメソッドを提供しています。プリミティブ値に対してプロパティでアクセスすると、JavaScript は自動的に値を対応するラッパーオブジェクトにラップし、代わりにそのオブジェクトのプロパティにアクセスします。しかし、`null` や `undefined` のプロパティにアクセスすると `TypeError` 例外が発生するため、[オプショナルチェーン](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)演算子を導入する必要があります。

| 型                            | `typeof` の返値 | オブジェクトラッパー  |
| ----------------------------- | --------------- | --------------------- |
| [Null 型](#null_型)           | `"object"`      | なし                  |
| [Undefined 型](#undefined_型) | `"undefined"`   | なし                  |
| [論理型](#論理型)             | `"boolean"`     | {{jsxref("Boolean")}} |
| [数値型](#数値型)             | `"number"`      | {{jsxref("Number")}}  |
| [長整数型](#長整数型)         | `"bigint"`      | {{jsxref("BigInt")}}  |
| [文字列型](#文字列型)         | `"string"`      | {{jsxref("String")}}  |
| [シンボル型](#シンボル型)     | `"symbol"`      | {{jsxref("Symbol")}}  |

オブジェクトラッパークラスのリファレンスページには、プリミティブ型そのものの意味づけの詳細な説明だけでなく、それぞれの型で利用できるメソッドやプロパティの詳細な情報が掲載されています。

### Null 型

Null 型には、値が [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の 1 つしかありません。

### Undefined 型

Undefined 型には、値が [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) の 1 つしかありません。

概念的には、`undefined` は _値_ がないことを示し、`null` は _オブジェクト_ がないことを示します（[`typeof null === "object"`](/ja/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) であることの説明にもなるでしょう）。言語では通常、値がない場合は `undefined` が既定値となります。

- 値がない [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文 (`return;`) は、暗黙的に `undefined` を返します。
- 存在しない[オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object) プロパティ (`obj.iDontExist`) にアクセスすると `undefined` が返されます。
- 初期化を伴わない変数宣言 (`let x;`) は、暗黙的にその変数を `undefined` に初期化します。
- {{jsxref("Array.prototype.find()")}} や {{jsxref("Map.prototype.get()")}} など、多くのメソッドは要素が見つからないと `undefined` を返します。

コア言語では、`null` が使用される頻度はかなり低くなっています。最も重要な場所は、[プロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)の終わりです。その後、{{jsxref("Object.getPrototypeOf()")}}、{{jsxref("Object.create()")}} など、プロトタイプとやりとりするメソッドは `undefined` に代わり `null` を受け入れるか返します。

`null` は[キーワード](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#キーワード)ですが、`undefined` は通常の[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)で、たまたまグローバルプロパティであると見なされます。実際には、`undefined` は再定義されたり、シャドウ化されたりすることはないので、この違いは小さいです。

### 論理型

論理型 ({{jsxref("Boolean")}}) は論理の状態を表すもので、 `true` と `false` の 2 つの値があります。

論理値は通常、[三項演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)、[`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else)、[`while`](/ja/docs/Web/JavaScript/Reference/Statements/while) などの条件操作に用いられます。

### 数値型

数値型 ({{jsxref("Number")}}) は [IEEE 754 の倍精度浮動小数点形式の値](https://ja.wikipedia.org/wiki/倍精度浮動小数点数)です。2<sup>-1074</sup> ({{jsxref("Number.MIN_VALUE")}}) から 2<sup>1024</sup> ({{jsxref("Number.MAX_VALUE")}}) までの正の浮動小数点数の値が格納できるようになっていますが、安全に格納できるのは -(2<sup>53</sup> − 1) ({{jsxref("Number.MIN_SAFE_INTEGER")}}) から 2<sup>53</sup> − 1 ({{jsxref("Number.MAX_SAFE_INTEGER")}}) の範囲です。この範囲を外れると、JavaScript は整数を安全に表現できなくなり、代わりに倍精度浮動小数点数の近似値で表現されます。数値が安全な整数の範囲内かどうかは {{jsxref("Number.isSafeInteger()")}} を用いて調べることができます。

±(2<sup>-1074</sup> to 2<sup>1024</sup>) の範囲を外れた値は、自動的に次のように変換されます。

- {{jsxref("Number.MAX_VALUE")}} より大きな正の数は `+Infinity` に変換されます。
- {{jsxref("Number.MIN_VALUE")}} より小さな正の数は `+0` に変換されます。
- -{{jsxref("Number.MAX_VALUE")}} より小さな負の数は `-Infinity` に変換されます。
- -{{jsxref("Number.MIN_VALUE")}} より大きな負の数は `-0` に変換されます。

`+Infinity` と `-Infinity` は数学的な無限大と同じような振る舞いをしますが、若干の違いがあります。詳しくは {{jsxref("Number.POSITIVE_INFINITY")}} と {{jsxref("Number.NEGATIVE_INFINITY")}} を参照してください．

数値型には、複数の表現を持つ値が1つだけあります。`0` は `-0` と `+0` の両方で表します（`0` は `+0` の別名です）。実際には、異なる表現にほとんど違いはありません。例えば、`+0 === -0` は `true` です。ただし、ゼロで割ったときには気づくことができるようになっています。

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

{{jsxref("NaN")}} ("**N**not **a** **N**umber") は、特殊な数値の一種で、演算操作の結果が数値として発生しない場合によく遭遇します。また、JavaScript で唯一、それ自身と等しくない値でもあります。

数値は概念的には「数学的な値」であり、常に暗黙のうちに浮動小数点`でエンコードされていますが、JavaScriptでは[ビット演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#ビット演算子)を提供しています。ビット演算子を運営する場合、最初の数値は 32 ビット整数に変換されます。

> **メモ:** ビット演算子で[ビットマスク](https://ja.wikipedia.org/wiki/マスク_%28情報工学%29)を使用すれば、 1 つの数値で複数の論理値を表現することも可能ですが、 JavaScript は（論理型の配列や名前付きプロパティに論理値が割り当てられたオブジェクトのような）論理値の集合を表現する手段を提供しているため、この行いは悪い習慣として見なされています。ビットマスクはコードの可読性、わかりやすさ、保守性を大きく損ないます。

ローカルストレージの制限に対処しようとするときや、極端な用途（ネットワーク上の各ビットがカウントされる場合など）のように、非常に制約された環境では、このような技術を使用する必要がある場合があります。この技術は、サイズを最適化するために導ける最後の手段である場合にのみ考えることができます。

### 長整数型

長整数型 ({{jsxref("BigInt")}}) は、任意の精度で整数を表現できる JavaScript の数値プリミティブです。長整数型を使えば、数値型で扱うことができる安全な整数の限界 ({{jsxref("Number.MAX_SAFE_INTEGER")}}) を超える、大きな整数を安全に格納して操作することができます。

長整数型は、整数の末尾に `n` を追加するか、 [`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 関数を呼び出すことで作成します。

この例は、{{jsxref("Number.MAX_SAFE_INTEGER")}} をインクリメントすると期待される結果が返ってくることを示しています。

```js
// 長整数型
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false。9007199254740992n と 9007199254740993n は等しくない

// 数値型
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true。両方とも 9007199254740992
```

長整数型は、整数型と同じように `+`, `*`, `-`, `**`, `%` などの演算子を使用することができます。唯一使えないものは [`>>>`](/ja/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) です。長整数型は数値型と数学的な値が同じであっても[厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)にはなりませんが、[等価](/ja/docs/Web/JavaScript/Reference/Operators/Equality)にはなります。

長整数値は、常に複数の値より正確であるわけでも、常に正確でないわけでもありません。長整数は小数値を表すことはできませんが、大きな整数をより正確に表すことができるからです。どちらの種類も他の種類を内包しておらず、相互に置換可能なものではありません。算術式で長整数値を通常の数値と混合した場合、または、[暗黙的に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)しようとした場合、 {{jsxref("TypeError")}} が発生します。

### 文字列型

文字列型 ({{jsxref("String")}}) は、テキストデータを表し、[UTF-16 コード単位](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_codepoints_and_grapheme_cluster) を表す 16 ビット符号なし整数値のシーケンスとしてエンコードさます。文字列の各要素は、文字列の中の位置を占めます。最初の要素は位置 `0` にあり、次の要素は位置 `1` にある、という具合になります。文字列の [length](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length) は、その中の UTF-16 コード単位の個数で、実際の Unicode 文字数とは異なる場合があります。詳細は [`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_codepoints_and_grapheme_clusters) を参照してください。

JavaScriptの文字列は不変です。つまり、一度文字列が作成されると、それを変更することはできません。文字列メソッドは、現在の文字列の内容に基づいて新しい文字列を作成します。例えば、次のような場面です。

- [`substring()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/substring) を使用して元の文字列の部分文字列を作成する。
- 2 つの文字列を、連結演算子 (`+`) または [`concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/concat) を用いて連結する。

#### 「文字列に型付けした」コードに注意！

複雑なデータを表現するために文字列を使用したい思うこともあるでしょう。これには短期的なメリットがあります。

- 結合することで、複合文字列を簡単に作成できます。
- 文字列はデバッグしやすいです（出力される情報は常に文字列に含まれているものです）。
- 文字列は多くの API（[入力フィールド](/ja/docs/Web/API/HTMLInputElement)、[ローカルストレージ](/ja/docs/Web/API/Web_Storage_API)の値、 [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) の `responseText` を使用したレスポンス、など）において共通分母であり、文字列だけで作業したいという誘惑に駆られることがあります。

規則さえあれば、どのようなデータ構造でも文字列で表現することが可能ですが、これは良い考えとは言えません。例えば、区切り文字を使用することでリストを模倣することができますが（JavaScript の配列の方が適しています）、残念なことに区切り文字がリストの要素で使用されてしまった場合、リストが壊れてしまいます。エスケープした文字を使用することでこの問題に対処することは可能ですが、その規則をすべてに用意する必要がある上、不必要なメンテナンスの負担を生み出します。

文字列はテキストデータには向いていますが、複雑なデータを表す場合は文字列を解釈し、適切な抽象化を用いる必要があります。

### シンボル型

シンボル ({{jsxref("Symbol")}}) は**一意**で**不変**のプリミティブ値であり、オブジェクトのプロパティのキーとして使用することができます。一部のプログラミング言語では、「アトム」と呼ばれています。シンボルの目的は、他のコードのキーと衝突しないことが保証された固有のプロパティキーを作成することです。

## オブジェクト

コンピューター科学において、オブジェクトは[識別子](/ja/docs/Glossary/Identifier)によって参照可能なメモリー内の値です。JavaScript では、オブジェクトは唯一の[変更可能な](/ja/docs/Glossary/Mutable)値です。[関数](/ja/docs/Web/JavaScript/Reference/Functions)は、実際には、_callable_ という追加の機能を持つオブジェクトでもあります。

### プロパティ

JavaScript では、オブジェクトはプロパティの集合として見ることができます。[オブジェクトリテラル構文](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#オブジェクトリテラル)は、初期化される限定された一連のプロパティです。その後でプロパティは追加したり削除したりすることができます。プロパティのキーは、[文字列](#文字列型)または[シンボル](#シンボル型)のどちらかです。プロパティの値は、他のオブジェクトを含め、どのような種類の値でもよいので、複雑なデータ構造を構築することが可能です。

オブジェクトプロパティには、[データプロパティ](#データプロパティ)と[アクセサープロパティ](#アクセサープロパティ)の 2 種類があります。それぞれのプロパティには、対応する属性があります。それぞれの属性は、JavaScript エンジンが内部でアクセスしますが、{{jsxref("Object.defineProperty()")}} で設定したり、{{jsxref("Object.getOwnPropertyDescriptor()")}} で読み取ったりすることができます。様々なニュアンスについては、{{jsxref("Object.defineProperty()")}} のページで詳しく解説しています。

#### データプロパティ

データプロパティは、キーと値を関連付けます。以下の属性で記述することができます。

- `value`
  - : プロパティの get アクセスによって取得される値です。JavaScript の任意の値を指定することができます。
- `writable`
  - : プロパティに代入することで変更可能かどうかを示す論理値です。
- `enumerable`
  - : プロパティが [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループで列挙可能かどうかを示す論理値です。列挙可能性が他の機能や構文とどのようにやり取りするかについては、[プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)も参照してください。
- `configurable`
  - : 論理値で、プロパティの削除、アクセサプロパティへの変更、属性の変更が可能かどうかを示します。

#### アクセサープロパティ

キーを、値を取り出したり保存したりするための 1 つまたは 2 つのアクセサー関数 (`get` および `set`) と関連づけるものです。

> **メモ:** アクセサー _プロパティ_ であり、アクセサー _メソッド_ ではないことを認識することが重要です。関数を値として用いることで、JavaScript オブジェクトにクラスのようなアクセサーを表すことができますが、それはオブジェクトをクラスにするわけではありません。

アクセサープロパティには、以下の属性があります。

- `get`
  - : 空の引数リストで呼び出される関数で、値への取得アクセスが行われるたびに、プロパティ値を取得します。[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)も参照してください。`undefined` にすることができます。
- `set`
  - : 割り当てる値を格納した引数で呼び出される関数です。指定したプロパティを変更しようとしたときに実行されます。[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)も参照してください。`undefined` にすることができます。
- `enumerable`
  - : プロパティが [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループで列挙可能かどうかを示す論理値です。列挙可能性が他の機能や構文とどのようにやり取りするかについては、[プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)も参照してください。
- `configurable`
  - : 論理値で、プロパティの削除、アクセサプロパティへの変更、属性の変更が可能かどうかを示します。

オブジェクトの[プロトタイプ](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)は、他のオブジェクトや `null` を指しています。これは概念的にはオブジェクトの隠しプロパティで、一般的には `[[Prototype]]` として表されます。オブジェクトの `[[Prototype]]` のプロパティは、オブジェクト自身にもアクセスすることができます。

オブジェクトはアドホックなキーと値のペアであるため、マップとしてよく使用されます。しかし、人間工学、セキュリティ、パフォーマンスの課題がある場合があります。任意のデータを格納するためには、代わりに {{jsxref("Map")}} を使用してください。[`Map` のリファレンス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map#object_と_map_の比較)には、キーと値の関連性を格納するためのプレーンオブジェクトとマップの間のメリットとデメリットについてより詳しい議論が含まれています。

### 日付

日付を表現する場合は、JavaScript に組み込まれた [`Date`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) ユーティリティを使用するのが最適です。

### 添字付きコレクション: 配列および型付き配列

[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)は、整数値をキーにするプロパティと `length` プロパティの間に特殊な関係の存在する、標準オブジェクトです。

さらに、配列は `Array.prototype` を継承しており、配列を操作するための便利なメソッドを提供しています。例えば、 [`indexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) (配列中の値の検索) や [`push()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push) (配列への要素の追加) などです。これにより、配列はリストや集合を表現するのに最適な候補となります。

[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)は、基盤となるバイナリーデータバッファーの配列風のビューを表現し、配列と同様の意味づけを持つメソッドを数多く提供します。「型付き配列」は `Int8Array`、`Float32Array` などの様々なデータ構造の総称である。より詳しい情報は[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)のページを調べてください。型付き配列は、よく {{jsxref("ArrayBuffer")}} や {{jsxref("DataView")}} と併用して使用します。

### キー付きコレクション: Map, Set, WeakMap, WeakSet

これらのデータ構造は、オブジェクトへの参照をキーとして扱います。{{jsxref("Set")}} と {{jsxref("WeakSet")}} はオブジェクトの集合を表し、{{jsxref("Map")}} と {{jsxref("WeakMap")}} はオブジェクトに値を関連付けます。

自分で `Map` や `Set` を実装することもできます。しかし、オブジェクトは（例えば `<` "less than" の意味で）比較することができず、エンジンもオブジェクトのハッシュ関数を公開していないので、検索性能は必然的に線形になります。これらのネイティブ実装（`WeakMap` を含む）の検索性能は、一定時間に対してほぼ対数となります。

通常、DOM ノードにデータをバインドするには、オブジェクトに直接プロパティを設定するか、 `data-*` 属性を使用します。これらの手法は同じコンテクストで実行されるあらゆるスクリプトからデータの利用が可能であるため、不都合な面を持ち合わせていました。 `Map` や `WeakMap` を使うと、オブジェクトへの*プライベート*なデータバインドを簡単に行うことができます。

`WeakMap` と `WeakSet` はオブジェクトのキーしか使用できず、キーが集合に残っていてもガベージコレクションの対象とすることができます。これらは、[メモリー使用の最適化](/ja/docs/Web/JavaScript/Memory_Management#メモリー管理を支援するデータ構造)に固有の仕様として使用します。

### 構造化データ: JSON

JSON (**J**ava**S**cript **O**bject **N**otation) は JavaScript から派生した、汎用データ構造をもつ軽量なデータ交換形式であり、多くのプログラミング言語で使用されています。JSON は、異なる環境や言語間でも移行可能な普遍的なデータ構造を構築します。詳しくは {{jsxref("JSON")}} を参照してください。

### 標準ライブラリーに含まれる他のオブジェクト

JavaScript には組み込みオブジェクトの標準ライブラリーがあります。オブジェクトの詳細については、[リファレンス](/ja/docs/Web/JavaScript/Reference/Global_Objects)を参照してください。

## 型変換

前述のように、JavaScript は[弱い型付け](#動的かつ弱い型付け)言語です。つまり、ある型の値を使用する際に、別の型が期待される場合でも、言語が適切な型に変換してくれる場合が多いのです。そのために、JavaScript では、いくつかの変換ルールを定義しています。

### プリミティブ変換

[プリミティブ変換](https://tc39.es/ecma262/#sec-toprimitive)処理は、プリミティブ値が期待されるものの、実際の入力する種類に強い希望がない場合に使用します。[文字列](#文字列型)、[数値](#数値型)、[長整数](#長整数型)が同じように受け入れられる場合がほとんどです。例を示します。

- [`Date()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) コンストラクターは、`Date` インスタンスでない引数を 1 つ受け取ります。文字列は日付文字列を表し、数値はタイムスタンプを表します。
- [`+`](/ja/docs/Web/JavaScript/Reference/Operators/Addition) 演算子は、一方のオペランドが文字列の場合、文字列の連結を行い、それ以外の場合は数値の加算を行います。
- [`==`](/ja/docs/Web/JavaScript/Reference/Operators/Equality) 演算子は、オペランドの一方がプリミティブで、もう一方がオブジェクトの場合、オブジェクトは入力する種類が決まっていないプリミティブ値に変換されます。

この操作は、値が既にプリミティブである場合、変換を行いません。オブジェクトは、その [`[@@toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) （`"default"` をヒントとして）、`valueOf()`、`toString()` の順にメソッドが呼び出されてプリミティブに変換されます。プリミティブ変換では `toString()` の前に `valueOf()` が呼び出されますが、これは[数値変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値変換)の動作と同様であり、[文字列変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)とは異なっていることに注意ください。

`[@@toPrimitive]()` メソッドは、存在する場合、プリミティブを返す必要があります。オブジェクトを返すと {{jsxref("TypeError")}} になります。`valueOf()` と `toString()` については、一方がオブジェクトを返す場合、その返値は無視され、代わりにもう一方の返値が使用されます。どちらも存在しなかった場合、またはどちらもプリミティブ値を返さなかった場合は {{jsxref("TypeError")}} が発生します。例として、以下のコードで説明します。

```js
console.log({} + []); // "[object Object]"
```

`{}` にも `[]` にも `[@@toPrimitive]()` メソッドはありません。`{}` と `[]` は両方とも `valueOf()` を {{jsxref("Object.prototype.valueOf")}} から継承しており、これはオブジェクト自体を返します。返値がオブジェクトなので、これは無視されます。従って、代わりに `toString()` が呼び出されます。 [`{}.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) は `"[object Object]"` を返し、一方 [`[].toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) っは `""` を返すので、結果はこれらを結合した `"[object Object]"` となります。

プリミティブ型に変換する場合は、常に `[@@toPrimitive]()` メソッドが優先されます。プリミティブ型の変換は、一般に `valueOf()` が優先的に呼び出されるため、数値の変換と同じように振る舞います。しかし、独自の `[@@toPrimitive]()` メソッドを持つオブジェクトは、任意のプリミティブ型を返すことができます。組み込みオブジェクトの中で、{{jsxref("Date")}} と {{jsxref("Symbol")}} オブジェクトのみが、`[@@toPrimitive]()` メソッドを上書きします。[`Date.prototype[@@toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive) は `"default"` ヒントを `"string"` であるかのように扱い、[`Symbol. prototype[@@toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive) はヒントを無視し、常にシンボルを返します。

### 数値変換

数値の型には[数値型](#数値型)と[長整数型](#長整数型)の 2 種類があります。言語が数値か長整数かを具体的に指定する場合もあります（{{jsxref("Array.prototype.slice()")}} は添字が数値でなければならないなど）。他にも、どちらかを許容し、オペランドの種類によって異なる処理を行う場合もあります。他にも暗黙の変換を許さない厳密な強制処理については、[数値型への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値型への変換)や[長整数型への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt#長整数型への変換)を参照して下さい。

数値変換は、[数値変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値型への変換)とほぼ同じですが、長整数の場合はは {{jsxref("TypeError")}} を発生させずにそのまま返す点が異なります。すべての算術演算子は、数値型と長整数型の両方がオーバーロードされているため、数値変換が行わわれます。唯一の例外は[単項プラス](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)で、これは常に数値型への変換を行います。

### その他の変換

すべてのデータ型には、Null、Undefined、シンボルを除き、それぞれの変換処理があります。詳しくは、[文字列への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)、[論理型への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)、[オブジェクトへの変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion)を参照してください。

お気づきかもしれませんが、オブジェクトをプリミティブに変換する経路は 3 つあります。

- [プリミティブ変換](#プリミティブ変換): `[@@toPrimitive]("default")` → `valueOf()` → `toString()`
- [数値変換](#数値変換)、[数値型への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)、[長整数型への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion): `[@@toPrimitive]("number")` → `valueOf()` → `toString()`
- [文字列変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion): `[@@toPrimitive]("string")` → `toString()` → `valueOf()`

すべての場合において、`[@@toPrimitive]()` が存在する場合は、呼び出し可能でプリミティブを返す必要があり、`valueOf` や `toString` が呼び出し可能でないかオブジェクトを返さない場合は無視されます。この処理の終わりには、成功すれば結果がプリミティブであることが保証されます。結果として得られるプリミティブは、コンテキストに応じてさらなる変換が行われることがあります。

## 関連情報

- [JavaScript Data Structures and Algorithms by Oleksii Trekhleb](https://github.com/trekhleb/javascript-algorithms)
- [Nicholas Zakas による、JavaScript における一般的なデータ構造とアルゴリズムのまとめ](https://github.com/humanwhocodes/computer-science-in-javascript)
- [Search Tre(i)es implemented in JavaScript](https://github.com/monmohan/dsjslib)
- [Data Types and Values in the ECMAScript specification](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)
