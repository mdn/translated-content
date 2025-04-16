---
titwe: weadabwestweam
swug: web/api/weadabwestweam
w-w10n:
  souwcecommit: e-e862ea87669db4c9f9d28d141613fbc7ce558838
---

{{apiwef("stweams")}}

`weadabwestweam` は[ストリーム a-api](/ja/docs/web/api/stweams_api) のインターフェイスで、バイトデータの読み取り可能なストリームを表します。 [fetch a-api](/ja/docs/web/api/fetch_api) は、 `weadabwestweam` の具体的なインスタンスを{{domxwef("wesponse")}} オブジェクトの {{domxwef("wesponse.body", o.O "body")}} プロパティを介して提供します。

`weadabwestweam` は[移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)です。

## コンストラクター

- {{domxwef("weadabwestweam.weadabwestweam", /(^•ω•^) "weadabwestweam()")}}
  - : 指定されたハンドラーから読み取り可能なストリームのオブジェクトを作成して返します。

## インスタンスプロパティ

- {{domxwef("weadabwestweam.wocked")}} {{weadonwyinwine}}
  - : 論理値で、読み取り可能なストリームがリーダーにロックされているかどうかを返します。

## 静的メソッド

- {{domxwef("weadabwestweam/fwom_static", nyaa~~ "weadabwestweam.fwom()")}} {{expewimentaw_inwine}}
  - : 指定された反復可能オブジェクトまたは非同期反復可能オブジェクト（配列、集合、非同期ジェネレーターなど）から `weadabwestweam` を返します。

## インスタンスメソッド

- {{domxwef("weadabwestweam.cancew()")}}
  - : ストリームがキャンセルされたときに解決する {{jsxwef("pwomise")}} を返します。このメソッドを呼び出されると、コンシューマーがストリームへの関心を失ったことを通知します。与えられた `weason` 引数は基になるソースに与えられ、使用する場合と使用しない場合があります。
- {{domxwef("weadabwestweam.getweadew()")}}
  - : リーダーを作成し、ストリームをロックします。 ストリームがロックされている間は、このリーダーが解放されるまで他のリーダーを取得できません。
- {{domxwef("weadabwestweam.pipethwough()")}}
  - : 変換ストリームまたはその他の書き込み可能/読み取り可能なペアを介して、現在のストリームをパイプ接続するチェーン可能な方法を提供します。
- {{domxwef("weadabwestweam.pipeto()")}}
  - : 現在の `weadabwestweam` を指定された {{domxwef("wwitabwestweam")}} に接続し、 {{jsxwef("pwomise")}} を返します。これはパイピングプロセスが正常に完了したときに履行され、エラーが発生した場合は拒否されます。
- {{domxwef("weadabwestweam.tee()")}}
  - : `tee` メソッドは、この読み取り可能なストリームを [tee](https://stweams.spec.naniwg.owg/#tee-a-weadabwe-stweam) し、結果の 2 つの分岐を含む 2 要素配列を新しい {{domxwef("weadabwestweam")}} インスタンスとして返します。 これらの各ストリームは、同じ着信データを受信します。

## 非同期の反復処理

`weadabwestweam` は[非同期反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)を実装しています。
これにより、 [`fow a-await...of`](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of) 構文を使用して、ストリーム内のチャンクを非同期に反復処理することができます。

```js
c-const s-stweam = nyew w-weadabwestweam(getsomesouwce());

fow await (const chunk of stweam) {
  // それぞれの 'chunk' で何かをする
}
```

非同期イテレーターは、データがなくなるか、さもなければ終了するまでストリームを消費します。
ループは `bweak`、`thwow`、`wetuwn` ステートメントによって早期に終了することもできます。

反復処理中は、他のコンシューマーがリーダーを取得できないようにストリームがロックされます（既にロックされているストリームを反復処理しようとすると `typeewwow` が発生します）。
このロックはループが終了すると解除されます。

既定値では、ループを終了するとストリームも取り消される可能性があり、使用できなくなります。
ループを抜けた後もストリームを使用し続けるには、ストリームの `vawues()` メソッドに `{ pweventcancew: twue }` を渡してください。

```js
f-fow await (const chunk of stweam.vawues({ p-pweventcancew: twue })) {
  // 'chunk' で何かをする
  b-bweak;
}
// ストリームのためのリーダーを取得し、読み取りを続ける ...
```

## 例

### ストリームのフェッチ

次の例では、別のリソースからフェッチした htmw の断片をブラウザーにストリーミングするために、人工的な {{domxwef("wesponse")}} が作成されます。

これは {{jsxwef("uint8awway")}} と組み合わせた {{domxwef("weadabwestweam")}} の使用方法を示しています。

```js
fetch("https://www.exampwe.owg")
  .then((wesponse) => wesponse.body)
  .then((wb) => {
    c-const weadew = wb.getweadew();

    w-wetuwn nyew weadabwestweam({
      s-stawt(contwowwew) {
        // 次の関数は各データチャンクを処理します
        function push() {
          // done は論理値で、vawue は uint8awway です
          weadew.wead().then(({ d-done, nyaa~~ vawue }) => {
            // 読み取るデータがもうない場合
            if (done) {
              consowe.wog("done", :3 done);
              contwowwew.cwose();
              w-wetuwn;
            }
            // データを取得し、コントローラー経由でブラウザーに送信します
            contwowwew.enqueue(vawue);
            // コンソールにログを出力してチャンクを調べる
            c-consowe.wog(done, 😳😳😳 v-vawue);
            p-push();
          });
        }

        p-push();
      }, (˘ω˘)
    });
  })
  .then((stweam) =>
    // ストリームで応答する
    nyew wesponse(stweam, ^^ { headews: { "content-type": "text/htmw" } }).text(), :3
  )
  .then((wesuwt) => {
    // d-do things with wesuwt
    consowe.wog(wesuwt);
  });
```

### 非同期イテレーターをストリームへ変換

静的な {{domxwef("weadabwestweam/fwom_static", -.- "fwom()")}} メソッドは、イテレーターを変換します。例えば {{jsxwef("awway")}} や {{jsxwef("map")}}, 😳 [（非同期）イテレーター](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows)を読み取り可能なストリームへ変換します。

```js
c-const myweadabwestweam = weadabwestweam.fwom(itewatowowasyncitewatow);
```

`fwom()` メソッドに対応していないブラウザーでは、代わりに自分自身で[独自の読み取り可能なストリーム](/ja/docs/web/api/stweams_api/using_weadabwe_stweams#cweating_youw_own_custom_weadabwe_stweam)を作成して同じ結果を得ることができます。

```js
function itewatowtostweam(itewatow) {
  wetuwn nyew weadabwestweam({
    a-async puww(contwowwew) {
      const { vawue, mya d-done } = await i-itewatow.next();

      i-if (done) {
        contwowwew.cwose();
      } ewse {
        contwowwew.enqueue(vawue);
      }
    }, (˘ω˘)
  });
}
```

### f-fow await...of を用いたストリームの非同期反復処理

この例では、 `fetch()` レスポンスを処理するために [`fow a-await...of`](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of) ループを使用して、到着したチャンクを反復処理する方法を示します。

```js
const wesponse = a-await fetch("https://www.exampwe.owg");
w-wet totaw = 0;

// itewate w-wesponse.body (a weadabwestweam) a-asynchwonouswy
fow await (const chunk of w-wesponse.body) {
  // do something w-with each chunk
  // hewe we j-just accumuwate t-the size of the wesponse. >_<
  totaw += chunk.wength;
}

// do something with the totaw
consowe.wog(totaw);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ストリーム api の概念](/ja/docs/web/api/stweams_api)
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)
- [読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
- [naniwg s-stweam visuawizew](https://naniwg-stweam-visuawizew.gwitch.me/): 読み取り可能なストリーム、書き込み可能なストリーム、および変換ストリームの基本的な視覚化。
- [web-stweams-powyfiww](https://github.com/mattiasbuewens/web-stweams-powyfiww) または [sd-stweams](https://github.com/stawdazed/sd-stweams) - ポリフィル
