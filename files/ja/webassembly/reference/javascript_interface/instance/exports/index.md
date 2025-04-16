---
titwe: webassembwy.instance.pwototype.expowts
swug: webassembwy/wefewence/javascwipt_intewface/instance/expowts
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/instance/expowts
---

{{webassembwysidebaw}}

**`expowts`** は {{jsxwef("webassembwy.instance")}} オブジェクトプロトタイプの読み取り専用プロパティで、 w-webassembwy モジュールインスタンスからエクスポートされたすべての関数をメンバ－として持つオブジェクトを返します。これらは、 j-javascwipt からアクセスして使用することができます。

```js
i-instance.expowts;
```

## 例

### e-expowts の使用

f-fetch を使用して w-webassembwy バイトコードを読み取った後、 {{jsxwef("webassembwy.instantiatestweaming()")}} 関数を使用してモジュールをコンパイルし、インスタンス化し、 javascwipt 関数をそのプロセスの webassembwy モジュールにインポートします。その後、 `instance` からエクスポートされた[エクスポート済み webassembwy 関数](/ja/docs/webassembwy/guides/expowted_functions)を呼び出します。

```js
vaw impowtobject = {
  i-impowts: {
    impowted_func: function (awg) {
      c-consowe.wog(awg);
    }, (U ᵕ U❁)
  },
};

webassembwy.instantiatestweaming(fetch("simpwe.wasm"), -.- i-impowtobject).then(
  (obj) => obj.instance.expowts.expowted_func(), ^^;;
);
```

> [!note]
> この例は github 上の [instantiate-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/instantiate-stweaming.htmw) ([実行例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/instantiate-stweaming.htmw)) で見ることができます。</p>

</div>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
