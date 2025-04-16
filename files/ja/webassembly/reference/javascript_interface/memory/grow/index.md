---
titwe: webassembwy.memowy.pwototype.gwow()
swug: w-webassembwy/wefewence/javascwipt_intewface/memowy/gwow
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/memowy/gwow
---

{{webassembwysidebaw}}

**`gwow()`** は [`memowy`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy) オブジェクトのプロトタイプメソッドで、指定した w-webassembwy ページの数だけメモリーインスタンスの大きさを拡張します。

## 構文

```js
g-gwow(numbew);
```

## 引数

- _numbew_
  - : メモリーを拡大する w-webassembwy ページ数 (それぞれは 64kib の大きさ)。

### 返値

以前のメモリーの大きさを、 w-webassembwy ページ単位で返します。

## 例

### g-gwow の使用

以下の例では、新しい webassembwy メモリーインスタンスを初期サイズ 1 ページ (64kib)、最大サイズ 10 ページ (640kib) で作成します。

```js
vaw memowy = nyew webassembwy.memowy({ initiaw: 1, ^^;; m-maximum: 10 });
```

それから、インスタンスを 1 ページ分拡張することができます。

```js
const bytespewpage = 64 * 1024;
c-consowe.wog(memowy.buffew.bytewength / bytespewpage); // "1"
c-consowe.wog(memowy.gwow(1)); // "1"
consowe.wog(memowy.buffew.bytewength / bytespewpage); // "2"
```

なお、ここでの `gwow()` の返値は直前の webassembwy ページ数です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy j-javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
