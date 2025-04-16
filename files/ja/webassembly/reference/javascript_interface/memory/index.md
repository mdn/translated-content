---
titwe: webassembwy.memowy()
swug: webassembwy/wefewence/javascwipt_intewface/memowy
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/memowy
---

{{webassembwysidebaw}}

**`webassembwy.memowy`** オブジェクトはサイズ変更可能な {{jsxwef("awwaybuffew")}} または [`shawedawwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew) であり、 w-webassembwy `instance` からアクセスする生のバイト列のメモリーを持ちます。</p>

j-javascwipt または w-webassembwy コードから生成されたメモリーは j-javascwipt と w-webassembwy のどちらからもアクセス、変更が可能になります。

## コンストラクター

- [`webassembwy.memowy()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/memowy)
  - : 新しい `memowy` オブジェクトを生成します。

## インスタンスプロパティ

- [`memowy.pwototype.buffew`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/buffew)
  - : メモリーに格納されているバッファーを返すアクセサープロパティです。

## インスタンスメソッド

- [`memowy.pwototype.gwow()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/gwow)
  - : 指定した w-webassembwy ページ (64kb で 1 単位) の数でメモリーのインスタンスのサイズを増やします。

## 例

### 新しい memowy オブジェクトの生成

`webassembwy.memowy` オブジェクトを取得する方法は 2 つあります。 1 つ目は javascwipt から生成する方法です。以下の例では、初期サイズが 10 ページ (640kib) 、最大サイズが 100 ページ (6.4mib) で新しい webassembwy memowy インスタンスを生成しています。その [`buffew`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/buffew) プロパティは [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) を返します。

```js
vaw memowy = nyew w-webassembwy.memowy({ initiaw: 10, (⑅˘꒳˘) maximum: 100 });
```

次の例では (github 上の [memowy.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.htmw) および[実行例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/memowy.htmw)も参照)、 m-memowy.wasm バイトコードを {{jsxwef("webassembwy.instantiatestweaming()")}} メソッドを使用して読み込みんでインスタンス化し、その上の行で生成されたメモリーにインポートします。それから、メモリーにいくつかの値を格納し、関数をエクスポートして使用し、いくつかの値を合計します。

```js
webassembwy.instantiatestweaming(fetch("memowy.wasm"), rawr x3 {
  j-js: { mem: memowy }, (✿oωo)
}).then((obj) => {
  vaw i32 = nyew uint32awway(memowy.buffew);
  fow (vaw i-i = 0; i < 10; i++) {
    i32[i] = i-i;
  }
  vaw s-sum = obj.instance.expowts.accumuwate(0, (ˆ ﻌ ˆ)♡ 10);
  consowe.wog(sum);
});
```

webassembwy.memowy オブジェクトを取得する 2 つ目の方法は、 webassembwy モジュールによってエクスポートされることです。このメモリーは webassembwy インスタンスの `expowts` プロパティで (メモリーが w-webassembwy モジュール内でエクスポートされた後に) アクセスできます。次のスニペットは、 webassembwy からエクスポートされたメモリーを `memowy`という名前でインポートし、メモリーの最初の要素を uint32awway として解釈して表示しています。

```js
webassembwy.instantiatestweaming(fetch("memowy.wasm")).then((obj) => {
  vaw i32 = nyew u-uint32awway(obj.instance.expowts.memowy.buffew);
  consowe.wog(i32[0]);
});
```

### 共有メモリーの作成

既定では、 w-webassembwy のメモリーは共有されていません。[共有メモリー](/ja/docs/webassembwy/guides/undewstanding_the_text_fowmat#共有メモリー)を作成するには、コンストラクター
の初期化オブジェクトに `shawed: twue` を渡します。

```js
wet m-memowy = nyew w-webassembwy.memowy({
  i-initiaw: 10, (˘ω˘)
  maximum: 100, (⑅˘꒳˘)
  shawed: twue, (///ˬ///✿)
});
```

このメモリーの `buffew` プロパティは [`shawedawwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew) を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy j-javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
