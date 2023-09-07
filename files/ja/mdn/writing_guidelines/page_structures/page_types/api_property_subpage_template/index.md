---
title: API プロパティサブページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: aa66311219951396e7305df61eb31831360d2c79
---

{{MDNSidebar}}

> **メモ:** _この説明文全体を削除してから公開してください_
>
> ---
>
> **ページの先頭部分:**
>
> ページ上部の先頭部分は、「ページのメタデータ」を定義するために使用します。
> 値は、個々のプロパティに応じて適切に書き換える必要があります。
>
> ```md
> ---
> title: インターフェイス名.プロパティ名
> slug: Web/API/インターフェイス名/プロパティ名
> page-type: web-api-instance-property または web-api-static-property
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : タイトルの見出しは、ページの最上部に表示されます。
>     書式は _インターフェイス名_**.**_プロパティ名_ です。
>     例えば、 [VRDisplay](/ja/docs/Web/API/VRDisplay) インターフェイスの [capabilities](/ja/docs/Web/API/VRDisplay/capabilities) プロパティには _VRDisplay.capabilities_ というタイトルを付けます。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後にくる URL の末尾です。
>     これは `Web/API/インターフェイス名/プロパティ名` のような形式になります。
> - **page-type**
>   - : `page-type` キーは、 Web/API プロパティでは `web-api-instance-property` （インスタンスプロパティの場合）または `web-api-static-property` （静的プロパティの場合）です。
> - **status**
>   - : （適切な）技術の状態のキーを入れてください。
>     [**experimental**](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)、[**deprecated**](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated_and_obsolete)、**non-standard** （標準化過程にない場合）
> - **browser-compat**
>
>   - : プレースホルダーの値 `path.to.feature.NameOfTheProperty` を [ブラウザー互換性データリポジトリー](https://github.com/mdn/browser-compat-data) にあるプロパティのクエリー文字列に置き換えてください。
>     ツールチェインが自動的に互換性セクションと仕様書セクションのためにキーを使用します（`\{{Compat}}` と `\{{Specifications}}` マクロを置き換えます）。
>
>     なお、先に[ブラウザー互換性データリポジトリー](https://github.com/mdn/browser-compat-data)にこの API プロパティのエントリーを作成/更新する必要があり、この API プロパティのエントリーに仕様書の情報を入れておくことが必要です。
>     [これを行うためのガイド](/ja/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)を参照してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> コンテンツセクションの上部（ページの先頭部分のすぐ下）には、いくつかのマクロ呼び出しが現れます。
> 以下のアドバイスに従って、更新または削除してください。
>
> - `\{{SeeCompatTable}}` — これは **これは実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。
>   もし、あなたが文書化している技術が実験的なものでないなら、これを削除すべきです。
>   実験的なもので、その技術が Firefox の設定で隠されている場合は、 [Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features) ページにもそのためのエントリーを記入する必要があります。
> - `\{{Deprecated_Header}}` — これは **非推奨** バナーを生成し、この技術の使用を[避けるべき](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#廃止と非推奨)であることを示します。
>   そうではない場合は、マクロ呼び出すを削除することができます。
> - `\{{SecureContext_Header}}` — これは **安全なコンテキスト** バナーを生成し、この技術が[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ利用できることを示します。
>   そうではない場合は、マクロ呼び出すを削除することができます。
>   そうである場合は、[安全なコンテキストに制限されている機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)ページ内の項目も記入してください。
> - `\{{APIRef("GroupDataName")}}` — これをクリックすると、現在のページに関連するすばやく参照できるリンクを表示する左側のリファレンスサイドバーが生成されます。
>   例えば、 [WebVR API](/ja/docs/Web/API/WebVR_API) の中の各ページは同じサイドバーを持ち、そこでこの API の別なページにアクセスできます。
>   API に適したサイドバーを生成するには、GitHub リポジトリーに `GroupData` エントリーを追加し、マクロ呼び出しの中で _GroupDataName_ の代わりにそのエントリーの名前を記載する必要があります。
>   この方法については、 [API リファレンスのサイドバー](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_API_reference/Sidebars)ガイドを参照してください。
> - このページをコピーする際には、 `\{{MDNSidebar}}` マクロを外すのを忘れないでください。
>
> _公開する前に、この説明文全体を削除することを忘れないでください_

{{APIRef("GroupDataName")}}{{SeeCompatTable}}{{SecureContext_Header}}{{Deprecated_Header}}

概要の段落 - まず、プロパティの名前、それがどのインターフェイスに属しているか、そしてそれが何をするものなのかを述べます。
これはできれば 1、2 の短い文にすべきです。
対応する API リファレンスページのプロパティの概要から、この大部分をコピーすることができます。読み取り専用であるかどうかを記載してください。

## 値

プロパティの値について、データ型や何を表すかなどの説明を記載してください。

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
