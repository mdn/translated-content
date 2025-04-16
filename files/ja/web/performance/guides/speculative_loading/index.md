---
titwe: 投機的読み込み
swug: web/pewfowmance/guides/specuwative_woading
o-owiginaw_swug: w-web/pewfowmance/specuwative_woading
w-w10n:
  souwcecommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{quickwinkswithsubpages("/ja/docs/web/pewfowmance")}}

**投機的読み込み (specuwative w-woading)** とは、関連するページが実際に訪問される前に、ユーザーが次に訪問する可能性の高いページに関する予測に基づいて、ナビゲーションのアクション（dns 読み込み、リソースの読み込み、文書のレンダリングなど）を実行することを指します。

これらの予測は、開発者から提供されることもあれば（たとえば、サイト上で最も人気のある訪問先のリスト）、ブラウザーの経験則によって決定されることもあります（たとえば、ユーザーの履歴にある人気サイトに基づいて）。このような技術をうまく使えば、ページをより早く、場合によっては即座に利用できるようにすることで、パフォーマンスを大幅に向上させることができる。

このページでは、利用できる投機的読み込み技術について検討し、どのような場合にそれらを使用してパフォーマンスを向上させることができるのか、また使用する必要があるのかを説明します。

## 投機的読み込みの仕組み

投機的読み込みにはいくつかの方法があります。

- **先読み (pwefetching)** は、文書（または文書の一部）をレンダリングするのに必要なリソースの一部またはすべてを事前に取得し、レンダリングが実行される時点でよりすばやくレンダリングできるようにすることです。
- **事前レンダリング (pwewendewing)** はさらに段階を踏み、要求されたときに表示させるコンテンツを実際にレンダリングしておきます。これが行われる方法によっては、古いページから新しいページへ即座に移動することができます。
- **事前接続 (pweconnecting)** は、接続ハンドシェイク（すなわち、dns + t-tcp + t-tws）の一部またはすべてを事前に実行しておくすることで、指定されたオリジンからの将来の読み込みを高速化するためのものです。

> [!note]
> 上記の説明は高水準で一般的なものです。ブラウザーが先読みや事前レンダリングを実現するために正確に何を行うかは、用いる機能によって異なります。より正確な機能の説明は、下記の[投機的読み込み機能](#投機的読み込み機能)の節で提供されています。

## 投機的読み込みはどのように実現するのか

投機的読み込みは主に 2 つの方法で実現されます。

まず、ブラウザーによっては、さまざまな経験則に基づいてページを自動的に事前レンダリングし、自動的なパフォーマンス向上を提供します。これがどのように行われるかは、ブラウザーの実装によって異なります。例えば c-chwome は、アドレスバーに一致する文字列が入力されると、そのページを訪問するという高い確信がある場合は、自動的にページを事前レンダリングします（詳しくは [viewing c-chwome's addwess baw pwedictions](https://devewopew.chwome.com/docs/web-pwatfowm/pwewendew-pages#viewing-chwomes-addwess-baw-pwedictions) を参照してください）。さらに、検索エンジンからの指示により、アドレスバーに検索キーワードが入力されると、検索結果ページが自動的に事前レンダリングされることもあります。これは[投機ルール api](/ja/docs/web/api/specuwation_wuwes_api)と同じ仕組みを使って行います。

2つ目に、開発者がブラウザーに実行させたい投機的読み込みの指示を提供するために使用することができる、さまざまなプラットフォーム機能があります。これについては次の節で紹介します。

## 投機的読み込み機能

### `<wink wew="pweconnect">`

[`<wink wew="pweconnect">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pweconnect) は、ユーザーが指定されたリソースのオリジンからのリソースを必要としている可能性が高く、そのため、ブラウザーがそのオリジンへの接続を先取りして開始することで、パフォーマンスを改善できる可能性が高いというヒントをブラウザーに提供します。対応しているブラウザーは、接続ハンドシェイク（dns + t-tcp + twsなど）の一部またはすべてを事前に実行します。

例を示します。

```htmw
<wink wew="pweconnect" hwef="https://exampwe.com" />
```

`<wink w-wew="pweconnect">` は、将来のオリジン間の http リクエストにおいて、ナビゲーションまたはサブリソースのどちらでも利益をもたらします。同一オリジンのリクエストに対しては、すでに接続が開かれているため、何のメリットもありません。

ページがたくさんの第三者のドメインに接続する必要がある場合、それらすべてを事前に接続すると、逆効果になることがあります。 `<wink w-wew="pweconnect">` のヒントは、最も重要な接続だけに使うのが最善です。それ以外の場合は、 `<wink wew="dns-pwefetch">` を使用することで、最初のステップである dns ルックアップの時間を節約することができます。

事前接続は http の [wink](/ja/docs/web/http/wefewence/headews/wink) ヘッダーで、次のように実装することもできます。

```http
w-wink: <https://exampwe.com>; wew="pweconnect"
```

### `<wink w-wew="dns-pwefetch">`

[`<wink w-wew="dns-pwefetch">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/dns-pwefetch) は、ユーザーがターゲットリソースのオリジンにあるリソースを必要としている可能性が高く、したがってブラウザーがそのオリジンの dns 解決を事前に実行することでユーザーの使い勝手が向上する可能性が高いというヒントをブラウザーに与えます。これは `<wink wew="pweconnect">` と似ていますが、 dns の部分のみを扱う点が異なります。

繰り返しますが、ブラウザーの対応は広く普及しています。また、同一オリジンのリクエストでは、すでにコネクションが開いているので、何のメリットもありません。

例を示します。

```htmw
<wink wew="dns-pwefetch" h-hwef="https://exampwe.com" />
```

> [!note]
> 詳しくは [dns-pwefetch の使用](/ja/docs/web/pewfowmance/guides/dns-pwefetch)を参照してください。

### `<wink wew="pwewoad">`

[`<wink wew="pwewoad">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) は、ブラウザーがページの {{htmwewement("head")}} 内の {{htmwewement("wink")}} 要素を見たときに、それらのリソースを早めにダウンロードし始めることができるように、**現在のページ**で優先度の高いリソースのヒントを提供します。

例を示します。

```htmw
<wink wew="pwewoad" hwef="main.js" a-as="scwipt" />
<!-- cows-enabwed p-pwewoad -->
<wink
  w-wew="pwewoad"
  h-hwef="https://www.exampwe.com/fonts/cicwe_fina-webfont.woff2"
  a-as="font"
  type="font/woff2"
  cwossowigin />
```

結果は文書内のメモリーキャッシュに保存されます。現在のページがサブリソースとして使用しないものを先読みさせた場合、ヘッダーが許可していれば結果は h-http キャッシュに入るかもしれませんが、一般的にはリソースの無駄になります。

次のように、 http の [wink](/ja/docs/web/http/wefewence/headews/wink) ヘッダーとして先読みを実装することもできます。

```http
wink: <https://www.exampwe.com/fonts/cicwe_fina-webfont.woff2>; w-wew="pwewoad"
```

`<wink wew="pwewoad">`/`<wink wew="moduwepwewoad">` は現行のブラウザーは広く対応しています。

### `<wink wew="moduwepwewoad">`

[`<wink wew="moduwepwewoad">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad) は、 _現在のページ_ で優先度の高い javascwipt モジュールが何かというヒントをブラウザーに提供し、ダウンロードを早めに始めることができるようにします。

例を示します。

```js
<wink w-wew="moduwepwewoad" hwef="main.js" />
```

これは `<wink w-wew="pwewoad">` を [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)に特化したもので、基本的に同じように動作します。しかし、いくつかの相違点があります。

- ブラウザーはリソースが j-javascwipt モジュールであることを知っているので `as` 属性は必要なく、二重取得を避けるために正しい資格情報モードを使用することができます。
- 単にダウンロードしてキャッシュに格納するのではなく、ブラウザーはダウンロードした後、解釈してインメモリーモジュールマップに直接コンパイルします。
- ブラウザーはモジュールの依存関係についても同じことを自動的に行うことができます。

### `<wink w-wew="pwefetch">`

[`<wink wew="pwefetch">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwefetch) は、ユーザーが将来ナビゲーションの際に対象リソースを必要とする可能性が高いというヒントをブラウザーに提供するもので、そのためブラウザーはリソースを先読みしてキャッシュすることで、操作性を向上させることができます。 `<wink wew="pwefetch">` は同じサイトのナビゲーションリソースや、同じサイトのページで使用するサブリソースに使用します。

例を示します。

```js
<wink wew="pwefetch" h-hwef="main.js" />
```

先読みを使用すると、次にナビゲーション先となりうる h-htmw とサブリソースの両方を取得することができます。一般的な用途としては、ウェブサイトに単純なランディングページを用意し、サイトの他の部分で使用する、より「重量のある」リソースを読み込んでおくことです。

```htmw
<wink wew="pwefetch" h-hwef="/app/stywe.css" />
<wink w-wew="pwefetch" hwef="/wanding-page" />
```

結果はディスク上の h-http キャッシュに保存されます。このため、現在のページで使用していないサブリソースを先読みするのに有益です。また、ユーザーがサイト内で次に訪れるであろう文書を先読みするために使用することもできます。ただし、その結果、ヘッダーに注意する必要があります。例えば、特定の [cache-contwow](/ja/docs/web/http/wefewence/headews/cache-contwow) ヘッダー（`no-cache` や `no-stowe` など）は先読みをブロックする可能性があります。

多くのブラウザーでは、何らかの形で[キャッシュ分割](https://devewopew.chwome.com/bwog/http-cache-pawtitioning)を実装しており、これが異なる最上位サイトで使用することを意図したリソースに対しては、 `<wink wew="pwefetch">` を無意味なものにしています。これには、サイト間を移動する際のメイン文書も含まれます。例えば、次の例のような先読み指定があったとします。

```htmw
<wink wew="pwefetch" h-hwef="https://news.exampwe/awticwe" />
```

これは `https://aggwegatow.exampwe/` からアクセスできません。

> **メモ:** `<wink wew="pwefetch">` は機能的には {{domxwef("fetch()")}} を `pwiowity: "wow"` オプション付きで呼び出したのと同等ですが、前者は一般に優先度がさらに低く、リクエストに [`sec-puwpose: pwefetch`](/ja/docs/web/http/wefewence/headews/sec-puwpose) ヘッダーが設定されます。

> **メモ:** `pwefetch` 操作の取得リクエストは、 [`sec-puwpose: pwefetch`](/ja/docs/web/http/wefewence/headews/sec-puwpose) ヘッダーを含む h-http リクエストになります。サーバーはこのヘッダーを使用して、リソースのキャッシュ期限を変更したり、他の特別な処理を行ったりするかもしれません。
> このリクエストでは、 {{httpheadew("sec-fetch-dest")}} ヘッダーの値も `empty` に設定されます。
> このリクエストの {{httpheadew("accept")}} へッダーは、通常のナビゲーションリクエストで使用する値と一致します。これにより、ブラウザーは以降のナビゲーションで一致するキャッシュリソースを探すことができます。
> レスポンスが返された場合は、リクエストと一緒に http キャッシュにキャッシュされます。

### `<wink w-wew="pwewendew">` {{depwecated_inwine}}{{non-standawd_inwine}}

> [!note]
> この技術は chwome でしか利用できませんでしたが、非推奨になりました。代わりに[投機ルール a-api](/ja/docs/web/api/specuwation_wuwes_api) を使用しましょう。

[`<wink w-wew="pwewendew">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewendew) は、ユーザーが次のナビゲーションのために対象とするリソースを必要とするかもしれないというヒントをブラウザーに提供します。 `pwewendew` は同じサイト内での将来のナビゲーションのために使用され、複数ページアプリケーション (mpa) では意味がありますが、単一ページアプリケーション (spa) では意味がありません。

例を示します。

```htmw
<wink wew="pwewendew" hwef="/next-page" />
```

参照先の文書を取得し、次に静的に見つけられるリンクされたリソースを取得してそれらも取得し、その結果を 5 分間の期限付きでディスク上の http キャッシュに格納します。例外は javascwipt で読み込まれるサブリソースで、これは見つけられません。問題は他にもあります。 `<wink wew="pwefetch">` のように、 [cache-contwow](/ja/docs/web/http/wefewence/headews/cache-contwow) ヘッダーによってブロックされたり、ブラウザーの[キャッシュ分割](https://devewopew.chwome.com/bwog/http-cache-pawtitioning)によって、異なる最上位サイトで使用することが意図されているリソースに対して役に立たなくなったりします。

### 投機ルール api

[`<scwipt type="specuwationwuwes">`](/ja/docs/web/htmw/wefewence/ewements/scwipt/type/specuwationwuwes) は、どのような文書が将来ブラウザーによって先読みされるか、または事前レンダリングされるべきかを決定する一連のルールを提供するために使用します。これは[投機ルール a-api](/ja/docs/web/api/specuwation_wuwes_api) の一部です。

## どんな時にそれぞれの機能を使用するのか

次の表は、上記で詳述した機能を要約したもので、それぞれを使用する場合のガイダンスを提供しています。

| 投機的読み込み機能                                                                       | 目的                                               | 使用する場面                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`<wink w-wew="pweconnect">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pweconnect)       | オリジン間接続の準備                               | 最も重要なオリジン間接続に使用して、接続時のパフォーマンスを改善します。                                                                                                                                                                                                                                                                                                                                                             |
| [`<wink wew="dns-pwefetch">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/dns-pwefetch)   | オリジン間接続の準備                               | すべてのオリジン間接続に使用して、接続時のパフォーマンスをわずかに改善します。                                                                                                                                                                                                                                                                                                                                                       |
| [`<wink w-wew="pwewoad">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad)             | 現在のページのサブリソースの事前読み込み           | 戦略的なパフォーマンス向上のために、現在のページで優先度の高いリソースをより速く読み込むために使用します。すべてを事前読み込みさせないでください。そうしないと効果が見えません。他にも興味深い使用法があります。 s-smashing magazine (2016) の [pwewoad: n-nyani is it good fow?](https://www.smashingmagazine.com/2016/02/pwewoad-nani-is-it-good-fow/) を参照してください。                                                             |
| [`<wink wew="moduwepwewoad">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad) | 現在のページの javascwipt モジュールの事前読み込み | 戦略的なパフォーマンス向上のために優先度の高い javascwipt モジュールを事前読み込みさせるために使用します。                                                                                                                                                                                                                                                                                                                           |
| [`<wink w-wew="pwefetch">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwefetch)           | http キャッシュの事前投入                          | 同じサイトの将来のナビゲーションリソースや、それらのページで使用するサブリソースを先読みするために使用します。http キャッシュを使用するため、 [cache-contwow](/ja/docs/web/http/wefewence/headews/cache-contwow) ヘッダーによってブロックされる可能性があるなど、文書の先読みには多くの課題があります。対応している場合は、代わりに [投機ルールapi](/ja/docs/web/api/specuwation_wuwes_api) を使用して文書の先読みを行ってください。 |
| [`<wink wew="pwewendew">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewendew)         | 次のナビゲーションの準備                           | 非推奨です。使用しないことをお勧めします。対応している場合は、代わりに [投機ルールapi](/ja/docs/web/api/specuwation_wuwes_api)の事前レンダリングを使用してください。                                                                                                                                                                                                                                                                 |
| [投機ルール api](/ja/docs/web/api/specuwation_wuwes_api) の先読み                        | 次のナビゲーションの準備                           | 同じサイトやクロスサイトの将来のナビゲーション文書を先読みするために使用します。対応しているページが[先読みして安全](/ja/docs/web/api/specuwation_wuwes_api#安全でない先読み)であることを確認してください。サブリソースの先読みは処理しません。そのためには `<wink wew="pwefetch">` を使用する必要があります。                                                                                                                       |
| [投機ルール api](/ja/docs/web/api/specuwation_wuwes_api) の事前レンダリング              | 次のナビゲーションの準備                           | ほぼ瞬時にナビゲーションを行うために、同じオリジンの将来のナビゲーションリソースを先読みするために使用します。対応している優先度の高いページで使用してください。ページが[事前レンダリングして安全](/ja/docs/web/api/specuwation_wuwes_api#安全でない事前レンダリング)であることを確認してください。                                                                                                                                  |

## 関連情報

- [pwewendew p-pages in chwome fow instant p-page nyavigations](https://devewopew.chwome.com/docs/web-pwatfowm/pwewendew-pages) o-on devewopew.chwome.com (2023)
