---
title: API イベントサブページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: 88e4ba556d3a475dc4d60937f7db5178b2a1d54b
---

> [!NOTE]
> _この説明文全体を削除してから公開してください。_
>
> **訳注:** このテンプレートは翻訳記事用です。新たな記事を執筆する場合は、英語版を参照してください。日本語の単独記事を立項することはできません。
>
> ---
>
> **ページのフロントマター:**
>
> ページ上部のフロントマターは「ページのメタデータ」を定義するために使用します。
> 値は、個々のイベントに応じて適切に書き換える必要があります。
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheEvent イベント"
> slug: Web/API/NameOfTheParentInterface/NameOfTheEvent_event
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : タイトルの見出しで、ページの最上部に表示されます。
>     書式は "_インターフェイス名_**:** _イベント名_ **イベント**" です。
>     例えば、[Element](/ja/docs/Web/API/Element) インターフェイスの [animationcancel](/ja/docs/Web/API/Element/animationcancel_event) イベントの `title` は `Window: animationcancel イベント` としてください。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後にくる URL の末尾です。
>     これは `Web/API/NameOfTheParentInterface/NameOfTheEvent_event` のような形式になります。
> - **sourceCommit**
>   - : （翻訳記事のみ）翻訳元の英語版記事の GitHub コミット ID を記述します。GitHub 上で英語版記事のコミット ID を確認してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> コンテンツセクションの上部（ページのフロントマターのすぐ下）には、いくつかのマクロ呼び出しが現れます。
>
> **訳注:** 英語版では以下のマクロは自動的に追加・更新されますが、翻訳記事には自動的に反映されません。翻訳時に英語版に合わせて手動で追加、更新、削除してください。
>
> - `\{{SeeCompatTable}}` — これは **実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。
>   実験的なもので、その技術が Firefox の設定で隠されている場合は、[Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features) ページにもそのためのエントリーを記入する必要があります。
> - `\{{Non-standard_Header}}` — これは **標準外** バナーを生成し、この機能がどの仕様書にもないことを示します。
>
> 下記のアドバイスに従って、以下のマクロを更新または削除してください。
>
> - `\{{SecureContext_Header}}` — これは **保護されたコンテキスト** バナーを生成し、この技術が[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)でのみ利用できることを示します。
>   そうではない場合は、マクロ呼び出しを削除することができます。
>   そうである場合は、[保護されたコンテキストに制限されている機能](/ja/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)ページ内の項目も記入してください。
> - `\{{AvailableInWorkers}}` — これにより、**ウェブワーカーで利用可能**というメモが生成され、その技術が [ウェブワーカーのコンテキスト](/ja/docs/Web/API/Web_Workers_API) で利用可能であることを示します。
>   ウィンドウコンテキストでのみ利用できる場合は、そのマクロの呼び出しを除去できます。
>   もしそれがワーカーコンテキストでも利用できる、あるいはワーカーコンテキストでのみ利用できる場合、その利用状況に応じて引数を渡す必要があることがあります（利用できるすべての値については、[\\{{AvailableInWorkers}} マクロのソースコード](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)をご参照ください）。また、[ウェブワーカーで利用可能な Web API](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#ワーカーで使用できる_web_api) ページに、その項目を追加する必要があることがあります。
> - `\{{APIRef("GroupDataName")}}` — これをクリックすると、現在のページに関連するすばやく参照できるリンクを表示する左側のリファレンスサイドバーが生成されます。
>   例えば、[WebVR API](/ja/docs/Web/API/WebVR_API) の中の各ページは同じサイドバーを持ち、そこでこの API の別なページにアクセスできます。
>   API に適したサイドバーを生成するには、GitHub リポジトリーに `GroupData` エントリーを追加し、マクロ呼び出しの中で _GroupDataName_ の代わりにそのエントリーの名前を記載する必要があります。
>   この方法については、[API リファレンスのサイドバー](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)ガイドを参照してください。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **保護されたコンテキスト**、**ワーカーで利用可能**、**実験的**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> ---
>
> **親オブジェクトのリンク**
>
> 親オブジェクトの「イベント」セクションに、この新しいページへのリンクを追加してください。
> 例えば [Element: wheel イベント](/ja/docs/Web/API/Element/wheel_event)は [`Element` Events](/ja/docs/Web/API/Element#イベント) からリンクされます。
>
> 親オブジェクトに「イベント」セクションがない場合は、追加してください。
> これが新しい「クラス」のイベントであれば、[DOM イベント](/ja/docs/Web/API/Document_Object_Model/Events)から親のこの節へのリンクを追加する必要があります。
>
> _この説明文全体を削除してから公開してください。_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_Header}}

ページのコンテンツは導入段落で始めてください。イベントの名前で始め、それがどのインターフェイスに属しているかを示し、それが何をするのかを述べてください。
これはできれば 1、2 の短い文にすべきです。
対応する API リファレンスページのイベントの概要から、この大部分をコピーすることができます。

## 構文

このイベント名を {{domxref("EventTarget/addEventListener", "addEventListener()")}} で使用します。

```js-nolint
addEventListener("NameOfTheEvent", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#onevent_プロパティの使用)にイベントハンドラーを代入します。

```js-nolint
onNameOfTheEvent = (event) => { }
```

## イベント型

イベントが特殊な型である場合、その継承についても言及してください。そうでない場合は、一般的なイベントであることを示します。

_一般的な {{domxref("Event")}} です。_

または、例えば、

_{{domxref("XRSessionEvent")}} です。{{domxref("Event")}} を継承しています。_

{{InheritanceDiagram("XRSessionEvent")}}

## 解説

（概要には長すぎて）追加のテキストを提供したい場合、解説セクションを追加してください。
以下のような見出しを入れることができます。

### イベントの発生

および

### 用途

もっと詳しい情報を記述することができます。

## 例

英語版では、例が 1 つだけのページでも、複数形の "Examples" を使用しています。

### 説明的な見出し

それぞれの例には、その例の内容を説明する H3 見出し (`###`) が必要です。見出しには例で何を行うかを具体的に記述してください。「単純な例」のような、何を示すのか分からない見出しは避けてください。見出しは簡潔にし、詳しい説明は見出しの後の段落に記載してください。

詳しくは、[サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)を追加する方法のガイドをご覧ください。

`addEventListener()` と `onEvent` の両方を示す場合は、2 つの例が同等だと主張したり、そう誤解させたりしないでください。できれば、「ただし、`onEvent` を使って追加したほかのイベントリスナーがあれば、それらを置き換えることに注意してください」と明記してください。

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
> H3 の見出しは追加せず、H2 の見出し「例」の下に直接リンクを追加してください。例えば次のようにします。
>
> ```md
> ## 例
>
> この API の例については、[fetch() のページ](https://example.org/)を参照してください。
> ```

## 仕様書

`\{{Specifications}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## ブラウザーの互換性

`\{{Compat}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## 関連情報

現在の API に関連するリファレンスページやガイドへのリンクを記述してください。その他のガイドラインについては、執筆スタイルガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。

- リンク1
- リンク2
- 外部リンク (年)
