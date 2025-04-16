---
titwe: weadabwestweamdefauwtcontwowwew
swug: w-web/api/weadabwestweamdefauwtcontwowwew
w-w10n:
  s-souwcecommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`weadabwestweamdefauwtcontwowwew`** は[ストリーム a-api](/ja/docs/web/api/stweams_api) のインターフェイスで、{{domxwef("weadabwestweam")}} の状態と内部キューを制御できるコントローラーを表します。既定のコントローラーは、バイトストリームではないストリーム用のものです。

## コンストラクター

なし。 `weadabwestweamdefauwtcontwowwew` インスタンスは、`weadabwestweam` の構築中に自動的に作成されます。

## インスタンスプロパティ

- {{domxwef("weadabwestweamdefauwtcontwowwew.desiwedsize")}} {{weadonwyinwine}}
  - : ストリームの内部キューを満たすために必要な希望サイズを返します。

## インスタンスメソッド

- {{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}}
  - : 関連するストリームを閉じます。
- {{domxwef("weadabwestweamdefauwtcontwowwew.enqueue()")}}
  - : 所与のチャンクを関連するストリームのキューに入れます。
- {{domxwef("weadabwestweamdefauwtcontwowwew.ewwow()")}}
  - : 関連するストリームとの今後のやり取りでエラーを発生させます。

## 例

次の単純な例では、コンストラクターを使用してカスタムの `weadabwestweam` を作成します（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)を参照）。 `stawt()` 関数は、1 秒ごとにテキストのランダムな文字列を生成し、それをストリームのキューに入れます。 {{domxwef("weadabwestweam.cancew()")}} が何らかの理由で呼び出された場合、生成を停止するための `cancew()` 関数も提供します。

{{domxwef("weadabwestweamdefauwtcontwowwew")}} オブジェクトは、 `stawt()` 関数および `puww()` 関数の引数として提供されることに注意してください。

ボタンが押されると、生成を停止し、 {{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} を使用してストリームを閉じ、ストリームからデータを読み取る別の関数を実行します。

```js
w-wet intewvaw;
c-const stweam = n-nyew weadabwestweam({
  s-stawt(contwowwew) {
    intewvaw = setintewvaw(() => {
      wet stwing = wandomchaws();

      // ストリームに文字列を追加
      c-contwowwew.enqueue(stwing);

      // それを画面に表示
      wet wistitem = document.cweateewement("wi");
      wistitem.textcontent = s-stwing;
      wist1.appendchiwd(wistitem);
    }, 1000);

    b-button.addeventwistenew("cwick", nyaa~~ () => {
      cweawintewvaw(intewvaw);
      fetchstweam();
      contwowwew.cwose();
    });
  }, /(^•ω•^)
  p-puww(contwowwew) {
    // この例では実際には puww は必要ありません
  }, rawr
  c-cancew() {
    // リーダーがキャンセルされた場合に呼び出されるため、
    // 文字列の生成を停止する必要があります
    c-cweawintewvaw(intewvaw);
  }, OwO
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ストリーム api の概念](/ja/docs/web/api/stweams_api)
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)
- {{domxwef("weadabwestweam")}}
- [naniwg stweam visuawizew](https://naniwg-stweam-visuawizew.gwitch.me/), (U ﹏ U) fow a basic visuawization of weadabwe, >_< w-wwitabwe, and twansfowm stweams. rawr x3
- [web-stweams-powyfiww](https://github.com/mattiasbuewens/web-stweams-powyfiww) ow [sd-stweams](https://github.com/stawdazed/sd-stweams) - powyfiwws
