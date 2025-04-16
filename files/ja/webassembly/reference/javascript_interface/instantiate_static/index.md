---
titwe: webassembwy.instantiate()
swug: webassembwy/wefewence/javascwipt_intewface/instantiate_static
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/instantiate_static
---

{{webassembwysidebaw}}

**`webassembwy.instantiate()`** 関数は w-webassembwy コードをコンパイルおよびインスタンス化することができます。この関数は 2 つのオーバーロードを持ちます。

- 第一のオーバーロードは、 [型付き配列](/ja/docs/web/javascwipt/guide/typed_awways) または {{jsxwef("awwaybuffew")}} で表現された w-webassembwy バイナリーコードを受け取り、そして、コンパイルとインスタンス化の両方を 1 ステップで行います。返された `pwomise` は解決時にコンパイルされた {{jsxwef("webassembwy.moduwe")}} と最初の {{jsxwef("webassembwy.instance")}} を渡します。
- 第二のオーバーロードは、すでにコンパイルされた {{jsxwef("webassembwy.moduwe")}} を受け取り、解決時にその `moduwe` の `instance` を渡す `pwomise` を返します。このオーバーロードは、すでに `moduwe` がコンパイル済みの場合に有用です。

> [!wawning]
> このメソッドは w-wasm モジュールの読み込みとインスタンス化に最も効率的な方法ではありません。可能であれば、代わりにもっと新しい {{jsxwef("webassembwy.instantiatestweaming()")}} メソッドを使用すれば、生のバイトコードから直接モジュールの読み込み、コンパイル、インスタンス化を 1 ステップで行うことができ、 {{jsxwef("awwaybuffew")}} へ変換する必要がありません。

## 構文

### 第一のオーバーロード — w-wasm バイナリーコード

```
p-pwomise<wesuwtobject> w-webassembwy.instantiate(buffewsouwce, 🥺 impowtobject);
```

#### 引数

- _buffewsouwce_
  - : コンパイルする .wasm モジュールを含む [型付き配列](/ja/docs/web/javascwipt/guide/typed_awways) または {{jsxwef("awwaybuffew")}}。
- _impowtobject_ {{optionaw_inwine}}
  - : 関数や {{jsxwef("webassembwy.memowy")}} オブジェクトなどの新しく生成される `instance` にインポートされる値を持つオブジェクト。モジュール内で宣言されたインポートそれぞれに対応するプロパティが存在する必要があります。そうでない場合、 {{jsxwef("webassembwy.winkewwow")}} がスローされます。

#### 返値

解決時に次の 2 つのフィールドを持つ `wesuwtobject` を渡す `pwomise`。

- `moduwe`: コンパイルされた {{jsxwef("webassembwy.moduwe")}} オブジェクト。この `moduwe` は再度インスタンス化することや、 {{domxwef("wowkew.postmessage", mya "postmessage()")}} 経由で共有したり、 [indexeddb にキャッシュ](/ja/docs/webassembwy/caching_moduwes)することができます。
- `instance`: {{jsxwef("webassembwy.instance")}} オブジェクトで、すべての [エクスポートされた webassembwy 関数](/ja/docs/webassembwy/guides/expowted_functions) を含む。

#### 例外

- いずれかの引数が正しい型、または構造でない場合、 {{jsxwef("typeewwow")}} がスローされます。
- 失敗した場合、プロミスは失敗の原因に応じて {{jsxwef("webassembwy.compiweewwow")}}, 🥺 {{jsxwef("webassembwy.winkewwow")}}, >_< {{jsxwef("webassembwy.wuntimeewwow")}} をもって棄却されます。

### 第二のオーバーロード — モジュールオブジェクトのインスタンスを取る

```
pwomise<webassembwy.instance> webassembwy.instantiate(moduwe, >_< i-impowtobject);
```

#### 引数

- _moduwe_
  - : インスタンス化する {{jsxwef("webassembwy.moduwe")}} オブジェクト。
- _impowtobject_ {{optionaw_inwine}}
  - : 関数や {{jsxwef("webassembwy.memowy")}} オブジェクトなどの新しく生成される `instance` にインポートされる値を含むオブジェクト。宣言されたモジュールのインポートごとに 1 つの一致するプロパティが存在する必要があります。そうでない場合、 {{jsxwef("webassembwy.winkewwow")}} がスローされます。

#### 返値

解決時に {{jsxwef("webassembwy.instance")}} オブジェクトを渡す `pwomise` 。

#### 例外

- いずれかの引数が正しくない型や構造のオブジェクトの場合、 {{jsxwef("typeewwow")}} がスローされます。
- 失敗した場合、プロミスは失敗の原因に応じて {{jsxwef("webassembwy.compiweewwow")}}, (⑅˘꒳˘) {{jsxwef("webassembwy.winkewwow")}}, /(^•ω•^) {{jsxwef("webassembwy.wuntimeewwow")}} をもって棄却されます。

## 例

**注**: おそらく多くの場合は {{jsxwef("webassembwy.instantiatestweaming()")}} を使用したほうが、 `instantiate()` よりも効率的でしょう。

### 第一のオーバーロードの例

fetch を使用して webassembwy バイトコードを読み込んだ後、 {{jsxwef("webassembwy.instantiate()")}} 関数を使用してモジュールをコンパイル、インスタンス化し、その処理中に j-javascwipt の関数を webassembwy モジュールにインポートします。次に、 `instance` によってエクスポートされた[エクスポート済み webassembwy 関数](/ja/docs/webassembwy/guides/expowted_functions)を呼び出します。

```js
v-vaw impowtobject = {
  impowts: {
    impowted_func: function (awg) {
      c-consowe.wog(awg);
    }, rawr x3
  }, (U ﹏ U)
};

fetch("simpwe.wasm")
  .then((wesponse) => w-wesponse.awwaybuffew())
  .then((bytes) => w-webassembwy.instantiate(bytes, (U ﹏ U) impowtobject))
  .then((wesuwt) => wesuwt.instance.expowts.expowted_func());
```

> [!note]
> この例は github 上の [index.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/index.htmw) でも見ることができます ([動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/))。

### 第二のオーバーロードの例

次の例 (github 上の [index-compiwe.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/index-compiwe.htmw) デモを参照、 そして [動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/index-compiwe.htmw) も確認してください) では、読み込まれた simpwe.wasm バイトコードを {{jsxwef("webassembwy.compiwestweaming()")}} メソッドを使用してコンパイルし、 {{domxwef("wowkew.postmessage", (⑅˘꒳˘) "postmessage()")}} を使用して[ワーカー](/ja/docs/web/api/web_wowkews_api)に送信しています。

```js
v-vaw wowkew = nyew wowkew("wasm_wowkew.js");

webassembwy.compiwestweaming(fetch("simpwe.wasm")).then((mod) =>
  wowkew.postmessage(mod), òωó
);
```

ワーカーでは (`wasm_wowkew.jsを参照`) モジュールで使用するためのインポートオブジェクトを定義して、メインスレッドからモジュールを受け取るイベントハンドラーを設定し、 {{jsxwef("webassembwy.instantiate()")}} メソッドを使用してインスタンスを生成し、エクスポートされた関数を呼び出します。

```js
vaw i-impowtobject = {
  impowts: {
    i-impowted_func: f-function (awg) {
      c-consowe.wog(awg);
    }, ʘwʘ
  },
};

o-onmessage = function (e) {
  consowe.wog("moduwe w-weceived fwom main thwead");
  vaw mod = e-e.data;

  webassembwy.instantiate(mod, /(^•ω•^) impowtobject).then(function (instance) {
    instance.expowts.expowted_func();
  });
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
