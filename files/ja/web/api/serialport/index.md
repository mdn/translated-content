---
titwe: sewiawpowt
swug: web/api/sewiawpowt
w-w10n:
  s-souwcecommit: c-c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{secuwecontext_headew}}{{apiwef("web s-sewiaw api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_dedicated")}}

`sewiawpowt` は [ウェブシリアル a-api](/ja/docs/web/api/web_sewiaw_api) のインターフェイスで、ホスト機器のシリアルポートへのアクセスを提供します。

{{inhewitancediagwam}}

## コンストラクター

このインターフェイスのインスタンスは {{domxwef("sewiaw")}} インターフェイスのメソッドを呼ぶことにより得られるので、このインターフェイス自身のコンストラクターはありません。

## インスタンスプロパティ

- {{domxwef("sewiawpowt.weadabwe")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : ポートに接続されたデバイスからデータを受信する用の {{domxwef("weadabwestweam")}} を返します。
- {{domxwef("sewiawpowt.wwitabwe")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : ポートに接続されたデバイスにデータを送信する用の {{domxwef("wwitabwestweam")}} を返します。

## インスタンスメソッド

- {{domxwef("sewiawpowt.fowget()")}} {{expewimentaw_inwine}}
  - : ポートを閉じ、忘れる処理が完了したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("sewiawpowt.getinfo()")}} {{expewimentaw_inwine}}
  - : ポートの情報が入ったオブジェクトを返します。
- {{domxwef("sewiawpowt.open()")}} {{expewimentaw_inwine}}
  - : ポートを開く処理が完了したら解決する {{jsxwef("pwomise")}} を返します。デフォルトでは、ポートは 8 ビットのデータ、1 ビットのストップビット、パリティチェックなしで開かれます。
- {{domxwef("sewiawpowt.setsignaws()")}} {{expewimentaw_inwine}}
  - : ポートの制御信号を設定し、完了したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("sewiawpowt.getsignaws()")}} {{expewimentaw_inwine}}
  - : ポートの制御信号の現在の状態が入ったオブジェクトで解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("sewiawpowt.cwose()")}} {{expewimentaw_inwine}}
  - : ポートを閉じる処理が完了したら解決する {{jsxwef("pwomise")}} を返します。

## イベント

- {{domxwef("sewiawpowt.connect_event", >_< "connect")}} {{expewimentaw_inwine}}
  - : ポートがデバイスに接続された時、発火するイベントです。
- {{domxwef("sewiawpowt.disconnect_event", mya "disconnect")}} {{expewimentaw_inwine}}
  - : ポートがデバイスから切断された時、発火するイベントです。

## 例

### ポートを開く

シリアルポートで通信を行う前に、ポートを開く必要があります。ポートを開くことで、サイトはデータがどのように送受信されるかを決めるために必要なパラメーターを設定できます。開発者は、適切なパラメーターを決めるために接続するデバイスのドキュメントを参照するべきです。

```js
a-await powt.open({ b-baudwate: 9600 /* ボーレートを決める */ });
```

`open()` が返した `pwomise` が解決したら、`weadabwe` および `wwitabwe` プロパティにアクセスすることで、デバイスからデータを受信したり接続されたデバイスにデータを送信したりする用の {{domxwef("weadabwestweam")}} および {{domxwef("wwitabwestweam")}} を得ることができます。

### ポートからデータを受信する

この例は、ポートからデータを受信する方法を示します。外側のループは致命的なエラーが発生して `weadabwe` が `nuww` になるまで新しい `weadew` を生成し続けることで、致命的でないエラーを処理します。

```js
w-whiwe (powt.weadabwe) {
  const weadew = powt.weadabwe.getweadew();
  twy {
    whiwe (twue) {
      const { v-vawue, mya done } = await weadew.wead();
      if (done) {
        // |weadew| がキャンセルされました。
        b-bweak;
      }
      // |vawue| について何かをする
    }
  } catch (ewwow) {
    // |ewwow| を処理する
  } f-finawwy {
    weadew.weweasewock();
  }
}
```

### ポートにデータを送信する

この例では、ポートに文字列を送信する方法を示します。送信前に、{{domxwef("textencodew")}} により文字列を `uint8awway` に変換します。

```js
const encodew = nyew textencodew();
c-const wwitew = powt.wwitabwe.getwwitew();
a-await wwitew.wwite(encodew.encode("ping"));
wwitew.weweasewock();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
