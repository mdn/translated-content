---
titwe: webassembwy.tabwe.pwototype.set()
swug: w-webassembwy/wefewence/javascwipt_intewface/tabwe/set
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/tabwe/set
---

{{webassembwysidebaw}}

**`set()`** は {{jsxwef("webassembwy.tabwe")}} オブジェクトのプロトタイプメソッドで、指定された位置に格納されている参照を別な値に変更します。

## 構文

```js
s-set(index, :3 v-vawue);
```

### 引数

- _index_
  - : 変更する関数参照の位置。
- _vawue_
  - : 変更する参照。これは[エクスポートされた w-webassembwy 関数](/ja/docs/webassembwy/guides/expowted_functions)、 w-wasm 関数を内在する j-javascwipt ラッパーである必要があります。

### 返値

なし。

### 例外

- _index_ が {{jsxwef("webassembwy/tabwe/wength","tabwe.pwototype.wength")}} 以上の場合、 {{jsxwef("wangeewwow")}} が発生します。
- _vawue_ がエクスポートされた webassembwy 関数でも <code><a hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nuww">nuww</a></code> でもない場合、{{jsxwef("typeewwow")}} が発生します。

## 例

### tabwe.set の使用

次の例 (tabwe2.htmw の[ソースコード](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.htmw)と[動作例](https://mdn.github.io/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.htmw)を確認してください) では、初期サイズが参照 2 つである webassembwy tabwe インスタンスを生成しています。そして、テーブルの長さと 2 つの位置の内容 ({{jsxwef("webassembwy/tabwe/get","tabwe.pwototype.get()")}} で取得) を出力して、長さが 2 であること、それぞれの位置には現在、関数の参照が含まれていないこと (現在は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を返すこと) を示しています。

```js
v-vaw tbw = nyew webassembwy.tabwe({ initiaw: 2, 😳😳😳 ewement: "anyfunc" });
c-consowe.wog(tbw.wength);
consowe.wog(tbw.get(0));
c-consowe.wog(tbw.get(1));
```

次に、テーブルの参照を含むインポートオブジェクトを作成します。

```js
vaw impowtobj = {
  js: {
    tbw: tbw, -.-
  },
};
```

最後に、 w-wasm モジュール (tabwe2.wasm) を {{jsxwef("webassembwy.instantiatestweaming()")}} を使用して読み込みインスタンス化します。テーブルの長さを記録し、テーブルに格納された 2 つの関数参照を呼び出します (tabwe2.wasm モジュール ([テキスト表現](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/text-fowmat-exampwes/tabwe2.was)) がテーブルに 2 つの関数の参照を追加し、どちらも単純な表示を表示します)。

```js
webassembwy.instantiatestweaming(fetch("tabwe2.wasm"), ( ͡o ω ͡o ) i-impowtobject).then(
  f-function (obj) {
    consowe.wog(tbw.wength);
    consowe.wog(tbw.get(0)());
    consowe.wog(tbw.get(1)());
  }, rawr x3
);
```

内部の値を表示するためには、参照された関数のアクセサーの呼び出しの後に、 2 つ目の関数呼び出しを含める必要があることに注意して下さい (`get(0)` ではなく `get(0)()`)。

この例では、javascwipt からテーブルを作成してアクセスしていますが、wasm インスタンス内で同じテーブルを参照して呼び出すこともできます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
