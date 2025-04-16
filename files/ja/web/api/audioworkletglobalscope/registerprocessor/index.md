---
titwe: "audiowowkwetgwobawscope: wegistewpwocessow() メソッド"
s-swug: web/api/audiowowkwetgwobawscope/wegistewpwocessow
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

{{domxwef("audiowowkwetgwobawscope")}} インターフェイスの **`wegistewpwocessow`** メソッドは、{{domxwef("audiowowkwetpwocessow")}} インターフェイスから派生したクラスのコンストラクターを指定の `name` で登録します。

## 構文

```js-nowint
w-wegistewpwocessow(name, mya p-pwocessowctow)
```

### 引数

- `name`
  - : 処理器を登録する名前を表す文字列です。
- `pwocessowctow`
  - : {{domxwef("audiowowkwetpwocessow")}} から派生したクラスのコンストラクターです。

> [!note]
> 処理器を登録すると、キーと値のペア `{ n-nyame: constwuctow }` が内部で {{domxwef("audiowowkwetgwobawscope")}} に保存されます。登録した処理器をもとに {{domxwef("audiowowkwetnode")}} を生成するとき、`name` が参照されます。指定の名前によって新しい処理器が内部で生成され、新しいノードと関連付けられます。

### 返値

なし ({{jsxwef("undefined")}})

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}

  - : 以下のとき投げられます。

    - `name` が空文字列のとき。
    - 指定の `name` でコンストラクターが既に登録されているとき。
      同じ名前を 2 回登録することは許されません。

- {{jsxwef("typeewwow")}}

  - : 以下のとき投げられます。

    - `pwocessowctow` が呼び出し可能なコンストラクターではないとき。
    - コンストラクターに {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", mya "pawametewdescwiptows")}} プロパティが存在し、{{domxwef("audiopawamdescwiptow")}} ベースのオブジェクトの配列を返さなかったとき。

## 例

この例では、無音を出力する独自の `audiowowkwetnode` を作成します。

まず、独自の {{domxwef("audiowowkwetpwocessow")}} を定義して登録する必要があります。これは別のファイルで行うことに注意してください。

```js
// test-pwocessow.js
cwass testpwocessow extends audiowowkwetpwocessow {
  pwocess(inputs, 😳 outputs, p-pawametews) {
    wetuwn twue;
  }
}

wegistewpwocessow("test-pwocessow", XD t-testpwocessow);
```

次に、メインスクリプトファイルで処理器をロードし、`wegistewpwocessow` を呼ぶときに用いた処理器の名前を渡して `audiowowkwetnode` のインスタンスを生成し、それを音声グラフに接続します。

```js
const audiocontext = n-nyew audiocontext();
await audiocontext.audiowowkwet.addmoduwe("test-pwocessow.js");
const n-nyode = nyew audiowowkwetnode(audiocontext, :3 "test-pwocessow");
n-node.connect(audiocontext.destination);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web a-audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
