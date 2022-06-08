---
title: ページの種類
slug: MDN/Structures/Page_types
tags:
  - ドキュメント
  - ガイド
  - MDN メタ
  - 構造
  - テンプレート
translation_of: MDN/Structures/Page_types
---
{{MDNSidebar}}

MDN には繰り返し使用されるいくつかの種類のページがあります。
この記事では、これらのページの種類とその目的、および新しいページを作成するときに使用するそれぞれのテンプレートの例と使用方法について説明します。

MDN には大きく分けて 3 種類のページがありますが、いくつかの種類のページは複数のカテゴリーに分類されます。

- **リファレンス**ページは何かの詳細を記述し、記述されているものの構造に従って編成されています
- **ガイド**ページには、何かを行う方法や使う方法が書かれており、読者の目標に基づいて編成されています
- **ナビゲーションページ**は、主に関連するトピックに関する他のページへのリンクを提供するために存在します

## 新しいページの作成

MDN に新しいページを作成するには、 GitHub を使用する必要があります。詳しい説明については [content リポジトリーの README](https://github.com/mdn/content#adding-a-new-document) を参照してください。

## テンプレートの使い方

新しいページを作成する際、ページテンプレートを参照することで、正しいページ構成やコンテンツを使用したことを確認することができます。
（コピーしたい場合は）各テンプレートの下にある "Source on **GitHub**" リンクをたどると、正確なソースコードを見つけることができます。
これらのページテンプレートは、公開されたページとしてはあまり意味を持ちませんが、ソースコードを見ると、多くの有用なコメント、プレースホルダー、不足する情報を埋めてページを作成する方法の詳細なヒントが含まれていることがわかります。

各テンプレートの上部には、_Remove before publishing_ というセクションがあります。ここには、ページのタイトル、スラッグ、サイドバーメニュー、タグ（例えば、実際には記事の本文に表示されない情報）を記入する方法についての情報が記載されています。
このセクションの指示に従った後、ページが完成したとみなされる前に、このセクションを削除する必要があります。

## 古い様式のページレイアウト

時々、ここで紹介するテンプレートとは明らかに異なる古い様式のリファレンスページを見かけることがあります。
例えば、古い様式のインターフェイスページでは、インターフェイスの全てのメンバーの詳細が 1 つのページ上にあり、個々のメソッド/プロパティ/コンストラクタ/イベントリスナーページは存在しませんでした。

もし、古い様式のページを見つけたら、ぜひ新しい様式に更新してください。
しかし、これは大変な作業となる可能性があることを承知しています。
更新する情報がそれほど多くなく、お時間があるようでしたら、ぜひ新しい様式に更新してみてください。

もし作業量が多い場合は、いくつかの要素を考慮して作業の優先順位を決めるとよいでしょう。

- どの程度古い情報なのか？
- その情報はどの程度古いか、どの程度品質が低いか
- その特集はどの程度人気があるか？その情報はどの程度求められているか？

もし、チームを結成して更新作業を行いたい場合、または単に更新が必要なコンテンツを報告または議論したい場合は、お気軽に[コンテンツの問題を報告](https://github.com/mdn/content/issues)または[助けを求める](/ja/docs/MDN/Contribute/Getting_started#step_4_ask_for_help)までお問い合わせください。

## API ランディングページ

**{{Glossary("API")}} ランディングページ**では、特定の API が行うことの概要と、その API が提供する各インターフェイス、グローバル、関数などのドキュメントへのリンクが提供されます。
概要テキストのコンテキストを除いて、 API のクラス内の特定のメソッドやプロパティに直接リンクすることはありません。
このページは主に*ナビゲーション*ページですが、 API の一目でわかる*リファレンス*ページとしても機能します。

複数の API が存在し、それぞれ独自の仕様で定義されていますが、それらは密接に関連しているため、 1 つの API ランディングページでカバーすることが理にかなっている場合があります。
例えば、 [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) は一般的なセンサーに関する事項をカバーしていますが、より具体的な事項は [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/) や [Motion Sensor](https://www.w3.org/TR/motion-sensors/) など、他の API でカバーされています。
このような場合、高レベルの概念の多くが同じであるため、複数のランディングページにわたってそれらを繰り返すことは意味がありません。
そのような場合は、 1 つの「ウェブセンサー」ランディングページですべてをカバーする方が、繰り返しの意味でも見つけやすさの意味でも理にかなっています。

### 例

- [WebVR API](/ja/docs/Web/API/WebVR_API)

### テンプレート

- [API ランディングページテンプレート](/ja/docs/MDN/Structures/Page_types/API_landing_page_template)

## API リファレンスページ

> **Note:** *インターフェイスランディングページ*とも呼ばれます。

**API リファレンスページ**は、特定のインターフェイスやクラスのメンバーであるすべてのメソッド、プロパティ、イベントなどを列挙します。
クラスまたはインターフェイスが何を行うか、または何のために使用されるかの概要を提供し、これらの各メンバーのドキュメントへのリンクを提供します。
通常、複数の API リファレンスページにリンクしている API ランディングページよりも、より詳細な情報を提供します。

### 例

- [フェッチ API](/ja/docs/Web/API/Fetch_API) の [Request インターフェイス](/ja/docs/Web/API/Request)。

### テンプレート

- [API リファレンスページテンプレート](/ja/docs/MDN/Structures/Page_types/API_reference_page_template)

## API リファレンスサブページ

**API リファレンスサブページ**は、 API リファレンスページの子ページです。
これは、インターふぃえすの単一のメンバーを詳細に記述します。

### 例

- [IDBIndex](/ja/docs/Web/API/IDBIndex) インターフェイスの [`count()` メソッド](/ja/docs/Web/API/IDBIndex/count)（[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) の一部）
- [VRDisplay](/ja/docs/Web/API/VRDisplay) インターフェイスの [capabilities プロパティ](/ja/docs/Web/API/VRDisplay/capabilities)（[WebVR API](/ja/docs/Web/API/WebVR_API) の一部）
- [Request](/ja/docs/Web/API/Request) インターフェイスの [Request() コンストラクター](/ja/docs/Web/API/Request/Request)（[Fetch API](/ja/docs/Web/API/Fetch_API) の一部）
- [vrdisplaypresentchange イベント](/ja/docs/Web/API/Window/vrdisplaypresentchange_event) ([WebVR API](/ja/docs/Web/API/WebVR_API) の一部、 [Window](/ja/docs/Web/API/Window) インターフェイスにぶら下がっている）

### テンプレート

- [API メソッドサブページテンプレート](/ja/docs/MDN/Structures/Page_types/API_method_subpage_template)
- [API プロパティサブページテンプレート](/ja/docs/MDN/Structures/Page_types/API_property_subpage_template)
- [API コンストラクターサブページテンプレート](/ja/docs/MDN/Structures/Page_types/API_constructor_subpage_template)
- [API イベントサブページテンプレート](/ja/docs/MDN/Structures/Page_types/API_event_subpage_template)

## HTML 要素リファレンスページ

**HTML リファレンスページ**は、 HTML 要素で利用可能なすべての属性を列挙し、要素の目的や使用方法を説明し、例やブラウザーの互換性情報、その他の重要なデータを提供します。

### 例

- [`<video>` 要素](/ja/docs/Web/HTML/Element/video)

### テンプレート

- [HTML 要素ページテンプレート](/ja/docs/MDN/Structures/Page_types/HTML_element_page_template)

## SVG 要素リファレンスページ

**SVG リファレンスページ**は、 SVG 要素で利用可能なすべての属性の一覧、要素の目的および使用法の説明、例、ブラウザーの互換性情報、その他の重要なデータを提供するものです。

### 例

- [\<g> 要素](/ja/docs/Web/SVG/Element/g)

### テンプレート

- [SVG 要素ページテンプレート](/ja/docs/MDN/Structures/Page_types/SVG_element_page_template)

## CSS 機能リファレンスページ

**CSS リファレンスページ**は、セレクターやプロパティなどの CSS 機能について、利用可能なすべての構文を列挙し、その目的や使い方を説明するものです。また、例やブラウザーの互換性などの重要なデータも提供します。

### 例

- [background-color プロパティ](/ja/docs/Web/CSS/background-color)
- [:hover 擬似クラス](/ja/docs/Web/CSS/:hover)
- [@media アットルール](/ja/docs/Web/CSS/@media)

### テンプレート

- [CSS プロパティページテンプレート](/ja/docs/MDN/Structures/Page_types/CSS_property_page_template)
- [CSS セレクターページテンプレート](/ja/docs/MDN/Structures/Page_types/CSS_selector_page_template)

## HTTP ヘッダーリファレンスページ

**HTTP ヘッダーのリファレンスページ**は、 HTTP ヘッダーが含むことのできるすべてのディレクティブを列挙し、ヘッダーの目的と使用法を説明します。
また、例やブラウザの互換性、その他の重要な説明も含まれています。

### 例

- [Cache-Control ヘッダー](/ja/docs/Web/HTTP/Headers/Cache-Control)

### テンプレート

- [HTTP ヘッダーページテンプレート](/ja/docs/MDN/Structures/Page_types/HTTP_header_page_template)

## 概念ページ

**概念ページ**は、何かを説明したり教えたりする*ガイド*ページです。
一般に、あるページが主に散文で書かれており、他のページ種別に分類されない場合、それはおそらく概念ページです。
あるトピックに関する幅広い議論は、複数の概念ページにまたがり、 [Next](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) と [Previous](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs) マクロを使用してリンクされるかもしれません。

### 例

- [WebVR API の使用](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [ウェブ音声 API の視覚化](/ja/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [CSS のカスケードと継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

## 用語集ページ

**用語集ページ**は、用語、トピック、概念の簡単な説明を含んでいます。
最初の段落は、その用語の簡単で自己完結した説明であるべきで、 2 文以下でなければなりません。
その後に、さらに詳しい情報へのリンクを **関連情報** セクションに記述することができます。
ページが画面いっぱいになるほど大きくなる場合は、長すぎるので、概念ページに変換する必要があります。詳しくは、[用語集の項目の書き方と参照方法](/ja/docs/MDN/Contribute/Howto/Write_a_new_entry_in_the_Glossary)を参照してください。

### 例

- [DOM](/ja/docs/Glossary/DOM)
- [Exception](/ja/docs/Glossary/Exception)
- [Hyperlink](/ja/docs/Glossary/Hyperlink)

### テンプレート

- [用語集ページテンプレート](/ja/docs/MDN/Structures/Page_types/Glossary_page_template)

## ランディングページ

**ランディングページ**は、サブページのメニューのような役割を果たすため、主にナビゲーションページと呼ばれます。
ランディングページのレイアウトは、通常、特定のトピックに関するページのツリーのルートページに使用されます。
トピックの簡単な要約で始まり、サブページへのリンクの構造化されたリストが表示され、オプションとして読者に役立つ追加資料が表示されます。

サブページのリストは、テンプレート [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs), [`SubpageMenuByCategories`](https://github.com/mdn/yari/tree/main/kumascript/macros/SubpageMenuByCategories.ejs), [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) を使用して自動的に生成することができます。
しかし、より複雑なケースでは、リストを手作業で作成する必要があるかもしれません（そして、メンテナンスも必要です）。

### 例

- [HTML](/ja/docs/Web/HTML)
- [CSS](/ja/docs/Web/CSS)
- [Web API](/ja/docs/Web/API)
- [JavaScript](/ja/docs/Web/JavaScript)
- [学習領域](/ja/docs/Learn)
- [MDN への協力](/ja/docs/MDN/Contribute)
