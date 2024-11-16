---
title: "HTML 属性: rel"
short-title: rel
slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

**`rel`** 属性は、リンク先のリソースと現在の文書との関係を定義します。 {{htmlelement('link')}}、{{htmlelement('a')}}、{{htmlelement('area')}}、{{htmlelement('form')}} で有効で、対応する値は属性が見つかった要素に依存します。

関係の種類は `rel` 属性の値によって決まりますが、 `rel` 属性が存在する場合は、一連の固有のキーワードが順不同で空白で区切られたものであることが必要です。意味を表現しないクラス名とは異なり、 `rel` 属性は機械と人間の両方にとって意味のあるトークンを表現しなければなりません。現在、 `rel` 属性の値として登録されているのは、 [IANA link relation registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml)、[HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes)、そして Living Standard が[提案している](https://html.spec.whatwg.org/multipage/links.html#other-link-types) microformats wiki の自由に編集可能な [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) ページです。上記の 3 つの情報源のいずれにも存在しない `rel` 属性が使用された場合、 HTML バリデーター（[W3C Markup Validation Service](https://validator.w3.org/) など）によっては警告を生成します。

次の表は、既存のキーワードの中でも特に重要なものです。空白で区切られた値の中のすべてのキーワードは、その値の中で一意でなければなりません。

| `rel` の値                                                        | 説明                                                                                                                                                                                                                | `{{htmlelement('link')}}` | `{{htmlelement('a')}}` および `{{htmlelement('area')}}` | `{{htmlelement('form')}}` |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------- | ------------------------- |
| [`alternate`](#alternate)                                         | 現在の文書の別な表現。                                                                                                                                                                                              | リンク                    | リンク                                                  | 不許可                    |
| [`author`](#author)                                               | 現在の文書や記事の著者。                                                                                                                                                                                            | リンク                    | リンク                                                  | 不許可                    |
| [`bookmark`](#bookmark)                                           | 直近の祖先の章に対するパーマリンク。                                                                                                                                                                                | 不許可                    | リンク                                                  | 不許可                    |
| [`canonical`](#canonical)                                         | 現在の文書の推奨 URL。                                                                                                                                                                                              | リンク                    | 不許可                                                  | 不許可                    |
| [`dns-prefetch`](/ja/docs/Web/HTML/Attributes/rel/dns-prefetch)   | 宛先リソースのオリジンに対する DNS 解決を先取りして行うようブラウザーに指示する                                                                                                                                     | 外部リソース              | 不許可                                                  | 不許可                    |
| [`external`](#external)                                           | 参照先の文書は、現在の文書と同じサイトの一部ではありません。                                                                                                                                                        | 不許可                    | 注釈                                                    | 注釈                      |
| [`expect`](#expect)                                               | 文書内の主要部分が解釈できるまでページを[レンダリングブロック](/ja/docs/Glossary/Render_blocking)し、一貫したレンダリングを実現します。                                                                             | リンク                    | 不許可                                                  | 不許可                    |
| [`help`](#help)                                                   | コンテンツに応じたヘルプにリンクします。                                                                                                                                                                            | リンク                    | リンク                                                  | リンク                    |
| [`icon`](#icon)                                                   | 現在の文書を表すアイコンです。                                                                                                                                                                                      | 外部リソース              | 不許可                                                  | 不許可                    |
| [`license`](#license)                                             | 現在の文書のメインコンテンツが、参照先の文書で説明されている著作権ライセンスによってカバーされていることを示す。                                                                                                    | リンク                    | リンク                                                  | リンク                    |
| [`manifest`](/ja/docs/Web/HTML/Attributes/rel/manifest)           | ウェブアプリマニフェスト                                                                                                                                                                                            | リンク                    | 不許可                                                  | 不許可                    |
| [`me`](/ja/docs/Web/HTML/Attributes/rel/me)                       | 現在の文書がリンク先のコンテンツを所有する人物を表すことを示す                                                                                                                                                      | リンク                    | 不許可                                                  | 不許可                    |
| [`modulepreload`](/ja/docs/Web/HTML/Attributes/rel/modulepreload) | スクリプトを先取りして取得し、後で評価できるようにこの文書のモジュールマップに保存するようブラウザーに指示します。オプションで、モジュールの依存関係も読み取ることができます。                                      | 外部リソース              | 不許可                                                  | 不許可                    |
| [`next`](#next)                                                   | 現在の文書が一連の文書の一部であり、その中の次の文書が参照先の文書であることを示します。                                                                                                                            | リンク                    | リンク                                                  | リンク                    |
| [`nofollow`](#nofollow)                                           | 現在の文書の原著者または発行者が、参照先の文書を支持していないことを示します。                                                                                                                                      | 不許可                    | 注釈                                                    | 注釈                      |
| [`noopener`](/ja/docs/Web/HTML/Attributes/rel/noopener)           | ハイパーリンクが補助的な閲覧コンテキストのいずれかを生成する (つまり、適切な `target` 属性値を持つ) 場合、補助的な閲覧コンテキストではない最上位の閲覧コンテキストを生成します。                                    | 不許可                    | 注釈                                                    | 注釈                      |
| [`noreferrer`](/ja/docs/Web/HTML/Attributes/rel/noreferrer)       | `Referer` ヘッダーを含めません。さらに、 `noopener` と同じ効果もあります。                                                                                                                                          | 不許可                    | 注釈                                                    | 注釈                      |
| [`opener`](#opener)                                               | ハイパーリンクによって、補助閲覧コンテキストではない最上位の閲覧コンテキストが生成される場合 (すなわち、 `target` 属性の値が "`_blank`" である場合)、補助閲覧コンテキストを生成します。                             | 不許可                    | 注釈                                                    | 注釈                      |
| [`pingback`](#pingback)                                           | 現在の文書へのピンバックを処理するピンバックサーバーのアドレスを指定します。                                                                                                                                        | 外部リソース              | 不許可                                                  | 不許可                    |
| [`preconnect`](/ja/docs/Web/HTML/Attributes/rel/preconnect)       | ユーザーエージェントが対象となるリソースのオリジンへの接続を先読みすることを指定します。                                                                                                                            | 外部リソース              | 不許可                                                  | 不許可                    |
| [`prefetch`](/ja/docs/Web/HTML/Attributes/rel/prefetch)           | ユーザーエージェントが、後続のナビゲーションに必要となる可能性の高いターゲットリソースを先取りしてキャッシュすることを指定します。                                                                                  | 外部リソース              | 不許可                                                  | 不許可                    |
| [`preload`](/ja/docs/Web/HTML/Attributes/rel/preload)             | `[as](as)` 属性で指定された潜在的な距離 (および対応する距離に関連する優先度) に従って、ユーザーエージェントが現在のナビゲーションのためにターゲットリソースを先取りしてキャッシュしなければならないことを指定する。 | 外部リソース              | 不許可                                                  | 不許可                    |
| [`prerender`](/ja/docs/Web/HTML/Attributes/rel/prerender)         | ユーザーエージェントが、対象となるリソースを先取りして取得し、将来的に高速なレスポンスを実現するための処理を行うことを指定します。                                                                                  | 外部リソース              | 不許可                                                  | 不許可                    |
| [`prev`](#prev)                                                   | 現在の文書が一連の文書の一部であり、その中の前の文書が参照先の文書であることを示します。                                                                                                                            | リンク                    | リンク                                                  | リンク                    |
| [`privacy-policy`](#privacy-policy)                               | 現在の文書に適用されるデータの収集と使用慣行に関する情報へのリンクを提供します。                                                                                                                                    | リンク                    | リンク                                                  | 不許可                    |
| [`search`](#search)                                               | 現在の文書とその関連ページを検索するのに使用できるリソースへのリンクを提供します。                                                                                                                                  | リンク                    | リンク                                                  | リンク                    |
| [`stylesheet`](#stylesheet)                                       | スタイルシートをインポートします。                                                                                                                                                                                  | 外部リソース              | 不許可                                                  | 不許可                    |
| [`tag`](#tag)                                                     | 現在の文書に適用される (与えられたアドレスで識別される) タグを与えます。                                                                                                                                            | 不許可                    | リンク                                                  | 不許可                    |
| [`terms-of-service`](#terms-of-service)                           | 文書の提供者と、その文書を使用したいユーザーとの間の合意、つまり利用規約へのリンクです。                                                                                                                            | リンク                    | リンク                                                  | 不許可                    |

`rel` 属性は {{htmlelement('link')}}、{{htmlelement('a')}}、{{htmlelement('area')}}、{{htmlelement('form')}} の各要素に関連していますが、これらの要素のサブセットにのみ関連する値もあります。他の HTML キーワード属性の値と同様に、これらの値は大文字小文字の区別がありません。

`rel` 属性には既定値がありません。属性が省略された場合や、属性の値がいずれも対応されていない場合、文書は宛先のリソースとの間にハイパーリンクがあるということ以外には、特に関係を持ちません。この場合、 {{htmlelement('link')}} と {{htmlelement('form')}} では、 `rel` 属性がない場合、キーワードがない場合、または上記の空白で区切られたキーワードのうち 1 つ以上がない場合、その要素はいかなるリンクも生成しません。 {{htmlelement('a')}} と {{htmlelement('area')}} はリンクを生成しますが、関係は定義されません。

## 値

- `alternate`

  - : 現在の文書の代替表現を示します。 {{htmlelement('link')}}、{{htmlelement('a')}}、{{htmlelement('area')}} で有効であり、意味は他の属性の値に依存します。

    - [`stylesheet`](#stylesheet) キーワードと共に `<link>` で使用された場合は、[代替スタイルシート](/ja/docs/Web/CSS/Alternative_style_sheets)を生成します。

      ```html
      <!-- 常設スタイルシート -->
      <link rel="stylesheet" href="default.css" />
      <!-- 代替スタイルシート -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="High contrast" />
      ```

    - この文書の言語と異なる [`hreflang`](/ja/docs/Web/HTML/Element/link#hreflang) 属性と共に使用された場合は、翻訳版を表します。
    - [`type`](/ja/docs/Web/HTML/Element/link#type) 属性が `"application/rss+xml"` または `"application/atom+xml"` の値で共に使用された場合は、シンジケーションフィードを参照するハイパーリンクが生成されます。

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - それ以外の場合は、現在の文書の代替表現を参照するハイパーリンクを作成します。その性質は [`hreflang`](/ja/docs/Web/HTML/Element/link#hreflang) と [`type`](/ja/docs/Web/HTML/Element/link#type) 属性によって与えられます。

      - もし `hreflang` が `alternate` と共に指定され、 `hreflang` の値が現在の文書の言語と異なる場合には、参照された文書が翻訳であることを示します。
      - もし `type` が `alternate` と一緒に指定された場合、参照された文書が代替形式（PDF など）であることを示します。
      - `hreflang` と `type` 属性は、どちらも `alternate` と同時に指定することができます。

      ```html
      <link
        rel="alternate"
        href="/fr/html/print"
        hreflang="fr"
        type="text/html"
        media="print"
        title="French HTML (for printing)" />
      <link
        rel="alternate"
        href="/fr/pdf"
        hreflang="fr"
        type="application/pdf"
        title="French PDF" />
      ```

- `author`

  - : 参照する文書が、現在の文書または記事の著者に関する追加情報を提供することを示します。{{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} 要素に関連します。

    {{htmlelement('a')}} と {{htmlelement('area')}} では、リンクされた文書（または `mailto:`）が、最も近い {{htmlelement('article')}} の祖先があればその、なければ文書全体の著者に関する情報を提供することを示します。

    {{htmlelement('link')}} では、文書全体の作者を表します。

    > [!NOTE]
    > 歴史的な理由から、廃止された属性値 `rev="made"` は `rel="author"` として扱われます。

- `bookmark`
  - : {{htmlelement('a')}} および {{htmlelement('area')}} 属性の `rel` 属性の値として使用されます。最も近い祖先 {{htmlelement('article')}} 要素がある場合、そのパーマリンクを与えます。祖先となる `<article>` 要素がない場合、リンクしている要素が最も近いとされるセクションのパーマリンクを与えます。
- `canonical`
  - : {{htmlelement('link')}} で有効であり、現在の文書で推奨される URL を示します。検索エンジンが重複するコンテンツをまとめるのに有用です。
- `dns-prefetch`
  - : {{htmlelement('link')}} 要素が {{htmlelement('body')}} と {{htmlelement('head')}} の両方の中にある場合に関連し、ターゲットとなるリソースのオリジンに対する DNS 解決を先取りして実行するようブラウザーに指示します。ユーザーが必要とする可能性の高いリソースに有効で、ユーザーがリソースにアクセスする際に、ブラウザーが指定されたリソースのオリジンに対する DNS 解決を先取りして実行するため、待ち時間を短縮してパフォーマンスを向上させることができます。リソースヒントにある [dns-prefetch](/ja/docs/Web/Performance/dns-prefetch) を参照してください。
- `external`
  - : {{htmlelement('form')}}、{{htmlelement('a')}}、{{htmlelement('area')}} に関連し、参照先の文書が現在のサイトの一部ではないことを示します。属性セレクターと一緒に使うことで、外部リンクを現在のサイトから離れることをユーザーに示すようなスタイルにすることができます。
- `help`
  - : {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}} に関連し、 `help` キーワードは、リンク先のコンテンツがコンテキスト依存のヘルプを提供することを示し、ハイパーリンクを定義している要素の親とその子のための情報を提供します。 `<link>` 内で使用された場合、ヘルプは文書全体を対象とします。 {{htmlelement('a')}} および {{htmlelement('area')}} に含まれていて対応している場合、既定のカーソルが `pointer` ではなく `help` になります。
- `icon`

  - : {{htmlelement('link')}} と共に有効で、リンクされたリソースは、現在の文書の、ユーザーインターフェイスでページを表現するためのリソースであるアイコンを表します。

    `icon` の値の最も一般的な用途はファビコンです。

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    複数の `<link rel="icon">` があった場合、ブラウザーはそれぞれの [`media`](/ja/docs/Web/HTML/Element/link#media) 属性、[`type`](/ja/docs/Web/HTML/Element/link#type) 属性、[`sizes`](/ja/docs/Web/HTML/Element/link#sizes) 属性を使って、最も適切なアイコンを選択します。複数のアイコンが同じように適切である場合は、最後のアイコンが使用されます。最も適切なアイコンが、対応していないファイル形式を使用しているなどの理由で不適切であることが後に判明した場合、ブラウザーは次に適切なアイコンを選択します。

    > **メモ:** [`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin) 属性は `rel="icon"` においては Chromium ベースのブラウザーは対応していません。[公開 Chromium issue](https://crbug.com/1121645) を参照してください。

    > [!NOTE]
    > Apple の iOS では、他のモバイルブラウザーのように、ウェブクリップやスタートアップのプレースホルダー用のウェブページのアイコンを選択するために、このリンク種別や [`sizes`](/ja/docs/Web/HTML/Element/link#sizes) 属性を使用していません。
    > 代わりに、標準外の [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) および [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) をそれぞれ使用しています。

    > **メモ:** `shortcut` リンク種別が `icon` の前に見られることが良くありますが、このリンク種別は適合するものではなく、無視されるので**使用しないでください**。

- `license`

  - : {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} の各要素で有効である `license` の値は、ハイパーリンクがライセンス情報を記述した文書につながること、現在の文書のメインコンテンツが、参照された文書で記述された著作権ライセンスによってカバーされていることを示します。 {{HTMLElement("head")}} 要素内にない場合、規格では、文書の特定の部分に適用されるハイパーリンクか、文書全体に適用されるハイパーリンクかを区別していません。ページ上のデータのみがこれを示すことができます。

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > 認識はされているものの、同義語の `copyright` は正しくないため使用しないでください。

- `manifest` {{Experimental_Inline}}
  - : [ウェブアプリマニフェスト](/ja/docs/Web/Manifest)です。オリジンをまたいだ読み取りのための CORS プロトコルの使用に必要です。
- `modulepreload`
  - : パフォーマンスの向上に役立ちます。文書内の {{htmlelement('link')}} に関連して、 `rel="modulepreload"` を設定すると、ブラウザーはスクリプト (および依存関係) を先取りして取得し、文書のモジュールマップに保存して後で評価するようになります。 `modulepreload` リンクは、モジュールが必ずしも必要になる前に、モジュールマップに準備された (評価されていない) モジュールでネットワークの取得を確実に行うことができます。[`modulepreload`](/ja/docs/Web/HTML/Attributes/rel/modulepreload) も参照してください。
- `next`
  - : {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} に関連する `next` の値は、現在の文書が一連の文書の一部であり、次の文書が参照先の文書であることを示します。 `<link>` に含まれている場合、ブラウザーはその文書が次に取得されると仮定し、リソースのヒントとして扱うことができます。
- `nofollow`
  - : {{htmlelement('form')}}, {{htmlelement('a')}}, {{htmlelement('area')}} に関連する `nofollow` キーワードは、サーチエンジンスパイダーにリンク関係を無視するよう指示します。 nofollow の関係は、現在の文書の所有者が、参照先の文書を支持していないことを示す場合があります。このキーワードは、検索エンジンオプティマイザーが、リンクファームがスパムページではないことを示すために使用します。
- `noopener`

  - : {{htmlelement('form')}}, {{htmlelement('a')}}, {{htmlelement('area')}} に関連するもので、ハイパーリンクがそもそもこれらのいずれかを作成する（つまり、適切な `target` 属性値を持っている）場合、補助的な閲覧コンテキストではない最上位の閲覧コンテキストを作成します。言い換えれば、 [`window.opener`](/ja/docs/Web/API/Window/opener) が null で `[target](target)="_parent"` が設定されているかのようにリンクを動作させます。

    これは [`opener`](#opener) の逆です。

- `noreferrer`
  - : {{htmlelement('form')}}, {{htmlelement('a')}}, {{htmlelement('area')}} に関連するもので、この値を含めると、リファラーを不明とし（`Referer` ヘッダーが含まれません）、あたかも `noopener` も設定されているかのように、最上位のの閲覧コンテキストが生成されます。
- `opener`
  - : ハイパーリンクが最上位の閲覧コンテキストを生成し、それが補助的な閲覧コンテキストでない場合 (すなわち "`_blank`" が `target` 属性の値として設定されている場合)、補助的な閲覧コンテキストを生成します。事実上、 [noopener](#noopener) の逆です。
- `pingback`
  - : 現在の文書へのピンバックを処理するピンバックサーバーのアドレスを与えます。[ピンバック仕様書](https://www.hixie.ch/specs/pingback/pingback)を参照してください。
- `preconnect`
  - : ブラウザーがリンク先のウェブサイトへの接続を開くためのヒントを事前に提供し、個人情報の開示やコンテンツのダウンロードを行わず、リンクが続いたときにリンク先のコンテンツをすばやく取得できるようにします。
- `prefetch`
  - : ユーザーエージェントが、後続のナビゲーションに必要となる可能性のあるターゲットリソースを先取りして取得し、キャッシュすることを指定します。
    詳しくは{{Glossary("prefetch", "先読み")}}を参照してください。
- `preload`
  - : ユーザーエージェントが、 [`as`](/ja/docs/Web/HTML/Element/link#as) 属性（および対応する出力先に関連付けられた優先度）によって指定された潜在的な出力先に従って、現在のナビゲーションの対象となるリソースを先行して取得し、キャッシュしなければならないことを指定します。 [`preload`](/ja/docs/Web/HTML/Attributes/rel/preload) 値のページを参照してください。
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : ユーザーエージェントが対象リソースを先取りして取得し、そのサブリソースの取得やレンダリングの実行など、将来的に高速なレスポンスを提供することを支援する方法で処理することを指定します。
- `prev`

  - : [`next`](#next) キーワードと同様に、{{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} に関連する `prev` の値は、現在の文書が一連の文書の一部であり、このリンクが一連の文書内の直前の文書を参照していることを示します。

    メモ: 別名である `previous` は正しくないため使用しないでください。

- `privacy-policy`

  - : {{htmlelement('a')}}、{{htmlelement('area')}}、{{htmlelement('link')}} 要素で有効で、 `privacy-policy` の値は参照する文書が現在の文書のデータ収集と使用方法を説明するプライバシーポリシーであることを示します。

- `search`

  - : {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} の各要素に関連する `search` キーワードは、ハイパーリンクが、現在の文書、サイト、および関連リソースでの検索のために特別に設計されたインターフェイスを持つ文書を参照していることを示し、検索に使用できるリソースへのリンクを提供します。

    [`type`](/ja/docs/Web/HTML/Element/link#type) 属性が `application/opensearchdescription+xml` に設定されている場合、そのリソースは、Firefox のインターフェイスに簡単に追加できる [OpenSearch](/ja/docs/Web/OpenSearch) プラグインです。

- `stylesheet`

  - : {{htmlelement('link')}} 要素で有効で、スタイルシートとして使われる外部リソースをインポートします。 [`type`](/ja/docs/Web/HTML/Element/link#type) 属性は `text/css` スタイルシートの場合は既定値となっているので必要ありません。`text/css` 型スタイルシートでない場合は、 type を宣言するのがベストです。

    この属性は、リンクがスタイルシートであることを定義しますが、他の属性や rel 値内の他のキーワードとの相互作用は、スタイルシートがダウンロードされるかどうかや使用されるかどうかに影響します。

    [`alternate`](#alternate) キーワードと一緒に使われると、代替のスタイルシートを定義します。この場合、空ではない [`title`](/ja/docs/Web/HTML/Element/link#title) を入れてください。

    メディアが [`media`](/ja/docs/Web/HTML/Element/link#media) 属性の値と一致しない場合、外部スタイルシートは使用されず、ダウンロードもされません。

    オリジンをまたいだ読み取りには CORS プロトコルが必要です。

- `tag`

  - : {{htmlelement('a')}} と {{htmlelement('area')}} 要素で有効であり、現在の文書に適用される (指定されたアドレスで識別される) タグを与えます。タグの値は、リンク先の文書に適用されるタグを記述した文書を参照していることを示します。このリンク種別は、タグクラウド内のタグには適していません。タグクラウド内のタグは、複数のページに適用されるのに対し、 `rel` 属性の `tag` 値は単一の文書に適用されるからです。

- `terms-of-service`

  - : {{htmlelement('a')}}、{{htmlelement('area')}}、{{htmlelement('link')}} 要素で有効で、 `terms-of-service` 値は参照する文書が現在の文書の提供者と、指定された文書を使用したいユーザーとの間で記述する利用規約であることを示します。

### 標準外の値

- `apple-touch-icon`
  - : iOS 端末上のウェブアプリケーションのアイコンを指定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLinkElement.relList")}}
- {{domxref("HTMLAnchorElement.relList")}}
- {{domxref("HTMLAreaElement.relList")}}
