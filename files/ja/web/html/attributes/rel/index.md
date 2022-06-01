---
title: 'HTML attribute: rel'
slug: Web/HTML/Attributes/rel
tags:
  - 属性
  - Attributes
  - 制約検証
  - Link
  - form
  - rel
spec-urls:
  - https://html.spec.whatwg.org/multipage/links.html#linkTypes
  - https://w3c.github.io/preload/#x2.link-type-preload
  - https://www.w3.org/TR/resource-hints/#dfn-preconnect
translation_of: Web/HTML/Attributes/rel
---

{{HTMLSidebar}}

**`rel`** 属性は、リンク先のリソースと現在の文書との関係を定義します。 {{htmlelement('link')}}、{{htmlelement('a')}}、{{htmlelement('area')}}、{{htmlelement('form')}} で有効で、対応する値は属性が見つかった要素に依存します。

関係の種類は `rel` 属性の値によって決まりますが、 `rel` 属性が存在する場合は、一連の固有のキーワードが順不同で空白で区切られたものであることが必要です。意味を表現しないクラス名とは異なり、 `rel` 属性は機械と人間の両方にとって意味のあるトークンを表現しなければなりません。現在、 `rel` 属性の値として登録されているのは、 [IANA link relation registry](https://www.iana.org/assignments/link-relations/link-relations.xhtml)、[HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes)、そして Living Standard が[提案している](https://html.spec.whatwg.org/multipage/links.html#other-link-types) microformats wiki の自由に編集可能な [existing-rel-values page](https://microformats.org/wiki/existing-rel-values) ページです。上記の 3 つの情報源のいずれにも存在しない `rel` 属性が使用された場合、 HTML バリデーター ([W3C Markup Validation Service](https://validator.w3.org/) など) によっては警告を生成します。

次の表は、既存のキーワードの中でも特に重要なものです。空白で区切られた値の中のすべてのキーワードは、その値の中で一意でなければなりません。

| `rel` の値                                                      | 説明                                                                                                                                                                                                                                           | `{{htmlelement('link')}}` | `{{htmlelement('a')}}` および `{{htmlelement('area')}}` | `{{htmlelement('form')}}` |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------- | ------------------------- |
| [`alternate`](#attr-alternate)                        | 現在の文書の別な表現。                                                                                                                                                                                                    | リンク                    | リンク                                               | 不許可                    |
| [`author`](#attr-author)                              | 現在の文書や記事の著者。                                                                                                                                                                                                            | リンク                    | リンク                                               | 不許可                    |
| [`bookmark`](#attr-bookmark)                          | 直近の祖先の章に対するパーマリンク。                                                                                                                                                                                                           | 不許可                    | リンク                                               | 不許可                    |
| [`canonical`](#attr-canonical)                        | 現在の文書の推奨 URL。                                                                                                                                                                                                               | リンク                    | 不許可                                               | 不許可                    |
| [`dns-prefetch`](/en-US/docs/Web/HTML/Link_types/dns-prefetch)   | 宛先リソースのオリジンに対する DNS 解決を先取りして行うようブラウザーに指示する                                                                                                                                                             | 外部リソース         | 不許可                                               | 不許可                    |
| [`external`](#attr-external)                          | 参照先の文書は、現在の文書と同じサイトの一部ではありません。                                                                                                                                                                         | 不許可                    | 注釈                                           | 注釈                |
| [`help`](#attr-help)                                  | コンテンツに応じたヘルプにリンクします。                                                                                                                                                                                                                       | リンク                    | リンク                                               | リンク                    |
| [`icon`](#attr-icon)                                  | 現在の文書を表すアイコンです。                                                                                                                                                                                                            | 外部リソース         | 不許可                                               | 不許可                    |
| [`license`](#attr-license)                            | 現在の文書のメインコンテンツが、参照先の文書で説明されている著作権ライセンスによってカバーされていることを示す。                                                                                                                     | リンク                    | リンク                                               | リンク                    |
| [`manifest`](/en-US/docs/Web/HTML/Link_types/manifest)           | ウェブアプリマニフェスト                                                                                                                                                                                                                                      | リンク                    | 不許可                                               | 不許可                    |
| [`me`](/en-US/docs/Web/HTML/Link_types/me)           | 現在の文書がリンク先のコンテンツを所有する人物を表すことを示す                                                                                                                                                                                                                                      | リンク                    | 不許可                                               | 不許可                    |
| [`modulepreload`](/en-US/docs/Web/HTML/Link_types/modulepreload) | スクリプトを先取りして取得し、後で評価できるようにこの文書のモジュールマップに保存するようブラウザーに指示します。オプションで、モジュールの依存関係も読み取ることができます。                                                                       | 外部リソース         | 不許可                                               | 不許可                    |
| [`next`](#attr-next)                                  | 現在の文書が一連の文書の一部であり、その中の次の文書が参照先の文書であることを示します。                                                                                                                        | リンク                    | リンク                                               | リンク                    |
| [`nofollow`](#attr-nofollow)                          | 現在の文書の原著者または発行者が、参照先の文書を支持していないことを示します。                                                                                                                                          | 不許可                    | 注釈                                           | 注釈                |
| [`noopener`](/en-US/docs/Web/HTML/Link_types/noopener)           | ハイパーリンクが補助的な閲覧コンテキストのいずれかを生成する (つまり、適切な `target` 属性値を持つ) 場合、補助的な閲覧コンテキストではない最上位の閲覧コンテキストを生成します。                                                      | 不許可                    | 注釈                                           | 注釈                |
| [`noreferrer`](#attr-noreferrer)                      | `Referer` ヘッダーを含めません。さらに、 `noopener` と同じ効果もあります。                                                                                                                                                                | 不許可                    | 注釈                                           | 注釈                |
| [`opener`](#attr-opener)                              | ハイパーリンクによって、補助閲覧コンテキストではない最上位の閲覧コンテキストが生成される場合 (すなわち、 `target` 属性の値が "`_blank`" である場合)、補助閲覧コンテキストを生成します。                                              | 不許可                    | 注釈                                           | 注釈                |
| [`pingback`](#attr-pingback)                          | 現在の文書へのピンバックを処理するピンバックサーバーのアドレスを指定します。                                                                                                                                                              | 外部リソース         | 不許可                                               | 不許可                    |
| [`preconnect`](/en-US/docs/Web/HTML/Link_types/preconnect)       | ユーザーエージェントが対象となるリソースのオリジンへの接続を先読みすることを指定します。                                                                                                                                                            | 外部リソース         | 不許可                                               | 不許可                    |
| [`prefetch`](/en-US/docs/Web/HTML/Link_types/prefetch)           | ユーザーエージェントが、後続のナビゲーションに必要となる可能性の高いターゲットリソースを先取りしてキャッシュすることを指定します。                                                                                                       | 外部リソース         | 不許可                                               | 不許可                    |
| [`preload`](/en-US/docs/Web/HTML/Link_types/preload)             | `[as](as)` 属性で指定された潜在的な距離 (および対応する距離に関連する優先度) に従って、ユーザーエージェントが現在のナビゲーションのためにターゲットリソースを先取りしてキャッシュしなければならないことを指定する。 | 外部リソース         | 不許可                                               | 不許可                    |
| [`prerender`](/en-US/docs/Web/HTML/Link_types/prerender)         | ユーザーエージェントが、対象となるリソースを先取りして取得し、将来的に高速なレスポンスを実現するための処理を行うことを指定します。                                                                                               | 外部リソース         | 不許可                                               | 不許可                    |
| [`prev`](#attr-prev)                                  | 現在の文書が一連の文書の一部であり、その中の前の文書が参照先の文書であることを示します。                                                                                                                    | リンク                    | リンク                                               | リンク                    |
| [`search`](#attr-search)                              | 現在の文書とその関連ページを検索するのに使用できるリソースへのリンクを提供します。                                                                                                                                             | リンク                    | リンク                                               | リンク                    |
| [`stylesheet`](#attr-stylesheet)                      | スタイルシートをインポートします。                                                                                                                                                                                                                                | 外部リソース         | 不許可                                               | 不許可                    |
| [`tag`](#attr-tag)                                    | 現在の文書に適用される (与えられたアドレスで識別される) タグを与えます。                                                                                                                                                                   | 不許可                    | リンク                                               | 不許可                    |

`rel` 属性は {{htmlelement('link')}}、{{htmlelement('a')}}、{{htmlelement('area')}}、{{htmlelement('form')}} の各要素に関連していますが、これらの要素のサブセットにのみ関連する値もあります。他の HTML キーワード属性の値と同様に、これらの値は大文字小文字の区別がありません。

`rel` 属性には既定値がありません。属性が省略された場合や、属性の値がいずれも対応されていない場合、文書は宛先のリソースとの間にハイパーリンクがあるということ以外には、特に関係を持ちません。この場合、 {{htmlelement('link')}} と {{htmlelement('form')}} では、 `rel` 属性がない場合、キーワードがない場合、または上記の空白で区切られたキーワードのうち 1 つ以上がない場合、その要素はいかなるリンクも生成しません。 {{htmlelement('a')}} と {{htmlelement('area')}} はリンクを生成しますが、関係は定義されません。

## 値

- {{htmlattrdef("alternate")}}

  - : 現在の文書の代替表現を示します。 {{htmlelement('link')}}、{{htmlelement('a')}}、{{htmlelement('area')}} で有効であり、意味は他の属性の値に依存します。

    - `{{anch('stylesheet')}}` キーワードと共に `<link>` で使用された場合は、代替スタイルシートを生成します。

      ```html
      <!-- 常設スタイルシート -->
      <link rel="stylesheet" href="default.css">
      <!-- 代替スタイルシート -->
      <link rel="alternate stylesheet" href="highcontrast.css" title="High contrast">
      ```

    - この文書の言語と異なる [hreflang](hreflang) 属性と共に使用された場合は、翻訳版を表します。
    - [type](type) 属性と共に使用された場合は、属性によって、参照先の文書が異なるファイル形式のの同じコンテンツであることを示します。例えば、 `type="application/rss+xml"` とすると、シンジケーションフィードを参照するハイパーリンクが生成されます。

      ```html
      <link rel="alternate" type="application/atom+xml" href="posts.xml" title="Blog">
      ```

    - [hreflang](hreflang) と [type](type) の両属性と共に使用された場合は、この文書の別の言語、他のメディア向けの別なファイル形式の版へのリンクを指定します。

      ```html
      <link rel=alternate href="/fr/html/print" hreflang=fr type=text/html media=print title="French HTML (for printing)">
      <link rel=alternate href="/fr/pdf" hreflang=fr type=application/pdf title="French PDF">
      ```

    > **Note:** 廃止された `rev="made"` は `rel="alternate"` として扱われます。

- {{htmlattrdef("author")}}
  - : 現在の文書や記事の著者を示します。 {{htmlelement('link')}}、{{htmlelement('a')}}、{{htmlelement('area')}} 要素で使用された場合、 `author` キーワードはハイパーリンクを生成します。 {{htmlelement('a')}} と {{htmlelement('area')}} では、リンクされた文書 (または`mailto:`) が、最も近い祖先の {{htmlelement('article')}} があればその祖先の著者に関する情報を提供することを示し、そうでなければ文書全体を示します。 {{htmlelement('link')}} の場合は、文書全体の著者を表します。
- {{htmlattrdef("bookmark")}}
  - : {{htmlelement('a')}} および {{htmlelement('area')}} の `rel` 属性の値として使用されると、このブックマークは祖先のセクションに対して、 1 つ以上あれば最も近い祖先の {{htmlelement('article')}} または {{htmlelement('section')}} を、そうでなければ最も近い見出しの兄弟または祖先の子孫・・・というようにパーマリンクを提供します。
- {{htmlattrdef("canonical")}}
  - : {{htmlelement('link')}} で有効であり、現在の文書で推奨される URL を示します。検索エンジンで有用です。
- {{htmlattrdef("dns-prefetch")}}
  - : {{htmlelement('link')}} 要素が {{htmlelement('body')}} と {{htmlelement('head')}} の両方の中にある場合に関連し、ターゲットとなるリソースのオリジンに対する DNS 解決を先取りして実行するようブラウザーに指示します。ユーザーが必要とする可能性の高いリソースに有効で、ユーザーがリソースにアクセスする際に、ブラウザーが指定されたリソースのオリジンに対する DNS 解決を先取りして実行するため、待ち時間を短縮してパフォーマンスを向上させることができます。リソースヒントにある [dns-prefetch](/ja/docs/Web/Performance/dns-prefetch) を参照してください。
- {{htmlattrdef("external")}}
  - : {{htmlelement('form')}}、{{htmlelement('a')}}、{{htmlelement('area')}} に関連し、参照先の文書が現在のサイトの一部ではないことを示します。属性セレクターと一緒に使うことで、外部リンクを現在のサイトから離れることをユーザーに示すようなスタイルにすることができます。
- {{htmlattrdef("help")}}
  - : {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, and {{htmlelement('area')}} に関連し、 `help` キーワードは、リンク先のコンテンツがコンテキスト依存のヘルプを提供することを示し、ハイパーリンクを定義している要素の親とその子のための情報を提供します。 `<link>` 内で使用された場合、ヘルプは文書全体を対象とします。 {{htmlelement('a')}} および {{htmlelement('area')}} に含まれていて対応している場合、既定のカーソルが `pointer` ではなく `help` になります。
- {{htmlattrdef("icon")}}

  - : {{htmlelement('link')}} と共に有効で、リンクされたリソースは、現在の文書の、ユーザーインターフェースでページを表現するためのリソースであるアイコンを表します。

    `icon` の値の最も一般的な用途はファビコンです。

    ```html
    <link rel="icon" href="favicon.ico">
    ```

    複数の `<link rel="icon">` があった場合、ブラウザーはそれぞれの [`media`](media) 属性、[`type`](type) 属性、 [`sizes`](sizes) 属性を使って、最も適切なアイコンを選択します。複数のアイコンが同じように適切である場合は、最後のアイコンが使用されます。最も適切なアイコンが、対応していないファイル形式を使用しているなどの理由で不適切であることが後に判明した場合、ブラウザーは次に適切なアイコンを選択します。

    > **Note:** Firefox 83 以前は [crossorigin](/ja/docs/Web/HTML/Attributes/crossorigin) 属性が `rel="icon"` で対応していませんでしたが、 [Chrome でも未解決の問題があります](https://bugs.chromium.org/p/chromium/issues/detail?id=1121645)。

    > **Note:** Apple の iOS では、他のモバイルブラウザーのように、ウェブクリップやスタートアップのプレースホルダー用のウェブページのアイコンを選択するために、このリンク種別や [`sizes`](sizes) 属性を使用していません。代わりに、標準外の [`apple-touch-icon`](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) および [`apple-touch-startup-image`](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) をそれぞれ使用しています。

    > **Note:** `shortcut` リンク種別が `icon` の前に見られることが良くありますが、このリンク種別は適合するものではなく、無視されるので**使用しないでください**。

- {{htmlattrdef("license")}}

  - : {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}} の各要素で有効である `license` の値は、ハイパーリンクがライセンス情報を記述した文書につながること、現在の文書のメインコンテンツが、参照された文書で記述された著作権ライセンスによってカバーされていることを示します。 {{HTMLElement("head")}} 要素内にない場合、規格では、文書の特定の部分に適用されるハイパーリンクか、文書全体に適用されるハイパーリンクかを区別していません。ページ上のデータのみがこれを示すことができます。

    ```html
    <link rel="license" href="#license">
    ```

    > **Note:** 認識はされているものの、同義語の `copyright` は正しくないため使用しないでください。

- {{htmlattrdef("manifest")}}
  - : [ウェブアプリマニフェスト](/ja/docs/Web/Manifest)です。オリジンをまたいだ読み取りのための CORS プロトコルの使用に必要です。
- {{htmlattrdef("modulepreload")}}
  - : パフォーマンスの向上に役立ちます。文書内の {{htmlelement('link')}} に関連して、 `rel="modulepreload"` を設定すると、ブラウザーはスクリプト (および依存関係) を先取りして取得し、文書のモジュールマップに保存して後で評価するようになります。 `modulepreload` リンクは、モジュールが必ずしも必要になる前に、モジュールマップに準備された (評価されていない) モジュールでネットワークの取得を確実に行うことができます。[リンク種別: `modulepreload`](/ja/docs/Web/HTML/Link_types/modulepreload) も参照してください。
- {{htmlattrdef("next")}}
  - : {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} に関連する `next` の値は、現在の文書が一連の文書の一部であり、次の文書が参照先の文書であることを示します。 `<link>` に含まれている場合、ブラウザーはその文書が次に取得されると仮定し、リソースのヒントとして扱うことができます。
- {{htmlattrdef("nofollow")}}
  - : {{htmlelement('form')}}, {{htmlelement('a')}}, {{htmlelement('area')}} に関連する `nofollow` キーワードは、サーチエンジンスパイダーにリンク関係を無視するよう指示します。 nofollow の関係は、現在の文書の所有者が、参照先の文書を支持していないことを示す場合があります。このキーワードは、検索エンジンオプティマイザーが、リンクファームがスパムページではないことを示すために使用します。
- {{htmlattrdef("noopener")}}

  - : {{htmlelement('form')}}, {{htmlelement('a')}}, {{htmlelement('area')}} に関連するもので、ハイパーリンクがそもそもこれらのいずれかを作成する (つまり、適切な `target` 属性値を持っている) 場合、補助的な閲覧コンテキストではない最上位の閲覧コンテキストを作成します。言い換えれば、 [`window.opener`](/ja/docs/Web/API/Window/opener) が null で `[target](target)="_parent"` が設定されているかのようにリンクを動作させます。<br>

	これは [opener](#opener) の逆です。
- {{htmlattrdef("noreferrer")}}
  - : {{htmlelement('form')}}, {{htmlelement('a')}}, {{htmlelement('area')}} に関連するもので、この値を含めると、リファラーを不明とし (`Referer` ヘッダーが含まれません)、あたかも `noopener` も設定されているかのように、最上位のの閲覧コンテキストが生成されます。
- {{htmlattrdef("opener")}}
  - : ハイパーリンクが最上位の閲覧コンテキストを生成し、それが補助的な閲覧コンテキストでない場合 (すなわち "`_blank`" が `target` 属性の値として設定されている場合)、補助的な閲覧コンテキストを生成します。事実上、 [noopener](#noopener) の逆です。
- {{htmlattrdef("pingback")}}
  - : 現在の文書へのピンバックを処理するピンバックサーバーのアドレスを与えます。
- {{htmlattrdef("preconnect")}}
  - : ユーザーエージェントが対象リソースのオリジンに先回りして接続することを指定します。
- {{htmlattrdef("prefetch")}}
  - : ユーザーエージェントが、後続のナビゲーションに必要となる可能性のあるターゲットリソースを先取りして取得し、キャッシュすることを指定します。
- {{htmlattrdef("preload")}}
  - : [`as`](as) 属性で指定された潜在的な方向 (および対応する方向に関連する優先度) に従って、ユーザーエージェントが現在のナビゲーションのためにターゲットリソースを先取りしてキャッシュする必要があることを指定します。
- {{htmlattrdef("prerender")}}
  - : ユーザーエージェントが先取りしてターゲットリソースを取得し、将来のより速いレスポンスに役立つ方法で処理することを指定します。
- {{htmlattrdef("prev")}}
  - : [next](#next) キーワードと同様に、{{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} に関連する `prev` の値は、現在の文書が一連の文書の一部であり、このリンクが一連の文書内の直前の文書を参照していることを示します。

    メモ: 別名である `previous` は正しくないため使用しないでください。

- {{htmlattrdef("search")}}

  - : {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} の各要素に関連する `search` キーワードは、ハイパーリンクが、現在の文書、サイト、および関連リソースでの検索のために特別に設計されたインターフェイスを持つ文書を参照していることを示し、検索に使用できるリソースへのリンクを提供します。

	  [`type`](type) 属性が `application/opensearchdescription+xml` に設定されている場合、そのリソースは、Firefox や Internet Explorer などの一部のブラウザーのインターフェイスに簡単に追加できる [OpenSearch](/ja/docs/Web/OpenSearch) プラグインです。

- {{htmlattrdef("stylesheet")}}

  - : {{htmlelement('link')}} 要素で有効で、スタイルシートとして使われる外部リソースをインポートします。 [`type`](type) 属性は `text/css` スタイルシートの場合は既定値となっているので必要ありません。 `text/css` 種類のスタイルシートでない場合は、 type を宣言するのがベストです。

    この属性は、リンクがスタイルシートであることを定義しますが、他の属性や rel 値内の他のキーワードとの相互作用は、スタイルシートがダウンロードされるかどうかや使用されるかどうかに影響します。

    [alternate](#alternate) キーワードと一緒に使われると、代替のスタイルシートを定義します。この場合、空ではない `[title](type)` を入れてください。

    メディアが `[media](media)` 属性の値と一致しない場合、外部スタイルシートは使用されず、ダウンロードもされません。

    オリジンをまたいだ読み取りには CORS プロトコルが必要です。

- {{htmlattrdef("tag")}}
  - : {{htmlelement('a')}} と {{htmlelement('area')}} 要素で有効であり、現在の文書に適用される (指定されたアドレスで識別される) タグを与えます。タグの値は、リンク先の文書に適用されるタグを記述した文書を参照していることを示します。このリンク種別は、タグクラウド内のタグには適していません。タグクラウド内のタグは、複数のページに適用されるのに対し、 `rel` 属性の `tag` 値は単一の文書に適用されるからです。

### 標準外の値

- {{htmlattrdef("apple-touch-icon")}}
  - : iOS 端末上のウェブアプリケーションのアイコンを指定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

### `link` 要素の `rel` 属性

{{Compat("html.elements.link.rel")}}

### `a` 要素の `rel` 属性

{{Compat("html.elements.a.rel")}}

### `area` 要素の `rel` 属性

{{Compat("html.elements.area.rel")}}

## 関連情報

- {{domxref("HTMLLinkElement.relList")}}
- {{domxref("HTMLAnchorElement.relList")}}
- {{domxref("HTMLAreaElement.relList")}}
