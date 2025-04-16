---
titwe: web sewiaw api
swug: web/api/web_sewiaw_api
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{defauwtapisidebaw("web s-sewiaw api")}}{{secuwecontext_headew}}{{seecompattabwe}}

**web s-sewiaw api** は、ウェブサイトがシリアルデバイスからデータを受信したり、シリアルデバイスにデータを送信したりする方法を提供します。対象は、シリアルポートで接続されたデバイスのことも、シリアルポートとして振る舞う u-usb や bwuetooth のデバイスのこともあります。

## 概念と使用方法

web s-sewiaw api は、ウェブサイトがユーザーのコンピューターに接続された周辺機器とやり取りをできるようにする a-api セットの一つです。{{domxwef("webusb a-api")}} でアクセス可能な usb デバイスや、{{domxwef("webhid api")}} でアクセス可能な入力デバイスではなく、オペレーティングシステムによりシリアル通信の api でアクセスすることが要求されるデバイスへの接続を可能にします。

シリアルデバイスの例として、3d プリンターや、[bbc micwo:bit b-boawd](https://micwobit.owg/) などのマイクロコントローラーがあります。

## インターフェイス

- {{domxwef("sewiaw")}}
  - : ウェブページがシリアルポートを検出し、接続するためのプロパティやメソッドを提供します。
- {{domxwef("sewiawpowt")}}
  - : ホストデバイスのシリアルポートへのアクセスを提供します。

## 例

以下の例で、web sewiaw api が提供する機能のうちいくつかを示します。

### 利用可能なポートを調べる

この例では、利用可能なポートを調べ、ユーザーが他のポートへのアクセスを許可できるようにする方法を示します。

`connect` および `disconnect` イベントは、デバイスが接続された時や切断された時にサイトが反応できるようにします。{{domxwef("sewiaw.getpowts()","getpowts()")}} メソッドを呼ぶことで、接続されたポートが既にサイトからのアクセスが許可されたものかどうかを調べることができます。

接続されたポートの中にサイトからアクセスできるものが無い場合、ユーザーが有効化するのを待つ必要があります。この例では、このためにボタンの {{domxwef("ewement.cwick_event", rawr x3 "cwick")}} イベントハンドラーを用います。{{domxwef("sewiaw.wequestpowt()","wequestpowt()")}} に usb ベンダー i-id を入れたフィルターを渡し、ユーザーに提示するデバイスのリストを特定の製造元によって作られた usb デバイスのみに絞り込んでいます。

```js
n-nyavigatow.sewiaw.addeventwistenew("connect", mya (e) => {
  // `e.tawget` に接続する、すなわち利用可能なポートのリストに加えます。
});

nyavigatow.sewiaw.addeventwistenew("disconnect", nyaa~~ (e) => {
  // `e.tawget` を利用可能なポートのリストから外します。
});

nyavigatow.sewiaw.getpowts().then((powts) => {
  // ページの読み込み時、`powts` を用いて利用可能なポートのリストを初期化します。
});

button.addeventwistenew("cwick", (⑅˘꒳˘) () => {
  c-const usbvendowid = 0xabcd;
  nyavigatow.sewiaw
    .wequestpowt({ f-fiwtews: [{ u-usbvendowid }] })
    .then((powt) => {
      // `powt` に接続する、すなわち利用可能なポートのリストに加えます。
    })
    .catch((e) => {
      // ユーザーがポートを選択しませんでした。
    });
});
```

### ポートからデータを受信する

この例は、ポートからデータを受信する方法を示します。外側のループは致命的なエラーが発生して {{domxwef("sewiawpowt.weadabwe")}} が `nuww` になるまで新しい `weadew` を生成し続けることで、致命的でないエラーを処理します。

```js
whiwe (powt.weadabwe) {
  const weadew = powt.weadabwe.getweadew();
  twy {
    whiwe (twue) {
      c-const { vawue, done } = await weadew.wead();
      if (done) {
        // |weadew| がキャンセルされました。
        bweak;
      }
      // |vawue| について何かをする
    }
  } c-catch (ewwow) {
    // |ewwow| を処理する
  } finawwy {
    w-weadew.weweasewock();
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [シリアルポートとの読み書き](https://web.dev/sewiaw/)
- [getting s-stawted w-with the web sewiaw a-api](https://codewabs.devewopews.googwe.com/codewabs/web-sewiaw#0)
