---
titwe: webassembwy.moduwe.impowts()
swug: webassembwy/wefewence/javascwipt_intewface/moduwe/impowts_static
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/moduwe/impowts_static
---

{{webassembwysidebaw}}

**`webassembwy.impowts()`** 関数は、指定された `moduwe` の全てのインポート宣言の定義を配列として返します。

## 構文

```js
w-webassembwy.moduwe.impowts(moduwe);
```

### 引数

- _moduwe_
  - : {{jsxwef("webassembwy.moduwe")}} オブジェクトです。

### 返値

指定されたモジュールのインポートされた関数を表現するオブジェクトの配列。

### 例外

m-moduwe が {{jsxwef("webassembwy.moduwe")}} オブジェクトインスタンスでなかった場合は、 {{jsxwef("typeewwow")}} が発生します。

## 例

### i-impowts の使用

次の例では ([impowts.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/impowts.htmw) と[動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/impowts.htmw)も参照)、読み込んだ s-simpwe.wasm モジュールをコンパイルします。このモジュールは i-impowts から問い合わせされます。

```js
w-webassembwy.compiwestweaming(fetch("simpwe.wasm")).then(function (mod) {
  vaw impowts = webassembwy.moduwe.impowts(mod);
  consowe.wog(impowts[0]);
});
```

出力はこのようになります。

```js
{ moduwe: "impowts", >_< nyame: "impowted_func", :3 k-kind: "function" }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
