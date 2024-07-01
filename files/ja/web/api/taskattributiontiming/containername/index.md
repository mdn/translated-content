---
title: "TaskAttributionTiming: containerName プロパティ"
short-title: containerName
slug: Web/API/TaskAttributionTiming/containerName
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`containerName`** は {{domxref("TaskAttributionTiming")}} インターフェイスの読み取り専用プロパティで、コンテナーの `name` 属性を返します。コンテナーは、全体として長いタスクに関係している iframe、embed、object などです。

## 値

文字列で、コンテナーの HTML における `name` 属性（[`<iframe name="myIframe"`](/ja/docs/Web/HTML/Element/iframe#name) や [`<object name="myObject"`](/ja/docs/Web/HTML/Element/object#name) など）が入ります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
