---
title: 'CSS: カスケーディングスタイルシート'
slug: Web/CSS
---

{{CSSRef}}

**カスケーディングスタイルシート** (Cascading Style Sheets) (**CSS**) は[スタイルシート](/ja/docs/Web/API/StyleSheet)言語であり、[HTML](/ja/docs/Web/HTML) や [XML](/ja/docs/XML_introduction) (方言である [SVG](/ja/docs/Web/SVG)、[MathML](/ja/docs/Web/MathML)、{{Glossary("XHTML")}} などを含む) で記述された文書の体裁や見栄えを表現するために用いられます。 CSS は、要素が画面上で (あるいは紙や音声といった別のメディア上で) どのように表現されるのかを定義します。

CSS は**オープンウェブ**の核となる言語に含まれ、[W3C 標準仕様](http://w3.org/Style/CSS/#specs)によってウェブブラウザー間で標準化されています。以前は CSS 仕様書の様々な部分が同時に開発されており、最新勧告の版数付けができていました。皆さんも CSS1、CSS2.1、CSS3 について聞いたことがあるでしょう。しかし、CSS4 は公式なバージョンにはなっていません。

CSS3 以降、仕様の範囲が大幅に拡大し、CSS モジュールごとに進捗状況が大きく異なるようになったため、[モジュールごとに勧告を開発して公開する](https://www.w3.org/Style/CSS/current-work)ことがより効果的になりました。W3C では、CSS 仕様のバージョン管理の代わりに、[最新の CSS 仕様の安定した状態](https://www.w3.org/TR/css/)のスナップショットを定期的に取得するようになりました。

## 主なリソース

- CSS 入門
  - : ウェブ開発が初めての人は、[CSS の基本](/ja/docs/Learn/Getting_started_with_the_web/CSS_basics)の記事を読んで、CSS とは何か、どのように使用するかを学習しましょう。
- CSS チュートリアル
  - : [CSS 学習エリア](/ja/docs/Learn/CSS)は、初心者から中級者になるための、すべての基本事項を網羅した豊富なコンテンツがあります。
- CSS リファレンス
  - : CSS のすべてのプロパティや概念について記述された、熟練のウェブ開発者向けの [CSS リファレンス](/ja/docs/Web/CSS/Reference)です。

> **注目:**
>
> #### フロントエンドのウェブ開発者を目指している方へ
>
> ゴールに向かって頑張るために必要な情報をまとめたコースをご用意しました。
>
> [**始めましょう**](/ja/docs/Learn/Front-end_web_developer)

## チュートリアル

[CSS 学習エリア](/ja/docs/Learn/CSS) は基礎から CSS を教える複数のモジュールにスポットを当てています — 事前の知識は必要ありません。

- [CSS の第一歩](/ja/docs/Learn/CSS/First_steps)
  - : CSS (Cascading Style Sheets) はウェブページをスタイリングしたりレイアウトしたりするのに使われます — 例えば、文字、色、大きさを変えたり、コンテンツに余白を設けたり、複数列に分けたり、あるいはアニメーションを加えたりなど様々な装飾機能があります。このモジュールでは CSS を習得するために、どう働くかの基本とともに、構文のありかたと HTML にスタイリングを加えることを簡単な始め方を提供します。
- [CSS の構成要素](/ja/docs/Learn/CSS/Building_blocks)

  - : このモジュールは [CSS の第一歩](/ja/docs/Learn/CSS/First_steps)が終わったところを引き継いでいます。言語とその構文に慣れてきて、基本的な使用経験を積んだところで、もう少し深く掘り下げてみましょう。このモジュールでは、カスケードと継承、利用可能なすべてのセレクターのタイプ、単位、寸法の調整、背景や境界のスタイル付け、デバッグなど多くのことを見ていきます。

    ここでの目的は、[テキストの装飾](/ja/docs/Learn/CSS/Styling_text)や[CSS レイアウト](/ja/docs/Learn/CSS/CSS_layout)などのより具体的な分野に進む前に、適切な CSS を書くための手法を知り、すべての重要な理論を理解できるようになることです。

- [テキストの装飾](/ja/docs/Learn/CSS/Styling_text)
  - : CSS 言語の基本を習得したら、次に取り組むべき CSS のトピックはテキストの装飾です — これは、CSS で行う最も一般的なことの一つです。ここでは、フォント、太字、イタリック体、ラインと文字の間隔、ドロップシャドウやその他のテキスト機能の設定を含む、テキストの装飾の基本を見ていきます。あなたのページにカスタムフォントを適用し、リストとリンクを装飾するところを見ることによって、このモジュールを締めくくります。
- [CSS レイアウト](/ja/docs/Learn/CSS/CSS_layout)
  - : 現段階で、すでに CSS の基本、テキストの装飾方法、コンテンツを格納するボックスの装飾方法と操作方法を見てきました。今度は、ビューポートからの相対でボックスを適切な場所に配置する方法、および互いの配置方法を検討します。必要な前提知識をカバーしているので、さまざまな表示の設定、フレックスボックス・CSS グリッド・位置指定などの最新のレイアウトツール、そしてまだ知っておきたいと思うかもしれない過去のテクニックのいくつかを見ながら、CSS レイアウトについて深く掘り下げることができます。
- [CSS を使ってよくある問題を解決する](/ja/docs/Learn/CSS/Howto)
  - : このモジュールは、ウェブページを作成する際の一般的な問題を解決するための CSS の使用方法を説明するコンテンツの節へのリンクを提供しています。

## リファレンス

- [CSS リファレンス](/ja/docs/Web/CSS/Reference): CSS のすべてのプロパティや概念について記述された、熟練のウェブ開発者向けの CSS リファレンスです。
- CSS の主要な概念:

  - [言語の構文と書式](/ja/docs/Web/CSS/Syntax)
  - [詳細度](/ja/docs/Web/CSS/Specificity)と[継承](/ja/docs/Web/CSS/Inheritance)と[カスケード](/ja/docs/Web/CSS/Cascade)
  - [CSS 単位と値](/ja/docs/Web/CSS/CSS_Values_and_Units)および[関数記法](/ja/docs/Web/CSS/CSS_Functions)
  - [ボックスモデル](/ja/docs/Web/CSS/box_model)と[マージンの相殺](/ja/docs/Web/CSS/margin_collapsing)
  - [包含ブロック](/ja/docs/Web/CSS/Containing_block)
  - [重ね合わせ](/ja/docs/Web/CSS/Understanding_z_index/The_stacking_context)と[ブロック整形](/ja/docs/Web/CSS/block_formatting_context)コンテキスト
  - [初期値](/ja/docs/Web/CSS/initial_value)、[計算値](/ja/docs/Web/CSS/computed_value)、[使用値](/ja/docs/Web/CSS/used_value)、[実効値](/ja/docs/Web/CSS/actual_value)
  - [CSS 一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
  - [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)
  - [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)
  - [CSS セレクター](/ja/docs/Web/CSS/CSS_Selectors)
  - [メディアクエリー](/ja/docs/Web/CSS/Media_Queries)
  - [アニメーション](/ja/docs/Web/CSS/animation)

## 料理帳

[CSS レイアウト料理帳](/ja/docs/Web/CSS/Layout_cookbook)は、よくあるレイアウトパターンや、サイトに実装する必要がある可能性がある事柄のレシピを共有するためのものです。プロジェクトの出発点として使うことができるコードを提供することに加えて、これらのレシピは様々な方法のレイアウト仕様書を使用することができることに光を当て、開発者として選択ができるようにします。

## CSS 開発のためのツール

- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) は CSS が正しく書かれているかを判定するために利用できます。デバッグのために重宝するツールです。
- [Firefox Developer Tools](/ja/docs/Tools) は[インスペクター](/ja/docs/Tools/Page_Inspector)と[スタイルエディター](/ja/docs/Tools/Style_Editor)ツールを通じて、ページの CSS をライブでの閲覧や編集を可能にします。
- Firefox の [Web Developer 拡張機能](https://addons.mozilla.org/ja/firefox/addon/web-developer/)では、表示しているサイトをその場で追跡したり編集したりすることができます。
- ウェブコミュニティは、利用できるその他の[様々な CSS のためのツール](/ja/docs/Web/CSS/Tools)を開発しています。

## メタバグ

- Firefox: [Firefox バグ 1323667](https://bugzil.la/1323667)

## 関連情報

- [CSS デモ](/ja/docs/Web/Demos_of_open_web_technologies#CSS): 最新の CSS テクノロジーの例を探索して想像力をかきたてましょう。
- CSS がよく適用されるウェブ言語。[HTML](/ja/docs/Web/HTML)、[SVG](/ja/docs/Web/SVG)、[MathML](/ja/docs/Web/MathML)、{{Glossary("XHTML")}}、[XML](/ja/docs/XML_introduction)
- CSS を広範囲に利用する Mozilla のテクノロジー。[XUL](/ja/docs/Mozilla/Tech/XUL)、[Firefox](/ja/docs/Mozilla/Firefox)、[Thunderbird](/ja/docs/Mozilla/Thunderbird) の[拡張機能](/ja/docs/Mozilla/Add-ons)と[テーマ](/ja/docs/Mozilla/Add-ons/Themes)
- [Mozilla メーリングリスト](https://lists.mozilla.org/listinfo/dev-tech-layout)
- [CSS に関する Stack Overflow の質問](http://stackoverflow.com/questions/tagged/css)
