---
title: メタプログラミング
slug: Web/JavaScript/Guide/Meta_programming
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Iterators_and_Generators", "Web/JavaScript/Guide/Modules")}}

ECMAScript 2015 から、JavaScript には {{jsxref("Proxy")}} オブジェクトと {{jsxref("Reflect")}} オブジェクトがサポートされました。これらは基本的な言語操作 (例えば、プロパティ参照、代入、列挙、関数呼び出しなど) に割り込み、動作をカスタマイズすることができます。この 2 つのオブジェクトのおかげで、JavaScript でメタレベルのプログラミングが行えます。

## プロキシー

ECMAScript 6 で導入された {{jsxref("Proxy")}} オブジェクトによって、特定の操作に割り込んで動作をカスタマイズすることができます。

例えば、オブジェクトのプロパティを取得してみましょう。

```js
let handler = {
  get: function (target, name) {
    return name in target ? target[name] : 42;
  },
};

let p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

この `Proxy` オブジェクトは `target` (ここでは空オブジェクト) と `handler` オブジェクトを定義し、その中に `get` トラップが実装されています。ここで、プロキシーとなったオブジェクトは未定義のプロパティを取得しようとした時に `undefined` を返さず、代わりに数値 `42` を返します。

それ以外の例は {{jsxref("Proxy")}} のリファレンスページを参照してください。

### 用語集

プロキシーの機能について話題にする際は、次の用語が使用されます。

- {{jsxref("Global_Objects/Proxy/Proxy","ハンドラー","","true")}} (handler)
  - : トラップを入れるためのプレースホルダ用オブジェクト。
- トラップ (trap)
  - : プロパティへのアクセスを提供するメソッドです。 (オペレーティングシステムにおける*トラップ*の概念と同じようなものです。)
- ターゲット (_target_)
  - : プロキシーが仮想化するオブジェクトです。多くの場合、プロキシーのストレージバックエンドとして使用されます。拡張や設定できないオブジェクトのプロパティの不変条件 (変更されない意味) がターゲットに対して検証されます。
- 不変条件 (invariant)
  - : 独自の操作を実装した際に変更されない意味を**不変条件**と呼びます。ハンドラーの不変条件に違反した場合、 {{jsxref("TypeError")}} が発生します。

## ハンドラーとトラップ

次の表は、 `Proxy` オブジェクトに対して利用可能なトラップをまとめたものです。詳細な説明と例については、[リファレンスページ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)を参照してください。

<table class="standard-table">
  <thead>
    <tr>
      <th>ハンドラー / トラップ</th>
      <th>割り込みされる処理</th>
      <th>不変条件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
      <td>
        <ul>
          <li>
            <code>getPrototypeOf</code> メソッドはオブジェクトか
            <code>null</code> を返す必要があります。
          </li>
          <li>
            <code><var>target</var></code> が拡張できない場合、<code
              >Object.getPrototypeOf(<var>proxy</var>)</code
            >
            メソッドは
            <code>Object.getPrototypeOf(<var>target</var>)</code>
            と同じ値を返す必要があります。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
      <td>
        <code><var>target</var></code> が拡張できない場合、<code
          >prototype</code
        >
        パラメータは
        <code>Object.getPrototypeOf(<var>target</var>)</code>
        と同じ値である必要があります。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        {{jsxref("Object.isExtensible()")}}<br />{{jsxref("Reflect.isExtensible()")}}
      </td>
      <td>
        <code>Object.isExtensible(<var>proxy</var>)</code> は
        <code>Object.isExtensible(<var>target</var>)</code>
        と同じ値を返す必要があります。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        {{jsxref("Object.preventExtensions()")}}<br />{{jsxref("Reflect.preventExtensions()")}}
      </td>
      <td>
        <p>
          <code>Object.isExtensible(<var>proxy</var>)</code> が
          <code>false</code> の場合のみ、<code
            >Object.preventExtensions(<var>proxy</var>)</code
          >
          は <code>true</code> を返します。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}}<br />{{jsxref("Reflect.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        <ul>
          <li>
            <code>getOwnPropertyDescriptor</code> はオブジェクトか
            <code>undefined</code> のいずれかを返す必要があります。
          </li>
          <li>
            ターゲットオブジェクトに設定不可の所有プロパティとして存在する場合、そのプロパティについて存在しないと報告することはできません。
          </li>
          <li>
            拡張不可のターゲットオブジェクトに所有プロパティとして存在する場合、そのプロパティについて存在しないと報告することはできません。
          </li>
          <li>
            拡張不可のターゲットオブジェクトに所有プロパティとして存在しない場合、そのプロパティについて存在すると報告することはできません。
          </li>
          <li>
            ターゲットオブジェクトに所有プロパティとして存在しない場合、あるいはターゲットオブジェクトに設定可能な所有プロパティとして存在する場合、そのプロパティについて設定不可と報告することはできません。
          </li>
          <li>
            <code>Object.getOwnPropertyDescriptor(<var>target</var>)</code>
            の結果は
            <code>Object.defineProperty</code>
            を使用してターゲットオブジェクトに適用され、この時に例外は発生しません。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        {{jsxref("Object.defineProperty()")}}<br />{{jsxref("Reflect.defineProperty()")}}
      </td>
      <td>
        <ul>
          <li>
            ターゲットオブジェクトが拡張可能ではない場合、プロパティは追加できません。
          </li>
          <li>
            ターゲットオブジェクトに設定不可の所有プロパティとして存在しない場合、そのプロパティを追加したり、また設定不可に更新することはできません。
          </li>
          <li>
            ターゲットオブジェクトに対応する設定可能なプロパティとして存在する場合、そのプロパティを設定不可としてもかまいません。
          </li>
          <li>
            プロパティが対応するターゲットオブジェクトプロパティを持つ場合、<code
              >Object.defineProperty(<var>target</var>, <var>prop</var>,
              <var>descriptor</var>)</code
            >
            は例外を発生しません。
          </li>
          <li>
            strict モードでは、<code>defineProperty</code>
            ハンドラーからの返値が
            <code>false</code> の場合、{{jsxref("TypeError")}}
            例外が発生します。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/has", "handler.has()")}}
      </td>
      <td>
        <dl>
          <dt>プロパティの照会</dt>
          <dd><code>foo in proxy</code></dd>
          <dt>継承されたプロパティの照会</dt>
          <dd>
            <code>foo in Object.create(<var>proxy</var>)</code
            ><br />{{jsxref("Reflect.has()")}}
          </dd>
        </dl>
      </td>
      <td>
        <ul>
          <li>
            ターゲットオブジェクトに設定不可の所有プロパティとして存在する場合、そのプロパティについて存在しないと報告することはできません。
          </li>
          <li>
            ターゲットオブジェクトの所有プロパティとして存在し、そのターゲットオブジェクトが拡張可能ではない場合、そのプロパティについて存在しないと報告することはできません。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/get", "handler.get()")}}
      </td>
      <td>
        <dl>
          <dt>プロパティへのアクセス</dt>
          <dd>
            <code><var>proxy</var>[foo]</code><br /><code
              ><var>proxy</var>.bar</code
            >
          </dd>
          <dt>継承されたプロパティへのアクセス</dt>
          <dd>
            <!-- markdownlint-disable MD011 -->
            <code>Object.create(<var>proxy</var>)[foo]</code
            ><br />{{jsxref("Reflect.get()")}}
          </dd>
        </dl>
      </td>
      <td>
        <ul>
          <li>
            ターゲットオブジェクトプロパティが書込不可、設定不可のデータプロパティである場合、プロパティに対して報告する値は対応するプロパティと同じ値である必要があります。
          </li>
          <li>
            対応するターゲットオブジェクトプロパティが、Get 属性に
            <code>undefined</code>
            を持つ設定不可のアクセサプロパティである場合、プロパティに対して報告される値を
            <code>undefined</code> とする必要があります。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/set", "handler.set()")}}
      </td>
      <td>
        <dl>
          <dt>プロパティへの代入</dt>
          <dd>
            <code><var>proxy</var>[foo] = bar</code><br /><code
              ><var>proxy</var>.foo = bar</code
            >
          </dd>
          <dt>継承されたプロパティへの代入</dt>
          <dd>
            <code>Object.create(<var>proxy</var>)[foo] = bar</code
            ><br />{{jsxref("Reflect.set()")}}
          </dd>
        </dl>
      </td>
      <td>
        <ul>
          <li>
            対応するターゲットオブジェクトのプロパティが書込不可、設定不可のデータプロパティである場合、そのプロパティとは違うプロパティ値に変更することはできません。
          </li>
          <li>
            対応するターゲットオブジェクトプロパティが、Set 属性に
            <code>undefined</code>
            を持つ設定不可のアクセサプロパティである場合、プロパティの値を設定することはできません。
          </li>
          <li>
            strict モードでは、 <code>false</code> という返値が
            <code>set</code>
            ハンドラーから返された場合、{{jsxref("TypeError")}}
            例外が発生します。
            <ul></ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
      </td>
      <td>
        <dl>
          <dt>プロパティの削除</dt>
          <dd>
            <code>delete <var>proxy</var>[foo]</code><br /><code
              >delete <var>proxy</var>.foo</code
            ><br />{{jsxref("Reflect.deleteProperty()")}}
          </dd>
        </dl>
      </td>
      <td>
        <code><var>target</var></code>
        に構成不可の所有プロパティとして存在する場合、削除することはできません。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/enumerate", "handler.enumerate()")}}
      </td>
      <td>
        <dl>
          <dt>プロパティの列挙 / <code>for...in</code>:</dt>
          <dd>
            <code>for (let name in <var>proxy</var>) {...}</code
            ><br />{{jsxref("Reflect.enumerate()")}}
          </dd>
        </dl>
      </td>
      <td>
        <code>enumerate</code> メソッドはオブジェクトを返す必要があります。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
      </td>
      <td>
        <ul>
          <li><code>ownKeys</code> の結果はリストとなります。</li>
          <li>
            出力リストの要素の型は {{jsxref("String")}} か
            {{jsxref("Symbol")}} のどちらかとなります。
          </li>
          <li>
            出力リストは
            <code><var>target</var></code>
            のすべての設定不可の所有プロパティのキーを含める必要があります。
          </li>
          <li>
            ターゲットオブジェクトが拡張できない場合、出力リストはターゲットオブジェクト中の所有プロパティのキーをすべて含める必要があり、他の値は含まれません。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/apply", "handler.apply()")}}
      </td>
      <td>
        <code>proxy(..args)</code
        ><br />{{jsxref("Function.prototype.apply()")}} and
        {{jsxref("Function.prototype.call()")}}<br />{{jsxref("Reflect.apply()")}}
      </td>
      <td>
        <code><var>handler</var>.apply</code>
        メソッドに対する不変条件はありません。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/Proxy/construct", "handler.construct()")}}
      </td>
      <td>
        <code>new proxy(...args)</code
        ><br />{{jsxref("Reflect.construct()")}}
      </td>
      <td>出力結果は <code>Object</code> とする必要があります。</td>
    </tr>
  </tbody>
</table>

## 取り消し可能 `Proxy`

{{jsxref("Proxy.revocable()")}} メソッドは取り消し可能な `Proxy` オブジェクトの生成に使用されます。これにより、プロキシーを `revoke` 関数で取り消し、プロキシーの機能を停止することができます。

その後はプロキシーを通じたいかなる操作も {{jsxref("TypeError")}} になります。

```js
let revocable = Proxy.revocable(
  {},
  {
    get: function (target, name) {
      return "[[" + name + "]]";
    },
  },
);
let proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError が発生
proxy.foo = 1; // TypeError が再び発生
delete proxy.foo; // TypeError がここでも発生
typeof proxy; // "object" が返され, typeof はどんなトラップも引き起こさない
```

## リフレクション

{{jsxref("Reflect")}} は JavaScript で割り込み操作を行うメソッドを提供する組み込みオブジェクトです。そのメソッドは{{jsxref("Global_Objects/Proxy/Proxy","Proxy ハンドラー","","true")}}のメソッドと同じです。

`Reflect` は関数オブジェクトではありません。

`Reflect` はハンドラーから`ターゲット`への既定の操作を転送するのに役立ちます。

例えば、{{jsxref("Reflect.has()")}} を使えば、[`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)を関数として使うことができます。

```js
Reflect.has(Object, "assign"); // true
```

### より優れた `apply` 関数

ES5 では、所定の `this` 値と配列や[配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)として提供される `arguments` を使って関数を呼び出す {{jsxref("Function.prototype.apply()")}} メソッドがよく使われてきました。

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

{{jsxref("Reflect.apply")}} を使えば、より簡潔で分かりやすいものにできます。

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

### プロパティ定義の成否チェック

{{jsxref("Object.defineProperty")}} は成功すればオブジェクトを返し、そうでなければ {{jsxref("TypeError")}} を投げるので、 {{jsxref("Statements/try...catch","try...catch")}} ブロックを使って、プロパティの定義中に発生したエラーを捉えます。 {{jsxref("Reflect.defineProperty")}} は成功のステータスを論理値で返すので、ここでは {{jsxref("Statements/if...else","if...else")}} ブロックを使うだけでよいのです。

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // 成功した時の処理
} else {
  // 失敗した時の処理
}
```

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_Generators", "Web/JavaScript/Guide/Modules")}}
