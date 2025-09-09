---
title: API イベントサブページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

> [!NOTE]
> _この説明文全体を削除してから公開してください。_
>
> **訳注:** このテンプレートは翻訳記事用です。新たな記事を執筆する場合は、英語版を参照してください。日本語の単独記事を作成することはできません。）
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
>     例えば、 [Element](/ja/docs/Web/API/Element) インターフェイスの [animationcancel](/ja/docs/Web/API/Element/animationcancel_event) イベントの `title` は `Window: animationcancel イベント` としてください。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後にくる URL の末尾です。
>     これは `Web/API/NameOfTheParentInterface/NameOfTheEvent_event` のような形式になります。
> - **sourceCommit**
>   - : （翻訳記事のみ）この記事の翻訳元となる英語版記事を GitHub にコミットした際のコミット ID を記述します。 GitHub 上で英語版記事のコミット ID を確認してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> コンテンツセクションの上部（ページのフロントマターのすぐ下）には、いくつかのマクロ呼び出しが現れます。
> 以下のアドバイスに従って、更新または削除してください。
>
> - `\{{SeeCompatTable}}` — これは **これは実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。
>   実験的なもので、その技術が Firefox の設定で隠されている場合は、 [Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features) ページにもそのためのエントリーを記入する必要があります。
> - `\{{Deprecated_Header}}` — これは **非推奨** バナーを生成し、この技術の使用を[避けるべき](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#非推奨)であることを示します。
> - `\{{Non-standard_Header}}` — これは **標準外** バナーを生成し、この機能がどの仕様書にもないことを示します。
>
> 下記のアドバイスに従って、以下のマクロを更新または削除してください。
>
> - `\{{SecureContext_Header}}` — これは **保護されたコンテキスト** バナーを生成し、この技術が[保護されたコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ利用できることを示します。
>   そうではない場合は、マクロ呼び出すを削除することができます。
>   そうである場合は、[保護されたコンテキストに制限されている機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)ページ内の項目も記入してください。
> - `\{{APIRef("GroupDataName")}}` — これをクリックすると、現在のページに関連するすばやく参照できるリンクを表示する左側のリファレンスサイドバーが生成されます。
>   例えば、 [WebVR API](/ja/docs/Web/API/WebVR_API) の中の各ページは同じサイドバーを持ち、そこでこの API の別なページにアクセスできます。
>   API に適したサイドバーを生成するには、GitHub リポジトリーに `GroupData` エントリーを追加し、マクロ呼び出しの中で _GroupDataName_ の代わりにそのエントリーの名前を記載する必要があります。
>   この方法については、 [API リファレンスのサイドバー](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)ガイドを参照してください。
> - このページをコピーする際には、 `\{{MDNSidebar}}` マクロを外すのを忘れないでください。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **保護されたコンテキスト**、**実験的**、**非推奨**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> ---
>
> **親オブジェクトのリンク**
>
> 親オブジェクトの「イベント」セクションに、この新しいページへのリンクを追加してください。
> 例えば [Element: wheel イベント](/ja/docs/Web/API/Element/wheel_event)は [`Element` Events](/ja/docs/Web/API/Element#イベント) からリンクされます。
>
> 親オブジェクトに「イベント」セクションがない場合は、追加してください。
> これが新しい「クラス」のイベントであれば、[イベントリファレンス](/ja/docs/Web/API/Document_Object_Model/Events)から親のこの節へのリンクを追加する必要があります。
>
> _公開する前に、この説明文全体を削除することを忘れないでください。_

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

ページのコンテンツは導入段落で始めてください。イベントの名前で始め、それがどのインターフェイスに属しているかを示し、それが何をするのかを述べてください。
これはできれば 1、2 の短い文にすべきです。
対応する API リファレンスページのプロパティの概要から、この大部分をコピーすることができます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("NameOfTheEvent", (event) => {});

onNameOfTheEvent = (event) => {};
```

## イベント型

イベントが特殊な型である場合、その継承についても言及してください。そうでない場合は、一般的なイベントであることを示します。

_一般的な {{domxref("Event")}} です。_

または、例えば、

_{{domxref("XRSessionEvent")}} です。 {{domxref("Event")}} を継承しています。_

{{InheritanceDiagram("XRSessionEvent")}}

## イベントのプロパティ

イベントが単なる一般的な {{domxref("Event")}} でない場合、そのイベントが持つ追加のプロパティを挙げてください。

_以下の一覧のプロパティに加え、親インターフェイスである {{domxref("Event")}} のプロパティも使用可能です。_

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : このイベントが参照する {{domxref("XRSession")}} です。

## 解説

（概要には長すぎて）追加のテキストを提供したい場合、解説セクションを追加してください。
以下のような見出しを入れることができます。

### イベントの発生

および

### 用途

もっと詳しい情報を記述することができます。

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
> この API の例については、[fetch() のページ](https://example.org)を参照してください。
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
