---
title: "GravitySensor: GravitySensor() コンストラクター"
slug: Web/API/GravitySensor/GravitySensor
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("Sensor API")}}

**`GravitySensor()`** コンストラクターは、デバイスの 3 軸それぞれにかかっている重力の測定値を提供する新しい {{domxref("GravitySensor")}} オブジェクトを生成します。

## 構文

```js-nolint
new GravitySensor()
new GravitySensor(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のオプションがあります。
    - `frequency`
      - : 1 秒間にサンプルを何回取得したいかであり、{{domxref('sensor.reading_event', 'reading')}} イベントが呼ばれる 1 秒あたりの回数になります。整数または小数が使用でき、小数は 1 秒に 1 回未満の頻度を設定するのに用います。実際の取得頻度はデバイスハードウェアに依存するので、要求値より少なくなる可能性があります。デフォルトの頻度は下層のプラットフォームで定義された頻度です。
    - `referenceFrame`
      - : リファレンスフレームを表すローカル座標系です。`'device'` または `'screen'` を設定できます。デフォルトは `'device'` です。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : この機能の使用が [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) によりブロックされました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('sensor.reading_event', 'reading')}} イベント
