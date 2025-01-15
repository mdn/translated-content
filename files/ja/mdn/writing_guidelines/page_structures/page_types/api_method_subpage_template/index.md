---
title: API メソッドサブページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template
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
> 値は、個々のメソッドに応じて適切に更新してください。
>
> ```md
> ---
> title: NameOfTheParentInterface: NameOfTheMethod() メソッド
> slug: Web/API/NameOfTheParentInterface/NameOfTheMethod
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : タイトルの見出しは、ページの最上部に表示されます。
>     書式は `NameOfTheParentInterface: NameOfTheMethod() コンストラクター` です。
>     例えば、 [IDBIndex](/ja/docs/Web/API/IDBIndex) インターフェイスの [count()](/ja/docs/Web/API/IDBIndex/count) メソッドには `IDBIndex.count()` というタイトルを付けます。
> - **slug**
>
>   - : `https://developer.mozilla.org/ja/docs/` の後にくる URL の末尾です。
>     これは `Web/API/NameOfTheParentInterface/NameOfTheMethod` のような形式になります。
>
>     静的メソッドの場合、スラッグには `_static` の接尾辞を付けて、 `Web/API/インターフェイス名/メソッド名_static` のようにしてください。これによって、インスタンスメソッドと静的メソッドが同じ名前の場合に対応することができます。
>
>     なお、スラッグでのメソッド名は括弧を省略してください（末尾は `NameOfTheMethod` であり `NameOfTheMethod()` ではありません）。
>
> - **sourceCommit**
>   - : （翻訳記事のみ）この記事の翻訳元となる英語版記事を GitHub にコミットした際のコミット ID を記述します。 GitHub 上で英語版記事のコミット ID を確認してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> コンテンツ部の上部（ページのフロントマターの直下）には、いくつかのマクロ呼び出しが現れます。
> **訳注:** 英語版では以下のバナーは自動的に更新されますが、翻訳記事では更新されませんので、翻訳時に手動で英語版のバナーに合わせてください。
>
> - `\{{SeeCompatTable}}` — これは **これは実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。実験的なもので、その技術が Firefox の設定で隠されている場合は、 [Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features) ページにもそのための項目を記入する必要があります。
> - `\{{Deprecated_Header}}` — これは **非推奨** バナーを生成し、この技術が[非推奨](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#非推奨)であることを示します。
> - `\{{Non-standard_Header}}` — これは **標準外** バナーを生成し、この機能がどの仕様書にもないことを示します。
>
> 下記のアドバイスに従って、以下のマクロを更新または削除してください。
>
> - `\{{SecureContext_Header}}` — これは **安全なコンテキスト** バナーを生成し、この技術が[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ利用できることを示します。
>   もしそうでないなら、マクロの呼び出しを削除してください。
>   そうである場合は、[安全なコンテキストに制限されている機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)ページ内の項目も記入してください。
> - `\{{APIRef("GroupDataName")}}` — これは、現在のページに関連するクイックリファレンスリンクを示す左側のリファレンスサイドバーを生成します。
>   例えば、 [WebVR API](/ja/docs/Web/API/WebVR_API) のすべてのページには同じサイドバーがあり、これは API の他のページを指しています。
>   API に適したサイドバーを生成するには、 KumaScript GitHub リポジトリーに GroupData の項目を追加し、_GroupDataName_ の代わりにマクロ呼び出し内にその項目の名前を記載する必要があります。
>   この方法については、 [API リファレンスサイドバー](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)のガイドを参照してください。このページをコピーする際には、忘れずに `\{{MDNSidebar}}` マクロを除去してください。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **安全なコンテキスト**、**実験的**、**非推奨**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> _公開前に、忘れずにこの説明文全体を削除してください。_

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

ページのコンテンツは導入段落で始めてください。メソッドの名前で始め、それがどのインターフェイスに属しているかを示し、それが何をするのかを述べてください。
これはできれば 1、2 の短い文にすべきです。対応する API リファレンスページのメソッドの概要から、この大部分をコピーすることができます。

## 構文

[構文の節](/ja/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections)の案内に従って、構文ボックスを埋めてください。

### 引数

- `parameter1` {{Optional_Inline}}
  - : ここでは、引数の簡単な説明とその役割を記載してください。各引数につき 1 つの用語と定義を記載してください。引数が省略可能でない場合は、 \\{{optional_inline}} マクロ呼び出しを削除してください。
- `parameter2`
  - : 同様です。

> [!NOTE]
> この節は必須です。引数がない場合は、定義リストの代わりに「なし。」と記述してください。

### 返値

メソッドの返値について、データ型や何を表すかなどの説明を記載してください。

メソッドが何も返さない場合は、「なし ({{jsxref('undefined')}})」と記述してください。

### 例外

このコンストラクターが発生させる可能性がある例外の一覧をすべて記述します。例外ごとに 1 つずつ用語と定義を記述してください。

- `Exception1`
  - : どのような場合に例外が発生するかをの説明を記述してください。
- `Exception2`
  - : どのような場合に例外が発生するかをの説明を記述してください。

例外には 2 種類あることに注意してください。それは {{domxref("DOMException")}} オブジェクトと {{jsxref("TypeError")}} や {{jsxref("RangeError")}} などの通常の JavaScript 例外です。ウェブ開発者は次のことを知る必要があります。

- どのオブジェクトが投げられるか
- `DOMException` オブジェクトの例外の場合、その例外の `name`

ここでは、あるメソッドが `IndexSizeError` という名前の `DOMException` と、 `InvalidNodeTypeError` という名前の 2 つ目の `DOMException` 、そして `TypeError` という型の JavaScript 例外を発生させることができる例を示します。

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown …
- `InvalidNodeTypeError` {{domxref("DOMException")}}
  - : Thrown …
- {{jsxref("TypeError")}}
  - : Thrown …

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
> この API の例については、[fetch() ページ](https://example.org)を参照してください。
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
