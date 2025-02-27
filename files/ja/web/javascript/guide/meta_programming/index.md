---
title: メタプログラミング
slug: Web/JavaScript/Guide/Meta_programming
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Internationalization", "Web/JavaScript/Guide/Modules")}}

{{jsxref("Proxy")}} および {{jsxref("Reflect")}} オブジェクトにより、基本的な言語操作 (例えば、プロパティ参照、代入、列挙、関数呼び出しなど) に割り込み、動作をカスタマイズすることができます。この 2 つのオブジェクトのおかげで、 JavaScript でメタレベルのプログラミングが行えます。

## プロキシー

{{jsxref("Proxy")}} オブジェクトによって、特定の操作に割り込んで動作をカスタマイズすることができます。

例えば、オブジェクトのプロパティを取得してみましょう。

```js
const handler = {
  get(target, name) {
    return name in target ? target[name] : 42;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

この `Proxy` オブジェクトは `target` (ここでは空オブジェクト) と `handler` オブジェクトを定義し、その中に `get` トラップが実装されています。ここで、プロキシーとなったオブジェクトは未定義のプロパティを取得しようとした時に `undefined` を返さず、代わりに数値 `42` を返します。

それ以外の例は {{jsxref("Proxy")}} のリファレンスページを参照してください。

### 用語集

プロキシーの機能について話題にする際は、次の用語が使用されます。

- {{jsxref("Proxy/Proxy","ハンドラー","",1)}} (handler)
  - : トラップを入れるためのプレースホルダ用オブジェクト。
- トラップ (trap)
  - : プロパティへのアクセスを提供するメソッドです。 (オペレーティングシステムにおけるトラップの概念と同じようなものです。)
- ターゲット (target)
  - : プロキシーが仮想化するオブジェクトです。多くの場合、プロキシーのストレージバックエンドとして使用されます。拡張や設定できないオブジェクトのプロパティの不変条件（変更されない意味）がターゲットに対して検証されます。
- 不変条件 (invariant)
  - : 独自の操作を実装した際に変更されない意味を**不変条件**と呼びます。ハンドラーの不変条件に違反した場合、 {{jsxref("TypeError")}} が発生します。

## ハンドラーとトラップ

次の表は、 `Proxy` オブジェクトに対して利用可能なトラップをまとめたものです。詳細な説明と例については、[リファレンスページ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)を参照してください。

<table class="standard-table">
  <thead>
    <tr>
      <th>ハンドラー / トラップ</th>
      <th>割り込みされる処理</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        {{jsxref("Object.isExtensible()")}}<br />{{jsxref("Reflect.isExtensible()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        {{jsxref("Object.preventExtensions()")}}<br />{{jsxref("Reflect.preventExtensions()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}}<br />{{jsxref("Reflect.getOwnPropertyDescriptor()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        {{jsxref("Object.defineProperty()")}}<br />{{jsxref("Reflect.defineProperty()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/has", "handler.has()")}}
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
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/get", "handler.get()")}}
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
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/set", "handler.set()")}}
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
            <!-- markdownlint-enable MD011 -->
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
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
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/apply", "handler.apply()")}}
      </td>
      <td>
        <code>proxy(..args)</code
        ><br />{{jsxref("Function.prototype.apply()")}} および
        {{jsxref("Function.prototype.call()")}}<br />{{jsxref("Reflect.apply()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/construct", "handler.construct()")}}
      </td>
      <td>
        <code>new proxy(...args)</code
        ><br />{{jsxref("Reflect.construct()")}}
      </td>
    </tr>
  </tbody>
</table>

## 取り消し可能 `Proxy`

{{jsxref("Proxy.revocable()")}} メソッドは取り消し可能な `Proxy` オブジェクトの生成に使用されます。これにより、プロキシーを `revoke` 関数で取り消し、プロキシーの機能を停止することができます。

その後はプロキシーを通じたいかなる操作も {{jsxref("TypeError")}} になります。

```js
const revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return `[[${name}]]`;
    },
  },
);
const proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError: Cannot perform 'get' on a proxy that has been revoked
proxy.foo = 1; // TypeError: Cannot perform 'set' on a proxy that has been revoked
delete proxy.foo; // TypeError: Cannot perform 'deleteProperty' on a proxy that has been revoked
console.log(typeof proxy); // "object" が返され, typeof はどんなトラップも引き起こさない
```

## リフレクション

{{jsxref("Reflect")}} は JavaScript で割り込み操作を行うメソッドを提供する組み込みオブジェクトです。そのメソッドは[プロキシーのハンドラー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)のメソッドと同じです。

`Reflect` は関数オブジェクトではありません。

`Reflect` はハンドラーから`ターゲット`への既定の操作を転送するのに役立ちます。

例えば、{{jsxref("Reflect.has()")}} を使えば、 [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)を関数として使うことができます。

```js
Reflect.has(Object, "assign"); // true
```

### より優れた apply() 関数

`Reflect` が登場する前は、所定の `this` 値と配列や[配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)として提供される `arguments` を使って関数を呼び出す {{jsxref("Function.prototype.apply()")}} メソッドがよく使われてきました。

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

{{jsxref("Object.defineProperty")}} は成功すればオブジェクトを返し、そうでなければ {{jsxref("TypeError")}} が発生するので、 {{jsxref("Statements/try...catch", "try...catch")}} ブロックを使って、プロパティの定義中に発生したエラーを捕捉します。{{jsxref("Reflect.defineProperty()")}} は成功のステータスを論理値で返すので、ここでは {{jsxref("Statements/if...else","if...else")}} ブロックを使うだけでよいのです。

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // 成功した時の処理
} else {
  // 失敗した時の処理
}
```

{{PreviousNext("Web/JavaScript/Guide/Internationalization", "Web/JavaScript/Guide/Modules")}}
