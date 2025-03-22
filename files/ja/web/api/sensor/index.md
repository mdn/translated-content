---
title: Sensor
slug: Web/API/Sensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

**`Sensor`** は[センサー API 群](/ja/docs/Web/API/Sensor_APIs)のインターフェイスで、ほかのすべてのセンサーインターフェイスのベースクラスです。このインターフェイスを直接使うことはできません。ですが、このインターフェイスは継承するインターフェイスがアクセスするプロパティ・イベントハンドラー・メソッドを提供します。

この機能はサーバーで設定された [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) によりブロックされる可能性があります。

{{InheritanceDiagram}}

最初に生成されたとき、`Sensor` オブジェクトは測定を行わない _idle_ 状態です。{{domxref("Sensor.start()", "start()")}} メソッドが呼ばれると、データを取得する準備をします。準備ができると {{domxref("Sensor/activate_event", "activate")}} イベントが送られ、センサーは _activated_ 状態になります。その後は、新しいデータを取得するたびに {{domxref("Sensor/reading_event", "reading")}} イベントを送ります。

エラーが発生したときは、{{domxref("Sensor/error_event", "error")}} イベントを送り、測定を停止し、`Sensor` オブジェクトは _idle_ 状態に戻ります。新しいデータを取得するには、もう一度 {{domxref("Sensor.start()", "start()")}} メソッドを呼ぶ必要があります。

## `Sensor` をベースとするインターフェイス

以下が `Sensor` インターフェイスをベースとするインターフェイスの一覧です。

- {{domxref('Accelerometer')}}
- {{domxref('AmbientLightSensor')}}
- {{domxref('GravitySensor')}}
- {{domxref('Gyroscope')}}
- {{domxref('LinearAccelerationSensor')}}
- {{domxref('Magnetometer')}}
- {{domxref('OrientationSensor')}}

## インスタンスプロパティ

- {{domxref('Sensor.activated')}} {{ReadOnlyInline}}
  - : センサーが作動中かどうかを表す {{jsxref('boolean')}} 値を返します。
- {{domxref('Sensor.hasReading')}} {{ReadOnlyInline}}
  - : センサーが測定値を持っているかを表す {{jsxref('boolean')}} 値を返します。
- {{domxref('Sensor.timestamp')}} {{ReadOnlyInline}}
  - : センサーの最新の測定値のタイムスタンプを返します。

## インスタンスメソッド

- {{domxref('Sensor.start()')}}
  - : `Sensor` をベースとするセンサーを 1 個動作開始させます。
- {{domxref('Sensor.stop()')}}
  - : `Sensor` をベースとするセンサーを 1 個動作停止させます。

## イベント

- {{domxref('Sensor.activate_event', 'activate')}}
  - : センサーの動作が開始したとき発火します。
- {{domxref('Sensor.error_event', 'error')}}
  - : センサーで例外が発生したとき発火します。
- {{domxref('Sensor.reading_event', 'reading')}}
  - : センサーで新しい測定値が得られたとき発火します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
