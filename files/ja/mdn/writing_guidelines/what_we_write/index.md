---
title: MDN Web Docs に掲載するものであるかどうか
slug: MDN/Writing_guidelines/What_we_write
tags:
  - Guide
  - Guidelines
  - MDN Meta
translation_of: MDN/Guidelines/Does_this_belong_on_MDN
original_slug: MDN/Guidelines/Does_this_belong_on_MDN
---
{{MDNSidebar}}

この記事では、ある主題やコンテンツの種類を MDN Web Docs に載せるべきかどうかを決定する方法について説明します。また、詳細ではありませんが、コンテンツを配置する可能性のある他の場所についても検討します。

## 問い

何らかの文書をまとめる準備をしている場合、その情報を MDN Web Docs に載せるどうか考えるかもしれません。加えて、ソースコード内の文書を維持したり、その文書を [Mozilla wiki](https://wiki.mozilla.org/) や、git リポジトリー内の readme ファイルに置いたりすることを検討しているかもしれません。この記事の目的は、あなたのコンテンツが、これらのオプションのどれにふさわしいのかを決めるのに役立つことです。

文書を MDN に載せるかどうかについて、主に 2 つ考慮する点があります。

- 文書の主題 (何についてのものか)
- 文書の性質 (これはどんな種類の文書か)

MDN への寄稿は、すべて特定のオープンソースライセンスに該当することに注意してください。これは [MDN について](/ja/docs/MDN/About)ページに[詳細に記されています](/ja/docs/MDN/About#copyrights_and_licenses)。

> **Note:** **注**: MDN Web Docs を利用したり、投稿したりする際には、Mozilla の[ウェブサイトおよびコミュニケーション利用規約](https://www.mozilla.org/en-US/about/legal/terms/mozilla/)が適用されることに注意してください。この文書を確認して、 Mozilla のサイトで投稿できること、できないことを確認してください。

## どのようなトピックが MDN Web Docs に載るのか

一般的には、オープンなウェブ向きの技術であれば、MDN 上で文書化します。これは、現在および近い将来にサイトやアプリケーションを作成するウェブ開発者が使用できる機能を意味します。複数のブラウザーで実装されていて、標準として受け入れられているか、標準化に向けて進んでいるものであれば、そうですね。もしそれがまだ非常に実験的で、複数のブラウザーで実装されておらず、変更される可能性がある場合、それでも載せるのに適してはいますが、ライターのチームが取り組むべき優先事項とは見なされないかもしれません。

主にフロントエンドのウェブ技術に重点を置いています。

- [HTML](/ja/docs/Web/HTML)
- [CSS](/ja/docs/Web/CSS)
- [JavaScript](/ja/docs/Web/JavaScript)
- [SVG](/ja/docs/Web/SVG)
- [Web APIs](/ja/docs/Web/API)
- [WebGL](/ja/docs/Web/API/WebGL_API)
- など

> **Note:** バックエンドテクノロジーには、別の文書化の場所があり、 MDN はこれにとって代わるつもりはありませんが、[いくつかの例外はあります](/ja/docs/Learn/Server-side)。

また、複数の技術にまたがるが、以下のようなウェブ開発に関連したトピックも歓迎します。

- [Accessibility](/ja/docs/Web/Accessibility)
- [AJAX](/ja/docs/Web/Guide/AJAX)
- [ウェブグラフィック](/ja/docs/Web/Guide/Graphics)
- [プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)
- [ウェブベースのゲーム](/ja/docs/Games)

> **Note:** **注:** MDN は、ウェブに公開されていて、特に一般的に使われている場合には、一部の標準外の機能をカバーしています。例えば、WebKit 固有の CSS プロパティのドキュメントがあります。MDN は、ウェブ開発者にとって十分に有用であると考えられる場合には、ウェブ標準以外の技術もカバーしています。[ウェブ関連技術](/ja/docs/Related)のセクションを参照してください。

## MDN Web Docs に掲載しない主題

一般医、オープンなウェブ標準ではないものはすべて、MDN に掲載するものではありません。以下にもっと具体的に示します。

### Mozilla 製品

このカテゴリーの文書には、 Mozilla 製品に対して開発者として作業する方法と、これらのオープンソースプロジェクトに貢献する方法との、両方があります。

MDN には Mozilla 製品の文書が大量にありますが、新規コンテンツ開発の重点はオープンウェブに置いています。MDN に Mozilla 製品の文書を新規作成することは推奨されません。Mozilla 製品 (やそうなるかもしれない製品) の作業を進めている場合は、[MDN スタッフチーム](https://wiki.mozilla.org/Engagement/MDN_Durable_Team)のメンバーに話して、その製品の文書化の道を議論してください。また、下記の[他の場所に文書化する場合](#cases_for_documenting_elsewhere)も見てください。

- [Firefox ブラウザー](/ja/docs/Mozilla/Firefox)

  - [Firefox 開発ツール](/ja/docs/Tools)
  - [アドオン](/ja/docs/Mozilla/Add-ons)
  - [Firefox の構築と構成](/ja/docs/Mozilla/Developer_guide/Build_Instructions)
  - など

- [Mozilla プラットフォーム](/ja/docs/Mozilla)

  - [Gecko](/ja/docs/Mozilla/Gecko)
  - [SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey)
  - など

### それ以外

その他の MDN Web Docs のトピックとして適切ではないものの例です。

- ウェブに公開されていない技術で、Mozilla 以外のブラウザーに固有のもの
- ウェブにも Mozilla 製品にも関係しない技術
- エンドユーザー向け文書。Mozilla 製品では、こうした文書は [Mozilla サポートサイト](https://support.mozilla.org)に載っています。

## MDN に掲載する文書の種類

一般に、MDN は*プロダクト*のドキュメントであり、*プロジェクト*や*プロセス*のドキュメントではありません ([MDN 自体について](/ja/docs/MDN)を除く)。そのため、もしドキュメントが「どのように使うか」や「どのように動作するか」 (「どの」とは下記で記述されている特定のカテゴリのことです) なら MDN に掲載しましょう。しかし、「誰が開発したか」や「開発プランについて」などは MDN にふさわしくありません。Mozilla 傘下で開発されているものの場合は [Mozilla project wiki](https://wiki.mozilla.org/Main_Page) に掲載するといいでしょう。

MDN に掲載するのにふさわしく*ない*種類の文書の例をいくつか挙げます。

- 計画書
- 設計書
- プロジェクト提案書
- 仕様書や標準
- プロモーション素材、広告、[個人情報](#about_your_profile)
