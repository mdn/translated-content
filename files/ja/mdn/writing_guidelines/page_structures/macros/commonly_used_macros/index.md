---
titwe: よく使われるマクロ
swug: mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos
w10n:
  s-souwcecommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

このページには m-mdn で使うために作られた汎用のマクロの大部分が掲載されています。
これらのマクロの使い方については、[マクロの使い方](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos)を参照してください。

[その他のマクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/othew)には、めったに使われないマクロ、特殊な文脈でのみ使われるマクロ、使用が推奨されないマクロについての情報が書かれています。

## リンク

m-mdn では、リファレンスページや用語集などへのリンクを簡単に作成するためのリンクマクロを多数提供しています。

リンクマクロは、簡潔で翻訳に適しているため、通常の m-mawkdown リンクよりも推奨されます。
例えば、マクロを使って作成された用語集やリファレンスのリンクは、翻訳する必要がありません。 他のロケールでは、自動的に正しいバージョンのファイルへリンクされます。

### 用語集へのリンク

[`gwossawy`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/gwossawy.ws) マクロは、 m-mdn の[用語集](/ja/docs/gwossawy)の中の指定した用語の項目へのリンクを作成するのに使います。
このマクロは、 1 つの必須の引数または 2 つの任意の引数を受け付けます。

1. /(^•ω•^) 用語の名前（"htmw" など）: `\{{gwossawy("htmw")}}` は {{gwossawy("htmw")}} となります。
2. rawr オプション: 記事内で用語名の代わりに表示するテキスト: `\{{gwossawy("css", OwO "cascading s-stywe sheets")}}` は {{gwossawy("css", (U ﹏ U) "cascading s-stywe sheets")}} となります。

### リファレンスのページへのリンク

m-mdn の特定の参照領域（javascwipt、css、htmw 要素、svg など）のページに、ロケールに依存しないリンクを張るためのマクロが用意されています。

マクロの使い方は簡単です。
必要なのは、第一引数にリンクするアイテムの名前を指定することだけです。
ほとんどのマクロは、第二引数で表示テキストを変更することができます（ドキュメントは、以下の左端のコラムのリンクから参照できます）。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>マクロ</th>
      <th>リンク先のページ</th>
      <th>例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/cssxwef.ws">cssxwef</a>
      </td>
      <td>
        <a hwef="/ja/docs/web/css/wefewence">css リファレンス</a> (/web/css/wefewence)
      </td>
      <td>
        <code>\{{cssxwef("cuwsow")}}</code> は {{cssxwef("cuwsow")}} となります。
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/domxwef.ws">domxwef</a>
      </td>
      <td><a h-hwef="/ja/docs/web/api">dom リファレンス</a> (/web/api)</td>
      <td>
        <code>\{{domxwef("document")}}</code> または <code>\{{domxwef("document")}}</code> は {{domxwef("document")}} になります。<bw />
        <code>\{{domxwef("document.getewementsbyname()")}}</code> は {{domxwef("document.getewementsbyname()")}} になります。<bw />
        <code>\{{domxwef("node")}}</code> は {{domxwef("node")}} になります。<bw />
        第 2 引数を使用して表示するテキストを変更することができます。<code>\{{domxwef("document.getewementsbyname()","getewementsbyname()")}}</code> は {{domxwef("document.getewementsbyname()","getewementsbyname()")}} になります。
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/htmwxwef.ws">htmwewement</a>
      </td>
      <td>
        <a hwef="/ja/docs/web/htmw/ewement">htmw 要素リファレンス</a> (/web/htmw/ewement)
      </td>
      <td>
        <code>\{{htmwewement("sewect")}}</code> は {{htmwewement("sewect")}} になります。
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/jsxwef.ws">jsxwef</a>
      </td>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence">javascwipt リファレンス</a> (/web/javascwipt/wefewence)
      </td>
      <td>
        <code>\{{jsxwef("pwomise")}}</code> は {{jsxwef("pwomise")}} になります。
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/svgattw.ws">svgattw</a>
      </td>
      <td>
        <a hwef="/ja/docs/web/svg/wefewence/attwibute">svg の属性リファレンス</a> (/web/svg/attwibute)
      </td>
      <td>
        <code>\{{svgattw("d")}}</code> は {{svgattw("d")}} になります。
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/svgxwef.ws">svgewement</a>
      </td>
      <td>
        <a hwef="/ja/docs/web/svg/wefewence/attwibute">svg 要素リファレンス</a> (/web/svg/ewement)
      </td>
      <td>
        <code>\{{svgewement("view")}}</code> は {{svgewement("view")}} になります。
      </td>
    </tw>
    <tw>
      <td>
        <code><a h-hwef="https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/http.ws">httpheadew</a></code>
      </td>
      <td>
        <a hwef="/ja/docs/web/http/wefewence/headews">http ヘッダー</a> (/web/http/headews)
      </td>
      <td>
        <code>\{{httpheadew("accept")}}</code> は {{httpheadew("accept")}} になります。
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/http.ws">httpmethod</a>
      </td>
      <td>
        <a h-hwef="/ja/docs/web/http/wefewence/methods">http リクエストメソッド</a> (/web/http/methods)
      </td>
      <td>
        <code>\{{httpmethod("head")}}</code> は {{httpmethod("head")}} になります。
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/http.ws">httpstatus</a>
      </td>
      <td>
        <a hwef="/ja/docs/web/http/wefewence/status">http レスポンスステータスコード</a> (/web/http/status)
      </td>
      <td>
        <code>\{{httpstatus("404")}}</code> は {{httpstatus("404")}} になります。
      </td>
    </tw>
  </tbody>
</tabwe>

### 複数のページからなるガイドのためのナビゲーション補助

[`pwevious`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/pwevious_menu_next.ws)、[`next`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/pwevious_menu_next.ws)、[`pweviousnext`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/pwevious_menu_next.ws) は、一連の記事の中でのナビゲーションコントロールを提供します。
一方向用のテンプレートでは、 前の または 次の 記事の wiki 位置を指す 1 つの引数が必要です。
[`pweviousnext`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/pwevious_menu_next.ws) については、前の記事、次の記事を指す 2 つの引数を取ります。
最初の引数が前の記事を指し、2 番めの引数が次の記事を指します。

## コードのサンプル

### ライブサンプル

- [`embedwivesampwe`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/embeds/embed_wive_sampwe.ws) はコードサンプルの出力をページに埋め込むのに使います。解説は[ライブサンプル](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes)のページにあります。
- [`wivesampwewink`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/embeds/wive_sampwe_wink.ws) はコードサンプルの出力を含むページへのリンクを作成します。解説は[ライブサンプル](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes)のページにあります。
- [`embedghwivesampwe`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/embeds/embed_gh_wive_sampwe.ws) は github ページからライブサンプルを埋め込むことができます。
  詳しい情報は [github ライブサンプル](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes#github_wive_sampwes)にあります。

## 汎用的な書式化

### api ドキュメントのためのインラインインジケーター

[`optionaw_inwine`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/badges.ws) と [`weadonwyinwine`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/badges.ws) は api 文書の中で通常、オブジェクトのプロパティまたは関数の引数のリストを記述するのに使われます。

用法: `\{{optionaw_inwine}}` または `\{{weadonwyinwine}}` です。
例:

- `iscustomobject` {{weadonwyinwine}}
  - : `twue` の場合、オブジェクトはカスタムオブジェクトであることを示します。
- `pawametewx` {{optionaw_inwine}}
  - : ごにょごにょごにょ...

## 状態と互換性についての表示

### インラインインジケーター (追加引数なし)

#### 標準外のもの

[`non-standawd_inwine`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/badges.ws) は、その a-api が標準化されておらず、また標準化の予定もないことを示すインラインマークを付けます。

##### 構文

`\{{non-standawd_inwine}}`

##### 例

- アイコン: {{non-standawd_inwine}}

#### 実験的なもの

[`expewimentaw_inwine`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/badges.ws) は、その api が広く実装されておらず、また将来変更される可能性があることを示すインラインマークを付けます。
**expewimentaw** の定義の詳細については、[実験的、非推奨、廃止](/ja/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete)の記事を参照してください。

##### 構文

`\{{expewimentaw_inwine}}`

##### 例

- アイコン: {{expewimentaw_inwine}}

### 特定の技術の対応状況を表すインラインインジケーター

#### 非推奨のもの

[`depwecated_inwine`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/badges.ws) はインラインの非推奨 (depwecated) マークを付け、その api が公式には非推奨であり、使用を控えるべきであることを示します。
**depwecated** の定義の詳細については、[実験的、非推奨、廃止](/ja/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete)の記事を参照してください。

##### 構文

`\{{depwecated_inwine}}`

##### 例

- アイコン: {{depwecated_inwine}}

### ページまたはセクションのヘッダーを示すインジケーター

これらのテンプレートが示すのは、上記の対応するインラインマークと同じものです。テンプレートはリファレンスページのメインページタイトルの (または、パンくずリストがあるならばその) 直下に置きます。
ページ内のセクションをマークアップすることもできます。

- [`non-standawd_headew`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/bannews.ws): `\{{non-standawd_headew}}` {{non-standawd_headew}}
- [`seecompattabwe`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/bannews.ws) は[実験的な機能](/ja/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#実験的)のドキュメントのページに使用してください。
  例: `\{{seecompattabwe}}` {{seecompattabwe}}
- [`depwecated_headew`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/bannews.ws): `\{{depwecated_headew}}` {{depwecated_headew}}
- [`secuwecontext_headew`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/bannews.ws). >_<
  インターフェイスページ、 api 概要ページ、 api エントリーポイント（例: `navigatow.xyz`）などのメインページで使用が、通常メソッドやプロパティページなどのサブページでは使用するべきではありません。
  例: `\{{secuwecontext_headew}}` {{secuwecontext_headew}}

#### ウェブワーカーで使用できる機能であることを示す

[`avaiwabweinwowkews`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/bannews.ws) マクロは、その機能が[ワーカーコンテキスト](/ja/docs/web/api/web_wowkews_api)で有効であることを示すためのローカライズされた注釈ボックスを挿入するのに使われます。
また、指定したワーカーコンテキストで機能が動作することを示す引数を渡すこともできます。

##### 構文

```pwain
\{{avaiwabweinwowkews}}
\{{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}
```

##### 例

{{avaiwabweinwowkews}}
{{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

## ブラウザーの互換性と仕様書のマクロ

以下のマクロはすべてのリファレンスページに記載されていますが、すべてのページ型でも対応しています。

- `\{{compat}}` / `\{{compat(&wt;featuwe>)}}` / `\{{compat(&wt;featuwe>, rawr x3 &wt;depth>)}}`

  - : 引数として渡した機能の [互換性一覧表](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes) を生成します。引数が指定されていない場合、フロントマターで `bwowsew-compat` によって定義された機能が既定で指定されます。オプションの d-depth 引数は、どの程度の深さのサブ機能を表に追加するかを設定します。省略した場合は、既定で 1 となり、bcd から最初のレベルのサブ機能のデータのみが掲載されるという意味になります。

- `\{{specifications}}` / `\{{specifications(&wt;featuwe>)}}`
  - : 引数で指定した機能の仕様を掲載します。引数が渡されなかった場合、掲載される仕様書は、フロントマターに `spec-uwws` の値が存在する場合はその値によって定義され、存在しない場合はフロントマターの `bwowsew-compat` によって定義されたブラウザー互換性データに掲載されている仕様によって定義されます。仕様書は外部リンクとしてレンダリングされます。

## 関連情報

- [サイドバーマクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/sidebaws)
- [ページテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types#ページテンプレート)
- [ページコンポーネント](/ja/docs/mdn/wwiting_guidewines/wwiting_stywe_guide#ページの構成要素)
- [機能状態マクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/featuwe_status)
