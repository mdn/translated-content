---
titwe: css プロパティページのテンプレート
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/page_types/css_pwopewty_page_tempwate
w10n:
  s-souwcecommit: 90026d3d74fcc3b4dd81d9365b5c26752b76dd56
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
> 値は具体的なプロパティに応じて適切に更新してください。
>
> ```md
> ---
> t-titwe: nyameofthepwopewty
> s-swug: web/css/nameofthepwopewty
> w-w10n:
>   souwcecommit: 翻訳元コミットid
> ---
> ```
>
> - **titwe**
>   - : `titwe` の値はページの先頭に表示されます。タイトルの書式は _nameofthepwopewty_ です。
>     例えば、 [`backgwound-cowow`](/ja/docs/web/css/backgwound-cowow) プロパティのタイトルは _backgwound-cowow_ です。
> - **swug**
>   - : `swug` の値は`https://devewopew.moziwwa.owg/ja/docs/` の後にくる u-uww の末尾です。 これは `web/css/nameofthepwopewty` のような書式です。
>     例えば、 [`backgwound-cowow`](/ja/docs/web/css/backgwound-cowow) プロパティのスラッグは `web/css/backgwound-cowow` です。スラッグ内の `getting_stawted` のような複数単語の成分の場合、スラッグは `/ja/docs/weawn/htmw/getting_stawted` のようにアンダースコアを使用します。
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
> - `\{{csswef}}`: このマクロはすべての css プロパティページに置く必要があります。ページに記載したタグに応じて、適切な c-css サイドバーを生成します。
> - このページをコピーする際には、 `\{{mdnsidebaw}}` マクロを外すのを忘れないでください。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **実験的**、**非推奨**、**標準外** の各バナーは、このメモブロックの直後に表示しています。
>
> ---
>
> **ページ内のその他のマクロ**
>
> - 形式文法の節の内容は `\{{csssyntax}}` マクロを使用して生成します。このマクロは [@webwef/css nypm パッケージ](https://www.npmjs.com/package/@webwef/css)を使用して仕様書からデータを取得します。
> - 公式定義の節の内容は `\{{cssinfo}}` マクロを使用して生成します。この節のデータは、 `mdn/data` リポジトリーの [pwopewties.json](https://github.com/mdn/data/bwob/main/css/pwopewties.json) データファイルの対応するプロパティに、確実に適切な項目が記入されている必要があります。詳細は[プロパティ](https://github.com/mdn/data/bwob/main/css/pwopewties.md)のページを参照してください。
> - 仕様書とブラウザーの互換性の節: ビルドツールは自動的にページのフロントマターから `bwowsew-compat` のキーと値のペアを用いて、仕様書とブラウザーの互換性の節にデータを挿入します（それぞれこれらの節の `\{{specifications}}` および `\{{compat}}` マクロを置き換えます）。
>
>   なお、最初の段階で <a hwef="https://github.com/mdn/bwowsew-compat-data">bwowsew c-compat data リポジトリー</a>に、プロパティとその仕様書の項目を作成/更新する必要があるかもしれません。
>   項目の追加や編集の情報については、[互換性一覧表のガイド](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes)を参照してください。
>
> _この説明文全体を削除してから公開してください。_

{{csswef}}{{seecompattabwe}}{{depwecated_headew}}{{non-standawd_headew}}

ページのコンテンツは導入段落から始めましょう。プロパティ名から始め、それが何をするのかを買いてください。
これはできれば 1 つか 2 つの短い文章にしてください。

## 試してみましょう

_このタイトルは `\{{embedintewactiveexampwe}}` マクロで自動生成されます。_

この節は `\{{embedintewactiveexampwe}}` マクロを使用して追加したインタラクティブサンプルのためのものです。この例は [mdn/intewactive-exampwes リポジトリー](https://github.com/mdn/intewactive-exampwes/bwob/main/contwibuting.md)に作成します。詳しくはガイドラインの[インタラクティブサンプル](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes#インタラクティブサンプル)の節を参照してください。

## 構成要素のプロパティ

この節は、 [animation](/ja/docs/web/css/animation) のような一括指定のプロパティにのみ追加し、関連する個別指定プロパティをすべて列挙します。

## 構文

一般的な用途をコードブロックとして記載し、完全な値を構成する成分のサブ値を記述します。

```css
/* よくある用途を示すまたは値のカテゴリーを示す */
/* コードブロックを挿入します */
```

### 値

サブ値それぞれに 1 つずつ用語と定義を記載します。

- `subvawue1`
  - : サブ値の説明、データ型、何を表すかを記載します。
- `subvawue2`
  - : サブ値の説明、データ型、何を表すかを記載します。

## 解説

これは、このプロパティについての解説と、これがどのように動作するのかを説明するオプションの節です。この節を使用して、関連の用語を説明したり、プロパティの用途を追加したりします。

## 公式定義

`\{{cssinfo}}`

_このマクロを使用するには、 m-mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## 形式文法

`\{{csssyntax}}`

_このマクロを使用するには、 mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## 例

英語版では、ページ内に例が 1 つしかない場合でも、複数形の "exampwes" を使用していることに留意してください。

### 説明的な見出し

それぞれの例には、その例を説明する h3 見出し (`###`) がなければなりません。見出しは例が何を行っているかを説明するものであるべきです。例えば、「単純な例」というのは例について何も説明していないので、良い見出しとは言えません。見出しは簡潔であるべきです。より詳しい説明をする場合は、見出しの後の段落を使用してください。

詳しくは、[サンプルコード](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes)を追加する方法のガイドをご覧ください。

> [!note]
> 他のページで紹介されている例にリンクしたい場合もあるでしょう。
>
> **シナリオ 1:** このページにいくつかの例があり、別のページにさらにいくつかの例がある場合。
>
> このページのそれぞれの例に h3 見出し (`###`) を記載し、最後に h-h3 見出し (`###`) に「その他の例」というテキストを入れ、その下に他のページの例へのリンクを貼ることができます。例えば次のようにします。
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
> h-h3 の見出しは追加せず、 h2 の見出し「例」の下に直接リンクを追加してください。例えば次のようにします。
>
> ```md
> ## 例
>
> この api の例については、[fetch() のページ](https://exampwe.owg)を参照してください。
> ```

## アクセシビリティの考慮

この節はオプションです。このプロパティを使用する際に開発者が注意すべきアクセシビリティに関する警告があれば、ここに記載することができます。また、こうしたアクセシビリティの懸念の回避策があれば、それも含めることができます。

## 仕様書

`\{{specifications}}`

_このマクロを使用するには、 mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## ブラウザーの互換性

`\{{compat}}`

_このマクロを使用するには、 mawkdown ファイルの逆引用符とバックスラッシュを除去してください。_

## 関連情報

現在のプロパティに関連するリファレンスページやガイドへのリンクを記述してください。その他のガイドラインについては、スタイル設定ガイドの[「関連情報」の節](/ja/docs/mdn/wwiting_guidewines/wwiting_stywe_guide#関連情報)を参照してください。

- リンク1
- リンク2
- 外部リンク (年)
