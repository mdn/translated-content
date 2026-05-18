---
title: API プロパティサブページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

> [!NOTE]
> _この説明文全体を削除してから公開してください。_
>
> **訳注:** このテンプレートは翻訳記事用です。新たな記事を執筆する場合は、英語版を参照してください。日本語の単独記事を立項することはできません。）
>
> ---
>
> **ページのフロントマター:**
>
> ページ上部のフロントマターは「ページのメタデータ」を定義するために使用します。
> 値は、個々のプロパティに応じて適切に書き換える必要があります。
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheProperty プロパティ"
> short-title: NameOfTheProperty
> slug: Web/API/NameOfTheParentInterface/NameOfTheProperty
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : タイトルの見出しで、ページの最上部に表示されます。
>     書式は `NameOfTheParentInterface: NameOfTheProperty プロパティ` です。
>     例えば、 [VRDisplay](/ja/docs/Web/API/VRDisplay) インターフェイスの [capabilities](/ja/docs/Web/API/VRDisplay/capabilities) プロパティの `title` は `VRDisplay: capabilities プロパティ` としてください。
> - **short-title**
>   - : このプロパティの名前です（サイドバーで使用されます）。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後にくる URL の末尾です。
>     これは `Web/API/NameOfTheParentInterface/NameOfTheProperty` のような形式になります。
>
>     静的プロパティの場合、スラッグには `_static` の接尾辞を付けて、 `Web/API/インターフェイス名/プロパティ名_static` のようにしてください。これによって、インスタンスプロパティと静的プロパティが同じ名前の場合に対応することができます。
>
> - **sourceCommit**
>   - : （翻訳記事のみ）この記事の翻訳元となる英語版記事を GitHub にコミットした際のコミット ID を記述します。 GitHub 上で英語版記事のコミット ID を確認してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> コンテンツ部の上部（ページのフロントマターのすぐ下）には、いくつかのマクロ呼び出しが現れます。
>
> **訳注:** 英語版では以下のマクロは自動的に更新されますが、翻訳記事では更新されませんので、翻訳時に手動で英語版のマクロに合わせてください。
>
> - `\{{SeeCompatTable}}` — これは **これは実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。
>   実験的なもので、その技術が Firefox の設定で隠されている場合は、 [Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features) ページにもそのためのエントリーを記入する必要があります。
> - `\{{Deprecated_Header}}` — これは **非推奨** バナーを生成し、この技術の使用を[避けるべき](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#非推奨)であることを示します。
> - `\{{Non-standard_Header}}` — これは **標準外** バナーを生成し、この機能がどの仕様書にもないことを示します。
>
> 下記のアドバイスに従って、以下のマクロを更新または削除してください。
>
> - `\{{SecureContext_Header}}` — これは **保護されたコンテキスト** バナーを生成し、この技術が[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)でのみ利用できることを示します。
>   そうではない場合は、マクロ呼び出すを削除することができます。
>   そうである場合は、[保護されたコンテキストに制限されている機能](/ja/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)ページ内の項目も記入してください。
> - `\{{AvailableInWorkers}}` — これにより、**ウェブワーカーで利用可能**というメモが生成され、その技術が [ウェブワーカーのコンテキスト](/ja/docs/Web/API/Web_Workers_API) で利用可能であることを示します。
>   ウィンドウコンテキストでのみ利用できる場合は、そのマクロの呼び出しを除去できます。
>   もしそれがワーカーコンテキストでも利用できる、あるいはワーカーコンテキストでのみ利用できる場合、その利用状況に応じて引数を渡す必要があることがあります（利用できるすべての値については、[\\{{AvailableInWorkers}} マクロのソースコード](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)をご参照ください）。また、[ウェブワーカーで利用可能な Web API](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#ワーカーで使用できる_web_api) ページに、その項目を追加する必要があることがあります。
> - `\{{APIRef("GroupDataName")}}` — これをクリックすると、現在のページに関連するすばやく参照できるリンクを表示する左側のリファレンスサイドバーが生成されます。
>   例えば、 [WebVR API](/ja/docs/Web/API/WebVR_API) の中の各ページは同じサイドバーを持ち、そこでこの API の別なページにアクセスできます。
>   API に適したサイドバーを生成するには、GitHub リポジトリーに `GroupData` エントリーを追加し、マクロ呼び出しの中で _GroupDataName_ の代わりにそのエントリーの名前を記載する必要があります。
>   この方法については、 [API リファレンスのサイドバー](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)ガイドを参照してください。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **保護されたコンテキスト**、**ワーカーで利用可能**、**実験的**、**非推奨**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> _公開する前に、この説明文全体を削除することを忘れないでください。_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

**`NameOfTheProperty`** は \{{domxref("NameOfTheParentInterface")}} インターフェイスの[読み取り専用]プロパティで、 _\<その動作の簡潔な概要を提供します\>_。

_まず、プロパティの名前（読み取り専用かどうかを示す）と、そのプロパティが属するインターフェイスを指定し、その後にそのプロパティの役割を示します。_

_これはできれば 1、2 の短い文にすべきです。_
_数段落以上の説明が必要な場合は、「例」の節の前に「解説」の節を追加して、そこに記載してください。_

## 値

\{{domxref("SomeDataType" )}} です。

_通常はデータ型のみを記載し、必要に応じてそのデータ型の取り得る値も記載します。_
_プロパティのセッターとゲッターの動作が異なる場合は、通常、それぞれ別個の文で網羅します。_

_場合によっては、データ型が何を表しているかについて、さらに詳しく説明したいことがあるでしょう。_
_これは問題ありませんが、「解説」の節に書かれている情報と重複しないようにしてください（値の意味については、そちらに記載すべきです）。_

一部のプロパティページでは、「...を表す [プロパティ型の名前] を返す」という形式で記述されていますが、これは推奨される形式ではありません。
また、特定の意味を持つ一部の WebIDL 拡張属性は、その型に関連付けられます。これらを文書化する標準的な方法があります。詳細については、[WebIDL ファイルに含まれる情報](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#プロパティの型)を参照してください。

<!--
## 解説

必要に応じて、追加の説明を記載してください。
-->

## 例

ページ内に例が 1 つしかない場合でも、複数形の "Examples" を使用することに留意してください。

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
> この API の例については、[fetch() のページ](https://example.org/)を参照してください。
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
