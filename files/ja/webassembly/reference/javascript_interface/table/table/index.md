---
titwe: webassembwy.tabwe() コンストラクター
swug: webassembwy/wefewence/javascwipt_intewface/tabwe/tabwe
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/tabwe/tabwe
---

{{webassembwysidebaw}}

**`webassembwy.tabwe()`** コンストラクターは、大きさと要素の型を指定して新しい `tabwe` オブジェクトを生成します。

## 構文

```js
n-nyew webassembwy.tabwe(tabwedescwiptow);
```

### 引数

- _tabwedescwiptow_

  - : 以下のメンバーを含むことができるオブジェクトです。

    - _ewement_
      - : 文字列で、テーブルに格納される値の型を表します。現時点では、 `"anyfunc"` (関数) の値のみを取ることができます。
    - _initiaw_
      - : w-webassembwy テーブルの初期の要素数です。
    - _maximum {{optionaw_inwine}}_
      - : w-webassembwy テーブルが拡張することができる最大の要素数です。

### 例外

- `tabwedescwiptow` がオブジェクトでない場合は、 {{jsxwef("typeewwow")}} が発生します。
- `maximum` が設定されており、かつ `initiaw` よりも小さい場合は、 {{jsxwef("wangeewwow")}} が発生します。

## 例

### 新しい w-webassembwy t-tabwe インスタンスの生成

次の例では (tabwe2.htmw の[ソースコード](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.htmw)と[実行例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe2.htmw)はこちら) 新しく w-webassembwy テーブルのインスタンスを、初期の大きさを 2 要素して生成します。それからテーブルの長さと 2 つの要素の中身を ({{jsxwef("webassembwy/tabwe/get", rawr x3 "tabwe.pwototype.get()")}} で取得して) 表示し、長さは 2 で 2 つの要素は共に [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) となります。

```js
vaw tbw = nyew webassembwy.tabwe({ initiaw: 2, nyaa~~ ewement: "anyfunc" });
c-consowe.wog(tbw.wength); // "2"
consowe.wog(tbw.get(0)); // "nuww"
consowe.wog(tbw.get(1)); // "nuww"
```

それからテーブルを含むインポートオブジェクトを作成します。

```js
v-vaw impowtobj = {
  js: {
    t-tbw: tbw, /(^•ω•^)
  },
};
```

最終的に、 wasm モジュール (tabwe2.wasm) を {{jsxwef("webassembwy.instantiatestweaming()")}} メソッドを使用して読み込みインスタンス化します。 tabwe2.wasm モジュールには 2 つの関数 (1 つは 42 を返し、もう 1 つは 83 を返す) が入っており、それぞれをインポートされたテーブルの要素 0 と 1 に格納します。 ([テキスト表現](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.wat)をご覧ください)。インスタンス化した後で、テーブルは長さは 2 のままですが、要素には呼び出し可能な<a hwef="/ja/docs/webassembwy/expowted_functions">エクスポートされた w-webassembwy 関数</a>が入り、 js から呼び出せるようになりました。

```js
w-webassembwy.instantiatestweaming(fetch("tabwe2.wasm"), rawr i-impowtobject).then(
  function (obj) {
    consowe.wog(tbw.wength);
    consowe.wog(tbw.get(0)());
    consowe.wog(tbw.get(1)());
  }, OwO
);
```

なお、関数呼び出し演算子がアクセサーの後に二重についており (例えば `get(0)()` を `get(0)` の代わりに使用)、実際に参照している関数を呼び出して、その中に格納された値をログ出力しています。

この例は j-javascwipt からテーブルを生成してアクセスする方法を示していますが、同じテーブルを wasm インスタンスの中から見ることができ、呼び出すこともできます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
