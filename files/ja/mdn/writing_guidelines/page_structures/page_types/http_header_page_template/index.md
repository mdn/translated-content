---
title: HTTP ヘッダーページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
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
> 値は、個々のヘッダーに応じて適切に書き換える必要があります。
>
> ```md
> ---
> title: NameOfTheHeader ヘッダー
> short-title: NameOfTheHeader
> slug: Web/HTTP/Reference/Headers/NameOfTheHeader
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : タイトルの見出しで、ページの最上部に表示されます。書式は _NameOfTheHeader ヘッダー_ です。例えば、 [Cache-Control](/ja/docs/Web/HTTP/Reference/Headers/Cache-Control) ヘッダーの _title_ は `Cache-Control ヘッダー` となります。
> - **short-title**
>   - : パンくずリストやサイドバーで使用される短縮タイトルです。_NameOfTheHeader_ の書式で記述します。例えば、[Cache-Control](/ja/docs/Web/HTTP/Reference/Headers/Cache-Control) ヘッダーの _short-title_ は `Cache-Control` です。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後にくる URL の末尾です。これは `Web/HTTP/Reference/Headers/NameOfTheHeader` のような形式になります。例えば、[Cache-Control](/ja/docs/Web/HTTP/Reference/Headers/Cache-Control) の _slug_ は `Web/HTTP/Reference/Headers/Cache-Control` となります。
> - **sourceCommit**
>   - : （翻訳記事のみ）この記事の翻訳元となる英語版記事を GitHub にコミットした際のコミット ID を記述します。 GitHub 上で英語版記事のコミット ID を確認してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> コンテンツ部の上部、ページのフロントマターのすぐ下には、いくつかのマクロ呼び出しが現れます。
> **訳注:** 英語版では以下のマクロは自動的に更新されますが、翻訳記事では更新されませんので、翻訳時に手動で英語版のマクロに合わせてください。
>
> - `\{{SeeCompatTable}}` — これは **これは実験的な機能です。** のバナーを生成し、このヘッダーが[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。
>   実験的なもので、その技術が Firefox の設定で隠されている場合は、 [Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features) ページにもそのためのエントリーを記入する必要があります。
> - `\{{deprecated_header}}` — これは **非推奨** バナーを生成し、このヘッダーの使用を[避けるべき](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#非推奨)であることを示します。
> - `\{{Non-standard_Header}}` — これは **標準外** バナーを生成し、この機能がどの仕様書にもないことを示します。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **実験的**、**非推奨**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> _公開する前に、この説明文全体を削除することを忘れないでください。_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

このページの最初の文は、以下の形式に準拠しなければなりません。

> HTTP の **`header-name`** （ヘッダーの種類）は、Y の環境で X のために使用されます。

「ヘッダーの種類」には、それが{{Glossary("request header", "リクエストヘッダー")}}か、{{Glossary("response header", "レスポンスヘッダー")}}か、あるいはその両方を入れます。
概要の段落は、できれば 1 ～ 2 つの短い文にまとめてください。

この節では、注意すべき点やよくある落とし穴について言及し、例やより詳細なドキュメント（ガイドなど）へのリンクを掲載することができます。
この節は 2 ～ 3 段落程度が適切です。また、記載すべき重要な使用上の注意事項がある場合は、下記の「ディレクティブ」の後に「解説」セクションを設けてください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        ヘッダーカテゴリーを入れてください。例えば、
        {{Glossary("Request header", "リクエストヘッダー")}}、
        {{Glossary("Response header", "レスポンスヘッダー")}}、
        <a href="/ja/docs/Web/HTTP/Guides/Client_hints">クライアントヒント</a>などです。
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>「はい」または「いいえ」</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
      </th>
      <td>「はい」または「いいえ」</td>
    </tr>
  </tbody>
</table>

## 構文

[構文の節](/ja/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections)の記事のガイダンスに従って、下記のように構文ボックスを埋めてください。

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

ヘッダーに利用できるディレクティブが多い場合は、自由に複数の構文ボックス、項、説明を適宜記載してください。

```http
NameOfTheHeader: <directive3>, …, <directiveN>
```

ディレクティブは大文字と小文字を区別せず、トークンと引用符で囲まれた文字列の構文を使用することができます。
複数のディレクティブはカンマで区切られます (必要に応じて情報を削除してください)。

## ディレクティブ

- `directive1`
  - : ディレクティブの簡単な説明と、それが何をするのかをここに記載してください。
    ディレクティブごとに、用語と定義を 1 つずつ記載してください。
- `directive2`
  - : 同様です。

ヘッダーに利用できるディレクティブが多い場合は、自由に複数の定義リスト、項、説明を適宜記載してください。

## 解説

冒頭の段落に記載するコンテンツが膨大すぎる場合は、背景情報、使用上のヒント、ドキュメントへのリンクなど、必要な詳細情報をここに記載してください。
広く展開されている実装が仕様書に記載されている内容と異なる場合、実際のパターンが仕様と異なっているかどうかを記載するのに良く適した場所です。

## 例

英語版では、ページ内に例が 1 つしかない場合でも、複数形の "Examples" を使用していることに留意してください。

### 説明的な見出し

それぞれの例には、その例を説明する H3 見出し (`###`) が**なければなりません**。見出しは例が何を行っているかを説明するものであるべきです。例えば、「単純な例」というのは例について何も説明していないので、良い見出しとは言えません。見出しは簡潔であるべきです。より詳しい説明をする場合は、見出しの後の段落を使用してください。

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

_ブラウザーがこのヘッダーに対して特別な処理を行わない場合は、下記マクロを除去してください。_
_それ以外の場合は、このマクロを使用するために、Markdown ファイル内のバッククォートとバックスラッシュを除去してください。_

`\{{Compat}}`

_ブラウザーがヘッダーに対して特定の処理を行う場合は、下記テキストを除去してください。_

このヘッダーには、仕様で定義されたユーザーエージェントとの連携機能はありません（「ブラウザーの互換性」は適用されません）。
開発者は、アプリケーション固有の実装動作を実現するために、`fetch()` を使用して HTTP ヘッダーを設定および取得することができます。

## 関連情報

現在の HTTP ヘッダーに関連するリファレンスページやガイドへのリンクを記述してください。
その他のガイドラインについては、スタイル設定ガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。
`\{{HTTPStatus("123", "123 Reason")}}` のような関連するレスポンスステータスや、`\{{HTTPHeader("Header-Name")}}` のようなヘッダーにリンクを設定できます。
簡潔にするために、関連するステータスやヘッダーを 1 つのリストアイテムにまとめても構いません。

- リンク1
- リンク2
- 外部リンク (年)
