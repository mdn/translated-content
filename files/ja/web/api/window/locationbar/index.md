---
title: "Window: locationbar プロパティ"
short-title: locationbar
slug: Web/API/Window/locationbar
l10n:
  sourceCommit: 8daba6d316e3b68f45e09c44da9b6942307ca555
---

{{APIRef}}

`locationbar` オブジェクトを返します。

これは `Window` プロパティのうちの論理値を持つ `visible` プロパティの 1 つであり、ウェブブラウザーのユーザーインターフェイスの特定の部分が可視であるかどうかを表すものでした。

プライバシーと相互運用性の理由から、これで `visible` プロパティの値は、この `Window` がポップアップの場合は `false` となり、そうでない場合は `true` となるようになりました。

## 構文

単一のプロパティを持つオブジェクトです。

- `visible` {{ReadOnlyInline}}
  - : 論理値のプロパティで、 `false` は `Window` がポップアップの場合、 `true` はそれ以外を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.menubar")}}
- {{domxref("window.personalbar")}}
- {{domxref("window.scrollbars")}}
- {{domxref("window.statusbar")}}
- {{domxref("window.toolbar")}}
