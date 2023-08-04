---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
---

{{JSSidebar("Operators")}}

<strong>`typeof`</strong> 演算子は、未評価のオペランドの型を示す文字列を返します。

{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}

## 構文

`typeof` 演算子の後に、オペランドを続けて書きます。

```js-nolint
typeof operand;
typeof(operand);
```

### 引数

- `operand`
  - : 型を返すオブジェクトまたは[プリミティブ](/ja/docs/Glossary/Primitive)型を表す式です。

## 解説

以下は `typeof` が返す可能性がある値の一覧です。型とプリミティブの詳細については、[JavaScript のデータ構造](/ja/docs/Web/JavaScript/Data_structures)のページも参照してください。

| 型                                                                                    | 結果                                  |
| ------------------------------------------------------------------------------------- | ------------------------------------- |
| [Undefined](/ja/docs/Glossary/Undefined)                                              | `"undefined"`                         |
| [Null](/ja/docs/Glossary/Null)                                                        | `"object"` ([下記参照](#typeof_null)) |
| [論理値](/ja/docs/Glossary/Boolean)                                                   | `"boolean"`                           |
| [Number](/ja/docs/Glossary/Number)                                                    | `"number"`                            |
| [BigInt](/ja/docs/Glossary/BigInt) (ECMAScript 2020 の新機能)                         | `"bigint"`                            |
| [文字列](/ja/docs/Glossary/String)                                                    | `"string"`                            |
| [シンボル](/ja/docs/Glossary/Symbol) (ECMAScript 2015 の新機能)                       | `"symbol"`                            |
| [関数](/ja/docs/Glossary/Function) オブジェクト (ECMA-262 の用語では [[Call]] を実装) | `"function"`                          |
| その他のオブジェクト                                                                  | `"object"`                            |

> **メモ:** ECMAScript 2019 およびそれ以前の実装では、呼び出し可能な標準外のオブジェクトに対して、`typeof` が任意の実装定義の文字列値を返すことを許可していました。
>
> 実際にこれを利用したブラウザーとして知られているのは、古い Internet Explorer だけです。（[下記参照](#ie-specific_notes)）

## 例

### 基本的な使い方

```js
// 数値
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // "Not-A-Number" であるにもかかわらず。
typeof Number("1") === "number"; // Number は数値に型強制できない値を含めて、
typeof Number("shoe") === "number"; // あらゆるものを数字に解釈します。

typeof 42n === "bigint";

// 文字列
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // 文字列内の数値は文字列型のままです。
typeof typeof 1 === "string"; // typeof は常に文字列を返します。
typeof String(1) === "string"; // String は何でも文字列に変換するので、toString よりも安全です。

// 論理値
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean は、値が真値か偽値かに基づいて変換します。
typeof !!1 === "boolean"; // ! (論理 NOT) を 2 回呼び出すと Boolean() と同等になります。

// シンボル
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// オブジェクト
typeof { a: 1 } === "object";

// Array.isArray または Object.prototype.toString.call を使用して、
// 通常のオブジェクトと配列を区別します。
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object"; // 過去の実装は正規表現の章を参照してください。

// 以下のようなものは、紛らわしく、危険で、無駄なものです。これらは使用しないようにしてください。
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// 関数
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";
```

### `typeof null`

```js
// JavaScript の初期からの実装に基づく
typeof null === "object";
```

JavaScript の最初の実装では、JavaScript の値は型タグと値で表現されていました。オブジェクトの型タグは `0` で、`null` は NULL ポインター (ほとんどのプラットフォームで `0x00`) として表されていました。その結果、`null` はタグの型として `0` を持っていたため、`typeof` の戻り値は `"object"` です。([リファレンス](http://www.2ality.com/2013/10/typeof-null.html))

ECMAScript の修正案が (オプトインを使用して) 提案されましたが、[却下されました](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null)。それは `typeof null === 'null'` という結果になるものでした。

### `new` 演算子の使用

```js
// Function コンストラクターを除くすべてのコンストラクター関数は、
// 常に typeof 'object' です
let str = new String("String");
let num = new Number(100);

typeof str; // 'object' を返す
typeof num; // 'object' を返す

let func = new Function();

typeof func; // 'function' を返す
```

### 構文で括弧が必要な場合

```js
// 式のデータ型を特定するために、かっこを使用することができます。
let iData = 99;

typeof iData + " Wisen"; // 'number Wisen'
typeof (iData + " Wisen"); // 'string'
```

### 正規表現

呼び出し可能な正規表現は、一部のブラウザーにおける標準外の追加機能でした。

```js
typeof /s/ === "function"; // Chrome 1-12 ECMAScript5.1 に非準拠
typeof /s/ === "object"; // Firefox 5+ ECMAScript 5.1 に準拠
```

### エラー

ECMAScript 2015 より前では、`typeof` は常にそれが供給されたオペランドの文字列を返すことが保証されていました。宣言されていない識別子があっても、`typeof` は `'undefined'` を返します。`typeof` を使用すると、エラーは発生しません。

しかしながら、ブロックスコープの {{JSxRef("Statements/let", "let")}} と
{{JSxRef("Statements/const", "const")}} が追加されたことで、変数が宣言される前のブロック内で `let` と `const` に `typeof` を使用すると（またはクラスに `typeof` を使用すると）、 {{JSxRef("ReferenceError")}} が発生します。ブロックスコープ内の変数は、ブロックの開始から初期化が処理されるまで「[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz)」にあり、その間にアクセスされるとエラーが発生します。

```js
typeof undeclaredVariable === "undefined";

typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "hello";
class newClass {}
```

### 例外

現在のブラウザーではすべて、標準外のホストオブジェクト [`document.all`](/ja/docs/Web/API/Document/all) は `undefined` 型になります。

```js
typeof document.all === "undefined";
```

仕様では、標準外のオブジェクトのために独自の型タグが設定できるようにしていますが、定義済みの型タグとは異なる必要があります。 `document.all` が `'undefined'` という型であるというのは、ウェブ標準では元の ECMA JavaScript 標準において「故意の違反」として分類されています。

### 実際の使い方

`typeof` は非常に便利ですが、汎用性はそれほど高くありません。たとえば、`typeof([])` は `typeof(new Date())` や `typeof(/abc/)` などと同様に `'object'` になります。

型のチェックをより具体的にするためには、実用レベルのコードで使用するための `typeof` ラッパーは以下のようになります。（`obj` が存在する場合）

```js
function type(obj, fullClass) {
  // obj の toPrototypeString() を取得します。（すべての型を処理します）
  if (showFullClass && typeof obj === "object") {
    return Object.prototype.toString.call(obj);
  }
  if (obj == null) {
    return (obj + "").toLowerCase();
  } // 暗黙の toString() 変換

  var deepType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  if (deepType === "generatorfunction") {
    return "function";
  }

  // 過剰な特異性を防いでください。(例えば、[object HTMLDivElement] など)
  // 関数的な正規表現 (Android 2.3 以前)、関数的な <object> 要素 (Chrome 57 以前, Firefox 52 以前) などを考慮してください。
  // String.prototype.match は普遍的にサポートされています。

  return deepType.match(
    /^(array|bigint|date|error|function|generator|regexp|symbol)$/,
  )
    ? deepType
    : typeof obj === "object" || typeof obj === "function"
    ? "object"
    : typeof obj;
}
```

存在しない変数をチェックすると、{{JSxRef("ReferenceError")}} が発生するため、`typeof nonExistentVar === 'undefined'` を使用します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### IE 固有のメモ

IE 6、7、8 では、以下のように多くのホストオブジェクトがオブジェクト型であり、関数ではありません。

```js
typeof alert === "object";
```

一部の標準外 IE プロパティは他の値を返します。([tc39/ecma262#1440 (comment)](https://github.com/tc39/ecma262/issues/1440#issuecomment-461963872))

```js
typeof window.external.AddSearchProvider === "unknown";
typeof window.external.IsSearchProviderInstalled === "unknown";
```

## 関連情報

- {{JSxRef("Operators/instanceof", "instanceof")}}
- [`document.all` willful violation of the standard](https://github.com/tc39/ecma262/issues/668)
