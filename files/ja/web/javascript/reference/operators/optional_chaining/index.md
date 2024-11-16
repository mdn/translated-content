---
title: オプショナルチェーン (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

**オプショナルチェーン (`?.`)** (optional chaining) 演算子は、オブジェクトのプロパティにアクセスしたり、関数を呼び出したりします。この演算子を使用してアクセスするオブジェクトまたは呼び出される関数が {{jsxref("undefined")}} または [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の場合、エラーが発生することなく、式が途中で終了し、{{jsxref("undefined")}} と評価されます。

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html", "taller")}}

## 構文

```js-nolint
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
```

## 解説

`?.` 演算子の機能は `.` チェーン演算子と似ていますが、参照が [nullish](/ja/docs/Glossary/Nullish) ([`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) または {{jsxref("undefined")}}) の場合にエラーとなるのではなく、式が短絡され `undefined` が返されるところが異なります。関数呼び出しで使用すると、与えられた関数が存在しない場合、 `undefined` を返します。

これは、参照が失われた可能性のある連結されたプロパティにアクセスする時、結果的に短く単純な式になります。また、必要なプロパティの存在が保証されていない場合にオブジェクトのコンテンツを探索するのにも役立ちます。

たとえば、入れ子構造を持つオブジェクト `obj` を考えましょう。オプショナルチェーン演算子なしで深い入れ子になったサブプロパティにアクセスするには、次のように、各プロパティ間の参照を確認する必要があります。

```js
const nestedProp = obj.first && obj.first.second;
```

`obj.first` の値が `null` ではない（そして `undefined` でもない）ことが確認された後で、`obj.first.second` の値にアクセスします。これにより、`obj.first` をテストせずに直接 `obj.first.second` にアクセスした場合に発生するエラーを防ぐことができます。

これは JavaScript でよく使われるパターンですが、チェーンが長くなると冗長になり、安全ではありません。例えば、`obj.first` が{{Glossary("Falsy", "偽")}}値で、`null` や `undefined` ではない値（例えば `0`）であった場合、それでも短絡となり、`nestedProp` が `0` になります。これは望ましくないかもしれません。

しかし、オプショナルチェーン演算子 (`?.`) を使えば、`obj.first.second` にアクセスしようとする前に `obj.first` の状態を明示的にテストする必要がなくなります。

```js
const nestedProp = obj.first?.second;
```

`?.` を `.` の代わりに用いることで、 JavaScript が `obj.first.second` にアクセスしようとする前に `obj.first` が `null` または `undefined` でないことを暗黙的に確かめるようになります。`obj.first` が `null` または `undefined` であった場合、式が自動的に短絡され、 `undefined` が返ります。

これは、一時的な変数が作成されないことを除き、次の式と等価です。

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

オプショナルチェーンは、宣言されていないルートオブジェクトでは使用できませんが、値が `undefined` のルートオブジェクトでは使用することができます。

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### 関数呼び出しにおけるオプショナルチェーン演算子

存在しない可能性がある関数の呼び出しを試行するときに、オプショナルチェーンを使うことができます。これはたとえば、ユーザーの端末上で使えなかったり、実装が古かったりするために使えなかったりする可能性がある API を使うときに役立ちます。

関数呼び出しでオプショナルチェーン演算子を用いた場合、メソッドが見つからないときは自動的に `undefined` が返り、例外は発生しません。

```js
const result = someInterface.customMethod?.();
```

しかし、そのような名前のプロパティが関数でない場合、`?.` を使用しても、{{jsxref("TypeError")}} 例外 "someInterface.customMethod is not a function" が発生します。

> [!NOTE]
> 関数ではない名前のプロパティがあった場合、 `?.` を使用すると {{jsxref("TypeError")}} 例外が発生します ("someInterface is null")。
> もし `someInterface` 自体が `null` または `undefined` である可能性がある場合は、この位置にも `?.` を使用する必要があります。つまり、`someInterface?.customMethod?.()` のように指定します。

`eval?.()` は[_間接的 eval_](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval#直接的または間接的な_eval) モードに入るための最短の方法です。

### オプショナルチェーン演算子と式の組み合わせ

[ブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors#ブラケット記法)を使用して式のプロパティにアクセスする際にも、オプショナルチェーン演算子を使用することができます。

```js
const nestedProp = obj?.["prop" + "Name"];
```

これは配列の添字でアクセスする際に角括弧を使用する必要があるため、配列に対して特に有益な機能です。

```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw an error: "Cannot read properties of undefined (reading '42')"
```

### 無効なオプショナルチェーン

オプショナルチェーン式の評価結果に値を代入しようとすることは不正な処理です。

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[テンプレートリテラルタグ](/ja/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)はオプショナルチェーンにはできません（[SyntaxError: tagged template cannot be used with optional chain](/ja/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)を参照）。

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

{{jsxref("Operators/new", "new")}} 式のコンストラクターはオプショナルチェーンを使用できません（[SyntaxError: new keyword cannot be used with an optional chain](/ja/docs/Web/JavaScript/Reference/Errors/Bad_new_optional) を参照）。

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### 短絡評価

オプショナルチェーン式を使用する場合、左オペランドが `null` または `undefined` の場合、その式は評価されません。例えば次のようになります。

```js
const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];

console.log(x); // x がインクリメントされていないので 0
```

その後のプロパティへのアクセスも評価されません。

```js
const potentiallyNullObj = null;
const prop = potentiallyNullObj?.a.b;
// これはエラーを発生しません。最初のオプショナルチェーンで評価がすでに停止しているためです。
```

これは下記のものと等価です。

```js
const potentiallyNullObj = null;
const prop =
  potentiallyNullObj === null || potentiallyNullObj === undefined
    ? undefined
    : potentiallyNullObj.a.b;
```

ただし、この短絡評価の動作は、プロパティにアクセスする一連の「チェーン」を連続して行う場合のみ発生します。 チェーンの一部を[グループ化](/ja/docs/Web/JavaScript/Reference/Operators/Grouping)しても、その後のプロパティへのアクセスは引き続き評価されます。

```js
const potentiallyNullObj = null;
const prop = (potentiallyNullObj?.a).b;
// TypeError: Cannot read properties of undefined (reading 'b')
```

これは下記のものと等価です。

```js
const potentiallyNullObj = null;
const temp = potentiallyNullObj?.a;
const prop = temp.b;
```

ただし、`temp` 変数は作成されません。

## 例

### 基本的な例

次の例では、マップに存在しない `bar` メンバの `name` プロパティを取得しようとしています。したがって、結果は `undefined` になります。

```js
const myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

const nameBar = myMap.get("bar")?.name;
```

### オプションのコールバックやイベントハンドラーの扱い

コールバックやオブジェクトからフェッチメソッドを[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#オブジェクトの分割代入)で使用する場合、存在しない値を持つことができるため、その存在をテストしない限り、その値を関数として呼び出すことはできません。`?.` を使用すると、この余分なテストを避けることができます。

```js
// オプショナルチェーンなしで書かれたコード
function doSomething(onContent, onError) {
  try {
    // データで何かを行う
  } catch (err) {
    // onError が本当に存在するかどうかを確認
    if (onError) {
      onError(err.message);
    }
  }
}
```

```js
// 関数呼び出しでオプショナルチェーンを使用
function doSomething(onContent, onError) {
  try {
    // データで何かを行う
  } catch (err) {
    onError?.(err.message); // onError が定義されていない場合は例外なし
  }
}
```

### オプショナルチェーンをつなげて使う

入れ子になったオブジェクトでは、オプショナルチェーン演算子を何度でも使うことができます。

```js
const customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // 詳細な住所は不明
  },
};
const customerCity = customer.details?.address?.city;

// … これはオプショナルチェーンの関数呼び出しでも動作します
const customerName = customer.name?.getName?.(); // メソッドが存在しないので、 customerName は undefined
```

### Null 合体演算子と共に使う

[Null 合体演算子](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)をオプショナルチェーンの後につけることで、値が存在しなかったときの既定値を指定することができます。

```js
function printCustomerCity(customer) {
  const customerCity = customer?.city ?? "Unknown city";
  console.log(customerCity);
}

printCustomerCity({
  name: "Nathan",
  city: "Paris",
}); // "Paris"
printCustomerCity({
  name: "Carl",
  details: { age: 82 },
}); // "Unknown city"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Null 合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
