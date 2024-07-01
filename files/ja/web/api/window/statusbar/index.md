---
title: "Window: statusbar プロパティ"
short-title: statusbar
slug: Web/API/Window/statusbar
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

`statusbar` オブジェクトを返します。

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

- {{domxref("window.locationbar")}}
- {{domxref("window.menubar")}}
- {{domxref("window.personalbar")}}
- {{domxref("window.scrollbars")}}
- {{domxref("window.toolbar")}}
