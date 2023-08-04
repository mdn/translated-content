---
title: MDN のあゆみ
slug: MDN/At_ten/History_of_MDN
l10n:
  sourceCommit: 356b0655db61fafedd864b54d39e04529b52fff4
---

このトピックでは、MDN プロジェクトへの貢献者たちが、[developer.mozilla.org](/) の過去 10 年間と、来たる 10 年間を見ていきます。異なる Wiki ソフトウェア間の移行やドキュメンテーションコミュニティがどうやって育ってきたのか、またいくつかのこのサイトの歴史におけるハイライトについて取り上げます。また現在の課題や今年の MDN コミュニティの取り組みについても語ります。

<div id="audio"><pre class="brush: html hidden">&#x3C;audio controls="controls">
  あなたのブラウザーにはオーディオプレイヤーが内蔵されていないようです。音声ファイルはここから取得して再生できます。 https://videos.cdn.mozilla.net/uploads/mdn/MDN10/MDN_RoundTable.mp3
  &#x3C;source src="https://videos.cdn.mozilla.net/uploads/mdn/MDN10/MDN_RoundTable.mp3" type="audio/mp3">
&#x3C;/audio>
</pre><pre class="brush: css hidden">body{margin-top:8px;}
</pre></div>

{{ EmbedLiveSample('audio', '100%', '70px', '', '', 'no-buttons') }}

![The Berlin Office](11073502_781006205281080_8135317797319228200_o-600x400.jpg)

[2015 Berlin "Hack on MDN"](https://blog.mozilla.org/community/2015/04/17/a-highly-productive-hack-on-mdn-weekend-in-berlin/) でトークを録音しました。

## トピック

ここでは、議論された内容の概要を、タイムスタンプや補足説明とともに紹介します。

### MDN とは？誰のためのサイト？<br>オープンウェブコミュニティのための場所

_0:00:00 - 0:07:15_

MDN は有益なウェブテクノロジーの情報を提供し、オープンなウェブコミュニティで学んだり、共有したり、教えたりすることを助けます。 MDN では、あなたも一緒になってあなた自身のため、また他者のために何かを作りあげることになります。

MDN はまた、Gecko や Firefox をハックする人々、アドオン開発者、 Firefox OS 貢献者などの Mozilla に携わる技術者のための場所でもあります。

### MDN の歴史<br>Wiki より前の時代 – Netscape DevEdge

_0:07:15 - 0:08:17_

古くは、いくつかの MDN ドキュメントの基礎を形作ることになった Netscape 社の _DevEdge_ というものがありました。その頃の様子は [archive.org](https://web.archive.org/web/20020819120942/http://devedge.netscape.com/) で見ることができます。

[![Netscape DevEdge](devedge.png)](https://web.archive.org/web/20020819120942/http://devedge.netscape.com/)

2004 年 10 月 12 日、この人気のあった開発者向けのウェブサイトは Netscape の親会社、AOL によって閉じられました。わずか数か月後の 2005 年 2 月、[Mitchell Baker](https://blog.lizardwrangler.com/) は Mozilla が元 Netscape DevEdge リソースベースの新しいドキュメントを投稿したり、修正したり、作成することを許可する AOL との契約とともに [DevEdge を助け出す](https://blog.lizardwrangler.com/2005/02/23/devmo-and-devedge-updates/)ことに成功しました。つまり、1998 年に Mozilla のソースについて起きたことが、ついに Netscape の開発者ドキュメントについても起きたのです。**オープンソースになったということです！**

Deb Richardson が Mozilla Foundation に技術編集者として加わり、新しい _DevMo_ プロジェクト ── コミュニティ主体の開発者ドキュメントのプロジェクトをリードしました。

### MediaWiki 最初の Wiki エンジン

_0:08:17 - 0:14:55_

MediaWiki を新しいプロジェクトのプラットフォームとして、Mozilla の開発者文書は 2005 年 7 月より誰でも編集できるようになりました。Mozilla の新しい協同的な要素が打ち立てられ、それ以来 "いいもの" を作ることを助ける人や知見を共有する人は誰でも歓迎しています。技術文書を他の言語に翻訳する新しい国際的なコミュニティが成長し始めました。

[![MDC MediaWiki](mediawiki.png)](https://web.archive.org/web/20051226031957/https://developer.mozilla.org/en/docs/Main_Page)

### DekiWiki<br>2 つ目の Wiki エンジン

_0:14:55 - 0:26:08_

2008 年 8 月、Mozilla Developer Center は技術文書のためのパワフルで新しいコンテンツ管理システム (CMS) であり、Wiki システムでもある [MindTouch DekiWiki](https://sourceforge.net/projects/dekiwiki/) に乗り換えました。この乗り換えはコミュニティ内でとても大きい議論が巻き起こりました。MediaWiki は 2005 年から使われており、その周辺にツールもビルドされてきたからです。

[![MDC DekiWiki](screenshot_2018-07-24_16.06.55.png)](https://web.archive.org/web/20080907231611/https://developer.mozilla.org/en)

### Kuma<br>3 つ目の、そして現行の Wiki エンジン

_0:26:08 - 0:31:50_
_0:43:52 - 0:51:35_

[Kuma](https://github.com/mdn/kuma) は 2011 年諸島頃に [Kitsune](https://github.com/mozilla/kitsune) からフォークされ、2012 年 8 月 3 日に立ち上がりました。 Django をベースに Mozilla が構築した Wiki プラットフォームで Node.js を使った [KumaScript](/ja/docs/MDN/Tools/KumaScript) マクロシステムも付随してます。

コードは GitHub 上にあったので、コミュニティは、 MDN の CMS にも貢献し始めました。今後、"MDN のハック" には文書を書くことと Kuma のコーディングの両方が含まれることになるでしょう。

[![MDN KUMA](kuma.png)](https://web.archive.org/web/20121003233220/https://developer.mozilla.org/en-US/)

### MDN の再設計<br>新しいデザインと Kuma

_0:31:50 - 0:32:22_
_0:51:35 - 0:58:05_

MDN の再設計はビッグプロジェクトでした。 [Sean Martell](https://twitter.com/mart3ll) が新しい MDN の VI (visual identity; 法人以外のロゴのこと) をデザインしました。次には、3000 人の MDNer のベータユーザーグループと共に数か月かけた反復的プロセスでした。新しい見た目は "ワッフルフラグ" (MDN の機能フラグシステム) に隠れています。[David Walsh](https://twitter.com/davidwalshblog/) にも大きく感謝します。彼は全体の再デザインに挑戦して、MDN にふさわしいフロントエンドデザインをもたらしました。

![Waffle flag](waffle-flag.jpg)

### Openウェブ文書の周りのコミュニティ<br>コミュニティが動かす、特定のブラウザーに限らないオープンなウェブのためのドキュメンテーション

_0:32:22 - 0:36:55_

2010 年代に、特に[コミュニティメンバーやテクニカルライターがパリに集まった](https://hacks.mozilla.org/2010/10/web-standards-doc-sprint-finis/)時、MDN の目標は 「Firefox のすべてのドキュメントを書こう！」から「ウェブのドキュメントを書こう！」に確実にシフトしました。ドキュメントは整理され、数年かけて再編成され MDN のオープンウェブドキュメントは 特定のブラウザーにとらわれないものになりました。これは、ウェブに関わる開発をするあらゆる人々の手助けとなり、そして私たちのコンテンツの中で、もっとも広く使われるものとなりました。

いつも、いろいろなブラウザーベンダーが MDN を形作る手助けをしてくれています。このブラウザー間のコラボレーションは非常に成功していて、MDN の読者たちに高く評価されています。

## 翻訳コミュニティ<br>MDN はグローバルな利用者に向けて数々の言語に翻訳されています

_0:36:55 - 0:43:52_

ローカライゼーションは Mozilla コミュニティの大きなパートです。これはほぼすべてのプロジェクトや製品で当てはまります。Kuma を使っている MDN も翻訳しやすく、私達の [L10n コミュニティ](/ja/docs/MDN/Contribute/Localize)のニーズに適しています。W3C の仕様や他のウェブの機能を記述しているリソースには直接的な目標はありません。そして仕様書を複数の言語で提供するコミュニティを持っています。特に初心者にとって、MDN はウェブの技術を探求する最初のステップであり、すべての人々にとってそうなることが私達の目標です。MDN は広いユーザーを持ち、英語を母語としない人も対象です。これは世界中の人々から高く評価されています。

## 学習領域

_0:58:05 - 1:02:46_

MDN の [学習領域](/ja/docs/Learn) はウェブの基礎スキルを教える新しい取り組みです。 これまでの 10 年を通して、MDN はたくさんの応用的な記事と貴重な情報をエキスパートの為に提供し続けてきました。このプロジェクトでは初心者に焦点を当てた記事を書き、知識ギャップを埋めることを目標としています。

## MDN の未来 20 周年を祝う時 MDN はどうなっているだろうか？

_1:02:46 - 1:11:39_

MDNに関わる誰もが、ウェブがオープンでアクセシビリティに富んでいることを本当に大切にしています。だからこそ、ローカライゼーションチームやすべての人々が貢献してくれているのです。MDNは、ウェブをあるべき姿に保つためのキープレイヤーであり続けたいと願っています。

この未来を担う一つの大きな部分は、学習のための資源でしょう。次の 10 年を迎え、そこにはもっとたくさんのウェブ開発者がいるでしょう。

私達の仕事のもうひとつの重要な部分は、私達がすでに持っているコンテンツのメンテナンスと情報の更新であり、いつでもウェブ開発者達に適切なコンテンツを提供できるようにすることです。

今変わろうとしていること、そして変わるであろうことは、どのように情報の消費がなされるかということです。今日ではみんなが情報を求めてドキュメンテーション (MDN に限らず) を検索し、探しています。将来、MDN ドキュメントは直接コードエディターに、 Firefox Developer Tool に、そして他の多くの開発者ツールやサービスに配信されるかもしれません。

## スピーカー

この人たちは、思い出や想いを、現れる順に語ってくれています。

### Justin Crawford<br>MDN プロダクトマネージャー

![Justin Crawford](hoosteeno.jpg)

Justin 氏はこのトピックの進行役を務めます。ものを作り出す素材として、コード、言葉、自転車の部品、材木を用います。Twitter アカウントは [@hoosteeno](https://twitter.com/hoosteeno)。

### Eric "Sheppy" Shepherd<br>MDN テクニカルライター

![Eric Shepherd](a2sheppy.png)

Sheppy 氏は Mozilla の為に 2006 年から執筆を始め、MDC と MDN に結実するまでに長年の歴史（とクレイジーなアイデア）を刻んでいます。 Twitter では [@sheppy](https://twitter.com/sheppy)。

### Jérémie Patonnier<br>MDN テクニカルライター

![Jérémie Patonnier](jeremiepat.jpg)

Jérémie 氏は長年 Mozilla Developer Network の貢献者として活動を続け、2000 年からウェブのプロフェッショナルになりました。彼はウェブ標準の擁護者であり、Web 技術のドキュメントを書き続け、すべての人々に届くようにと願っています。Twitter では [@JeremiePat](https://twitter.com/JeremiePat)

### Janet Swisher<br>MDN コミュニティマネージャー

![Janet Swisher](jmswisher.jpg)

Janet 氏は Mozilla Developer Network の Mozilla Community Manager です。彼女は Mozilla に加わったのは 2010 年、OSS への関与は 2004 年から、技術的なコミュニケーションには 20 世紀から関わっています。Twitter では [@jmswisher](https://twitter.com/jmswisher) 。

### Stormy Peters

![Stormy Peters](yaacgvya.jpg)

Stormy は Twitter では [@storming](https://twitter.com/storming) です。

### Ali Spivak<br>すてきな MDN ネコの飼育者

![Ali Spivak](iyqi3qpv.jpg)

Ali Spivak は Mozilla Developer Network のコンテンツとコミュニティを管理し、ウェブがもっとすてきになるのを手助けする方法を考えます。彼女は自由でオープンなウェブを維持することに情熱的であり、そして、2012 年に Mozilla に参加した時にオープンソースに飛び込んで以来、Mozilla での開発者コミュニティの構築と参加に注力してきました。Twitter では [@alispivak](https://twitter.com/alispivak)。

### Jean-Yves Perrier<br>MDN テクニカルライター

![Jean-Yves Perrier](teoli2003.png)

Jean-Yves 氏は 2010 年から MDN のテクニカルライターであり、2011 年の終わりに Mozilla に常勤として加わりました。彼はオープンなウェブへの情熱と 15 年の C++ の知識とを持っています。彼はスイス人ですがイギリスのロンドンに住んでいます。彼の[エルデシュ数](https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%AB%E3%83%87%E3%82%B7%E3%83%A5%E6%95%B0)は 5 です。Twitter では [@Teoli2003](https://twitter.com/Teoli2003) です。

### Florian Scholz<br>MDN テクニカルライター

![Florian Scholz](elchi3.jpg)

Florian 氏は Mozilla が焦点を当てているオープンなウェブ技術のテクニカルライターです。彼は Wiki の小人で、それが花であるかのようにドキュメンテーションをガーデニングします。そして彼はコミュニティと一緒に、ウェブについての文書化し、誰からもアクセスできるようにするという目標に向けて作業することが好きです。 Florian 氏はオープンソースへの情熱を持っています。彼はドイツのブレーメンに住んでいます。 [@floscholz](https://twitter.com/floscholz) にてツイートしています。

### David Walsh<br>MDN ウェブ開発者

![David Walsh](darkwing.png)

Mozilla シニアウェブ開発者、フロントエンドエンジニア、 MooTools コア開発者、Javascript マニア、CSS の何でも屋、PHP ハッカーで、ウェブとオープンソースを愛する人。David は Twitter では [@davidwalshblog](https://twitter.com/davidwalshblog)。

### Luke Crouch<br>MDN ウェブ開発者

![Luke Crouch](groovecoder.png)

Luke Crouch は自家醸造者で、Mozilla のウェブ開発者であり、サッカーファンです。彼は 1996 年からウェブを開発し続けていて 2004 年から Firefox を使っています。2006 年からオープンソースに貢献し始めて、MDN の最初のスタッフとして 2010 年に Mozilla に入社しました。Luke 氏は [@groovecoder](https://twitter.com/groovecoder) で Twitter を利用しています。

### Julien (別名 Sphinx)<br>MDN フランス語 ローカライズ

![Julien](ensemble.png)

Julien 氏は何か月もの間、夜と週末を費やし JavaScript の記事をフランス語に翻訳してきました。彼は開発者ではありませんが、IT の基礎を学んでおり、新しい技術について学びたいと思っています。彼はテレビを見る代わりに MDN に貢献しているのです。

### Biraj Karmakar<br>Mozilla リポジトリーメンター

![Biraj Karmakar](birajkarmakar.png)

Biraj はオープンソースの貢献者であり、 FOSS 運動とローカライゼーションに関心を持っています。

## 偉大なる貢献者たち

他にも多くの人々が MDN ですばらしい働きをしてきました。

- Les Orchard
- John Karahalis
- David Walsh
- Jannis Leidel
- Stephanie Hobson
- James Bennett
- Isac Lagerblad
- Piotrek Koszuliński
- Craig Cook
- Rob Hudson
- John Whitlock
- ...
  ほか、たくさんの [Kuma への貢献者たち](https://github.com/mdn/kuma/graphs/contributors)。

<!---->

- Chris Mills
- Will Bamberg
- David Bruant
- Thierry Régagnon
- ethertank
- Saurabh Nair
- Deb Richardson
- Sebastian Zartner
- Tooru Fujisawa
- Karen Scarfone
- Niklas Barning
- ...
  ほか数百名の Wiki 執筆者たち。
