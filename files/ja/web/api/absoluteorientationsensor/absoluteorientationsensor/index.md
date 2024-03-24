---
title: "AbsoluteOrientationSensor: AbsoluteOrientationSensor() コンストラクター"
slug: Web/API/AbsoluteOrientationSensor/AbsoluteOrientationSensor
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Sensor API")}}

**`AbsoluteOrientationSensor()`** コンストラクターは、地球の参照用座標系に対するデバイスの物理的な向きを表す新しい {{domxref("AbsoluteOrientationSensor")}} オブジェクトを生成します。

## 構文

```js-nolint
new AbsoluteOrientationSensor()
new AbsoluteOrientationSensor(options)
```

### 引数

- `options` {{optional_inline}}

  - : 以下のオプションがあります。

    - `frequency`
      - : 1 秒間にサンプルを何回取得したいかであり、{{domxref('sensor.reading_event', 'reading')}} イベントが呼ばれる 1 秒あたりの回数になります。整数または小数が使用でき、小数は 1 秒に 1 回未満の頻度を設定するのに用います。実際の取得頻度はデバイスハードウェアに依存するので、要求値より少なくなる可能性があります。
    - `referenceFrame`
      - : `'device'` または `'screen'` です。デフォルトは `'device'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('sensor.reading_event', 'reading')}} イベント
