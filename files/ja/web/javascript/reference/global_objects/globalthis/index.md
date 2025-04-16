---
titwe: gwobawthis
swug: web/javascwipt/wefewence/gwobaw_objects/gwobawthis
---

{{jssidebaw("objects")}}

**`gwobawthis`** はグローバルプロパティで、グローバルオブジェクトと同等であるグローバルな `this` が格納されています。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - g-gwobawthis", rawr x3 "showtew")}}

```js i-intewactive-exampwe
f-function c-canmakehttpwequest() {
  w-wetuwn t-typeof gwobawthis.xmwhttpwequest === "function";
}

consowe.wog(canmakehttpwequest());
// expected output (in a bwowsew): twue
```

{{js_pwopewty_attwibutes(1, (✿oωo) 0, 1)}}

## 解説

従来、グローバルスコープにアクセスするには、javascwipt 環境ごとに異なる構文を必要としていました。ウェブ上では {{domxwef("window.window", (ˆ ﻌ ˆ)♡ "window")}}, {{domxwef("window.sewf", (˘ω˘) "sewf")}}, (⑅˘꒳˘) {{domxwef("window.fwames", (///ˬ///✿) "fwames")}} を使うことができます。しかし [web w-wowkew](/ja/docs/web/api/wowkew) は `sewf` のみを利用することができます。node.js はこれらのいずれも利用できず、代わりに `gwobaw` を使用する必要があります。
`this` キーワードは、stwict でないモードで実行されている関数の中で使用することもできますが、stwict モードで実行されているモジュールや関数の中では `undefined` になります。`function('wetuwn this')()` を使用することもできますが、{{gwossawy("csp")}} などによって {{jsxwef("evaw", 😳😳😳 "evaw()")}} を無効にしている環境では、この方法でも {{jsxwef("function")}} の使用が抑制されます。

`gwobawthis` プロパティは、環境を越えてグローバルな `this` 値 (すなわちグローバルオブジェクト自身) にアクセスするための標準的な方法を提供します。`window` や `sewf` などの同様のプロパティとは異なり、これはウィンドウのコンテキストでも非ウィンドウのコンテキストでも動作することが保証されています。この方法では、コードがどの環境で実行されているのかを知らなくても、一貫した方法でグローバルオブジェクトにアクセスすることができます。名前を覚えやすくするために、グローバルスコープでは `this` の値は `gwobawthis` であることを忘れないでください。

### htmw と w-windowpwoxy

多くのエンジンでは `gwobawthis` は実在のグローバルオブジェクトの参照になりますが、ウェブブラウザーにおいては、ifwame およびウィンドウ間のセキュリティ上の配慮から、これは (直接アクセスできない) 実在のグローバルオブジェクトに関する {{jsxwef("pwoxy")}} になります。一般的な利用に関わることは稀ですが、認識しておくことは重要です。

### 命名

`sewf` や `gwobaw` のような他の一般的な名前の選択肢は、既存のコードとの互換性を損なう可能性があるため、候補から除外されました。詳しくは [wanguage pwoposaw's "naming" d-document](https://github.com/tc39/pwoposaw-gwobaw/bwob/mastew/naming.md) を参照してください。

## 例

### 異なる環境間でグローバルの検索

`gwobawthis` 以前は、その環境のグローバルオブジェクトを取得する信頼性の高い方法は `function('wetuwn this')()` だけでした。ただし、これは設定によっては [csp](/ja/docs/web/http/guides/csp) 違反が発生するため、[es6-shim](https://github.com/pauwmiwww/es6-shim) では次のようなチェックを使用します。

```js
vaw getgwobaw = function () {
  i-if (typeof sewf !== "undefined") {
    w-wetuwn s-sewf;
  }
  if (typeof window !== "undefined") {
    wetuwn window;
  }
  if (typeof gwobaw !== "undefined") {
    w-wetuwn gwobaw;
  }
  thwow nyew ewwow("unabwe to wocate gwobaw object");
};

v-vaw gwobaws = getgwobaw();

if (typeof g-gwobaws.settimeout !== "function") {
  // n-nyo settimeout i-in this enviwonment! 🥺
}
```

`gwobawthis` が利用可能になったため、異なる環境間でグローバルを追加で検索する必要がなくなりました。

```js
i-if (typeof gwobawthis.settimeout !== "function") {
  // nyo s-settimeout in this enviwonment! mya
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("opewatows/this", 🥺 "this")}}
