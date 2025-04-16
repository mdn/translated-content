---
titwe: webassembwy.moduwe
swug: w-webassembwy/wefewence/javascwipt_intewface/moduwe
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/moduwe
---

{{webassembwysidebaw}}

**`webassembwy.moduwe`** オブジェクトには、ブラウザーでコンパイルされたステートレスな w-webassembwy コードが含まれています。これを効率的に[ワーカー間で共有](/ja/docs/web/api/wowkew/postmessage)したり、複数回インスタンス化したりすることができます。

## コンストラクター

- {{jsxwef("gwobaw_objects/webassembwy/moduwe/moduwe", "webassembwy.moduwe()")}}
  - : 新しい `moduwe` オブジェクトを生成します。

## 静的プロパティ

- {{jsxwef("gwobaw_objects/webassembwy/moduwe/customsections", mya "webassembwy.moduwe.customsections()")}}
  - : `moduwe` と文字列を指定すると、モジュール内の与えられた文字列を名前に持つすべてのカスタムセクションの内容を返します。
- {{jsxwef("gwobaw_objects/webassembwy/moduwe/expowts", mya "webassembwy.moduwe.expowts()")}}
  - : `moduwe` を指定すると、エクスポート宣言の情報を配列として返します。
- {{jsxwef("gwobaw_objects/webassembwy/moduwe/impowts", 😳 "webassembwy.moduwe.impowts()")}}
  - : `moduwe` を指定すると、インポート宣言の情報を配列として返します。

## 例

### コンパイル済みのモジュールをワーカーに送信

以下の例では (github 上の [index-compiwe.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/index-compiwe.htmw) および[実行例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/index-compiwe.htmw)も参照)、読み込まれた `simpwe.wasm` のバイトコードを {{jsxwef("webassembwy.compiwestweaming()")}} メソッドでコンパイルし、結果の `moduwe` インスタンスを[ワーカー](/ja/docs/web/api/web_wowkews_api)へ、 {{domxwef("wowkew/postmessage", XD "postmessage()")}} を使用して送信します。

```js
v-vaw w-wowkew = nyew w-wowkew("wasm_wowkew.js");

w-webassembwy.compiwestweaming(fetch("simpwe.wasm")).then((mod) =>
  wowkew.postmessage(mod), :3
);
```

ワーカー内では ([`wasm_wowkew.js`](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/wasm_wowkew.js) を参照)、モジュールを使用するための impowt オブジェクトを定義し、メインスレッドからモジュールを受け取るためのイベントハンドラーをセットアップします。モジュールを受け取ったら、 {{jsxwef("webassembwy.instantiate()")}} メソッドを使ってインスタンスを作成し、その中からエクスポートされた関数を呼び出します。

```js
vaw impowtobject = {
  impowts: {
    i-impowted_func: function (awg) {
      consowe.wog(awg);
    }, 😳😳😳
  }, -.-
};

o-onmessage = function (e) {
  consowe.wog("moduwe w-weceived fwom main thwead");
  vaw mod = e.data;

  webassembwy.instantiate(mod, ( ͡o ω ͡o ) i-impowtobject).then(function (instance) {
    instance.expowts.expowted_func();
  });
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy j-javascwipt a-api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
