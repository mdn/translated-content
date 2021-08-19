---
title: JavaScript のデータ型とデータ構造
slug: Web/JavaScript/Data_structures
tags:
  - Beginner
  - Guide
  - JavaScript
  - Types
translation_of: Web/JavaScript/Data_structures
---
{{jsSidebar("More")}}

プログラミング言語には、どれにも組み込みデータ構造がありますが、ふつうは言語ごとに異なります。この記事では、JavaScript で使用可能な組み込みデータ構造の一覧と、他のデータ構造の構築にも使えるように、それらがどのような性質を持ち合わせているかについて述べることにします。また可能である場合は、他のプログラミング言語におけるデータ構造との対比も行います。

## 動的型付け

JavaScript は*弱い型付け*あるいは*動的型付け*の言語です。JavaScript では、変数が直接的に特定のデータ型に関連付けられているわけではなく、どの変数にもあらゆる型の値を代入 (および再代入) することができます。

```js
let foo = 42;    // foo は数値型になった
foo     = 'bar'; // foo は文字列型になった
foo     = true;  // foo は論理型になった
```

## データと構造型

最新の ECMAScript 標準では、次の 9 つの型が定義されています。

- **データ型**のうち 6 種類は[プリミティブ](/ja/docs/Glossary/Primitive)であり、 [`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof) 演算子で確認することができます。

  - [`undefined`](/ja/docs/Glossary/undefined) : `typeof instance === "undefined"`
  - [論理型 (Boolean)](/ja/docs/Glossary/Boolean) : `typeof instance === "boolean"`
  - [数値型 (Number)](/ja/docs/Glossary/Number) : `typeof instance === "number"`
  - [文字列型 (String)](/ja/docs/Glossary/String) : `typeof instance === "string"`
  - [長整数型 (BigInt)](/ja/docs/Glossary/BigInt) : `typeof instance === "bigint"`
  - [シンボル型 (Symbol)](/ja/docs/Glossary/Symbol) : `typeof instance === "symbol"`

- **構造型**:

  - [オブジェクト (Object)](/ja/docs/Glossary/Object) : `typeof instance === "object"` です。データでありませんが、特別な**構造型**であり、あらゆる[構築された](/ja/docs/Learn/JavaScript/Objects#the_constructor)オブジェクトのインスタンスのためのに使用されます。 `new {{jsxref("Object")}}`, `new {{jsxref("Array")}}`, `new {{jsxref("Map")}}`, `new {{jsxref("Set")}}`, `new {{jsxref("WeakMap")}}`, `new {{jsxref("WeakSet")}}`, `new {{jsxref("Date")}}` など、 [`new` キーワード](/ja/docs/Web/JavaScript/Reference/Operators/new)で作られたほぼすべてのものです。
  - [関数 (Function)](/ja/docs/Glossary/Function) : データ構造ではありませんが、 `typeof` 演算子に対して `typeof instance === "function"` を返します。これは単に関数の特別な省略形ですが、すべての関数のコンストラクターは `Object` コンストラクターから派生しています。

- **構造的ルート**プリミティブ:

  - [`null`](/ja/docs/Glossary/Null) : `typeof instance === "object"` です。特殊な[プリミティブ](/ja/docs/Glossary/Primitive)型で、値には別な用途があります。オブジェクトが継承されていない場合、 `null` が表示されます。

`typeof` 演算子は、データ型を判定する以外の用途では意味を持たないことに注意してください。 `Object` から派生した構造的な型を `typeof` で判定しても、常に `"object"` が返されるので意味がありません。オブジェクトの型を確認するための適切な方法は、 {{jsxref("Operators/instanceof", "instanceof")}} キーワードを使用することです。しかし、その場合でも判定を誤ることがあるかもしれません。

ご覧のとおり、すべてのプリミティブ型の意味は、ほとんど同じである `undefined` と `null` を除いては明らかです。これは、時間の概念がアルゴリズムの目的に厳密に関係していることから起こります。まだ存在しないもの、あるいはもう存在しないものは **`undefined`** で表すことができます。しかし、存在するものが空であることを表現したい場合は、別なキーワードを導入する必要があります。これが **`null`** であり、構造的意味の始まりです。

## プリミティブ値

オブジェクトを除くすべての型は不変の値 (つまり、変更できない値) として定義されています。例えば文字列は (C 言語とは異なり) 不変です。これらの型の値を「*プリミティブ値*」と呼びます。

### 論理型 (Boolean)

論理型は論理の状態を表すもので、 `true` と `false` の 2 つの値があります。詳しくは[論理型](/ja/docs/Glossary/Boolean)および {{jsxref("Boolean")}} を参照してください。

### null 型

null 型は値が `null` の 1 つしかありません。詳しくは {{jsxref("null")}} および [Null](/ja/docs/Glossary/Null) を参照してください。

### undefined 型

値が代入されていない変数の値は `undefined` になります。詳しくは {{jsxref("undefined")}} および [Undefined](/ja/docs/Glossary/undefined) を参照してください。

### 数値型 (Number)

ECMAScript には、**数値型** (Number) と**長整数型** (BigInt、下記参照) の 2 つの組み込み数値型があります。

数値型は [IEEE 754 での倍精度浮動小数点数](https://ja.wikipedia.org/wiki/%E5%80%8D%E7%B2%BE%E5%BA%A6%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0) (-(2^53 − 1) から 2^53 − 1 まで間の数値) です。浮動小数点数の表現に加えて、3 つの記号的な値 `+Infinity`, `-Infinity`, {{jsxref("NaN")}} ("**N**ot a **N**umber") があります。

{{jsxref("Infinity", "±Infinity")}} 内で使用可能な最大値または最小値を確認するには、定数 {{jsxref("Number.MAX_VALUE")}} または {{jsxref("Number.MIN_VALUE")}} を使用できます。

> **Note:** ECMAScript 2015 からは、{{jsxref("Number.isSafeInteger()")}}, {{jsxref("Number.MAX_SAFE_INTEGER")}}, {{jsxref("Number.MIN_SAFE_INTEGER")}} を使用して、数値が倍精度浮動小数点数の範囲内にあるかどうかを確認することができるようになりました。
>
> この範囲を超えた JavaScript の整数値は正確ではなくなり、倍精度浮動小数点値の近似値に丸められます。

数値型には、2 種類の表現を持つ数値がひとつだけあります。それは `0` であり、`-0` および `+0` で表します。(`0` は `+0` の別名です)

実用上、どちらを使用しても影響はほとんどありません。例えば、 `+0 === -0` は `true` です。ただし、ゼロで除算を行った場合は違いが分かります。

```js
> 42 / +0
Infinity
> 42 / -0
-Infinity
```

多くの場合、数値はその値のみを表しますが、JavaScript には{{jsxref("Operators", "バイナリー (ビット単位) 演算子", "", 1)}}も用意されています。

> **Note:** ビット演算子で[ビットマスク](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%82%B9%E3%82%AF_%28%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%29)を使用すれば、 1 つの数値で複数の論理値を表現することも*可能です*が、 JavaScript は (論理型の配列や名前付きプロパティに論理値が割り当てられたオブジェクトのような) 論理値の集合を表現する手段を提供しているため、この行いは悪い習慣として考えられます。ビットマスクはコードの可読性、わかりやすさ、保守性を大きく損ないます。

ローカルストレージの容量的制約への対処や、ビット単位での転送量を考える必要のある極限状態など、非常に特殊なケースにおいてはこうしたテクニックが必要となるでしょう。このテクニックは、あくまでも最適化が必要な場合の最終手段としてのみ考慮すべきです。

### 長整数型 (BigInt)

長整数型は、任意の精度で整数を表現できる JavaScript の数値プリミティブです。長整数型を使えば、数値型で扱うことができる安全な整数の限界を超える、大きな整数を安全に格納して操作することができます。

長整数型は、整数の末尾に `n` を追加するか、コンストラクターを呼び出すことで作成します。

数値型でインクリメントできる最も安全な値は、定数 {{jsxref("Number.MAX_SAFE_INTEGER")}} を使用することで得ることができます。長整数型の導入により、{{jsxref("Number.MAX_SAFE_INTEGER")}} を超える数値での操作が可能になりました。

この例は、{{jsxref("Number.MAX_SAFE_INTEGER")}} をインクリメントすると期待される結果が返ってくることを示しています。

```js
> const x = 2n ** 53n;
9007199254740992n
> const y = x + 1n;
9007199254740993n
```

長整数型は、整数型と同じように `+`, `*`, `-`, `**`, `%` 演算子を使用することができます。長整数型は数値型と厳密に同じであるわけではありませんが、ほとんど同じです。

長整数型は `if`, `||`, `&&`, `Boolean`, `!` などの論理型に変換される場面では、数値型と同じように動作します。

長整数型は、数値型との間で演算することはできません。代わりに {{jsxref("TypeError")}} が発生します。

### 文字列型 (String)

JavaScript の文字列型は、テキストデータを表すために使用します。これは、16 ビット符号なし整数値の「要素」の集合体で、文字列内の各要素は文字列内の位置を占めます。要素の数が文字列の長さになり、最初の要素の位置が `0`、次の要素の位置が `1` となってゆきます。

いくつかのプログラミング言語 (C 言語など) とは異なり、 JavaScript の文字列は不変です。これは、一度作成した文字列を変更することができないことを意味します。

しかしながら、元の文字列に対する操作に基づいて別の文字列を作成することは可能です。例えば、以下のようになります。

- 原文から個別に文字を抜き出したり、 {{jsxref("String.substr()")}} を用いたりして部分文字列を切り出す
- 連結演算子 (`+`) または {{jsxref("String.concat()")}} を用いて、2 つの文字列を連結する

#### 「文字列に型付けした」コードに注意！

複雑なデータを表現するために文字列を使用したい思うこともあるでしょう。これには短期的なメリットがあります。

- 結合することで、複合文字列を簡単に作成できます。
- 文字列は簡単にデバッグできます (出力される情報は常に文字列に含まれているものです)。
- 文字列は多くの API ([入力フィールド](/ja/docs/Web/API/HTMLInputElement)、[ローカルストレージ](/ja/docs/Web/API/Web_Storage_API)の値、 [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest "XMLHttpRequest (XHR) オブジェクトを使用して、サーバーと対話することができます。ページ全体を更新することなく、 URL からデータを取得することができます。これにより、ユーザーの操作を中断することなく、ウェブページの一部だけを更新することができます。") の `responseText` を使用したレスポンス、など) において共通分母であり、文字列だけで作業したいという誘惑に駆られることがあります。

規則さえあれば、どのようなデータ構造でも文字列で表現することが可能ですが、これは良い考えとは言えません。例えば、区切り文字を使用することでリストを模倣することができますが (JavaScript の配列の方が適しています)、残念なことに区切り文字がリストの要素となってしまった場合、リストが壊れてしまいます。エスケープした文字を使用することでこの問題に対処することは可能ですが、その規則をすべてに用意する必要がある上、不必要なメンテナンスの負担を生み出します。

文字列はテキストデータには向いていますが、複雑なデータを表す場合は文字列を*解析*し、適切な抽象化を用いる必要があります。

### シンボル型 (Symbol)

シンボルは**一意**で**不変**のプリミティブ値であり、オブジェクトのプロパティのキーとして使用することができます。一部のプログラミング言語では、「アトム」と呼ばれています。

詳しくは、[シンボル](/ja/docs/Glossary/Symbol)および {{jsxref("Symbol")}} オブジェクトラッパーを参照してください。

## オブジェクト

コンピューター科学において、オブジェクトは[識別子](/ja/docs/Glossary/Identifier)によって参照可能なメモリー内の値です。

### プロパティ

JavaScript では、オブジェクトはプロパティの集合として見ることができます。[オブジェクトリテラル構文](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals)は、初期化される限定された一連のプロパティです。その後でプロパティは追加したり削除したりすることができます。プロパティの値は、他のオブジェクトを含むあらゆる型の値にすることができ、複雑なデータ構造を構築できます。プロパティは*キー*値で識別することができます。*キー*値は文字列またはシンボル値です。

オブジェクトには、*データ*プロパティと*アクセサー*プロパティという特定の属性を持つ 2 種類のプロパティがあります。

> **Note:** 各プロパティに対応する*属性*は JavaScript エンジンによって内部的に使用されるので、直接アクセスすることはできません。そのため、属性は 1 つではなく 2 つの角括弧で表示されています。
>
> 詳しくは {{jsxref("Object.defineProperty()")}} を参照してください。

#### データプロパティ

キーと値を関連づけて、以下の属性を持ちます。

<table class="standard-table">
  <caption>
    データプロパティの属性
  </caption>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col">型</th>
      <th scope="col">説明</th>
      <th scope="col">既定値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[[Value]]</td>
      <td>JavaScript の任意の型</td>
      <td>プロパティにアクセスすると取り出される値です。</td>
      <td>`undefined`</td>
    </tr>
    <tr>
      <td>[[Writable]]</td>
      <td>論理型</td>
      <td>
        <code>false</code> であれば、プロパティの [[Value]] は変更できません。
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>[[Enumerable]]</td>
      <td>論理型</td>
      <td>
        <p>
          <code>true</code> であれば、プロパティは <a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> ループで列挙されます。<br />
          <a href="/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">プロパティの列挙可能性と所有権</a>も参照してください。
        </p>
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>[[Configurable]]</td>
      <td>論理型</td>
      <td>
        <code>false</code> であれば、プロパティは削除できません。また、 [[Value]] および [[Writable]] 以外の属性を変更できません。
      </td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

| 属性       | 型     | 説明                                               |
| ---------- | ------ | -------------------------------------------------- |
| Read-only  | 論理型 | ES5 の [[Writable]] 属性の状態を反転したもの       |
| DontEnum   | 論理型 | ES5 の [[Enumerable]] 属性の状態を反転したもの。   |
| DontDelete | 論理型 | ES5 の [[Configurable]] 属性の状態を反転したもの。 |

#### アクセサープロパティ

値を取り出しまたは保存するための 1 つまたは 2 つのアクセサー関数 (`get` および `set`) とキーを関連づけており、以下の属性を持ちます。

| 属性             | 型                             | 説明                                                                                                                                                                                                              | 既定値 |
| ---------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| [[Get]]          | Function オブジェクトまたは `undefined` | この値に対して取得アクセスが実行されると、関数が引数なしで呼び出されてプロパティの値を取り出します。 [`get`](/ja/docs/Web/JavaScript/Reference/Functions/get) も参照してください。               | `undefined`   |
| [[Set]]          | Function オブジェクトまたは `undefined` | 指定したプロパティを変更しようとしたときに、代入する値を引数に含めて関数が呼び出されます。 [`set`](/ja/docs/Web/JavaScript/Reference/Functions/set) も参照してください。 | `undefined`   |
| [[Enumerable]]   | 論理型                        | `true` の場合、プロパティは [for...in](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループで列挙されます。                                                                                                | `false`       |
| [[Configurable]] | 論理型                        | `false` の場合、プロパティは削除できず、データプロパティを変更することもできません。                                                                                                                                       | `false`       |

### 「通常の」オブジェクトおよび関数

JavaScript のオブジェクトは*キー*と*値*を所持しています。キーは文字列 (または{{jsxref("Symbol", "シンボル")}}) ですが、*値*は何でも構いません。これにより、オブジェクトは[ハッシュマップ](https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB)に自然に適合します。

関数は*呼び出し可能*という付加機能を持つ、通常のオブジェクトです。

### 日付

日付を表現する場合は、JavaScript に組み込まれた [`Date` ユーティリティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) を使用するのが最適です。

### インデックス付きコレクション: 配列および型付き配列

[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)は、整数値をキーにするプロパティと `length` プロパティの間に特殊な関係の存在する、標準オブジェクトです。

さらに、配列は `Array.prototype` を継承しており、配列を操作するための便利なメソッドを提供しています。例えば、 [`indexOf`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) (配列中の値の検索) や [`push`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push) (配列への要素の追加) などです。これにより、配列はリストや集合を表現するのに最適な候補となります。

<a href="/ja/docs/Web/JavaScript/Typed_arrays">型付き配列</a>は、 ECMAScript 2015 で JavaScript に新しく追加されたもので、基礎となるバイナリーデータバッファの配列風のビューを提示します。次の表は、同等の C データ型を見つけるのに役立ちます。

| 型                                     | 値の範囲                   | サイズ (バイト数) | 説明                                                                  | Web IDL 型          | 同等の C の型               |
| ---------------------------------------- | ----------------------------- | ------------- | ---------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` ～ `127`               | 1             | 8 ビット 2 の補数方式の符号付き整数値                                        | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}         | `0` ～ `255`                  | 1             | 8 ビット 符号なし整数値                                                       | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | `0` ～ `255`                  | 1             | 8 ビット 符号なし整数値 (切り詰め)                                             | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}         | `-32768` ～ `32767`           | 2             | 16 ビット 2 の補数方式の符号付き整数値                                       | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}         | `0` ～ `65535`                | 2             | 16 ビット 符号なし整数値                                                      | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}         | `-2147483648` ～ `2147483647` | 4             | 32 ビット 2 の補数方式の符号付き整数値                                       | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}         | `0` ～ `4294967295`           | 4             | 32 ビット 符号なし整数値                                                      | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}     | `1.2E-38` ～ `3.4E38`         | 4             | 32 ビット IEEE 浮動小数点数 (7 桁の有効数字、例: `1.1234567`)   | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}     | `5E-324` ～ `1.8E308`         | 8             | 64 ビット IEEE 浮動小数点数 (16 桁の有効数字 例: `1.123...15`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | `-2^63` ～ `2^63 - 1`         | 8             | 64 ビット 2 の補数方式の符号付き整数値                                       | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}     | `0` ～ `2^64 - 1`             | 8             | 64 ビット 符号なし整数値                                                      | `bigint`              | `uint64_t (unsigned long long)` |

### キー付きコレクション: Map, Set, WeakMap, WeakSet

ECMAScript 第 6 編 で導入されたこれらのデータ構造は、オブジェクト参照をキーとしています。{{jsxref("Set")}} と {{jsxref("WeakSet")}} はオブジェクトの集合を表し、{{jsxref("Map")}} と {{jsxref("WeakMap")}} はオブジェクトに値を関連付けます。

`Map` と `WeakMap` の違いは、前者ではオブジェクトキーを列挙できることです。これにより、後者の場合にガベージコレクションの最適化が可能になります。

純粋な ECMAScript 5 で `Map` と `Set` を実装することもできますが、オブジェクトを比較することはできないので (例えば `&lt;` 「未満」の意味で)、検索性能が必然的に線形になります。これらのネイティブ実装 (`WeakMap` を含む) は、一定時間に対してほぼ対数的な検索性能を持つことができます。

通常、DOM ノードにデータをバインドするには、オブジェクトに直接プロパティを設定するか、 `data-*` 属性を使用します。これらの手法は同じコンテクストで実行されるあらゆるスクリプトからデータの利用が可能であるため、不都合な面を持ち合わせていました。 `Map` や `WeakMap` を使うと、オブジェクトへの*プライベート*なデータバインドを簡単に行うことができます。

### 構造化データ: JSON

JSON (**J**ava**S**cript **O**bject **N**otation) は JavaScript から派生した汎用データ構造をもつ軽量なデータ交換フォーマットであり、多くのプログラミング言語で使用されています。

詳しくは [JSON](/ja/docs/Glossary/JSON) および {{jsxref("JSON")}} を参照してください。

### 標準ライブラリに含まれる他のオブジェクト

JavaScript には組み込みオブジェクトの標準ライブラリがあります。

オブジェクトの詳細については、[リファレンス](/ja/docs/Web/JavaScript/Reference/Global_Objects)を参照してください。

## `typeof` 演算子を使用した型の検出

`typeof` 演算子は、変数の型を知るのに役立ちます。

詳細および使用例については、[リファレンスページ](/ja/docs/Web/JavaScript/Reference/Operators/typeof)を参照してください。

## 関連情報

- [Nicholas Zakas による、JavaScript における一般的なデータ構造とアルゴリズムのまとめ](https://github.com/nzakas/computer-science-in-javascript/)
- [Search Tre(i)es implemented in JavaScript](https://github.com/monmohan/DataStructures_In_Javascript)
- [Data Types and Values in the ECMAScript specification](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)
