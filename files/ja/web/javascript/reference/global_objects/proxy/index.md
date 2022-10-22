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

| 仕様書                                                                   |
| ------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-proxy-objects', 'Proxy')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy", 2)}}

## 関連情報

- ["Proxies are awesome" Brendan Eich の JSConf でのプレゼンテーション](https://www.youtube.com/watch?v=sClk6aB_CPk) ([スライド](http://www.slideshare.net/BrendanEich/metaprog-5303821))
- [ECMAScript Harmony の Proxy 提案ページ](http://wiki.ecmascript.org/doku.php?id=harmony:proxies) と [ECMAScript Harmony の Proxy 動作ページ](http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics)
- [プロキシチュートリアル](http://web.archive.org/web/20171007221059/http://soft.vub.ac.be/~tvcutsem/proxies/)
- [旧 Proxy API ページ](/ja/docs/JavaScript/Old_Proxy_API)
- {{jsxref("Object.watch()")}} は非標準の機能ですが、 Gecko が長期間サポートしてきました。
- [Observable data structures using Proxy](https://github.com/indiejs/structures)
