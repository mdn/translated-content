---
title: <script type="speculationrules">
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{SeeCompatTable}}

**`speculationrules`** の値を [`<script>` 要素](/ja/docs/Web/HTML/Reference/Elements/script/type)の [`type`](/ja/docs/Web/HTML/Reference/Elements/script) 属性に設定すると、要素の本体に投機ルールが入っていることを示します。

投機ルールは JSON 構造の形式をとり、どのリソースがブラウザーによって先読みまたは先行描画されるべきかを決定します。これは[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) の一部です。

> [!NOTE]
> 投機ルールは、 HTTP の {{httpheader("Speculation-Rules")}} ヘッダーで参照される外部テキストファイル内で、[下記の JSON 表現](#投機ルールの_json_表現)を使用して定義することができます。 HTTP ヘッダーを指定することは、開発者が文書自体を直接修正できない場合に便利です。

## 構文

```html
<script type="speculationrules">
  // ルールを定義する JSON オブジェクト
</script>
```

> [!NOTE]
> `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity`, `referrerpolicy` の各属性は指定することができません。

### 例外

- `TypeError`
  - : 投機ルール定義が有効な JSON オブジェクトではない場合。

## 解説

`<script type="speculationrules">` 要素には、投機ルールを定義する有効な JSON 構造が格納されていなければなりません。次の例では、prefetch と prerender の別個のルールを表示させています。

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": { "href_matches": "/next" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

### 投機ルールの JSON 表現

JSON 構造は最上位のレベルに 1 つ以上のフィールドを格納し、それぞれが投機ルールを定義するアクションを表します。対応しているアクションは以下の通りです。

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : 関連する文書レスポンス本体がダウンロードされ、それらの文書に移動したときのパフォーマンスが大幅に改善されるようにする、将来的なナビゲーションの可能性のあるルール。ページが参照するサブリソースはどれもダウンロードされないことに注意してください。
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : 関連文書が完全にダウンロードされ、レンダリングされ、不可視のタブに読み込まれるべき、将来起こりうるナビゲーションのルール。これには、すべてのサブリソースを読み込むこと、すべての JavaScript を実行すること、さらにはサブリソースを読み込んで JavaScript によって開始されるデータ フェッチを実行することが含まれます。これらの文書に移動すると、移動は即座に行われ、大幅なパフォーマンスの向上につながります。

> [!NOTE]
> 先読みと先読みを効果的に使用する方法の詳細については[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) のメインページを参照してください。

各アクションフィールドは配列を格納し、配列は 1 つ以上のオブジェクトを格納します。各オブジェクトには、URL と関連の引数の集合を定義する単一のルールが格納されます。

各オブジェクトは以下のプロパティを格納することができます。

- `"source"`
  - : ルールが適用される URL のソースを示す文字列。 これ以外のプロパティからも常に値を推測できるため、これはオプションです。

    以下のいずれかを取ることができます。
    - `"document"`
      - : 関連付けられた文書内のナビゲーションリンク（{{htmlelement("a")}} および {{htmlelement("area")}} 要素で定義されている）から、 `"where"` キーで記述された条件に基づいて、URLが一致することを指定します。 `"where"` キーが存在することは `"source": "document"` を意味するので、これはオプションです。
    - `"list"`
      - : URL は `"urls"` キーで指定されているリストから決まります。 `"urls"` キーが存在するということは、 `"source": "list"` が存在することを意味します。そのため、これはオプションです。

- `"urls"` {{experimental_inline}}
  - : ルールを適用する URL のリストを表す文字列の配列です。これらは絶対 URL または相対 URL です。相対 URL は、文書のベース URL （文書内のインラインの場合）または外部リソース URL （外部から取得する場合）に対して相対的に構文解析されます。 `"urls"` と `"where"` を同じルールで設定することはできません。

- `"where"` {{experimental_inline}}
  - : 関連付けられた文書内の URL にルールが一致する条件を表すオブジェクト。実質的には、 `"where"` オブジェクトは、推測ルールが適用されるかどうかを確認するために、ページ上のすべてのリンクに対して実行されるテストを表します。 `"where"` と `"urls"` は、同じルールで設定することはできません。

    このオブジェクトには、次のプロパティのうち 1 つだけが含まれている可能性があります。
    - `"href_matches"`
      - : URL パターンを含む文字列、または複数の URL パターン文字列を含む配列で、標準の [URL パターン API 構文](/ja/docs/Web/API/URL_Pattern_API)に従うものです。 URL がパターンに一致する文書内のリンクにルールが適用されます。
    - `"relative_to"`
      - : `"href_matches"` 条件の場合、この条件を一致させる場所を相対的に指定します。これは、[ルールレベルの `"relative_to"` キー](#relative_to_2)と同様に動作しますが、 `"where"` キー内の単一の `"href_matches"` 条件のみに影響を与えます。
    - `"selector_matches"`
      - : [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)を含む文字列、または複数の CSS セレクターを含む配列。これらのセレクターに一致する文書内のリンクにルールが適用されます。
    - `"and"`
      - : 条件（`"href_matches"`、`"selector_matches"`、`"and"`、`"not"`、`"or"` のいずれか）を含む 1 つ以上のオブジェクトを含む配列で、すべてが一致しなければルールが適用されません。
    - `"not"`
      - : 1 つの条件（`"href_matches"`、`"selector_matches"`、`"and"`、`"not"`、`"or"` のいずれか）を含むオブジェクトで、一致する場合は、そのオブジェクトにはルールが適用されません。条件に一致しないすべてのリンクには、ルールが適用されます。
    - `"or"`
      - : 条件（`"href_matches"`、`"selector_matches"`、`"and"`、`"not"`、`"or"` のいずれか）を含む 1 つ以上のオブジェクトを含む配列。これらのいずれかが一致すると、ルールが適用されます。

    `"where"` 条件は、複雑な条件を作成するために複数レベルの入れ子にすることができます。または、単純に保つために別個のルールに分割することも選べます。 [where の例](#where_構文の例) 詳しくは、例えばこの例や、使用例の複数例をご覧ください。

- `"eagerness"` {{experimental_inline}}
  - : パフォーマンス上の利点とリソースのオーバーヘッドのバランスを取るために、リンク対象をどの程度先読み/事前レンダリングすべきかについて、ブラウザーにヒントを提供する文字列。利用可能な値は次のとおりです。
    - `"immediate"`
      - : 作成者は、リンクがたどれられる可能性が非常に高いと考えており、また、文書内の画像を取得するのにかなりの時間がかかる可能性もあります。先読み/事前レンダリングは、ユーザーの好みやリソースの制限などの考慮事項を除いては、できればすぐに開始すべきです。
    - `"eager"`
      - : 作成者は、できるだけ早く、多数のナビゲーションを先読み/事前レンダリングしたいと考えています。リンクがたどられる可能性がわずかでもある場合は、先読み/事前レンダリングを開始すべきです。例えば、ユーザーがリンクに向かってマウスカーソルを移動させたり、リンクに一時的にカーソルを合わせたり、リンクが目立つ場所にある状態でスクロールを一時停止したりするような場合です。
    - `"moderate"`
      - : 作成者は、「積極的」と「保守的」のバランスを模索しています。先読み/事前レンダリングは、ユーザーが近い将来リンクに従う可能性が高いと判断できる場合に開始すべきです。例えば、ユーザーがリンクをビューポートにスクロールし、しばらくの間リンクの上にカーソルを置いたり、フォーカスを当てたりするような場合です。
    - `"conservative"`
      - : 作成者は、リソースのトレードオフを最小限に抑えながら、投機的読み込みから何らかの利益を得たいと考えています。先読み/事前レンダリングは、例えば {{domxref("Element.mousedown_event", "mousedown")}} や {{domxref("Element.pointerdown_event", "pointerdown")}} のように、ユーザーがリンクをクリックし始めたときにのみ開始すべきです。

    `"eagerness"` が明示的に指定されていない場合、リスト (`"urls"`) ルールは既定で `immediate` となり、文書 (`"where"`) ルールは既定で `conservative` となります。ブラウザーは、このヒントを独自の経験則とともに考慮します。そのため、より消極的な候補がより良い選択肢であると判断された場合、作成者がより消極的であると示唆したリンクが、別のリンクよりも選択される可能性があります。

- `"expects_no_vary_search"` {{experimental_inline}}
  - : ブラウザーにヒントを与える文字列で、先読み/事前レンダリングのリクエストを受け取っている、文書内のレスポンスにどのような {{httpheader("No-Vary-Search")}} ヘッダー値を設定するか示します。ブラウザーは、この値を使用して、既存の先読み/事前レンダリングの完了を待つ方が良いか、あるいは、予測ルールが一致した時点で新しいフェッチリクエストを開始する方が良いかを事前に判断することができます。この使用方法の詳細については、 [`"expects_no_vary_search"` の例](#expects_no_vary_search_example)を参照してください。

- `"referrer_policy"` {{experimental_inline}}
  - : ルールで指定された URL をリクエストする際に使用する、特定のリファラーポリシー文字列を表す文字列です。実現可能な値については、 [`Referrer-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Referrer-Policy) を参照してください。この目的は、リファレンスページが、そのページが（既定、または `Referrer-Policy` を使用によって）すでに保有するポリシーよりも、推測的なリクエストに対して厳格なポリシーを設定できるようにすることです。

    > [!NOTE]
    > サイトをまたぐ先読みには、少なくとも既定値である `"strict-origin-when-cross-origin"` と同じくらい厳格なリファラポリシーが要求されます。つまり、`"strict-origin-when-cross-origin"`、`"same-origin"`、`"strict-origin"`、`"no-referrer"` です。投機ルールで緩いポリシーを設定すると、それがサイトをまたぐケースに対して十分に厳格である限り、リファレンスページで設定する厳格なポリシーを上書きします。

    > [!NOTE]
    > 文書内のルールの場合、一致するリンクで指定されたリファラポリシー（例えば、 [`referrerpolicy`](/ja/docs/Web/HTML/Reference/Elements/a#referrerpolicy) 属性を使用）が使用されますが、ルールでそれを上書きするポリシーが指定されている場合はこの限りではありません。

- `"relative_to"` {{experimental_inline}}
  - : URL で一致するリンクを相対的に照合する場所を指定する文字列。値は次のいずれかです。
    - `document`
      - : URL は、投機ルールを設定する文書の相対位置と一致する必要があります。
    - `ruleset`
      - : URLは、ルールが指定されているファイルと相対的に一致する必要があります。これが既定値です。

    このキー設定は、外部ファイルで定義されたルール（{{httpheader("Speculation-Rules")}} ヘッダーを使用して設定）のみに関連します。ルールが（インラインの `<script>` 要素など）設定されている文書内で指定されている場合、違いはありません。

- `"requires"` {{experimental_inline}}
  - : ルールを解釈するブラウザーが持つ機能を表す文字列の配列で、 指定した URL にルールを適用する場合に利用できます。

    > [!WARNING]
    > 指定した条件を満たせないブラウザーでは、[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) に対応していても、先読みは自動的に失敗します。

    取りうる値は次の通りです。
    - `"anonymous-client-ip-when-cross-origin"`
      - : `"prefetch"` のみ オリジン間先読みリクエストが発行された場合に、ユーザーエージェントがクライアントの IP アドレスをオリジンのサーバーから見えないようにできる場合にのみ、ルールが一致するように指定します。これがどのように動作するのかは、ブラウザー実装に依存します。例えば、次のようになります。
        - Chrome の実装では、 Google 自身が所有するプロキシーを使って IP アドレスを隠蔽しているため、既定値では Google が制御するリファラーに対してのみ動作します（この場合、出力先の URL を Google に送信することはさらなるプライバシー漏洩にはならないため）。 Google が所有していないサイトで使用する場合、これを含むルールは `chrome://settings/preloading` で "Enhanced preloading" をオンにしているユーザーにのみ一致します。
        - 他の Chromium ベースのブラウザーは、自分自身で解決策を提供する必要があります。対象とするすべてのブラウザーで十分にテストすることをお勧めします。
        - 将来の Safari 実装では、 [iCloud プライベートリレー](https://support.apple.com/ja-jp/102602)のようなものを使用する可能性があります。
        - 将来の Firefox 実装では、[Mozilla VPN](https://www.mozilla.org/ja/products/vpn/) 製品をベースにしたものを使用するかもしれません。

> [!NOTE]
> 投機ルールは `<script>` 要素を使用するので、サイトに [`Content-Security-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) の [`script-src`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) ディレクティブが指定されている場合は、明示的に許可する必要があります。これは `"inline-speculation-rules"` 値を hash- または nonce-source で追加することで行われます。

## 例

### 先読みと事前レンダリングを同じ一連のルールで設定

解説の節で紹介した基本的な例では、先読みと事前レンダリングされたそれぞれに対して定義された個別の推測ルールを記載しました。 どちらも 1 つのルールセットで定義することが実現可能です。

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ],
    "prerender": [
      {
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

> [!NOTE]
> このコードでは、リスト (`"urls"`) ルールと文書 (`"where"`) ルールに関するサンプルコードが掲載されています。

### 複数のルールセット

また、単一の HTML ファイルに複数の一連のルールを含めることも可能です。

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

そして、単一の結果集合に複数のルールを設定することも可能です。

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "urls": ["one.html"]
      },
      {
        "urls": ["two.html"]
      }
    ]
  }
</script>
```

### 動的なルール挿入

下記は、投機ルールを検出し、対応している場合は、 JavaScript を介して動的に先行描画の投機ルールを追加する機能の例です。

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  const specRules = {
    prerender: [
      {
        urls: ["/next.html"],
      },
    ],
  };
  specScript.textContent = JSON.stringify(specRules);
  console.log("added speculation rules to: next.html");
  document.body.append(specScript);
}
```

この[事前レンダリングのデモ](https://prerender-demos.glitch.me/)のページでは、その様子を見ることができます。

### `where` 構文の例

ドキュメントソースルールには `"where"` プロパティが含まれ、これは文書内のどのリンクが一致するかを定義する基準を含むオブジェクトです。実際には、 `"where"` オブジェクトは、推測ルールが適用されるかどうかを確認するためにページ上のすべてのリンクに対して実行されるテストを表します。

最も基本的なバージョンでは、単一の URL パターンまたは CSS セレクターと照合します。

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` と `"selector_matches"` は、値の配列として設定することもでき、複数の URL パターンまたは CSS セレクターを同時に一致させることができます。

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL パターンとセレクターにはワイルドカード (`*`) 文字を含めることもでき、 1 つの値で複数の URL に照合することができます。例えば、下記のようなオブジェクトは、 `user/`、`user/settings`、`user/stats` などと一致します。

```json
{ "where": { "href_matches": "/user/*" } }
```

[検索引数（またはクエリー文字列）](/ja/docs/Web/API/URL/search)も `href_matches` で照合できます。例えば、下記のようなオブジェクトは、 `category` 検索引数（先頭あるいはその後の引数）を持つすべての同一オリジンの URL と一致する可能性があります。

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

`"not"` 条件内に置くことで、あらゆる条件を否定することができます。つまり、一致した場合は、リンクには投機的ルールが適用されません。一致しない場合は、適用されます。次の例では、 URL パターン `/logout` に一致しないすべてのリンクにルールが適用されますが、 `/logout` に一致するリンクには適用されません。

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### 複数の `"where"` 条件を `"and"` または `"or"` で組み合わせる

複数の条件を `"and"` または `"or"` 条件の中に結合することができます。これらは、複数の条件を保有する配列の値を取り、そのすべてまたはいずれかが（それぞれ）一致しないと、投機的ルールがリンクに適用されません。 `"and"` または `"or"` を使用することで、条件を複数レベルのネストにすることができます。ネストのレベル数に制限はありません。

`"where"` オブジェクトを `if` 文と同等であると考えることは有益です。 つまり、

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

は、次のものと同等です。

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

次の投機ルールの例では、問題のあることがわかっているページ - `/logout` ページと、 `.no-prerender` クラスでマークアップされたリンク - を除いて、すべて同じオリジンのページが先読みされます。

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "where": {
          "and": [
            { "href_matches": "/*" },
            { "not": { "href_matches": "/logout" } },
            { "not": { "selector_matches": ".no-prerender" } }
          ]
        }
      }
    ]
  }
</script>
```

> [!NOTE]
> 上記の `where` パターンには、サイト間リンクは含まれません。サイト間リンクは先読みには対応していますが（ユーザーが出力先サイト用の Cookie を保有していない場合、追跡を防ぐために）、プリレンダリングには対応していません。

### `"relative_to"` の例

外部から取得するルールセット（すなわち {{httpheader("Speculation-Rules")}} 経由）のレスポンスヘッダーの場合、リストルール内の URL およびドキュメントルール内の URL パターンは、既定では、コンテナーである外部テキストファイルの URL に対して相対的に解析されます。 リストルール内の URL をドキュメントのベース URL に対して相対的に解析するには、 `"relative_to"` を次のように使用します。

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

文書ルールでは、 `"relative_to"` を `"href_matches"` と直接組み合わせることができ、文書のベース URL は、その特定の条件におけるパターンでのみ使用することができます。

```json
{
  "where": {
    "or": [
      { "href_matches": "/home", "relative_to": "document" },
      { "href_matches": "/about" }
    ]
  }
}
```

上記の例では、最初の `"href_matches"` のみが文書のベース URL からの相対に一致します。

`relative_to` は主に、投機ルールを適用したい文書が JSON ファイルが異なるオリジンにある場合に適用されます。

1. 文書が `https://example.com/some/subpage.html` にあり、ルールが `https://example.com/resources/rules.json` にある場合、`relative_to` が `document` または `ruleset` のどちらに設定されていても、 `/home` は常に `https://example.com/home` となります。

2. しかし、文書が `https://example.com/some/subpage.html` にあり、ルールが `https://other.example/resources/rules.json` （例えば、サードパーティやクッキーなしのリソースオリジン）にある場合は、次のようになります。
   - `"relative_to": "document"` では `/home` が `https://example.com/home` になります。
   - `"relative_to": "ruleset"` では `/home` が `https://other.example/home` になります。

   これが `"relative_to"` の主な用途です。

3. もう一つの考えられる（しかし、頻度は低い）使用例は、URLが `/home` ではなく `home` という方法で指定されている場合です。文書が `https://example.com/some/subpage.html` にあり、ルールが `https://example.com/resources/rules.json` にある場合、次のようになります。
   - `"relative_to": "document"` では `home` が `https://example.com/some/home` になります。
   - `"relative_to": "ruleset"` では `home` が `https://example.com/resources/home` になります。

### `"expects_no_vary_search"` の例

ユーザーディレクトリーのランディングページである `/users` の場合、特定のユーザーに関する情報を表示するために `id` 引数が加算され、例えば `/users?id=345` となります。この URL がキャッシュ目的で同一と見なされるかどうかは、アプリケーションの動作に依存します。

1. この引数が、指定されたユーザーのための情報がある完全に新しいページが読み込むという効果を持つ場合、 URL は別個にキャッシュされるべきです。
2. この引数が、同じページ上で指定したユーザーを強調表示する効果をもち、場合によってはそのユーザーのデータを表示する引き出しパネルを表示する効果をもつ場合、 URL はキャッシュの目的では同じであると考えることができます。これにより、ユーザーページの読み込みのパフォーマンスが改善される可能性があり、 {{httpheader("No-Vary-Search")}} で `params=("id")` という値が指定されている場合にも同様の結果が得られる可能性があります。

これによって投機ルールにどのような影響があるでしょうか。次のコードを考えてみましょう。

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["/users"]
      }
    ]
  }
</script>
<a href="/users?id=345">User Bob</a>
```

ユーザーが `/users?id=345` への移動を開始する際に、`/users` のヘッダーがまだ先読みされていない場合、このケースでは何が現れるでしょうか？この点において、ブラウザーは `No-Vary-Search` の値が何であるか、あるいは何らかの値があるのかどうかさえも知りません。もし `No-Vary-Search` の値が設定されておらず、アプリケーションの動作が上記オプション1に近い場合、先読みは無駄になり、ブラウザーは別個の `/users?id=345` ページを最初から取得する必要があります。

これに対処するために、ページの作成者が `No-Vary-Search` の値に何を期待しているかについてのヒントを指定することができます。 投機ルールには、期待されるヘッダー値の文字列表現の入った `"expects_no_vary_search"` フィールドを入れることができます。

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["/users"],
        "expects_no_vary_search": "params=(\"id\")"
      }
    ]
  }
</script>
<a href="/users?id=345">User Bob</a>
```

これは、サーバーが上記の選択肢 2 を生成することが期待されていることを示しています。 `/users` が先読みされている間にナビゲーションが開始された場合、ブラウザーに、すぐに `/users?id=345` を取得するのではなく、先読みを待つのが適切であることを通知します。

文書内のルールは、使用するパターンに応じて、 `"expects_no_vary_search"` と組み合わせて使用することができます。例えば、次のような場合、

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        { "where": { "href_matches": "/users?id=*" } },
        "expects_no_vary_search": "params=(\"id\")"
      }
    ]
  }
</script>
<a href="/users?id=012">User Bill</a>
<a href="/users?id=345">User Bob</a>
<a href="/users?id=678">User Ben</a>
```

リンクを当てると、ブラウザーはその特定のリンクを先読みし始めます。

ユーザーが先読みが完了する前に別のリンクにカーソルを当てた場合、`expects_no_vary_search` パターンは、すべての `/users` URL に `id` URL 引数値が指定されているため、このコンテキスト（およびキャッシュの目的）では、すべて同じページを指していると指示し、現在の先読みをキャンセルする必要がないことをブラウザーに指示します。

> [!WARNING]
> `No-Vary-Search` と共に事前レンダリングを使用する場合は、ページが異なる URL 引数で最初に事前レンダリングされる可能性があるため、特に注意が必要です。 `No-Vary-Search` は、サーバーから同じリソースを配信する URL 引数で使用されますが、クライアント側でさまざまな理由（クライアントサイドレンダリング、分析測定用の UTM パラメータなど）で使用されます。初期の事前レンダリングは異なる URL 引数である可能性があるため、それらに依存するコードは事前レンダリングが有効になってから実行されるべきです。

複数の引数は、空白区切りの配列として提供することができます。

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        { "where": { "href_matches": "/users?id=*" } },
        "expects_no_vary_search": "params=(\"id\" \"order\" \"lang\")"
      }
    ]
  }
</script>
```

> [!NOTE]
> [構造化フィールド](https://www.rfc-editor.org/rfc/rfc8941)では、引数は、上記で示したように、引用符で囲まれた文字列を空白で区切るべきであり、開発者がより慣れているカンマで区切るべきではありません。

### `eagerness` の例

次の一連の文書ルールは、 `eagerness` を使用して、一致するリンクのセットごとにブラウザーが事前レンダリングを行うべきであることを示しています。

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": { "href_matches": "/*" },
        "eagerness": "conservative"
      },
      {
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

ここでは、次のようなことを指示しています。

- 文書内のすべての同一サイトリンクは、控えめに（すなわち、ユーザーがそれらを起動し始めたときに）事前レンダリングされるべきです。
- 文書内の製品リンク（この場合、 `class` が `.product-link` であるもの）は、積極的に（すなわち、ユーザーがそれらに移動するような動きをした場合）事前レンダリングされるべきです。

> [!NOTE]
> eagerness の設定の効果は、リストルールにはあまり有用ではありません。 既定では、リストルールの URL は、ルールが構文解析されるとすぐに先読み/事前レンダリングされます。これは想定どおりであり、優先度が高くできるだけ早く利用できるようにしたい URL を明示的に掲載するためのものです。このため、現在の実装では `eager` は `immediate` と同じ効果があります。優先度が低い設定は、リンクが操作された際に先読み/事前レンダリングを行うためのもので、これらの場合はページ上のリンクを見つけるために文書内のルールを使用する可能性が高くなります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) (developer.chrome.com)
- [投機的な読み込み](/ja/docs/Web/Performance/Guides/Speculative_loading)
- [投機ルール API](/ja/docs/Web/API/Speculation_Rules_API)
