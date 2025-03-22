---
title: センサー API 群
slug: Web/API/Sensor_APIs
l10n:
  sourceCommit: 8899f400df312bb5d49ef426173c19f3922029b4
---

{{securecontext_header}}{{DefaultAPISidebar("Sensor API")}}

**センサー API 群** (Sensor APIs) は、端末のセンサー群を一貫した形でウェブプラットフォームから利用可能にする、共通の設計で作られたインターフェイスの集合です。

## 概念と使用法

一般センサー API (Generic Sensor API) の仕様では {{domxref('Sensor')}} インターフェイスが定義されていますが、ウェブ開発者がこれを用いることはないでしょう。かわりに、特定の種類のセンサーからデータを取得するために、そのサブクラスを用いることになります。たとえば、{{domxref('Accelerometer')}} インターフェイスは取得時に端末の 3 軸それぞれにかかっている加速度を返します。

センサーは、端末の物理的なセンサーに完全に対応していることも、対応していないこともあります。たとえば、{{domxref('Gyroscope')}} インターフェイスは端末の物理的なインターフェイスに完全に対応しています。一方、{{domxref('AbsoluteOrientationSensor')}} インターフェイスは 2 個以上の端末センサーの情報をアルゴリズムにより組み合わせた情報を提供します。これらのセンサーの種類は、それぞれ _低レベル_ および _高レベル_ と呼ばれます。後者の種類のセンサーは、フュージョンセンサー (または、仮想センサー、合成センサー) とも呼ばれます。

### 機能の検出

センサーインターフェイスは、対応する端末センサーのプロキシーでしかありません。そのため、センサーの機能の検出は他の API より複雑になります。センサー API が存在するからといって、API が実際のハードウェアセンサーに接続されているか、センサーが動作するか、センサーの接続が維持されているか、ユーザーがセンサーへのアクセスを許可したかはわかりません。これらすべての情報を常に利用可能にしておくと、パフォーマンスと電池の持ちに負担をかけます。

そのため、センサー API の機能を検出するには、API そのものを検出した上で、[防衛的プログラミングの戦略 (後述)](#防衛的プログラミング) をとらなければいけません。

以下の例では、センサー API を検出する 3 通りの方法を示します。さらに、オブジェクトの生成を {{jsxref('statements/try...catch', 'try...catch')}} ブロックの中で行う方法もあります。なお、{{domxref('Navigator')}} インターフェイスを用いた検出は利用可能な選択肢に含まれないことに注意してください。

```js
if (typeof Gyroscope === "function") {
  // ぐるぐる回る…
}

if ("ProximitySensor" in window) {
  // 注意！
}

if (window.AmbientLightSensor) {
  // 暗闇へ…
}
```

### 防衛的プログラミング

機能の検出の節で言及したように、特定のセンサー API が使えるかをチェックするだけでは機能の検出には不十分です。実際のセンサーが存在することも確認しなければいけません。このために防衛的プログラミングが必要です。防衛的プログラミングには、3 個の戦略が必要です。

- センサーオブジェクトを生成するとき、投げられるエラーをチェックする。
- 使用時に投げられるエラーを監視する。
- エラーをきれいに処理し、ユーザー体験が損なわれず拡充されるようにする。

以下のコード例で、これらの原則を説明します。{{jsxref('statements/try...catch', 'try...catch')}} ブロックにより、センサーの生成時に投げられるエラーをキャッチします。{{domxref('Sensor.error_event', 'error')}} イベントを監視することで、使用時に投げられるエラーをキャッチします。ユーザーに何かが提示されるのは、[許可](/ja/docs/Web/API/Permissions_API)の要求が必要なときと、端末がこのセンサーの種類に対応していないときだけです。

さらに、この機能はサーバーで設定された [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) によりブロックされる可能性があります。

```js
let accelerometer = null;
try {
  accelerometer = new Accelerometer({ referenceFrame: "device" });
  accelerometer.addEventListener("error", (event) => {
    // 実行時のエラーを処理する
    if (event.error.name === "NotAllowedError") {
      // 許可を要求するコードに飛ぶ
    } else if (event.error.name === "NotReadableError") {
      console.log("センサーに接続できません。");
    }
  });
  accelerometer.addEventListener("reading", () => reloadOnShake(accelerometer));
  accelerometer.start();
} catch (error) {
  // 生成時のエラーを処理する
  if (error.name === "SecurityError") {
    // 前述の Permissions Policy に関するメモを参照
    console.log(
      "センサーの生成が Permissions Policy によりブロックされました。",
    );
  } else if (error.name === "ReferenceError") {
    console.log("このユーザーエージェントはセンサーに対応していません。");
  } else {
    throw error;
  }
}
```

### 許可と Permissions Policy

センサーの計測値は、[権限 API](/ja/docs/Web/API/Permissions_API) によりユーザーが特定のセンサーの種類を用いる許可を与え、かつサーバーの {{httpheader('Permissions-Policy')}} でブロックされていない場合のみ参照できます。

以下の例では、センサーを使用しようとする前にユーザーに許可を要求する方法を示します。

```js
navigator.permissions.query({ name: "accelerometer" }).then((result) => {
  if (result.state === "denied") {
    console.log("加速度計センサーを使う許可が得られませんでした。");
    return;
  }
  // センサーを使用する
});
```

別の方法として、センサーを使用しようとして、`SecurityError` を監視することもできます。

```js
const sensor = new AbsoluteOrientationSensor();
sensor.start();
sensor.addEventListener("error", (error) => {
  if (event.error.name === "SecurityError")
    console.log("AbsoluteOrientationSensor を使用する許可がありません。");
});
```

以下の表では、それぞれのセンサーの種類について、Permissions API、{{HTMLElement('iframe')}} 要素の `allow` 属性、{{httpheader('Permissions-Policy')}} ディレクティブで必要な名前を示します。

| センサー                    | Permission Policy 名                                   |
| --------------------------- | ------------------------------------------------------ |
| `AbsoluteOrientationSensor` | `'accelerometer'` と `'gyroscope'` と `'magnetometer'` |
| `Accelerometer`             | `'accelerometer'`                                      |
| `AmbientLightSensor`        | `'ambient-light-sensor'`                               |
| `GravitySensor`             | `'accelerometer'`                                      |
| `Gyroscope`                 | `'gyroscope'`                                          |
| `LinearAccelerationSensor`  | `'accelerometer'`                                      |
| `Magnetometer`              | `'magnetometer'`                                       |
| `RelativeOrientationSensor` | `'accelerometer'` と `'gyroscope'`                     |

### 計測値

センサーの計測値は、すべてのセンサーの種類で継承されている {{domxref('Sensor.reading_event', 'reading')}} イベントコールバックを通じて取得できます。取得の頻度はセンサーのコンストラクターに渡すオプションで使用者が設定します。このオプションは、1 秒あたり何回取得するかを表す数値です。整数または小数を使用することができ、小数は 1 秒に 1 回未満の頻度を設定するとき用います。実際の取得頻度は端末のハードウェアに依存し、設定より少なくなる可能性があります。

以下の例では、{{domxref('Magnetometer')}} センサーを用いてこれを説明します。

```js
let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener("reading", (e) => {
  console.log(`X 軸方向の磁場 ${magSensor.x}`);
  console.log(`Y 軸方向の磁場 ${magSensor.y}`);
  console.log(`Z 軸方向の磁場 ${magSensor.z}`);
});
magSensor.addEventListener("error", (event) => {
  console.log(event.error.name, event.error.message);
});
magSensor.start();
```

## インターフェイス

- {{domxref('AbsoluteOrientationSensor')}}
  - : 地球の参照用座標系に対する端末の物理的な向きを表します。
- {{domxref('Accelerometer')}}
  - : 端末の 3 軸それぞれにかかっている加速度を提供します。
- {{domxref('AmbientLightSensor')}}
  - : 現在の光レベル、すなわちホスト端末の周囲の環境光の照度を返します。
- {{domxref('GravitySensor')}}
  - : 端末の 3 軸それぞれにかかっている重力を提供します。
- {{domxref('Gyroscope')}}
  - : 端末の 3 軸それぞれの角速度を提供します。
- {{domxref('LinearAccelerationSensor')}}
  - : 端末の 3 軸それぞれにかかっている加速度を、重力の影響を除いて提供します。
- {{domxref('Magnetometer')}}
  - : 端末のプライマリー磁気センサーで検出される磁場の情報を提供します。
- {{domxref('OrientationSensor')}}
  - : {{domxref('AbsoluteOrientationSensor')}} のベースクラスです。このインターフェイスを直接用いることはできませんが、継承するインターフェイスがアクセスするプロパティとメソッドを提供します。
- {{domxref('RelativeOrientationSensor')}}
  - : 地球の参照用座標系は考慮せず、端末の物理的な向きを表します。
- {{domxref('Sensor')}}
  - : 他のセンサーインターフェイスすべてのベースクラスです。このインターフェイスを直接用いることはできませんが、継承するインターフェイスがアクセスするプロパティ・イベントハンドラー・メソッドを提供します。
- {{domxref('SensorErrorEvent')}}
  - : {{domxref('Sensor')}} や関連するインターフェイスから投げられたエラーの情報を提供します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
