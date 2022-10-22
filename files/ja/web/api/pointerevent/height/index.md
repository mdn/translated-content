---
title: PointerEvent.height
slug: Web/API/PointerEvent/height
page-type: web-api-instance-property
browser-compat: api.PointerEvent.height
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの読み取り専用プロパティである **`height`** は、ポインタの接触ジオメトリーの高さを y 軸に従って表します (CSS ピクセル単位)。またポインタデバイスのソース (指など) によっては、与えられたポインタに対して、各イベントが異なる値を生成することがあります。

入力ハードウェアが接触ジオメトリーをブラウザーに報告できない場合、高さはデフォルトで `1` になります。

## 値

イベントの接触ジオメトリーの高さ (CSS ピクセル単位)。

## 例

このプロパティの例は [PointerEvent.width の例](/ja/docs/Web/API/PointerEvent/width#example)に含まれています。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
