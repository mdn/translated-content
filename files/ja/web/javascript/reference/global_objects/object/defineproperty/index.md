---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
---

{{JSRef}}

静的メソッドの **`Object.defineProperty()`** は、あるオブジェクトに新しいプロパティを直接定義したり、オブジェクトの既存のプロパティを変更したりして、そのオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}

## 構文

```js
Object.defineProperty(obj, prop, descriptor);
```

### 引数

- `obj`
  - : プロパティを定義するオブジェクトです。
- `prop`
  - : 定義または変更するプロパティの名前または {{jsxref("Symbol")}} です。
- `descriptor`
  - : 定義または変更するプロパティの記述子です。

### 返値

この関数に渡されたオブジェクトをそのまま返します。

## 解説

このメソッドで、あるオブジェクトのプロパティを明示的に追加または変更することができます。代入による通常のプロパティ追加では、プロパティ列挙 ({{jsxref("Statements/for...in", "for...in")}} ループや {{jsxref("Object.keys")}} メソッド) に現れ、値は変更可能で、また{{jsxref("Operators/delete", "削除", "", 1)}}も可能なプロパティが生成されます。このメソッドでは、これらの詳細事項を既定値から変えることが可能です。既定では、`Object.defineProperty()` を使って追加された値は不変になります。

プロパティの記述子は、データ記述子とアクセサー記述子の二つに分かれます。**データ記述子**は値を持つプロパティで、その値は書き換え可能にも不可能にもできます。**アクセサー記述子**は、関数のゲッターとセッターの組で表されるプロパティです。記述子はこれら二種類のどちらかでなければならず、両方になることはできません。

どちらの形でも記述子はオブジェクトで表現します。共通して以下のオプションのキーを持つことができます (注: ここでいう**既定値**とは、`Object.defineProperty()` を使ってプロパティを定義する場合です)。

- `configurable`
  - : `true` である場合のみ、この種の記述子を変更することや、対応するオブジェクトからプロパティを削除することができます。
    **既定値は `false` です。**
- `enumerable`
  - : `true` である場合のみ、このプロパティは対応するオブジェクトでのプロパティ列挙に現れます。
    **既定値は `false` です。**

**データ記述子**は以下のオプションキーも持ちます。

- `value`
  - : プロパティに関連づけられた値です。有効な JavaScript の値 (number, object, function など) である必要があります。<br>
    **既定値は {{jsxref("undefined")}} です。**
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

記述子に `value`, `writable`, `get`, `set` のいずれのキーもない場合、データ記述子として扱われます。記述子に `value` または `writable` と、`get` または `set` のキーの両方がある場合は、例外が発生します。

これらのキーは必ずしも記述子が直接所有しているとは限らないことに留意してください。継承されたプロパティも同様です。これらの既定値が存在することを保証するには、先行して {{jsxref("Object")}} を凍結しておくか、すべてのオプションを明示的に指定するか、{{jsxref("Object.create", "Object.create(null)")}} で {{jsxref("null")}} に設定するかします。

```js
// __proto__ を使うやり方
var obj = {};
var descriptor = Object.create(null); // 意図しないキーの継承を防止します。
descriptor.value = "static";

// 既定で継承不可、変更不可、書換不可のプロパティとなります。
Object.defineProperty(obj, "key", descriptor);

// 明示的な指定
Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// 同じオブジェクトを再利用
function withValue(value) {
  var d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: value,
    });

  // 値の代入で重複操作を防ぐ
  if (d.value !== value) d.value = value;

  return d;
}
// このように使います。
Object.defineProperty(obj, "key", withValue("static"));

// freeze が利用できるなら、オブジェクトのプロトタイプのプロパティ
// (value, get, set, enumerable, writable, configurable) を
// 追加・削除することを防ぐことができます。
(Object.freeze || Object)(Object.prototype);
```

## 例

### プロパティの作成

オブジェクトに指定されたプロパティが存在しないとき、`Object.defineProperty()` は指定された形で新たなプロパティを生成します。記述子のキーは省略することができ、そのようなキーには既定値が適用されます。

```js
var o = {}; // 新しいオブジェクトの生成

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
var bValue = 38;
Object.defineProperty(o, "b", {
  // メソッド名ショートハンドを利用しています(ES2015 の機能)。
  // 次のように書いているのと同じことです:
  // get: function() { return bValue; },
  // set: function(newValue) { bValue = newValue; },
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

// (訳注:データとアクセサーを)両方を混在させることはできません:
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get() {
    return 0xdeadbeef;
  },
});
// TypeError が発生します。value はデータ記述子にのみ、
// get はアクセサー記述子にのみ存在していなければなりません。
```

### プロパティの変更

プロパティが既に存在している場合、`Object.defineProperty()` は記述子の値および現在のオブジェクトの設定に基づいて、プロパティの変更を試みます。元の記述子で `configurable` 属性が `false` なら、そのプロパティは「変更不可」です。変更不可のプロパティは記述子の属性を変更することができません。データプロパティで `writable` なら、値を変更することができますし、`writable` 属性を `true` から `false` に変更することができます。変更不可のプロパティはデータとアクセサーの種別を切り替えることはできません。

変更不可なプロパティに変更を加えようとすると、新旧の値が同じでない限り {{jsxref("TypeError")}} が発生します (可能な場合の `value` と `writable` の変更は除きます)。

#### writable 属性

`writable` プロパティ属性が `false` に設定されているとき、そのプロパティは「書き込み不可」になります。代入ができなくなります。

```js
var o = {}; // 新しいオブジェクトの生成

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // 37 がログ出力されます
o.a = 25; // エラーは発生しません
// (strict モードでは発生します。同じ値を代入したとしても。)
console.log(o.a); // 37 がログ出力されます。代入文は動作しません。

// strict mode
(function () {
  "use strict";
  var o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // TypeError がスローされます: "b" is read-only
  return o.b; // 上の行は動作せず 2 が返ります(訳注:正しくは「ここに制御は来ません」)
})();
```

例で見たように、書き込み不可のプロパティに書き込もうとしても変更されず、またエラーは発生しません。

#### enumerable 属性

`enumerable` プロパティ属性は、そのプロパティが {{jsxref("Object.assign()")}} や [スプレッド](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)演算子で採り上げられるかどうかを定義します。{{jsxref("Global_Objects/Symbol", "Symbol")}} 以外のプロパティでは、 {{jsxref("Statements/for...in", "for...in")}} ループや {{jsxref("Object.keys()")}} に現れるかどうかも定義します。

```js
var o = {};
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
o.d = 4; // このようにプロパティを生成するとき、
// enumerable の既定値は true
Object.defineProperty(o, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (var i in o) {
  console.log(i);
}
// 'a' と 'd' がログされます(順不同)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
o.propertyIsEnumerable("d"); // true
o.propertyIsEnumerable(Symbol.for("e")); // true
o.propertyIsEnumerable(Symbol.for("f")); // false

var p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[Symbol.for("e")]; // 5
p[Symbol.for("f")]; // undefined
```

#### configurable 属性

`configurable` 属性は、プロパティをオブジェクトから削除できるかとプロパティの属性 (`value` と `writable` 以外) を変更できるかを同時に制御します。

```js
var o = {};
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
}); // TypeError が発生 (新たな get は全く同じであるにもかかわらず)
Object.defineProperty(o, "a", {
  value: 12,
}); // TypeError が発生 ('configurable' が false でも 'value' は変更できますが、ここでは 'get' アクセサーがあるため変更できません)

console.log(o.a); // logs 1
delete o.a; // 何も起きません
console.log(o.a); // logs 1
```

`o.a` の `configurable` 属性が `true` である場合、エラーが発生することなく最終的にプロパティが削除されます。

### プロパティおよび既定値の追加

属性の既定値がどう適用されるかを考えることは重要です。値の割り当てにドット表記を用いた場合と `Object.defineProperty()` を用いた場合とでは、以下の例で示したとおりに違いがあります。

```js
var o = {};

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
  var temperature = null;
  var archive = [];

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

  this.getArchive = function () {
    return archive;
  };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

次の例では、ゲッターが常に同じ値を返すようにしています。

```js
var pattern = {
  get() {
    return "I always return this string, " + "whatever you have assigned";
  },
  set() {
    this.myname = "this is my name string";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myproperty", pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = "test";
console.log(instance.myproperty);
// I always return this string, whatever you have assigned

console.log(instance.myname); // this is my name string
```

### プロパティの継承

アクセサープロパティを継承されると、その派生クラスでもプロパティがアクセスされたり書き換えられるときに `get` と `set` が呼ばれます。これらのメソッドが値を保持するために変数を使っていると、すべてのオブジェクトがその値を共有することになります。

```js
function myclass() {}

var value;
Object.defineProperty(myclass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  },
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // 1
```

この問題を回避する方法は値を別のプロパティで保持することです。`get` と `set` メソッド内で `this` はアクセス／変更されようとしているプロパティを納めるオブジェクトを指しています。

```js
function myclass() {}

Object.defineProperty(myclass.prototype, "x", {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  },
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // undefined
```

アクセサープロパティとは違い、データプロパティは常にオブジェクト自身に格納されるのであって、prototype に格納されるわけではありません。しかし、書き込み不可能なデータプロパティを継承している場合、継承先オブジェクトでも書き換えは阻止されます。

```js
function myclass() {}

myclass.prototype.x = 1;
Object.defineProperty(myclass.prototype, "y", {
  writable: false,
  value: 1,
});

var a = new myclass();
a.x = 2;
console.log(a.x); // 2
console.log(myclass.prototype.x); // 1
a.y = 2; // 無視されます。strict モードではエラーが発生します
console.log(a.y); // 1
console.log(myclass.prototype.y); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
