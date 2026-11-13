---
title: Object.defineProperty()
short-title: defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Object.defineProperty()`** は静的メソッドで、あるオブジェクトに新しいプロパティを直接定義したり、オブジェクトの既存のプロパティを変更したりして、そのオブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Object.defineProperty()")}}

```js interactive-example
const object = {};

Object.defineProperty(object, "foo", {
  value: 42,
  writable: false,
});

object.foo = 77;
// 厳格モードではエラーが発生

console.log(object.foo);
// 予想される結果: 42
```

## 構文

```js-nolint
Object.defineProperty(obj, prop, descriptor)
```

### 引数

- `obj`
  - : プロパティを定義するオブジェクトです。
- `prop`
  - : 文字列または {{jsxref("Symbol")}} で、定義または変更するプロパティのキーを指定します。
- `descriptor`
  - : 定義または変更するプロパティの記述子です。

### 返値

指定したプロパティが追加または変更された、関数に渡されたオブジェクト。

## 解説

`Object.defineProperty()` で、あるオブジェクトのプロパティを明示的に追加または変更することができます。[代入](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)による通常のプロパティ追加では、プロパティ列挙 ({{jsxref("Statements/for...in", "for...in")}} ループや {{jsxref("Object.keys()")}} メソッドなど) に現れ、値は変更可能で、また{{jsxref("Operators/delete", "削除", "", 1)}}も可能なプロパティが生成されます。このメソッドでは、これらの詳細事項を既定値から変えることが可能です。既定では、 `Object.defineProperty()` を使って追加されたプロパティは書き込み不可、列挙不可、構成不可になります。加えて、 `Object.defineProperty()` は内部メソッドの [`[[DefineOwnProperty]]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) を [`[[Set]]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) の代わりに使用しますので、プロパティが既に存在する場合でも[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)を呼び出しません。

プロパティの記述子は、データ記述子とアクセサー記述子の二つに分かれます。**データ記述子**は値を持つプロパティで、その値は書き換え可能にも不可能にもできます。**アクセサー記述子**は、関数のゲッターとセッターの組で表されるプロパティです。記述子はこれら二種類のどちらかでなければならず、両方になることはできません。

どちらの形でも記述子はオブジェクトで表現します。共通して以下のオプションのキーを持つことができます (注: ここでいう**既定値**とは、`Object.defineProperty()` を使ってプロパティを定義する場合です)。

- `configurable`
  - : これが `false` に設定されていた場合、
    - このプロパティの種類をデータプロパティとアクセサープロパティの間で変更することができません。
    - このプロパティを削除することができません。
    - 記述子の他の属性は変更できません（しかし、 `writable: true` のデータ記述子であれば、 `value` を変更し、 `writable` を `false` に変更することができます）。

    **既定値は `false` です。**

- `enumerable`
  - : `true` である場合のみ、このプロパティは対応するオブジェクトでのプロパティ列挙に現れます。**既定値は `false` です。**

**データ記述子**は以下のオプションキーも持ちます。

- `value`
  - : プロパティに関連づけられた値です。有効な JavaScript の値（数値、オブジェクト、関数など）である必要があります。**既定値は {{jsxref("undefined")}} です。**
- `writable`
  - : `true` である場合のみ、プロパティに関連づけられた値は{{jsxref("Operators#assignment_operators", "代入演算子", "", 1)}}で変更することができます。<br>
    **既定値は `false` です。**

**アクセサー記述子**の場合はオプションとして次のキーも持つことができます。

- `get`
  - : プロパティのゲッターとなる関数で、ゲッターを設けない場合は {{jsxref("undefined")}} です。プロパティにアクセスするとこの関数が引数なしでコールされます。この関数内で `this` はアクセスしようとしたプロパティを持つオブジェクトになります (プロパティを定義するために作成した記述子オブジェクトではありません)。返値はこのプロパティの値として使われます。
    **既定値は {{jsxref("undefined")}} です。**
- `set`
  - : プロパティのセッターとなる関数で、セッターがない場合は {{jsxref("undefined")}} です。プロパティに値が割り当てられたとき、その値を引数としてこの関数がコールされます。この関数内で `this` は割り当てようとしたプロパティを持つオブジェクトになります。
    **既定値は {{jsxref("undefined")}} です。**

記述子に `value`, `writable`, `get`, `set` のいずれのキーもない場合、データ記述子として扱われます。記述子がデータ記述子（`value` または `writable` を持つため）であり、かつアクセサー記述子（`get` または `set` を持つため）である場合、例外が発生します。

これらのキーは必ずしも記述子が直接所有しているとは限らないことに留意してください。継承されたプロパティも同様です。これらの既定を確実に保持するためには、記述子オブジェクトのプロトタイプチェーンにある既存のオブジェクトを前もって凍結するか、すべてのオプションを明示的に指定するか、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を作成します。

```js
const obj = {};
// 1. null プロトタイプの使用: 継承しているプロパティなし
const descriptor = Object.create(null);
descriptor.value = "static";

// 既定で継承不可、変更不可、書換不可
Object.defineProperty(obj, "key", descriptor);

// 明示的な指定
Object.defineProperty(obj, "key2", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// 3. オブジェクトのプロトタイププロパティの追加または除去されるのを防止
// (value, get, set, enumerable, writable, configurable)
Object.freeze(Object.prototype);
```

プロパティが既に存在する場合、 `Object.defineProperty()` は記述子の値とプロパティの現在の構成に従ってプロパティを変更しようとします。

古い記述子の `configurable` 属性が `false` に設定されていた場合、そのプロパティは _構成不可_ と言います。設定不可能なアクセサープロパティの属性を変更することはできませんし、データプロパティとアクセサープロパティの種類を切り替えることもできません。 `writable: true` のデータプロパティでは、値を変更して `writable` 属性を `true` から `false` に変更することが可能です。データプロパティで元の値と同じ値を定義する場合を除き、設定不可能なプロパティ属性（許可されている場合は `value` と `writable` を除く）を変更しようとすると {{jsxref("TypeError")}} が発生します。

現在のプロパティが構成可能な場合、属性を `undefined` に定義すると、その属性は効果的に削除されます。例えば、 `o.k` がアクセサープロパティである場合、 `Object.defineProperty(o, "k", { set: undefined })` とするとセッターを除去し、`k` はゲッターのみを持つことになるので、読み取り専用になります。新しい記述子に属性がない場合、古い記述子の属性値は保持されます（暗黙的に `undefined` に再定義されることはありません）。異なる「風味」の記述子を与えることで、データとアクセサープロパティを切り替えることが可能です。例えば、新しい記述子が（`value` または `writable` を持つ）データ記述子の場合、元の記述子の `get` 属性と `set` 属性は両方とも削除されます。

## 例

### プロパティの作成

オブジェクトに指定されたプロパティが存在しないとき、`Object.defineProperty()` は指定された形で新たなプロパティを生成します。記述子のキーは省略することができ、そのようなキーには既定値が適用されます。

```js
const o = {}; // 新しいオブジェクトの生成

// データ記述子により、defineProperty を用いて
// オブジェクトプロパティを追加する例
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// o オブジェクトに 'a' プロパティが存在するようになり、その値は 37 となります

// アクセサー記述子により、defineProperty を用いて
// オブジェクトプロパティを追加する例
let bValue = 38;
Object.defineProperty(o, "b", {
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// o オブジェクトに 'b' プロパティが存在するようになり、
// その値は 38 となります
// o.b は再定義されない限り、その値は常に bValue と同じです。

// （訳注: データとアクセサーの）両方を混在させることはできません。
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get() {
    return 0xdeadbeef;
  },
});
// TypeError が発生します。value はデータ記述子にのみ、
// get はアクセサー記述子にのみ現れます。
```

### プロパティの変更

既存のプロパティを変更するとき、操作が成功するか、何もしないか、{{jsxref("TypeError")}}が発生するかは、現在のプロパティ構成によって決まります。

#### writable 属性

`writable` プロパティ属性が `false` の場合、そのプロパティは「書き込み不可」になります。代入ができなくなります。書き込み不可能なプロパティに書き込もうとすると、変更されず、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)ではエラーになります。

```js
const o = {}; // 新しいオブジェクトの生成

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // 37 がログ出力されます
o.a = 25; // エラーは発生しません
// （厳格モードでは、同じ値を代入したとしても、エラーが発生します。)
console.log(o.a); // 37 がログ出力されます。代入文は動作しません。

// 厳格モード
(() => {
  "use strict";
  const o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // TypeError が発生: "b" is read-only
  return o.b; // 上の行は動作せず 2 が返ります(訳注:正しくは「ここに制御は来ません」)
})();
```

#### enumerable 属性

`enumerable` プロパティ属性は、そのプロパティが {{jsxref("Object.assign()")}} や [スプレッド](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)演算子で認識されるかどうかを定義します。 {{jsxref("Symbol")}} 以外のプロパティでは、 {{jsxref("Statements/for...in", "for...in")}} ループや {{jsxref("Object.keys()")}} に現れるかどうかも定義します。詳細情報については、[プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)を参照してください。

```js
const o = {};
Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
});
Object.defineProperty(o, "b", {
  value: 2,
  enumerable: false,
});
Object.defineProperty(o, "c", {
  value: 3,
}); // enumerable の既定値は false
o.d = 4; // このようにプロパティを生成するとき、 enumerable の既定値は true
Object.defineProperty(o, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (const i in o) {
  console.log(i);
}
// 'a' と 'd' がログ出力されます（常に同じ順序）

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
o.propertyIsEnumerable("d"); // true
o.propertyIsEnumerable(Symbol.for("e")); // true
o.propertyIsEnumerable(Symbol.for("f")); // false

const p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[Symbol.for("e")]; // 5
p[Symbol.for("f")]; // undefined
```

#### configurable 属性

`configurable` 属性は、プロパティをオブジェクトから削除できるかとプロパティの属性 (`value` と `writable` 以外) を変更できるかを制御します。

この例は、構成可能でないアクセサープロパティを示しています。

```js
const o = {};
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", {
  configurable: true,
}); // TypeError が発生
Object.defineProperty(o, "a", {
  enumerable: true,
}); // TypeError が発生
Object.defineProperty(o, "a", {
  set() {},
}); // TypeError が発生 (set は未定義であった)
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
}); // TypeError が発生
// (新たな get は全く同じであるにもかかわらず)
Object.defineProperty(o, "a", {
  value: 12,
}); // TypeError が発生
// ('configurable' が false でも 'value' は変更できますが、ここでは 'get' アクセサーがあるため変更できません)

console.log(o.a); // logs 1
delete o.a; // 何も起きません
console.log(o.a); // logs 1
```

`o.a` の `configurable` 属性が `true` である場合、エラーが発生することなく最終的にプロパティが削除されます。

この例は、構成可能ではないが書き込み可能なデータプロパティを示しています。プロパティの `value` は変更可能で、 `writable` は `true` から `false` に切り替えることができます。

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: true,
  configurable: false,
});
console.log(o.b); // undefined
Object.defineProperty(o, "b", {
  value: 1,
}); // 構成可能な値が false の場合でも、オブジェクトは書き込み可能なので、値を置き換えることができる
console.log(o.b); // 1
o.b = 2; // 割り当てる演算子を使って値を変更することもできる
console.log(o.b); // 2
// プロパティの書き込み可能属性を切り替える
Object.defineProperty(o, "b", {
  writable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: プロパティは書き込みも構成も可能でないため、変更することができない
// この時点で、 'b' をさらに変更したり、書き込み可能な状態に
// 戻したりする方法はありません
```

この例は構成可能な、しかし書き込み不可能なデータプロパティを示しています。プロパティの `value` は `defineProperty` で置き換えることができ（代入演算子ではなく）、`writable` は切り替えることができます。

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: true,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // defineProperty で値を置き換えることができる
console.log(o.b); // 1
o.b = 2; // 厳格モードでは TypeError が発生: 書き込み不可能なプロパティの値を割り当てることで変更することはできる
```

この例は構成可能でなく、書き込み不可のデータプロパティを示しています。プロパティの`値`を含め、プロパティの属性を更新する方法はありません。

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: プロパティは書き込みも構成も可能ではないため、変更することはできない
```

### プロパティおよび既定値の追加

属性の既定値がどう適用されるかを考えることは重要です。値の割り当てに[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)を用いた場合と `Object.defineProperty()` を用いた場合とでは、以下の例で示したとおりに違いがあります。

```js
const o = {};

o.a = 1;
// これは以下と同じです。
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// その一方で、
Object.defineProperty(o, "a", { value: 1 });
// これは以下と同じです。
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### 独自のゲッターおよびセッター

例として自律的に記録を行うオブジェクトを作成してみます。`temperature` プロパティに値が代入されると、配列 `archive` に要素が一つ追加されます。

```js
function Archiver() {
  let temperature = null;
  const archive = [];

  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = () => archive;
}

const arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

次の例では、ゲッターが常に同じ値を返すようにしています。

```js
const pattern = {
  get() {
    return "何を代入しても、この文字列を常に返します";
  },
  set() {
    this.myName = "これは私の名前の文字列です";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myProperty", pattern);
}

const instance = new TestDefineSetAndGet();
instance.myProperty = "test";
console.log(instance.myProperty);
// 何を代入しても、この文字列を常に返します

console.log(instance.myName); // これは私の名前の文字列です
```

### プロパティの継承

アクセサープロパティを継承されると、その派生クラスでもプロパティがアクセスされたり書き換えられるときに `get` と `set` が呼ばれます。これらのメソッドが値を保持するために変数を使っていると、すべてのオブジェクトがその値を共有することになります。

```js
function MyClass() {}

let value;
Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // 1
```

この問題を回避する方法は値を別のプロパティで保持することです。`get` と `set` メソッド内で `this` はアクセス／変更されようとしているプロパティを納めるオブジェクトを指しています。

```js
function MyClass() {}

Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return this.storedX;
  },
  set(x) {
    this.storedX = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // undefined
```

アクセサープロパティとは違い、データプロパティは常にオブジェクト自身に格納されるのであって、プロトタイプに格納されるわけではありません。しかし、書き込み不可能なデータプロパティを継承している場合、継承先オブジェクトでも書き換えは阻止されます。

```js
function MyClass() {}

MyClass.prototype.x = 1;
Object.defineProperty(MyClass.prototype, "y", {
  writable: false,
  value: 1,
});

const a = new MyClass();
a.x = 2;
console.log(a.x); // 2
console.log(MyClass.prototype.x); // 1
a.y = 2; // 無視されます。厳格モードではエラーが発生します
console.log(a.y); // 1
console.log(MyClass.prototype.y); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
