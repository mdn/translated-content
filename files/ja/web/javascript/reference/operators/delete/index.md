---
title: delete 演算子
slug: Web/JavaScript/Reference/Operators/delete
---

{{jsSidebar("Operators")}}

JavaScript の **`delete` 演算子**は、オブジェクトからプロパティを削除します。同じプロパティへの参照がそれ以上保持されていない場合は、自動的に解放されます。

{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}

## 構文

```js
delete expression;
```

`expression` は下記のように、[プロパティ](/ja/docs/Glossary/property/JavaScript)への参照として評価されるべきものです。

```js
delete object.property;
delete object["property"];
```

### 引数

- `object`
  - : オブジェクト名、またはオブジェクトとして評価される式です。
- `property`
  - : 削除するプロパティです。

### 返値

プロパティが{{jsxref("Object.hasOwnProperty", "自分自身の", "", 1)}}{{jsxref("Errors/Cant_delete",
 "構成不可", "", 1)}}のプロパティであった場合、 strict モードでなければ `false` を返します。それ以外の場合は `true` を返します。

### 例外

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、プロパティが編集不可の場合、{{jsxref("TypeError")}} が発生します。

## 解説

一般的に信じられていることとは異なり (おそらく [C++ における delete](https://docs.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=vs-2019) のような他のプログラミング言語の影響ですが)、`delete` 演算子は、直接的にメモリーを解放することは**ありません**。メモリーの管理は参照が切れることで間接的に行われます。詳細は[メモリー管理](/ja/docs/Web/JavaScript/Memory_Management)を参照してください。

**`delete`** 演算子は指定したプロパティをオブジェクトから取り除きます。削除に成功すると `true` を返し、そうでなければ `false` を返します。

ただし、次のようなシナリオを考慮することが重要です。

- 削除しようとしたプロパティが存在しない場合、`delete` は何もせずに `true` を返します。
- そのオブジェクトのプロトタイプチェーンに同名のプロパティが存在する場合、削除後はプロトタイプチェーンのプロパティをオブジェクトが使うようになります (つまり、`delete` は自身のプロパティにのみ効果があります)。
- グローバルスコープや関数スコープから {{jsxref("Statements/var","var")}} で宣言されたプロパティは削除できません。

  - そのため、`delete` はグローバルスコープ内の関数を削除できません (関数定義の一部であるか関数式の一部であるかにかかわらず)。
  - (グローバルスコープを除く) オブジェクトの一部である関数は `delete` で削除できます。

- {{jsxref("Statements/let","let")}} や {{jsxref("Statements/const","const")}} で宣言された任意のプロパティはそれらが宣言されたスコープから削除できません。
- 編集不可能なプロパティは削除できません。これには {{jsxref("Math")}} や {{jsxref("Array")}}、{{jsxref("Object")}} のような組み込みオブジェクトのプロパティや {{jsxref("Object.defineProperty()")}} のようなメソッドで編集不可として生成されたプロパティが含まれます。

次のスニペットがシンプルな例です。

```js
var Employee = {
  age: 28,
  name: "abc",
  designation: "developer",
};

console.log(delete Employee.name); // true を返す
console.log(delete Employee.age); // true を返す

// When trying to delete a property that does
// not exist, true is returned
console.log(delete Employee.salary); // true を返す
```

### 編集不可のプロパティ

プロパティが編集不可に設定されているとき、`delete` は何もせずに `false` を返します。strict モードでは、これは `TypeError` を生成します。

```js
var Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // false を返す
```

{{jsxref("Statements/var","var")}} や {{jsxref("Statements/let","let")}}、{{jsxref("Statements/const","const")}} は、`delete` 演算子で削除できない編集不可のプロパティを生成します:

```js
var nameOther = "XYZ";

// We can access this global property using:
Object.getOwnPropertyDescriptor(window, "nameOther");

// output: Object {value: "XYZ",
//                  writable: true,
//                  enumerable: true,
//                  configurable: false}

// Since "nameOther" is added using with the
// var keyword, it is marked as "non-configurable"

delete nameOther; // return false
```

strict モードでは、例外が発生します。

### strict モードとそれ以外の違い

strict モードのとき、`delete` が変数や関数の引数、関数名への直接参照に使われた場合、{{jsxref("SyntaxError")}} が発生します。したがって、 strict モードでエラーが発生することを防ぐためには、 `delete` 演算子を `delete object.property` または `delete object['property']` の形で使用する必要があります。

```js
Object.defineProperty(globalThis, "variable1", {
  value: 10,
  configurable: true,
});
Object.defineProperty(globalThis, "variable2", {
  value: 10,
  configurable: false,
});

// strict モードでは SyntaxError
console.log(delete variable1); // true

// strict モードでは SyntaxError
console.log(delete variable2); // false
```

```js
function func(param) {
  // strict モードでは SyntaxError
  console.log(delete param); // false
}

// strict モードでは SyntaxError
console.log(delete func); // false
```

### ブラウザーの互換性の注意

ECMAScript はオブジェクトに対して反復処理を行った時の順序を実装系依存であるとしているにもかかわらず、主要なブラウザーはいずれも、(少なくともプロトタイプ上にないプロパティについては) 最初に追加されたプロパティを最初に処理する順序に対応しているようです。しかし Internet Explorer では、プロパティに対して `delete` を用いたときにややこしい結果になることがあり、これが他のブラウザーが単純なオブジェクトを整列された連想配列のように用いることの障害になります。Internet Explorer では、プロパティの*値*を `undefined` に設定しようとしたとき、後から同じ名前で再びプロパティを追加すると、そのプロパティは*元の*場所で処理されるようになります。削除済みのプロパティを再度追加した場合に予想されるような、最後の場所ではありません。

複数のブラウザーで同じ連想配列を使用したい場合は、可能であれば {{jsxref("Map")}} を使用してください。または、2 つに分けた配列 (片方はキー、もう片方は値) やプロパティを一つだけ持ったオブジェクトの配列を構築するなどの方法でこの構造をシミュレーションしてください。

## 例

```js
// adminName プロパティをグローバルスコープに生成
adminName = "xyz";

// empCount プロパティをグローバルスコープに生成
// var を使用しているため、これは構成不可となります。 let や const でも同じことになります。
var empCount = 43;

EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// adminName はグローバルスコープのプロパティです。
// var を使用せずに生成されたため、構成可能になっているので
// 削除することができます。
delete adminName; // true を返す

// 対照的に、 empCount は var が使用されたので
// 構成可能ではありません。
delete empCount; // false を返す

// delete を使用してオブジェクトからプロパティを削除することができます。
delete EmployeeDetails.name; // true を返す

// プロパティが存在しない場合であっても、 delete は "true" を返します。
delete EmployeeDetails.salary; // true を返す

// delete は組み込み静的プロパティには効果がありません。
delete Math.PI; // false を返す

// EmployeeDetails はグローバルスコープのプロパティです。
// "var" を使用せずに定義されたため、構成可能となっています。
delete EmployeeDetails; // true を返す

function f() {
  var z = 44;

  // delete はローカル変数名には効果がありません。
  delete z; // false を返す
}
```

### `delete` とプロトタイプチェーン

次の例では、プロトタイプチェーン上に同じ名前を持つプロパティがある場合に、オブジェクトの自身のプロパティを削除しています。

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// foo.bar は自身のプロパティに関連付けられて
// います。
console.log(foo.bar); // 10

// foo オブジェクトにある自身のプロパティを
// 削除します。
delete foo.bar; // true を返す

// foo.bar がプロトタイプチェーン上でまだ
// 利用できます。
console.log(foo.bar); // 42

// プロトタイプ上のプロパティを削除します。
delete Foo.prototype.bar; // true を返す

// "bar" プロパティは Foo 上で削除されたので
// 継承されなくなりました。
console.log(foo.bar); // undefined
```

### 配列の要素の削除

配列の要素を削除したとき、配列の `length` は影響を受けません。これは配列の最後の要素を削除しても保持されます。

`delete` 演算子が配列の要素を削除すると、要素は配列からなくなります。 次の例では、`trees[3]` が `delete` で削除されます。

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
if (3 in trees) {
  // これは実行されない
}
```

ある配列の要素を存在したまま未定義の値としたい場合は、`delete` 演算子の代わりに `undefined` 値を使用してください。次の例では、`trees[3]` に `undefined` を割り当てていますが、配列のその要素は存在したままです。

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
if (3 in trees) {
  // これは実行される
}
```

代わりに、配列の内容を変更して配列要素を削除したい場合は、`{{jsxref("Array.splice()", "splice()")}}` メソッドを使用してください。次の例では、{{jsxref("Array.splice()", "splice()")}} を使用して配列から `trees[3]` を削除しています。

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [In depth analysis on
  delete](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
