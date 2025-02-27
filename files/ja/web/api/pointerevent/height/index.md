---
title: "PointerEvent: height プロパティ"
short-title: height
slug: Web/API/PointerEvent/height
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("Pointer Events") }}

**`height`** は {{domxref("PointerEvent")}} インターフェイスの読み取り専用プロパティで、ポインターの接触形状の y 軸方向の高さを（CSS ピクセル単位で）表します。またポインター機器のソース (指など) によっては、与えられたポインターに対して、各イベントが異なる値を生成することがあります。

入力ハードウェアが接触形状をブラウザーに報告できない場合、高さは既定で `1` になります。

## 値

イベントの接触領域の高さ（CSS ピクセル単位）。

## 例

このプロパティの例は [PointerEvent.width の例](/ja/docs/Web/API/PointerEvent/width#例)に含まれています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
