---
title: Navigator.getBattery()
slug: Web/API/Navigator/getBattery
---

{{ ApiRef("Battery API") }}{{deprecated_header}}

**`getBattery()`** メソッドは、システムのバッテリーに関する情報を提供します。これは {{domxref("BatteryManager")}} オブジェクトで解決されるバッテリーの promise を返し、バッテリーの状態を監視するために処理できるいくつかの新しいイベントを提供します。これは [Battery Status API](/ja/docs/WebAPI/Battery_Status) を実装しています。詳細、API の使用ガイド、サンプルコードについては、そのドキュメントを参照してください。

> **メモ:** ブラウザーによっては、この機能へのアクセスは {{HTTPHeader("Feature-Policy")}} の {{HTTPHeader("Feature-Policy/battery","battery")}} ディレクティブで制御されます。

## 構文

```
var batteryPromise = navigator.getBattery();
```

### Return value

解決されると、バッテリーの状態に関する情報を取得するために使用できる {{DOMxRef("BatteryManager")}} オブジェクトを単一の引数として持つフルフィルメントハンドラーを呼び出す {{JSxRef("Promise")}} です。

## 例外

このメソッドは真の例外を発生させません。代わりに、返されたプロミスが拒否され、 {{domxref("DOMException")}} の中に `name` を次のうちの一つに設定します。

- `SecurityError`
  - : ユーザーエージェントは安全でないコンテキストではバッテリー情報を公開しませんが、このメソッドが安全でないコンテキストから呼び出されました。
    **メモ:** 一部のユーザーエージェントの古いバージョンでは、安全でないコンテキストでこの機能の利用を許可していることがあります。
- `NotAllowedError`
  - : **メモ:** 現在この例外を発生させるユーザーエージェントはありませんが、仕様書では以下のような動作が記述されています。
    この文書ではこの機能の使用が許可されていません。例えば、 {{HTTPHeader("Feature-Policy")}} {{HTTPHeader("Feature-Policy/battery", "battery")}} 機能を介して明示的に許可されてなかったり、制限されていたりした場合です。

## 例

この例では、バッテリーの現在の充電状態を取得し、充電状態が変化するたびに充電状態が記録されるように、 {{Event("chargingchange")}} イベントのハンドラーを確立します。

```js
let batteryIsCharging = false;

navigator.getBattery().then(function(battery) {
  batteryIsCharging = battery.charging;

  battery.addEventListener('chargingchange', function() {
    batteryIsCharging = battery.charging;
  });
});
```

Battery Status API をご覧ください。

## 仕様書

| 仕様書                                                                                                       | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName("Battery API", "#dom-navigator-getbattery", "Navigator.getBattery()")}} | {{Spec2("Battery API")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Navigator.getBattery")}}

## 関連情報

- [Battery Status API](/ja/docs/WebAPI/Battery_Status)
- `Feature-Policy` の {{HTTPHeader("Feature-Policy/battery", "battery")}} 機能
