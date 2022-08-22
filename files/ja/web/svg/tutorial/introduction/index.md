---
title: Introduction
slug: Web/SVG/Tutorial/Introduction
tags:
  - SVG
  - 'SVG:Tutorial'
translation_of: Web/SVG/Tutorial/Introduction
---
<div>
  {{PreviousNext("SVG/Tutorial", "SVG/Tutorial/Getting Started")}}</div>
<p><img align="right" height="535" src="/@api/deki/files/348/=SVG_Overview.png" width="300"><a href="/ja/docs/SVG" title="SVG">SVG</a> は右に示したようなグラフィックの描画に用いる、 <a href="/ja/docs/XHTML" title="XHTML">XHTML</a> に似ている <a href="/ja/docs/XML" title="XML">XML</a> 言語です。これは、必要な線や図形を指定する、既存のラスタ画像に手を加える、あるいはそれら両方を組み合わせることで画像を作成するのに用いられます。画像やその部品は、外見を完全に変えるためにトランスフォーム、合成、フィルタ適用を行うこともできます。</p>
<p>SVG は、いくつかの競合するフォーマットが <a href="http://www.w3.org" title="W3C">W3C</a> に提案されたものの承認されなかった後の 1999 年頃に生まれました。仕様書は長い間存在していますがブラウザへの採用はかなり遅く、そのために今日 (2009 年) の Web で用いられている SVG コンテンツは少ない状態です。利用可能な実装でさえ、その多くは <a href="/ja/docs/HTML/Canvas" title="HTML/Canvas">HTML:Canvas</a> や完全なアプリケーションインタフェースとしての Adobe Flash のような競合技術ほど速くない状態です。SVG は実装の一部において、利用が可能な DOM インタフェースを含むことと、デフォルトでブラウザが動作するのにサードパーティの拡張機能を必要としないという利点があります。それを使用するかしないかは、たいていそれを使う目的に依存します。</p>

<h2 id="Basic_ingredients" name="Basic_ingredients" style="overflow: hidden;">基本的な構成要素</h2>
<p>HTML はヘッダ、段落、テーブルなどを定義する要素を提供します。同様に SVG は円、長方形、単純あるいは複雑な曲線などの要素を提供します。シンプルな SVG ドキュメントは <code>svg</code> ルート要素およびグラフィックを構成するいくつかの基本的な図形のみから成ります。加えて <code>g</code> があり、これはいくつかの基本的な図形をグループ化します。</p>
<p>ここから始めて、SVG 画像を複雑にしていくことができます。SVG はグラデーション、回転、フィルタ効果、アニメーション、JavaScript との連携などをサポートします。しかしこれら言語の追加機能すべては、グラフィックエリアを定義する比較的小さな要素のセットに依存します。</p>
<h2 id="Before_you_start" name="Before_you_start">始める前に</h2>
<p>アプリケーション固有のファイルと同じように SVG を扱うことが出来る <a href="http://www.inkscape.org/">Inkscape</a> のような free な、たくさんの draw アプリケーションがあります。しかし、このチュートリアルでは、信頼できる XML か (あなたが選んだ) テキストエディタを期待しています。このチュートリアルは、SVG の内部を理解したい人向けに作られています。一度 SVG を手書きでマークアップすることは、良い経験になります。それでも、最終的なゴールは意識するべきです。すべての SVG ビューアが同じということはなく、それらアプリが SVG 仕様や SVG と併せて用いる他の仕様 (<a href="/ja/docs/JavaScript" title="JavaScript">JavaScript</a> や <a href="/ja/docs/CSS" title="CSS">CSS</a>) を異なるレベルでサポートしているため、あるアプリ向けに記述した SVG がほかのアプリでは同じように表示されない可能性があります。</p>
<p>SVG は現行の全ブラウザでサポートされているわけではありません (あと一息ではありますが)。SVG ビューアのかなり完全な一覧が <a href="http://wiki.svg.org/Viewer_Implementations">SVG Wiki</a> にあります。Firefox はバージョン 1.5 から一部の SVG コンテンツをサポートしており、その後のリリースごとにサポートレベルが向上しています。うまくいけばこのチュートリアルと共に MDC が、開発者が Gecko とほかの主要な実装との間の違いを把握することの助けになるでしょう。</p>
<p>始める前に、XML もしくは <abbr title="HyperText Markup Language">HTML</abbr> のような他のマークアップ言語の基本を理解するべきです。もし、XML に精通していなければ、以下に心にとめておく指針があります:</p>
<ul>
  <li>SVG 要素および属性は、XML が (HTML とは異なり) 大文字小文字を区別するため、ここで示したとおりに入力しなければ成りません。</li>
  <li>SVG の属性値は、たとえ数値でも引用符で囲まれなければなりません。</li>
</ul>
<p>SVG の仕様は巨大です。このチュートリアルは、初めの一歩を踏み出すためだけの範囲を担当しています。一度 SVG の基本に精通したら、知りたいことを見つけるために『<a href="/ja/docs/SVG/Element" title="SVG/Element">SVG 要素リファレンス</a>』 と、『<a href="/ja/docs/SVG/Interface" title="SVG/Interface">Interface Reference</a>』({{todo("デッドリンク")}}) を見てみるべきです。</p>
<h2 id="Flavors_of_SVG" name="Flavors_of_SVG">SVG の種類</h2>
<p>2003 年に勧告が成立して以降、最新の "完全な" SVG バージョンは 1.1 です。これは SVG 1.0 の上に構築したものですが、実装を容易にするためにモジュール化が進みました。SVG 1.1 の第 2 版が現在策定中です。"完全な" SVG 1.2 は、次の SVG のメジャーリリースを意味していました。それは将来の SVG 2.0 のために破棄され、そして SVG 2.0 は現在鋭意開発中であり構成要素をいくつかの緩く結合した仕様に分割する、CSS 3 と似た手法をとっています。</p>
<p>完全な SVG 勧告からは離れて、W3C のワーキンググループは 2003 年に SVG Tiny と SVG Basic を導入しました。これら 2 つのプロファイルは、主にモバイルデバイスを対象にしています。SVG Tiny は、性能が低い小型デバイス向けに図形要素をもたらすでしょう。SVG Basic は完全な SVG が持つ機能の多くを提供しますが、実装が難しい機能や描画負荷の高い機能 (アニメーションなど) は含みません。2008年に、SVG Tiny 1.2 が W3C 勧告になりました。</p>
<p>SVG 印刷の仕様の計画があり、これは複数のページや高度なカラーマネージメントのサポートを追加する予定でした。この作業は休止しています。</p>
<div>
  {{PreviousNext("SVG/Tutorial", "SVG/Tutorial/Getting Started")}}</div>
