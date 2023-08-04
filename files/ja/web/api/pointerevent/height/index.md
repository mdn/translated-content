---
title: PointerEvent.height
slug: Web/API/PointerEvent/height
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの読み取り専用プロパティである **`height`** は、ポインターの接触ジオメトリーの高さを y 軸に従って表します (CSS ピクセル単位)。またポインターデバイスのソース (指など) によっては、与えられたポインターに対して、各イベントが異なる値を生成することがあります。

入力ハードウェアが接触ジオメトリーをブラウザーに報告できない場合、高さはデフォルトで `1` になります。

## 値

イベントの接触ジオメトリーの高さ (CSS ピクセル単位)。

## 例

このプロパティの例は [PointerEvent.width の例](/ja/docs/Web/API/PointerEvent/width#例)に含まれています。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
