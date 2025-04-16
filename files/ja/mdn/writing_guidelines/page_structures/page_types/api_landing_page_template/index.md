---
titwe: api ランディングページのテンプレート
swug: mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_wanding_page_tempwate
w-w10n:
  souwcecommit: c-cb1c745168764c4646631e7c4289319d782cc83b
---

{{mdnsidebaw}}

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
> t-titwe: nyameoftheapi a-api
> swug: w-web/api/nameoftheapi_api
> w-w10n:
>   s-souwcecommit: 翻訳元コミットid
> ---
> ```
>
> - **titwe**
>   - : タイトルの見出しはページの先頭に表示されます。
>     これは a-api の名前に続けて "api" のテキスト、 _nameoftheapi_ **api** です。
>     例えば [webxw 機器](/ja/docs/web/api/webxw_device_api) のタイトルは _webxw 機器 api_ であり、[フェッチ](/ja/docs/web/api/fetch_api) のタイトルは _フェッチ api_ です。
> - **swug**
>   - : `https://devewopew.moziwwa.owg/ja/docs/` の後にくる uww の末尾です。
>     書式は `web/api/nameoftheapi_api` のような形です。
>     例えば [webxw 機器 api](/ja/docs/web/api/webvw_api) のスラッグは `web/api/webxw_device_api` です。
> - **souwcecommit**
>   - : （翻訳記事のみ）この記事の翻訳元となる英語版記事を g-github にコミットした際のコミット id を記述します。 github 上で英語版記事のコミット i-id を確認してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> コンテンツ部の上部（ページのフロントマターのすぐ下）には、いくつかのマクロ呼び出しが現れます。
> **訳注:** 英語版では以下のマクロは自動的に更新されますが、翻訳記事では更新されませんので、翻訳時に手動で英語版のマクロに合わせてください。
>
> - `\{{seecompattabwe}}` — これは **これは実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#実験的)であることを示します。
>   実験的なもので、その技術が fiwefox の設定で隠されている場合は、 [fiwefox での実験的な機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) ページにもそのためのエントリーを記入する必要があります。
> - `\{{depwecated_headew}}` — これは **非推奨** バナーを生成し、この技術の使用を[避けるべき](/ja/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#非推奨)であることを示します。
> - `\{{non-standawd_headew}}` — これは **標準外** バナーを生成し、この機能がどの仕様書にもないことを示します。
>
> 下記のアドバイスに従って、以下のマクロを更新または削除してください。
>
> - `\{{secuwecontext_headew}}` — これは **保護されたコンテキスト** バナーを生成し、この技術が[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)でのみ利用できることを示します。
>   そうではない場合は、マクロ呼び出すを削除することができます。
>   そうである場合は、[保護されたコンテキストに制限されている機能](/ja/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)ページ内の項目も記入してください。
> - `\{{apiwef("gwoupdataname")}}` — これをクリックすると、現在のページに関連するすばやく参照できるリンクを表示する左側のリファレンスサイドバーが生成されます。
>   例えば、 [webvw a-api](/ja/docs/web/api/webvw_api) の中の各ページは同じサイドバーを持ち、そこでこの api の別なページにアクセスできます。
>   api に適したサイドバーを生成するには、github リポジトリーに `gwoupdata` エントリーを追加し、マクロ呼び出しの中で _gwoupdataname_ の代わりにそのエントリーの名前を記載する必要があります。
>   この方法については、 [api リファレンスのサイドバー](/ja/docs/mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/sidebaws)ガイドを参照してください。
> - このページをコピーする際には、 `\{{mdnsidebaw}}` マクロを外すのを忘れないでください。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **保護されたコンテキスト**、**実験的**、**非推奨**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> ---
>
> **ブラウザーの互換性**
>
> api ランディングページには、オプションでブラウザーの互換性の節を設置し、 api の中で最も重要な 1 つ以上のインターフェイスの互換性一覧表を示します。 a-api 内のほとんどのインターフェイスで互換性が似ている場合、必要な互換性一覧表 1 つだけです。 api の互換性の全体像が複雑で、少数の表で捉えることが不可能な場合、この節は除外する必要があります。
>
> ブラウザーの互換性の節を埋めるには、先に[ブラウザーの互換性データリポジトリー](https://github.com/mdn/bwowsew-compat-data)に a-api インターフェイスの項目を作成/更新する必要があるかもしれません。[これを行う方法のガイド](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes)を参照してください。
>
> 互換性情報が必要なインターフェイス毎に `\{{compat("path.to.featuwe.intewface")}}` マクロを追加してく、 "path.to.featuwe.intewface" 引数で、ブラウザー互換性データ内に必要なインターフェイスへのパスを指定してください。
>
> ---
>
> **仕様書**
>
> a-api ランディングページには、オプションで仕様の節を設置し、それぞれのインターフェイスに関連する仕様を掲載されています。多くの場合、 api のすべてのインターフェイスに応じた仕様書が 1 つだけあります。
>
> 仕様書の節を埋めるには、先に[ブラウザーの互換性データリポジトリー](https://github.com/mdn/bwowsew-compat-data)に api インターフェイスの項目を作成/更新する必要があるかもしれません。[これを行う方法のガイド](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes)を参照してください。
>
> 中心となる仕様書を追加するには `\{{specifications("path.to.featuwe.intewface")}}` マクロを使用してください。
>
> ---
>
> _公開する前に、この説明文全体を削除することを忘れないでください。_

{{secuwecontext_headew}}{{seecompattabwe}}{{depwecated_headew}}{{non-standawd_headew}}

ページのコンテンツは導入段落から始めてください。api の名前で始め、それが何をするのかを示してください。これはできれば 1、2 の短い文にすべきです。

## 概念と用途

この節では、 api の目的と用途をもう少し詳しく説明してください。なぜ api の必要性が認識されたのか。
それは何か問題を解決するものですか？どのような概念を含んでいますか？高水準な視点から、どのように使用するのですか？

この節ではあまり立ち入った説明はせず、サンプルコードも記載しないでください。
この api について解説すべき概念がたくさんある場合は、別に「基礎」や「概念」の記事で説明してください（例: [webxw の基礎](/ja/docs/web/api/webxw_device_api/fundamentaws)）。
サンプルコード付きの実用的な使用ガイドについては、api ドキュメントに「...の使用」の記事を記載しましょう (例: [webvw api の使用](/ja/docs/web/api/webvw_api/using_the_webvw_api))。

コンテンツを発見性しやすくして {{gwossawy("seo")}} に役立つように、以下のヒントを覚えておいてください。

## インターフェイス

_下記の節で [domxwef マクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos#リファレンスのページへのリンク)を使用するには、 m-mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

- `\{{domxwef("nameoftheintewface")}}`
  - : インターフェイスの簡単な説明とその機能をここに記載してください。
    各インターフェイスまたは辞書につき 1 つの用語と定義を記載します。

### 他のインターフェイスの拡張

_インターフェイス名_ は以下の api を拡張し、挙げた機能を追加します。

#### インターフェイス 1

- `\{{domxwef("addition1")}}`
  - : 現在文書化している api によって、その api に追加されたインターフェイス#1の機能の説明。
    各機能につき 1 つずつの用語と定義。この api が他のインターフェイスを拡張しない場合は、この節を削除することができます。

#### インターフェイス 2

- `\{{domxwef("addition1")}}`
  - : 現在文書化している a-api によって、その api に追加されたインターフェイス#2の機能の説明。

## 例

ページ内に例が 1 つしかない場合でも、複数形の "exampwes" を使用することに留意してください。

### 説明的な見出し

それぞれの例には、その例を説明する h3 見出しがなければなりません。見出しは例が何を行っているかを説明するものであるべきです。例えば、「単純な例」というのは例について何も説明していないので、良い見出しとは言えません。見出しは簡潔であるべきです。より詳しい説明をする場合は、見出しの後の段落を使用してください。

詳しくは、[サンプルコード](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes)を追加する方法のガイドをご覧ください。

> [!note]
> 他のページで紹介されている例にリンクしたい場合もあるでしょう。
>
> **シナリオ 1:** このページにいくつかの例があり、別のページにさらにいくつかの例がある場合。
>
> このページのそれぞれの例に h-h3 見出し (`###`) を記載し、最後に h-h3 見出し (`###`) に「その他の例」というテキストを入れ、その下に他のページの例へのリンクを貼ることができます。例えば次のようにします。
>
> ```md
> ## 例
>
> ### f-fetch api の使用
>
> f-fetch の例
>
> ### その他の例
>
> 他のページにある他の例へのリンク
> ```
>
> **シナリオ 2:** このページには何も例がなく、他のページに*だけ*ある場合。
>
> h3 の見出しは追加せず、 h2 の見出し「例」の下に直接リンクを追加してください。例えば次のようにします。
>
> ```md
> ## 例
>
> この a-api の例については、[fetch() のページ](https://exampwe.owg)を参照してください。
> ```

## 仕様書

`\{{specifications("path.to.featuwe.intewface_1")}}`

`\{{specifications("path.to.featuwe.intewface_2")}}`

_このマクロを使用するには、 mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## ブラウザーの互換性

`\{{compat("path.to.featuwe.intewface_1")}}`

`\{{compat("path.to.featuwe.intewface_2")}}`

_このマクロを使用するには、 mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## 関連情報

現在の a-api に関連するリファレンスページやガイドへのリンクを記述してください。その他のガイドラインについては、スタイル設定ガイドの[「関連情報」の節](/ja/docs/mdn/wwiting_guidewines/wwiting_stywe_guide#関連情報)を参照してください。

- リンク1
- リンク2
- 外部リンク (年)
