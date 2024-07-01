---
title: Navigator.getBattery()
slug: Web/API/Navigator/getBattery
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{ ApiRef("Battery API") }}

**`getBattery()`** メソッドは、システムのバッテリーに関する情報を提供します。これは {{domxref("BatteryManager")}} オブジェクトで解決されるバッテリーのプロミスを返し、バッテリーの状態を監視するために処理できるいくつかの新しいイベントを提供します。これは[バッテリー状態 API](/ja/docs/Web/API/Battery_Status_API) を実装しています。詳細、API の使用ガイド、サンプルコードについては、そのドキュメントを参照してください。

> **メモ:** ブラウザーによっては、この機能へのアクセスは {{HTTPHeader("Feature-Policy")}} の {{HTTPHeader("Feature-Policy/battery","battery")}} ディレクティブで制御されます。

## 構文

```js-nolint
getBattery()
```

### 引数

なし。

### 返値

解決されると、バッテリーの状態に関する情報を取得するために使用できる {{DOMxRef("BatteryManager")}} オブジェクトを単一の引数として持つ履行ハンドラーを呼び出す {{JSxRef("Promise")}} です。

## 例外

このメソッドは真の例外を発生させません。代わりに、返されたプロミスが拒否され、 {{domxref("DOMException")}} の中に `name` を次のうちの一つに設定します。

- `SecurityError`

  - : ユーザーエージェントは安全でないコンテキストではバッテリー情報を公開しませんが、このメソッドが安全でないコンテキストから呼び出されました。

    > **メモ:** 一部のユーザーエージェントの古いバージョンでは、安全でないコンテキストでこの機能の利用を許可していることがあります。

- `NotAllowedError`
  - : 現在この例外を発生させるユーザーエージェントはありませんが、仕様書では以下のような動作が記述されています。
    > この文書ではこの機能の使用が許可されていません。
    > 例えば、 {{HTTPHeader("Feature-Policy")}} {{HTTPHeader("Feature-Policy/battery", "battery")}} 機能を介して明示的に許可されてなかったり、制限されていたりした場合です。

## 例

この例では、バッテリーの現在の充電状態を取得し、充電状態が変化するたびに充電状態が記録されるように、 {{domxref("BatteryManager/chargingchange_event", "chargingchange")}} イベントのハンドラーを確立します。

```js
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});
```

その他の例や詳細については、[バッテリー状態 API](/ja/docs/Web/API/Battery_Status_API)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [バッテリー状態 API](/ja/docs/Web/API/Battery_Status_API)
- `Feature-Policy` の {{HTTPHeader("Feature-Policy/battery", "battery")}} 機能
