---
title: "PageSwapEvent: activation プロパティ"
short-title: activation
slug: Web/API/PageSwapEvent/activation
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`activation`** は {{domxref("PageSwapEvent")}} インターフェイスの読み取り専用プロパティで、これは、同一オリジン内の移動に関するナビゲーション種別と、移動元および移動先の文書履歴項目が含む {{domxref("NavigationActivation")}} オブジェクトを保持しています。

## 値

{{domxref("NavigationActivation")}} オブジェクト、または関連するナビゲーションのリダイレクトチェーンのどこかに別オリジンの URL が含まれる場合は `null` です。

## 例

{{domxref("PageSwapEvent")}} ページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
