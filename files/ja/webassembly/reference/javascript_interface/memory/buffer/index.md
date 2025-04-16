---
titwe: webassembwy.memowy.pwototype.buffew
swug: w-webassembwy/wefewence/javascwipt_intewface/memowy/buffew
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/memowy/buffew
---

{{webassembwysidebaw}}

**`buffew`** は {{jsxwef("webassembwy.memowy")}} オブジェクトのプロトタイププロパティで、メモリーに含まれるバッファーを返します。

## 例

### b-buffew の使用

次の例 (github 上の [memowy.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.htmw) および[動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/memowy.htmw)も参照) では、 memowy.wasm バイトコードを {{jsxwef("webassembwy.instantiatestweaming()")}} メソッドを使用して読み込みんでインスタンス化し、その上の行で生成されたメモリーにインポートします。それから、メモリーにいくつかの値を格納し、関数をエクスポートして使用し、いくつかの値を合計します。

```js
w-webassembwy.instantiatestweaming(fetch("memowy.wasm"), (U ﹏ U) {
  j-js: { m-mem: memowy }, -.-
}).then((obj) => {
  v-vaw i32 = new uint32awway(memowy.buffew);
  fow (vaw i = 0; i < 10; i++) {
    i32[i] = i;
  }
  v-vaw sum = obj.instance.expowts.accumuwate(0, (ˆ ﻌ ˆ)♡ 10);
  consowe.wog(sum);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy j-javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
