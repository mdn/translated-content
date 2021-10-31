---
title: スクロールアンカリングの紹介
slug: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
tags:
  - CSS
  - ガイド
  - overflow-anchor
  - スクロールアンカリング
translation_of: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
---
{{CSSRef}}

ウェブのユーザーであれば、おそらくスクロールアンカリングが解決する問題をよく知っているはずです。速度の遅い接続で長いページを閲覧し、コンテンツを読むためにスクロールを始めるとします。一所懸命に読んでいる間に、ページの見ている部分が突然ジャンプしてしまうことがあります。これはコンテンツの上部に、大きな画像やその他の要素が読み込まれたことによって引き起こされます。

スクロールアンカリング (scroll anchoring) はブラウザーの機能で、ユーザーが既に文書の新しい部分にスクロールした後で、コンテンツが読み込まれたことでページ内容の移動が発生してしまう問題を解決するためのものです。

## どのように動作するか

スクロールアンカリングは、表示域 (viewport) 外で起こった変化に対し、スクロール位置を調整する機能です。つまり、文書内のスクロール位置が実際には変わっているのにもかかわらず、ユーザーが見ていた個所が表示域に留まり続けます。

## スクロールアンカリングを有効にするには

何もする必要はありません。この機能は、対応しているブラウザーでは既定で有効になっています。ほとんどの場合において、スクロールを固定することは望み通りでしょう。 — コンテンツが急に移動してしまうのは、誰にとっても使い勝手が悪いものです。

## デバッグする必要がある場合

スクロールアンカリングを有効にしてページの動作がうまくいかない場合は、一部の `scroll` イベントリスナーがアンカーノードの動きを補うための余分なスクロールをうまく処理していないことが原因かもしれません。

Firefox では `about:config` で `layout.css.scroll-anchoring.enabled` を `false` に変更してスクロールアンカリングを無効にすることで、問題が解決するかどうかを確認できます。

解決した場合は、Firefox がアンカーとして使用しているノードを `layout.css.scroll-anchoring.highlight` スイッチで確認できます。これにより、アンカーノードの上に紫色のオーバーレイが表示されます。

あるノードがアンカーとして適切でないと思われる場合は、以下のように {{cssxref("overflow-anchor")}} を使用してそのノードを除外することができます。

## 無効にする必要がある場合は

仕様書では、新しいプロパティである {{cssxref("overflow-anchor")}} を追加し、スクロールアンカリングを文書全体、もしくは一部で無効にできるようにしています。基本的には、自動的に有効にされたスクロールアンカリングをオプトアウトする仕組みです。

指定できる値は、 `auto` または `none` のどちらかです。

- `auto` が初期値です。対応しているブラウザーでは、スクロールアンカリングの動作をします。そして、コンテンツの急な移動も少なくなります。
- `none` は、文書全体、もしくは一部でスクロールアンカリングを明示的にオプトアウトするための値です。

文書全体でスクロールアンカリングを無効にするには、{{htmlelement("body")}} 要素にこのプロパティを指定してください。

```css
body {
  overflow-anchor: none;
}
```

文書の特定の部分でスクロールアンカリングを無効にしたい場合は、そのコンテンツを囲む要素に `overflow-anchor: none` を指定してください。

```css
.container {
  overflow-anchor: none;
}
```

> **Note:** 仕様書にも書かれていますが、スクロールアンカリングが無効にされた場合、その子孫要素から再び有効にすることはできません。例えば、スクロールアンカリングが文書全体で無効にされた際、文書内の一部に `overflow-anchor: auto` を指定しても、その部分でスクロールアンカリングは動作しません。

### 抑制トリガー

仕様書では、問題になる可能性がある場合はその場でスクロールアンカリングを無効にする、抑制トリガー (_suppression triggers_) についても説明しています。スクロールアンカリングを指定したノードもしくはその祖先でトリガーが発生した場合、スクロールアンカリングが抑制されます。

抑制トリガーとなるのは、次のプロパティの計算値 (computed value) が変更された場合です。

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("bottom")}}
- {{cssxref("margin")}}, {{cssxref("padding")}}
- {{cssxref("width")}} もしくは {{cssxref("height")}} に関連するプロパティすべて
- {{cssxref("transform")}}

さらに、スクロールボックス内の任意の場所で {{cssxref("position")}} を変更した場合もスクロールアンカリングが無効になります。

> **Note:** バグ {{bug(1584285)}} で、Firefox Nightly に `layout.css.scroll-anchoring.suppressions.enabled` フラグが追加され、これらのトリガーを無効化できるようになりました。

## その他の解説

- [Explainer document on the WICG site](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md)
- [Scroll anchoring for web developers on the Chromium blog](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html)
- [Implement a pin-to-bottom scrolling element using scroll anchoring](https://blog.eqrion.net/pin-to-bottom/)

## ブラウザーの互換性

ブラウザーでスクロールアンカリングが利用できるかどうかを検査する必要がある場合は、[機能クエリー](/ja/docs/Web/CSS/@supports)を使用して `overflow-anchor` プロパティに対応しているかどうかを検査してください。

{{Compat("css.properties.overflow-anchor")}}
