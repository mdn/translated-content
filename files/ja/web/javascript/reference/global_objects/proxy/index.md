---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
l10n:
  sourceCommit: 0d4a751b6265b81a6564dde51318b2e391639713
---

{{JSRef}}

**`Proxy`** オブジェクトにより別なオブジェクトのプロキシーを作成することができ、そのオブジェクトの基本的な操作に介入したり再定義したりすることができます。

## 解説

`Proxy` オブジェクトは、元のオブジェクトの代わりに使用できるオブジェクトを作成することができますが、プロパティの取得、設定、定義などの基本的な `Object` 操作を再定義することができます。プロキシーオブジェクトは一般的に、プロパティアクセスのログを取ったり、入力の検証、書式化、サニタイズを行ったりするのに使用されます。

`Proxy` は 2 つの引数で作成されます。

- `target`: プロキシーを設定する元のオブジェクトです。
- `handler`: どの操作に介入するか、また介入された操作をどのように再定義するかを定義するオブジェクトです。

例えば、このコードは `target` オブジェクトのプロキシーを作成します。

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

ハンドラーは空なので、このプロキシーは元のターゲットと同様に動作します。

```js
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone
```

プロキシーをカスタマイズするには、ハンドラーオブジェクトに関数を定義します。

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler2 = {
  get(target, prop, receiver) {
    return "world";
  },
};

const proxy2 = new Proxy(target, handler2);
```

ここで {{jsxref("Global_Objects/Proxy/Proxy/get", "get()")}} ハンドラーを実装し、ターゲットのプロパティへのアクセスに介入します。

ハンドラー関数は*トラップ*と呼ばれることがありますが、これはおそらくターゲットオブジェクトへの呼び出しをトラップするからでしょう。上記の `handler2` のとても単純なトラップは、すべてのプロパティアクセサーを再定義します。

```js
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```

プロキシーは {{jsxref("Reflect")}} オブジェクトと共に使用されることが多く、このオブジェクトは `Proxy` トラップと同じ名前のメソッドをいくつか提供しています。`Reflect` メソッドは、対応する[オブジェクト内部メソッド](#オブジェクト内部メソッド)を呼び出すための反射的な意味づけを提供するものです。例として、オブジェクトの動作を再定義したくない場合、次のように `Reflect.get` を呼び出すことができます。

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world
```

`Reflect` メソッドは、オブジェクトの内部メソッドを通じてオブジェクトとやりとりすることに変わりはありません。プロキシー上で呼び出されても、プロキシーを「脱プロキシー」することはありません。プロキシートラップ内で `Reflect` メソッドを使用し、`Reflect` メソッド呼び出しが再びトラップに介入した場合、無限の再帰が発生する可能性があります。

### 用語集

プロキシーの機能について語るとき、以下の用語が使用されます。

- [ハンドラー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy#ハンドラー関数)
  - : `Proxy` コンストラクターの 2 つ目の引数として渡されるオブジェクト。プロキシーの動作を定義するトラップが格納されています。
- トラップ
  - : 対応する[オブジェクト内部メソッド](#オブジェクト内部メソッド)の振る舞いを定義する関数です。（これは、オペレーティングシステムにおける「トラップ」の概念に似ています。）
- ターゲット
  - : プロキシーが仮想化するオブジェクト。プロキシーのストレージバックエンドとして多く使用されます。オブジェクトの非拡張性または設定不可能なプロパティに関するインバリアント（変更されない意味づけ）は、対象に対して検証されます。
- 不変条件
  - : カスタム処理を実装しても変わらない意味づけ。トラップの実装がハンドラーの不変条件に違反する場合、{{jsxref("TypeError")}}が発生します。

### オブジェクト内部メソッド

[オブジェクト](/ja/docs/Web/JavaScript/Data_structures#オブジェクト)はプロパティの集合体です。しかし、この言語では、オブジェクトに格納されたデータを直接操作するための仕組みは提供されていません。むしろ、オブジェクトは、オブジェクトと対話する方法を指定するいくつかの内部メソッドを定義します。例えば、`obj.x` を読んだとき、以下のようなことが起こると予想されます。

- `x` プロパティは、得られるまで[プロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)が検索される。
- `x` がデータプロパティの場合、プロパティ記述子の `value` 属性が返される。
- `x` がアクセサプロパティの場合、ゲッターを呼び出すと、ゲッターの返値が返される。

言語上、この処理について特別なことは何もありません。既定では、普通のオブジェクトがこの動作で定義された `[[Get]]` 内部メソッドを持っているからに他なりません。`obj.x` プロパティアクセス構文は、単にオブジェクトの `[[Get]]` メソッドを呼び出すだけで、オブジェクトは自分自身で内部メソッドの実装を使用して、返す値を決定します。

別の例として、[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)は通常のオブジェクトと異なり、魔法の[`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length) プロパティがあり、変更すると自動的に空のスロットに割り当てられたり配列の要素が削除されます。同様に、配列の要素を追加すると、自動的に `length` プロパティが変更されます。これは、配列には `[[DefineOwnProperty]]` という内部メソッドがあり、それが、整数の添字の位置に書き込みが行われたときに `length` を更新したり、`length` が書き込まれたときに配列の内容を更新したりするということを知っているからです。このような、通常のオブジェクトとは異なる実装を持つ内部メソッドを持つオブジェクトは、_エキゾチックオブジェクト_ と呼ばれます。プロキシーオブジェクトは、自分自身でエキゾチックオブジェクトを定義することができます。

すべてのオブジェクトは、以下の内部メソッドを保持しています。

| 内部メソッド            | 対応するトラップ                                                                 |
| ----------------------- | -------------------------------------------------------------------------------- |
| `[[GetPrototypeOf]]`    | {{jsxref("Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}}                     |
| `[[SetPrototypeOf]]`    | {{jsxref("Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}}                     |
| `[[IsExtensible]]`      | {{jsxref("Proxy/Proxy/isExtensible", "isExtensible()")}}                         |
| `[[PreventExtensions]]` | {{jsxref("Proxy/Proxy/preventExtensions", "preventExtensions()")}}               |
| `[[GetOwnProperty]]`    | {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "getOwnPropertyDescriptor()")}} |
| `[[DefineOwnProperty]]` | {{jsxref("Proxy/Proxy/defineProperty", "defineProperty()")}}                     |
| `[[HasProperty]]`       | {{jsxref("Proxy/Proxy/has", "has()")}}                                           |
| `[[Get]]`               | {{jsxref("Proxy/Proxy/get", "get()")}}                                           |
| `[[Set]]`               | {{jsxref("Proxy/Proxy/set", "set()")}}                                           |
| `[[Delete]]`            | {{jsxref("Proxy/Proxy/deleteProperty", "deleteProperty()")}}                     |
| `[[OwnPropertyKeys]]`   | {{jsxref("Proxy/Proxy/ownKeys", "ownKeys()")}}                                   |

また、関数オブジェクトは以下の内部メソッドも保有します。

| 内部メソッド    | 対応するトラップ                                   |
| --------------- | -------------------------------------------------- |
| `[[Call]]`      | {{jsxref("Proxy/Proxy/apply", "apply()")}}         |
| `[[Construct]]` | {{jsxref("Proxy/Proxy/construct", "construct()")}} |

オブジェクトとやりとりするものはすべて、最終的にはこれらの内部メソッドの呼び出しに帰結し、それらはすべてプロキシーによってカスタマイズ可能であることを理解することは重要です。つまり、ほぼすべての動作が（ある重要な不変条件を除いて）言語で保証されているわけではなく、すべてがオブジェクト自身によって定義されるのです。[`delete obj.x`](/ja/docs/Web/JavaScript/Reference/Operators/delete) を実行したとき、その後 [`"x" in obj`](/ja/docs/Web/JavaScript/Reference/Operators/in) が `false` を保証しているわけではありません。それはオブジェクトの `[[Delete]]` と `[[HasProperty]]` の実装に依存します。`delete obj.x` はコンソールにログ出力したり、グローバルプロパティを変更したり、あるいは既存のプロパティを削除する代わりに新しいプロパティを定義することもできますが、これらの意味づけは自分のコードでは避けるべきでしょう。

内部メソッドはすべて言語自身によって呼び出されるものであり、JavaScript コードで直接アクセスすることはできません。{{jsxref("Reflect")}} 名前空間は、いくつかの入力正規化/検証の他に、内部メソッドを呼び出す以上のことはほとんどしないメソッドを提供しています。それぞれのトラップのページでは、トラップを呼び出す代表的な場面をいくつか挙げていますが、これらの内部メソッドは、多くの場所で呼び出されます。例えば、配列メソッドはこれらの内部メソッドを通して配列に読み書きするので、[`push()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push) などのメソッドは `get()` や `set()` トラップも呼び出します。

内部メソッドのほとんどは、何をするかは簡単です。混乱しそうなのは `[[Set]]` と `[[DefineOwnProperty]]` の 2 つだけです。通常のオブジェクトの場合、前者はセッターを呼び出しますが、後者は呼びません。（また、`[[Set]]` は既存のプロパティがない場合やプロパティがデータプロパティの場合は内部で `[[DefineOwnProperty]]` を呼び出します。）`obj.x = 1` の構文が `[[Set]]` を使用し、{{jsxref("Object.defineProperty()")}} が `[[DefineOwnProperty]]` を使用することは知っているかもしれませんが、他にも組み込みメソッドや構文がどのような意味で使用するかはすぐにわかることではありません。例えば、[クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)は `[[DefineOwnProperty]]` の意味を使用しており、そのため派生クラスでフィールドを宣言しても、スーパークラスで定義されているセッターは呼び出されません。

## コンストラクター

- {{jsxref("Global_Objects/Proxy/Proxy", "Proxy()")}}
  - : 新しい `Proxy` オブジェクトを生成します。

> **メモ:** `Proxy.prototype` プロパティはないので、`Proxy` インスタンスには特別なプロパティやメソッドはありません。

## 静的メソッド

- {{jsxref("Proxy.revocable()")}}
  - : 取り消し可能な `Proxy` オブジェクトを生成します。

## 例

### 基本的な例

この例では、与えられたプロパティ名がオブジェクトに存在しない場合、既定値である `37` を返します。ここでは {{jsxref("Global_Objects/Proxy/Proxy/get", "get")}} ハンドラーを使用しています。

```js
const handler = {
  get(obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined

console.log("c" in p, p.c); // false, 37
```

### 何もしない転送プロキシー

この例では、プロキシーが、それに対して適用されるすべての操作を転送する先に、ネイティブの JavaScript オブジェクトを使っています。

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37; // 操作はプロキシーへ転送されます

console.log(target.a); // 37 （操作は正しく転送されました）
```

この「何もしないプロキシー」はプレーンな JavaScript オブジェクトに対してはうまくいきますが、DOM 要素、[`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map) オブジェクトなどのネイティブオブジェクト、あるいは内部スロットを持つ何かのオブジェクトに対しては機能しないことに注意してください。詳細は[プライベートプロパティは転送できない](#プライベートプロパティは転送できない)を参照してください。

### プライベートプロパティは転送できない

プロキシーは、やはり異なるアイデンティティを持つ別のオブジェクトであり、ラップされたオブジェクトと外部との間を運営する _プロキシー_ です。そのため、プロキシーは元オブジェクトの[プライベートプロパティ](/ja/docs/Web/JavaScript/Reference/Classes/Private_class_fields)に直接アクセスすることができません。

```js
class Secret {
  #secret;
  constructor(secret) {
    this.#secret = secret;
  }
  get secret() {
    return this.#secret.replace(/\d+/, "[REDACTED]");
  }
}

const aSecret = new Secret("123456");
console.log(aSecret.secret); // [REDACTED]
// 何もしない転送のように見える
const proxy = new Proxy(aSecret, {});
console.log(proxy.secret); // TypeError: Cannot read private member #secret from an object whose class did not declare it
```

これは、プロキシーの `get` トラップを呼び出すと、`this` の値が元の `secret` ではなく `proxy` になるため、`#secret` にはアクセスできないためです。これを修正するには、元の `secret` を `this` として使用してください。

```js
const proxy = new Proxy(aSecret, {
  get(target, prop, receiver) {
    // 既定では、Reflect.get(target, prop, receiver) のようになり、
    // `this` の値が異なるようになります。
    return target[prop];
  },
});
console.log(proxy.secret);
```

メソッドの場合、これはメソッドの `this` 値も元オブジェクトにリダイレクトしなければならないことを意味しています。

```js
class Secret {
  #x = 1;
  x() {
    return this.#x;
  }
}

const aSecret = new Secret();
const proxy = new Proxy(aSecret, {
  get(target, prop, receiver) {
    const value = target[prop];
    if (value instanceof Function) {
      return function (...args) {
        return value.apply(this === receiver ? target : this, args);
      };
    }
    return value;
  },
});
console.log(proxy.x());
```

JavaScript のネイティブオブジェクトの中には、_[内部スロット](https://tc39.es/ecma262/#sec-object-internal-methods-and-internal-slots)_ という、JavaScript コードからはアクセスできないプロパティを持つものがあります。例えば、[`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map) オブジェクトは `[[MapData]]` という内部スロットを持っており、これはマップのキーと値のペアを格納しています。そのため、マップの転送プロキシーを些細なことで作成することはできません。

```js
const proxy = new Proxy(new Map(), {});
console.log(proxy.size); // TypeError: get size method called on incompatible Proxy
```

このことを回避するためには、上で示した "`this`-recovering" プロキシーを使用する必要があります。

### 検証

`Proxy` を使うと、オブジェクトに渡された値を簡単に検証できます。この例では {{jsxref("Global_Objects/Proxy/Proxy/set", "set()")}} ハンドラーを使用しています。

```js
const validator = {
  set(obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("年齢が整数ではありません");
      }
      if (value > 200) {
        throw new RangeError("年齢が不正なようです");
      }
    }

    // 値を保存する既定の挙動
    obj[prop] = value;

    // 値の保存が成功したことを返します。
    return true;
  },
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "young"; // 例外が発生する
person.age = 300; // 例外が発生する
```

### DOM ノードの操作

この例では、2 つの異なる要素の属性を切り替えるために `Proxy` を使用しています。つまり、一方の要素で属性を設定すると、他の 2 種類の要素では属性が解除されます。

`selected` プロパティを持つオブジェクトのプロキシーである `view` オブジェクトを作成します。プロキシーハンドラーは {{jsxref("Proxy/Proxy/set", "set()")}} ハンドラーを定義します。

HTML 要素を `view.selected` に割り当てるとき、その要素の `'aria-selected'` 属性は `true` に設定されます。その後、異なる要素を `view.selected` に割り当てる場合、この要素の `'aria-selected'` 属性は `true` に設定され、前回の要素の `'aria-selected'` 属性は自動的に `false` に設定されます。

```js
const view = new Proxy(
  {
    selected: null,
  },
  {
    set(obj, prop, newval) {
      const oldval = obj[prop];

      if (prop === "selected") {
        if (oldval) {
          oldval.setAttribute("aria-selected", "false");
        }
        if (newval) {
          newval.setAttribute("aria-selected", "true");
        }
      }

      // 値を保存する既定の挙動
      obj[prop] = newval;

      // 成功を示す
      return true;
    },
  },
);

const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");

// select item1:
view.selected = item1;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: true

// selecting item2 de-selects item1:
view.selected = item2;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: false

console.log(`item2: ${item2.getAttribute("aria-selected")}`);
// item2: true
```

### 値補正と追加プロパティ

この `products` プロキシーオブジェクトは、渡された値を評価し、必要であれば配列に変換します。また、 `latestBrowser` という追加プロパティをゲッターとセッターの両方でサポートしています。

```js
const products = new Proxy(
  {
    browsers: ["Firefox", "Chrome"],
  },
  {
    get(obj, prop) {
      // 追加プロパティ
      if (prop === "latestBrowser") {
        return obj.browsers[obj.browsers.length - 1];
      }

      // 値を返す既定の挙動
      return obj[prop];
    },
    set(obj, prop, value) {
      // 追加プロパティ
      if (prop === "latestBrowser") {
        obj.browsers.push(value);
        return true;
      }

      // 値が配列でなければ変換
      if (typeof value === "string") {
        value = [value];
      }

      // 値を保存する既定の挙動
      obj[prop] = value;

      // 値の保存が成功したことを返します。
      return true;
    },
  },
);

console.log(products.browsers);
//  ['Firefox', 'Chrome']

products.browsers = "Safari";
//  (間違えて) 文字列を渡す

console.log(products.browsers);
//  ['Safari'] <- 問題ありません、値は配列になっています

products.latestBrowser = "Edge";

console.log(products.browsers);
//  ['Safari', 'Edge']

console.log(products.latestBrowser);
//  'Edge'
```

### 配列要素のオブジェクトをそのプロパティから検索

このプロキシーは配列をいくつかの実用機能で拡張しています。見ての通り、 {{jsxref("Object.defineProperties", "Object.defineProperties()")}} を使わなくても柔軟にプロパティを「定義」できます。この例は、テーブルの列をそのセルから検索するようなコードに応用できます。その場合、ターゲットは {{domxref("HTMLTableElement.rows", "table.rows")}} となります。

```js
const products = new Proxy(
  [
    { name: "Firefox", type: "browser" },
    { name: "SeaMonkey", type: "browser" },
    { name: "Thunderbird", type: "mailer" },
  ],
  {
    get(obj, prop) {
      // 値を返す既定の挙動、prop は通常整数値
      if (prop in obj) {
        return obj[prop];
      }

      // 製品の数を取得、products.length のエイリアス
      if (prop === "number") {
        return obj.length;
      }

      let result;
      const types = {};

      for (const product of obj) {
        if (product.name === prop) {
          result = product;
        }
        if (types[product.type]) {
          types[product.type].push(product);
        } else {
          types[product.type] = [product];
        }
      }

      // 製品を名前で取得
      if (result) {
        return result;
      }

      // 製品を種類で取得
      if (prop in types) {
        return types[prop];
      }

      // 製品の種類を取得
      if (prop === "types") {
        return Object.keys(types);
      }

      return undefined;
    },
  },
);

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products["Firefox"]); // { name: 'Firefox', type: 'browser' }
console.log(products["Chrome"]); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3
```

### 完全なトラップリストの例

ここで、教育的な目的のために、完全なサンプル `traps` リストを作成するために、この種の処理に特に適している _ネイティブ_ オブジェクト、すなわち[単純な Cookie のフレームワーク](https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework)が作成した `docCookies` グローバルオブジェクトをプロキシー化してみることにしましょう。

```js
/*
  const docCookies = ... "docCookies" オブジェクトは下記から取得しています。
  https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework
*/

const docCookies = new Proxy(docCookies, {
  get(target, key) {
    return target[key] ?? target.getItem(key) ?? undefined;
  },
  set(target, key, value) {
    if (key in target) {
      return false;
    }
    return target.setItem(key, value);
  },
  deleteProperty(target, key) {
    if (!(key in target)) {
      return false;
    }
    return target.removeItem(key);
  },
  ownKeys(target) {
    return target.keys();
  },
  has(target, key) {
    return key in target || target.hasItem(key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor && "value" in descriptor) {
      target.setItem(key, descriptor.value);
    }
    return target;
  },
  getOwnPropertyDescriptor(target, key) {
    const value = target.getItem(key);
    return value
      ? {
          value,
          writable: true,
          enumerable: true,
          configurable: false,
        }
      : undefined;
  },
});

/* Cookie のテスト */

console.log((docCookies.myCookie1 = "First value"));
console.log(docCookies.getItem("myCookie1"));

docCookies.setItem("myCookie1", "Changed value");
console.log(docCookies.myCookie1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- ["Proxies are awesome" Brendan Eich の JSConf でのプレゼンテーション](https://www.youtube.com/watch?v=sClk6aB_CPk) ([スライド](https://www.slideshare.net/BrendanEich/metaprog-5303821))
- [プロキシーのチュートリアル](https://web.archive.org/web/20171007221059/https://soft.vub.ac.be/~tvcutsem/proxies/)
