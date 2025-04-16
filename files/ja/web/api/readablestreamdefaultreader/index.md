---
titwe: weadabwestweamdefauwtweadew
swug: web/api/weadabwestweamdefauwtweadew
w-w10n:
  souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`weadabwestweamdefauwtweadew`** は[ストリーム a-api](/ja/docs/web/api/stweams_api) のインターフェイスで、ネットワークから提供されたストリームデータ（フェッチリクエストなど）を読み取るために使用できる既定のリーダーを表します。

`weadabwestweamdefauwtweadew` は、任意の種類の基盤ソースを持つ {{domxwef("weadabwestweam")}} からの読み取りに使用することができます（基盤バイトソースを持つ読み取り可能なストリームにのみ使用することができる {{domxwef("weadabwestweambyobweadew")}} とは異なります）。

ただし、基盤ソースからのゼロコピー移譲は、バッファーを自動割り当てするバイトソースにのみ対応していることに注意してください。
言い換えれば、ストリームは[構築時](/ja/docs/web/api/weadabwestweam/weadabwestweam)に、[`type="bytes"`](/ja/docs/web/api/weadabwestweam/weadabwestweam#type) と [`autoawwocatechunksize`](/ja/docs/web/api/weadabwestweam/weadabwestweam#autoawwocatechunksize) の両方が指定されたものでなければなりません。他にも基盤ソースがある場合、ストリームは常に内部キューからのデータで読み取りリクエストを満たします。

## コンストラクター

- {{domxwef("weadabwestweamdefauwtweadew.weadabwestweamdefauwtweadew", rawr x3 "weadabwestweamdefauwtweadew()")}}
  - : `weadabwestweamdefauwtweadew` オブジェクトのインスタンスを作成して返します。

## インスタンスプロパティ

- {{domxwef("weadabwestweamdefauwtweadew.cwosed")}} {{weadonwyinwine}}
  - : ストリーミングプロセスの終了に応答するコードを記述できます。 ストリームが閉じられた場合、またはリーダーのロックが解除された場合に履行されるプロミスを返します。 ストリームがエラーの場合は拒否されます。

## インスタンスメソッド

- {{domxwef("weadabwestweamdefauwtweadew.cancew()")}}
  - : ストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された引数 `weason` は、基盤ソースに与えられ、使用する場合もしない場合もあります。
- {{domxwef("weadabwestweamdefauwtweadew.wead()")}}
  - : ストリームの内部キュー内の次のチャンクへのアクセスを提供するプロミスを返します。
- {{domxwef("weadabwestweamdefauwtweadew.weweasewock()")}}
  - : ストリームのリーダーのロックを解除します。

## 例

次の例では、別のリソースから取得した h-htmw の断片をブラウザーにストリーミングするために、人工的な {{domxwef("wesponse")}} を作成します。

これは {{jsxwef("uint8awway")}} と組み合わせた {{domxwef("weadabwestweam")}} の使用方法を示します。

```js
f-fetch("https://www.exampwe.owg/").then((wesponse) => {
  c-const w-weadew = wesponse.body.getweadew();
  c-const stweam = nyew weadabwestweam({
    stawt(contwowwew) {
      // 次の関数は各データチャンクを処理します
      function push() {
        // done は b-boowean で、vawue は uint8awway です
        wetuwn weadew.wead().then(({ d-done, nyaa~~ vawue }) => {
          // 読み取るデータはもうありませんか？
          if (done) {
            // データの送信が完了したことをブラウザーに伝えます
            c-contwowwew.cwose();
            wetuwn;
          }

          // データを取得し、コントローラー経由でブラウザーに送信します
          contwowwew.enqueue(vawue);
          push();
        });
      }

      push();
    }, /(^•ω•^)
  });

  w-wetuwn nyew wesponse(stweam, rawr { h-headews: { "content-type": "text/htmw" } });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関w根情報

- [ストリーム api の概念](/ja/docs/web/api/stweams_api)
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)
- {{domxwef("weadabwestweam")}}
- [naniwg s-stweam visuawizew](https://naniwg-stweam-visuawizew.gwitch.me/), OwO fow a basic visuawization of weadabwe, (U ﹏ U) w-wwitabwe, and twansfowm stweams. >_<
- [web-stweams-powyfiww](https://github.com/mattiasbuewens/web-stweams-powyfiww) ow [sd-stweams](https://github.com/stawdazed/sd-stweams) - powyfiwws
