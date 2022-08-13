---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy
---
<div>{{JSRef}}</div>

<p><code>Proxy</code> オブジェクトにより別なオブジェクトのプロキシを作成することができ、そのオブジェクトの基本的な操作を傍受したり再定義したりすることができます。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Proxy</code> は二つの引数で作成されます。</p>

<ul>
 <li><code>target</code>: プロキシを設定する元のオブジェクトです。</li>
 <li><code>handler</code>: どの操作を傍受するか、また傍受された操作をどのように再定義するかを定義するオブジェクトです。</li>
</ul>

<p>例えばこのコードでは、二つのプロパティだけを持つシンプルなターゲットと、プロパティを持たないよりシンプルなハンドラーを定義しています。</p>

<pre class="brush: js notranslate">const target = {
  message1: "hello",
  message2: "everyone"
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
</pre>

<p>ハンドラーは空なので、このプロキシは元のターゲットと同様に動作します。</p>

<pre class="brush: js notranslate">console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone
</pre>

<p>プロキシをカスタマイズするには、ハンドラーオブジェクトに関数を定義します。</p>

<pre class="brush: js notranslate">const target = {
  message1: "hello",
  message2: "everyone"
};

const handler2 = {
  get: function(target, prop, receiver) {
    return "world";
  }
};

const proxy2 = new Proxy(target, handler2);</pre>

<p>ここで {{jsxref("Global_Objects/Proxy/handler/get", "get()")}} ハンドラーを実装し、ターゲットのプロパティへのアクセスを傍受します。</p>

<p>ハンドラー関数は<em>トラップ</em>と呼ばれることがありますが、これはおそらくターゲットオブジェクトへの呼び出しをトラップするからでしょう。上記の <code>handler2</code> のとても単純なトラップは、すべてのプロパティアクセサーを再定義します。</p>

<pre class="brush: js notranslate">console.log(proxy2.message1); // world
console.log(proxy2.message2); // world</pre>

<p>{{jsxref("Reflect")}} クラスの助けを借りて、いくつかのアクセサーに元の動作を与えたり、ほかのアクセサーを再定義したりすることができます。</p>

<pre class="brush: js notranslate">const target = {
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
console.log(proxy3.message2); // world</pre>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{jsxref("Global_Objects/Proxy/Proxy", "Proxy()")}}</dt>
 <dd>新しい <code>Proxy</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Static_methods" name="Static_methods">静的メソッド</h2>

<dl>
 <dt>{{jsxref("Proxy.revocable()")}}</dt>
 <dd>取り消し可能な <code>Proxy</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Basic_example" name="Basic_example">基本的な例</h3>

<p>この例では、与えられたプロパティ名がオブジェクトに存在しない場合、既定値である <code>37</code> を返します。ここでは {{jsxref("Global_Objects/Proxy/handler/get", "get")}} ハンドラーを使用しています。</p>

<pre class="brush: js notranslate">const handler = {
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
</pre>

<h3 id="No-op_forwarding_proxy" name="No-op_forwarding_proxy">何もしない転送プロキシ</h3>

<p>この例では、プロキシが、それに対して適用されるすべての操作を転送する先に、ネイティブの JavaScript オブジェクトを使っています。</p>

<pre class="brush: js notranslate">const target = {};
const p = new Proxy(target, {});

p.a = 37;
// 操作はプロキシへ転送されます

console.log(target.a);
// 37 が出力されます。
// 操作は正しく転送されました
</pre>

<p>上記のコードは JavaScript オブジェクトでは動作しますが、 DOM 要素などのネイティブのブラウザーオブジェクトでは動作しないことに注意してください。</p>

<h3 id="Validation" name="Validation">検証</h3>

<p><code>Proxy</code> を使うと、オブジェクトに渡された値を簡単に検証できます。この例では {{jsxref("Global_Objects/Proxy/handler/set", "set")}} ハンドラーを使用しています。</p>

<pre class="brush: js notranslate">let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('年齢が整数ではありません');
      }
      if (value &gt; 200) {
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
</pre>

<h3 id="Extending_constructor" name="Extending_constructor">コンストラクターを拡張する</h3>

<p>関数の Proxy で、コンストラクターを新たなコンストラクターへ簡単に拡張できます。この例では {{jsxref("Global_Objects/Proxy/handler/construct", "construct")}} および {{jsxref("Global_Objects/Proxy/handler/apply", "apply")}} ハンドラーを使用しています。</p>

<pre class="brush: js notranslate">function extend(sup, base) {
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
console.log(Peter.age);     // 13</pre>

<h3 id="Manipulating_DOM_nodes" name="Manipulating_DOM_nodes">DOM ノードの操作</h3>

<p>2 つの異なる要素の属性やクラス名を切り替えたい場合があります。それを実現する方法を紹介しましょう。</p>

<pre class="brush: js notranslate">let view = new Proxy({
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
</pre>

<h3 id="Value_correction_and_an_extra_property" name="Value_correction_and_an_extra_property">値補正と追加プロパティ</h3>

<p>この <code>products</code> プロキシオブジェクトは、渡された値を評価し、必要であれば配列に変換します。また、 <code>latestBrowser</code> という追加プロパティをゲッターとセッターの両方でサポートしています。</p>

<pre class="brush: js notranslate">let products = new Proxy({
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
//  ['Firefox'] &lt;- 問題ありません、値は配列になっています

products.latestBrowser = 'Chrome';

console.log(products.browsers);
//  ['Firefox', 'Chrome']

console.log(products.latestBrowser);
//  'Chrome'</pre>

<h3 id="Finding_an_array_item_object_by_its_property" name="Finding_an_array_item_object_by_its_property">配列要素のオブジェクトをそのプロパティから検索</h3>

<p>このプロキシは配列をいくつかの実用機能で拡張しています。見ての通り、 {{jsxref("Object.defineProperties", "Object.defineProperties")}} を使わなくても柔軟にプロパティを「定義」できます。この例は、テーブルの列をそのセルから検索するようなコードに応用できます。その場合、ターゲットは {{domxref("HTMLTableElement.rows", "table.rows")}} となります。</p>

<pre class="brush: js notranslate">let products = new Proxy([
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
</pre>

<h3 id="A_complete_traps_list_example" name="A_complete_traps_list_example">完全な <code>traps</code> リストの例</h3>

<p>教育用に <code>traps</code> リストの完全なサンプルを作成するため、そのような操作が特に適している<em>非ネイティブ</em>オブジェクトを Proxy 化します。<a href="/ja/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support"><code>document.cookie</code> のページにある "リトルフレームワーク"</a> で生成される <code>docCookies</code> グローバルオブジェクトです。</p>

<pre class="brush: js notranslate">/*
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
    if (oDesc &amp;&amp; 'value' in oDesc) { oTarget.setItem(sKey, oDesc.value); }
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
console.log(docCookies.my_cookie1);</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-objects', 'Proxy')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Proxy", 2)}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a class="external" href="https://www.youtube.com/watch?v=sClk6aB_CPk">"Proxies are awesome" Brendan Eich の JSConf でのプレゼンテーション</a> (<a class="external" href="http://www.slideshare.net/BrendanEich/metaprog-5303821">スライド</a>)</li>
 <li><a class="external" href="http://wiki.ecmascript.org/doku.php?id=harmony:proxies">ECMAScript Harmony の Proxy 提案ページ</a> と <a class="external" href="http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics">ECMAScript Harmony の Proxy 動作ページ</a></li>
 <li><a class="external" href="http://web.archive.org/web/20171007221059/http://soft.vub.ac.be/~tvcutsem/proxies/">プロキシチュートリアル</a></li>
 <li><a href="/ja/docs/JavaScript/Old_Proxy_API">旧 Proxy API ページ</a></li>
 <li>{{jsxref("Object.watch()")}} は非標準の機能ですが、 Gecko が長期間サポートしてきました。</li>
 <li><a class="external" href="https://github.com/indiejs/structures">Observable data structures using Proxy</a></li>
</ul>
