---
title: "LinearAccelerationSensor: LinearAccelerationSensor() コンストラクター"
slug: Web/API/LinearAccelerationSensor/LinearAccelerationSensor
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Sensor API")}}

**`LinearAccelerationSensor()`** コンストラクターは、デバイスの 3 軸それぞれにかかっている加速度の測定値を、重力の影響を除いて提供する新しい {{domxref("LinearAccelerationSensor")}} オブジェクトを生成します。

## 構文

```js-nolint
new LinearAccelerationSensor()
new LinearAccelerationSensor(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のオプションがあります。
    - `frequency`
      - : 1 秒間にサンプルを何回取得したいかであり、{{domxref('sensor.reading_event', 'reading')}} イベントが呼ばれる 1 秒あたりの回数になります。整数または小数が使用でき、小数は 1 秒に 1 回未満の頻度を設定するのに用います。実際の取得頻度はデバイスハードウェアに依存するので、要求値より少なくなる可能性があります。
    - `referenceFrame`
      - : `'device'` または `'screen'` です。デフォルトは `'device'` です。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : この機能の使用が [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) によりブロックされました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('sensor.reading_event', 'reading')}} イベント
