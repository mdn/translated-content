---
title: "Accelerometer: Accelerometer() コンストラクター"
slug: Web/API/Accelerometer/Accelerometer
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Sensor API")}}{{SeeCompatTable}}

**`Accelerometer()`** コンストラクターは、取得時点でデバイスの 3 軸それぞれにかかっている加速度を返す新しい {{domxref("Accelerometer")}} オブジェクトを生成します。

## 構文

```js-nolint
new Accelerometer()
new Accelerometer(options)
```

### 引数

- `options` {{optional_inline}}

  - : 以下のオプションがあります。

    - `frequency`
      - : 1 秒あたり行いたいサンプリングの回数で、{{domxref('sensor.reading_event', 'reading')}} イベントが 1 秒あたり何回呼ばれるかを表します。整数または小数が利用でき、小数は 1 秒に 1 回未満の頻度を指定する際に用います。実際に計測が行われる頻度はデバイスのハードウェアに依存し、指定より少なくなる可能性があります。
    - `referenceFrame`
      - : `'device'` か `'screen'` のいずれかです。デフォルトは `'device'` です。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : この機能の使用が [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy) によりブロックされたとき投げられます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('sensor.reading_event', 'reading')}} イベント
