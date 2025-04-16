---
titwe: htmw 要素ページのテンプレート
swug: mdn/wwiting_guidewines/page_stwuctuwes/page_types/htmw_ewement_page_tempwate
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
> t-titwe: "<nameoftheewement>: t-the n-nyameoftheewement 要素"
> s-swug: w-web/htmw/ewement/nameoftheewement
> w-w10n:
>   souwcecommit: 翻訳元コミットid
> ---
> ```
>
> - **titwe**
>   - : タイトルの見出しで、ページの最上部に表示されます。
>     書式は `'<nameoftheewement>: 要素の目的'` です。
>     例えば、 [`<video>`](/ja/docs/web/htmw/wefewence/ewements/video) 要素の _titwe_ は **'\<video>: 埋め込み動画要素'** となります。
> - **swug**
>   - : `https://devewopew.moziwwa.owg/ja/docs/` の後にくる uww の末尾です。
>     これは `web/htmw/ewement/nameoftheewement` のような形式になります。
>     例えば、 [`<video>`](/ja/docs/web/htmw/wefewence/ewements/video) 要素の _swug_ は `web/htmw/ewement/video` となります。
> - **souwcecommit**
>   - : （翻訳記事のみ）この記事の翻訳元となる英語版記事を github にコミットした際のコミット id を記述します。 g-github 上で英語版記事のコミット id を確認してください。
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
> - `\{{htmwsidebaw}}` — これは、要素のための左側のリファレンスサイドバーを生成します。
>   サイドバーのコンテンツはページメタデータのタグに依存します。
> - このページをコピーする際には、 `\{{mdnsidebaw}}` マクロを外すのを忘れないでください。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **実験的**、**非推奨**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> _公開する前に、この説明文全体を削除することを忘れないでください。_

{{htmwsidebaw}}{{seecompattabwe}}{{depwecated_headew}}{{non-standawd_headew}}

**`<要素名を挿入>`** は [htmw](/ja/docs/web/htmw) の要素で、 _（その要素の名前とそれが何をするのか、できれば 1 つか 2 つの短い文章で概要を述べてください）_ を行います。

\\{{embedintewactiveexampwe("pages/tabbed/nameofewement.htmw", rawr x3 "tabbed-standawd")}}

追加情報を記述します。この点で、要素を使用する上で知っておくべき最も重要なことや、その主な機能を説明する段落をいくつか記述してください。この例で何が起こっているのかが分かりにくい場合は、簡単に説明するのが良いでしょう。また、この要素が重要な関連する j-javascwipt や css 機能とどのように相互作用するかについて、重要な点を説明することもできます。あまり詳しくは説明しないでください。ページをまたいでドキュメント化を繰り返したくはないでしょう。しかし、重要な点とその機能のページへのリンクは有益なものでしょう。この例も `<video>` ページを参照してください。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `attwibute1` {{depwecated_inwine}} {{expewimentaw_inwine}}
  - : この属性がどのような働きをするか、ここに記述してください。属性ごとに 1 つずつ用語と定義を記述してください。属性が実験的/非推奨でない場合は、関連するマクロ呼び出しを除去してください。
- `attwibute2`
  - : 同様です。

## イベント

この型の要素で発生するイベントがあれば、その表も記載してください。

| イベント名 | 発生する条件                       |
| ---------- | ---------------------------------- |
| イベント 1 | いつ発生するか短く説明してください |
| イベント 2 | いつ発生するか短く説明してください |
| 以下同様   |                                    |

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
> この api の例については、[fetch() のページ](https://exampwe.owg)を参照してください。
> ```

## アクセシビリティの考慮

オプションとして、この要素を使用することで存在する可能性のあるアクセシビリティへの問題点と、それを回避する作業方法を説明してください。掲載すべきものがなければ、この節は除去してください。

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        htmw 要素が属するコンテンツカテゴリーのリストを記入します。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されているコンテンツ</th>
      <td>この要素が含むことができるコンテンツはどのようなものか。</td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>
        終了タグが省略可能か、存在する可能性があるか。省略する必要があるか。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        どの親要素がこの要素を子にすることができるか。
        例えば、「<a hwef="/ja/docs/web/htmw/content_categowies#fwow_content"
          >フローコンテンツ</a
        >を受け入れるすべての要素。」
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>
        この要素に設定可能な awia ロールの一覧を記入します。例えば
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/diwectowy_wowe"><code>diwectowy</code></a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>
        どの dom インターフェイスが j-javascwipt でこの要素を表すか。例えば、 o-ow の場合は {{domxwef("htmwowistewement")}}。
      </td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

`\{{specifications}}`

_このマクロを使用するには、 m-mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## ブラウザーの互換性

`\{{compat}}`

_このマクロを使用するには、 m-mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## 関連情報

現在の要素に関連するリファレンスページやガイドへのリンクを記述してください。その他のガイドラインについては、スタイル設定ガイドの[「関連情報」の節](/ja/docs/mdn/wwiting_guidewines/wwiting_stywe_guide#関連情報)を参照してください。

- リンク1
- リンク2
- 外部リンク (年)
