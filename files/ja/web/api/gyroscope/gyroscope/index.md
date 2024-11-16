---
title: "Gyroscope: Gyroscope() コンストラクター"
slug: Web/API/Gyroscope/Gyroscope
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("Sensor API")}}

**`Gyroscope()`** コンストラクターは、デバイスの 3 軸それぞれの角速度の計測値を提供する新しい {{domxref("Gyroscope")}} オブジェクトを生成します。

## 構文

```js-nolint
new Gyroscope()
new Gyroscope(options)
```

### 引数

- `options` {{optional_inline}}

  - : 以下のオプションがあります。

    - `frequency`
      - : 1 秒あたり取得するべきサンプルの数であり、1 秒あたり何回 {{domxref('sensor.reading_event', 'reading')}} イベントが呼ばれるかになります。整数または小数を使用でき、小数は 1 秒に 1 回未満の頻度に用います。実際の取得の頻度はデバイスハードウェアに依存し、指定より少なくなる可能性があります。
    - `referenceFrame`
      - : `'device'` または `'screen'` です。デフォルトは `'device'` です。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : この機能の使用が [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy) によりブロックされたとき投げられます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('sensor.reading_event', 'reading')}} イベント
