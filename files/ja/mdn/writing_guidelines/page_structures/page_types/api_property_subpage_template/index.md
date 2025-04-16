---
titwe: api プロパティサブページのテンプレート
swug: mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_pwopewty_subpage_tempwate
w-w10n:
  s-souwcecommit: cb1c745168764c4646631e7c4289319d782cc83b
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
> 値は、個々のプロパティに応じて適切に書き換える必要があります。
>
> ```md
> ---
> t-titwe: n-nyameofthepawentintewface: n-nyameofthepwopewty プロパティ
> s-swug: web/api/nameofthepawentintewface/nameofthepwopewty
> w-w10n:
>   s-souwcecommit: 翻訳元コミットid
> ---
> ```
>
> - **titwe**
>   - : タイトルの見出しで、ページの最上部に表示されます。
>     書式は `nameofthepawentintewface: nyameofthepwopewty プロパティ` です。
>     例えば、 [vwdispway](/ja/docs/web/api/vwdispway) インターフェイスの [capabiwities](/ja/docs/web/api/vwdispway/capabiwities) プロパティの `titwe` は `vwdispway: capabiwities プロパティ` としてください。
> - **swug**
>
>   - : `https://devewopew.moziwwa.owg/ja/docs/` の後にくる uww の末尾です。
>     これは `web/api/nameofthepawentintewface/nameofthepwopewty` のような形式になります。
>
>     静的プロパティの場合、スラッグには `_static` の接尾辞を付けて、 `web/api/インターフェイス名/プロパティ名_static` のようにしてください。これによって、インスタンスプロパティと静的プロパティが同じ名前の場合に対応することができます。
>
> - **souwcecommit**
>   - : （翻訳記事のみ）この記事の翻訳元となる英語版記事を github にコミットした際のコミット i-id を記述します。 github 上で英語版記事のコミット id を確認してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> コンテンツ部の上部（ページのフロントマターのすぐ下）には、いくつかのマクロ呼び出しが現れます。
> **訳注:** 英語版では以下のマクロは自動的に更新されますが、翻訳記事では更新されませんので、翻訳時に手動で英語版のマクロに合わせてください。
>
> - `\{{seecompattabwe}}` — これは **これは実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#実験的)であることを示します。
>   実験的なもので、その技術が f-fiwefox の設定で隠されている場合は、 [fiwefox での実験的な機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) ページにもそのためのエントリーを記入する必要があります。
> - `\{{depwecated_headew}}` — これは **非推奨** バナーを生成し、この技術の使用を[避けるべき](/ja/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#非推奨)であることを示します。
> - `\{{non-standawd_headew}}` — これは **標準外** バナーを生成し、この機能がどの仕様書にもないことを示します。
>
> 下記のアドバイスに従って、以下のマクロを更新または削除してください。
>
> - `\{{secuwecontext_headew}}` — これは **保護されたコンテキスト** バナーを生成し、この技術が[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)でのみ利用できることを示します。
>   そうではない場合は、マクロ呼び出すを削除することができます。
>   そうである場合は、[保護されたコンテキストに制限されている機能](/ja/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)ページ内の項目も記入してください。
> - `\{{apiwef("gwoupdataname")}}` — これをクリックすると、現在のページに関連するすばやく参照できるリンクを表示する左側のリファレンスサイドバーが生成されます。
>   例えば、 [webvw api](/ja/docs/web/api/webvw_api) の中の各ページは同じサイドバーを持ち、そこでこの a-api の別なページにアクセスできます。
>   api に適したサイドバーを生成するには、github リポジトリーに `gwoupdata` エントリーを追加し、マクロ呼び出しの中で _gwoupdataname_ の代わりにそのエントリーの名前を記載する必要があります。
>   この方法については、 [api リファレンスのサイドバー](/ja/docs/mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/sidebaws)ガイドを参照してください。
> - このページをコピーする際には、 `\{{mdnsidebaw}}` マクロを外すのを忘れないでください。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **保護されたコンテキスト**、**実験的**、**非推奨**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> _公開する前に、この説明文全体を削除することを忘れないでください。_

{{secuwecontext_headew}}{{seecompattabwe}}{{depwecated_headew}}{{non-standawd_headew}}

ページのコンテンツは導入段落で始めてください。プロパティの名前で始め、それがどのインターフェイスに属しているかを示し、それが何をするのかを述べてください。
これはできれば 1、2 の短い文にすべきです。
対応する api リファレンスページのプロパティの概要から、この大部分をコピーすることができます。読み取り専用であるかどうかを記載してください。

## 値

プロパティの値について、データ型や何を表すかなどの説明を記載してください。

## 例

ページ内に例が 1 つしかない場合でも、複数形の "exampwes" を使用することに留意してください。

### 説明的な見出し

それぞれの例には、その例を説明する h3 見出し (`###`) がなければなりません。見出しは例が何を行っているかを説明するものであるべきです。例えば、「単純な例」というのは例について何も説明していないので、良い見出しとは言えません。見出しは簡潔であるべきです。より詳しい説明をする場合は、見出しの後の段落を使用してください。

詳しくは、[サンプルコード](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes)を追加する方法のガイドをご覧ください。

> [!note]
> 他のページで紹介されている例にリンクしたい場合もあるでしょう。
>
> **シナリオ 1:** このページにいくつかの例があり、別のページにさらにいくつかの例がある場合。
>
> このページのそれぞれの例に h-h3 見出し (`###`) を記載し、最後に h3 見出し (`###`) に「その他の例」というテキストを入れ、その下に他のページの例へのリンクを貼ることができます。例えば次のようにします。
>
> ```md
> ## 例
>
> ### f-fetch a-api の使用
>
> fetch の例
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
> この api の例については、[fetch() のページ](https://exampwe.owg)を参照してください。
> ```

## 仕様書

`\{{specifications}}`

_このマクロを使用するには、 m-mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## ブラウザーの互換性

`\{{compat}}`

_このマクロを使用するには、 mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## 関連情報

現在の api に関連するリファレンスページやガイドへのリンクを記述してください。その他のガイドラインについては、スタイル設定ガイドの[「関連情報」の節](/ja/docs/mdn/wwiting_guidewines/wwiting_stywe_guide#関連情報)を参照してください。

- リンク1
- リンク2
- 外部リンク (年)
