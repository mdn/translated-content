---
title: CSS オーバーフロー
slug: Web/CSS/CSS_overflow
l10n:
  sourceCommit: d18e8247ac5c593e6e95f4ad84173c4099609fac
---

{{CSSRef}}

**CSS オーバーフロー**モジュールのプロパティを使用すると、視覚メディアでスクロール可能なオーバーフローを処理することができます。

オーバーフローは、要素ボックス内のコンテンツがボックスの 1 つまたは複数の端を越えるときに起こります。**スクロール可能なオーバーフロー**とは、要素ボックスの外側に現れるコンテンツのことで、スクロール機構を追加したい場合があります。CSS オーバーフローのプロパティを使用すると、コンテンツが要素ボックスからあふれたときに何が起こるかを制御することができます。

コンテンツがはみ出すものの、 CSS のボックスモデルに関与しない描画効果は、レイアウトには影響しません。この種のオーバーフローは{{Glossary("ink overflow", "インクオーバーフロー")}}とも呼ばれます。インクオーバーフローの例としては、ボックスシャドウ、境界画像、テキスト装飾、はみ出したグリフ、輪郭線などが挙げられます。インクオーバーフローはスクロール可能なオーバーフロー領域を拡張しません。

## オーバーフローの実際

次の操作可能な例を使用して、隣接する固定サイズボックスのコンテンツのオーバーフローとスクロールバーに対する様々なオーバーフロープロパティ値の効果を確認してみましょう。

この例では、`overflow-clip-margin` プロパティと `width` プロパティの値を変更するオプションも含まれています。また、overflow プロパティが{{Glossary("scroll container", "スクロールコンテナー")}}を生成する場合、コンテンツをプログラムでスクロールすることもできます。 `overflow: clip` を選択し、 `overflow-clip-margin` の値を変えた場合の効果を確認します。 `overflow: hidden` または `overflow: scroll` を選択し、様々な `ScrollLeft` と `ScrollTop` スライダーの設定を調べます。

{{EmbedGHLiveSample("css-examples/modules/overflow.html", '100%', 320)}}

上のコンテンツボックスにはリンクが記載されていますが、これはキーボードフォーカスがオーバーフローやスクロール動作に与える効果を示すためのものです。リンクに移動したり、コンテンツをプログラムでスクロールしてみてください: 列挙値である `<overflow>` がスクロールコンテナーを生成した場合のみ、コンテンツはスクロールします。

## リファレンス

### CSS プロパティ

- {{CSSxRef("overflow")}} 一括指定
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("scroll-behavior")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("text-overflow")}}
- {{CSSxRef("-webkit-line-clamp")}}

> [!NOTE]
> CSS オーバーフローモジュールレベル 4 では、`block-ellipsis`、`continue`、`line-clamp`、`max-lines` プロパティが導入されました。これらはまだ実装されていません。

### データ型

- [`<overflow>`](/ja/docs/Web/CSS/overflow_value) 列挙値

## ガイド

- [コンテンツのオーバーフロー](/ja/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : CSS の構成要素です。オーバーフローとは何か、どのように管理するかを学びます。
- [名前付きスクロール進行タイムラインアニメーションの作成](/ja/docs/Web/CSS/scroll-timeline-name#名前付きスクロール進行タイムラインのアニメーションの作成)
  - : CSS スクロールタイムライン {{cssxref('scroll-timeline-name')}} および {{cssxref('scroll-timeline-axis')}} プロパティと {{cssxref('scroll-timeline')}} の一括指定は、スクロールコンテナーのスクロールオフセットに関連付けられたアニメーションを作成します。

## 関連概念

- {{CSSxRef("scrollbar-width")}} プロパティ
- {{CSSxRef("scrollbar-color")}} プロパティ
- {{CSSxRef("scrollbar-gutter")}} プロパティ
- {{CSSxRef("scroll-behavior")}} プロパティ
- {{cssxref("scroll-margin")}} 一括指定プロパティ
- {{cssxref("scroll-padding")}} 一括指定プロパティ
- {{cssxref("scroll-snap-align")}} プロパティ
- {{cssxref("scroll-snap-stop")}} プロパティ
- {{cssxref("scroll-snap-type")}} プロパティ
- {{cssxref("text-overflow")}} プロパティ
- {{CSSxRef("::-webkit-scrollbar")}} 擬似要素
- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA ロール
- Element の {{domxref("Element.scroll", "scroll()")}} メソッド
- Element の {{domxref("Element.scrollBy", "scrollBy()")}} メソッド
- Element の {{domxref("Element.scrollIntoView", "scrollIntoView()")}} メソッド
- Element の {{domxref("Element.scrollTo", "scrollTo()")}} メソッド
- Element の {{domxref("Element.scrollTop", "scrollTop")}} プロパティ
- Element の {{domxref("Element.scrollLeft", "scrollLeft")}} プロパティ
- Element の {{domxref("Element.scrollWidth", "scrollWidth")}} プロパティ
- Element の {{domxref("Element.scrollHeight", "scrollHeight")}} プロパティ
- Document の {{domxref("Document.scroll_event", "scroll")}} イベント
- 用語集の「{{Glossary("Scroll container", "スクロールコンテナー")}}」
- 用語集の「{{Glossary("Ink overflow","インクオーバーフロー")}}」

## 仕様書

{{Specifications}}

## 関連情報

- [CSS スクロールバースタイル設定](/ja/docs/Web/CSS/CSS_scrollbars_styling)モジュール
- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_scroll_snap)モジュール
- [CSSOM view](/ja/docs/Web/CSS/CSSOM_view) モジュール
- [スクロール可能なオーバーフローのデバッグ](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)の方法
