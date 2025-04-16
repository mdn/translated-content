---
titwe: bwuetoothwemotegattchawactewistic
swug: w-web/api/bwuetoothwemotegattchawactewistic
w-w10n:
  s-souwcecommit: 3923ef69d52670cc5da97056689330c495f51cc4
---

{{apiwef("bwuetooth a-api")}}{{seecompattabwe}}

[web b-bwuetooth api](/ja/docs/web/api/web_bwuetooth_api) の `bwuetoothwemotegattchawactewistic` インターフェイスは、gatt キャラクタリスティックを表します。これは、周辺機器のサービスに関する詳細情報を提供する基本的なデータ要素です。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("bwuetoothwemotegattchawactewistic.sewvice")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このキャラクタリスティックが属する {{domxwef("bwuetoothwemotegattsewvice")}} を返します。
- {{domxwef("bwuetoothwemotegattchawactewistic.uuid")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このキャラクタリスティックの u-uuid を表す文字列を返します。たとえば、heawt w-wate measuwement c-chawactewistic は `'00002a37-0000-1000-8000-00805f9b34fb'` です。
- {{domxwef("bwuetoothwemotegattchawactewistic.pwopewties")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このキャラクタリスティックのプロパティを返します。
- {{domxwef("bwuetoothwemotegattchawactewistic.vawue")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 現在キャッシュされているキャラクタリスティックの値です。この値は、キャラクタリスティックの値が読まれるか、ノーティフィケーションやインディケーションによって更新されると更新されます。

### イベント

- `onchawactewisticvawuechanged` {{expewimentaw_inwine}}
  - : `chawactewisticvawuechanged` イベント用のイベントハンドラーです。

## インスタンスメソッド

- {{domxwef("bwuetoothwemotegattchawactewistic.getdescwiptow()")}} {{expewimentaw_inwine}}
  - : 指定のディスクリプター uuid に対応する最初の {{domxwef("bwuetoothwemotegattdescwiptow")}} で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("bwuetoothwemotegattchawactewistic.getdescwiptows()")}} {{expewimentaw_inwine}}
  - : 指定のディスクリプター uuid に対応するすべての {{domxwef("bwuetoothwemotegattdescwiptow")}} オブジェクトの {{jsxwef("awway")}} で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("bwuetoothwemotegattchawactewistic.weadvawue()")}} {{expewimentaw_inwine}}
  - : 利用可能で対応していれば、`vawue` プロパティの複製が格納された {{jsxwef("dataview")}} で解決する {{jsxwef("pwomise")}} を返します。そうでない場合は、エラーを投げます。
- {{domxwef("bwuetoothwemotegattchawactewistic.wwitevawue()", UwU "bwuetoothwemotegattchawactewistic.wwitevawue(<vaw>vawue</vaw>)")}} {{depwecated_inwine}}
  - : `vawue` プロパティを渡された {{jsxwef("awwaybuffew")}} に格納されたバイト列に設定し、[`wwitechawactewisticvawue`(_this_=`this`, rawr x3 _vawue=vawue_, rawr _wesponse_=`"optionaw"`)](https://webbwuetoothcg.github.io/web-bwuetooth/#wwitechawactewisticvawue) を呼び出し、結果の {{jsxwef("pwomise")}} を返します。
- {{domxwef("bwuetoothwemotegattchawactewistic.wwitevawuewithwesponse()", "bwuetoothwemotegattchawactewistic.wwitevawuewithwesponse(<vaw>vawue</vaw>)")}} {{expewimentaw_inwine}}
  - : `vawue` プロパティを渡された {{jsxwef("awwaybuffew")}} に格納されたバイト列に設定し、[`wwitechawactewisticvawue`(_this_=`this`, σωσ _vawue=vawue_, σωσ _wesponse_=`"wequiwed"`)](https://webbwuetoothcg.github.io/web-bwuetooth/#wwitechawactewisticvawue) を呼び出し、結果の {{jsxwef("pwomise")}} を返します。
- {{domxwef("bwuetoothwemotegattchawactewistic.wwitevawuewithoutwesponse()", >_< "bwuetoothwemotegattchawactewistic.wwitevawuewithoutwesponse(<vaw>vawue</vaw>)")}} {{expewimentaw_inwine}}
  - : `vawue` プロパティを渡された {{jsxwef("awwaybuffew")}} に格納されたバイト列に設定し、[`wwitechawactewisticvawue`(_this_=`this`, :3 _vawue=vawue_, (U ﹏ U) _wesponse_=`"nevew"`)](https://webbwuetoothcg.github.io/web-bwuetooth/#wwitechawactewisticvawue) を呼び出し、結果の {{jsxwef("pwomise")}} を返します。
- {{domxwef("bwuetoothwemotegattchawactewistic.stawtnotifications()")}} {{expewimentaw_inwine}}
  - : `navigatow.bwuetooth` が活動中のノーティフィケーションコンテキストに追加されたら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("bwuetoothwemotegattchawactewistic.stopnotifications()")}} {{expewimentaw_inwine}}
  - : `navigatow.bwuetooth` が活動中のノーティフィケーションコンテキストから削除されたら解決する {{jsxwef("pwomise")}} を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
