---
title: MDN Web Docs に掲載するものであるかどうか
slug: MDN/Guidelines/Does_this_belong_on_MDN
tags:
  - Guide
  - Guidelines
  - MDN Meta
translation_of: MDN/Guidelines/Does_this_belong_on_MDN
---
{{MDNSidebar}}

この記事では、ある主題やコンテンツの種類を MDN Web Docs に載せるべきかどうかを決定する方法について説明します。また、詳細ではありませんが、コンテンツを配置する可能性のある他の場所についても検討します。

## 問い

何らかの文書をまとめる準備をしている場合、その情報を MDN Web Docs に載せるどうか考えるかもしれません。加えて、ソースコード内の文書を維持したり、その文書を [Mozilla wiki](https://wiki.mozilla.org/Main_Page) や、git リポジトリー内の readme ファイルに置いたりすることを検討しているかもしれません。この記事の目的は、あなたのコンテンツが、これらのオプションのどれにふさわしいのかを決めるのに役立つことです。

文書を MDN に載せるかどうかについて、主に 2 つ考慮する点があります。

- 文書の主題 (何についてのものか)
- 文書の性質 (これはどんな種類の文書か)

MDN への寄稿は、すべて特定のオープンソースライセンスに該当することに注意してください。これは [MDN について](/ja/docs/MDN/About)ページに[詳細に記されています](/ja/docs/MDN/About#copyrights_and_licenses)。

> **Note:** MDN Web Docs を利用したり、投稿したりする際には、Mozilla の[ウェブサイトおよびコミュニケーション利用規約](https://www.mozilla.org/en-US/about/legal/terms/mozilla/)が適用されることに注意してください。この文書を確認して、 Mozilla のサイトで投稿できること、できないことを確認してください。

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

- [アクセシビリティ](/ja/docs/Web/Accessibility)
- [AJAX](/ja/docs/Web/Guide/AJAX)
- [ウェブグラフィック](/ja/docs/Web/Guide/Graphics)
- [プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)
- [ウェブベースのゲーム](/ja/docs/Games)

> **Note:** MDN は、ウェブに公開されていて、特に一般的に使われている場合には、一部の標準外の機能をカバーしています。例えば、 WebKit 固有の CSS プロパティのドキュメントがあります。 MDN は、ウェブ開発者にとって十分に有用であると考えられる場合には、ウェブ標準以外の技術もカバーしています。[ウェブ関連技術](/ja/docs/Related)の章を参照してください。

## MDN Web Docs に掲載しない主題

一般医、オープンなウェブ標準ではないものはすべて、MDN に掲載するものではありません。以下にもっと詳細に示します。

### Mozilla 製品

MDN Web Docs は、 Mozilla 製品の文書を保持する場所ではなくなりました。

特に、以下の製品については、独自の文書化サイトを持っています。

- [Firefox 開発者ツール](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Firefox の構築と構成](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html)
- [SpiderMonkey](https://firefox-source-docs.mozilla.org/js/)

### それ以外

その他の MDN Web Docs のトピックとして適切ではないものの例です。

- ウェブに公開されていない技術で、 Mozilla 以外のブラウザーに固有のもの
- ウェブにも Mozilla 製品にも関係しない技術
- エンドユーザー向け文書。 Mozilla 製品では、こうした文書は [Mozilla サポートサイト](https://support.mozilla.org)に載っています。

## MDN に掲載する文書の種類

一般に、 MDN は*プロダクト*のドキュメントであり、*プロジェクト*や*プロセス*のドキュメントではありません（[MDN 自体について](/ja/docs/MDN)の記事を除く）。そのため、もしドキュメントが「どのように使うか」や「どのように動作するか」（「どの」とは下記で記述されている特定のカテゴリのことです）なら MDN に掲載しましょう。しかし、「誰が開発したか」や「開発プランについて」などは MDN にふさわしくありません。 Mozilla 傘下で開発されているものの場合は [Mozilla プロジェクトウィキ](https://wiki.mozilla.org/Main_Page)に掲載するといいでしょう。

MDN に掲載するのにふさわしく*ない*種類の文書の例をいくつか挙げます。

- 計画書
- 設計書
- プロジェクト提案書
- 仕様書や標準
- プロモーション素材、広告、個人情報
