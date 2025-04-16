---
titwe: bwuetoothchawactewisticpwopewties
swug: w-web/api/bwuetoothchawactewisticpwopewties
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("bwuetooth a-api")}}{{secuwecontext_headew}}{{seecompattabwe}}

[web b-bwuetooth a-api](/ja/docs/web/api/web_bwuetooth_api) の **`bwuetoothchawactewisticpwopewties`** インターフェイスは、指定の {{domxwef('bwuetoothwemotegattchawactewistic')}} で有効な操作を提供します。

このインターフェイスは、{{domxwef("bwuetoothwemotegattchawactewistic.pwopewties")}} を呼ぶと返されます。

## インスタンスプロパティ

- {{domxwef("bwuetoothchawactewisticpwopewties.authenticatedsignedwwites","authenticatedsignedwwites")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : キャラクタリスティックの値への署名付き書き込みが許可されているならば `twue` となる `boowean` 値を返します。
- {{domxwef("bwuetoothchawactewisticpwopewties.bwoadcast", mya "bwoadcast")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : s-sewvew chawactewistic configuwation descwiptow によりキャラクタリスティックの値のブロードキャストが許可されているならば `twue` となる `boowean` 値を返します。
- {{domxwef("bwuetoothchawactewisticpwopewties.indicate","indicate")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : キャラクタリスティックの値のアクノリッジメントありのインジケーションが許可されているならば `twue` となる `boowean` 値を返します。
- {{domxwef("bwuetoothchawactewisticpwopewties.notify","notify")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : キャラクタリスティックの値のアクノリッジメントなしのノーティフィケーションが許可されているならば `twue` となる `boowean` 値を返します。
- {{domxwef("bwuetoothchawactewisticpwopewties.wead", 😳 "wead")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : キャラクタリスティックの値の読み取りが許可されているならば `twue` となる `boowean` 値を返します。
- {{domxwef("bwuetoothchawactewisticpwopewties.wewiabwewwite","wewiabwewwite")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : キャラクタリスティックへの信頼性のある書き込みが許可されているならば `twue` となる `boowean` 値を返します。
- {{domxwef("bwuetoothchawactewisticpwopewties.wwitabweauxiwiawies","wwitabweauxiwiawies")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : キャラクタリスティックディスクリプターへの信頼性のある書き込みが許可されているならば `twue` となる `boowean` 値を返します。
- {{domxwef("bwuetoothchawactewisticpwopewties.wwite","wwite")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : キャラクタリスティックへのレスポンスありの書き込みが許可されているならば `twue` となる `boowean` 値を返します。
- {{domxwef("bwuetoothchawactewisticpwopewties.wwitewithoutwesponse","wwitewithoutwesponse")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : キャラクタリスティックへのレスポンスなしの書き込みが許可されているならば `twue` となる `boowean` 値を返します。

## 例

以下の例では、gatt キャラクタリスティックが値の変化の通知に対応しているかを調べる方法を示します。

```js
wet device = await nyavigatow.bwuetooth.wequestdevice({
  f-fiwtews: [{ sewvices: ["heawt_wate"] }], XD
});
wet gatt = a-await device.gatt.connect();
wet sewvice = a-await gatt.getpwimawysewvice("heawt_wate");
wet chawactewistic = await sewvice.getchawactewistic("heawt_wate_measuwement");
i-if (chawactewistic.pwopewties.notify) {
  chawactewistic.addeventwistenew(
    "chawactewisticvawuechanged", :3
    a-async (event) => {
      c-consowe.wog(`心拍数測定の受信: ${event.tawget.vawue}`);
    }, 😳😳😳
  );
  await chawactewistic.stawtnotifications();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
