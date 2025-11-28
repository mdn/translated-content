---
title: ページの種類
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 6a489877196f27cadd5b51545b68b9e31884a86f
---

MDN には繰り返し使用されるいくつかの種類のページがあります。
この記事では、これらのページの種類とその目的、および新しいページを作成するときに使用するそれぞれのテンプレートの例と使用方法について説明します。

MDN には大きく分けて 3 種類のページがありますが、いくつかの種類のページは複数のカテゴリーに分類されます。

- **リファレンス**ページは何かの詳細を記述し、記述されているものの構造に従って編成されています
- **ガイド**ページには、何かを行う方法や使う方法が書かれており、読者の目標に基づいて編成されています
- **ナビゲーションページ**は、主に関連するトピックに関する他のページへのリンクを提供するために存在します

## 新しいページの作成

MDN に新しいページを作成するには、 GitHub を使用する必要があります。詳しくは [content リポジトリー](https://github.com/mdn/content)の[新しい文書を追加する](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document)の節を見てください。

## テンプレートの使い方

新しいページを作成する際、ページテンプレートを参照することで、正しいページ構成やコンテンツを使用したことを確認することができます。
（コピーしたい場合は）各テンプレートの下にある "Source on **GitHub**" リンクをたどると、正確なソースコードを見つけることができます。
これらのページテンプレートは、公開されたページとしてはあまり意味を持ちませんが、ソースコードを見ると、多くの有用なコメント、プレースホルダー、不足する情報を埋めてページを作成する方法の詳細なヒントが含まれていることがわかります。

各テンプレートの上部には、_Remove before publishing_ というセクションがあります。ここには、ページのタイトル、スラッグ、サイドバーメニュー、タグ（例えば、実際には記事の本文に表示されない情報）を記入する方法についての情報が記載されています。
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

もし、チームを結成して更新作業を行いたい場合、または単に更新が必要なコンテンツを報告または議論したい場合は、お気軽に[コンテンツの問題を報告](https://github.com/mdn/content/issues)または[助けを求める](/ja/docs/MDN/Community/Communication_channels)までお問い合わせください。

## フロントマターの page-type キー

MDN ページの種類を明確に識別するために、フロントマターキー `page-type` を定義しました。下記リンクのテンプレートは、各ページ種類にどの `page-type` 値を設定すべきかを示しています。

ページ種類の完全なリストは、[フロントマターの page-type キー](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key)を参照してください。

## ページテンプレート

下記は MDN で見られる様々なページの例と、表示するコンテンツの種類に応じて新しいコンテンツを作成する際に使用することができるテンプレートです。

- [API ランディングページ](#api_ランディングページ)
- [API リファレンスページ](#api_リファレンスページ)
- [API リファレンスサブページ](#api_リファレンスサブページ)
- [概念ページ](#概念ページ)
- [CSS 機能リファレンス](#css_機能リファレンスページ)
- [CSS モジュールランディングページ](#css_モジュールランディングページ)
- [用語集の項目](#用語集ページ)
- [HTML 要素](#html_要素リファレンスページ)
- [HTTP ヘッダー](#http_ヘッダーリファレンスページ)
- [ランディングページ](#ランディングページ)
- [SVG 要素](#svg_要素リファレンスページ)
- [ウェブ開発の学習ページ](#ウェブ開発の学習ページ)

それぞれの節には、そのページ種類のライブサンプルページへのリンクが記載されています。

### API ランディングページ

**{{Glossary("API")}} ランディングページ**では、特定の API が行うことの概要と、その API が提供する各インターフェイス、グローバル、関数などのドキュメントへのリンクが提供されます。
概要テキストのコンテキストを除いて、 API のクラス内の特定のメソッドやプロパティに直接リンクすることはありません。
このページは主に*ナビゲーション*ページですが、 API の一目でわかる*リファレンス*ページとしても機能します。

複数の API が存在し、それぞれ独自の仕様で定義されていますが、それらは密接に関連しているため、 1 つの API ランディングページでカバーすることが理にかなっている場合があります。
例えば、 [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) は一般的なセンサーに関する事項をカバーしていますが、より具体的な事項は [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/) や [Motion Sensor](https://www.w3.org/TR/motion-sensors/) など、他の API でカバーされています。
このような場合、高レベルの概念の多くが同じであるため、複数のランディングページにわたってそれらを繰り返すことは意味がありません。
そのような場合は、 1 つの「ウェブセンサー」ランディングページですべてをカバーする方が、繰り返しの意味でも見つけやすさの意味でも理にかなっています。

#### 例

- [WebVR API](/ja/docs/Web/API/WebVR_API)

#### テンプレート

- [API ランディングページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API リファレンスページ

> [!NOTE]
> 「インターフェイスランディングページ」とも呼ばれます。

**API リファレンスページ**は、特定のインターフェイスやクラスのメンバーであるすべてのメソッド、プロパティ、イベントなどを列挙します。
クラスまたはインターフェイスが何を行うか、または何のために使用されるかの概要を提供し、これらの各メンバーのドキュメントへのリンクを提供します。
通常、複数の API リファレンスページにリンクしている API ランディングページよりも、より詳細な情報を提供します。

#### 例

- [Request インターフェイス](/ja/docs/Web/API/Request)（[フェッチ API](/ja/docs/Web/API/Fetch_API)）

#### テンプレート

- [API リファレンスページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API リファレンスサブページ

**API リファレンスサブページ**は、 API リファレンスページの子ページです。
これは、インターフェイスの単一のメンバーを詳細に記述します。

#### 例

- [`count()` メソッド](/ja/docs/Web/API/IDBIndex/count)（[IDBIndex](/ja/docs/Web/API/IDBIndex) インターフェイス、[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) の一部）
- [capabilities プロパティ](/ja/docs/Web/API/VRDisplay/capabilities)（[VRDisplay](/ja/docs/Web/API/VRDisplay) インターフェイス、[WebVR API](/ja/docs/Web/API/WebVR_API) の一部）
- [Request() コンストラクター](/ja/docs/Web/API/Request/Request)（[Request](/ja/docs/Web/API/Request) インターフェイス、[Fetch API](/ja/docs/Web/API/Fetch_API) の一部）
- [vrdisplaypresentchange イベント](/ja/docs/Web/API/Window/vrdisplaypresentchange_event) ([WebVR API](/ja/docs/Web/API/WebVR_API) の一部、 [Window](/ja/docs/Web/API/Window) インターフェイスにぶら下がっている）

#### テンプレート

- [API メソッドサブページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API プロパティサブページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API コンストラクターサブページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API イベントサブページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML 要素リファレンスページ

**HTML リファレンスページ**は、 HTML 要素で利用可能なすべての属性を列挙し、要素の目的や使用方法を説明し、例やブラウザーの互換性情報、その他の重要なデータを提供します。

#### 例

- [`<video>` 要素](/ja/docs/Web/HTML/Reference/Elements/video)

#### テンプレート

- [HTML 要素ページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG 要素リファレンスページ

**SVG リファレンスページ**は、 SVG 要素で利用可能なすべての属性の一覧、要素の目的および使用法の説明、例、ブラウザーの互換性情報、その他の重要なデータを提供するものです。

#### 例

- [\<g> 要素](/ja/docs/Web/SVG/Reference/Element/g)

#### テンプレート

- [SVG 要素ページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS モジュールランディングページ

それぞれの **[CSS](/ja/docs/Web/CSS) モジュール**は、CSS の特定の機能や実装に対応する CSS 仕様書を表します。例えば、 [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュールは、CSS のボックスの中や周りに空間を作成するための margin および padding プロパティを記述する[仕様書](/ja/docs/Web/CSS/Guides/Box_model#仕様書)を表します。

**CSS モジュールランディングページ**は、モジュールが提供する機能の概要を提供し、モジュールが提供するすべてのプロパティ、データ型、CSS 関数などを一覧表示します。可能な場合、 CSS モジュールのランディングページでは、モジュールのプロパティを使用することで、どのようなことが実現できるかを対話式の例で簡単に示すことができます。モジュールランディングページは主にナビゲーションページとして機能しますが、モジュールの一目でわかるリファレンスページとしても機能します。

他のモジュール内のプロパティや機能であっても、文書化するモジュールが提供する機能と密接に関連しているものについては、「関連概念」の節で扱うことができます。
例えば、 `<easing-function>` データ型と `prefers-reduced-motion` メディアクエリーは CSS アニメーションモジュールでは扱われていませんが、CSS アニメーションと密接に関連しているため、CSS アニメーションモジュールのランディングページの[関連概念](/ja/docs/Web/CSS/Guides/Animations#関連概念)の節で強調するとよいでしょう。

#### 例

- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)
- [CSS 基本ユーザーインターフェイス](/ja/docs/Web/CSS/Guides/Basic_user_interface)
- [CSS フィルター効果](/ja/docs/Web/CSS/Guides/Filter_effects)
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)

#### テンプレート

- [CSS モジュールランディングページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS 機能リファレンスページ

**CSS リファレンスページ**は、セレクターやプロパティなどの CSS 機能について、利用可能なすべての構文を列挙し、その目的や使い方を説明するものです。また、例やブラウザーの互換性などの重要なデータも提供します。

#### 例

- [`background-color` プロパティ](/ja/docs/Web/CSS/Reference/Properties/background-color)
- [`:hover` 擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/:hover)
- [`@media` アットルール](/ja/docs/Web/CSS/Reference/At-rules/@media)

#### テンプレート

- [CSS プロパティページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS セレクターページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS 機能ページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP ヘッダーリファレンスページ

**HTTP ヘッダーのリファレンスページ**は、 HTTP ヘッダーが含むことのできるすべてのディレクティブを列挙し、ヘッダーの目的と使用法を説明します。
また、例やブラウザーの互換性、その他の重要な説明も含まれています。

#### 例

- [Cache-Control ヘッダー](/ja/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### テンプレート

- [HTTP ヘッダーページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### 概念ページ

**概念ページ**は、何かを説明したり教えたりする*ガイド*ページです。
一般に、あるページが主に散文で書かれており、他のページ種別に分類されない場合、それはおそらく概念ページです。
あるトピックに関する幅広い議論は、複数の概念ページにまたがり、 [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) と [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) マクロを使用してリンクされるかもしれません。

#### 例

- [WebVR API の使用](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [ウェブオーディオ API の視覚化](/ja/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [競合の処理](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### 用語集ページ

**用語集ページ**は、用語、トピック、概念の簡単な説明を含んでいます。
最初の段落は、その用語の簡単で自己完結した説明であるべきで、 2 文以下でなければなりません。
その後に、さらに詳しい情報へのリンクを **関連情報** セクションに記述することができます。
ページが画面いっぱいになるほど大きくなる場合は、長すぎるので、概念ページに変換する必要があります。詳しくは、[用語集の項目の書き方と参照方法](/ja/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary)を参照してください。

#### 例

- [DOM](/ja/docs/Glossary/DOM)
- [例外](/ja/docs/Glossary/Exception)
- [ハイパーリンク](/ja/docs/Glossary/Hyperlink)

#### テンプレート

- [用語集ページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### ランディングページ

**ランディングページ**は、サブページのメニューのような役割を果たすため、主にナビゲーションページと呼ばれます。
ランディングページのレイアウトは、通常、特定のトピックに関するページのツリーのルートページに使用されます。
トピックの簡単な要約で始まり、サブページへのリンクの構造化されたリストが表示され、オプションとして読者に役立つ追加資料が表示されます。

サブページのリストは、 [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) テンプレートを使用して自動的に生成することができます。しかし、より複雑なケースでは、リストを手作業で作成する必要があるかもしれません（そして、メンテナンスも必要です）。

### ウェブ開発の学習ページ

MDNの「[ウェブ開発の学習](/ja/docs/Learn_web_development)」の章は、ウェブ開発の基礎を学んでいる人々を対象としており、仕様上、 MDN の他のコンテンツとは異なる手法が要求されます。 ガイドラインの詳細については、「[ウェブ開発の学習の執筆ガイドライン](/ja/docs/MDN/Writing_guidelines/Learning_content)」をご覧ください。

「ウェブ開発の学習」にあるページの種類はいくつかしかありません。

- **モジュールグループのランディングページ**、例えば[コア学習モジュール](/ja/docs/Learn_web_development/Core)
  - : これらは、導入の段落、モジュールグループを開始する前に必要となる前提条件を詳細に説明する節、モジュール一覧、そしてオプションの「関連情報」リンクの一覧から構成されています。
- **モジュールのランディングページ**、例えば[HTML によるコンテンツの構造化](/ja/docs/Learn_web_development/Core/Structuring_content)
  - : これらは、導入の段落、モジュールを開始する前に必要となる前提条件を説明するセクション、含まれているチュートリアルのリスト、続いてオプションの「追加のチュートリアル」リスト（関連はあるが、主要な学習経路の一部ではない）、オプションの「関連情報」リンクリストで構成されています。
- **チュートリアルページ**、例えば[基本的な HTML の構文](/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : 学習チュートリアルの構造は厳密に定められていませんが、使い勝手の良い学習体験を提供する必要があります（[ウェブ開発の学習の執筆ガイドライン > アプローチ](/ja/docs/MDN/Writing_guidelines/Learning_content#アプローチ)を参照）。また、コンテンツの冒頭に「前提条件」と「学習成果」を設定し、コンテンツが指定された学習成果を教えるようにする必要があります。

### 例

- [HTML](/ja/docs/Web/HTML)
- [CSS](/ja/docs/Web/CSS)
- [Web API](/ja/docs/Web/API)
- [JavaScript](/ja/docs/Web/JavaScript)
- [学習領域](/ja/docs/Learn_web_development)
- [MDN への協力](/ja/docs/MDN/Community)

## 関連情報

- [ページのコンポーネント](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#ページの構成要素)
- [Markdown でのコードサンプルの作成](/ja/docs/MDN/Writing_guidelines/Code_style_guide)
