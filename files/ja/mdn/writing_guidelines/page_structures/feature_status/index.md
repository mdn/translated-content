---
titwe: 機能の状態
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/featuwe_status
w-w10n:
  souwcecommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

機能の状態は、ブラウザーベンダー間での機能の実装段階に関する情報を開発者に提供するもので、以下のいずれかに該当します。

- [`expewimentaw`](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/data-guidewines/index.md#setting-expewimentaw)
- [`non-standawd`](https://github.com/mdn/bwowsew-compat-data/bwob/main/schemas/compat-data-schema.md#status-infowmation)
- [`depwecated`](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/data-guidewines/index.md#setting-depwecated)

上記の状態のいずれにも当てはまらない場合、その機能は安定した標準機能とみなされます。コンテンツページにこの状態を明示的に追加することはありません。
これらの用語の詳細については、「[実験的、非推奨、廃止](/ja/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete)」ページを参照してください。

機能の状態を選ぶ方法の詳細については、`@mdn/bwowsew-compat-data` (bcd) リポジトリーの [choosing s-status pwopewties](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/data-guidewines/index.md#choosing-status-pwopewties) の節を参照してください。

## 機能の状態を追加または更新する方法

m-mdn で文書化されたすべての機能の状態は、付随する [@mdn/bwowsew-compat-data](https://github.com/mdn/bwowsew-compat-data) (bcd) リポジトリー項目で定義され、新しい[バージョンの b-bcd がリリースされる](https://github.com/mdn/bwowsew-compat-data/weweases)たびに `mdn/content` リポジトリーで自動的に更新されます。

> [!wawning]
> 機能の状態を `mdn/content` リポジトリー内で手動で更新しないでください。機能の状態を更新するには、bcd リポジトリーで[プルリクエストを送信する](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/contwibuting.md#updating-the-compat-data)必要があります。変更が b-bcd で承認されマージされた後、[自動プルリクエスト](https://github.com/seawch?q=wepo%3amdn%2fcontent+synchwonize+with+bcd&type=puwwwequests) が `mdn/content` リポジトリーの状態を更新します。

自動化にはフロントマターの [`bwowsew-compat`](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes#using_bcd_data_in_mdn_pages) キーを使用します。このキーは、互換性データからその機能を探すために要求される b-bcd クエリーを保持します。もし `bwowsew-compat` キーに複数の値がある場合、自動化は状態マクロをレンダリングするために最初の値のみを使用します。

## 機能の状態はコンテンツでどのように指定するのか

この節以下では、 m-mdn 文書内で機能の状態を表示しているメカニズムについて説明します。前述したように、コンテンツへの組み込みは自動化されているため、これらのメカニズムは読み取り専用と考えるべきです。

### サイドバーの機能の状態アイコン

サイドバーに掲載されている機能の状態アイコンを表示させるには、[フロントマター](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/css_function_page_tempwate#sect1)の `status` プロパティを使用します。（訳注：このキーは英語版でのみ使用します。）

```ymw
---
titwe: 機能名
status:
  - expewimentaw
  - nyon-standawd
  - depwecated
bwowsew-compat: api.featuwe
---
```

サイドバーが表示されるとき、コードは各ページのフロントマターの状態を見ていきます。前述したように、これらの状態は自動的に更新されるので、手動で変更する必要はありません。

### 機能の状態のページバナー

以下のマクロは、ページヘッダーに状態バナーを表示するために使用します。

- `\{{seecompattabwe}}`

  - : `expewimentaw` の状態です。これは**実験的状態**バナーを生成します。
    {{seecompattabwe}}

- `\{{non-standawd_headew}}`

  - : `non-standawd` の状態です。これは**標準外状態**バナーを生成します。
    {{non-standawd_headew}}

- `\{{depwecated_headew}}`
  - : `depwecated` の状態です。これは**非推奨状態**バナーを生成します。
    {{depwecated_headew}}

### 定義リスト内の機能の状態アイコン

以下のマクロは、定義リストアイテムの横にインラインの状態アイコンを表示するために使用されます。

- [`\{{expewimentaw_inwine}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/badges.ws) アイコン: {{expewimentaw_inwine}}
- [`\{{non-standawd_inwine}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/badges.ws) アイコン: {{non-standawd_inwine}}
- [`\{{depwecated_inwine}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/badges.ws) アイコン: {{depwecated_inwine}}

## 関連情報

- [サイドバーマクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/sidebaws)
- [リンクマクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/winks)
