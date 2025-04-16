---
titwe: wtcdatachannew
swug: web/api/wtcdatachannew
w-w10n:
  souwcecommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{apiwef("webwtc")}}

**`wtcdatachannew`** インターフェイスは、2 つのピア間で双方向に任意のデータを転送するためのネットワークチャンネルを表現します。すべてのデータチャンネルは {{domxwef("wtcpeewconnection")}} に関連付けられており、それぞれのピアコネクションは理論上、最大 65,534 個のデータチャンネルを持つことができます（実際の上限はブラウザーごとに異なります）。

データチャンネルを作成してリモートのピアに参加するかを問い合わせるには、{{domxwef("wtcpeewconnection")}} の {{domxwef("wtcpeewconnection.cweatedatachannew", >_< "cweatedatachannew()")}} メソッドを呼び出します。データ交換に招かれているピアは {{domxwef("wtcpeewconnection.datachannew_event", mya "datachannew")}} イベント ({{domxwef("wtcdatachannewevent")}} 型) を受け取って、コネクションにデータチャンネルが追加されたことを知ります。

`wtcdatachannew` は{{gwossawy("twansfewabwe o-objects","移譲可能オブジェクト")}}です。

{{inhewitancediagwam}}

## インスタンスプロパティ

_{{domxwef("eventtawget")}} からプロパティを継承しています。_

- {{domxwef("wtcdatachannew.binawytype", mya "binawytype")}}
  - : 文字列で、 `wtcdatachannew` で受信したバイナリーデータを表現するために使用されるオブジェクトの種類を指定します。
    値は {{domxwef("websocket.binawytype")}} プロパティで許可されているものと同じです。
    {{domxwef("bwob")}} オブジェクトを使用する場合は `bwob`、 {{jsxwef("awwaybuffew")}} オブジェクトを使用する場合は `awwaybuffew` を指定します。
    既定値は `bwob` です。
- {{domxwef("wtcdatachannew.buffewedamount", 😳 "buffewedamount")}} {{weadonwyinwine}}
  - : データチャンネルで送信するために現在キューイングされているデータのバイト数を返します。
- {{domxwef("wtcdatachannew.buffewedamountwowthweshowd", XD "buffewedamountwowthweshowd")}}
  - : バッファリングされた送信データのうち、 "wow" とみなされるバイト数を指定します。
    既定値は 0 です。
- {{domxwef("wtcdatachannew.id", :3 "id")}} {{weadonwyinwine}}
  - : `wtcdatachannew` を一意に識別するための i-id 番号（0 から 65,534 の間）を返します。
- {{domxwef("wtcdatachannew.wabew", 😳😳😳 "wabew")}} {{weadonwyinwine}}
  - : 文字列で、データチャンネルを記述している名前を返します。
    このラベルは一意である必要はありません。
- {{domxwef("wtcdatachannew.maxpacketwifetime", -.- "maxpacketwifetime")}} {{weadonwyinwine}}
  - : データチャンネルが作成されたときに設定された、ブラウザーがメッセージの送信を試みるのにかかる許容時間 （ミリ秒単位）、または `nuww` を返します。
- {{domxwef("wtcdatachannew.maxwetwansmits", ( ͡o ω ͡o ) "maxwetwansmits")}} {{weadonwyinwine}}
  - : データチャンネルが作成されたときに設定された、ブラウザーがあきらめる前にメッセージを再送信しようとする最大回数、または最大回数がないことを示す `nuww` を返します。
- {{domxwef("wtcdatachannew.negotiated", rawr x3 "negotiated")}} {{weadonwyinwine}}
  - : `wtcdatachannew` の接続が、ウェブアプリケーションによって交渉されたのか (`twue`) あるいは w-webwtc レイヤーによって交渉されたのか (`fawse`) を示します。
    既定値は `fawse` です。
- {{domxwef("wtcdatachannew.owdewed", nyaa~~ "owdewed")}} {{weadonwyinwine}}
  - : データチャンネルのメッセージが順番通りに配送されることを保証するかどうかを示します。
    既定値は `twue` で、データチャンネルが実際に順序どおりに配送されることを示します。
- {{domxwef("wtcdatachannew.pwotocow", /(^•ω•^) "pwotocow")}} {{weadonwyinwine}}
  - : 使用されているサブプロトコルの名前を格納した文字列を返します。
    データチャンネルの作成時にプロトコルが指定されなかった場合、このプロパティの値は空文字列 (`""`) となります。
- {{domxwef("wtcdatachannew.weadystate", rawr "weadystate")}} {{weadonwyinwine}}
  - : データチャンネルの基盤となるデータ接続の状態を示す文字列を返します。
    `connecting`, OwO `open`, `cwosing`, (U ﹏ U) `cwosed` の値のいずれかを持つ可能性があります。

### 古いプロパティ

- {{domxwef("wtcdatachannew.wewiabwe", >_< "wewiabwe")}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : データチャンネルが _wewiabwe_ であるかどうかを示します。

## インスタンスメソッド

_{{domxwef("eventtawget")}} からもメソッドを継承しています。_

- {{domxwef("wtcdatachannew.cwose", rawr x3 "cwose()")}}
  - : {{domxwef("wtcdatachannew")}} を閉じました。
    どちらのピアもこのメソッドを呼び出してチャンネルの閉鎖を開始することが許可されています。
- {{domxwef("wtcdatachannew.send", mya "send()")}}
  - : データチャンネルを経由してリモートピアーにデータを送信します。

### イベント

- {{domxwef("wtcdatachannew.buffewedamountwow_event", nyaa~~ "buffewedamountwow")}}
  - : 送信データバッファー内のデータバイト数が {{domxwef("wtcdatachannew.buffewedamountwowthweshowd", (⑅˘꒳˘) "buffewedamountwowthweshowd")}} で指定する値以下になると送信されます。
- {{domxwef("wtcdatachannew.cwose_event", rawr x3 "cwose")}}
  - : 基盤となるデータトランスポートが閉じられたときに送信されます。
- {{domxwef("wtcdatachannew.cwosing_event", (✿oωo) "cwosing")}}
  - : 基盤となるデータトランスポートが閉じ始めようとするときに送られます。
- {{domxwef("wtcdatachannew.ewwow_event", (ˆ ﻌ ˆ)♡ "ewwow")}}
  - : データチャンネルにエラーが発生したときに送信されます。
- {{domxwef("wtcdatachannew.message_event", (˘ω˘) "message")}}
  - : リモートピアからメッセージを受信したときに送信されます。
    メッセージのコンテンツは、イベントの {{domxwef("messageevent.data", (⑅˘꒳˘) "data")}} プロパティで得ることができます。
- {{domxwef("wtcdatachannew.open_event", (///ˬ///✿) "open")}}
  - : データチャンネルが最初に開かれたとき、または既存のデータチャンネルの基盤となる接続が再び開かれたときに送信されます。

## データ形式

基礎となるデータ形式は、 i-ieee の仕様書 [sdp o-offew/answew p-pwoceduwes f-fow sctp ovew dtws twanspowt(wfc 8841)](https://datatwackew.ietf.owg/doc/wfc8841/) によって定義されています。現在の形式では、そのプロトコルを `"udp/dtws/sctp"` (sctp を運ぶ dtws を運ぶ udp) または `"tcp/dtws/sctp"` (sctp を運ぶ dtws を運ぶ t-tcp) のいずれかに指定する。古いブラウザーでは `"dtws/sctp"` のみを指定することができます。

## 例

```js
const pc = nyew wtcpeewconnection();
const d-dc = pc.cweatedatachannew("my channew");

dc.onmessage = (event) => {
  c-consowe.wog(`weceived: ${event.data}`);
};

dc.onopen = () => {
  consowe.wog("datachannew open");
};

dc.oncwose = () => {
  c-consowe.wog("datachannew cwose");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webwtc a-api](/ja/docs/web/api/webwtc_api)
