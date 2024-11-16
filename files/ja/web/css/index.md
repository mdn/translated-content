---
title: "CSS: カスケーディングスタイルシート"
slug: Web/CSS
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{CSSRef}}

**カスケーディングスタイルシート** (Cascading Style Sheets、**CSS**) は[スタイルシート](/ja/docs/Web/API/StyleSheet)言語であり、[HTML](/ja/docs/Web/HTML) や [XML](/ja/docs/Web/XML/XML_introduction)（派生言語である [SVG](/ja/docs/Web/SVG)、[MathML](/ja/docs/Web/MathML)、{{Glossary("XHTML")}} などを含む）で記述された文書の体裁や見栄えを表現するために用いられます。CSS は、要素が画面上で (あるいは紙や音声といった別のメディア上で) どのように表現されるのかを定義します。

CSS は**オープンウェブ**の核となる言語に含まれており、[W3C 標準仕様](https://www.w3.org/Style/CSS/#specs)によってウェブブラウザー間で標準化されています。以前は CSS 仕様書の様々な部分が同時に開発されており、最新勧告の版数付けができていました。皆さんも CSS1、CSS2.1、また CSS3 についても聞いたことがあるでしょう。CSS3 や CSS4 にはなりません。すべて単なる "CSS" と、バージョン番号を持つ個々の CSS モジュールとなりました。

CSS 2.1 以降、仕様の範囲が大幅に拡大し、CSS モジュールごとに進捗状況が大きく異なるようになったため、[モジュールごとに勧告を開発して公開する](https://www.w3.org/Style/CSS/current-work)ことがより効果的になりました。W3C では、CSS 仕様のバージョン管理の代わりに、[最新の CSS 仕様の安定した状態](https://www.w3.org/TR/css/)のスナップショットと独立したモジュールの進捗を定期的に取得するようになりました。CSS のモジュールは、[CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) のように、バージョン番号またはレベルを持つようになりました。

## 主なリソース

- CSS 入門
  - : ウェブ開発が初めての人は、[CSS の基本](/ja/docs/Learn/Getting_started_with_the_web/CSS_basics)の記事を読んで、CSS とは何か、どのように使用するかを学習しましょう。
- CSS チュートリアル
  - : [CSS 学習領域](/ja/docs/Learn/CSS)は、初心者から中級者になるための、すべての基本事項を網羅した豊富なコンテンツがあります。
- CSS リファレンス
  - : CSS の個々のプロパティや概念について記述された [CSS リファレンス](/ja/docs/Web/CSS/Reference)です。

## チュートリアル

[CSS 学習領域](/ja/docs/Learn/CSS) は基礎から CSS を教える複数のモジュールにスポットを当てています — 事前の知識は必要ありません。

- [CSS の第一歩](/ja/docs/Learn/CSS/First_steps)
  - : CSS (Cascading Style Sheets) はウェブページをスタイル付けしたりレイアウトしたりするのに使われます。例えば、文字、色、大きさを変えたり、コンテンツに余白を設けたり、複数列に分けたり、あるいはアニメーションを加えたりなど様々な装飾機能があります。このモジュールでは CSS を習得するために、どう働くかの基本とともに、構文のありかたと HTML にスタイル付けを加えることを簡単な始め方を提供します。
- [CSS の構成要素](/ja/docs/Learn/CSS/Building_blocks)

  - : このモジュールは [CSS の第一歩](/ja/docs/Learn/CSS/First_steps)が終わったところを引き継いでいます。言語とその構文に慣れてきて、基本的な使用経験を積んだところで、もう少し深く掘り下げてみましょう。このモジュールでは、カスケードと継承、利用可能なすべてのセレクターのタイプ、単位、寸法の調整、背景や境界のスタイル付け、デバッグなど多くのことを見ていきます。

    ここでの目的は、[テキストの装飾](/ja/docs/Learn/CSS/Styling_text)や[CSS レイアウト](/ja/docs/Learn/CSS/CSS_layout)などのより具体的な分野に進む前に、適切な CSS を書くための手法を知り、すべての重要な理論を理解できるようになることです。

- [CSS テキスト装飾](/ja/docs/Learn/CSS/Styling_text)

  - : CSS 言語の基本を習得したら、次に取り組むべき CSS のトピックはテキストの装飾です — これは、CSS で行う最も一般的なことの一つです。ここでは、フォント、太字、イタリック体、ラインと文字の間隔、ドロップシャドウやその他のテキスト機能の設定を含む、テキストの装飾の基本を見ていきます。あなたのページにカスタムフォントを適用し、リストとリンクを装飾するところを見ることによって、このモジュールを締めくくります。

- [CSS レイアウト](/ja/docs/Learn/CSS/CSS_layout)

  - : 現段階で、すでに CSS の基本、テキストの装飾方法、コンテンツを格納するボックスの装飾方法と操作方法を見てきました。今度は、ビューポートからの相対でボックスを適切な場所に配置する方法、および互いの配置方法を検討します。必要な前提知識をカバーしているので、さまざまな表示の設定、フレックスボックス・CSS グリッド・位置指定などの最新のレイアウトツール、そしてまだ知っておきたいと思うかもしれない過去のテクニックのいくつかを見ながら、CSS レイアウトについて深く掘り下げることができます。

- [CSS を使ってよくある問題を解決する](/ja/docs/Learn/CSS/Howto)
  - : このモジュールは、ウェブページを作成する際の一般的な問題を解決するための CSS の使用方法を説明するコンテンツの節へのリンクを提供しています。

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
