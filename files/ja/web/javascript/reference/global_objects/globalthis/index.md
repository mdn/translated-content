---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
---

{{jsSidebar("Objects")}}

**`globalThis`** はグローバルプロパティで、グローバルオブジェクトと同等であるグローバルな `this` が格納されています。

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html","shorter")}}

{{JS_Property_Attributes(1, 0, 1)}}

## 解説

従来、グローバルスコープにアクセスするには、JavaScript 環境ごとに異なる構文を必要としていました。ウェブ上では {{domxref("Window.window", "window")}}, {{domxref("Window.self", "self")}}, {{domxref("Window.frames", "frames")}} を使うことができます。しかし [Web Worker](/ja/docs/Web/API/Worker) は `self` のみを利用することができます。Node.js はこれらのいずれも利用できず、代わりに `global` を使用する必要があります。
`this` キーワードは、strict でないモードで実行されている関数の中で使用することもできますが、strict モードで実行されているモジュールや関数の中では `undefined` になります。`Function('return this')()` を使用することもできますが、{{Glossary("CSP")}} などによって {{jsxref("eval", "eval()")}} を無効にしている環境では、この方法でも {{jsxref("Function")}} の使用が抑制されます。

`globalThis` プロパティは、環境を越えてグローバルな `this` 値 (すなわちグローバルオブジェクト自身) にアクセスするための標準的な方法を提供します。`window` や `self` などの同様のプロパティとは異なり、これはウィンドウのコンテキストでも非ウィンドウのコンテキストでも動作することが保証されています。この方法では、コードがどの環境で実行されているのかを知らなくても、一貫した方法でグローバルオブジェクトにアクセスすることができます。名前を覚えやすくするために、グローバルスコープでは `this` の値は `globalThis` であることを忘れないでください。

### HTML と WindowProxy

多くのエンジンでは `globalThis` は実在のグローバルオブジェクトの参照になりますが、ウェブブラウザーにおいては、iframe およびウィンドウ間のセキュリティ上の配慮から、これは (直接アクセスできない) 実在のグローバルオブジェクトに関する {{jsxref("Proxy")}} になります。一般的な利用に関わることは稀ですが、認識しておくことは重要です。

### 命名

`self` や `global` のような他の一般的な名前の選択肢は、既存のコードとの互換性を損なう可能性があるため、候補から除外されました。詳しくは [language proposal's "naming" document](https://github.com/tc39/proposal-global/blob/master/NAMING.md) を参照してください。

## 例

### 異なる環境間でグローバルの検索

`globalThis` 以前は、その環境のグローバルオブジェクトを取得する信頼性の高い方法は `Function('return this')()` だけでした。ただし、これは設定によっては [CSP](/ja/docs/Web/HTTP/CSP) 違反が発生するため、[es6-shim](https://github.com/paulmillr/es6-shim) では次のようなチェックを使用します。

```js
var getGlobal = function () {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};

var globals = getGlobal();

if (typeof globals.setTimeout !== "function") {
  // no setTimeout in this environment!
}
```

`globalThis` が利用可能になったため、異なる環境間でグローバルを追加で検索する必要がなくなりました。

```js
if (typeof globalThis.setTimeout !== "function") {
  // no setTimeout in this environment!
}
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.globalThis")}}

## 関連情報

- {{jsxref("Operators/this", "this")}}
