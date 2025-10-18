---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Object`** 型は [JavaScript のデータ型](/ja/docs/Web/JavaScript/Guide/Data_structures)の一つを表します。これは様々なキー付きコレクションとより複雑な実体を格納するために使用されます。 Object は {{jsxref("Object/Object", "Object()")}} コンストラクターまたは[オブジェクト初期化子/リテラル構文](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)を使用して生成することができます。

## 解説

JavaScript のほぼすべての[オブジェクト](/ja/docs/Web/JavaScript/Guide/Data_structures#オブジェクト)が `Object` のインスタンスです。一般的なオブジェクトは、プロパティを（メソッドを含めて） `Object.prototype` から継承していますが、これらのプロパティはシャドウ化（別名オーバーライド）されている場合があります。 `Object.prototype` を継承しないオブジェクトは、 [`null` プロトタイプ](#null-プロトタイプオブジェクト)を持つオブジェクトか、その他の `null` プロトタイプオブジェクトの子孫だけです。

`Object.prototype` オブジェクトへの変更は、その変更の対象となるプロパティやメソッドがプロトタイプチェーンに沿ってさらにオーバーライドされない限り、プロトタイプチェーンを通して**すべての**オブジェクトに反映されます。これはとても強力ですが、オブジェクトの動作をオーバーライドしたり拡張したりするのは潜在的に危険をはらむ仕組みでもあります。より安全にするために、 `Object.prototype` は JavaScript のコア言語で唯一、[不変のプロトタイプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#解説)を持つオブジェクトです。 `Object.prototype` のプロトタイプは常に `null` であり、変更できません。

### Object の prototype プロパティ

インスタンスから `Object.prototype` のメソッドを直接呼び出すことは避けるべきです。特に、多態性が意図されていないメソッド（つまり、初期の動作だけが意味を持ち、子孫オブジェクトが意味のある方法でそれを上書きすることはできないメソッド）は避けるべきです。 `Object.prototype` から子孫するすべてのオブジェクトは、同じ名前を持つが、期待するものとはまったく異なる意味づけを持つ、カスタムの自分自身でプロパティを定義することができます。さらに、これらのプロパティは [`null` プロトタイプオブジェクト](#null_プロトタイプオブジェクト)には継承されません。オブジェクトを作業するための現行の JavaScript ユーティリティはすべて[静的](#静的メソッド)です。もっと具体的には、次の通りです。

- [`valueOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)、[`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)、[`toLocaleString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) は多態的な実装として存在し、オブジェクトが賢明な振る舞いを持つ自分自身の実装を定義していることを期待する必要があるので、インスタンスメソッドとして呼び出すことができます。しかし、`valueOf()` と `toString()` は通常、[型変換](/ja/docs/Web/JavaScript/Guide/Data_structures#型変換)によって暗黙のうちに呼び出されるので、コードの中で自分で呼び出す必要はありません。
- [`__defineGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)、[`__defineSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)、[`__lookupGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)、[`__lookupSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) は非推奨であり、使用すべきではありません。代わりに静的な代替である {{jsxref("Object.defineProperty()")}} や {{jsxref("Object.getOwnPropertyDescriptor()")}} を使用してください。
- [`__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) プロパティは非推奨であり、使用すべきではありません。代替である {{jsxref("Object.getPrototypeOf()")}} および {{jsxref("Object.setPrototypeOf()")}} は静的メソッドです。
- [`propertyIsEnumerable()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) および [`hasOwnProperty()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) メソッドは、それぞれ {{jsxref("Object.getOwnPropertyDescriptor()")}} および {{jsxref("Object.hasOwn()")}} 静的メソッドに置き換えることができます。
- [`isPrototypeOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) メソッドは通常、コンストラクターの `prototype` プロパティを検査しているのであれば、[`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) で置き換えられます。

意味的に等価な静的メソッドが存在しない場合、または `Object.prototype` メソッドを本当に使用したい場合は、オブジェクトが予期しない結果をもたらすオーバーライドプロパティを保有しないように、代わりに対象とするオブジェクトの `Object.prototype` メソッドを直接 [`call()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call) を呼び出す必要があります。

```js
const obj = {
  foo: 1,
  // 自分自身でこのようなメソッドを定義すべきではありませんが、
  // 外部入力からオブジェクトを受け取っている場合には、このような
  // ことが起こらないようにすることはできないかもしれません。
  propertyIsEnumerable() {
    return false;
  },
};

obj.propertyIsEnumerable("foo"); // false; 予期しない結果
Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true; 期待通りの結果
```

### オブジェクトからのプロパティの削除

オブジェクト自体には、自身のプロパティを削除するメソッド ({{jsxref("Map.prototype.delete", "Map.prototype.delete()")}} のようなもの) はありません。これを行うには、 {{jsxref("Operators/delete", "delete")}} 演算子を使用する必要があります。

### null プロトタイプオブジェクト

JavaScript では、ほぼすべてのオブジェクトが最終的に `Object.prototype` から継承しています（[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)を参照）。ただし、 `null` プロトタイプオブジェクトは [`Object.create(null)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create) や[オブジェクト初期化子構文](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer) で `__proto__: null` とすることで作成することができます（注: オブジェクトリテラル内の `__proto__` キーは非推奨の [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) プロパティとは異なります）。既存のオブジェクトのプロトタイプを `null` に変更するには、 [`Object.setPrototypeOf(obj, null)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) を呼び出してください。

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

プロトタイプが `null` のオブジェクトは、`Object.prototype` からオブジェクトメソッドを継承していないため、予期しない動作をすることがあります。これは特にデバッグ時に当てはまります。一般的なオブジェクトプロパティの変換/検出ユーティリティ関数はエラーを生成したり、情報を失う可能性があるからです（特に、エラーを無視する暗黙のエラートラップを使用していた場合）。

例えば、 [`Object.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) がないため、デバッグが難しくなることがよくあります。

```js
const normalObj = {}; // 通常のオブジェクトを作成
const nullProtoObj = Object.create(null); // プロトタイプが "null" であるオブジェクトを作成

console.log(`normalObj is: ${normalObj}`); // "normalObj is: [object Object]" と表示
console.log(`nullProtoObj is: ${nullProtoObj}`); // エラー: Cannot convert object to primitive value が発生

alert(normalObj); // [object Object] と表示
alert(nullProtoObj); // エラー: Cannot convert object to primitive value が発生
```

他のメソッドも失敗します。

```js
normalObj.valueOf(); // {} と表示
nullProtoObj.valueOf(); // エラー: nullProtoObj.valueOf is not a function が発生

normalObj.hasOwnProperty("p"); // "true" と表示
nullProtoObj.hasOwnProperty("p"); // エラー: nullProtoObj.hasOwnProperty is not a function が発生

normalObj.constructor; // "Object() { [native code] }" と表示
nullProtoObj.constructor; // "undefined" と表示
```

`toString` メソッドを null プロトタイプオブジェクトに割り当てることで追加することができます。

```js
nullProtoObj.toString = Object.prototype.toString; // 新しいオブジェクトに toString が欠けているため、元の汎用的なものを追加しなおす

console.log(nullProtoObj.toString()); // "[object Object]" と表示
console.log(`nullProtoObj is: ${nullProtoObj}`); // "nullProtoObj is: [object Object]" と表示
```

通常のオブジェクトが `toString()` をオブジェクトのプロトタイプに持つのとは異なり、ここでの `toString()` メソッドは `nullProtoObj` の自分自身のプロパティです。これは `nullProtoObj` には (`null`) プロトタイプがないからです。

また、 [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) を用いて、 null プロトタイプオブジェクトを普通のオブジェクトに戻すこともできます。

実際には、 `null` プロトタイプを持つオブジェクトは通常、[マップ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map)の安価な代用として使用されます。 `Object.prototype` プロパティが存在すると、いくつかのバグが発生します。

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]
```

null プロトタイプオブジェクトを使用することで、 `hasPerson` 関数や `getAge` 関数にあまり複雑さをもたらすことなく、この危険性を除去することができます。

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

このような場合、データとして格納される他のキーと値のペアと混同される可能性があるため、メソッドの追加は慎重に行う必要があります。

オブジェクトを `Object.prototype` から継承しないようにすることで、プロトタイプ汚染攻撃を防ぐこともできます。悪意のあるスクリプトが `Object.prototype` にプロパティを追加した場合、プロトタイプが null であるオブジェクト以外のプログラム内のすべてのオブジェクトにアクセスすることができます。

```js
const user = {};

// 悪意のあるスクリプト
Object.prototype.authenticated = true;

// 認証されていないユーザーを通過させる予期せぬ行為
if (user.authenticated) {
  // 機密データにアクセス
}
```

JavaScript には `null` プロトタイプオブジェクトを生成する組み込み API もあり、特にオブジェクトをアドホックなキー値の集合として使用しています。例えば、次のようなものです。

- {{jsxref("Object.groupBy()")}} の返値
- {{jsxref("RegExp.prototype.exec()")}} の返値の `groups` および `indices.groups` プロパティ
- [`Array.prototype[Symbol.unscopables]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) （すべての `[Symbol.unscopables]` オブジェクトはプロトタイプが `null` である）
- [`import.meta`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta)
- モジュールの名前空間オブジェクト。 [`import * as ns from "module";`](/ja/docs/Web/JavaScript/Reference/Statements/import#namespace_import) または [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import) から取得したもの。

「`null` プロトタイプオブジェクト」という用語には、よくプロトタイプチェーンに `Object.prototype` がないオブジェクトも含みます。このようなオブジェクトは、クラスを使用するときに [`extends null`](/ja/docs/Web/JavaScript/Reference/Classes/extends#extending_null) で作成することができます。

### オブジェクト変換

オブジェクトを期待する組み込み処理の多くは、最初に引数をオブジェクトに変換します。この[処理](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject)をまとめると以下のようになります。

- オブジェクトはそのまま返されます。
- [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) および [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の場合は {{jsxref("TypeError")}} が発生します。
- {{jsxref("Number", "数値")}}、{{jsxref("String", "文字列")}}、{{jsxref("Boolean", "論理値")}}、{{jsxref("Symbol", "シンボル")}}、{{jsxref("BigInt", "長整数")}}のプリミティブは、それぞれ対応するオブジェクトラッパーに変換されます。

JavaScript でほぼ同じ効果を得るには 2 つの方法があります。

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` は、上記で説明したオブジェクト変換の段階と全く同じように、 `x` を変換します。
- {{jsxref("Object/Object", "Object()")}} 関数: `Object(x)` は `x` を変換するために同じアルゴリズムを使用しますが、`undefined` と `null` は {{jsxref("TypeError")}} を発生しません。

オブジェクト変換を使用する場所には以下のようなものがあります。

- [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループの `object` 引数。
- {{jsxref("Array")}} メソッドの `this` 値。
- `Object` のメソッド、例えば {{jsxref("Object.keys()")}} の引数。
- プリミティブ値はプロパティを持たないため、プリミティブ値に対してプロパティがアクセスされると自動的にボックス化されます。
- 厳格モードでない関数を呼び出したときの [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) 値。プリミティブはボックス化され、 `null` と `undefined` は[グローバルオブジェクト](/ja/docs/Glossary/Global_object)に置き換わります。

[プリミティブ変換](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)とは異なり、オブジェクト変換処理は `toString` メソッドや `valueOf` メソッドのようなカスタムコードを呼び出さないので、それ自体は何か方法で監視することはできません。

## コンストラクター

- {{jsxref("Object/Object", "Object()")}}
  - : 新しい `Object` オブジェクトを生成します。これは指定された値のラッパーです。

## 静的メソッド

- {{jsxref("Object.assign()")}}
  - : 1 個以上のソースオブジェクトから、自身の列挙可能なプロパティの値をすべてターゲットオブジェクトにコピーします。
- {{jsxref("Object.create()")}}
  - : 指定されたプロトタイプオブジェクトとプロパティから、新しいオブジェクトを生成します。
- {{jsxref("Object.defineProperties()")}}
  - : 指定された記述子で記述された名前付きプロパティをオブジェクトへ追加します。
- {{jsxref("Object.defineProperty()")}}
  - : 指定された記述子で記述された複数の名前付きプロパティをオブジェクトへ追加します。
- {{jsxref("Object.entries()")}}
  - : 指定されたオブジェクト**自身**の列挙可能な文字列プロパティのすべての `[key, value]` の組を含む配列を返します。
- {{jsxref("Object.freeze()")}}
  - : オブジェクトを凍結します。他のコードがプロパティを削除したり変更したりすることができなくなります。
- {{jsxref("Object.fromEntries()")}}
  - : 反復可能な `[key, value]` の組から新しいオブジェクトを返します。(これは {{jsxref("Object.entries")}} の逆です。)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : オブジェクトの名前付きプロパティに対応するプロパティ記述子を返します。
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : オブジェクト自身のすべてのプロパティの記述子を含むオブジェクトを返します。
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : 指定したオブジェクト**自身**の列挙可能および列挙不可なすべてのプロパティの名前を、配列として返します。
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : 指定したオブジェクト上に直接存在するすべてのシンボルプロパティからなる配列を返します。
- {{jsxref("Object.getPrototypeOf()")}}
  - : 指定されたオブジェクトのプロトタイプ (内部の `[[Prototype]]` プロパティ) を返します。
- {{jsxref("Object.groupBy()")}}
  - : 指定されたイテレーターの要素を、指定されたコールバック関数が返す文字列値に従ってグループ化します。返されるオブジェクトは、グループごとに別個のプロパティを持ち、グループ内の要素を格納した配列を含みます。
- {{jsxref("Object.hasOwn()")}}
  - : 指定したオブジェクトが、指定したプロパティを自身のプロパティとして持っている場合は `true` を返し、そのプロパティが継承されているか存在しない場合は `false` を返します。
- {{jsxref("Object.is()")}}
  - : 2 つの値が同じ値であるかどうかを比較します。 `NaN` 値はすべて同じものとして扱われます（`IsLooselyEqual` ([`==`](/ja/docs/Web/JavaScript/Reference/Operators/Equality)) および `IsStrictlyEqual` ([`===`](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)) のどちらとも異なります）。
- {{jsxref("Object.isExtensible()")}}
  - : オブジェクトの拡張が許可されているかどうかを判定します。
- {{jsxref("Object.isFrozen()")}}
  - : オブジェクトが凍結されているかどうかを判定します。
- {{jsxref("Object.isSealed()")}}
  - : オブジェクトが封印されているかどうかを判定します。
- {{jsxref("Object.keys()")}}
  - : 指定されたオブジェクト**自身**の列挙可能なプロパティの名前をすべて含む配列を返します。
- {{jsxref("Object.preventExtensions()")}}
  - : オブジェクトのあらゆる拡張を抑止します。
- {{jsxref("Object.seal()")}}
  - : オブジェクトのプロパティを削除するほかのコードを抑止します。
- {{jsxref("Object.setPrototypeOf()")}}
  - : オブジェクトのプロトタイプ (内部の `[[Prototype]]` プロパティ) を設定します。
- {{jsxref("Object.values()")}}
  - : 与えられたオブジェクト**自身**の列挙可能な文字列プロパティすべてに対応する値を含む配列を返します。

## インスタンスプロパティ

これらのプロパティは `Object.prototype` で定義されており、すべての `Object` インスタンスで共有されます。

- [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : オブジェクトがインスタンス化されたときにプロトタイプとして使用したオブジェクトを指します。
- {{jsxref("Object.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。プレーンな `Object` インスタンスの場合、初期値は {{jsxref("Object/Object", "Object")}} コンストラクターです。他のコンストラクターのインスタンスは、それぞれの `Constructor.prototype` オブジェクトから `constructor` プロパティを継承します。

## インスタンスメソッド

- [`Object.prototype.__defineGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{deprecated_inline}}
  - : 関数をプロパティに関連付けます。そのプロパティにアクセスすると、その関数を実行して返値を返すようにします。
- [`Object.prototype.__defineSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{deprecated_inline}}
  - : 関数をプロパティに関連付け、設定されるとプロパティを変更する関数を実行するようにします。
- [`Object.prototype.__lookupGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{deprecated_inline}}
  - : 指定されたプロパティのゲッター関数として結び付けられた関数を返します。
- [`Object.prototype.__lookupSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{deprecated_inline}}
  - : 指定されたプロパティのセッター関数として結び付けられた関数を返します。
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : オブジェクトが、プロトタイプチェーンを通じて継承されたものではなくオブジェクトの直接のプロパティを持っているかどうかを示す論理値を返します。
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : このメソッドが呼び出されたオブジェクトが、指定されたオブジェクトのプロトタイプチェーンにあるかどうかを示す論理値を返します。
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : 指定したプロパティが、このオブジェクトの[列挙可能な自分自身](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)のプロパティであるかどうかを示す論理値を返します。
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : {{jsxref("Object.toString", "toString()")}} を呼び出します。
- {{jsxref("Object.prototype.toString()")}}
  - : そのオブジェクトの文字列表現を返します。
- {{jsxref("Object.prototype.valueOf()")}}
  - : 指定されたオブジェクトのプリミティブ値を返します。

## 例

### 空のオブジェクトの作成

次の例では、`new`キーワードに様々な引数を指定して、空のオブジェクトを作成しています。

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Object() コンストラクターを用いてプリミティブをそれぞれの型のオブジェクトに変換

{{jsxref("Object/Object", "Object()")}} コンストラクターを使用して、プリミティブ値のオブジェクトラッパーを作成します。

次の例では、{{jsxref("Boolean", "論理値")}}と{{jsxref("BigInt", "長整数")}}の値を格納するオブジェクトである変数 `o1` と `o2` を作成しています。

```js
// const o1 = new Boolean(true) と等価
const o1 = new Object(true);

// BigInt() はコンストラクターとして呼び出せないので等価ではない
// 通所の関数として呼び出した場合はオブジェクトを生成しない
const o2 = new Object(1n);
```

### オブジェクトのプロトタイプ

`Object.prototype` の既存のメソッドの動作を変更するには、既存のロジックの前または後で独自の拡張を囲む形でコードを挿入するようにしてください。例えば、この (テストされていない) コードは、組み込みロジックや誰かの拡張機能が実行される前に、条件付きで独自のロジックを実行します。

フックを使ってプロトタイプを変更する場合は、関数で `apply()` を呼び出すことで、 `this` と引数 (呼び出し状態) を現在の動作に渡します。このパターンは、`Node.prototype` や `Function.prototype` など、どんなプロトタイプにも使えます。

```js
const current = Object.prototype.valueOf;

// プロパティ "-prop-value" は横断的で、同じプロトタイプチェーン上に
// あるとは限らないので、 Object.prototype を修正したいと思います。
Object.prototype.valueOf = function (...args) {
  if (Object.hasOwn(this, "-prop-value")) {
    return this["-prop-value"];
  }
  // 私のオブジェクトのようには見えないので、現在の動作をできる限り再現して、
  // 既定の動作にフォールバックします。
  // apply は、他のいくつかの言語における "super" のような動作をします。
  // valueOf() は引数を取りませんが、他のフックによっては取るかもしれません。
  return current.apply(this, args);
};
```

> [!WARNING]
> 組み込みコンストラクターの `prototype` プロパティを変更することは、悪い習慣であり、前方互換性を危険にさらすものです。

プロトタイプについては[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)で詳しく説明されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
