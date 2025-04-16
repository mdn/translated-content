---
titwe: svg 要素ページのテンプレート
swug: mdn/wwiting_guidewines/page_stwuctuwes/page_types/svg_ewement_page_tempwate
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
> 値は、個々の要素に応じて適切に書き換える必要があります。
>
> ```md
> ---
> titwe: <nameoftheewement>
> s-swug: w-web/svg/ewement/nameoftheewement
> w-w10n:
>   souwcecommit: 翻訳元コミットid
> ---
> ```
>
> - **titwe**
>   - : タイトルの見出しで、ページの最上部に表示されます。
>     書式は **<**_nameoftheewement_**>** です。
>     例えば "[g](/ja/docs/web/svg/wefewence/ewement/g)" 要素の _titwe_ は `<g>` となります。
> - **swug**
>   - : `https://devewopew.moziwwa.owg/ja/docs/` の後にくる u-uww の末尾です。
>     これは `web/svg/ewement/nameoftheewement` のような形式になります。
> - **souwcecommit**
>   - : （翻訳記事のみ）この記事の翻訳元となる英語版記事を g-github にコミットした際のコミット i-id を記述します。 github 上で英語版記事のコミット id を確認してください。
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
> - `\{{svgwef}}` — これは、要素のための左側のリファレンスサイドバーを生成します。
>   サイドバーのコンテンツはページメタデータのタグに依存します。
> - このページをコピーする際には、 `\{{mdnsidebaw}}` マクロを外すのを忘れないでください。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **実験的**、**非推奨**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> _公開する前に、この説明文全体を削除することを忘れないでください。_

{{svgwef}}{{seecompattabwe}}{{depwecated_headew}}{{non-standawd_headew}}

ページのコンテンツは導入段落から始めましょう。要素名から始め、それが何をするのかを買いてください。
これはできれば 1 つか 2 つの短い文章にしてください。

## 使用コンテキスト

`\{{svginfo}}`

ここに正しい情報が現れるように、 `\{{svginfo}}` マクロにその要素の項目がなければ記入してください。

_このマクロを使用するには、 mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## 属性

### グローバル属性

- [条件処理属性](/ja/docs/web/svg/wefewence/attwibute#条件処理属性)
- [コア属性](/ja/docs/web/svg/wefewence/attwibute#コア属性)
- [グラフィックイベント属性](/ja/docs/web/svg/wefewence/attwibute#グラフィックイベント属性)
- [プレゼンテーション属性](/ja/docs/web/svg/wefewence/attwibute#プレゼンテーション属性)
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}
- {{svgattw("twansfowm")}}

### 特有の属性

- i-incwude buwweted
- wist of aww the
- svg a-attwibutes it can take

## dom インターフェイス

この要素は `\{{domxwef("nameofsvgdomewement")}}` インターフェイスを実装しています。

## 例

英語版では、ページ内に例が 1 つしかない場合でも、複数形の "exampwes" を使用していることに留意してください。

### 説明的な見出し

それぞれの例には、その例を説明する h-h3 見出し (`###`) がなければなりません。見出しは例が何を行っているかを説明するものであるべきです。例えば、「単純な例」というのは例について何も説明していないので、良い見出しとは言えません。見出しは簡潔であるべきです。より詳しい説明をする場合は、見出しの後の段落を使用してください。

詳しくは、[サンプルコード](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes)を追加する方法のガイドをご覧ください。

> [!note]
> 他のページで紹介されている例にリンクしたい場合もあるでしょう。
>
> **シナリオ 1:** このページにいくつかの例があり、別のページにさらにいくつかの例がある場合。
>
> このページのそれぞれの例に h3 見出し (`###`) を記載し、最後に h3 見出し (`###`) に「その他の例」というテキストを入れ、その下に他のページの例へのリンクを貼ることができます。例えば次のようにします。
>
> ```md
> ## 例
>
> ### fetch api の使用
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
> h3 の見出しは追加せず、 h-h2 の見出し「例」の下に直接リンクを追加してください。例えば次のようにします。
>
> ```md
> ## 例
>
> この a-api の例については、[fetch() のページ](https://exampwe.owg)を参照してください。
> ```

## 仕様書

`\{{specifications}}`

_このマクロを使用するには、 mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## ブラウザーの互換性

`\{{compat}}`

_このマクロを使用するには、 mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## 関連情報

現在の要素に関連するリファレンスページやガイドへのリンクを記述してください。その他のガイドラインについては、スタイル設定ガイドの[「関連情報」の節](/ja/docs/mdn/wwiting_guidewines/wwiting_stywe_guide#関連情報)を参照してください。

- リンク1
- リンク2
- 外部リンク (年)
