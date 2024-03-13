---
title: オプショナルチェーン (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
---

{{JSSidebar("Operators")}}

**オプショナルチェーン** (optional chaining) 演算子 (**`?.`**) は、接続されたオブジェクトチェーンの深くに位置するプロパティの値を、チェーン内の各参照が正しいかどうかを明示的に確認せずに読み込むことを可能にします。

`?.` 演算子の機能は `.` チェーン演算子と似ていますが、参照が [nullish](/ja/docs/Glossary/Nullish) ({{JSxRef("null")}} または {{JSxRef("undefined")}}) の場合にエラーとなるのではなく、式が短絡され `undefined` が返されるところが異なります。関数呼び出しで使用すると、与えられた関数が存在しない場合、 `undefined` を返します。

これは、参照が失われた可能性のある連結されたプロパティにアクセスする時、結果的に短く単純な式になります。また、必要なプロパティの存在が保証されていない場合にオブジェクトのコンテンツを探索するのにも役立ちます。

オプショナルチェーンは、宣言されていないルートオブジェクトでは使用できませんが、未定義のルートオブジェクトで使用できます。

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html",
  "taller")}}

## 構文

```js
obj.val?.prop;
obj.val?.[expr];
obj.arr?.[index];
obj.func?.(args);
```

## 解説

オプショナルチェーン演算子は、参照や関数が `undefined` または `null` である可能性がある場合でも、接続されたオブジェクトの値に簡単にアクセスする手段を提供します。

たとえば、入れ子構造を持つオブジェクト `obj` を考えましょう。オプショナルチェーン演算子なしで深い入れ子になったサブプロパティにアクセスするには、次のように、各プロパティ間の参照を確認する必要があります。

```js
let nestedProp = obj.first && obj.first.second;
```

`obj.first.second` の値にアクセスする前に、 `obj.first` の値が `null` または `undefined` でないことを確認します。これにより、 `obj.first` をテストせず `obj.first.second` にアクセスしたときに起きるエラーを防ぐことができます。

しかし、オプショナルチェーン演算子 (`?.`) を使えば、`obj.first.second` にアクセスしようとする前に `obj.first` の状態を明示的にテストする必要がなくなります。</p>

```js
let nestedProp = obj.first?.second;
```

`?.` を `.` の代わりに用いることで、 JavaScript が `obj.first.second` にアクセスしようとする前に `obj.first` が `null` または `undefined` でないことを暗黙的に確かめるようになります。`obj.first` が `null` または `undefined` であった場合、式が自動的に短絡され、 `undefined` が返ります。

これは、一時的な変数が作成されないことを除き、次の式と等価です。

```js
let temp = obj.first;
let nestedProp = temp === null || temp === undefined ? undefined : temp.second;
```

### 関数呼び出しにおけるオプショナルチェーン演算子

存在しない可能性がある関数の呼び出しを試行するときに、オプショナルチェーンを使うことができます。これはたとえば、ユーザーの端末上で使えなかったり、実装が古かったりするために使えなかったりする可能性がある API を使うときに役立ちます。

関数呼び出しでオプショナルチェーン演算子を用いた場合、メソッドが見つからないときは自動的に `undefined` が返り、例外は発生しません。

```js
let result = someInterface.customMethod?.();
```

> **メモ:** 関数ではない名前のプロパティがあった場合、 `?.` を使用すると {{JSxRef("TypeError")}} 例外が発生します
> (`someInterface.customMethod is not a function`)。

> **メモ:** `someInterface` 自体が `null` または `undefined` である場合にも、 {{JSxRef("TypeError")}} 例外が発生します (`someInterface is null`)。 `someInterface` 自体が `null` または `undefined` である可能性がある場合は、この位置にも `?.` を使用して `someInterface?.customMethod?.()` のようにする必要があります。

#### 省略可能なコールバックやイベントハンドラーの扱い

<p>コールバックを使う場合や、オブジェクトからメソッドを<a href="/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">分割代入</a>を利用して取り出す場合に、存在しない値がある可能性があり、その存在を検証するまで関数として呼び出せません。その場合 `?.` を利用することで、検証の必要性を回避できます。

```js
// Written as of ES2019
function doSomething(onContent, onError) {
  try {
    // ... do something with the data
  } catch (err) {
    if (onError) {
      // Testing if onError really exists
      onError(err.message);
    }
  }
}
```

```js
// Using optional chaining with function calls
function doSomething(onContent, onError) {
  try {
    // ... do something with the data
  } catch (err) {
    onError?.(err.message); // no exception if onError is undefined
  }
}
```

### オプショナルチェーン演算子と式の組み合わせ

[プロパティアクセサーのブラケット表記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation)を使用している式のプロパティにアクセスする際にも、オプショナルチェーン演算子を使用することができます。

```js
let nestedProp = obj?.["prop" + "Name"];
```

### オプショナルチェーン演算子は代入の左辺値では使用できない

```js
let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

### オプショナルチェーンによる配列要素へのアクセス

```js
let arrayItem = arr?.[42];
```

## 例

### 基本的な例

次の例では、マップに存在しない `bar` メンバの `name` プロパティを取得しようとしています。したがって、結果は `undefined` になります。

```js
let myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

let nameBar = myMap.get("bar")?.name;
```

### 短絡評価

式と一緒にオプショナルチェーン演算子を用いたとき、左側のオペランドが `null` または `undefined` である場合、その式は評価されなくなります。

```js
let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // 0 となる。 x は加算されていない
```

### オプショナルチェーンをつなげて使う

入れ子になったオブジェクトでは、オプショナルチェーン演算子を何度でも使うことができます。

```js
let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // 詳細な住所は不明
  },
};
let customerCity = customer.details?.address?.city;

// … これはオプショナルチェーンの関数呼び出しでも動作します
let customerName = customer.name?.getName?.(); // メソッドが存在しないので、 customerName は undefined
```

### Null 合体演算子と共に使う

{{JSxRef("Operators/Nullish_Coalescing_Operator", "Null 合体演算子", '', 1)}}はオプショナルチェーンの後につけることで、値が存在しなかったときの既定値を指定することができます。

```js
let customer = {
  name: "Carl",
  details: { age: 82 },
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{JSxRef("Operators/Nullish_Coalescing_Operator", "Null 合体演算子", '', 1)}}
