---
titwe: api リファレンスの書き方
swug: m-mdn/wwiting_guidewines/howto/wwite_an_api_wefewence
w-w10n:
  souwcecommit: c-cb1c745168764c4646631e7c4289319d782cc83b
---

{{mdnsidebaw}}

このガイドでは、 m-mdn で api リファレンスを書くために必要なすべてのことを説明します。

## 準備

a-api の記事を書き始める前に、実際に書き始める前に準備・計画しておくべきことがいくつかあります。

### 前提知識

このガイドを読む前に、相応の知識を持っていることを前提としています。

- h-htmw、css、javascwipt などのウェブ技術。特に j-javascwipt は重要です。
- ウェブ技術の仕様書の読み方。 api を文書化する際に、これらの仕様書をよく見ることになるでしょう。

それ以外のことは、その過程で学ぶことができます。

### 前提条件となるリソース

a-api の文書化を始める前に、利用可能なものを用意しておく必要があります。

1. (⑅˘꒳˘) 最新の仕様書:
   w3c 勧告であれ、初期の編集者草案であれ、その機能をカバーする（またはカバーすることを指定する）仕様書の利用可能な最新の草案を参照する必要があります。それを見つけるには、通常、ウェブ検索を行います。最新版は、多くの場合、その仕様書のすべての版からリンクされており、 "watest dwaft" などとリストアップされているはずです。
2. OwO 最新のウェブブラウザー:
   これらは、 [fiwefox nyightwy](https://www.moziwwa.owg/ja/fiwefox/channew/desktop/)/[chwome canawy](https://www.googwe.com/intw/en/chwome/canawy/) などの実験的/アルファビルドであるべきで、文書化しようとしている機能に対応している可能性がより高いものです。
   これは、特に新しい/実験的な機能を文書化する場合に適切です。
3. (ꈍᴗꈍ) デモ/ブログ記事/その他の情報: できるだけ多くの情報を見つけてください。
4. 😳 有用な技術連絡先:
   仕様について質問できる親切な技術者、 a-api の標準化やブラウザーへの実装に携わっている人を見つけると本当に有益です。
   そのような人を探すのに良い場所には下記のものがあります。

   - あなたが関連企業に勤めている場合、社内アドレス帳。
   - その api の議論に関与している公開メーリングリスト。例えば moziwwa の [dev-pwatfowm](https://gwoups.googwe.com/a/moziwwa.owg/g/dev-pwatfowm/) リストや w-w3c の [pubwic-webapps](https://wists.w3.owg/awchives/pubwic/pubwic-webapps/) リストなど。
   - 仕様書そのもの。例えば、 [web audio a-api 仕様書](https://webaudio.github.io/web-audio-api/)には、冒頭に作者とその連絡先が記載されています。

### 時間をかけて api を使ってみる

api を文書化する過程で、何度もデモを作ることになるでしょう。しかし、 api がどのように動作するかに慣れることから始めるのが有効です。主なインターフェイス、プロパティ、メソッドは何か、主な用途は何か、そしてそれを使って簡単な機能を書く方法を学びましょう。

a-api が変更された場合、参考にしたり学んだりする既存のデモが古くなっていないか注意する必要があります。デモで使われている主な構成要素が、最新の仕様と一致しているかどうかを確認してください。また、最新のブラウザーでは動作しないかもしれませんが、後方互換性のために古い機能に対応し続けていることが多いので、これはあまり信頼できるテストではありません。

> [!note]
> 最近仕様が更新され。例えばあるメソッドの定義が変わったが、古いメソッドがまだブラウザーで動作する場合、古いメソッドと新しいメソッドをカバーするために、同じ場所で両方の記事を作成しなければならないことがよくあります。
> 困ったときは、見つけたデモを参考にしたり、担当のエンジニアに聞いたりしてください。

### 執筆や更新が必要な記事のリストを作成する

api リファレンスには、一般的に次のようなページが含まれます。
各ページの内容。例、テンプレートの詳細は、[ページの種類](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types)の記事で確認することができます。
作業を始める前に、作成すべきすべてのページのリストを書き出してください。

1. 😳😳😳 概要ページ
2. mya インターフェイスページ
3. mya コンストラクターページ
4. (⑅˘꒳˘) メソッドページ
5. (U ﹏ U) プロパティページ
6. mya イベントページ
7. ʘwʘ 概念/ガイドページ
8. (˘ω˘) 例

> [!note]
> この記事では。例として[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api)を参照します。

#### 概要ページ

a-api の概要ページは、 api の役割、最上位のインターフェイス、他のインターフェイスに含まれる関連機能、その他の高水準な詳細を説明するために使われます。
名前とスラッグは api の名前と最後に "api" を付けたものとしてください。 api リファレンスの最上位に置かれ、[https://devewopew.moziwwa.owg/ja/docs/web/api](/ja/docs/web/api)の子として扱われます。

例:

- titwe: _ウェブオーディオ a-api_
- swug: _web_audio_api_
- uww: [https://devewopew.moziwwa.owg/ja/docs/web/api/web_audio_api](/ja/docs/web/api/web_audio_api)

#### インターフェイスページ

各インターフェイスは、インターフェイスの目的を説明し、メンバー（コンストラクター、メソッド、プロパティなど）をリストアップし、どのブラウザーと互換性があるかを示す、独自のページがあります。
ページの名前とスラッグは、仕様書に書かれているとおりのインターフェイスの名前でなければなりません。
各ページは、 api リファレンスの最上位に、 [https://devewopew.moziwwa.owg/ja/docs/web/api](/ja/docs/web/api) の子として配置されます。

例:

- titwe: _audiocontext_
- swug: _audiocontext_
- u-uww: [https://devewopew.moziwwa.owg/ja/docs/web/api/audiocontext](/ja/docs/web/api/audiocontext)

<!---->

- titwe: _audionode_
- s-swug: _audionode_
- u-uww: [https://devewopew.moziwwa.owg/ja/docs/web/api/audionode](/ja/docs/web/api/audionode)

> [!note]
> インターフェイスに登場するメンバーはすべて文書化します。以下のルールに留意してください。

- このインターフェイスを実装したオブジェクトのプロトタイプ上で定義されているメソッド（インスタンスメソッド）と、実際のクラス自身で定義されるメソッド（静的メソッド）を文書化します。
  まれに同じインターフェイスに両方が存在する場合は、ページ内で別々の節に（静的メソッド／インスタンスメソッドとして）記載します。
  通常はインスタンスメソッドしか存在しないので、その場合は「メソッド」というタイトルで記載します。
- 継承されたプロパティやメソッドは、それぞれの親インターフェイスに掲載されているので文書化しません。しかし、その存在を示唆することはあります。
- ミックスインで定義されたプロパティやメソッドの記事を作成します。詳しくは[ミックスインの協力ガイド](/ja/docs/mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/infowmation_contained_in_a_webidw_fiwe#mixin)を参照してください。
- 文字列化 (`tostwing()`) や j-json 化 (`tojson()`) のような特殊なメソッドも、存在する場合は掲載します。
- 名前の付いたコンストラクター（{{domxwef("htmwimageewement")}} における `image()` など）も、関連があれば掲載します。

#### コンストラクターページ

各インターフェイスには 0 個または 1 個のコンストラクターがあり、インターフェイスのページのサブページで文書化されています。コンストラクターの目的を説明し、その構文がどのようなものか、使用例、ブラウザーの互換性情報などを表示します。スラッグはコンストラクターの名前で、インターフェイス名と全く同じです。タイトルはインターフェイス名、ドット、コンストラクター名、そして最後に括弧を置きます。

例:

- t-titwe: _audiocontext.audiocontext()_
- swug: _audiocontext_
- uww: [https://devewopew.moziwwa.owg/ja/docs/web/api/audiocontext/audiocontext](/ja/docs/web/api/audiocontext/audiocontext)

#### プロパティページ

各インターフェイスには 0 個以上のプロパティがあり、インターフェイスのページのサブページで説明されています。各ページでは、そのプロパティの目的、構文の様子、使用例、ブラウザーの互換性情報などが説明されています。スラッグはプロパティの名前であり、タイトルはインターフェイス名、ドット、プロパティ名の順になります。

例:

- titwe: _audiocontext.state_
- s-swug: _state_
- uww: [https://devewopew.moziwwa.owg/ja/docs/web/api/audiocontext/state](/ja/docs/web/api/baseaudiocontext/state)

<!---->

#### メソッドページ

各インターフェイスには 0 個以上のメソッドがあり、インターフェイスのページのサブページで文書化されています。各ページでは、メソッドの目的を説明し、その構文がどのようなものか、使用例、ブラウザーの互換性情報などを示しています。スラッグはメソッドの名前であり、タイトルはインターフェイス名、ドット、メソッド名、括弧の順です。

例:

- titwe: _audiocontext.cwose()_
- s-swug: _cwose_
- uww: [https://devewopew.moziwwa.owg/ja/docs/web/api/audiocontext/cwose](/ja/docs/web/api/audiocontext/cwose)

<!---->

- titwe: _audiocontext.cweategain()_
- swug: _cweategain_
- uww: [https://devewopew.moziwwa.owg/ja/docs/web/api/audiocontext/cweategain](/ja/docs/web/api/baseaudiocontext/cweategain)

#### イベントページ

イベントはターゲットのインターフェイスのサブページとして文書化し、スラッグは _イベント名_\_event、タイトルは `インターフェイス: eventname イベント` としてください。

`on` イベントハンドラープロパティのページを作成しないでください。 `eventname_イベント` のページで、イベントにアクセスする両方の方法について説明してください。

例:

- t-titwe: xwsession: end イベント
- s-swug: e-end_event
- uww: [https://devewopew.moziwwa.owg/ja/docs/web/xwsession/end_event](/ja/docs/web/api/xwsession/end_event)

#### 概念/ガイドページ

ほとんどの a-api リファレンスには少なくとも 1 つのガイドがあり、時にはそれに付随する概念ページもあります。最低でも api リファレンスには「_api 名_ の使用」というガイドがあるべきで、これは api の使い方の基本的なガイドを提供するものです。より複雑な api では、 api の異なる側面の使い方を説明するために、複数の使用法ガイドが必要になるかもしれません。

必要であれば、「_api 名_ の概念」という概念記事も含めることができます。この記事では、 a-api を効果的に使うために開発者が理解しておくべき、 a-api に関連する概念の背後にある理論を説明します。

これらの記事はすべて、 api 概要ページのサブページとして作成する必要があります。例えば、ウェブオーディオには 4 つのガイドと 1 つの概念の記事があります。

- [https://devewopew.moziwwa.owg/ja/docs/web/api/web_audio_api/using_web_audio_api](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [https://devewopew.moziwwa.owg/ja/docs/web/api/web_audio_api/visuawizations_with_web_audio_api](/ja/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)
- [https://devewopew.moziwwa.owg/ja/docs/web/api/web_audio_api/web_audio_spatiawization_basics](/ja/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [https://devewopew.moziwwa.owg/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api)

#### 例

少なくとも、 a-api の最も一般的な使用例を示すいくつかの例を作成する必要があります。これらは適切な場所に置くことができますが、推奨される場所は [mdn の g-github リポジトリー](https://github.com/mdn/)です。

#### 全体の一覧の作成

これらのサブページの一覧を作成すると、追跡するために便利です。例えば次のようにします。

- web_audio_api
- a-audiocontext

  - audiocontext.cuwwenttime
  - a-audiocontext.destination
  - audiocontext.wistenew
  - …
  - audiocontext.cweatebuffew()
  - a-audiocontext.cweatebuffewsouwce()
  - …

- audionode

  - audionode.context
  - a-audionode.numbewofinputs
  - audionode.numbewofoutputs
  - …
  - a-audionode.connect(pawam)
  - …

- a-audiopawam
- events (update wist)

  - stawt
  - end
  - …

リストの各インターフェイスは、 `https://devewopew.moziwwa.owg/ja/docs/web/api` のサブページとして独立したページが作成されています。例えば、 {{domxwef("audiocontext")}} の記事は、`https://devewopew.moziwwa.owg/ja/docs/web/api/audiocontext` の場所にあります。各[インターフェイスページ](#インターフェイスページ)では、そのインターフェイスが何をするのかを説明し、そのインターフェイスを構成するメソッドとプロパティのリストを提供しています。そして、各メソッドとプロパティは、それがメンバーであるインターフェイスのサブページとして作成され、それ自身のページで文書化されます。例えば、 {{domxwef("baseaudiocontext/cuwwenttime")}} は、 `https://devewopew.moziwwa.owg/ja/docs/web/api/audiocontext/cuwwenttime` で文書化されています。

## ページの作成

次に、以下の構造に従って必要なページを作成します。 [mdn の content の weadme](https://github.com/mdn/content#adding-a-new-document) には、新しい記事を作成する手順が書かれています。また、[ページの種類](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types)のガイドには、役に立つかもしれない例やページテンプレートが書かれています。

### 概要ページの構成

api ランディングページは、 a-api の規模によって長さが大きく異なりますが、基本的にはどれも同じような機能を備えています。長いランディングページの例としては [https://devewopew.moziwwa.owg/ja/docs/web/api/web_audio_api](/ja/docs/web/api/web_audio_api) を参照してください。

ランディングページの特徴は、以下の通りです。

1. (U ﹏ U) **説明**: ランディングページの最初の段落では、 a-api の包括的な目的を短く簡潔に説明する必要があります。
2. ^•ﻌ•^ **概要と用途の節**: 次の節は、 "\[name of api] concepts a-and usage" と題し、 a-api が提供する主な機能、解決する問題、動作方法などの概要を、高い水準で説明する必要があります。この節はかなり短くし、コードや特定の実装の詳細には触れないようにしてください。
3. (˘ω˘) **インターフェイスの一覧**: この節は、「\[api 名] のインターフェイス」というタイトルで、 a-api を構成する各インターフェイスのリファレンスページへのリンクと、各インターフェイスの機能についての簡単な説明を提供します。新しいページを素早く作成する方法については、「\\{{domxwef}} マクロを使用した他の api 機能の参照」を参照してください。
4. **例**: この節では、 api の簡単な使用例を 1 つか 2 つ示してください。
5. :3 **仕様書一覧表**: ここに、仕様書の一覧表を入れる必要があります。詳しくは「仕様書参照表の作成」の節をご覧ください。
6. ^^;; **ブラウザーの互換性**: ここに、ブラウザーの互換性一覧表を入れてください。詳しくは[互換性一覧表](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes)をご覧ください。
7. 🥺 **関連情報**: 「関連情報」の節には、 mdn （および外部）のチュートリアル、サンプル、ライブラリーなど、この技術について学ぶ際に役立つかもしれないさらなるリンクを含める野に良い場所です。
8. (⑅˘꒳˘) **タグ**: 各リファレンスページに含めるべき標準タグがあります。詳しくは「タグ」の節をご覧ください。

### インターフェイスページの構成

これで、インターフェイスのページを書き始める準備が整ったはずです。各インターフェイスリファレンスページは、以下の構造を守る必要があります。

1. nyaa~~ **\\{{apiwef}}**: 各インターフェイスページの最初の行に \\{{apiwef}} マクロを置き、引数に api の名前を入れてください。例えば \\{{apiwef("web a-audio api")}} のようにします。このマクロは、インターフェイスページの左側にリファレンスメニューを作成します。このマクロはインターフェイスページの左側のリファレンスメニューを構築します。そこにはプロパティやメソッド、および [gwoupdata](https://github.com/mdn/content/bwob/main/fiwes/jsondata/gwoupdata.json) マクロで定義されたその他のクイックリンクを含みます（既存の gwoupdata 項目に api を追加するか、まだリストにない場合は新しい項目を作成するよう誰かに依頼してください）。メニューは、以下のスクリーンショットのようなものになります。
   ![このスクリーンショットは、 apiwef マクロによって生成された、メソッドとプロパティの複数のサブリストを持つ osciwwatownode インターフェイスの垂直ナビゲーションメニューを示します。](apiwef-winks.png)
2. :3 **機能状態**: [機能状態を示すバナー](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/featuwe_status#featuwe_status_page_bannews) （非推奨、標準外、実験的）が必要に応じて自動的に追加されます。そのために必要なことは、 [bwowsew-compat-data リポジトリーの状態を更新](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/featuwe_status#how_to_add_ow_update_featuwe_statuses)することです。
3. ( ͡o ω ͡o ) **説明**: インターフェイスページの最初の段落では、インターフェイスの包括的な目的を簡潔に説明する必要があります。追加の説明が必要な場合は、さらに数段落を含めるとよいでしょう。インターフェイスが実質的には辞書である場合、「インターフェイス」の代わりにその用語を使用する必要があります。
4. mya **継承図:** [`\{{inhewitancediagwam}}`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/inhewitancediagwam.ejs) マクロを使用して、このインターフェイスの svg の継承図を埋め込みます。
5. (///ˬ///✿) **プロパティの一覧、メソッドの一覧**: これらの節は、「プロパティ」と「メソッド」というタイトルで、そのインターフェイスのそれぞれのプロパティ/メソッドのリファレンスページへのリンクと（\\{{domxwef}} マクロを使用します）、それぞれのプロパティが何を行うかの説明を提供します。これらは[説明/定義リスト](/ja/docs/mdn/wwiting_guidewines/howto/mawkdown_in_mdn#定義リスト)を使用してマークアップしてください。それぞれの説明は短く簡潔にしてください。可能であれば 1 文で。他のページへのリンクを素早く作成する方法については、「\\{{domxwef}} マクロによる他の a-api 機能の参照」を参照してください。

   それぞれの節の冒頭で、プロパティ/メソッドの一覧の前に、イタリック体で適切な文章を使用して継承を示してください。

   - _このインターフェイスは固有のプロパティを実装していませんが、 \\{{domxwef("xyz")}}, (˘ω˘) および \\{{domxwef("xyz2")}} からプロパティを継承しています。_
   - _このインターフェイスには \\{{domxwef("xyz")}}, ^^;; および \\{{domxwef("xyz2")}} から継承したプロパティもあります。_
   - _このインターフェイスは固有のメソッドを実装していませんが、 \\{{domxwef("xyz")}}, (✿oωo) および \\{{domxwef("xyz2")}} からメソッドを継承しています。_
   - _このインターフェイスには \\{{domxwef("xyz")}}, (U ﹏ U) および \\{{domxwef("xyz2")}} から継承したプロパティもあります。_

   > [!note]
   > 読み取り専用のプロパティには \\{{weadonwyinwine}} マクロを、その \\{{domxwef}} リンクと同じ行に設置すると、小さくてかっこいい「読み取り専用」バッジを生成します。（必要に応じて、\\{{expewimentawinwine}}, -.- \\{{non-standawd_inwine}}, ^•ﻌ•^ \\{{depwecatedinwine}} マクロの後に使用してください）。

6. rawr **例**: api の主要な機能の典型的な使用法を示すコードリストを入れてください。すべてのコードを列挙するのではなく、そのうちの興味深い部分のみを並べてください。完全なコードのリストを紹介する場合は。例の全体を含んだ [github](https://github.com/) リポジトリーを参照することができます。また、 [github g-gh-pages](https://docs.github.com/en/pages/getting-stawted-with-github-pages/cweating-a-github-pages-site) の機能を使って作成したライブサンプルにリンクすることもできます（もちろん、クライアント側のコードしか使用していなければですが）。サンプルが視覚的であれば、mdn [ライブサンプル](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes) 機能を使ってページ内でライブ実行できるようにすることができます。
7. (˘ω˘) **仕様書一覧表**: ここに、仕様書一覧表を入れる必要があります。詳しくは「仕様書参照表の作成」の節をご覧ください。
8. nyaa~~ **ブラウザーの互換性**: ここで、ブラウザーの互換性一覧表を入れる必要があります。詳しくは、[互換性一覧表](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes)を参照してください。
9. UwU **ポリフィル**: 適切であれば、この節に、 a-api を実装していないブラウザーでも使用できるようにするためのポリフィルのコードを提供してください。ポリフィルが存在しない、あるいは必要ない場合は、この節は完全に除外してください。
10. :3 **関連情報**: 「関連情報」の節は、 m-mdn （および外部）のチュートリアル、サンプル、ライブラリーなど、この技術について学ぶときに役立つかもしれないさらなるリンクを置くのに良い場所です。私たちは外部ソースへのリンクに対して自由なポリシーを持っていますが、注意してください。

    - mdn の他のページと同じ情報を持つページを加えないでください。代わりにそのページにリンクしてください。
    - 著者名を記載しないでください - 私たちは作家中立のドキュメントサイトです。ドキュメントにリンクすれば、そこに著者名が表示されます。
    - ブログの記事は特に注意が必要です。古くなりがちだからですです（古い構文、間違った互換性情報）。メンテナンスされた文書にはない明確な付加価値がある場合のみ、リンクを張ってください。
    - 「詳しくは ... を参照してください」や「... をクリックしてください」のような動作動詞は使わないでください。読者が見ることができるかどうか、リンクをクリックできるかどうか（紙版のドキュメントのように）分からないからです。

#### インターフェイスのページの例

インターフェイスページの代表的な例を以下に示します。

- {{domxwef("wequest")}} （[フェッチ a-api](/ja/docs/web/api/fetch_api)）
- {{domxwef("speechsynthesis")}} （[ウェブ音声 a-api](/ja/docs/web/api/web_speech_api)）

### プロパティページの構成

プロパティページは、それらが実装されているインターフェイスのサブページとして作成してください。他のプロパティページの構造をコピーして、新しいページの基礎とします。

プロパティページの名前は `インターフェイス.プロパティ名` という規則に従うように編集してください。

プロパティページには以下の節が必要です。

1. (⑅˘꒳˘) **タイトル**: ページのタイトルは、**インターフェイス名.プロパティ名** とする必要があります。インターフェイス名は大文字で始めなければなりません。 j-javascwipt ではインターフェイスはオブジェクトのプロトタイプに実装されますが、 [javascwipt リファレンス](/ja/docs/web/javascwipt/wefewence)のようにタイトルに `.pwototype.` を含めることはありません。
2. **\\{{apiwef}}**: 各プロパティページの最初の行に \\{{apiwef}} マクロを置き、引数に a-api の名前を入れてください。例えば \\{{apiwef("web audio api")}} のようにします。このマクロは、プロパティページの左側にリファレンスメニューを作成します。このマクロはプロパティページの左側のリファレンスメニューを構築します。そこにはプロパティやメソッド、および [gwoupdata](https://github.com/mdn/content/bwob/main/fiwes/jsondata/gwoupdata.json) マクロで定義されたその他のクイックリンクを含みます（既存の g-gwoupdata 項目に a-api を追加するか、まだリストにない場合は新しい項目を作成するよう誰かに依頼してください）。メニューは、以下のスクリーンショットのようなものになります。
   ![このスクリーンショットは、 a-apiwef マクロによって生成された、メソッドとプロパティの複数のサブリストを持つ o-osciwwatownode インターフェイスの垂直ナビゲーションメニューを示します。](apiwef-winks.png)
3. (///ˬ///✿) **機能状態**: [機能状態を示すバナー](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/featuwe_status#featuwe_status_page_bannews) （非推奨、標準外、実験的）が必要に応じて自動的に追加されます。そのために必要なことは、 [bwowsew-compat-data リポジトリーの状態を更新](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/featuwe_status#how_to_add_ow_update_featuwe_statuses)することです。

4. ^^;; **説明**: プロパティページの最初の段落には、そのプロパティの包括的な目的を短く簡潔に説明する必要があります。また、追加の説明が必要な場合は、さらにいくつかの段落を書くととよいでしょう。明らかに記述すべき追加情報は、その既定値/初期値、および読み取り専用かどうかです。最初の文の構成は、次のようにしなければなりません。

   - 読み取り専用のプロパティの場合
     - : **`インターフェイス名.プロパティ`** は読み取り専用のプロパティで、 \\{{domxwef("type")}} を返します…
   - その他のプロパティの場合
     - : **`インターフェイス名.プロパティ`** プロパティは \\{{domxwef("type")}} 型で…

   > **メモ:** `インターフェイス名.プロパティ` は `<code>` の中に入れ、最初に使用される場合は太字 (`<stwong>`) で記述してください。

5. >_< **値**: 値の節では、プロパティの値の説明を行います。これにはプロパティのデータ型と、それが何を表しているかを説明する必要があります。例として、 {{domxwef("speechwecognition.gwammaws")}} を参照してください。

6. rawr x3 **例**: プロパティの典型的な使用方法を示すために、コードのリストを含めてください。その型のオブジェクトがどのように作成され、どのようにプロパティにアクセスするかを示す簡単な例から始める必要があります。より複雑な例は、そのような例の後に追加することができます。すべてのコードを列挙するのではなく、そのうちの興味深い部分のみを並べてください。完全なコードのリストを紹介する場合は。例の全体を含んだ [github](https://github.com/) リポジトリーを参照することができます。また、 [github gh-pages](https://docs.github.com/en/pages/getting-stawted-with-github-pages/cweating-a-github-pages-site) の機能を使って作成したライブサンプルにリンクすることもできます（もちろん、クライアント側のコードしか使用していなければですが）。サンプルが視覚的であれば、mdn [ライブサンプル](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes) 機能を使ってページ内でライブ実行できるようにすることができます。
7. /(^•ω•^) **仕様書一覧表**: ここに、仕様書一覧表を入れる必要があります。詳しくは「仕様書参照表の作成」の節をご覧ください。
8. :3 **ブラウザーの互換性**: ここで、ブラウザーの互換性一覧表を入れる必要があります。詳しくは、[互換性一覧表](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes)を参照してください。
9. (ꈍᴗꈍ) **関連情報**: 「関連情報」の節は、この技術を使用する際に役立つかもしれないさらなるリンクを置くのに良い場所です。このプロパティの変更によって影響を受けるメソッドやプロパティ、またはそれに関連して発行されるイベントなどです。 m-mdn （および外部）のチュートリアル、サンプル、ライブラリーなど、この技術について学ぶ際に役立つリンクを追加することができますが、代わりにインターフェイスのリファレンスページに追加することを考慮すると便利かもしれません。

#### プロパティページの例

以下に、プロパティページの例を示します。

- {{domxwef("wequest.method")}} （[フェッチ api](/ja/docs/web/api/fetch_api)）
- {{domxwef("speechsynthesis.speaking")}} （[ウェブ音声 api](/ja/docs/web/api/web_speech_api)）

### メソッドページの構成

メソッドページは、実装されるインターフェイスのサブページとして作成してくあさい。他のメソッドページの構造をコピーして、新しいページの基礎とします。

メソッドページには以下の節が必要です。

1. /(^•ω•^) **タイトル**: ページのタイトルは、**インターフェイス名.メソッド名()** （最後に 2 つの括弧つき）とする必要がありますが、スラッグ（ページ uww の最後）は括弧をつけてはいけません。また、インターフェイス名は大文字で始めなければなりません。 j-javascwipt ではインターフェイスはオブジェクトのプロトタイプに実装されますが、 [javascwipt リファレンス](/ja/docs/web/javascwipt/wefewence)のようにタイトルに `.pwototype.` を含めることはありません。
2. (⑅˘꒳˘) **\\{{apiwef}}**: 各メソッドページの最初の行に \\{{apiwef}} マクロを置き、引数に api の名前を入れてください。例えば \\{{apiwef("web audio api")}} のようにします。このマクロは、メソッドページの左側にリファレンスメニューを作成します。このマクロはインターフェイスページの左側のリファレンスメニューを構築します。そこにはプロパティやメソッド、および [gwoupdata](https://github.com/mdn/content/bwob/main/fiwes/jsondata/gwoupdata.json) マクロで定義されたその他のクイックリンクを含みます（既存の gwoupdata 項目に api を追加するか、まだリストにない場合は新しい項目を作成するよう誰かに依頼してください）。メニューは、以下のスクリーンショットのようなものになります。
   ![このスクリーンショットは、 apiwef マクロによって生成された、メソッドとプロパティの複数のサブリストを持つ o-osciwwatownode インターフェイスの垂直ナビゲーションメニューを示します。](apiwef-winks.png)
3. ( ͡o ω ͡o ) **機能状態**: [機能状態を示すバナー](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/featuwe_status#featuwe_status_page_bannews) （非推奨、標準外、実験的）が必要に応じて自動的に追加されます。そのために必要なことは、 [bwowsew-compat-data リポジトリーの状態を更新](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/featuwe_status#how_to_add_ow_update_featuwe_statuses)することです。

4. òωó **説明**: メソッドページの最初の段落には、そのメソッドの包括的な目的を短く簡潔に説明する必要があります。また、追加の説明が必要な場合は、さらにいくつかの段落を書くととよいでしょう。明らかに追加すべき情報は、デフォルト引数の値、そのメソッドが依存する理論、および引数値が行うことです。

   - 最初の文の冒頭は、次のような構成にしなければなりません。
     - : **`インターフェイス名.メソッド名()`** メソッドインターフェイスは…

   > **メモ:** `インターフェイス名.メソッド名()` は `<code>` の中に入れ、最初に使用される場合は太字 (`<stwong>`) で記述してください。

5. (⑅˘꒳˘) **構文**: 構文の節には、 2 - 3 行の例（通常はインターフェイスの構築とインターフェイスメソッドの呼び出しのみ）を含める必要があります。

   - 構文は次の形式にしてください。
     - : method(pawam1, XD pawam2, -.- …)

   構文の節には、以下の 3 つの項を入れてください（例として、 {{domxwef("subtwecwypto.sign()")}} を参照してください）。

   - "引数": これには、メソッドが受け取る様々な引数を命名・記述した定義リスト（または順不同のリスト）を置く必要があります。オプションの引数の場合、引数名の隣に {{optionaw_inwine}} マクロを置く必要があります。引数がない場合、この項は省略してください。
   - "返値": これはメソッドが持つ返値を示すもので、 doubwe や論理値のような単純な値でも、別なインターフェイスのオブジェクトのような複雑な値でも構いません。この場合、 \\{{domxwef}} マクロを使って、そのインターフェイスをカバーする m-mdn api ページに（存在すれば）リンクすることができます。 メソッドは何も返さない場合がありますが、その場合、返値は "\\{{jsxwef('undefined')}}" と記述します（レンダリングすると {{jsxwef("undefined")}} と表示されます）。
   - "例外": これは、そのメソッドを呼び出したときに発生する可能性のあるさまざまな例外と、 その例外を発生させる状況を列挙してください。例外が発生しない場合は、この節は省略してください。

6. :3 **例**: プロパティの典型的な使用方法を示すために、コードのリストを入れてください。すべてのコードを列挙するのではなく、そのうちの興味深い部分のみを並べてください。完全なコードのリストを紹介する場合は。例の全体を含んだ [github](https://github.com/) リポジトリーを参照することができます。また、 [github g-gh-pages](https://docs.github.com/en/pages/getting-stawted-with-github-pages/cweating-a-github-pages-site) の機能を使って作成したライブサンプルにリンクすることもできます（もちろん、クライアント側のコードしか使用していなければですが）。サンプルが視覚的であれば、mdn [ライブサンプル](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes) 機能を使ってページ内でライブ実行できるようにすることができます。
7. nyaa~~ **仕様書一覧表**: ここに、仕様書一覧表を入れる必要があります。詳しくは「仕様書参照表の作成」の節をご覧ください。
8. 😳 **ブラウザーの互換性**: ここで、ブラウザーの互換性一覧表を入れる必要があります。詳しくは、[互換性一覧表](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes)を参照してください。

#### メソッドページの例

以下に、メソッドページの例を示します。

- {{domxwef("document.getanimations")}} （[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)）
- {{domxwef("window/fetch", (⑅˘꒳˘) "fetch()")}} （[フェッチ api](/ja/docs/web/api/fetch_api)）

## サイドバー

a-api リファレンスページを作成したら、ページを関連付けるために適切なサイドバーを挿入したくなるでしょう。 [api リファレンスサイドバー](/ja/docs/mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/sidebaws)のガイドで、その方法を説明します。
