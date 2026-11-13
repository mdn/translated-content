---
title: delete
slug: Web/JavaScript/Reference/Operators/delete
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

**`delete`** 演算子は、オブジェクトからプロパティを除去します。プロパティの値がオブジェクトであり、そのオブジェクトへの参照がこれ以上存在しない場合、そのプロパティが保持するオブジェクトは最終的に自動的に解放されます。

{{InteractiveExample("JavaScript デモ: delete 演算子")}}

```js interactive-example
const employee = {
  firstName: "Maria",
  lastName: "Sanchez",
};

console.log(employee.firstName);
// 予想される結果: "Maria"

delete employee.firstName;

console.log(employee.firstName);
// 予想される結果: undefined
```

## 構文

```js-nolint
delete object.property
delete object[property]
```

> [!NOTE]
> `delete` 演算子の次の式は、より幅広い構文が許容されますが、意味のある動作をもたらすのは上記の方法のみです。

### 引数

- `object`
  - : オブジェクト名、またはオブジェクトとして評価される式です。
- `property`
  - : 削除するプロパティです。

### 返値

プロパティが[自己](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)の[構成不可](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable)プロパティであった場合、厳格モードでなければ `false` を返します。それ以外の場合は `true` を返します。

### 例外

- {{jsxref("TypeError")}}
  - : [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で、このプロパティが自己の構成不可プロパティである場合は発生します。
- {{jsxref("ReferenceError")}}
  - : `object` が [`super`](/ja/docs/Web/JavaScript/Reference/Operators/super) である場合に発生します。

## 解説

`delete` 演算子は、[優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)が他の単項演算子（例：[`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof)）と同等です。
したがって、より優先度の高い演算子で構成される任意の式を受け入れます。ただし、以下の形式は[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)において早期の構文エラーが発生します。

```js-nolint example-bad
delete identifier;
delete object.#privateProperty;
```

[クラス](/ja/docs/Web/JavaScript/Reference/Classes)は自動的に厳格モードで動作し、[プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)はクラス本体内でのみ合法的に参照できるため、プライベート要素が削除されることは決してありません。 `delete 識別子` は、`識別子` がグローバルオブジェクトの構成不可プロパティを参照している場合に[機能する可能性があります](#グローバルプロパティの削除)が、この形式は避けるべきであり、代わりに [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) を接頭辞として付けるべきです。

それ以外の式も受け入れられますが、それらは意味のある動作にはつながりません。

```js example-bad
delete console.log(1);
// 1 を出力し、 true を返すが、何も削除されない
```

`delete` 演算子は、指定されたプロパティをオブジェクトから取り除きます。削除が成功した場合、`true` を返し、失敗した場合は `false` を返します。一般的に信じられていることとは異なり (おそらく [C++ における delete](https://learn.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=msvc-170) のような他のプログラミング言語の影響ですが)、`delete` 演算子は、直接的にメモリーを解放することは**ありません**。メモリーの管理は参照が切れることで間接的に行われます。詳細は[メモリー管理](/ja/docs/Web/JavaScript/Guide/Memory_management)ページを参照してください。

以下の次のシナリオを考慮することが重要です。

- 削除しようとしたプロパティが存在しない場合、`delete` は何もせずに `true` を返します。
- `delete` は自己のプロパティにのみ効果があります。オブジェクトのプロトタイプチェーン上に同じ名前のプロパティが存在する場合、削除後もオブジェクトはプロトタイプチェーン上のプロパティを使用します。
- 構成不可のプロパティは削除できません。これには {{jsxref("Math")}} や {{jsxref("Array")}}、{{jsxref("Object")}} のような組み込みオブジェクトのプロパティや {{jsxref("Object.defineProperty()")}} のようなメソッドで編集不可として生成されたプロパティが含まれます。
- 変数（関数の引数 を含む）の削除は、一切動作しません。`delete variable` は厳格モードでは {{jsxref("SyntaxError")}} が発生し、厳格モード以外では何の効果もありません。
  - {{jsxref("Statements/var", "var")}} をつけて宣言された変数は、グローバルスコープまたは関数のスコープから削除できません。これらは[グローバルオブジェクト](/ja/docs/Glossary/Global_object)に添付されている可能性がありますが、構成不可であるためです。
  - {{jsxref("Statements/let", "let")}} や {{jsxref("Statements/const", "const")}} で宣言された変数は、オブジェクトに添付されていないため、定義されたスコープ内から削除することはできません。

## 例

### delete の使用

> [!NOTE]
> 次の例では、暗黙的にグローバル変数を生成したり識別子を削除したりするなど、厳格モードでは禁止されている厳格モード非対応の機能のみを使用しています。

```js
// empCount プロパティをグローバルスコープに作成する。
// var を使用しているため、これは構成不可となる
var empCount = 43;

// グローバルスコープに EmployeeDetails プロパティを作成する。
// "var" なしで定義しているため、構成不可となる。
EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// delete を使用してオブジェクトからプロパティを削除することができる。
delete EmployeeDetails.name; // true を返す

// プロパティが存在しない場合であっても、 delete は "true" を返します。
delete EmployeeDetails.salary; // true を返す

// EmployeeDetails はグローバルスコープのプロパティである。
delete EmployeeDetails; // true を返す

// 逆に、 empCount は var が使用されているため構成不可である。
delete empCount; // false を返す

// delete は構成不可の組み込み静的プロパティには効果がない。
delete Math.PI; // false を返す

function f() {
  var z = 44;

  // delete はローカル変数名には効果がない。
  delete z; // false を返す
}
```

### delete とプロトタイプチェーン

次の例では、プロトタイプチェーン上に同じ名前を持つプロパティがある場合に、オブジェクトの自身のプロパティを削除しています。

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

const foo = new Foo();

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
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(3 in trees); // false
```

これによって、空のスロットを持つ[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)が作成されます。ある配列の要素を存在したまま未定義の値としたい場合は、`delete` 演算子の代わりに `undefined` 値を使用してください。次の例では、`trees[3]` に `undefined` を割り当てていますが、配列のその要素は存在したままです。

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
console.log(3 in trees); // true
```

代わりに、配列の内容を変更して配列要素を削除したい場合は、{{jsxref("Array/splice", "splice()")}} メソッドを使用してください。次の例では、{{jsxref("Array/splice", "splice()")}} を使用して配列から `trees[3]` を削除しています。

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

### 構成不可のプロパティの削除

プロパティが構成不可としてマークされている場合、`delete` は何の効果もなく、`false` を返します。厳格モードでは、これは `TypeError` が発生します。

```js
const Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // false を返す
```

{{jsxref("Statements/var", "var")}} は、`delete` 演算子で削除できない構成不可のプロパティを作成する:

```js
// "nameOther" は var キーワードを付けて追加するものであるため、
// 構成不可としてマークされる
var nameOther = "XYZ";

// このグローバルプロパティには以下のようにアクセスすることができる
Object.getOwnPropertyDescriptor(globalThis, "nameOther");
// {
//   value: "XYZ",
//   writable: true,
//   enumerable: true,
//   configurable: false
// }

delete globalThis.nameOther; // false を返す
```

厳格モードでは、これらは例外が発生します。

### グローバルプロパティの削除

グローバルプロパティが構成不可な場合（例えば、直接プロパティ代入による）、そのプロパティは削除することが でき、その後グローバル変数としてそれらを参照すると {{jsxref("ReferenceError")}} が発生します。

```js
globalThis.globalVar = 1;
console.log(globalVar); // 1
// 厳格モードでない場合、`delete globalVar` も使用することができる
delete globalThis.globalVar;
console.log(globalVar); // ReferenceError: globalVar is not defined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
