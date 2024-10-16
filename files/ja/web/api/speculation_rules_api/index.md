---
title: 投機ルール API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

**投機ルール API** (Speculation Rules API) は、将来のナビゲーションのパフォーマンスを向上させるように設計されています。これは特定のリソースファイルではなく文書 URL を対象とするので、マルチページアプリケーション (MPA) で意味がありますが、単一のページアプリケーション (SPA) では意味がありません。

投機ルール API は、広く利用できる [`<link rel="prefetch">`](/ja/docs/Web/HTML/Attributes/rel/prefetch) 機能の代替となるもので、 Chrome のみの非推奨である [`<link rel="prerender">`](/ja/docs/Web/HTML/Attributes/rel/prerender) 機能を置き換えるようにも設計されています。先読みされる文書や事前レンダリングされる文書を指定するための、より表現力があり構成しやすい構文とともに、これらの技術に対して多くの改善点を提供します。

> [!NOTE]
> 投機ルール API はサブリソースの先読みを処理しません。そのためには `<link rel="prefetch">` を使用する必要があります。

## 概念と使用方法

投機ルールは [`<script type="speculationrules"> ... </script>`](/ja/docs/Web/HTML/Element/script/type/speculationrules) の中で指定します。ルールは JSON 構造で指定します。

例を示します。

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["extra.html", "extra2.html"]
      }
    ],
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```

投機的読み込みの種類（`"prerender"` や `"prefetch"` など）ごとに、ルールを格納する配列を指定します。各ルールはオブジェクトに格納されており、例えば取得するリソースのリストと、各ルールに対する明示的な {{httpheader("Referrer-Policy")}} 設定などのオプションを指定します。事前レンダリングされた URL も先読みされることに注意しましょう。

利用可能な構文の全般的な説明は、 [`<script type="speculationrules">`](/ja/docs/Web/HTML/Element/script/type/speculationrules) を参照してください。

> [!NOTE]
> 投機ルールは `<script>` 要素を使用するので、サイトが含まれるのであれば {{httpheader("Content-Security-Policy")}} の [`script-src`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) ディレクティブで明示的に許可する必要があります。これは `'inline-speculation-rules'` のソースを hash- または nonce-source とともに追加することで行われます。

### 先読みの使用

`prefetch` ルールを　`<script type=speculationrules> ... </script>` の中に含めると、対応しているブラウザーは参照するページのレスポンス本体はダウンロードしますが、ページが参照しているサブリソースはダウンロードしません。先読みされたページに移動した場合、先読みされなかった場合よりもはるかにすばやくレンダリングされます。

結果は文書ごとにメモリー内のキャッシュに保存されます。先読みがキャッシュされたものは、現在のページから移動した時点で、移動先の先読み文書を除いて破棄されます。

これは、ユーザーが移動しないものが先読みされた場合、ヘッダーが許可していれば HTTP キャッシュに結果が入るかもしれませんが、一般的にはリソースの無駄になることを意味しています。とはいえ、先読みのコストは事前レンダリングのコストよりもずっと小さいので、先読みを広く導入することが推奨されます。例えば、サイト上の重要なページをすべて先読みすることが推奨されます（詳しくは、[安全でない投機的負荷条件](#安全でない投機的読み込み条件)を参照してください）。

同一サイトおよびサイト間の先読みは動作しますが、サイト間の先読みは制限されます（両者の違いの説明は ["same-site "と "cross-site"](https://web.dev/articles/same-site-same-origin#same-site-cross-site) を参照してください）。プライバシーの理由から、サイト間での先読みは、現在のところ、ユーザーが出力先のサイトにクッキーを設定しない場合にのみ動作します。サイトが前回設定されたクッキーに基づいて、先読みされたページ（実際には一度も訪問していないかもしれません）を通してユーザーの活動を追跡できるようになることは望ましくありません。

> [!NOTE]
> 将来的には {{httpheader("Supports-Loading-Mode")}} ヘッダーでオプトインが提供される予定ですが、執筆時点では実装されていません。

投機ルールの先読みに対応しているブラウザーでは、古い先読み機構、すなわち [`<link rel="prefetch">`](/ja/docs/Web/HTML/Attributes/rel/prefetch) や {{domxref("Window/fetch", "fetch()")}} に `priority: "low"` オプションを設定します。なぜなら、投機ルールの先読みはナビゲーションのためのものであり、一般的なリソースの先読みではないからです。

- サイト間でのナビゲーションに使用することができます。 `<link rel="prefetch">` は使用できません。
- {{httpheader("Cache-Control")}} ヘッダーでブロックされません。 `<link rel="prefetch">` はブロックされることがよくあります。

さらに、投機ルールの先読みには次のような特徴があります。

- 必要に応じて自動的に優先度が下がります（`fetch()` はそうではありません）。
- ユーザーの設定を尊重します。例えば、ユーザーの端末がバッテリーセーバーやデータセーバーモードのときは、先読みを行いません。
- 先読みされたリソースを、 HTTP キャッシュとは対照的に文書単位のメモリー内キャッシュに格納します。

### 事前レンダリングの使用

`prerender` ルールを `<script type=speculationrules> ... </script>` に入れると、対応しているブラウザーはコンテンツを取得し、レンダリングし、非表示のタブに読み込んで文書ごとのメモリー内キャッシュに格納します。これには、すべてのサブリソースの読み込み、すべての JavaScript の実行、さらには JavaScript によって開始されるサブリソースの読み込みとデータ取得の実行が含まれます。キャッシュされた事前レンダリングとそのサブリソースは、現在のページから離れると破棄されます。もちろん、移動先が事前レンダリングされたドキュメントである場合を除きます。

事前レンダリングされたページへの今後のナビゲーションは、ほぼ瞬時に行われます。ブラウザーは通常のナビゲーションプロセスを実行する代わりに非表示のタブをアクティブにし、既存の表示ページを事前レンダリングされたページに置き換えます。ページが完全に事前レンダリングされる前にアクティブ化された場合、そのページは現在の状態でアクティブ化され、引き続き読み込みが行われます。

事前レンダリングは、メモリとネットワーク帯域幅を使用します。事前レンダリングされたコンテンツにユーザーが移動しない場合、これらは無駄になります（ただし、ヘッダーが許可していれば結果は HTTP キャッシュに保存され、後で使用することができるかもしれません）。事前レンダリングの先行コストは、先読みよりもずっと大きくなります。また、コンテンツを事前レンダリングするのが安全でなくなるような条件もあります（詳しくは、[安全でない投機的読み込み条件](#安全でない投機的読み込み条件)を参照してください）。そのため事前レンダリングは、ユーザーがそのページに移動する可能性が高く、ユーザーの体感的な利点が余分なコストに見合うと考えられるようなケースを慎重に考慮し、控えめに採用することが推奨されます。

> [!NOTE]
> 潜在的なリソースの浪費を考慮すると、事前レンダリングされた場合、 {{htmlelement("iframe")}} をレンダリングするのとほぼ同じ量のリソースを使用します。

> [!NOTE]
> 多くの API は、事前レンダリング時もしくは有効化されるまで、自動的に延期されます。詳しくは[事前レンダリング中に延期または制限されるプラットフォーム機能](#事前レンダリング中に延期または制限されるプラットフォーム機能)を参照してください。

事前レンダリングされた文書は、既定では同一オリジンの文書に制限されています。異なるオリジンであっても、同じサイトの事前レンダリングは可能です。そのためには、 {{httpheader("Supports-Loading-Mode")}} ヘッダーに `credentialed-prerender` という値を指定して、ナビゲーションターゲットがオプトインする必要があります。現時点では、異なるサイトの事前レンダリングはできません。

対応しているブラウザーでは、投機ルールの事前レンダリングは古い事前レンダリングの仕組み、いわゆる [`<link rel="prerender">`](/ja/docs/Web/HTML/Attributes/rel/prerender) よりも優先されるべきです。

- `<link rel="prerender">` は Chrome 独自のものであり、標準化されることはなく、 Chrome の開発チームは現在、これを廃止する作業を行っています。 {{experimental_inline}}
- JavaScript で読み込まれたサブリソースを読み込みますが、 `<link rel="prerender">` は読み込みません。
- これは {{httpheader("Cache-Control")}} の設定によってブロックされることはありませんが、 `<link rel="prerender">` はブロックされることがよくあります。
- 投機ルールによる事前レンダリングは、ヒントとして扱われるべきであり、プログレッシブエンハンスメントです。 `<link rel="prerender">` とは異なり、これは推測的なヒントであり、ブラウザーはユーザー設定や現在のメモリー使用量、その他の経験則に基づいてヒントに従わないことを選択するかもしれません。

### 投機ルール API の機能検出

投機ルール API に対応しているかどうかは、以下のコードで確認できます。

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("お使いのブラウザーは投機ルール API に対応しています。");
}
```

例えば、対応しているブラウザーでは先読みのための投機ルールを挿入したいが、他のブラウザーでは `<link rel="prefetch">` のような古い技術を使いたい場合は次のようにします。

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  const specRules = {
    prefetch: [
      {
        source: "list",
        urls: ["/next.html"],
      },
    ],
  };
  specScript.textContent = JSON.stringify(specRules);
  document.body.append(specScript);
} else {
  const linkElem = document.createElement("link");
  linkElem.rel = "prefetch";
  linkElem.href = "/next.html";
  document.head.append(linkElem);
}
```

## 先読みおよび事前レンダリングされたページの検出

この節では、リクエストされたページが先読みまたは事前レンダリングされたかどうかを検出するさまざまな方法を見ていきます。

### サーバー側での検出

先読みまたは事前レンダリングのページリクエストは、 {{httpheader("Sec-Purpose")}} リクエストヘッダーが付きます。

先読みの場合:

```http
Sec-Purpose: prefetch
```

事前レンダリングの場合:

```http
Sec-Purpose: prefetch;prerender
```

サーバーはこのヘッダーに基づいて応答することができます。例えば、投機的読み込みリクエストをログ出力したり、別のコンテンツを返したり、あるいは投機的読み込みが起こらないようにしたりすることができます。成功でないレスポンスコード（200 や 304 ではない）が返された場合は、ページは先読みされません。これは投機的読み込みを防ぐ最も簡単な方法ですが、通常は先読み/事前レンダリングを許可し、 JavaScript を使用して実際にページが表示されたときにのみ発生するアクションを遅延させる方が良い手法です。

### JavaScript による先読みの検出

ページが先読みされると、その {{domxref("PerformanceResourceTiming.deliveryType")}} 項目は `"navigational-prefetch"` という値を返します。以下は `"navigational-prefetch"` 型のパフォーマンス項目を受け取ったときに関数を実行するために使用することができます。

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // 作者定義の関数
}
```

このテクニックは、パフォーマンスを測定するときや、 先読み中に発生すると問題を引き起こす可能性のあるアクションを 延期したいときに有益です（[安全でない先読み](#安全でない先読み) を参照してください）。

### JavaScript による事前レンダリングの検出

ページが事前レンダリングされている際にアクティビティを実行するには、 {{domxref("Document.prerendering")}} プロパティを調べるとよいでしょう。例えば、分析に使用することができます。

```js
if (document.prerendering) {
  analytics.sendInfo("事前レンダリングでここまで取得しました。");
}
```

事前レンダリングされた文書がアクティブになると、 {{domxref("PerformanceNavigationTiming.activationStart")}} には、事前レンダリングを始めてから実際に文書がアクティブになるまでの時間を表す {{domxref("DOMHighResTimeStamp")}} が設定されます。以下の関数は、ページが事前レンダリング中または事前レンダリング済みであることを調べることができます。

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

事前レンダリングされたページがページを閲覧しているユーザーによってアクティブにされると、{{domxref("Document.prerenderingchange_event", "prerenderingchange")}}イベントが発生します。これは、以前はページ読み込み時に既定で開始されていたアクティビティを、ページがユーザーによって実際に表示されるまで遅らせたい場合に使用することができます。以下のコードは、事前レンダリングされたページで、事前レンダリングが完了したら関数を実行する、または事前レンダリングされていないページですぐに関数を実行するイベントリスナーを設定します。

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

## 安全でない投機的読み込み条件

この節では、先読みと事前レンダリングが **安全でない** 条件に注目していきます。これは、これらの条件を示すページの先読み/事前レンダリングは、コードの緩和を要求されるか、完全に避ける必要があることを意味しています。

### 安全でない先読み

前述したように、先読みすることによるリスクとリターンの比率はかなり低く、リソースの浪費の可能性は最小であり、性能の向上も大きいため、私たちは先読みを広く採用することを推奨します。しかし、先読みされるページがアプリケーションのフローに問題を発生させないようにする必要があります。

先読みが行われると、ブラウザーは参照したページのレスポンス本体を単一の GET リクエストでダウンロードします。特に問題が発生しやすいのは、リクエストの URL が、実際にその URL に移動するまでは起こってほしくない、サーバー主導の副作用を引き起こす場合です。

例えば次のようなものです。

- ログアウトの URL。
- 言語切り替えの URL。
- 「カートに追加」の URL。
- サーバーが SMS を送信させるログインフローの URL。例えば例えばワンタイムパスワード（OTP）を送信するなど。
- 毎月の無料記事を消費したり、毎月の利用分数のタイマーを始動させるなど、ユーザーの利用可能数量を消費させる URL。
- サーバー側の広告コンバージョントラッキングを開始する URL。

このような問題は、リクエストが来たときに {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} ヘッダーを監視し、問題のある機能を延期する固有のコードを実行することで、サーバー上で軽減することができます。その後、ページが実際に移動されたときに、必要であれば JavaScript で延期された機能を起動することができます。

> [!NOTE]
> 検出コードの詳細は、[先読みおよび事前レンダリングされたページの検出](#先読みおよび事前レンダリングされたページの検出)の節にあります。

機能が JavaScript が実行される通常の状況下でのみ発生するのであれば、 JavaScript は起動するまで実行されないので、先読みは安全です。

また、サーバーがレンダリングした文書が、ユーザーが現在のページで取り得る操作によってコンテンツが変化するような文書を先読みすることは、潜在的に危険です。例えば、フラッシュセールのページや映画館の座席地図などです。このようなケースを注意深くテストし、ページが読み込まれたらコンテンツを更新することで、このような課題を軽減してください。これらのケースの詳細については、[状態の変化をサーバー側でレンダリングする場合](#状態の変化をサーバー側でレンダリングする場合)を参照してください。

> [!NOTE]
> ブラウザーは先読みされたページを破棄する前に短時間キャッシュします（例えば Chrome は 5 分間キャッシュします）ので、どのような場合でもユーザーは最大 5 分前のコンテンツを見ることになります。

最後のヒントは、 {{glossary("robots.txt")}} ファイルに許可されていないとして掲載されている URL を監査することです。通常、この URL は認証されたユーザーのみがアクセスできるページを指しているため、検索エンジンの検索結果に含めることができません。これらの多くは問題ないでしょうが、先読みされるのに安全でない（つまり記述されている条件を示している） URL を探すのに良い場所となります。

### 安全でない事前レンダリング

事前レンダリングは、先読みよりも導入リスクが高いため、それを行う価値がある場合にのみ、より控えめに行うべきです。事前レンダリングには、注意すべき安全でない条件がより多くあります。したがって、見返りは大きくなりますが、リスクも大きくなります。

事前レンダリングが行われると、ブラウザーは URL を取得し、コンテンツをレンダリングして非表示のタブに読み込みます。これは、コンテンツの JavaScript を実行し、JavaScript で取得したものを含むすべてのサブリソースを読み込みます。以下のいずれかの条件が見られた場合、そのコンテンツは事前レンダリングが安全でない可能性があります。

- URL が[安全でない先読み](#安全でない先読み)である場合。前節をまだ読んでいない場合は先に読み、事前レンダリングが安全でない場合にも同様に条件が適用されることを理解してください。
- ページの JavaScript は、読み込むときにクライアント側ストレージ（例えば[ウェブストレージ](/ja/docs/Web/API/Web_Storage_API)や [IndexedDB](/ja/docs/Web/API/IndexedDB_API)）を変更し、ユーザーが現在見ている事前レンダリングされていない他のページで混乱を発生させる効果があります。
- ページは JavaScript を実行したり、画像を読み込んだりすることで、アナリティクスを送信したり、広告インプレッションを記録したり、あるいは、あたかもユーザーがすでにアプリケーションを操作したかのようにアプリケーションの状態を変更したりするような副作用が発生します。繰り返しますが、これはアプリケーションのフローに影響を与えたり、不正なパフォーマンスや利用状況の報告を発生させたりします。このような使用する用途についての詳細は、[状態の変化をサーバー側でレンダリングする場合](#状態の変化をサーバー側でレンダリングする場合)を参照してください。

このような問題を軽減するには、以下の技術を使用することができます。

- リクエストされたサーバー上で {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} ヘッダーを監視し、問題を起こす機能を延期するための固有のコードを実行します。
- {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} イベントを使用して、事前レンダリングされたページが実際にアクティブになったタイミングを検出し、その結果としてコードを実行します。これは 2 つの用途で有益です。
  - ページが表示される前に実行すると問題を起こす可能性のあるコードを延期する場合。例えば、クライアント側のストレージを更新したり、 JavaScript を使用してサーバー側の状態を変更したりするのは、アクティブ化の後まで待つとよいでしょう。これによって、例えばユーザーがアイテムを追加したにもかかわらず、ショッピングカートにアイテムが表示されないなど、 UI とアプリケーションの状態が同期しなくなる状況を避けることができます。
  - 上記の方法が不可能な場合、ページがアクティブになった後にコードを再実行することで、アプリを再び最新の状態にすることができます。例えば、極めて動的なフラッシュセールのページでは、サードパーティのライブラリーから送られてくるコンテンツの更新に頼っているかもしれません。更新を遅らせることができない場合、ユーザーがページを表示した後に常に更新するようにします。事前レンダリングされたページは、[ブロードキャストチャンネル API](/ja/docs/Web/API/Broadcast_Channel_API) や、{{domxref("Window/fetch", "fetch()")}} や {{domxref("WebSocket")}} のような別のメカニズムを使用して、リアルタイムで更新することができます。これにより、事前レンダリングされたアクティブ化後の最新のコンテンツがユーザーに表示されることが保証されます。
- サードパーティ製のアナリティクススクリプトを注意深く管理する。可能な場合は、 Google Analytics や NewRelic のような事前レンダリングされたページを認識するスクリプト（例えば、 {{domxref("Document.prerendering")}} プロパティを使用して、事前レンダリングされたページで実行するのを延期する）を使用します。
  - オリジン間 {{htmlelement("iframe")}} の読み込みは事前レンダリング中は延期されるため、広告技術 (ad tech) などの他のほとんどのサードパーティ製ウィジェットは、実際には事前レンダリング中に使用しても安全であることに注意してください。
  - 事前レンダリングされないサードパーティ製スクリプトの場合は、前述のように {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} イベントを使用してアクティブ化するまで読み込むのを避けてください。

### 状態の変化をサーバー側でレンダリングする場合

サーバーがレンダリングする状態には、主に 2 つの種類があります。それは**古い状態**と**ユーザー別の状態**です。これは安全でない先読みと事前レンダリングの両方を発生させる可能性があります。

- 古い状態：例えば、サーバーでレンダリングされたブログコメントのリストが、ブログ記事が事前レンダリングされてから表示されるまでの間に古くなってしまうかもしれないことを考えてみましょう。現在のページが管理画面であり、ユーザーがスパムコメントを削除した場合、これは特に問題になります。ユーザーがブログ記事に移動した場合、なぜ削除したばかりのスパムコメントが表示されるのか混乱するかもしれません。
- ユーザー別の状態: 例えば、クッキーを使ってログイン状態を追跡することを考えてみましょう。以下のような問題が起こりえます。
  - ユーザーはログアウトした状態で、 `https://site.example/a` をタブ 1 に、 `https://site.example/b` をタブ 2 にアクセスします。
  - `https://site.example/b` が `https://site.example/c` を事前レンダリングします。ログアウト状態で事前レンダリングされます。
  - `https://site.example` （タブ 1）でログインします。
  - ユーザーがタブ 2 に移り、 `https://site.example/c` へのリンクをクリックすると、事前レンダリングされたページがアクティブになります。
  - タブ 2 には `https://site.example/c` のログアウトしたビューが表示されるため、ユーザーはログインしていると思っていたので混乱します。

ユーザー別の状態の問題は、例えば言語設定、ダークモードの環境設定、カートへの商品の追加など、他にもユーザー設定によって発生することがあります。また、単一のタブのみが関係している場合にも発生することがあります。

- ユーザーが `https://site.example/product` にアクセスしたとします。
- `https://site.example.com/product` が `https://site.example.com/cart` を事前レンダリングします。事前レンダリングされたカートのアイテム数は 0 です。
- ユーザーが「カートに追加」ボタンをクリックすると、（ページを再読み込みすることなく）ユーザーのカートに商品を追加するためのフェッチリクエストが開始されます。
- ユーザーが `https://site.example.com/cart` へのリンクをクリックすると、事前レンダリングされたページがアクティブになります。
- ユーザーには、たとえ何かを追加した直後であっても、空のカートが表示されます。

このような場合、そして実際にコンテンツがサーバーと同期しなくなるような場合の最善の緩和策は、必要に応じてページを更新することです。例えば、サーバーは[ブロードキャストチャンネル API](/ja/docs/Web/API/Broadcast_Channel_API) や {{domxref("Window/fetch", "fetch()")}} や {{domxref("WebSocket")}} のような別のメカニズムを使用するかもしれません。ページは、まだアクティブになっていない投機的に読み込まれたページを含め、適切に更新することができます。

## 事前レンダリングされた文書のセッション履歴の動作

事前レンダリング中/事前レンダリング済みの文書をアクティブにすると、エンドユーザーの視点で見れば、従来のナビゲーションと同じように動作します。アクティブ化された文書はタブに表示され、セッション履歴に追加され、既存の前方履歴項目は削除されます。アクティブ化される前に事前レンダリングされた閲覧コンテキストに配置されたナビゲーションは、セッション履歴に影響を与えません。

開発者の視点から見ると、事前レンダリングされた文書は、現在の項目という 1 つの項目しか存在しない**微小なセッション履歴**があると考えることができます。事前レンダリングされたコンテキスト内のナビゲーションはすべて効果的に置き換わります。

セッション履歴を処理する API 機能（例えば {{domxref("History")}} や {{domxref("Navigation")}}）は事前レンダリング文書内で呼び出すことができますが、それらはコンテキストの微小なセッション履歴を処理するだけです。その結果、事前レンダリングされた文書は参照するページの共同セッション履歴に属しません。例えば、 {{domxref("History.back()")}} によってリファラーに移動することはできません。

この設計により、ユーザーが戻るボタンを使用したときに期待した経験を得ること、つまり、最後に見たものに戻ることを確実にします。事前レンダリング文書がアクティブになると、単一のセッション履歴項目のみが結合セッション履歴に追加され、事前レンダリング閲覧コンテキスト内で起こった前回までの操作は無視されます。結合セッション履歴を1段階戻ると（例えば戻るボタンを押すと）、ユーザーは参照元のページに戻ります。

## 事前レンダリング中に延期または制限されるプラットフォーム機能

事前レンダリングされたページは隠された状態で開かれるため、潜在的に攻撃的な振る舞いを発生させる多くの API や他のウェブプラットフォームの機能はこの状態では有効化されず、ページが有効化されるか完全に制限されるまで延期されます。これがまだ可能でない少数のケースでは、事前レンダリングは取り消されます。

### 非同期 API の延期

以下の非同期機能の結果は、アクティブ化されるまで、事前レンダリングされた文書内で延期されます。

- [音声出力機器 API](/ja/docs/Web/API/Audio_Output_Devices_API): {{domxref("MediaDevices.selectAudioOutput()")}}
- [バックグラウンドフェッチ API](/ja/docs/Web/API/Background_Fetch_API): {{domxref("BackgroundFetchManager.fetch()")}}
- [ブロードキャストチャンネル API](/ja/docs/Web/API/Broadcast_Channel_API): {{domxref("BroadcastChannel.postMessage()")}}
- [資格情報管理 API](/ja/docs/Web/API/Credential_Management_API): {{domxref("CredentialsContainer.create()")}}, {{domxref("CredentialsContainer.get()")}}, {{domxref("CredentialsContainer.store()")}}
- [暗号化メディア拡張 API](/ja/docs/Web/API/Encrypted_Media_Extensions_API): {{domxref("Navigator.requestMediaKeySystemAccess()")}}
- [ゲームパッド API](/ja/docs/Web/API/Gamepad_API): {{domxref("Navigator.getGamepads()")}}, {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} イベント, {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} イベント
- [位置情報 API](/ja/docs/Web/API/Geolocation_API): {{domxref("Geolocation.getCurrentPosition()")}}, {{domxref("Geolocation.watchPosition()")}}, {{domxref("Geolocation.clearWatch()")}}
- {{domxref("HTMLMediaElement")}} API: 文書が事前レンダリングされている間、再生位置は前進しません。
- [アイドル検出 API](/ja/docs/Web/API/Idle_Detection_API): {{domxref("IdleDetector.start()")}}
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API): {{domxref("MediaDevices.getUserMedia()")}} （および古い {{domxref("Navigator.getUserMedia()")}} バージョン）, {{domxref("MediaDevices.enumerateDevices()")}}
- [通知 API](/ja/docs/Web/API/Notifications_API): {{domxref("Notification.Notification", "Notification()")}} constructor, {{domxref("Notification/requestPermission_static", "Notification.requestPermission()")}}
- [プッシュ API](/ja/docs/Web/API/Push_API): {{domxref("PushManager.subscribe()")}}
- [画面方向 API](/ja/docs/Web/API/Screen_Orientation_API): {{domxref("ScreenOrientation.lock()")}}, {{domxref("ScreenOrientation.unlock()")}}
- [センサー API](/ja/docs/Web/API/Sensor_APIs): {{domxref("Sensor.start()")}}
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API): {{domxref("ServiceWorker.postMessage()")}}, {{domxref("ServiceWorkerContainer.register()")}}, {{domxref("ServiceWorkerRegistration.update()")}}, {{domxref("ServiceWorkerRegistration.unregister()")}}
- [ストレージ API](/ja/docs/Web/API/Storage_API): {{domxref("StorageManager.persist()")}}
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API): 文書が事前レンダリングされている間は、 {{domxref("AudioContext")}} を開始することはできません。
- [ウェブ Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API): {{domxref("Bluetooth.getDevices()")}}, {{domxref("Bluetooth.requestDevice()")}}
- [WebHID API](/ja/docs/Web/API/WebHID_API): {{domxref("HID.getDevices()")}}, {{domxref("HID.requestDevice()")}}
- [Web Locks API](/ja/docs/Web/API/Web_Locks_API): {{domxref("LockManager.query()")}}, {{domxref("LockManager.request()")}}
- [ウェブ MIDI API](/ja/docs/Web/API/Web_MIDI_API): {{domxref("Navigator.requestMIDIAccess()")}}
- [ウェブ NFC API](/ja/docs/Web/API/Web_NFC_API): {{domxref("NDefReader.write()")}}, {{domxref("NDefReader.scan()")}}
- [ウェブシリアル API](/ja/docs/Web/API/Web_Serial_API): {{domxref("Serial.getPorts()")}}, {{domxref("Serial.requestPort()")}}
- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API): {{domxref("SpeechRecognition.abort()")}}, {{domxref("SpeechRecognition.start()")}}, {{domxref("SpeechRecognition.stop()")}}, {{domxref("SpeechSynthesis.cancel()")}}, {{domxref("SpeechSynthesis.pause()")}}, {{domxref("SpeechSynthesis.resume()")}}, {{domxref("SpeechSynthesis.speak()")}}
- [WebUSB API](/ja/docs/Web/API/WebUSB_API): {{domxref("USB.getDevices()")}}, {{domxref("USB.requestDevice()")}}
- [WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API): {{domxref("XRSystem.requestSession()")}}

### 暗黙的に制限される API

以下の機能はアクティブ化されていない文書内では自動的に失敗または無機能になります。

{{glossary("transient activation", "一時的な有効化")}}または{{glossary("sticky activation", "粘着的な有効化")}}が要求される API：

- {{domxref("Window.beforeunload_event", "beforeunload")}} イベントで生成される確認ダイアログ
- [クリップボード API](/ja/docs/Web/API/Clipboard_API) で発生するすべてのイベント
- [ファイルシステム API](/ja/docs/Web/API/File_System_API): {{domxref("Window.showDirectoryPicker()")}}, {{domxref("Window.showOpenFilePicker()")}}, {{domxref("Window.showSaveFilePicker()")}}
- [全画面 API](/ja/docs/Web/API/Fullscreen_API): {{domxref("Element.requestFullscreen()")}}
- [アイドル検出 API](/ja/docs/Web/API/Idle_Detection_API): {{domxref("IdleDetector/requestPermission_static", "IdleDetector.requestPermission()")}}
- [キーボード API](/ja/docs/Web/API/Keyboard_API): {{domxref("Keyboard.lock()")}} （全画面にする必要があるもの）
- [決済リクエスト API](/ja/docs/Web/API/Payment_Request_API): {{domxref("PaymentRequest.show()")}}
- [プレゼンテーション API](/ja/docs/Web/API/Presentation_API): {{domxref("PresentationRequest.start()")}}
- [ポインターロック API](/ja/docs/Web/API/Pointer_Lock_API): {{domxref("Element.requestPointerLock()")}}
- [画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API): {{domxref("MediaDevices.getDisplayMedia()")}}
- [ウェブ共有 API](/ja/docs/Web/API/Web_Share_API): {{domxref("Navigator.share()")}}
- {{domxref("Window.open()")}}

包含する文書をフォーカスする必要がある API:

- [Clipboard API](/ja/docs/Web/API/Clipboard_API): {{domxref("Clipboard.read()")}}, {{domxref("Clipboard.readText()")}}, {{domxref("Clipboard.write()")}}, {{domxref("Clipboard.writeText()")}}

包含する文書の {{domxref("Document.visibilityState")}} が `"visible"` であることが要求される API：

- [ピクチャインピクチャ API](/ja/docs/Web/API/Picture-in-Picture_API): {{domxref("HTMLVideoElement.requestPictureInPicture()")}} （包含する文書の可視状態が `"visible" または{{glossary("transient activation", "一時的な有効化")}}が行われていることが求められる）
- [画面起動ロック API](/ja/docs/Web/API/Screen_Wake_Lock_API): {{domxref("WakeLock.request()")}}

### 他の制限されている機能

- ダウンロードリンク、すなわち `download` 属性を持つ {{htmlelement("a")}} と {{htmlelement("area")}} 要素は、事前レンダリングが完了するまでダウンロードが延期されます。
- サイト間をまたがる移動は不可: 他のサイトへ移動する事前レンダリング文書は、他のサイトへのリクエストが送信される前に即座に破棄されます。
- URL の制限: 事前レンダリングさ れる文書は、 HTTP(S) 以外のトップレベル URL を扱うことはできません。以下の URL 型を記載すると、事前レンダリングは直ちに破棄されます。
  - `javascript:` URL
  - `data:` URL
  - `blob:` URL
  - `about:` URL、 `about:blank` と `about:srcdoc` を含む
- セッションストレージ: {{domxref("Window.sessionStorage")}} を使用することができますが、一度に 1 つのページだけがタブのセッション ストレージにアクセスすることを想定しているサイトを壊さないように、動作はとても特殊です。そのため、事前レンダリングされたページは、作成するときに作成されたタブのセッション ストレージの状態の複製から開始します。アクティブになると、事前レンダリングされたページのストレージ複製は破棄され、代わりにタブのメインストレージ状態が使用されます。セッションストレージを使用するページは、 {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} イベントを使用して、このストレージの入れ替えが発生するタイミングを検出することができます。
- {{domxref("Window.print()")}}: このメソッドへの呼び出しは無視されます。
- "単純なダイアログメソッド" は、次のように制限されています。
  - {{domxref("Window.alert()")}} は、ダイアログを表示することなくすぐに返ります。
  - {{domxref("Window.confirm()")}} は、ダイアログを表示することなくすぐに `false` を返します。
  - {{domxref("Window.prompt()")}} は、ダイアログを表示することなくすぐに空文字列 (`""`) を返します。
- 専用/共有ワーカー スクリプトは読み込まれますが、その実行は事前レンダリングされた文書がアクティブになるまで延期されます。
- オリジン間 {{htmlelement("iframe")}} の読み込みは、事前レンダリングされた後、ページがアクティブになるまで延期されます。

## インターフェイス

投機ルール API は独自のインターフェイスを定義していません。

### 他のインターフェイスの拡張

- {{domxref("Document.prerendering")}} {{experimental_inline}}
  - : 論理値プロパティで、文書が現在事前レンダリングされつつある場合に `true` を返します。
- {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} イベント {{experimental_inline}}
  - : 事前レンダリングされた文書がアクティブになった（ユーザーがページを表示した）ときに発行されます。
- {{domxref("PerformanceNavigationTiming.activationStart")}} {{experimental_inline}}
  - : 文書が事前レンダリングを開始してからアクティブになるまでの時間を表す数値。
- {{domxref("PerformanceResourceTiming.deliveryType")}} `"navigational-prefetch"` 値 {{experimental_inline}}
  - : パフォーマンス項目の種別が先読みであることを示します。

## HTTP ヘッダー

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` 値 {{experimental_inline}}
  - : 取得する文書に投機ルールを定義するために `<script type="speculationrules">` の使用を許可するオプトインに使用します。
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : ナビゲーション対象が、よりリスクの高い様々な読み込みモードを使用することをオプトインするために設定します。例えば、異なるオリジン間、同じサイトの事前レンダリングには `Supports-Loading-Mode` の値として `credentialed-prerender` が要求されます。

## HTML 機能

- [`<script type="speculationrules"> ... </script>`](/ja/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : 現在の文書に対する一連の先読みや事前レンダリングの投機ルールを定義するために用います。

## 例

[完全な事前レンダリングのデモはこちら](https://prerender-demos.glitch.me/)にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) (developer.chrome.com, 2023)
- [投機的読み込み](/ja/docs/Web/Performance/Speculative_loading)で、投機ルールとその他の同様のパフォーマンス改善機能を比較しています。
