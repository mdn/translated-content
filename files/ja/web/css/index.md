---
title: "CSS: カスケーディングスタイルシート"
slug: Web/CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**カスケーディングスタイルシート** (Cascading Style Sheets、**CSS**) は[スタイルシート](/ja/docs/Web/API/StyleSheet)言語であり、[HTML](/ja/docs/Web/HTML) や [XML](/ja/docs/Web/XML/XML_introduction)（派生言語である [SVG](/ja/docs/Web/SVG)、[MathML](/ja/docs/Web/MathML)、{{Glossary("XHTML")}} などを含む）で記述された文書の体裁や見栄えを表現するために用いられます。CSS は、要素が画面上で (あるいは紙や音声といった別のメディア上で) どのように表現されるのかを定義します。

CSS は**オープンウェブ**の核となる言語に含まれており、[W3C 標準仕様](https://www.w3.org/Style/CSS/#specs)によってウェブブラウザー間で標準化されています。以前は CSS 仕様書の様々な部分が同時に開発されており、最新勧告の版数付けができていました。皆さんも CSS1、CSS2.1、また CSS3 についても聞いたことがあるでしょう。CSS3 や CSS4 にはなりません。すべて単なる "CSS" と、バージョン番号を持つ個々の CSS モジュールとなりました。

CSS 2.1 以降、仕様の範囲が大幅に拡大し、CSS モジュールごとに進捗状況が大きく異なるようになったため、[モジュールごとに勧告を開発して公開する](https://www.w3.org/Style/CSS/current-work)ことがより効果的になりました。W3C では、CSS 仕様のバージョン管理の代わりに、[最新の CSS 仕様の安定した状態](https://www.w3.org/TR/css/)のスナップショットと独立したモジュールの進捗を定期的に取得するようになりました。CSS のモジュールは、[CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) のように、バージョン番号またはレベルを持つようになりました。

## 初心者向けチュートリアル

- [初めてのウェブサイト: コンテンツのスタイル設定](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : この記事では、 CSS とは何か、またどのように使用されているかについて、ウェブ開発に完全に新しい人々を対象に、簡単な紹介を提供しています。
- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)
  - : [ウェブ開発の学習](/ja/docs/Learn_web_development)の部の CSS 基礎モジュールでは、 CSS の基礎を一から学べます。
- [CSS テキスト装飾](/ja/docs/Learn_web_development/Core/Text_styling)
  - : ここでは、フォント、太字、イタリック体、ラインと文字の間隔、ドロップシャドウやその他のテキスト機能の設定を含む、テキストの装飾の基本を見ていきます。ページにカスタムフォントを適用し、リストとリンクを装飾するところを見るところまでで、このモジュールを締めくくります。
- [CSS レイアウト](/ja/docs/Learn_web_development/Core/CSS_layout)
  - : これで、ボックスを互いに、そしてブラウザーのビューポートに対して正しくレイアウトする方法を検討する時が来ました。このモジュールでは、浮動ボックス、位置指定、他にも最新のレイアウトツール、さまざまな端末、画面サイズ、解像度に適応するレスポンシブデザインの構築について検討します。

## リファレンス

[CSS リファレンス](/ja/docs/Web/CSS/Reference)は、経験豊富なウェブ開発者向けの包括的なリファレンスであり、CSS のすべてのプロパティと概念を記述しています。

- [言語の構文と書式](/ja/docs/Web/CSS/Syntax)
- [詳細度](/ja/docs/Web/CSS/Specificity)と[継承](/ja/docs/Web/CSS/Inheritance)と[カスケード](/ja/docs/Web/CSS/Cascade)
- [CSS セレクター](/ja/docs/Web/CSS/CSS_selectors)、[擬似要素](/ja/docs/Web/CSS/CSS_pseudo-elements)、[入れ子](/ja/docs/Web/CSS/CSS_nesting)、[スコープ化](/ja/docs/Web/CSS/CSS_scoping)、[シャドウパーツ](/ja/docs/Web/CSS/CSS_shadow_parts)
- [CSS アットルール](/ja/docs/Web/CSS/At-rule)（[メディア](/ja/docs/Web/CSS/CSS_media_queries)や[コンテナー](/ja/docs/Web/CSS/CSS_containment)クエリーを含む）
- [CSS 単位と値](/ja/docs/Web/CSS/CSS_Values_and_Units)および[関数記法](/ja/docs/Web/CSS/CSS_Functions)
- [ボックスモデル](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)と[マージンの相殺](/ja/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [包含ブロック](/ja/docs/Web/CSS/Containing_block)
- [重ね合わせ](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)と[ブロック整形](/ja/docs/Web/CSS/CSS_display/Block_formatting_context)コンテキスト
- [初期値](/ja/docs/Web/CSS/initial_value)、[計算値](/ja/docs/Web/CSS/computed_value)、[使用値](/ja/docs/Web/CSS/used_value)、[実効値](/ja/docs/Web/CSS/actual_value)
- [CSS 一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
- [CSS フレックスボックス](/ja/docs/Web/CSS/CSS_flexible_box_layout)、[段組み](/ja/docs/Web/CSS/CSS_multicol_layout)、[グリッド](/ja/docs/Web/CSS/CSS_grid_layout)レイアウト
- [アニメーション](/ja/docs/Web/CSS/animation)、[トランジション](/ja/docs/Web/CSS/CSS_transitions)、[座標変換](/ja/docs/Web/CSS/CSS_transforms)

## 料理帳

[CSS レイアウト料理帳](/ja/docs/Web/CSS/Layout_cookbook)は、よくあるレイアウトパターンや、サイトに実装する必要がある可能性がある事柄のレシピを共有するためのものです。プロジェクトの出発点として使うことができるコードを提供することに加えて、これらのレシピは様々な方法のレイアウト仕様書を使用することができることに光を当て、開発者として選択ができるようにします。

## CSS 開発のためのツール

- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) は CSS が正しく書かれているかを判定するために利用できます。デバッグのために重宝するツールです。
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) は[インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)と[スタイルエディター](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html)ツールを通じて、ページの CSS をライブでの閲覧や編集を可能にします。
- Firefox の[ウェブ開発者拡張機能](https://addons.mozilla.org/ja/firefox/addon/web-developer/)では、表示しているサイトをその場で追跡したり編集したりすることができます。

## メタバグ

- Firefox: [Firefox バグ 1323667](https://bugzil.la/1323667)

## 関連情報

- CSS がよく適用されるウェブ言語。[HTML](/ja/docs/Web/HTML)、[SVG](/ja/docs/Web/SVG)、[MathML](/ja/docs/Web/MathML)、{{Glossary("XHTML")}}、[XML](/ja/docs/Web/XML/XML_introduction)
- [CSS に関する Stack Overflow の質問](https://stackoverflow.com/questions/tagged/css)
