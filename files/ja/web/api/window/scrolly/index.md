---
title: "Window: scrollY プロパティ"
short-title: scrollY
slug: Web/API/Window/scrollY
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

**`scrollY`** は {{domxref("Window")}} インターフェイスの読み取り専用プロパティで、文書が現在垂直方向にスクロールしているピクセル数を返します。最近のブラウザーでは、この値はサブピクセル精度ですので、必ずしも整数であるとは限りません。文書が水平方向にスクロールしているピクセル数は {{domxref("Window.scrollX", "scrollX")}} プロパティで取得できます。

### 値

倍精度浮動小数点値で、文書が現在原点から垂直方向にスクロールされているピクセル数を示します。正の値はコンテンツが下方向にスクロールされていることを意味します（下側にさらにコンテンツを表示するため）。より技術的に言えば、`scrollY` は現在の{{Glossary("viewport", "ビューポート")}}の左端の Y 座標を返します。文書が上下どちらにもスクロールされていない場合、`scrollY` は 0 です。ビューポートが存在しない場合、返される値は 0 です。文書がサブピクセル精度の端末でレンダリングされている場合、返される値もサブピクセル精度となり、小数点以下の成分を含むことがあります。

> [!NOTE]
> 整数値が必要である場合は、{{jsxref("Math.round()")}} を使用して四捨五入してください。

Safari はオーバースクロールに対して、最大スクロール位置を超えて `scrollX` を更新することで応答します（デフォルトの「バウンス」効果が無効化されていない限り。例えば {{cssxref("overscroll-behavior")}} を `none` に設定した場合など）。一方、Chrome と Firefox はそうなりません。例えば、Safariでは、文書がすでに最上部にある状態でスクロールを続けると、`scrollY`が負の値になる場合があります。

このプロパティは読み取り専用です。ウィンドウを特定の位置にスクロールするには、{{domxref("Window.scroll()")}} を使用してください。

## 例

```js
// スクロールしている場合、戻してから次のページへスクロールダウン
if (window.scrollY) {
  window.scroll(0, 0); //文書の左上にスクロール位置をリセット
}

window.scrollByPages(1);
```

## メモ

{{domxref("window.scrollBy", "scrollBy()")}}、{{domxref("window.scrollByLines", "scrollByLines()")}}、{{domxref("window.scrollByPages", "scrollByPages()")}} のような相対スクロールする関数を使用する際に、文書がすでにスクロールしていないかをチェックするためにこのプロパティを使用してください。

`pageYOffset` プロパティは、`scrollY` プロパティの別名です。つまり、いずれのプロパティも再割り当てしていない場合、`window.pageYOffset === window.scrollY` は常に真となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.scrollX")}}
