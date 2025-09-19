---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`globalThis`** はグローバルプロパティで、[グローバルオブジェクト](/ja/docs/Glossary/Global_object)と同等である[グローバルな `this`](/ja/docs/Web/JavaScript/Reference/Operators/this#グローバルコンテキスト)が格納されています。

{{InteractiveExample("JavaScript デモ: globalThis", "shorter")}}

```js interactive-example
function canMakeHTTPRequest() {
  return typeof globalThis.XMLHttpRequest === "function";
}

console.log(canMakeHTTPRequest());
// Expected output (in a browser): true
```

## 値

グローバルの `this` オブジェクトです。

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> `globalThis` プロパティは構成可能で書き込み可能なので、コードの作成者は、信頼できないコードを実行する際にこのプロパティを非公開にして、グローバルオブジェクトが公開されるのを防ぐことができます。

## 解説

従来、グローバルスコープにアクセスするには、JavaScript 環境ごとに異なる構文を必要としていました。ウェブ上では {{domxref("Window.window", "window")}}, {{domxref("Window.self", "self")}}, {{domxref("Window.frames", "frames")}} を使うことができます。しかし [Web Worker](/ja/docs/Web/API/Worker) は `self` のみを利用することができます。Node.js はこれらのいずれも利用できず、代わりに `global` を使用する必要があります。
`this` キーワードは、厳格でないモードで実行されている関数の中で使用することもできますが、厳格モードで実行されているモジュールや関数の中では `undefined` になります。`Function('return this')()` を使用することもできますが、{{Glossary("CSP")}} などによって {{jsxref("eval", "eval()")}} を無効にしている環境では、この方法でも {{jsxref("Function")}} の使用が抑制されます。

`globalThis` プロパティは、環境を越えてグローバルな `this` 値 (すなわちグローバルオブジェクト自身) にアクセスするための標準的な方法を提供します。`window` や `self` などの同様のプロパティとは異なり、これはウィンドウのコンテキストでも非ウィンドウのコンテキストでも動作することが保証されています。この方法では、コードがどの環境で実行されているのかを知らなくても、一貫した方法でグローバルオブジェクトにアクセスすることができます。名前を覚えやすくするために、グローバルスコープでは `this` の値は `globalThis` であることを忘れないでください。

> [!NOTE]
> `globalThis` は、通常、グローバルオブジェクトと同じ概念です（つまり、`globalThis` にプロパティを追加すると、それらはグローバル変数になります）。これは、ブラウザーや Node の場合ですが、ホストは、グローバルオブジェクトとは無関係の別の値を `globalThis` に指定することができます。

### HTML と WindowProxy

多くのエンジンでは `globalThis` は実在のグローバルオブジェクトの参照になりますが、ウェブブラウザーにおいては、iframe およびウィンドウ間のセキュリティ上の配慮から、これは（直接アクセスできない）実在のグローバルオブジェクトに関する {{jsxref("Proxy")}} になります。一般的な利用に関わることは稀ですが、認識しておくことは重要です。

### 命名

`self` や `global` のような他の一般的な名前の選択肢は、既存のコードとの互換性を損なう可能性があるため、候補から除外されました。詳しくは [language proposal's "naming" document](https://github.com/tc39/proposal-global/blob/master/NAMING.md) を参照してください。

`globalThis` は、文字通り、グローバルな `this` 値です。これは、オブジェクトを指定せずに呼び出された厳格モードではない関数内の `this` 値と同じ値です。また、スクリプトのグローバルスコープにおける `this` の値でもあります。

## 例

### 異なる環境間でグローバルの検索

通常、グローバルオブジェクトを明示的に指定する必要はありません。そのプロパティは、グローバル変数として自動的にアクセスできます。

```js
console.log(window.Math === Math); // true
```

ただし、グローバルオブジェクトに明示的にアクセスする必要がある場合が 1 つあります。それは、通常 [ポリフィル](/ja/docs/Glossary/Polyfill) の目的で、グローバルオブジェクトに書き込みを行う場合です。

`globalThis` の導入前、環境全体のグローバルオブジェクトを取得する唯一の信頼できるクロスプラットフォームな方法は `Function('return this')()` でした。しかし、これは一部の設定で [CSP](/ja/docs/Web/HTTP/Guides/CSP) 違反を発生させるため、作成者は次のような区分定義を使用することになります（[オリジナルの core-js のソース](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js)を若干変更）。

```js
function check(it) {
  // Math はあらゆる環境にグローバルに存在することが知られている
  return it && it.Math === Math && it;
}

const globalObject =
  check(typeof window === "object" && window) ||
  check(typeof self === "object" && self) ||
  check(typeof global === "object" && global) ||
  // 厳格モードで実行すると、これは undefined を返す
  (function () {
    return this;
  })() ||
  Function("return this")();
```

グローバルオブジェクトを取得した後、そのオブジェクトに新しいグローバルを定義することができます。例えば、[`Intl`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl) の実装を追加する場合です。

```js
if (typeof globalObject.Intl === "undefined") {
  // No Intl in this environment; define our own on the global scope
  Object.defineProperty(globalObject, "Intl", {
    value: {
      // Our Intl implementation
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```

`globalThis` が利用可能になったため、異なる環境間でグローバルを追加で検索する必要がなくなりました。

```js
if (typeof globalThis.Intl === "undefined") {
  Object.defineProperty(globalThis, "Intl", {
    value: {
      // 独自の Intl 実装
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`globalThis` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-globalthis)
- [es-shims による `globalThis` のポリフィル](https://www.npmjs.com/package/globalthis)
- {{jsxref("Operators/this", "this")}}
