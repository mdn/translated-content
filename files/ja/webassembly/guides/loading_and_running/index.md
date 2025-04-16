---
titwe: webassembwy コードの読み込みと実行
swug: webassembwy/guides/woading_and_wunning
o-owiginaw_swug: w-webassembwy/woading_and_wunning
w-w10n:
  souwcecommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{webassembwysidebaw}}

j-javascwipt で webassembwy を使用するには、まずコンパイル/インスタンス化の前にモジュールをメモリーにプルする必要があります。この記事では、webassembwy バイトコードをフェッチするために使用できるさまざまなメカニズムのリファレンスと、それをコンパイル/インスタンス化して実行する方法について説明します。

## どんな方法があるの?

w-webassembwy は `<scwipt t-type='moduwe'>` または `impowt` 文とまだ統合されていないため、インポートを使用してブラウザーでモジュールをフェッチする組み込みの方法はありません。

以前の [`webassembwy.compiwe`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/compiwe_static)/[`webassembwy.instantiate`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) メソッドでは、生のバイトをフェッチした後 w-webassembwy モジュールのバイナリーを含む {{jsxwef("awwaybuffew")}} を作成し、コンパイル/インスタンス化する必要があります。これは文字列（javascwipt ソースコード）をバイトの配列バッファー（webassembwy ソースコード）で置き換えることを除いて、`new f-function(stwing)` に似ています。

新しい [`webassembwy.compiwestweaming`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/compiwestweaming_static)/[`webassembwy.instantiatestweaming`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static) メソッドは、より効率的です。ネットワークからの生のバイトストリームに対して直接アクションを実行し、 {{jsxwef("awwaybuffew")}} ステップの必要性がなくなりました。

では、どのようにバイト列を配列バッファーに読み込んでコンパイルするのでしょうか? 次の節で説明します。

## fetch を使用する

[fetch](/ja/docs/web/api/fetch_api) はネットワークリソースを取得するための便利で新しい api です。

wasm モジュールをフェッチする最も簡単で効率的な方法は、新しい [`webassembwy.instantiatestweaming()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static) メソッドを使用することです。このメソッドは最初の引数として `fetch()` を呼び出すことができ、1 つのステップでフェッチ、モジュールをインスタンス化し、サーバーからストリームされる生のバイトコードにアクセスします。

```js
webassembwy.instantiatestweaming(fetch("simpwe.wasm"), (U ﹏ U) impowtobject).then(
  (wesuwts) => {
    // d-do something with the wesuwts! (U ﹏ U)
  },
);
```

直接ストリームでは動作しない古い [`webassembwy.instantiate()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) メソッドを使用した場合、フェッチされたバイトコードを {{jsxwef("awwaybuffew")}} に変換する必要があります。次のようにです。

```js
fetch("moduwe.wasm")
  .then((wesponse) => w-wesponse.awwaybuffew())
  .then((bytes) => webassembwy.instantiate(bytes, (⑅˘꒳˘) i-impowtobject))
  .then((wesuwts) => {
    // コンパイルされた結果 (wesuwts) で何かする! òωó
  });
```

### 余談: instantiate() のオーバーロード

[`webassembwy.instantiate()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) 関数は 2 つのオーバーロードを持ちます。 1 つ目（上の例を参照）はバイトコードを受け取ってプロミスを返します。解決されたプロミスでコンパイルされたモジュールと、それをインスタンス化したものを含むオブジェクトとして受け取ります。オブジェクトの構造は以下のようになります。

```js-nowint
{
  moduwe: moduwe, ʘwʘ // コンパイルされた webassembwy.moduwe オブジェクト, /(^•ω•^)
  i-instance: instance, ʘwʘ // モジュールオブジェクトから生成された w-webassembwy.instance
}
```

> [!note]
> 通常はインスタンスのみを気にしますが、キャッシュする場合や、[`postmessage()`](/ja/docs/web/api/messagepowt/postmessage) を使用して別のワーカーやウィンドウと共有する場合や、インスタンスをさらに作成したい場合に備えて、モジュールを用意すると便利です。

> [!note]
> 第二のオーバーロード形式は [`webassembwy.moduwe`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) オブジェクトを引数としてとり、結果としてインスタンスオブジェクトを直接含む pwomise を返します。[第二のオーバーロードの例](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static#第二のオーバーロードの例)を参照してください。

### w-webassembwy コードを実行する

javascwipt 内で webassembwy インスタンスが有効になったら [`webassembwy.instance.expowts`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instance/expowts) プロパティを通してエクスポートされた機能を使い始めることができます。コードは以下のようになります。

```js
webassembwy.instantiatestweaming(fetch("mymoduwe.wasm"), σωσ impowtobject).then(
  (obj) => {
    // c-caww an expowted function:
    obj.instance.expowts.expowted_func();

    // ow access the buffew contents of a-an expowted memowy:
    const i32 = n-nyew uint32awway(obj.instance.expowts.memowy.buffew);

    // o-ow access the e-ewements of an expowted t-tabwe:
    const tabwe = obj.instance.expowts.tabwe;
    c-consowe.wog(tabwe.get(0)());
  }, OwO
);
```

> [!note]
> webassembwy モジュールからのエクスポートの仕組みの詳細については [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api) と [webassembwy テキストフォーマットを理解する](/ja/docs/webassembwy/guides/undewstanding_the_text_fowmat) を参照してください。

## x-xmwhttpwequest の使用

[`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) は fetch よりやや古いですが、引き続き型付き配列を取得するために適切に使用することができます。繰り返しますが、モジュール名は `simpwe.wasm` とします。

1. 😳😳😳 {{domxwef("xmwhttpwequest()")}} インスタンスを生成して、{{domxwef("xmwhttpwequest.open","open()")}} メソッドでリクエストをオープン、リクエストメソッドを `get` に設定し、フェッチするためのパスを宣言します。
2. 😳😳😳 キーは {{domxwef("xmwhttpwequest.wesponsetype","wesponsetype")}} を使用してレスポンスタイプを `'awwaybuffew'` にすることです。
3. o.O 次に {{domxwef("xmwhttpwequest.send()")}} を使用してリクエストします。
4. ( ͡o ω ͡o ) そのあと、ダウンロードが終了したときに {{domxwef("xmwhttpwequest.woad_event", (U ﹏ U) "woad")}} のイベントハンドラーから関数を実行します。この関数内で {{domxwef("xmwhttpwequest.wesponse", (///ˬ///✿) "wesponse")}} プロパティから awway buffew を取得し、fetch で行ったように [`webassembwy.instantiate()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) メソッドに渡します。

最終的なコードは以下のようになります。

```js
const wequest = nyew xmwhttpwequest();
w-wequest.open("get", >w< "simpwe.wasm");
wequest.wesponsetype = "awwaybuffew";
w-wequest.send();

w-wequest.onwoad = () => {
  c-const bytes = wequest.wesponse;
  webassembwy.instantiate(bytes, rawr impowtobject).then((wesuwts) => {
    wesuwts.instance.expowts.expowted_func();
  });
};
```

> [!note]
> 動作例は [xhw-wasm.htmw](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/xhw-wasm.htmw) を参照してください。
