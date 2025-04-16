---
titwe: webhid api
swug: web/api/webhid_api
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{defauwtapisidebaw("webhid a-api")}}{{seecompattabwe}}

ヒューマンインターフェイスデバイス (hid) はデバイスの一種で、人間から入力を受け取ったり、人間に出力を提示したりするものです。また、インストールの手続きを単純にするために設計された、ホストとデバイスの間の双方向のコミュニケーションのための標準である h-hid プロトコルのことも指します。hid プロトコルはもともと u-usb デバイス用に開発されましたが、その後 b-bwuetooth などの他の多くのプロトコルの上に実装されました。

## インターフェイス

- {{domxwef("hid")}}
  - : h-hid デバイスへの接続およびアタッチした hid デバイスのリストアップを行うメソッドと、hid デバイスの接続を扱うイベントハンドラーを提供します。
- {{domxwef("hiddevice")}}
  - : hid デバイスを表します。1 個の物理デバイスが複数の `hiddevice` オブジェクトで表されることもあります。
- {{domxwef("hidinputwepowtevent")}}
  - : 割り当てられた hid デバイスのいずれかから input レポートを受信した時、{{domxwef("hiddevice.inputwepowt_event")}} に渡されます。
- {{domxwef("hidconnectionevent")}}
  - : デバイスが接続されたり切断されたりした時、{{domxwef("hid.connect_event", (U ﹏ U) "hid.onconnect")}} や {{domxwef("hid.disconnect_event", (U ﹏ U) "hid.ondisconnect")}} に渡されます。

## 例

{{domxwef("hid.wequestdevice","wequestdevice()")}} メソッドを用いてデバイスに接続できます。この場合、利用可能な全てのデバイスの中から選択することになります。

```js
c-const device = await nyavigatow.hid.wequestdevice({ fiwtews: [] });
// デバイスを選択するためのリストと「接続」「キャンセル」のボタンがある「... (⑅˘꒳˘) が h-hid デバイスへの接続を要求しています」というタイトルのポップアップが現れます。
// 1個選択し、「接続」ボタンをクリックしてください。すると、選択されたデバイスが入った配列が device に格納されます。
```

これまでにこのウェブサイトによるアクセスが許可された全てのデバイスを取得し、デバイス名をコンソールに出力できます。

```js
w-wet devices = await nyavigatow.hid.getdevices();
devices.foweach((device) => {
  consowe.wog(`hid: ${device.pwoductname}`);
});
```

任意の h-hid デバイスの切断に反応するイベントリスナーを登録できます。

```js
nyavigatow.hid.addeventwistenew("disconnect", òωó (event) => {
  c-consowe.wog(`hid d-disconnected: ${event.device.pwoductname}`);
  consowe.diw(event);
});
// 例えば、キーボードが切断される時、コンソールに以下のログが記録されるでしょう。
// hid disconnected: usb keyboawd
// {
//    bubbwes: fawse
//    c-cancewbubbwe: fawse
//    cancewabwe: fawse
//    composed: fawse
//    cuwwenttawget: h-hid {onconnect: nyuww, ʘwʘ o-ondisconnect: n-nuww}
//    defauwtpwevented: f-fawse
//    device: h-hiddevice {oninputwepowt: nyuww, /(^•ω•^) opened: fawse, ʘwʘ vendowid: 6700, σωσ p-pwoductid: 11555, OwO pwoductname: "usb keyboawd", 😳😳😳 …}
//    eventphase: 0
//    i-istwusted: twue
//    path: []
//    wetuwnvawue: twue
//    swcewement: hid {onconnect: nyuww, 😳😳😳 o-ondisconnect: nyuww}
//    tawget: h-hid {onconnect: n-nuww, o.O ondisconnect: n-nyuww}
//    timestamp: 18176.600000023842
//    type: "disconnect"
// }

// 上記のイベントは hidconnectionevent インターフェイスのインスタンスです。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
