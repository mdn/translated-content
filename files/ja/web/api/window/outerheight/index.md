---
title: "Window: outerHeight プロパティ"
short-title: outerHeight
slug: Web/API/Window/outerHeight
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

**`Window.outerHeight`** は読み取り専用のプロパティで、サイドバー、ウィンドウの操作部分、ウィンドウをリサイズする境界やハンドルを含む、ブラウザーウィンドウ全体の高さをピクセル単位で表します。

## メモ

ウィンドウの大きさを変更するには、 {{domxref("window.resizeBy()")}} および {{domxref("window.resizeTo()")}} を使用してください。

ウィンドウの内側の高さ、つまりページが表示される高さを取得するには、 {{domxref("window.innerHeight")}} を使用してください。

### 図による例示

以下の図は、 `outerHeight` と `innerHeight` の違いを示しています。

![innerHeight と outerHeight の解説](firefoxinnervsouterheight2.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.innerHeight")}}
- {{domxref("window.innerWidth")}}
- {{domxref("window.outerWidth")}}
- {{domxref("window.resizeBy()")}}
- {{domxref("window.resizeTo()")}}
