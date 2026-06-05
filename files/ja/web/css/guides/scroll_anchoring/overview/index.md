---
title: スクロール固定の概要
short-title: Overview
slug: Web/CSS/Guides/Scroll_anchoring/Overview
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

ウェブのユーザーであれば、おそらくスクロール固定が解決する問題をよく知っているはずです。速度の遅い接続で長いページを閲覧し、コンテンツを読むためにスクロールを始めるとします。一所懸命に読んでいる間に、ページの見ている部分が突然ジャンプしてしまうことがあります。これはコンテンツの上部に、大きな画像やその他の要素が読み込まれたことによって引き起こされます。

スクロール固定 (scroll anchoring) はブラウザーの機能で、ユーザーが既に文書の新しい部分にスクロールした後で、コンテンツが読み込まれたことでページ内容の移動が発生してしまう問題を解決するためのものです。

## どのように動作するか

スクロール固定は、表示域 (viewport) 外で起こった変化に対し、スクロール位置を調整する機能です。つまり、文書内のスクロール位置が実際には変わっているのにもかかわらず、ユーザーが見ていた個所が表示域に留まり続けます。

## スクロール固定を有効にするには

何もする必要はありません。この機能は、対応しているブラウザーでは既定で有効になっています。ほとんどの場合において、スクロールを固定することは望み通りでしょう。 — コンテンツが急に移動してしまうのは、誰にとっても使い勝手が悪いものです。

## デバッグする必要がある場合

スクロール固定を有効にしてページの動作がうまくいかない場合は、一部の `scroll` イベントリスナーがアンカーノードの動きを補うための余分なスクロールをうまく処理していないことが原因かもしれません。

Firefox では `about:config` で `layout.css.scroll-anchoring.enabled` を `false` に変更してスクロール固定を無効にすることで、問題が解決するかどうかを確認できます。解決した場合は、Firefox がアンカーとして使用しているノードを `layout.css.scroll-anchoring.highlight` スイッチで確認できます。これにより、アンカーノードの上に紫色のオーバーレイが表示されます。

あるノードがアンカーとして適切でないと思われる場合は、以下のように {{cssxref("overflow-anchor")}} を使用してそのノードを除外することができます。

## 無効にする必要がある場合は

仕様書では、新しいプロパティである {{cssxref("overflow-anchor")}} を追加し、スクロール固定を文書全体、もしくは一部で無効にできるようにしています。基本的には、自動的に有効にされたスクロール固定をオプトアウトする仕組みです。

指定できる値は、 `auto` または `none` のどちらかです。

- `auto` が初期値です。対応しているブラウザーでは、スクロール固定の動作をします。そして、コンテンツの急な移動も少なくなります。
- `none` は、文書全体、もしくは一部でスクロール固定を明示的にオプトアウトするための値です。

文書全体でスクロール固定を無効にするには、{{htmlelement("body")}} 要素にこのプロパティを指定してください。

```css
body {
  overflow-anchor: none;
}
```

文書の特定の部分でスクロール固定を無効にしたい場合は、そのコンテンツを囲む要素に `overflow-anchor: none` を指定してください。

```css
.container {
  overflow-anchor: none;
}
```

文書全体またはその一部でスクロール固定を無効にした場合、その無効化された領域の子要素に対して有効化を再設定することはできません。例えば、文書全体で無効化した場合、子要素に `overflow-anchor: auto` を設定して、そのサブセクションのスクロール固定を有効にすることはできません。

### 抑制トリガー

仕様書では、問題になる可能性がある場合はその場でスクロール固定を無効にする、抑制トリガー (_suppression triggers_) についても説明しています。スクロール固定を指定したノードもしくはその祖先でトリガーが発生した場合、スクロール固定が抑制されます。

抑制トリガーとなるのは、次のプロパティの計算値 (computed value) が変更された場合です。

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("bottom")}}
- {{cssxref("margin")}}, {{cssxref("padding")}}
- {{cssxref("width")}} もしくは {{cssxref("height")}} に関連するプロパティすべて
- {{cssxref("transform")}} および独立した座標変換プロパティ {{cssxref("translate")}}, {{cssxref("scale")}}, {{cssxref("rotate")}}

さらに、スクロールボックス内の任意の場所で {{cssxref("position")}} を変更した場合もスクロール固定が無効になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

ブラウザーでスクロール固定が利用できるかどうかを検査する必要がある場合は、[`@supports` 機能クエリー](/ja/docs/Web/CSS/Reference/At-rules/@supports)を使用して `overflow-anchor` プロパティに対応しているかどうかを検査してください。

## 関連情報

- [Original scroll anchoring explainer](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md) - WICG (2016)
- [Scroll anchoring for web developers](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html) - Chromium (2017)
