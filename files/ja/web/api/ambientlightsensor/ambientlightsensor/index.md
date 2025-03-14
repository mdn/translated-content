---
title: "AmbientLightSensor: AmbientLightSensor() コンストラクター"
slug: Web/API/AmbientLightSensor/AmbientLightSensor
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Sensor API")}}{{SeeCompatTable}}

**`AmbientLightSensor()`** コンストラクターは、現在の光レベル、すなわちホストデバイス周辺の環境光の照度を返す新しい {{domxref("AmbientLightSensor")}} オブジェクトを生成します。

## 構文

```js-nolint
new AmbientLightSensor()
new AmbientLightSensor(options)
```

### 引数

- `options` {{optional_inline}}

  - : 現在、1 個のオプションのみに対応しています。

    - `frequency`
      - : 1 秒間にサンプルを何回取得したいかであり、{{domxref('sensor.reading_event', 'reading')}} イベントが呼ばれる 1 秒あたりの回数になります。整数または小数が使用でき、小数は 1 秒に 1 回未満の頻度を設定するのに用います。実際の取得頻度はデバイスハードウェアに依存するので、要求値より少なくなる可能性があります。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : この機能の使用が [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy) によりブロックされまし

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('sensor.reading_event', 'reading')}} イベント
