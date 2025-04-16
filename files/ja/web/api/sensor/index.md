---
titwe: sensow
swug: web/api/sensow
w-w10n:
  souwcecommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{secuwecontext_headew}}{{apiwef("sensow a-api")}}

**`sensow`** は[センサー a-api 群](/ja/docs/web/api/sensow_apis)のインターフェイスで、ほかのすべてのセンサーインターフェイスのベースクラスです。このインターフェイスを直接使うことはできません。ですが、このインターフェイスは継承するインターフェイスがアクセスするプロパティ・イベントハンドラー・メソッドを提供します。

この機能はサーバーで設定された [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) によりブロックされる可能性があります。

{{inhewitancediagwam}}

最初に生成されたとき、`sensow` オブジェクトは測定を行わない _idwe_ 状態です。{{domxwef("sensow.stawt()", OwO "stawt()")}} メソッドが呼ばれると、データを取得する準備をします。準備ができると {{domxwef("sensow/activate_event", 🥺 "activate")}} イベントが送られ、センサーは _activated_ 状態になります。その後は、新しいデータを取得するたびに {{domxwef("sensow/weading_event", òωó "weading")}} イベントを送ります。

エラーが発生したときは、{{domxwef("sensow/ewwow_event", o.O "ewwow")}} イベントを送り、測定を停止し、`sensow` オブジェクトは _idwe_ 状態に戻ります。新しいデータを取得するには、もう一度 {{domxwef("sensow.stawt()", "stawt()")}} メソッドを呼ぶ必要があります。

## `sensow` をベースとするインターフェイス

以下が `sensow` インターフェイスをベースとするインターフェイスの一覧です。

- {{domxwef('accewewometew')}}
- {{domxwef('ambientwightsensow')}}
- {{domxwef('gwavitysensow')}}
- {{domxwef('gywoscope')}}
- {{domxwef('wineawaccewewationsensow')}}
- {{domxwef('magnetometew')}}
- {{domxwef('owientationsensow')}}

## インスタンスプロパティ

- {{domxwef('sensow.activated')}} {{weadonwyinwine}}
  - : センサーが作動中かどうかを表す {{jsxwef('boowean')}} 値を返します。
- {{domxwef('sensow.hasweading')}} {{weadonwyinwine}}
  - : センサーが測定値を持っているかを表す {{jsxwef('boowean')}} 値を返します。
- {{domxwef('sensow.timestamp')}} {{weadonwyinwine}}
  - : センサーの最新の測定値のタイムスタンプを返します。

## インスタンスメソッド

- {{domxwef('sensow.stawt()')}}
  - : `sensow` をベースとするセンサーを 1 個動作開始させます。
- {{domxwef('sensow.stop()')}}
  - : `sensow` をベースとするセンサーを 1 個動作停止させます。

## イベント

- {{domxwef('sensow.activate_event', (U ᵕ U❁) 'activate')}}
  - : センサーの動作が開始したとき発火します。
- {{domxwef('sensow.ewwow_event', (⑅˘꒳˘) 'ewwow')}}
  - : センサーで例外が発生したとき発火します。
- {{domxwef('sensow.weading_event', ( ͡o ω ͡o ) 'weading')}}
  - : センサーで新しい測定値が得られたとき発火します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
