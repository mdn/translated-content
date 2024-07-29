---
title: "BarProp: visible プロパティ"
short-title: visible
slug: Web/API/BarProp/visible
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

**`visible`** は {{domxref("BarProp")}} インターフェイスの読み取り専用プロパティで、このオブジェクトが表すユーザーインターフェイス要素が可視であれば `true` を返します。

## 値

{{jsxref("Boolean")}} は最上位のウィンドウが {{domxref("window.open")}} によって {{domxref("window.open", "request a popup window", "popup_feature", 1)}} で開かれた場合に真になります。

> [!NOTE]
> 過去には、これは使用するインターフェイス要素が表示されているかどうかを表していました。しかし、プライバシーの観点から、これは各インターフェイス要素の実際の可視性を表すことはできなくなりました。

## 例

次の例はウィンドウがポップアップでない場合、コンソールに `true` を出力します。

```js
console.log(window.locationbar.visible);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
