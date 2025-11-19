---
title: "Window: top プロパティ"
short-title: top
slug: Web/API/Window/top
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

ウィンドウ階層における最上位のウィンドウへの参照を返します。

## 値

The reference to the topmost window.

## 注記

{{domxref("window.parent")}} プロパティは、現在のウィンドウの直近の親を返しますが、`window.top` は、ウィンドウオブジェクトの階層における最上位のウィンドウを返します。

このプロパティは、親、あるいは、階層になっているウィンドウのサブフレーム内にあるウィンドウを扱っていて、最上位のフレームセットを取得したいときに特に役立ちます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
