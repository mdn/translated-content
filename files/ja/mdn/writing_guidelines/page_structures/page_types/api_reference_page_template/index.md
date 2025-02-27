---
title: API リファレンスページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
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
> 値は具体的なプロパティに応じて適切に更新してください。
>
> ```md
> ---
> title: NameOfTheInterface
> slug: Web/API/NameOfTheInterface
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : タイトルの見出しは、ページの最上部に表示されます。これはインターフェイスの名前だけです。例えば、 [Request](/ja/docs/Web/API/Request) インターフェイスのページには _Request_ というタイトルを付けます。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後にくる URL の末尾です。これは `Web/API/インターフェイス名` のような形式になります。例えば、 [Request](/ja/docs/Web/API/Request) のスラッグは "Web/API/Request" になります。
> - **sourceCommit**
>   - : （翻訳記事のみ）この記事の翻訳元となる英語版記事を GitHub にコミットした際のコミット ID を記述します。 GitHub 上で英語版記事のコミット ID を確認してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> 既定では、テンプレートの先頭に 5 つのマクロ呼び出しがあります。以下のアドバイスに従って、これらを更新または削除する必要があります。
>
> - `\{{APIRef("<em>GroupDataName</em>")}}` — これは、左側に現在のページに関連するリンクをすばやく参照できるように表示する、リファレンスサイドバーを生成します。 例えば、 [WebVR API](/ja/docs/Web/API/WebVR_API) のすべてのページには同じサイドバーがあり、これは API の他のページを指しています。API に適したサイドバーを生成するには、私たちの KumaScript GitHub リポジトリーに GroupData の項目を追加し、_GroupDataName_ の代わりにマクロ呼び出し内にその項目の名前を記載する必要があります。この方法については、 [API リファレンスのサイドバー](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) ガイドを参照してください。
> - `\{{SeeCompatTable}}` — これは **これは実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。実験的なもので、その技術が Firefox の設定で隠されている場合は、 [Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features) ページにもそのための項目を記入する必要があります。
> - `\{{Deprecated_Header}}` — これは **非推奨** バナーを生成し、この技術が[非推奨](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#非推奨)であることを示します。
> - `\{{Non-standard_Header}}` — これは **標準外** バナーを生成し、この機能がどの仕様書にもないことを示します。
> - `\{{SecureContext_Header}}` — これは **安全なコンテキスト** バナーを生成し、この技術が[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ利用できることを示します。もしそうでないなら、マクロの呼び出しを削除してください。そうである場合は、[安全なコンテキストに制限されている機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)ページ内の項目も記入してください。
> - `\{{Interface_Overview("<em>GroupDataName</em>")}} {{Experimental_Inline}}` — このページ本文（コンストラクター、プロパティ、メソッド、イベント）を生成します。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **安全なコンテキスト**、**実験的**、**非推奨**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> _公開前に、忘れずにこの説明文全体を削除してください。_

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

概要の段落 - まず、インターフェイスの名前、それがどのインターフェイスに属しているか、そしてそれが何をするものなのかを述べます。これはできれば 1、2 の短い文にすべきです。対応する API ランディングページのインターフェイスの概要から、この大部分をコピーすることができます。

{{InheritanceDiagram}}

_下記の節で [domxref マクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#リファレンスのページへのリンク)を使用するには、 Markdown ファイルの逆引用符とバックスラッシュを除去してください。_

## コンストラクター

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : `NameOfTheInterface` オブジェクトのインスタンスを生成します。

## 静的プロパティ

_親インターフェイスである `\{{DOMxRef("NameOfParentInterface")}}` から継承したプロパティもあります。_ （注: このインターフェイスが他のインターフェイスを継承していない場合は、この行全体を削除してください。）

プロパティごとに 1 つずつ用語と定義を記述してください。

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : このプロパティの簡単な説明と、それが何をするものかを記載してください。プロパティが読み取り専用/実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : このプロパティの簡単な説明と、それが何をするものかを記載してください。プロパティが読み取り専用/実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。

## インスタンスプロパティ

_親インターフェイスである `\{{DOMxRef("NameOfParentInterface")}}` から継承したプロパティもあります。_ （注: このインターフェイスが他のインターフェイスを継承していない場合は、この行全体を削除してください。）

プロパティごとに 1 つずつ用語と定義を記述してください。

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : このプロパティの簡単な説明と、それが何をするものかを記載してください。プロパティが読み取り専用/実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : このプロパティの簡単な説明と、それが何をするものかを記載してください。プロパティが読み取り専用/実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。

## 静的メソッド

_親インターフェイスである `\{{DOMxRef("NameOfParentInterface")}}` から継承したメソッドもあります。_ （注: このインターフェイスが他のインターフェイスを継承していない場合は、この行全体を削除してください。）

メソッドごとに 1 つずつ用語と定義を記述してください。

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}}
  - : ここにメソッドの簡単な説明と何をするものかを記載してください。メソッドが実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : ここにメソッドの簡単な説明と何をするものかを記載してください。メソッドが実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。

## インスタンスメソッド

_親インターフェイスである `\{{DOMxRef("NameOfParentInterface")}}` から継承したメソッドもあります。_ （注: このインターフェイスが他のインターフェイスを継承していない場合は、この行全体を削除してください。）

メソッドごとに 1 つずつ用語と定義を記述してください。

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}}
  - : ここにメソッドの簡単な説明と何をするものかを記載してください。メソッドが実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : ここにメソッドの簡単な説明と何をするものかを記載してください。メソッドが実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。

## イベント

_親インターフェイスである `\{{DOMxRef("NameOfParentInterface")}}` から継承したイベントもあります。_ （注: このインターフェイスが他のインターフェイスを継承していない場合は、この行全体を削除してください。）

これらのイベントを待ち受けするには、 {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} を使用するか、このインターフェイスの `oneventname` プロパティにイベントリスナーを代入するかしてください。

- [`eventname1`](#)
  - : ～時に発生します（イベントがいつ発行されるかの説明を記載する）。
    `oneventname1` プロパティでも利用できます。
- [`eventname2`](#)
  - : ～時に発生します _(イベントがいつ発行されるかの説明を記載する)_.
    `oneventname2` プロパティでも利用できます。

## 例

英語版では、ページ内に例が 1 つしかない場合でも、複数形の "Examples" を使用しています。

### 説明的な見出し

それぞれの例には、その例を説明する H3 見出し (`###`) がなければなりません。見出しは例が何を行っているかを説明するものであるべきです。例えば、「単純な例」というのは例について何も説明していないので、良い見出しとは言えません。見出しは簡潔であるべきです。より詳しい説明をする場合は、見出しの後の段落を使用してください。

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
> この API の例については、 [fetch() のページ](https://example.org)を参照してください。
> ```

## 仕様書

`\{{Specifications}}`

_このマクロを使用するには、 Markdown ファイルの逆引用符とバックスラッシュを除去してください。_

## ブラウザーの互換性

`\{{Compat}}`

_このマクロを使用するには、 Markdown ファイルの逆引用符とバックスラッシュを除去してください。_

## 関連情報

現在の API に関連するリファレンスページやガイドへのリンクを記述してください。その他のガイドラインについては、スタイル設定ガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。

- リンク1
- リンク2
- 外部リンク (年)
