---
title: API リファレンスページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: aa66311219951396e7305df61eb31831360d2c79
---

{{MDNSidebar}}

## ページの先頭部分

MDN Web Docs のページにおけるページの先頭部分は、以下の一覧と記述した YAML ヘッダーで構成されます。ページの先頭にあるこの YAML コンテンツは、「ページフロントマター」または「ページメタデータ」を定義するために使用されます。特定のインターフェイスを記述する際には、その値を適切に更新する必要があります。

> **メモ:** _この説明文全体を削除してから公開してください_
>
> ```md
> ---
> title: インターフェイス名
> slug: Web/API/インターフェイス名
> page-type: web-api-interface
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheInterface
> ---
> ```
>
> - **title**
>   - : タイトルの見出しは、ページの最上部に表示されます。これはインターフェイスの名前だけです。例えば、 [Request](/ja/docs/Web/API/Request) インターフェイスのページには _Request_ というタイトルを付けます。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後にくる URL の末尾です。これは `Web/API/インターフェイス名` のような形式になります。例えば、 [Request](/ja/docs/Web/API/Request) のスラッグは "Web/API/Request" になります。
> - **page-type**
>   - : `page-type` キーは、 Web/API のインターフェイスでは常に `web-api-interface` です。
> - **status**
>   - : （適切な）技術の状態のキーを入れてください。
>     [**experimental**](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)、[**deprecated**](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated_and_obsolete)、**non-standard** （標準化過程にない場合）
> - **browser-compat**
>
>   - : プレースホルダーの値 `path.to.feature.NameOfTheMethod` を [ブラウザー互換性データリポジトリー](https://github.com/mdn/browser-compat-data) にあるこのメソッドのクエリー文字列に置き換えてください。
>     ツールチェインが自動的に互換性セクションと仕様書セクションのためにキーを使用します（`\{{Compat}}` と `\{{Specifications}}` マクロを置き換えます）。
>
>     なお、先に[ブラウザー互換性データリポジトリー](https://github.com/mdn/browser-compat-data)に API メソッドのエントリーを作成/更新する必要があり、このエントリーに仕様書を入れておくことが必要です。
>     [これを行うためのガイド](/ja/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)を参照してください。

## ページ先頭のマクロ

既定では、テンプレートの先頭に 5 つのマクロ呼び出しがあります。以下のアドバイスに従って、これらを更新または削除する必要があります。

> **メモ:** _この説明文全体を削除してから公開してください_
>
> - `\{{APIRef("<em>GroupDataName</em>")}}` — これは、左側に現在のページに関連するリンクをすばやく参照できるように表示する、リファレンスサイドバーを生成します。 例えば、 [WebVR API](/ja/docs/Web/API/WebVR_API) のすべてのページには同じサイドバーがあり、これは API の他のページを指しています。API に適したサイドバーを生成するには、弊社の KumaScript GitHub リポジトリーに GroupData の項目を追加し、_GroupDataName_ の代わりにマクロ呼び出し内にその項目の名前を記載する必要があります。この方法については、 [API リファレンスのサイドバー](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_API_reference/Sidebars) ガイドを参照してください。
> - `\{{SeeCompatTable}}` — これは **これは実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。もし、あなたが文書化している技術が実験的なものでないなら、これを削除すべきです。実験的なもので、その技術が Firefox の設定で隠されている場合は、 [Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features) ページにもそのためのエントリーを記入する必要があります。
> - `\{{SecureContext_Header}}` — これは **安全なコンテキスト** バナーを生成し、この技術が[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ利用できることを示します。もしそうでないなら、マクロの呼び出しを削除してください。そうである場合は、[安全なコンテキストに制限されている機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)ページ内の項目も記入してください。
> - `\{{Deprecated_Header}}` — これは **非推奨** バナーを生成し、この技術の使用を[避けるべき](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#廃止と非推奨)であることを示します。そうではない場合は、マクロ呼び出しを削除してください。
> - `\{{Interface_Overview("<em>GroupDataName</em>")}} {{Experimental_Inline}}` — このページ本文（コンストラクタ、プロパティ、メソッド、イベント）を生成します。

{{APIRef("GroupDataName")}}{{SeeCompatTable}}{{SecureContext_Header}}{{Deprecated_Header}}

概要の段落 - まず、インターフェイスの名前、それがどのインターフェイスに属しているか、そしてそれが何をするものなのかを述べます。これはできれば 1、2 の短い文にすべきです。対応する API ランディングページのインターフェイスの概要から、この大部分をコピーすることができます。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}
  - : {{DOMxRef("NameOfTheInterface")}} オブジェクトのインスタンスを生成します。

## 静的プロパティ

_親インターフェイスである {{DOMxRef("NameOfParentInterface")}} から継承しているプロパティもあります。_ （注: このインターフェイスが他のインターフェイスを継承していない場合は、この行全体を削除してください。）

- {{DOMxRef("NameOfTheInterface.staticProperty1")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : ここには、プロパティの簡単な説明と、それが何をするものかを記載してください。各プロパティについて、1 つの用語と定義を記載します。プロパティが読み取り専用/実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。
- {{DOMxRef("NameOfTheInterface.staticProperty2")}}
  - : etc.

## インスタンスプロパティ

_親インターフェイスである {{DOMxRef("NameOfParentInterface")}} から継承しているプロパティもあります。_ （注: このインターフェイスが他のインターフェイスを継承していない場合は、この行全体を削除してください。）

- {{DOMxRef("NameOfTheInterface.property1")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : ここには、プロパティの簡単な説明と、それが何をするものかを記載してください。各プロパティについて、1 つの用語と定義を記載します。プロパティが読み取り専用/実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。
- {{DOMxRef("NameOfTheInterface.property2")}}
  - : etc.

## 静的メソッド

_親インターフェイスである {{DOMxRef("NameOfParentInterface")}} から継承しているメソッドもあります。_ （注: このインターフェイスが他のインターフェイスを継承していない場合は、この行全体を削除してください。）

- {{DOMxRef("NameOfTheInterface.staticMethod1()")}} {{Experimental_Inline}} {{Deprecated_Inline}}
  - : ここにメソッドの簡単な説明と何をするものかを記載してください。各メソッドについて、1つの用語と定義を記載してください。メソッドが実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。
- {{DOMxRef("NameOfTheInterface.staticMethod2()")}}
  - : etc.

## インスタンスメソッド

_親インターフェイスである {{DOMxRef("NameOfParentInterface")}} から継承しているメソッドもあります。_ （注: このインターフェイスが他のインターフェイスを継承していない場合は、この行全体を削除してください。）

- {{DOMxRef("NameOfTheInterface.method1()")}} {{Experimental_Inline}} {{Deprecated_Inline}}
  - : ここにメソッドの簡単な説明と何をするものかを記載してください。各メソッドについて、1つの用語と定義を記載してください。メソッドが実験的/非推奨でない場合、関連するマクロの呼び出しを削除してください。
- {{DOMxRef("NameOfTheInterface.method2()")}}
  - : etc.

## イベント

これらのイベントは [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用するか、このインターフェイスの `oneventname` プロパティにイベントリスナーを割り当てることで待ち受けることができます。

- [`eventname1`](#)
  - : ～時に発生します（イベントがいつ発行されるかの説明を記載する）。
    `oneventname1` プロパティからも利用できます。
- [`eventname2`](#)
  - : ～時に発生します _(イベントがいつ発行されるかの説明を記載する)_.
    `oneventname1` プロパティからも利用できます。
- etc.
  - : ～時に発生します…

## 例

ページ内に例が 1 つしかない場合でも、複数形の "Examples" を使用することに留意してください。

### 説明的な見出し

それぞれの例には、その例を説明する H3 見出し (`###`) がなければなりません。見出しは例が何を行っているかを説明するものであるべきです。例えば、「単純な例」というのは例について何も説明していないので、良い見出しとは言えません。見出しは簡潔であるべきです。より詳しい説明をする場合は、見出しの後の段落を使用してください。

詳しくは、[コード例](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)を追加する方法のガイドをご覧ください。

> **メモ:** 他のページで紹介されている例にリンクしたい場合もあるでしょう。
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

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- この API に関連する
- 有用と思われるリンクの
- リストを記載してください
