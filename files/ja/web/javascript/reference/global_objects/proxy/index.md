---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
---

{{JSRef}}

`Proxy` オブジェクトにより別なオブジェクトのプロキシを作成することができ、そのオブジェクトの基本的な操作を傍受したり再定義したりすることができます。

## 解説

`Proxy` は二つの引数で作成されます。

- `target`: プロキシを設定する元のオブジェクトです。
- `handler`: どの操作を傍受するか、また傍受された操作をどのように再定義するかを定義するオブジェクトです。

例えばこのコードでは、二つのプロパティだけを持つシンプルなターゲットと、プロパティを持たないよりシンプルなハンドラーを定義しています。

```js
const target = {
  message1: "hello",
  message2: "everyone"
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

ハンドラーは空なので、このプロキシは元のターゲットと同様に動作します。

```js
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone
```

プロキシをカスタマイズするには、ハンドラーオブジェクトに関数を定義します。

```js
const target = {
  message1: "hello",
  message2: "everyone"
};

const handler2 = {
  get: function(target, prop, receiver) {
    return "world";
  }
};

const proxy2 = new Proxy(target, handler2);
```

ここで {{jsxref("Global_Objects/Proxy/handler/get", "get()")}} ハンドラーを実装し、ターゲットのプロパティへのアクセスを傍受します。

ハンドラー関数は*トラップ*と呼ばれることがありますが、これはおそらくターゲットオブジェクトへの呼び出しをトラップするからでしょう。上記の `handler2` のとても単純なトラップは、すべてのプロパティアクセサーを再定義します。

```js
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```

{{jsxref("Reflect")}} クラスの助けを借りて、いくつかのアクセサーに元の動作を与えたり、ほかのアクセサーを再定義したりすることができます。

```js
const target = {
  message1: "hello",
  message2: "everyone"
};

const handler3 = {
  get: function (target, prop, receiver) {
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

| 内部メソッド         | 対応するトラップ                                                               |
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

| 内部メソッド | 対応するトラップ                                 |
| --------------- | -------------------------------------------------- |
| `[[Call]]`      | {{jsxref("Proxy/Proxy/apply", "apply()")}}         |
| `[[Construct]]` | {{jsxref("Proxy/Proxy/construct", "construct()")}} |

オブジェクトとやりとりするものはすべて、最終的にはこれらの内部メソッドの呼び出しに帰結し、それらはすべてプロキシーによってカスタマイズ可能であることを理解することは重要です。つまり、ほぼすべての動作が（ある重要な不変条件を除いて）言語で保証されているわけではなく、すべてがオブジェクト自身によって定義されるのです。[`delete obj.x`](/ja/docs/Web/JavaScript/Reference/Operators/delete) を実行したとき、その後 [`"x" in obj`](/ja/docs/Web/JavaScript/Reference/Operators/in) が `false` を保証しているわけではありません。それはオブジェクトの `[[Delete]]` と `[[HasProperty]]` の実装に依存します。`delete obj.x` はコンソールにログ出力したり、グローバルプロパティを変更したり、あるいは既存のプロパティを削除する代わりに新しいプロパティを定義することもできますが、これらの意味づけは自分のコードでは避けるべきでしょう。

内部メソッドはすべて言語自身によって呼び出されるものであり、JavaScript コードで直接アクセスすることはできません。{{jsxref("Reflect")}} 名前空間は、いくつかの入力正規化/検証の他に、内部メソッドを呼び出す以上のことはほとんどしないメソッドを提供しています。それぞれのトラップのページでは、トラップを呼び出す代表的な場面をいくつか挙げていますが、これらの内部メソッドは、多くの場所で呼び出されます。例えば、配列メソッドはこれらの内部メソッドを通して配列に読み書きするので、[`push()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push) などのメソッドは `get()` や `set()` トラップも呼び出します。

内部メソッドのほとんどは、何をするかは簡単です。混乱しそうなのは `[[Set]]` と `[[DefineOwnProperty]]` の 2 つだけです。通常のオブジェクトの場合、前者はセッターを呼び出しますが、後者は呼びません。（また、`[[Set]]` は既存のプロパティがない場合やプロパティがデータプロパティの場合は内部で `[[DefineOwnProperty]]` を呼び出します。）`obj.x = 1` の構文が `[[Set]]` を使用し、{{jsxref("Object.defineProperty()")}} が `[[DefineOwnProperty]]` を使用することは知っているかもしれませんが、他にも組み込みメソッドや構文がどのような意味で使用するかはすぐにわかることではありません。例えば、[クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)は `[[DefineOwnProperty]]` の意味を使用しており、そのため派生クラスでフィールドを宣言しても、スーパークラスで定義されているセッターは呼び出されません。

## コンストラクター

- {{jsxref("Global_Objects/Proxy/Proxy", "Proxy()")}}
  - : 新しい `Proxy` オブジェクトを生成します。

## 静的メソッド

- {{jsxref("Proxy.revocable()")}}
  - : 取り消し可能な `Proxy` オブジェクトを生成します。

## 例

### 基本的な例

この例では、与えられたプロパティ名がオブジェクトに存在しない場合、既定値である `37` を返します。ここでは {{jsxref("Global_Objects/Proxy/handler/get", "get")}} ハンドラーを使用しています。

```js
const handler = {
  get: function(obj, prop) {
    return prop in obj ?
      obj[prop] :
      37;
  }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
//  1, undefined

console.log('c' in p, p.c);
//  false, 37
```

### 何もしない転送プロキシ

この例では、プロキシが、それに対して適用されるすべての操作を転送する先に、ネイティブの JavaScript オブジェクトを使っています。

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37;
// 操作はプロキシへ転送されます

console.log(target.a);
// 37 が出力されます。
// 操作は正しく転送されました
```

上記のコードは JavaScript オブジェクトでは動作しますが、 DOM 要素などのネイティブのブラウザーオブジェクトでは動作しないことに注意してください。

### 検証

`Proxy` を使うと、オブジェクトに渡された値を簡単に検証できます。この例では {{jsxref("Global_Objects/Proxy/handler/set", "set")}} ハンドラーを使用しています。

```js
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('年齢が整数ではありません');
      }
      if (value > 200) {
        throw new RangeError('年齢が不正なようです');
      }
    }

    // 値を保存する既定の挙動
    obj[prop] = value;

    // 値の保存が成功したことを返します。
    return true;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = 'young';   // 例外が発生する
person.age = 300;       // 例外が発生する
```

### コンストラクターを拡張する

関数の Proxy で、コンストラクターを新たなコンストラクターへ簡単に拡張できます。この例では {{jsxref("Global_Objects/Proxy/handler/construct", "construct")}} および {{jsxref("Global_Objects/Proxy/handler/apply", "apply")}} ハンドラーを使用しています。

```js
function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype, 'constructor'
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  };
  var proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, 'constructor', descriptor);
  return proxy;
}

var Person = function(name) {
  this.name = name;
};

var Boy = extend(Person, function(name, age) {
  this.age = age;
});

Boy.prototype.gender = 'M';

var Peter = new Boy('Peter', 13);

console.log(Peter.gender);  // "M"
console.log(Peter.name);    // "Peter"
console.log(Peter.age);     // 13
```

### DOM ノードの操作

2 つの異なる要素の属性やクラス名を切り替えたい場合があります。それを実現する方法を紹介しましょう。

```js
let view = new Proxy({
  selected: null
},
{
  set: function(obj, prop, newval) {
    let oldval = obj[prop];

    if (prop === 'selected') {
      if (oldval) {
        oldval.setAttribute('aria-selected', 'false');
      }
      if (newval) {
        newval.setAttribute('aria-selected', 'true');
      }
    }

    // 値を保存する既定の挙動
    obj[prop] = newval;

    // 値の保存が成功したことを返します。
    return true;
  }
});

let i1 = view.selected = document.getElementById('item-1');  // ここではエラーが発生し、 i1 は null になります
console.log(i1.getAttribute('aria-selected'));
//  'true'

let i2 = view.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected'));
//  'false'

console.log(i2.getAttribute('aria-selected'));
//  'true'
Note: even if selected: !null, then giving oldval.setAttribute is not a function
```

### 値補正と追加プロパティ

この `products` プロキシオブジェクトは、渡された値を評価し、必要であれば配列に変換します。また、 `latestBrowser` という追加プロパティをゲッターとセッターの両方でサポートしています。

```js
let products = new Proxy({
  browsers: ['Internet Explorer', 'Netscape']
},
{
  get: function(obj, prop) {
    // 追加プロパティ
    if (prop === 'latestBrowser') {
      return obj.browsers[obj.browsers.length - 1];
    }

    // 値を返す既定の挙動
    return obj[prop];
  },
  set: function(obj, prop, value) {
    // 追加プロパティ
    if (prop === 'latestBrowser') {
      obj.browsers.push(value);
      return;
    }

    // 値が配列でなければ変換
    if (typeof value === 'string') {
      value = [value];
    }

    // 値を保存する既定の挙動
    obj[prop] = value;

    // 値の保存が成功したことを返します。
    return true;
  }
});

console.log(products.browsers);
//  ['Internet Explorer', 'Netscape']

products.browsers = 'Firefox';
//  (間違えて) 文字列を渡す

console.log(products.browsers);
//  ['Firefox'] <- 問題ありません、値は配列になっています

products.latestBrowser = 'Chrome';

console.log(products.browsers);
//  ['Firefox', 'Chrome']

console.log(products.latestBrowser);
//  'Chrome'
```

### 配列要素のオブジェクトをそのプロパティから検索

このプロキシは配列をいくつかの実用機能で拡張しています。見ての通り、 {{jsxref("Object.defineProperties", "Object.defineProperties")}} を使わなくても柔軟にプロパティを「定義」できます。この例は、テーブルの列をそのセルから検索するようなコードに応用できます。その場合、ターゲットは {{domxref("HTMLTableElement.rows", "table.rows")}} となります。

```js
let products = new Proxy([
  { name: 'Firefox', type: 'browser' },
  { name: 'SeaMonkey', type: 'browser' },
  { name: 'Thunderbird', type: 'mailer' }
],
{
  get: function(obj, prop) {
    // 値を返す既定の挙動、prop は通常整数値
    if (prop in obj) {
      return obj[prop];
    }

    // 製品の数を取得、products.length のエイリアス
    if (prop === 'number') {
      return obj.length;
    }

    let result, types = {};

    for (let product of obj) {
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
    if (prop === 'types') {
      return Object.keys(types);
    }

    return undefined;
  }
});

console.log(products[0]);          // { name: 'Firefox', type: 'browser' }
console.log(products['Firefox']);  // { name: 'Firefox', type: 'browser' }
console.log(products['Chrome']);   // undefined
console.log(products.browser);     // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types);       // ['browser', 'mailer']
console.log(products.number);      // 3
```

### 完全な `traps` リストの例

教育用に `traps` リストの完全なサンプルを作成するため、そのような操作が特に適している*非ネイティブ*オブジェクトを Proxy 化します。[`document.cookie` のページにある "リトルフレームワーク"](/ja/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support) で生成される `docCookies` グローバルオブジェクトです。

```js
/*
  var docCookies = ... get the "docCookies" object here:
  https://developer.mozilla.org/ja/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/

var docCookies = new Proxy(docCookies, {
  get: function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  set: function (oTarget, sKey, vValue) {
    if (sKey in oTarget) { return false; }
    return oTarget.setItem(sKey, vValue);
  },
  deleteProperty: function (oTarget, sKey) {
    if (sKey in oTarget) { return false; }
    return oTarget.removeItem(sKey);
  },
  enumerate: function (oTarget, sKey) {
    return oTarget.keys();
  },
  ownKeys: function (oTarget, sKey) {
    return oTarget.keys();
  },
  has: function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  defineProperty: function (oTarget, sKey, oDesc) {
    if (oDesc && 'value' in oDesc) { oTarget.setItem(sKey, oDesc.value); }
    return oTarget;
  },
  getOwnPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
      value: vValue,
      writable: true,
      enumerable: true,
      configurable: false
    } : undefined;
  },
});

/* Cookies test */

console.log(docCookies.my_cookie1 = 'First value');
console.log(docCookies.getItem('my_cookie1'));

docCookies.setItem('my_cookie1', 'Changed value');
console.log(docCookies.my_cookie1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy", 2)}}

## 関連情報

- ["Proxies are awesome" Brendan Eich の JSConf でのプレゼンテーション](https://www.youtube.com/watch?v=sClk6aB_CPk) ([スライド](http://www.slideshare.net/BrendanEich/metaprog-5303821))
- [ECMAScript Harmony の Proxy 提案ページ](http://wiki.ecmascript.org/doku.php?id=harmony:proxies) と [ECMAScript Harmony の Proxy 動作ページ](http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics)
- [プロキシチュートリアル](http://web.archive.org/web/20171007221059/http://soft.vub.ac.be/~tvcutsem/proxies/)
- [旧 Proxy API ページ](/ja/docs/JavaScript/Old_Proxy_API)
- {{jsxref("Object.watch()")}} は非標準の機能ですが、 Gecko が長期間サポートしてきました。
- [Observable data structures using Proxy](https://github.com/indiejs/structures)
