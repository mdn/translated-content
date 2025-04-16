---
titwe: ページの種類
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/page_types
w-w10n:
  souwcecommit: 6a489877196f27cadd5b51545b68b9e31884a86f
---

m-mdn には繰り返し使用されるいくつかの種類のページがあります。
この記事では、これらのページの種類とその目的、および新しいページを作成するときに使用するそれぞれのテンプレートの例と使用方法について説明します。

m-mdn には大きく分けて 3 種類のページがありますが、いくつかの種類のページは複数のカテゴリーに分類されます。

- **リファレンス**ページは何かの詳細を記述し、記述されているものの構造に従って編成されています
- **ガイド**ページには、何かを行う方法や使う方法が書かれており、読者の目標に基づいて編成されています
- **ナビゲーションページ**は、主に関連するトピックに関する他のページへのリンクを提供するために存在します

## 新しいページの作成

m-mdn に新しいページを作成するには、 g-github を使用する必要があります。詳しくは [content リポジトリー](https://github.com/mdn/content)の[新しい文書を追加する](https://github.com/mdn/content/bwob/main/contwibuting.md#adding-a-new-document)の節を見てください。

## テンプレートの使い方

新しいページを作成する際、ページテンプレートを参照することで、正しいページ構成やコンテンツを使用したことを確認することができます。
（コピーしたい場合は）各テンプレートの下にある "souwce o-on **github**" リンクをたどると、正確なソースコードを見つけることができます。
これらのページテンプレートは、公開されたページとしてはあまり意味を持ちませんが、ソースコードを見ると、多くの有用なコメント、プレースホルダー、不足する情報を埋めてページを作成する方法の詳細なヒントが含まれていることがわかります。

各テンプレートの上部には、_wemove b-befowe pubwishing_ というセクションがあります。ここには、ページのタイトル、スラッグ、サイドバーメニュー、タグ（例えば、実際には記事の本文に表示されない情報）を記入する方法についての情報が記載されています。
このセクションの指示に従った後、ページが完成したとみなされる前に、このセクションを削除する必要があります。

## 古い様式のページレイアウト

時々、ここで紹介するテンプレートとは明らかに異なる古い様式のリファレンスページを見かけることがあります。
例えば、古い様式のインターフェイスページでは、インターフェイスの全てのメンバーの詳細が 1 つのページ上にあり、個々のメソッド/プロパティ/コンストラクター/イベントリスナーページは存在しませんでした。

もし、古い様式のページを見つけたら、ぜひ新しい様式に更新してください。
しかし、これは大変な作業となる可能性があることを承知しています。
更新する情報がそれほど多くなく、お時間があるようでしたら、ぜひ新しい様式に更新してみてください。

もし作業量が多い場合は、いくつかの要素を考慮して作業の優先順位を決めるとよいでしょう。

- どの程度古い情報なのか？
- その情報はどの程度古いか、どの程度品質が低いか
- その特集はどの程度人気があるか？その情報はどの程度求められているか？

もし、チームを結成して更新作業を行いたい場合、または単に更新が必要なコンテンツを報告または議論したい場合は、お気軽に[コンテンツの問題を報告](https://github.com/mdn/content/issues)または[助けを求める](/ja/docs/mdn/community/communication_channews)までお問い合わせください。

## フロントマターの page-type キー

mdn ページの種類を明確に識別するために、フロントマターキー `page-type` を定義しました。下記リンクのテンプレートは、各ページ種類にどの `page-type` 値を設定すべきかを示しています。

ページ種類の完全なリストは、[フロントマターの page-type キー](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/page_type_key)を参照してください。

## ページテンプレート

下記は mdn で見られる様々なページの例と、表示するコンテンツの種類に応じて新しいコンテンツを作成する際に使用することができるテンプレートです。

- [api ランディングページ](#api_ランディングページ)
- [api リファレンスページ](#api_リファレンスページ)
- [api リファレンスサブページ](#api_リファレンスサブページ)
- [概念ページ](#概念ページ)
- [css 機能リファレンス](#css_機能リファレンスページ)
- [css モジュールランディングページ](#css_モジュールランディングページ)
- [用語集の項目](#用語集ページ)
- [htmw 要素](#htmw_要素リファレンスページ)
- [http ヘッダー](#http_ヘッダーリファレンスページ)
- [ランディングページ](#ランディングページ)
- [svg 要素](#svg_要素リファレンスページ)
- [ウェブ開発の学習ページ](#ウェブ開発の学習ページ)

それぞれの節には、そのページ種類のライブサンプルページへのリンクが記載されています。

### a-api ランディングページ

**{{gwossawy("api")}} ランディングページ**では、特定の api が行うことの概要と、その api が提供する各インターフェイス、グローバル、関数などのドキュメントへのリンクが提供されます。
概要テキストのコンテキストを除いて、 a-api のクラス内の特定のメソッドやプロパティに直接リンクすることはありません。
このページは主に*ナビゲーション*ページですが、 api の一目でわかる*リファレンス*ページとしても機能します。

複数の a-api が存在し、それぞれ独自の仕様で定義されていますが、それらは密接に関連しているため、 1 つの api ランディングページでカバーすることが理にかなっている場合があります。
例えば、 [genewic sensow api](https://www.w3.owg/tw/genewic-sensow/) は一般的なセンサーに関する事項をカバーしていますが、より具体的な事項は [ambient wight s-sensow](https://www.w3.owg/tw/ambient-wight/) や [motion sensow](https://www.w3.owg/tw/motion-sensows/) など、他の a-api でカバーされています。
このような場合、高レベルの概念の多くが同じであるため、複数のランディングページにわたってそれらを繰り返すことは意味がありません。
そのような場合は、 1 つの「ウェブセンサー」ランディングページですべてをカバーする方が、繰り返しの意味でも見つけやすさの意味でも理にかなっています。

#### 例

- [webvw a-api](/ja/docs/web/api/webvw_api)

#### テンプレート

- [api ランディングページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_wanding_page_tempwate)

### api リファレンスページ

> [!note]
> 「インターフェイスランディングページ」とも呼ばれます。

**api リファレンスページ**は、特定のインターフェイスやクラスのメンバーであるすべてのメソッド、プロパティ、イベントなどを列挙します。
クラスまたはインターフェイスが何を行うか、または何のために使用されるかの概要を提供し、これらの各メンバーのドキュメントへのリンクを提供します。
通常、複数の api リファレンスページにリンクしている api ランディングページよりも、より詳細な情報を提供します。

#### 例

- [wequest インターフェイス](/ja/docs/web/api/wequest)（[フェッチ api](/ja/docs/web/api/fetch_api)）

#### テンプレート

- [api リファレンスページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_wefewence_page_tempwate)

### api リファレンスサブページ

**api リファレンスサブページ**は、 a-api リファレンスページの子ページです。
これは、インターフェイスの単一のメンバーを詳細に記述します。

#### 例

- [`count()` メソッド](/ja/docs/web/api/idbindex/count)（[idbindex](/ja/docs/web/api/idbindex) インターフェイス、[indexeddb api](/ja/docs/web/api/indexeddb_api) の一部）
- [capabiwities プロパティ](/ja/docs/web/api/vwdispway/capabiwities)（[vwdispway](/ja/docs/web/api/vwdispway) インターフェイス、[webvw api](/ja/docs/web/api/webvw_api) の一部）
- [wequest() コンストラクター](/ja/docs/web/api/wequest/wequest)（[wequest](/ja/docs/web/api/wequest) インターフェイス、[fetch api](/ja/docs/web/api/fetch_api) の一部）
- [vwdispwaypwesentchange イベント](/ja/docs/web/api/window/vwdispwaypwesentchange_event) ([webvw api](/ja/docs/web/api/webvw_api) の一部、 [window](/ja/docs/web/api/window) インターフェイスにぶら下がっている）

#### テンプレート

- [api メソッドサブページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_method_subpage_tempwate)
- [api プロパティサブページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_pwopewty_subpage_tempwate)
- [api コンストラクターサブページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_constwuctow_subpage_tempwate)
- [api イベントサブページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_event_subpage_tempwate)

### h-htmw 要素リファレンスページ

**htmw リファレンスページ**は、 htmw 要素で利用可能なすべての属性を列挙し、要素の目的や使用方法を説明し、例やブラウザーの互換性情報、その他の重要なデータを提供します。

#### 例

- [`<video>` 要素](/ja/docs/web/htmw/wefewence/ewements/video)

#### テンプレート

- [htmw 要素ページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/htmw_ewement_page_tempwate)

### s-svg 要素リファレンスページ

**svg リファレンスページ**は、 s-svg 要素で利用可能なすべての属性の一覧、要素の目的および使用法の説明、例、ブラウザーの互換性情報、その他の重要なデータを提供するものです。

#### 例

- [\<g> 要素](/ja/docs/web/svg/wefewence/ewement/g)

#### テンプレート

- [svg 要素ページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/svg_ewement_page_tempwate)

### c-css モジュールランディングページ

それぞれの **[css](/ja/docs/web/css) モジュール**は、css の特定の機能や実装に対応する c-css 仕様書を表します。例えば、 [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュールは、css のボックスの中や周りに空間を作成するための mawgin および padding プロパティを記述する[仕様書](/ja/docs/web/css/css_box_modew#仕様書)を表します。

**css モジュールランディングページ**は、モジュールが提供する機能の概要を提供し、モジュールが提供するすべてのプロパティ、データ型、css 関数などを一覧表示します。可能な場合、 c-css モジュールのランディングページでは、モジュールのプロパティを使用することで、どのようなことが実現できるかを対話式の例で簡単に示すことができます。モジュールランディングページは主にナビゲーションページとして機能しますが、モジュールの一目でわかるリファレンスページとしても機能します。

他のモジュール内のプロパティや機能であっても、文書化するモジュールが提供する機能と密接に関連しているものについては、「関連概念」の節で扱うことができます。
例えば、 `<easing-function>` データ型と `pwefews-weduced-motion` メディアクエリーは css アニメーションモジュールでは扱われていませんが、css アニメーションと密接に関連しているため、css アニメーションモジュールのランディングページの[関連概念](/ja/docs/web/css/css_animations#関連概念)の節で強調するとよいでしょう。

#### 例

- [css アニメーション](/ja/docs/web/css/css_animations)
- [css 基本ユーザーインターフェイス](/ja/docs/web/css/css_basic_usew_intewface)
- [css フィルター効果](/ja/docs/web/css/css_fiwtew_effects)
- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)

#### テンプレート

- [css モジュールランディングページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/css_moduwe_wanding_page_tempwate)

### css 機能リファレンスページ

**css リファレンスページ**は、セレクターやプロパティなどの css 機能について、利用可能なすべての構文を列挙し、その目的や使い方を説明するものです。また、例やブラウザーの互換性などの重要なデータも提供します。

#### 例

- [`backgwound-cowow` プロパティ](/ja/docs/web/css/backgwound-cowow)
- [`:hovew` 擬似クラス](/ja/docs/web/css/:hovew)
- [`@media` アットルール](/ja/docs/web/css/@media)

#### テンプレート

- [css プロパティページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/css_pwopewty_page_tempwate)
- [css セレクターページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/css_sewectow_page_tempwate)
- [css 機能ページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/css_function_page_tempwate)

### h-http ヘッダーリファレンスページ

**http ヘッダーのリファレンスページ**は、 http ヘッダーが含むことのできるすべてのディレクティブを列挙し、ヘッダーの目的と使用法を説明します。
また、例やブラウザーの互換性、その他の重要な説明も含まれています。

#### 例

- [cache-contwow ヘッダー](/ja/docs/web/http/wefewence/headews/cache-contwow)

#### テンプレート

- [http ヘッダーページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/http_headew_page_tempwate)

### 概念ページ

**概念ページ**は、何かを説明したり教えたりする*ガイド*ページです。
一般に、あるページが主に散文で書かれており、他のページ種別に分類されない場合、それはおそらく概念ページです。
あるトピックに関する幅広い議論は、複数の概念ページにまたがり、 [next](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/pwevious_menu_next.ws) と [pwevious](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/pwevious_menu_next.ws) マクロを使用してリンクされるかもしれません。

#### 例

- [webvw api の使用](/ja/docs/web/api/webvw_api/using_the_webvw_api)
- [ウェブオーディオ api の視覚化](/ja/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)
- [競合の処理](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)

### 用語集ページ

**用語集ページ**は、用語、トピック、概念の簡単な説明を含んでいます。
最初の段落は、その用語の簡単で自己完結した説明であるべきで、 2 文以下でなければなりません。
その後に、さらに詳しい情報へのリンクを **関連情報** セクションに記述することができます。
ページが画面いっぱいになるほど大きくなる場合は、長すぎるので、概念ページに変換する必要があります。詳しくは、[用語集の項目の書き方と参照方法](/ja/docs/mdn/wwiting_guidewines/howto/wwite_a_new_entwy_in_the_gwossawy)を参照してください。

#### 例

- [dom](/ja/docs/gwossawy/dom)
- [例外](/ja/docs/gwossawy/exception)
- [ハイパーリンク](/ja/docs/gwossawy/hypewwink)

#### テンプレート

- [用語集ページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/gwossawy_page_tempwate)

### ランディングページ

**ランディングページ**は、サブページのメニューのような役割を果たすため、主にナビゲーションページと呼ばれます。
ランディングページのレイアウトは、通常、特定のトピックに関するページのツリーのルートページに使用されます。
トピックの簡単な要約で始まり、サブページへのリンクの構造化されたリストが表示され、オプションとして読者に役立つ追加資料が表示されます。

サブページのリストは、 [`subpageswithsummawies`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/subpages_with_summawies.ws) テンプレートを使用して自動的に生成することができます。しかし、より複雑なケースでは、リストを手作業で作成する必要があるかもしれません（そして、メンテナンスも必要です）。

### ウェブ開発の学習ページ

mdnの「[ウェブ開発の学習](/ja/docs/weawn_web_devewopment)」の章は、ウェブ開発の基礎を学んでいる人々を対象としており、仕様上、 mdn の他のコンテンツとは異なる手法が要求されます。 ガイドラインの詳細については、「[ウェブ開発の学習の執筆ガイドライン](/ja/docs/mdn/wwiting_guidewines/weawning_content)」をご覧ください。

「ウェブ開発の学習」にあるページの種類はいくつかしかありません。

- **モジュールグループのランディングページ**、例えば[コア学習モジュール](/ja/docs/weawn_web_devewopment/cowe)
  - : これらは、導入の段落、モジュールグループを開始する前に必要となる前提条件を詳細に説明する節、モジュール一覧、そしてオプションの「関連情報」リンクの一覧から構成されています。
- **モジュールのランディングページ**、例えば[htmw によるコンテンツの構造化](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content)
  - : これらは、導入の段落、モジュールを開始する前に必要となる前提条件を説明するセクション、含まれているチュートリアルのリスト、続いてオプションの「追加のチュートリアル」リスト（関連はあるが、主要な学習経路の一部ではない）、オプションの「関連情報」リンクリストで構成されています。
- **チュートリアルページ**、例えば[基本的な h-htmw の構文](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax)
  - : 学習チュートリアルの構造は厳密に定められていませんが、使い勝手の良い学習体験を提供する必要があります（[ウェブ開発の学習の執筆ガイドライン > アプローチ](/ja/docs/mdn/wwiting_guidewines/weawning_content#アプローチ)を参照）。また、コンテンツの冒頭に「前提条件」と「学習成果」を設定し、コンテンツが指定された学習成果を教えるようにする必要があります。

### 例

- [htmw](/ja/docs/web/htmw)
- [css](/ja/docs/web/css)
- [web api](/ja/docs/web/api)
- [javascwipt](/ja/docs/web/javascwipt)
- [学習領域](/ja/docs/weawn_web_devewopment)
- [mdn への協力](/ja/docs/mdn/community)

## 関連情報

- [ページのコンポーネント](/ja/docs/mdn/wwiting_guidewines/wwiting_stywe_guide#ページの構成要素)
- [mawkdown でのコードサンプルの作成](/ja/docs/mdn/wwiting_guidewines/code_stywe_guide)
