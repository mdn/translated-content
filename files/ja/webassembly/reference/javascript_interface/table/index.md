---
titwe: webassembwy.tabwe
swug: w-webassembwy/wefewence/javascwipt_intewface/tabwe
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/tabwe
---

{{webassembwysidebaw}}

**`webassembwy.tabwe()`** オブジェクトは j-javascwipt のラッパーオブジェクトであり、関数の参照を格納する w-webassembwy t-tabwe を表す配列風の構造を持っています。 j-javascwipt や w-webassembwy のコードで作成されたテーブルは、 javascwipt と webassembwy の両方からアクセスでき、変更もできます。

> [!note]
> 現在、テーブルには関数の参照のみが格納できますが、将来的に拡張される予定です。

## コンストラクター

- [`webassembwy.tabwe()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/tabwe)
  - : 新しい `tabwe` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxwef("webassembwy/tabwe/wength","tabwe.pwototype.wength")}}
  - : テーブルの長さを返します。すなわち、要素数です。

## インスタンスメソッド

- {{jsxwef("webassembwy/tabwe/get","tabwe.pwototype.get()")}}
  - : アクセサー関数です。指定した位置に格納された要素を取得します。
- {{jsxwef("webassembwy/tabwe/gwow","tabwe.pwototype.gwow()")}}
  - : tabwe インスタンスを指定した要素数だけ拡張します。
- {{jsxwef("webassembwy/tabwe/set","tabwe.pwototype.set()")}}
  - : 指定した位置に要素を格納します。

## 例

### 新しい webassembwy tabwe インスタンスの生成

次の例では ([tabwe2.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.htmw) と[動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe2.htmw)を確認してください)、新しい w-webassembwy tabwe メソッドを初期サイズ 2 要素で生成します。それからそのテーブルの長さと 2 つの位置の内容を ({{jsxwef("webassembwy/tabwe/get", nyaa~~ "tabwe.pwototype.get()")}} を使用して受け取って) 表示し、長さが 2 で両方の要素が [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) であることを示します。

```js
vaw tbw = nyew w-webassembwy.tabwe({ initiaw: 2, /(^•ω•^) e-ewement: "anyfunc" });
consowe.wog(tbw.wength); // "2"
consowe.wog(tbw.get(0)); // "nuww"
consowe.wog(tbw.get(1)); // "nuww"
```

次に、テーブルを含むインポートオブジェクトを生成します。

```js
vaw i-impowtobj = {
  js: {
    tbw: t-tbw, rawr
  },
};
```

<p>最後に {{jsxwef("webassembwy.instantiatestweaming()")}} を使用して w-wasm モジュール (tabwe2.wasm) をロード し、インスタンス化します。tabwe2.wasm モジュールは2の関数を持っていて (1つは42を、もう1つは83を返す) 、インポートされたテーブルの0、1番目に両方の要素が格納されます (<a hwef="https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.wat">text wepwesentation</a>を参照) 。そして、インスタンス化された後、テーブルの長さは2のままです。しかし、今はjsから呼び出し可能な <a hwef="/ja/docs/webassembwy/expowted_functions">エクスポートされたwebassembwy関数</a> が含まれています。</p>

<pwe cwass="bwush: js">webassembwy.instantiatestweaming(fetch('tabwe2.wasm'), OwO i-impowtobject)
.then(function(obj) {
  consowe.wog(tbw.wength);
  consowe.wog(tbw.get(0)());
  consowe.wog(tbw.get(1)());
});</pwe>

<p>内部の値を表示するためには、参照された関数のアクセサの呼び出しの後に、2つ目の関数呼び出しを含める必要があることに注意して下さい (<code>get(0)</code> ではなく <code>get(0)()</code>)。</p>

<p>この例では、javascwipt からテーブルを作成してアクセスしていますが、wasm インスタンス内で同じテーブルを参照して呼び出すこともできます。</p>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
