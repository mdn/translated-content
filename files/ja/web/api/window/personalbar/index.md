---
title: Window.personalbar
slug: Web/API/Window/personalbar
l10n:
  sourceCommit: c92127e297ef9448c4263e95109d0610e0ba4158
---

{{APIRef}}

`personalbar` オブジェクトを返します。

これは `Window` プロパティのグループのひとつで、論理値である `visible` プロパティを保持し、ウェブブラウザーのユーザーインターフェイスの特定の部分が表示されているかどうかを表していました。

プライバシーと相互運用性の理由から、 `visible` プロパティの値は、この `Window` がポップアップである場合は `false` となり、そうでない場合は `true` となります。

## 値

単一のプロパティを保持するオブジェクトです。

- `visible` {{ReadOnlyInline}}
  - : 論理プロパティで、 `false` はこの `Window` がポップアップであるとき、それ以外は `true` になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.locationbar")}}
- {{domxref("window.menubar")}}
- {{domxref("window.scrollbars")}}
- {{domxref("window.statusbar")}}
- {{domxref("window.toolbar")}}
