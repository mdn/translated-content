---
title: "UIEvent: detail プロパティ"
short-title: detail
slug: Web/API/UIEvent/detail
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("UI Events")}}

**`UIEvent.detail`** は読み取り専用のプロパティで、 0 以外の値の場合には現在（イベントによっては次）のクリック数を示します。

{{domxref("Element/click_event", "click")}} または {{domxref("Element/dblclick_event", "dblclick")}} イベントでは、 `UIEvent.detail` は現在のクリック数です。

{{domxref("Element/mousedown_event", "mousedown")}} または {{domxref("Element/mouseup_event", "mouseup")}} イベントでは、 `UIEvent.detail` は現在のクリック数に*1 を加えた*ものです。

他の {{domxref("UIEvent")}} オブジェクトでは、 `UIEvent.detail` は常にゼロです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
