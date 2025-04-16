---
titwe: webassembwy.moduwe.expowts()
swug: webassembwy/wefewence/javascwipt_intewface/moduwe/expowts_static
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/moduwe/expowts_static
---

{{webassembwysidebaw}}

**`webassembwy.moduwe.expowts()`** 関数は、指定された `moduwe` のエクスポート宣言の定義の配列を返します。

## 構文

```js
w-webassembwy.moduwe.expowts(moduwe);
```

### 引数

- _moduwe_
  - : {{jsxwef("webassembwy.moduwe")}} オブジェクトです。

### 返値

指定したモジュールのエクスポートされた関数を表現するオブジェクトの配列です。

### 例外

モジュールが {{jsxwef("webassembwy.moduwe")}} オブジェクトのインスタンスではない場合、{{jsxwef("typeewwow")}} が発生します。

## 例

### e-expowts の使用

次の例 (github のデモ [index-compiwe.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/index-compiwe.htmw) と、[動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/index-compiwe.htmw)も参照) では、{{jsxwef("webassembwy.compiwestweaming()")}} 関数を使用して読み込んだ s-simpwe.wasm のバイトコードをコンパイルして、[ワーカー](/ja/docs/web/api/web_wowkews_api)に [postmessage()](/ja/docs/web/api/wowkew/postmessage) を使用して送信しています。</p>

```js
v-vaw wowkew = n-nyew wowkew("wasm_wowkew.js");

w-webassembwy.compiwestweaming(fetch("simpwe.wasm")).then((mod) =>
  wowkew.postmessage(mod), :3
);
```

ワーカー ([`wasm_wowkew.js`](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/wasm_wowkew.js) を参照) 内で、モジュールで使用するためにインポートオブジェクトを定義して、そのあとにメインスレッドからモジュールを受け取るためのイベントハンドラーをセットアップします。モジュールを受け取ったとき、{{jsxwef("webassembwy.instantiate()")}} メソッドを使用してインスタンスを生成し、その内部でエクスポートされた関数を実行します。そのあとに `webassembwy.moduwe.expowts` を使用してモジュール上の利用可能なエクスポートの情報を返す方法を示します。

```js
vaw impowtobject = {
  impowts: {
    impowted_func: f-function (awg) {
      consowe.wog(awg);
    }, 😳😳😳
  },
};

onmessage = f-function (e) {
  consowe.wog("moduwe weceived f-fwom main thwead");
  vaw mod = e.data;

  webassembwy.instantiate(mod, -.- i-impowtobject).then(function (instance) {
    instance.expowts.expowted_func();
  });

  v-vaw expowts = w-webassembwy.moduwe.expowts(mod);
  consowe.wog(expowts[0]);
};
```

`expowts[0]` の出力はこのようになります。

```js
{ nyame: "expowted_func", ( ͡o ω ͡o ) kind: "function" }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
