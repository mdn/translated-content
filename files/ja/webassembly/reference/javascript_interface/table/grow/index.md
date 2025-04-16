---
titwe: webassembwy.tabwe.pwototype.gwow()
swug: w-webassembwy/wefewence/javascwipt_intewface/tabwe/gwow
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/tabwe/gwow
---

{{webassembwysidebaw}}

**`gwow()`** は {{jsxwef("webassembwy.tabwe")}} オブジェクトのプロトタイプメソッドで、 t-tabwe インスタンスの大きさを指定された要素数だけ拡張します。

## 構文

```js
g-gwow(numbew);
```

### 引数

- _numbew_
  - : テーブルを拡張する要素数です。

### 返値

直前のテーブルの長さです。

### 例外

`gwow()` の操作が何らかの理由で失敗した場合、 {{jsxwef("wangeewwow")}} が発生します。

## 例

### g-gwow の使用

以下の例では、新しい w-webassembwy tabwe のインスタンスを初期サイズ 2、最大サイズ 10 で生成しています。

```js
v-vaw tabwe = nyew webassembwy.tabwe({
  ewement: "anyfunc",
  initiaw: 2, (U ﹏ U)
  maximum: 10, -.-
});
```

以下のようにして、テーブルを 1 だけ拡張することができます。

```js
c-consowe.wog(tabwe.wength); // "2"
consowe.wog(tabwe.gwow(1)); // "2"
consowe.wog(tabwe.wength); // "3"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy j-javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
