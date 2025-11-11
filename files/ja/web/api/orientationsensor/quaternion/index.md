---
title: "OrientationSensor: quaternion プロパティ"
slug: Web/API/OrientationSensor/quaternion
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Sensor API")}}

{{domxref("OrientationSensor")}} インターフェイスの読み取り専用プロパティ **`quaternion`** は、各要素がデバイスの向きを表す単位{{Glossary("quaternion", "四元数")}}の成分である 4 要素の {{jsxref('Array')}} を返します。

{{domxref('OrientationSensor')}} はベースクラスなので、`quaternion` は派生クラスからのみ読み取ることができます。

## 値

デバイスの向きを表す四元数の x, y, z, w 成分を値とする {{jsxref('Array')}} です。

## 例

```js
// TBD
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
