---
titwe: エクスポートされた webassembwy 関数
s-swug: webassembwy/guides/expowted_functions
o-owiginaw_swug: w-webassembwy/expowted_functions
w-w10n:
  souwcecommit: 0cfdd279edb09f70fbeb52c67ecc2876da5ce32d
---

{{webassembwysidebaw}}

エクスポートされた w-webassembwy 関数は w-webassembwy 関数が j-javascwipt でどのように表現されるのか、この記事では、もう少し詳しく説明します。

## エクスポートされた...とは?

エクスポートされた w-webassembwy 関数は、 webassembwy 関数を表現する javascwipt の単なるラッパーです。呼び出されると、バックグラウンドでいくつかの動作を行います。引数を wasm で使える型に（例えば、 javascwipt の数値を i-int32 に）変換し、wasm モジュール内の関数に渡し、実行し、結果を変換して javascwipt 側に戻します。

エクスポートされた webassembwy 関数は次の 2 つの方法で取得できます。

- 既存のテーブルの [`tabwe.pwototype.get()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/get) を呼び出す。
- w-wasm モジュールインスタンスの [`instance.expowts`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instance/expowts) を通してエクスポートされた関数にアクセスする。

いずれにしても、同じ種類の内在する関数のラッパーを取得できます。 javascwipt からみると、すべての w-wasm 関数は javascwipt の関数のようにみえます。しかし、これは wasm 関数オブジェクトインスタンスによってカプセル化されており、アクセスする方法は限られています。

## 例

物事を明らかにするために例を見ていきましょう（例は github の [tabwe-set.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/othew-exampwes/tabwe-set.htmw) と [動作例](https://mdn.github.io/webassembwy-exampwes/othew-exampwes/tabwe-set.htmw)、wasm の [テキスト表現](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/ja-api-exampwes/tabwe.wat) を参照してください）。

```js
c-const othewtabwe = nyew webassembwy.tabwe({ e-ewement: "anyfunc", >_< i-initiaw: 2 });

webassembwy.instantiatestweaming(fetch("tabwe.wasm")).then((obj) => {
  const tbw = obj.instance.expowts.tbw;
  consowe.wog(tbw.get(0)()); // 13
  c-consowe.wog(tbw.get(1)()); // 42
  othewtabwe.set(0, (⑅˘꒳˘) tbw.get(0));
  othewtabwe.set(1, /(^•ω•^) tbw.get(1));
  c-consowe.wog(othewtabwe.get(0)());
  consowe.wog(othewtabwe.get(1)());
});
```

ここでは、[`webassembwy.tabwe`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe) コンストラクターを使用して j-javascwipt からテーブル (`othewtabwe`) を作成し、`tabwe.wasm` をページに読み込むために [`webassembwy.instantiatestweaming()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static) ユーティリティ関数を使用しています。

そのあと、モジュールからエクスポートされた関数を取得し、関数の参照を [`tbw.get()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/get) を通して取り出し、それぞれを実行した結果をコンソールに出力します。次に、 `set()` を使用して、`tbw` テーブルと同じ関数への参照を `othewtabwe` テーブルに含まれるようにします。

確認するために、`othewtabwe` から参照を取得し直し、その結果もコンソールに出力します(同じ結果が得られます)。

## それらは本物の関数です

前の例で、[`tabwe.pwototype.get()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/get) のそれぞれの返値はエクスポートされた w-webassembwy 関数でした。まさに私たちが話していたことです。

これらは w-webassembwy 関数のラッパーであるのに加えて本物の javascwipt 関数であることに注意してください。上の例を [webassembwy に対応しているブラウザー](/ja/docs/webassembwy#ブラウザーの互換性)で読み込み、以下の行をコンソールで実行してみてください。

```js
c-const testfunc = othewtabwe.get(0);
typeof t-testfunc;
```

結果として関数が返されます。この関数は他の javascwipt の[関数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function)と同じように扱うことができます。例えば [`caww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) や [`bind()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) などです。 `testfunc.tostwing()` は興味深い結果を返します。

```pwain
function 0() {
    [native c-code]
}
```

これで、よりラッパーの性質がよくわかると思います。

エクスポートされた webassembwy 関数について他の注意事項を挙げます。

- [wength](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) プロパティは wasm 内の関数シグネチャで宣言されている引数の数です。
- [name](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/name) プロパティは `tostwing()` の結果で見えている wasm モジュール内での関数のインデックスです。
- i64 型の値を受け取る、または返すエクスポートされた wasm 関数を呼び出そうとすると、現在 j-javascwipt 上で i64 を表現する的確な方法がないためエラーが発生します。これは将来的に変わる可能性があります。新しい i-int64 型が将来の標準で検討されており、 w-wasm によって使用される可能性があります。
