---
title: typeof 演算子
slug: Web/JavaScript/Reference/Operators/typeof
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`typeof`** 演算子は、オペランドの値の型を示す文字列を返します。

{{InteractiveExample("JavaScript デモ: typeof 演算子")}}

```js interactive-example
console.log(typeof 42);
// 予想される結果: "number"

console.log(typeof "blubber");
// 予想される結果: "string"

console.log(typeof true);
// 予想される結果: "boolean"

console.log(typeof undeclaredVariable);
// 予想される結果: "undefined"
```

## 構文

```js-nolint
typeof operand
```

### 引数

- `operand`
  - : 型を返すオブジェクトまたは[プリミティブ](/ja/docs/Glossary/Primitive)型を表す式です。

## 解説

以下は `typeof` が返す可能性がある値の一覧です。型とプリミティブの詳細については、[JavaScript のデータ構造](/ja/docs/Web/JavaScript/Guide/Data_structures)のページも参照してください。

| 型                                                                                                                                                                                              | 結果                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [Undefined](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined)                                                                                                                         | `"undefined"`                     |
| [Null](/ja/docs/Web/JavaScript/Reference/Operators/null)                                                                                                                                        | `"object"` ([理由](#typeof_null)) |
| [論理型](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                              | `"boolean"`                       |
| [数値型](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                                               | `"number"`                        |
| [長整数型](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)                                                                                                                             | `"bigint"`                        |
| [文字列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                             | `"string"`                        |
| [シンボル型](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)                                                                                                                           | `"symbol"`                        |
| [関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function)オブジェクト (ECMA-262 の用語では [[Call]] を実装したもの、[クラス](/ja/docs/Web/JavaScript/Reference/Statements/class)も関数) | `"function"`                      |
| その他のオブジェクト                                                                                                                                                                            | `"object"`                        |

この値のリストは網羅的なものです。仕様を遵守するエンジンは、掲載されている値以外を生成する（または過去には生成していた）ことは報告されていません。

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

// 論理型
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

### typeof null

```js
// JavaScript の初期からの実装に基づく
typeof null === "object";
```

JavaScript の最初の実装では、JavaScript の値は型タグと値で表現されていました。オブジェクトの型タグは `0` で、`null` は NULL ポインター (ほとんどのプラットフォームで `0x00`) として表されていました。その結果、`null` はタグの型として `0` を持っていたため、`typeof` の返値は `"object"` です。([リファレンス](https://2ality.com/2013/10/typeof-null.html))

ECMAScript の修正案が (オプトインを使用して) 提案されましたが、[却下されました](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null)。それは `typeof null === "null"` という結果になるものでした。

### new 演算子の使用

[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) で呼び出されるコンストラクター関数はすべて、プリミティブ型以外の値を返します（"object" または "function"）。 ほとんどはオブジェクトを返しますが、特記すべき例外として、[`Function`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) は関数を返します。

```js
const str = new String("String");
const num = new Number(100);

typeof str; // "object" を返す
typeof num; // "object" を返す

const func = new Function();

typeof func; // "function" を返す
```

### 構文で括弧が必要な場合

`typeof` 演算子は、[優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)が加算 (`+`) などの二項演算子よりも高くなります。そのため、加算結果の型を評価するには括弧が必要です。

```js
// 括弧を使うと、式のデータ型を特定することができます。
const someData = 99;

typeof someData + " foo"; // "number foo"
typeof (someData + " foo"); // "string"
```

### エラー

`typeof` は一般に、それが供給されたオペランドの文字列を返すことが保証されています。宣言されていない識別子があっても、`typeof` は `"undefined"` を返し、エラーは発生しません。

```js
typeof undeclaredVariable; // "undefined"
```

しかし、`typeof` を同じブロック内の字句宣言（{{jsxref("Statements/let", "let")}}、{{jsxref("Statements/const", "const")}}、[`class`](/ja/docs/Web/JavaScript/Reference/Statements/class)）の前に使用すると、{{jsxref("ReferenceError")}} が発生します。 ブロックスコープの変数は、ブロックの開始から初期化が処理されるまでの間、一時的なデッドゾーンにあり、その間にアクセスするとエラーが発生します。ブロックスコープ内の変数は、ブロックの開始から初期化が処理されるまで「[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz)」にあり、その間にアクセスされるとエラーが発生します。

```js example-bad
typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "hello";
class newClass {}
```

### document.all の例外的な動作

現在のブラウザーではすべて、標準外のホストオブジェクト [`document.all`](/ja/docs/Web/API/Document/all) は `undefined` 型になります。

```js
typeof document.all === "undefined";
```

`document.all` は[偽値](/ja/docs/Glossary/Falsy)でもあり、`undefined` と[緩い等価性](/ja/docs/Web/JavaScript/Reference/Operators/Equality)がありますが、[`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) ではありません。`document.all` が `"undefined"` という型を持つケースは、ウェブ標準では、ウェブ互換性を目的とした ECMAScript 標準の「意図的な違反」として分類されています。

### より具体的な型を取得するカスタムメソッド

`typeof` は非常に便利ですが、汎用性はそれほど高くありません。たとえば、`typeof []` は `"object"` になります。`typeof new Date()` や `typeof /abc/` などと同様です。

型チェックの精度を上げるために、ここではカスタム関数 `type(value)` を紹介します。これは主に `typeof` の動作を模倣しますが、プリミティブ型以外のもの（つまりオブジェクトや関数）については、可能な限り詳細な型名を返します。

```js
function type(value) {
  if (value === null) {
    return "null";
  }
  const baseType = typeof value;
  // プリミティブ型
  if (!["object", "function"].includes(baseType)) {
    return baseType;
  }

  // Symbol.toStringTag は、多くの場合、オブジェクトのクラスの
  // 「表示名」を指定する。これは Object.prototype.toString() で使用する。
  const tag = value[Symbol.toStringTag];
  if (typeof tag === "string") {
    return tag;
  }

  // ソースコードが "class" キーワードで始まる関数である場合
  if (
    baseType === "function" &&
    Function.prototype.toString.call(value).startsWith("class")
  ) {
    return "class";
  }

  // コンストラクターの名前。例えば、`Array`、`GeneratorFunction`、
  // `Number`、`String`、`Boolean`、`MyCustomClass`。
  const className = value.constructor.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }

  // ここまでくると、値の型を取得する確実な方法はないため、
  // 基本実装を使用します。
  return baseType;
}
```

存在しない可能性がある変数を調べるには、{{jsxref("ReferenceError")}} が発生する可能性があるため、`typeof nonExistentVar === "undefined"` を使用してください。この動作は、カスタムコードでは模倣できないためです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Operators/instanceof", "instanceof")}}
- [`document.all` willful violation of the standard](https://github.com/tc39/ecma262/issues/668)
