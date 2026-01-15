---
title: in 演算子
slug: Web/JavaScript/Reference/Operators/in
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`in`** 演算子は、指定されたプロパティが指定されたオブジェクトにある場合に `true` を返します。

`in`演算子は他のコレクション内の値を検索するために使用することはできません。配列内に特定の値が存在するかどうかを検査するには、 {{jsxref("Array.prototype.includes()")}} を使用してください。 集合の場合は、 {{jsxref("Set.prototype.has()")}} を使用してください。

{{InteractiveExample("JavaScript デモ: in 演算子")}}

```js interactive-example
const car = { make: "Honda", model: "Accord", year: 1998 };

console.log("make" in car);
// 予想される結果: true

delete car.make;
if ("make" in car === false) {
  car.make = "Suzuki";
}

console.log(car.make);
// 予想される結果: "Suzuki"
```

## 構文

```js-nolint
prop in object
#prop in object
```

### 引数

- `prop`
  - : プロパティ名または配列のインデックスを表す文字列式またはシンボルです（シンボルではない場合は、[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列への変換)）。[プライベート要素の識別子](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)である場合もあります。
- `object`
  - : オブジェクト（またはそのプロトタイプチェーン）に、指定された名前 (`prop`) のプロパティが含まれているかどうかを確認するオブジェクト。

### 例外

- {{jsxref("TypeError")}}
  - : `object` がオブジェクトでない場合（つまり、プリミティブ型の場合）に発生します。

## 解説

`in` 演算子は、オブジェクトまたはそのプロトタイプチェーン内に、文字列またはシンボルプロパティが存在するかどうかの検査を行います。継承されていないプロパティのみを調べる場合は、代わりに {{jsxref("Object.hasOwn()")}} を使用してください。

オブジェクトにプロパティが存在しても、その値が `undefined` である場合があります。したがって、 `"x" in obj` は `obj.x !== undefined` とは同等ではありません。プロパティ追加後に `in` が `false` を返すようにするには、そのプロパティの値を `undefined` に設定する代わりに、 [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子を使用してください。

`in` 演算子を使用して、特定の[クラスのプライベートフィールドまたはメソッド](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)がクラスで定義されているかどうかを調べることができます。プロパティが定義されている場合、演算子は `true` を返し、そうでない場合は `false` を返します。これは、そのオブジェクトがそのクラスのコンストラクターで作成された場合にのみ `true` を返すため、「ブランドチェック」と呼ばれています。その後、他のプライベート要素にも安全にアクセスすることができます。

これは特別な構文です。 `in` 演算子の左辺は式ではなくプロパティ識別子ですが、引用符で囲まれていません（囲むと文字列プロパティとなり、プライベート要素ではなくなるため）。

現在のクラスと無関係なオブジェクトのプライベート要素にアクセスすると、`undefined`を返すのではなく {{jsxref("TypeError")}} が発生するため、この構文により以下のように短縮できます。

```js
class C {
  #x;
  static isC(obj) {
    try {
      obj.#x;
      return true;
    } catch {
      return false;
    }
  }
}
```

これが次のようになります。

```js
class C {
  #x;
  static isC(obj) {
    return #x in obj;
  }
}
```

また、一般的に、存在しない可能性のあるプライベート要素にアクセスするためだけにエラーを処理する必要性を避けることができます。

ただし、 `in` 演算子では、プライベート要素を事前に囲みクラスで宣言することが要求されます。そうしないと、宣言されていないプライベート要素にアクセスしようとした場合と同じ {{jsxref("SyntaxError")}} ("Private field '#x' must be declared in an enclosing class") が発生します。

```js-nolint example-bad
class C {
  foo() {
    #x in this;
  }
}

new C().foo(); // SyntaxError: Private field '#x' must be declared in an enclosing class
```

## 例

### 基本的な使い方

次の例で `in` 演算子の使用法を示します。

```js
// 配列
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // true を返す
3 in trees; // true を返す
6 in trees; // false を返す
"bay" in trees; // false を返す (添字の指す値ではなく、添字の数値を指定しなければならない)
"length" in trees; // true を返す (length は Array のプロパティ)
Symbol.iterator in trees; // true を返す (配列は反復可能。 ES2015 以上で動作する)

// 定義済みオブジェクト
"PI" in Math; // true を返す

// ユーザー定義オブジェクト
const myCar = { make: "Honda", model: "Accord", year: 1998 };
"make" in myCar; // true を返す
"model" in myCar; // true を返す
```

`in` 演算子の右側には、オブジェクトを指定しなければなりません。例えば、`String` コンストラクターで作成した文字列は指定できますが、文字列リテラルは指定できません。

```js
const color1 = new String("green");
"length" in color1; // true を返す

const color2 = "coral";
// エラーが発生 (color2 は String オブジェクトではない)
"length" in color2;
```

### 削除済みあるいは未定義状態のプロパティへの `in` の使用

[`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子で削除されたプロパティについては、`in` 演算子は `false` を返します。

```js
const myCar = { make: "Honda", model: "Accord", year: 1998 };
delete myCar.make;
"make" in myCar; // false を返す

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
3 in trees; // false を返す
```

{{jsxref("undefined")}} を設定しているが削除されていないプロパティについて、`in` 演算子は true を返します。

```js
const myCar = { make: "Honda", model: "Accord", year: 1998 };
myCar.make = undefined;
"make" in myCar; // true を返す
```

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
3 in trees; // true を返す
```

`in` 演算子は、空の配列スロットに対して `false` を返します。直接アクセスしても `undefined` が返されます。

```js
const empties = new Array(3);
empties[2]; // undefined を返す
2 in empties; // false を返す
```

これを避けるためには、新しい配列が常に空でない値で埋められるようにするか、配列の終わりを超える位置に書き込まないようにしてください。

```js
const empties = new Array(3).fill(undefined);
2 in empties; // true を返す
```

### 継承されたプロパティ

`in` 演算子はプロトタイプチェーン内のプロパティに対して `true` を返します。オブジェクトを任意のキーと値の組を格納するために使用している場合、これは望ましくない可能性があります。

```js example-bad
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

hasPerson("hasOwnProperty"); // true
```

オブジェクトにキーを保有している場合を調べるには、 {{jsxref("Object.hasOwn()")}} を使用することができます。

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return Object.hasOwn(ages, name);
}

hasPerson("hasOwnProperty"); // false
```

あるいは、その他のバグを避けるために、 [null プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)または {{jsxref("Map")}} を使用して `ages` を格納することを検討してください。

```js example-good
const ages = new Map([
  ["alice", 18],
  ["bob", 27],
]);

function hasPerson(name) {
  return ages.has(name);
}

hasPerson("hasOwnProperty"); // false
```

### in 演算子を使用したブランドチェックの実装

下記のコード断片は、オブジェクトが `Person` コンストラクターで作成されたかを指示する静的関数を示しています。これにより、他のメソッドを安全に実行することができるかどうかを確認できます。

```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static isPerson(o) {
    return #age in o;
  }
  ageDifference(other) {
    return this.#age - other.#age;
  }
}

const p1 = new Person(20);
const p2 = new Person(30);
console.log(p1.ageDifference(p2)); // -10
console.log(Person.isPerson(p1)); // true

if (Person.isPerson(p1) && Person.isPerson(p2)) {
  console.log(p1.ageDifference(p2)); // -10
}
```

これは、次のケースを防ぐのに役立ちます。

```js
const p2 = {};

p1.ageDifference(p2); // TypeError: Cannot read private member #age from an object whose class did not declare it
```

`in` 演算子を使わずに、オブジェクトがプライベート要素をもってかどうかを調べるには、 `try...catch` ブロックを使用する必要があります。

また、これをクラスの [`[Symbol.hasInstance]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) メソッドとして実装することもできます。これにより、 [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) 演算子を使用して同じチェックを実行できます（既定では、オブジェクトのプロトタイプチェーン内の `Person.prototype` の存在のみを調べます）。

```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static [Symbol.hasInstance](o) {
    // Testing `this` to prevent false-positives when
    // calling `instanceof SubclassOfPerson`
    return this === Person && #age in o;
  }
  ageDifference(other) {
    return this.#age - other.#age;
  }
}

const p1 = new Person(20);
const p2 = new Person(30);

if (p1 instanceof Person && p2 instanceof Person) {
  console.log(p1.ageDifference(p2)); // -10
}
```

これ以外の例は、[プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)と[クラスガイド](/ja/docs/Web/JavaScript/Guide/Using_classes#private_fields)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Reflect.has()")}}
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
