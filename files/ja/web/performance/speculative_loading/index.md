---
title: 投機的読み込み
slug: Web/Performance/Speculative_loading
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{QuickLinksWithSubPages("/ja/docs/Web/Performance")}}

**投機的読み込み (Speculative loading)** とは、関連するページが実際に訪問される前に、ユーザーが次に訪問する可能性の高いページに関する予測に基づいて、ナビゲーションのアクション（DNS 読み込み、リソースの読み込み、文書のレンダリングなど）を実行することを指します。

これらの予測は、開発者から提供されることもあれば（たとえば、サイト上で最も人気のある訪問先のリスト）、ブラウザーの経験則によって決定されることもあります（たとえば、ユーザーの履歴にある人気サイトに基づいて）。このような技術をうまく使えば、ページをより早く、場合によっては即座に利用できるようにすることで、パフォーマンスを大幅に向上させることができる。

このページでは、利用できる投機的読み込み技術について検討し、どのような場合にそれらを使用してパフォーマンスを向上させることができるのか、また使用する必要があるのかを説明します。

## 投機的読み込みの仕組み

投機的読み込みにはいくつかの方法があります。

- **先読み (Prefetching)** は、文書（または文書の一部）をレンダリングするのに必要なリソースの一部またはすべてを事前に取得し、レンダリングが実行される時点でよりすばやくレンダリングできるようにすることです。
- **事前レンダリング (Prerendering)** はさらに段階を踏み、要求されたときに表示させるコンテンツを実際にレンダリングしておきます。これが行われる方法によっては、古いページから新しいページへ即座に移動することができます。
- **事前接続 (Preconnecting)** は、接続ハンドシェイク（すなわち、DNS + TCP + TLS）の一部またはすべてを事前に実行しておくすることで、指定されたオリジンからの将来の読み込みを高速化するためのものです。

> [!NOTE]
> 上記の説明は高水準で一般的なものです。ブラウザーが先読みや事前レンダリングを実現するために正確に何を行うかは、用いる機能によって異なります。より正確な機能の説明は、下記の[投機的読み込み機能](#投機的読み込み機能)の節で提供されています。

## 投機的読み込みはどのように実現するのか

投機的読み込みは主に 2 つの方法で実現されます。

まず、ブラウザーによっては、さまざまな経験則に基づいてページを自動的に事前レンダリングし、自動的なパフォーマンス向上を提供します。これがどのように行われるかは、ブラウザーの実装によって異なります。例えば Chrome は、アドレスバーに一致する文字列が入力されると、そのページを訪問するという高い確信がある場合は、自動的にページを事前レンダリングします（詳しくは [Viewing Chrome's address bar predictions](https://developer.chrome.com/docs/web-platform/prerender-pages#viewing-chromes-address-bar-predictions) を参照してください）。さらに、検索エンジンからの指示により、アドレスバーに検索キーワードが入力されると、検索結果ページが自動的に事前レンダリングされることもあります。これは[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API)と同じ仕組みを使って行います。

2つ目に、開発者がブラウザーに実行させたい投機的読み込みの指示を提供するために使用することができる、さまざまなプラットフォーム機能があります。これについては次の節で紹介します。

## 投機的読み込み機能

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/ja/docs/Web/HTML/Attributes/rel/preconnect) は、ユーザーが指定されたリソースのオリジンからのリソースを必要としている可能性が高く、そのため、ブラウザーがそのオリジンへの接続を先取りして開始することで、パフォーマンスを改善できる可能性が高いというヒントをブラウザーに提供します。対応しているブラウザーは、接続ハンドシェイク（DNS + TCP + TLSなど）の一部またはすべてを事前に実行します。

例を示します。

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` は、将来のオリジン間の HTTP リクエストにおいて、ナビゲーションまたはサブリソースのどちらでも利益をもたらします。同一オリジンのリクエストに対しては、すでに接続が開かれているため、何のメリットもありません。

ページがたくさんの第三者のドメインに接続する必要がある場合、それらすべてを事前に接続すると、逆効果になることがあります。 `<link rel="preconnect">` のヒントは、最も重要な接続だけに使うのが最善です。それ以外の場合は、 `<link rel="dns-prefetch">` を使用することで、最初のステップである DNS ルックアップの時間を節約することができます。

事前接続は HTTP の [Link](/ja/docs/Web/HTTP/Headers/Link) ヘッダーで、次のように実装することもできます。

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/ja/docs/Web/HTML/Attributes/rel/dns-prefetch) は、ユーザーがターゲットリソースのオリジンにあるリソースを必要としている可能性が高く、したがってブラウザーがそのオリジンの DNS 解決を事前に実行することでユーザーの使い勝手が向上する可能性が高いというヒントをブラウザーに与えます。これは `<link rel="preconnect">` と似ていますが、 DNS の部分のみを扱う点が異なります。

繰り返しますが、ブラウザーの対応は広く普及しています。また、同一オリジンのリクエストでは、すでにコネクションが開いているので、何のメリットもありません。

例を示します。

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> 詳しくは [dns-prefetch の使用](/ja/docs/Web/Performance/dns-prefetch)を参照してください。

### `<link rel="preload">`

[`<link rel="preload">`](/ja/docs/Web/HTML/Attributes/rel/preload) は、ブラウザーがページの {{htmlelement("head")}} 内の {{htmlelement("link")}} 要素を見たときに、それらのリソースを早めにダウンロードし始めることができるように、**現在のページ**で優先度の高いリソースのヒントを提供します。

例を示します。

```html
<link rel="preload" href="main.js" as="script" />
<!-- CORS-enabled preload -->
<link
  rel="preload"
  href="https://www.example.com/fonts/cicle_fina-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

結果は文書内のメモリーキャッシュに保存されます。現在のページがサブリソースとして使用しないものを先読みさせた場合、ヘッダーが許可していれば結果は HTTP キャッシュに入るかもしれませんが、一般的にはリソースの無駄になります。

次のように、 HTTP の [Link](/ja/docs/Web/HTTP/Headers/Link) ヘッダーとして先読みを実装することもできます。

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

`<link rel="preload">`/`<link rel="modulepreload">` は現行のブラウザーは広く対応しています。

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/ja/docs/Web/HTML/Attributes/rel/modulepreload) は、 _現在のページ_ で優先度の高い JavaScript モジュールが何かというヒントをブラウザーに提供し、ダウンロードを早めに始めることができるようにします。

例を示します。

```js
<link rel="modulepreload" href="main.js" />
```

これは `<link rel="preload">` を [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)に特化したもので、基本的に同じように動作します。しかし、いくつかの相違点があります。

- ブラウザーはリソースが JavaScript モジュールであることを知っているので `as` 属性は必要なく、二重取得を避けるために正しい資格情報モードを使用することができます。
- 単にダウンロードしてキャッシュに格納するのではなく、ブラウザーはダウンロードした後、解釈してインメモリーモジュールマップに直接コンパイルします。
- ブラウザーはモジュールの依存関係についても同じことを自動的に行うことができます。

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/ja/docs/Web/HTML/Attributes/rel/prefetch) は、ユーザーが将来ナビゲーションの際に対象リソースを必要とする可能性が高いというヒントをブラウザーに提供するもので、そのためブラウザーはリソースを先読みしてキャッシュすることで、操作性を向上させることができます。 `<link rel="prefetch">` は同じサイトのナビゲーションリソースや、同じサイトのページで使用するサブリソースに使用します。

例を示します。

```js
<link rel="prefetch" href="main.js" />
```

先読みを使用すると、次にナビゲーション先となりうる HTML とサブリソースの両方を取得することができます。一般的な用途としては、ウェブサイトに単純なランディングページを用意し、サイトの他の部分で使用する、より「重量のある」リソースを読み込んでおくことです。

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

結果はディスク上の HTTP キャッシュに保存されます。このため、現在のページで使用していないサブリソースを先読みするのに有益です。また、ユーザーがサイト内で次に訪れるであろう文書を先読みするために使用することもできます。ただし、その結果、ヘッダーに注意する必要があります。例えば、特定の [Cache-Control](/ja/docs/Web/HTTP/Headers/Cache-Control) ヘッダー（`no-cache` や `no-store` など）は先読みをブロックする可能性があります。

多くのブラウザーでは、何らかの形で[キャッシュ分割](https://developer.chrome.com/blog/http-cache-partitioning)を実装しており、これが異なる最上位サイトで使用することを意図したリソースに対しては、 `<link rel="prefetch">` を無意味なものにしています。これには、サイト間を移動する際のメイン文書も含まれます。例えば、次の例のような先読み指定があったとします。

```html
<link rel="prefetch" href="https://news.example/article" />
```

これは `https://aggregator.example/` からアクセスできません。

> **メモ:** `<link rel="prefetch">` は機能的には {{domxref("fetch()")}} を `priority: "low"` オプション付きで呼び出したのと同等ですが、前者は一般に優先度がさらに低く、リクエストに [`Sec-Purpose: prefetch`](/ja/docs/Web/HTTP/Headers/Sec-Purpose) ヘッダーが設定されます。

> **メモ:** `prefetch` 操作の取得リクエストは、 [`Sec-Purpose: prefetch`](/ja/docs/Web/HTTP/Headers/Sec-Purpose) ヘッダーを含む HTTP リクエストになります。サーバーはこのヘッダーを使用して、リソースのキャッシュ期限を変更したり、他の特別な処理を行ったりするかもしれません。
> このリクエストでは、 {{HTTPHeader("Sec-Fetch-Dest")}} ヘッダーの値も `empty` に設定されます。
> このリクエストの {{HTTPHeader("Accept")}} へッダーは、通常のナビゲーションリクエストで使用する値と一致します。これにより、ブラウザーは以降のナビゲーションで一致するキャッシュリソースを探すことができます。
> レスポンスが返された場合は、リクエストと一緒に HTTP キャッシュにキャッシュされます。

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> この技術は Chrome でしか利用できませんでしたが、非推奨になりました。代わりに[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) を使用しましょう。

[`<link rel="prerender">`](/ja/docs/Web/HTML/Attributes/rel/prerender) は、ユーザーが次のナビゲーションのために対象とするリソースを必要とするかもしれないというヒントをブラウザーに提供します。 `prerender` は同じサイト内での将来のナビゲーションのために使用され、複数ページアプリケーション (MPA) では意味がありますが、単一ページアプリケーション (SPA) では意味がありません。

例を示します。

```html
<link rel="prerender" href="/next-page" />
```

参照先の文書を取得し、次に静的に見つけられるリンクされたリソースを取得してそれらも取得し、その結果を 5 分間の期限付きでディスク上の HTTP キャッシュに格納します。例外は JavaScript で読み込まれるサブリソースで、これは見つけられません。問題は他にもあります。 `<link rel="prefetch">` のように、 [Cache-Control](/ja/docs/Web/HTTP/Headers/Cache-Control) ヘッダーによってブロックされたり、ブラウザーの[キャッシュ分割](https://developer.chrome.com/blog/http-cache-partitioning)によって、異なる最上位サイトで使用することが意図されているリソースに対して役に立たなくなったりします。

### 投機ルール API

[`<script type="speculationrules">`](/ja/docs/Web/HTML/Element/script/type/speculationrules) は、どのような文書が将来ブラウザーによって先読みされるか、または事前レンダリングされるべきかを決定する一連のルールを提供するために使用します。これは[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) の一部です。

## どんな時にそれぞれの機能を使用するのか

次の表は、上記で詳述した機能を要約したもので、それぞれを使用する場合のガイダンスを提供しています。

| 投機的読み込み機能                                                             | 目的                                               | 使用する場面                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------ | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<link rel="preconnect">`](/ja/docs/Web/HTML/Attributes/rel/preconnect)       | オリジン間接続の準備                               | 最も重要なオリジン間接続に使用して、接続時のパフォーマンスを改善します。                                                                                                                                                                                                                                                                                                                                                   |
| [`<link rel="dns-prefetch">`](/ja/docs/Web/HTML/Attributes/rel/dns-prefetch)   | オリジン間接続の準備                               | すべてのオリジン間接続に使用して、接続時のパフォーマンスをわずかに改善します。                                                                                                                                                                                                                                                                                                                                             |
| [`<link rel="preload">`](/ja/docs/Web/HTML/Attributes/rel/preload)             | 現在のページのサブリソースの事前読み込み           | 戦略的なパフォーマンス向上のために、現在のページで優先度の高いリソースをより速く読み込むために使用します。すべてを事前読み込みさせないでください。そうしないと効果が見えません。他にも興味深い使用法があります。 Smashing Magazine (2016) の [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) を参照してください。                                                   |
| [`<link rel="modulepreload">`](/ja/docs/Web/HTML/Attributes/rel/modulepreload) | 現在のページの JavaScript モジュールの事前読み込み | 戦略的なパフォーマンス向上のために優先度の高い JavaScript モジュールを事前読み込みさせるために使用します。                                                                                                                                                                                                                                                                                                                 |
| [`<link rel="prefetch">`](/ja/docs/Web/HTML/Attributes/rel/prefetch)           | HTTP キャッシュの事前投入                          | 同じサイトの将来のナビゲーションリソースや、それらのページで使用するサブリソースを先読みするために使用します。HTTP キャッシュを使用するため、 [Cache-Control](/ja/docs/Web/HTTP/Headers/Cache-Control) ヘッダーによってブロックされる可能性があるなど、文書の先読みには多くの課題があります。対応している場合は、代わりに [投機ルールAPI](/ja/docs/Web/API/Speculation_Rules_API) を使用して文書の先読みを行ってください。 |
| [`<link rel="prerender">`](/ja/docs/Web/HTML/Attributes/rel/prerender)         | 次のナビゲーションの準備                           | 非推奨です。使用しないことをお勧めします。対応している場合は、代わりに [投機ルールAPI](/ja/docs/Web/API/Speculation_Rules_API)の事前レンダリングを使用してください。                                                                                                                                                                                                                                                       |
| [投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) の先読み              | 次のナビゲーションの準備                           | 同じサイトやクロスサイトの将来のナビゲーション文書を先読みするために使用します。対応しているページが[先読みして安全](/ja/docs/Web/API/Speculation_Rules_API#安全でない先読み)であることを確認してください。サブリソースの先読みは処理しません。そのためには `<link rel="prefetch">` を使用する必要があります。                                                                                                             |
| [投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) の事前レンダリング    | 次のナビゲーションの準備                           | ほぼ瞬時にナビゲーションを行うために、同じオリジンの将来のナビゲーションリソースを先読みするために使用します。対応している優先度の高いページで使用してください。ページが[事前レンダリングして安全](/ja/docs/Web/API/Speculation_Rules_API#安全でない事前レンダリング)であることを確認してください。                                                                                                                        |

## 関連情報

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) on developer.chrome.com (2023)
