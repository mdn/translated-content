---
title: CSS テキスト装飾
short-title: テキスト装飾
slug: Web/CSS/Guides/Text_decoration
l10n:
  sourceCommit: c5c748631460fdad4eaba40349ece8408fe24195
---

**CSS テキスト装飾** (CSS text decoration) は、下線、テキストの影、圏点など、テキスト装飾に関連する機能を定義します。テキスト装飾機能は、スペルミス、文法上の課題、リンクに対して視覚的な手がかりを提供できます。これらの機能は、テキストの使いやすさ、アクセシビリティ、機能、美観の改善に役立ちます。

擬似クラスと擬似要素を使用してテキスト装飾の色、スタイル、太さを変化させることで、色だけに頼らない方法でテキストの強調を強調できます。

テキストの読みやすさを改善するのに役立ついくつかの機能があります。

- {{cssxref("text-decoration-skip-ink")}} は、下垂部をスキップすることで読みやすくすることができます。
- {{cssxref("text-underline-offset")}} を使用すると、下線の位置を微調整してフォントの寸法やデザインの美学に一致させることができるので、特にユニークな[書体](/ja/docs/Web/CSS/Guides/Fonts)において有用です。
- {{cssxref("text-shadow")}} の色をテキストの {{cssxref("color")}} と対照的にすることで、コントラストが不十分な背景に配置した場合、テキストを視覚的に際立たせることができます。

これらの機能はすべて、読みやすさを改善し、ひいてはアクセシビリティの向上に寄与します。視覚的なノイズを縮小し、テキストの明瞭さを高めることは、特に[失読症](https://ja.wikipedia.org/wiki/ディスレクシア)や弱視のユーザーにとって役立つことです。

一部の言語の表記体系では、[上線](/ja/docs/Web/CSS/Reference/Properties/text-decoration-line#overline)や[下線](/ja/docs/Web/CSS/Reference/Properties/text-decoration-line#underline)が意味的な役割を担います。CSSでは、文化的な規範に合わせてスタイル設定を調整できます。テキスト装飾機能は、ラテン文字ベースの文字体系を使用せず、代わりに日本語や韓国語のように異なる下線配置を従う言語において特に有益です。

テキスト装飾機能は、印刷媒体由来の編集基準やローカライゼーション基準にも同時に準拠できます。例えば、取り消し線（打ち消し線）を使用すれば、コンテンツの状態を示すことが可能です。これにより、コンテンツが削除されたことや価格が半額になったことをユーザーに通知できます。この機能により、元のコンテンツと更新後のコンテンツの両方を提示できます。オーバーラインや二重下線は、学術的・編集的な注釈に一般的に使用されます。

## テキスト装飾の実例

```css hidden
p {
  margin: 1em 0;
}
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
  text-underline-offset: -5px;
}
.shadow {
  text-shadow: red 4px 4px 0;
}
.emphasis {
  text-emphasis: triangle red;
}
```

```html-nolint hidden
<p class="under">赤い下線</p>
<p class="over">ライム色の波上線</p>
<p class="line">これは取り消し線があります</p>
<p class="underover">これは破線の下線と上線があります</p>
<p class="thick">ずらした紫の実践の下線</p>
<p class="shadow">これには赤い影があります</p>
<p class="emphasis">赤い三角形で強調されています</p>
```

{{EmbedLiveSample('Text decoration in action','auto','320')}}

## リファレンス

### プロパティ

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-inset")}}
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-skip")}}
- {{cssxref("text-decoration-skip-ink")}}
- {{cssxref("text-decoration-style")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis-position")}}
- {{cssxref("text-emphasis-style")}}
- {{cssxref("text-shadow")}}
- {{cssxref("text-underline-offset")}}
- {{cssxref("text-underline-position")}}

仕様書では、`text-decoration-skip-box`、`text-decoration-skip-self`、`text-decoration-skip-spaces`、`text-emphasis-skip`プロパティも定義されていますが、これらは今のところどのブラウザーも対応していません。

## ガイド

- [テキストの影の紹介](/ja/docs/Web/CSS/Guides/Text_decoration/Text_shadows)
  - : {{cssxref("text-shadow")}} プロパティの要素の概要と、複数のテキストの影の作成

## 関連概念

- {{cssxref("::spelling-error")}}
- {{cssxref("::grammar-error")}}
- {{cssxref("::first-letter")}}
- {{cssxref("::first-line")}}
- {{cssxref("box-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("line-style")}}
- {{cssxref("letter-spacing")}}
- {{cssxref("word-spacing")}}
- {{cssxref("font-size")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-kerning")}}
- {{cssxref("ruby-overhang")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("sup")}}
- {{HTMLElement("sub")}}
- [インライン整形コンテキスト](/ja/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context)
- [整形コンテキストの紹介](/ja/docs/Web/CSS/Guides/Display/Formatting_contexts#インライン整形コンテキスト)

## 仕様書

{{Specifications}}

## 関連情報

- [CSS フォント](/ja/docs/Web/CSS/Guides/Fonts)モジュール
- [CSS ルビレイアウト](/ja/docs/Web/CSS/Guides/Ruby_layout)モジュール
- [CSS テキスト](/ja/docs/Web/CSS/Guides/Text)モジュール
- [CSS 書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)モジュール
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS フォント](/ja/docs/Web/CSS/Guides/Fonts)モジュール
