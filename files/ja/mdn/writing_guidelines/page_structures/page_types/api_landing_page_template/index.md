---
title: API ランディングページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

> **メモ:** _この説明文全体を削除してから公開してください。_
>
> **訳注:** このテンプレートは翻訳記事用です。新たな記事を執筆する場合は、英語版を参照してください。日本語の単独記事を立項することはできません。）
>
> ---
>
> **ページのフロントマター:**
>
> ページ上部のフロントマターは「ページのメタデータ」を定義するために使用します。
> 値は具体的なインターフェイスに応じて適切に更新してください。
>
> ```md
> ---
> title: NameOfTheAPI API
> slug: Web/API/NameOfTheAPI_API
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : タイトルの見出しはページの先頭に表示されます。
>     これは API の名前に続けて "API" のテキスト、 _NameOfTheAPI_ **API** です。
>     例えば [WebXR 機器](/ja/docs/Web/API/WebXR_Device_API) のタイトルは _WebXR 機器 API_ であり、[フェッチ](/ja/docs/Web/API/Fetch_API) のタイトルは _フェッチ API_ です。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後にくる URL の末尾です。
>     書式は `Web/API/NameOfTheAPI_API` のような形です。
>     例えば [WebXR 機器 API](/ja/docs/Web/API/WebVR_API) のスラッグは `Web/API/WebXR_Device_API` です。
> - **sourceCommit**
>   - : （翻訳記事のみ）この記事の翻訳元となる英語版記事を GitHub にコミットした際のコミット ID を記述します。 GitHub 上で英語版記事のコミット ID を確認してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> コンテンツ部の上部（ページのフロントマターのすぐ下）には、いくつかのマクロ呼び出しが現れます。
> **訳注:** 英語版では以下のマクロは自動的に更新されますが、翻訳記事では更新されませんので、翻訳時に手動で英語版のマクロに合わせてください。
>
> - `\{{SeeCompatTable}}` — これは **これは実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。
>   実験的なもので、その技術が Firefox の設定で隠されている場合は、 [Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features) ページにもそのためのエントリーを記入する必要があります。
> - `\{{Deprecated_Header}}` — これは **非推奨** バナーを生成し、この技術の使用を[避けるべき](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#非推奨)であることを示します。
> - `\{{Non-standard_Header}}` — これは **標準外** バナーを生成し、この機能がどの仕様書にもないことを示します。
>
> 下記のアドバイスに従って、以下のマクロを更新または削除してください。
>
> - `\{{SecureContext_Header}}` — これは **安全なコンテキスト** バナーを生成し、この技術が[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ利用できることを示します。
>   そうではない場合は、マクロ呼び出すを削除することができます。
>   そうである場合は、[安全なコンテキストに制限されている機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)ページ内の項目も記入してください。
> - `\{{APIRef("GroupDataName")}}` — これをクリックすると、現在のページに関連するすばやく参照できるリンクを表示する左側のリファレンスサイドバーが生成されます。
>   例えば、 [WebVR API](/ja/docs/Web/API/WebVR_API) の中の各ページは同じサイドバーを持ち、そこでこの API の別なページにアクセスできます。
>   API に適したサイドバーを生成するには、GitHub リポジトリーに `GroupData` エントリーを追加し、マクロ呼び出しの中で _GroupDataName_ の代わりにそのエントリーの名前を記載する必要があります。
>   この方法については、 [API リファレンスのサイドバー](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)ガイドを参照してください。
> - このページをコピーする際には、 `\{{MDNSidebar}}` マクロを外すのを忘れないでください。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **安全なコンテキスト**、**実験的**、**非推奨**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> ---
>
> **ブラウザーの互換性**
>
> API ランディングページには、オプションでブラウザーの互換性の節を設置し、 API の中で最も重要な 1 つ以上のインターフェイスの互換性一覧表を示します。 API 内のほとんどのインターフェイスで互換性が似ている場合、必要な互換性一覧表 1 つだけです。 API の互換性の全体像が複雑で、少数の表で捉えることが不可能な場合、この節は除外する必要があります。
>
> ブラウザーの互換性の節を埋めるには、先に[ブラウザーの互換性データリポジトリー](https://github.com/mdn/browser-compat-data)に API インターフェイスの項目を作成/更新する必要があるかもしれません。[これを行う方法のガイド](/ja/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)を参照してください。
>
> 互換性情報が必要なインターフェイス毎に `\{{Compat("path.to.feature.Interface")}}` マクロを追加してく、 "path.to.feature.Interface" 引数で、ブラウザー互換性データ内に必要なインターフェイスへのパスを指定してください。
>
> ---
>
> **仕様書**
>
> API ランディングページには、オプションで仕様の節を設置し、それぞれのインターフェイスに関連する仕様を掲載されています。多くの場合、 API のすべてのインターフェイスに応じた仕様書が 1 つだけあります。
>
> 仕様書の節を埋めるには、先に[ブラウザーの互換性データリポジトリー](https://github.com/mdn/browser-compat-data)に API インターフェイスの項目を作成/更新する必要があるかもしれません。[これを行う方法のガイド](/ja/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)を参照してください。
>
> 中心となる仕様書を追加するには `\{{specifications("path.to.feature.Interface")}}` マクロを使用してください。
>
> ---
>
> _公開する前に、この説明文全体を削除することを忘れないでください。_

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

ページのコンテンツは導入段落から始めてください。API の名前で始め、それが何をするのかを示してください。これはできれば 1、2 の短い文にすべきです。

## 概念と用途

この節では、 API の目的と用途をもう少し詳しく説明してください。なぜ API の必要性が認識されたのか。
それは何か問題を解決するものですか？どのような概念を含んでいますか？高水準な視点から、どのように使用するのですか？

この節ではあまり立ち入った説明はせず、サンプルコードも記載しないでください。
この API について解説すべき概念がたくさんある場合は、別に「基礎」や「概念」の記事で説明してください（例: [WebXR の基礎](/ja/docs/Web/API/WebXR_Device_API/Fundamentals)）。
サンプルコード付きの実用的な使用ガイドについては、API ドキュメントに「...の使用」の記事を記載しましょう (例: [WebVR API の使用](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API))。

コンテンツを発見性しやすくして {{Glossary("SEO")}} に役立つように、以下のヒントを覚えておいてください。

## インターフェイス

_下記の節で [domxref マクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#リファレンスのページへのリンク)を使用するには、 Markdown ファイルの逆引用符とバックスラッシュを除去してください。_

- `\{{domxref("NameOfTheInterface")}}`
  - : インターフェイスの簡単な説明とその機能をここに記載してください。
    各インターフェイスまたは辞書につき 1 つの用語と定義を記載します。

### 他のインターフェイスの拡張

_インターフェイス名_ は以下の API を拡張し、挙げた機能を追加します。

#### インターフェイス 1

- `\{{domxref("addition1")}}`
  - : 現在文書化している API によって、その API に追加されたインターフェイス#1の機能の説明。
    各機能につき 1 つずつの用語と定義。この API が他のインターフェイスを拡張しない場合は、この節を削除することができます。

#### インターフェイス 2

- `\{{domxref("addition1")}}`
  - : 現在文書化している API によって、その API に追加されたインターフェイス#2の機能の説明。

## 例

ページ内に例が 1 つしかない場合でも、複数形の "Examples" を使用することに留意してください。

### 説明的な見出し

それぞれの例には、その例を説明する H3 見出しがなければなりません。見出しは例が何を行っているかを説明するものであるべきです。例えば、「単純な例」というのは例について何も説明していないので、良い見出しとは言えません。見出しは簡潔であるべきです。より詳しい説明をする場合は、見出しの後の段落を使用してください。

詳しくは、[サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)を追加する方法のガイドをご覧ください。

> [!NOTE]
> 他のページで紹介されている例にリンクしたい場合もあるでしょう。
>
> **シナリオ 1:** このページにいくつかの例があり、別のページにさらにいくつかの例がある場合。
>
> このページのそれぞれの例に H3 見出し (`###`) を記載し、最後に H3 見出し (`###`) に「その他の例」というテキストを入れ、その下に他のページの例へのリンクを貼ることができます。例えば次のようにします。
>
> ```md
> ## 例
>
> ### Fetch API の使用
>
> Fetch の例
>
> ### その他の例
>
> 他のページにある他の例へのリンク
> ```
>
> **シナリオ 2:** このページには何も例がなく、他のページに*だけ*ある場合。
>
> H3 の見出しは追加せず、 H2 の見出し「例」の下に直接リンクを追加してください。例えば次のようにします。
>
> ```md
> ## 例
>
> この API の例については、[fetch() のページ](https://example.org)を参照してください。
> ```

## 仕様書

`\{{Specifications("path.to.feature.Interface_1")}}`

`\{{Specifications("path.to.feature.Interface_2")}}`

_このマクロを使用するには、 Markdown ファイルの逆引用符とバックスラッシュを除去してください。_

## ブラウザーの互換性

`\{{Compat("path.to.feature.Interface_1")}}`

`\{{Compat("path.to.feature.Interface_2")}}`

_このマクロを使用するには、 Markdown ファイルの逆引用符とバックスラッシュを除去してください。_

## 関連情報

現在の API に関連するリファレンスページやガイドへのリンクを記述してください。その他のガイドラインについては、スタイル設定ガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。

- リンク1
- リンク2
- 外部リンク (年)
