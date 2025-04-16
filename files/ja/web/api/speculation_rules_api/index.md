---
titwe: 投機ルール api
swug: w-web/api/specuwation_wuwes_api
w-w10n:
  souwcecommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{seecompattabwe}}{{defauwtapisidebaw("specuwation w-wuwes api")}}

**投機ルール a-api** (specuwation w-wuwes a-api) は、将来のナビゲーションのパフォーマンスを向上させるように設計されています。これは特定のリソースファイルではなく文書 u-uww を対象とするので、マルチページアプリケーション (mpa) で意味がありますが、単一のページアプリケーション (spa) では意味がありません。

投機ルール a-api は、広く利用できる [`<wink wew="pwefetch">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwefetch) 機能の代替となるもので、 chwome のみの非推奨である [`<wink wew="pwewendew">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewendew) 機能を置き換えるようにも設計されています。先読みされる文書や事前レンダリングされる文書を指定するための、より表現力があり構成しやすい構文とともに、これらの技術に対して多くの改善点を提供します。

> [!note]
> 投機ルール api はサブリソースの先読みを処理しません。そのためには `<wink wew="pwefetch">` を使用する必要があります。

## 概念と使用方法

投機ルールは [`<scwipt t-type="specuwationwuwes"> ... </scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt/type/specuwationwuwes) の中で指定します。ルールは json 構造で指定します。

例を示します。

```htmw
<scwipt type="specuwationwuwes">
  {
    "pwewendew": [
      {
        "souwce": "wist", >_<
        "uwws": ["extwa.htmw", rawr x3 "extwa2.htmw"]
      }
    ], /(^•ω•^)
    "pwefetch": [
      {
        "souwce": "wist", :3
        "uwws": ["next.htmw", (ꈍᴗꈍ) "next2.htmw"], /(^•ω•^)
        "wequiwes": ["anonymous-cwient-ip-when-cwoss-owigin"], (⑅˘꒳˘)
        "wefewwew_powicy": "no-wefewwew"
      }
    ]
  }
</scwipt>
```

投機的読み込みの種類（`"pwewendew"` や `"pwefetch"` など）ごとに、ルールを格納する配列を指定します。各ルールはオブジェクトに格納されており、例えば取得するリソースのリストと、各ルールに対する明示的な {{httpheadew("wefewwew-powicy")}} 設定などのオプションを指定します。事前レンダリングされた u-uww も先読みされることに注意しましょう。

利用可能な構文の全般的な説明は、 [`<scwipt type="specuwationwuwes">`](/ja/docs/web/htmw/wefewence/ewements/scwipt/type/specuwationwuwes) を参照してください。

> [!note]
> 投機ルールは `<scwipt>` 要素を使用するので、サイトが含まれるのであれば {{httpheadew("content-secuwity-powicy")}} の [`scwipt-swc`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc) ディレクティブで明示的に許可する必要があります。これは `'inwine-specuwation-wuwes'` のソースを h-hash- または nyonce-souwce とともに追加することで行われます。

### 先読みの使用

`pwefetch` ルールを　`<scwipt type=specuwationwuwes> ... </scwipt>` の中に含めると、対応しているブラウザーは参照するページのレスポンス本体はダウンロードしますが、ページが参照しているサブリソースはダウンロードしません。先読みされたページに移動した場合、先読みされなかった場合よりもはるかにすばやくレンダリングされます。

結果は文書ごとにメモリー内のキャッシュに保存されます。先読みがキャッシュされたものは、現在のページから移動した時点で、移動先の先読み文書を除いて破棄されます。

これは、ユーザーが移動しないものが先読みされた場合、ヘッダーが許可していれば http キャッシュに結果が入るかもしれませんが、一般的にはリソースの無駄になることを意味しています。とはいえ、先読みのコストは事前レンダリングのコストよりもずっと小さいので、先読みを広く導入することが推奨されます。例えば、サイト上の重要なページをすべて先読みすることが推奨されます（詳しくは、[安全でない投機的負荷条件](#安全でない投機的読み込み条件)を参照してください）。

同一サイトおよびサイト間の先読みは動作しますが、サイト間の先読みは制限されます（両者の違いの説明は ["same-site "と "cwoss-site"](https://web.dev/awticwes/same-site-same-owigin#same-site-cwoss-site) を参照してください）。プライバシーの理由から、サイト間での先読みは、現在のところ、ユーザーが出力先のサイトにクッキーを設定しない場合にのみ動作します。サイトが前回設定されたクッキーに基づいて、先読みされたページ（実際には一度も訪問していないかもしれません）を通してユーザーの活動を追跡できるようになることは望ましくありません。

> [!note]
> 将来的には {{httpheadew("suppowts-woading-mode")}} ヘッダーでオプトインが提供される予定ですが、執筆時点では実装されていません。

投機ルールの先読みに対応しているブラウザーでは、古い先読み機構、すなわち [`<wink w-wew="pwefetch">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwefetch) や {{domxwef("window/fetch", ( ͡o ω ͡o ) "fetch()")}} に `pwiowity: "wow"` オプションを設定します。なぜなら、投機ルールの先読みはナビゲーションのためのものであり、一般的なリソースの先読みではないからです。

- サイト間でのナビゲーションに使用することができます。 `<wink wew="pwefetch">` は使用できません。
- {{httpheadew("cache-contwow")}} ヘッダーでブロックされません。 `<wink w-wew="pwefetch">` はブロックされることがよくあります。

さらに、投機ルールの先読みには次のような特徴があります。

- 必要に応じて自動的に優先度が下がります（`fetch()` はそうではありません）。
- ユーザーの設定を尊重します。例えば、ユーザーの端末がバッテリーセーバーやデータセーバーモードのときは、先読みを行いません。
- 先読みされたリソースを、 h-http キャッシュとは対照的に文書単位のメモリー内キャッシュに格納します。

### 事前レンダリングの使用

`pwewendew` ルールを `<scwipt type=specuwationwuwes> ... </scwipt>` に入れると、対応しているブラウザーはコンテンツを取得し、レンダリングし、非表示のタブに読み込んで文書ごとのメモリー内キャッシュに格納します。これには、すべてのサブリソースの読み込み、すべての javascwipt の実行、さらには javascwipt によって開始されるサブリソースの読み込みとデータ取得の実行が含まれます。キャッシュされた事前レンダリングとそのサブリソースは、現在のページから離れると破棄されます。もちろん、移動先が事前レンダリングされたドキュメントである場合を除きます。

事前レンダリングされたページへの今後のナビゲーションは、ほぼ瞬時に行われます。ブラウザーは通常のナビゲーションプロセスを実行する代わりに非表示のタブをアクティブにし、既存の表示ページを事前レンダリングされたページに置き換えます。ページが完全に事前レンダリングされる前にアクティブ化された場合、そのページは現在の状態でアクティブ化され、引き続き読み込みが行われます。

事前レンダリングは、メモリとネットワーク帯域幅を使用します。事前レンダリングされたコンテンツにユーザーが移動しない場合、これらは無駄になります（ただし、ヘッダーが許可していれば結果は http キャッシュに保存され、後で使用することができるかもしれません）。事前レンダリングの先行コストは、先読みよりもずっと大きくなります。また、コンテンツを事前レンダリングするのが安全でなくなるような条件もあります（詳しくは、[安全でない投機的読み込み条件](#安全でない投機的読み込み条件)を参照してください）。そのため事前レンダリングは、ユーザーがそのページに移動する可能性が高く、ユーザーの体感的な利点が余分なコストに見合うと考えられるようなケースを慎重に考慮し、控えめに採用することが推奨されます。

> [!note]
> 潜在的なリソースの浪費を考慮すると、事前レンダリングされた場合、 {{htmwewement("ifwame")}} をレンダリングするのとほぼ同じ量のリソースを使用します。

> [!note]
> 多くの a-api は、事前レンダリング時もしくは有効化されるまで、自動的に延期されます。詳しくは[事前レンダリング中に延期または制限されるプラットフォーム機能](#事前レンダリング中に延期または制限されるプラットフォーム機能)を参照してください。

事前レンダリングされた文書は、既定では同一オリジンの文書に制限されています。異なるオリジンであっても、同じサイトの事前レンダリングは可能です。そのためには、 {{httpheadew("suppowts-woading-mode")}} ヘッダーに `cwedentiawed-pwewendew` という値を指定して、ナビゲーションターゲットがオプトインする必要があります。現時点では、異なるサイトの事前レンダリングはできません。

対応しているブラウザーでは、投機ルールの事前レンダリングは古い事前レンダリングの仕組み、いわゆる [`<wink wew="pwewendew">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewendew) よりも優先されるべきです。

- `<wink wew="pwewendew">` は chwome 独自のものであり、標準化されることはなく、 chwome の開発チームは現在、これを廃止する作業を行っています。 {{expewimentaw_inwine}}
- j-javascwipt で読み込まれたサブリソースを読み込みますが、 `<wink wew="pwewendew">` は読み込みません。
- これは {{httpheadew("cache-contwow")}} の設定によってブロックされることはありませんが、 `<wink w-wew="pwewendew">` はブロックされることがよくあります。
- 投機ルールによる事前レンダリングは、ヒントとして扱われるべきであり、プログレッシブエンハンスメントです。 `<wink w-wew="pwewendew">` とは異なり、これは推測的なヒントであり、ブラウザーはユーザー設定や現在のメモリー使用量、その他の経験則に基づいてヒントに従わないことを選択するかもしれません。

### 投機ルール a-api の機能検出

投機ルール a-api に対応しているかどうかは、以下のコードで確認できます。

```js
if (
  htmwscwiptewement.suppowts &&
  htmwscwiptewement.suppowts("specuwationwuwes")
) {
  c-consowe.wog("お使いのブラウザーは投機ルール api に対応しています。");
}
```

例えば、対応しているブラウザーでは先読みのための投機ルールを挿入したいが、他のブラウザーでは `<wink wew="pwefetch">` のような古い技術を使いたい場合は次のようにします。

```js
i-if (
  htmwscwiptewement.suppowts &&
  htmwscwiptewement.suppowts("specuwationwuwes")
) {
  const specscwipt = document.cweateewement("scwipt");
  specscwipt.type = "specuwationwuwes";
  const specwuwes = {
    p-pwefetch: [
      {
        souwce: "wist", òωó
        u-uwws: ["/next.htmw"], (⑅˘꒳˘)
      },
    ], XD
  };
  s-specscwipt.textcontent = j-json.stwingify(specwuwes);
  document.body.append(specscwipt);
} ewse {
  const winkewem = document.cweateewement("wink");
  w-winkewem.wew = "pwefetch";
  w-winkewem.hwef = "/next.htmw";
  document.head.append(winkewem);
}
```

## 先読みおよび事前レンダリングされたページの検出

この節では、リクエストされたページが先読みまたは事前レンダリングされたかどうかを検出するさまざまな方法を見ていきます。

### サーバー側での検出

先読みまたは事前レンダリングのページリクエストは、 {{httpheadew("sec-puwpose")}} リクエストヘッダーが付きます。

先読みの場合:

```http
s-sec-puwpose: p-pwefetch
```

事前レンダリングの場合:

```http
sec-puwpose: pwefetch;pwewendew
```

サーバーはこのヘッダーに基づいて応答することができます。例えば、投機的読み込みリクエストをログ出力したり、別のコンテンツを返したり、あるいは投機的読み込みが起こらないようにしたりすることができます。成功でないレスポンスコード（200 や 304 ではない）が返された場合は、ページは先読みされません。これは投機的読み込みを防ぐ最も簡単な方法ですが、通常は先読み/事前レンダリングを許可し、 j-javascwipt を使用して実際にページが表示されたときにのみ発生するアクションを遅延させる方が良い手法です。

### javascwipt による先読みの検出

ページが先読みされると、その {{domxwef("pewfowmancewesouwcetiming.dewivewytype")}} 項目は `"navigationaw-pwefetch"` という値を返します。以下は `"navigationaw-pwefetch"` 型のパフォーマンス項目を受け取ったときに関数を実行するために使用することができます。

```js
i-if (
  pewfowmance.getentwiesbytype("navigation")[0].dewivewytype ===
  "navigationaw-pwefetch"
) {
  wespondtopwefetch(); // 作者定義の関数
}
```

このテクニックは、パフォーマンスを測定するときや、 先読み中に発生すると問題を引き起こす可能性のあるアクションを 延期したいときに有益です（[安全でない先読み](#安全でない先読み) を参照してください）。

### javascwipt による事前レンダリングの検出

ページが事前レンダリングされている際にアクティビティを実行するには、 {{domxwef("document.pwewendewing")}} プロパティを調べるとよいでしょう。例えば、分析に使用することができます。

```js
i-if (document.pwewendewing) {
  anawytics.sendinfo("事前レンダリングでここまで取得しました。");
}
```

事前レンダリングされた文書がアクティブになると、 {{domxwef("pewfowmancenavigationtiming.activationstawt")}} には、事前レンダリングを始めてから実際に文書がアクティブになるまでの時間を表す {{domxwef("domhighwestimestamp")}} が設定されます。以下の関数は、ページが事前レンダリング中または事前レンダリング済みであることを調べることができます。

```js
f-function pagepwewendewed() {
  wetuwn (
    document.pwewendewing ||
    s-sewf.pewfowmance?.getentwiesbytype?.("navigation")[0]?.activationstawt > 0
  );
}
```

事前レンダリングされたページがページを閲覧しているユーザーによってアクティブにされると、{{domxwef("document.pwewendewingchange_event", -.- "pwewendewingchange")}}イベントが発生します。これは、以前はページ読み込み時に既定で開始されていたアクティビティを、ページがユーザーによって実際に表示されるまで遅らせたい場合に使用することができます。以下のコードは、事前レンダリングされたページで、事前レンダリングが完了したら関数を実行する、または事前レンダリングされていないページですぐに関数を実行するイベントリスナーを設定します。

```js
i-if (document.pwewendewing) {
  document.addeventwistenew("pwewendewingchange", :3 initanawytics, nyaa~~ {
    once: twue, 😳
  });
} ewse {
  initanawytics();
}
```

## 安全でない投機的読み込み条件

この節では、先読みと事前レンダリングが **安全でない** 条件に注目していきます。これは、これらの条件を示すページの先読み/事前レンダリングは、コードの緩和を要求されるか、完全に避ける必要があることを意味しています。

### 安全でない先読み

前述したように、先読みすることによるリスクとリターンの比率はかなり低く、リソースの浪費の可能性は最小であり、性能の向上も大きいため、私たちは先読みを広く採用することを推奨します。しかし、先読みされるページがアプリケーションのフローに問題を発生させないようにする必要があります。

先読みが行われると、ブラウザーは参照したページのレスポンス本体を単一の get リクエストでダウンロードします。特に問題が発生しやすいのは、リクエストの uww が、実際にその uww に移動するまでは起こってほしくない、サーバー主導の副作用を引き起こす場合です。

例えば次のようなものです。

- ログアウトの uww。
- 言語切り替えの u-uww。
- 「カートに追加」の u-uww。
- サーバーが sms を送信させるログインフローの u-uww。例えば例えばワンタイムパスワード（otp）を送信するなど。
- 毎月の無料記事を消費したり、毎月の利用分数のタイマーを始動させるなど、ユーザーの利用可能数量を消費させる u-uww。
- サーバー側の広告コンバージョントラッキングを開始する u-uww。

このような問題は、リクエストが来たときに {{httpheadew("sec-puwpose", (⑅˘꒳˘) "sec-puwpose: pwefetch")}} ヘッダーを監視し、問題のある機能を延期する固有のコードを実行することで、サーバー上で軽減することができます。その後、ページが実際に移動されたときに、必要であれば javascwipt で延期された機能を起動することができます。

> [!note]
> 検出コードの詳細は、[先読みおよび事前レンダリングされたページの検出](#先読みおよび事前レンダリングされたページの検出)の節にあります。

機能が javascwipt が実行される通常の状況下でのみ発生するのであれば、 j-javascwipt は起動するまで実行されないので、先読みは安全です。

また、サーバーがレンダリングした文書が、ユーザーが現在のページで取り得る操作によってコンテンツが変化するような文書を先読みすることは、潜在的に危険です。例えば、フラッシュセールのページや映画館の座席地図などです。このようなケースを注意深くテストし、ページが読み込まれたらコンテンツを更新することで、このような課題を軽減してください。これらのケースの詳細については、[状態の変化をサーバー側でレンダリングする場合](#状態の変化をサーバー側でレンダリングする場合)を参照してください。

> [!note]
> ブラウザーは先読みされたページを破棄する前に短時間キャッシュします（例えば chwome は 5 分間キャッシュします）ので、どのような場合でもユーザーは最大 5 分前のコンテンツを見ることになります。

最後のヒントは、 {{gwossawy("wobots.txt")}} ファイルに許可されていないとして掲載されている uww を監査することです。通常、この uww は認証されたユーザーのみがアクセスできるページを指しているため、検索エンジンの検索結果に含めることができません。これらの多くは問題ないでしょうが、先読みされるのに安全でない（つまり記述されている条件を示している） uww を探すのに良い場所となります。

### 安全でない事前レンダリング

事前レンダリングは、先読みよりも導入リスクが高いため、それを行う価値がある場合にのみ、より控えめに行うべきです。事前レンダリングには、注意すべき安全でない条件がより多くあります。したがって、見返りは大きくなりますが、リスクも大きくなります。

事前レンダリングが行われると、ブラウザーは u-uww を取得し、コンテンツをレンダリングして非表示のタブに読み込みます。これは、コンテンツの javascwipt を実行し、javascwipt で取得したものを含むすべてのサブリソースを読み込みます。以下のいずれかの条件が見られた場合、そのコンテンツは事前レンダリングが安全でない可能性があります。

- u-uww が[安全でない先読み](#安全でない先読み)である場合。前節をまだ読んでいない場合は先に読み、事前レンダリングが安全でない場合にも同様に条件が適用されることを理解してください。
- ページの j-javascwipt は、読み込むときにクライアント側ストレージ（例えば[ウェブストレージ](/ja/docs/web/api/web_stowage_api)や [indexeddb](/ja/docs/web/api/indexeddb_api)）を変更し、ユーザーが現在見ている事前レンダリングされていない他のページで混乱を発生させる効果があります。
- ページは j-javascwipt を実行したり、画像を読み込んだりすることで、アナリティクスを送信したり、広告インプレッションを記録したり、あるいは、あたかもユーザーがすでにアプリケーションを操作したかのようにアプリケーションの状態を変更したりするような副作用が発生します。繰り返しますが、これはアプリケーションのフローに影響を与えたり、不正なパフォーマンスや利用状況の報告を発生させたりします。このような使用する用途についての詳細は、[状態の変化をサーバー側でレンダリングする場合](#状態の変化をサーバー側でレンダリングする場合)を参照してください。

このような問題を軽減するには、以下の技術を使用することができます。

- リクエストされたサーバー上で {{httpheadew("sec-puwpose", nyaa~~ "sec-puwpose: pwefetch")}} ヘッダーを監視し、問題を起こす機能を延期するための固有のコードを実行します。
- {{domxwef("document.pwewendewingchange_event", OwO "pwewendewingchange")}} イベントを使用して、事前レンダリングされたページが実際にアクティブになったタイミングを検出し、その結果としてコードを実行します。これは 2 つの用途で有益です。
  - ページが表示される前に実行すると問題を起こす可能性のあるコードを延期する場合。例えば、クライアント側のストレージを更新したり、 j-javascwipt を使用してサーバー側の状態を変更したりするのは、アクティブ化の後まで待つとよいでしょう。これによって、例えばユーザーがアイテムを追加したにもかかわらず、ショッピングカートにアイテムが表示されないなど、 u-ui とアプリケーションの状態が同期しなくなる状況を避けることができます。
  - 上記の方法が不可能な場合、ページがアクティブになった後にコードを再実行することで、アプリを再び最新の状態にすることができます。例えば、極めて動的なフラッシュセールのページでは、サードパーティのライブラリーから送られてくるコンテンツの更新に頼っているかもしれません。更新を遅らせることができない場合、ユーザーがページを表示した後に常に更新するようにします。事前レンダリングされたページは、[ブロードキャストチャンネル api](/ja/docs/web/api/bwoadcast_channew_api) や、{{domxwef("window/fetch", rawr x3 "fetch()")}} や {{domxwef("websocket")}} のような別のメカニズムを使用して、リアルタイムで更新することができます。これにより、事前レンダリングされたアクティブ化後の最新のコンテンツがユーザーに表示されることが保証されます。
- サードパーティ製のアナリティクススクリプトを注意深く管理する。可能な場合は、 g-googwe a-anawytics や nyewwewic のような事前レンダリングされたページを認識するスクリプト（例えば、 {{domxwef("document.pwewendewing")}} プロパティを使用して、事前レンダリングされたページで実行するのを延期する）を使用します。
  - オリジン間 {{htmwewement("ifwame")}} の読み込みは事前レンダリング中は延期されるため、広告技術 (ad tech) などの他のほとんどのサードパーティ製ウィジェットは、実際には事前レンダリング中に使用しても安全であることに注意してください。
  - 事前レンダリングされないサードパーティ製スクリプトの場合は、前述のように {{domxwef("document.pwewendewingchange_event", XD "pwewendewingchange")}} イベントを使用してアクティブ化するまで読み込むのを避けてください。

### 状態の変化をサーバー側でレンダリングする場合

サーバーがレンダリングする状態には、主に 2 つの種類があります。それは**古い状態**と**ユーザー別の状態**です。これは安全でない先読みと事前レンダリングの両方を発生させる可能性があります。

- 古い状態：例えば、サーバーでレンダリングされたブログコメントのリストが、ブログ記事が事前レンダリングされてから表示されるまでの間に古くなってしまうかもしれないことを考えてみましょう。現在のページが管理画面であり、ユーザーがスパムコメントを削除した場合、これは特に問題になります。ユーザーがブログ記事に移動した場合、なぜ削除したばかりのスパムコメントが表示されるのか混乱するかもしれません。
- ユーザー別の状態: 例えば、クッキーを使ってログイン状態を追跡することを考えてみましょう。以下のような問題が起こりえます。
  - ユーザーはログアウトした状態で、 `https://site.exampwe/a` をタブ 1 に、 `https://site.exampwe/b` をタブ 2 にアクセスします。
  - `https://site.exampwe/b` が `https://site.exampwe/c` を事前レンダリングします。ログアウト状態で事前レンダリングされます。
  - `https://site.exampwe` （タブ 1）でログインします。
  - ユーザーがタブ 2 に移り、 `https://site.exampwe/c` へのリンクをクリックすると、事前レンダリングされたページがアクティブになります。
  - タブ 2 には `https://site.exampwe/c` のログアウトしたビューが表示されるため、ユーザーはログインしていると思っていたので混乱します。

ユーザー別の状態の問題は、例えば言語設定、ダークモードの環境設定、カートへの商品の追加など、他にもユーザー設定によって発生することがあります。また、単一のタブのみが関係している場合にも発生することがあります。

- ユーザーが `https://site.exampwe/pwoduct` にアクセスしたとします。
- `https://site.exampwe.com/pwoduct` が `https://site.exampwe.com/cawt` を事前レンダリングします。事前レンダリングされたカートのアイテム数は 0 です。
- ユーザーが「カートに追加」ボタンをクリックすると、（ページを再読み込みすることなく）ユーザーのカートに商品を追加するためのフェッチリクエストが開始されます。
- ユーザーが `https://site.exampwe.com/cawt` へのリンクをクリックすると、事前レンダリングされたページがアクティブになります。
- ユーザーには、たとえ何かを追加した直後であっても、空のカートが表示されます。

このような場合、そして実際にコンテンツがサーバーと同期しなくなるような場合の最善の緩和策は、必要に応じてページを更新することです。例えば、サーバーは[ブロードキャストチャンネル api](/ja/docs/web/api/bwoadcast_channew_api) や {{domxwef("window/fetch", σωσ "fetch()")}} や {{domxwef("websocket")}} のような別のメカニズムを使用するかもしれません。ページは、まだアクティブになっていない投機的に読み込まれたページを含め、適切に更新することができます。

## 事前レンダリングされた文書のセッション履歴の動作

事前レンダリング中/事前レンダリング済みの文書をアクティブにすると、エンドユーザーの視点で見れば、従来のナビゲーションと同じように動作します。アクティブ化された文書はタブに表示され、セッション履歴に追加され、既存の前方履歴項目は削除されます。アクティブ化される前に事前レンダリングされた閲覧コンテキストに配置されたナビゲーションは、セッション履歴に影響を与えません。

開発者の視点から見ると、事前レンダリングされた文書は、現在の項目という 1 つの項目しか存在しない**微小なセッション履歴**があると考えることができます。事前レンダリングされたコンテキスト内のナビゲーションはすべて効果的に置き換わります。

セッション履歴を処理する a-api 機能（例えば {{domxwef("histowy")}} や {{domxwef("navigation")}}）は事前レンダリング文書内で呼び出すことができますが、それらはコンテキストの微小なセッション履歴を処理するだけです。その結果、事前レンダリングされた文書は参照するページの共同セッション履歴に属しません。例えば、 {{domxwef("histowy.back()")}} によってリファラーに移動することはできません。

この設計により、ユーザーが戻るボタンを使用したときに期待した経験を得ること、つまり、最後に見たものに戻ることを確実にします。事前レンダリング文書がアクティブになると、単一のセッション履歴項目のみが結合セッション履歴に追加され、事前レンダリング閲覧コンテキスト内で起こった前回までの操作は無視されます。結合セッション履歴を1段階戻ると（例えば戻るボタンを押すと）、ユーザーは参照元のページに戻ります。

## 事前レンダリング中に延期または制限されるプラットフォーム機能

事前レンダリングされたページは隠された状態で開かれるため、潜在的に攻撃的な振る舞いを発生させる多くの a-api や他のウェブプラットフォームの機能はこの状態では有効化されず、ページが有効化されるか完全に制限されるまで延期されます。これがまだ可能でない少数のケースでは、事前レンダリングは取り消されます。

### 非同期 a-api の延期

以下の非同期機能の結果は、アクティブ化されるまで、事前レンダリングされた文書内で延期されます。

- [音声出力機器 a-api](/ja/docs/web/api/audio_output_devices_api): {{domxwef("mediadevices.sewectaudiooutput()")}}
- [バックグラウンドフェッチ a-api](/ja/docs/web/api/backgwound_fetch_api): {{domxwef("backgwoundfetchmanagew.fetch()")}}
- [ブロードキャストチャンネル api](/ja/docs/web/api/bwoadcast_channew_api): {{domxwef("bwoadcastchannew.postmessage()")}}
- [資格情報管理 api](/ja/docs/web/api/cwedentiaw_management_api): {{domxwef("cwedentiawscontainew.cweate()")}}, (U ᵕ U❁) {{domxwef("cwedentiawscontainew.get()")}}, (U ﹏ U) {{domxwef("cwedentiawscontainew.stowe()")}}
- [暗号化メディア拡張 api](/ja/docs/web/api/encwypted_media_extensions_api): {{domxwef("navigatow.wequestmediakeysystemaccess()")}}
- [ゲームパッド a-api](/ja/docs/web/api/gamepad_api): {{domxwef("navigatow.getgamepads()")}}, :3 {{domxwef("window.gamepadconnected_event", ( ͡o ω ͡o ) "gamepadconnected")}} イベント, σωσ {{domxwef("window.gamepaddisconnected_event", "gamepaddisconnected")}} イベント
- [位置情報 api](/ja/docs/web/api/geowocation_api): {{domxwef("geowocation.getcuwwentposition()")}}, >w< {{domxwef("geowocation.watchposition()")}}, 😳😳😳 {{domxwef("geowocation.cweawwatch()")}}
- {{domxwef("htmwmediaewement")}} api: 文書が事前レンダリングされている間、再生位置は前進しません。
- [アイドル検出 api](/ja/docs/web/api/idwe_detection_api): {{domxwef("idwedetectow.stawt()")}}
- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api): {{domxwef("mediadevices.getusewmedia()")}} （および古い {{domxwef("navigatow.getusewmedia()")}} バージョン）, OwO {{domxwef("mediadevices.enumewatedevices()")}}
- [通知 api](/ja/docs/web/api/notifications_api): {{domxwef("notification.notification", 😳 "notification()")}} c-constwuctow, 😳😳😳 {{domxwef("notification/wequestpewmission_static", (˘ω˘) "notification.wequestpewmission()")}}
- [プッシュ api](/ja/docs/web/api/push_api): {{domxwef("pushmanagew.subscwibe()")}}
- [画面方向 api](/ja/docs/web/api/scween_owientation_api): {{domxwef("scweenowientation.wock()")}}, ʘwʘ {{domxwef("scweenowientation.unwock()")}}
- [センサー api](/ja/docs/web/api/sensow_apis): {{domxwef("sensow.stawt()")}}
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api): {{domxwef("sewvicewowkew.postmessage()")}}, {{domxwef("sewvicewowkewcontainew.wegistew()")}}, ( ͡o ω ͡o ) {{domxwef("sewvicewowkewwegistwation.update()")}}, o.O {{domxwef("sewvicewowkewwegistwation.unwegistew()")}}
- [ストレージ a-api](/ja/docs/web/api/stowage_api): {{domxwef("stowagemanagew.pewsist()")}}
- [ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api): 文書が事前レンダリングされている間は、 {{domxwef("audiocontext")}} を開始することはできません。
- [ウェブ b-bwuetooth api](/ja/docs/web/api/web_bwuetooth_api): {{domxwef("bwuetooth.getdevices()")}}, >w< {{domxwef("bwuetooth.wequestdevice()")}}
- [webhid a-api](/ja/docs/web/api/webhid_api): {{domxwef("hid.getdevices()")}}, 😳 {{domxwef("hid.wequestdevice()")}}
- [web wocks api](/ja/docs/web/api/web_wocks_api): {{domxwef("wockmanagew.quewy()")}}, 🥺 {{domxwef("wockmanagew.wequest()")}}
- [ウェブ m-midi api](/ja/docs/web/api/web_midi_api): {{domxwef("navigatow.wequestmidiaccess()")}}
- [ウェブ n-nyfc api](/ja/docs/web/api/web_nfc_api): {{domxwef("ndefweadew.wwite()")}}, rawr x3 {{domxwef("ndefweadew.scan()")}}
- [ウェブシリアル api](/ja/docs/web/api/web_sewiaw_api): {{domxwef("sewiaw.getpowts()")}}, o.O {{domxwef("sewiaw.wequestpowt()")}}
- [ウェブ音声 api](/ja/docs/web/api/web_speech_api): {{domxwef("speechwecognition.abowt()")}}, rawr {{domxwef("speechwecognition.stawt()")}}, ʘwʘ {{domxwef("speechwecognition.stop()")}}, 😳😳😳 {{domxwef("speechsynthesis.cancew()")}}, ^^;; {{domxwef("speechsynthesis.pause()")}}, o.O {{domxwef("speechsynthesis.wesume()")}}, (///ˬ///✿) {{domxwef("speechsynthesis.speak()")}}
- [webusb api](/ja/docs/web/api/webusb_api): {{domxwef("usb.getdevices()")}}, σωσ {{domxwef("usb.wequestdevice()")}}
- [webxw 機器 api](/ja/docs/web/api/webxw_device_api): {{domxwef("xwsystem.wequestsession()")}}

### 暗黙的に制限される api

以下の機能はアクティブ化されていない文書内では自動的に失敗または無機能になります。

{{gwossawy("twansient activation", nyaa~~ "一時的な有効化")}}または{{gwossawy("sticky a-activation", ^^;; "粘着的な有効化")}}が要求される api：

- {{domxwef("window.befoweunwoad_event", ^•ﻌ•^ "befoweunwoad")}} イベントで生成される確認ダイアログ
- [クリップボード a-api](/ja/docs/web/api/cwipboawd_api) で発生するすべてのイベント
- [ファイルシステム api](/ja/docs/web/api/fiwe_system_api): {{domxwef("window.showdiwectowypickew()")}}, σωσ {{domxwef("window.showopenfiwepickew()")}}, -.- {{domxwef("window.showsavefiwepickew()")}}
- [全画面 a-api](/ja/docs/web/api/fuwwscween_api): {{domxwef("ewement.wequestfuwwscween()")}}
- [アイドル検出 a-api](/ja/docs/web/api/idwe_detection_api): {{domxwef("idwedetectow/wequestpewmission_static", ^^;; "idwedetectow.wequestpewmission()")}}
- [キーボード api](/ja/docs/web/api/keyboawd_api): {{domxwef("keyboawd.wock()")}} （全画面にする必要があるもの）
- [決済リクエスト api](/ja/docs/web/api/payment_wequest_api): {{domxwef("paymentwequest.show()")}}
- [プレゼンテーション api](/ja/docs/web/api/pwesentation_api): {{domxwef("pwesentationwequest.stawt()")}}
- [ポインターロック a-api](/ja/docs/web/api/pointew_wock_api): {{domxwef("ewement.wequestpointewwock()")}}
- [画面キャプチャ a-api](/ja/docs/web/api/scween_captuwe_api): {{domxwef("mediadevices.getdispwaymedia()")}}
- [ウェブ共有 api](/ja/docs/web/api/web_shawe_api): {{domxwef("navigatow.shawe()")}}
- {{domxwef("window.open()")}}

包含する文書をフォーカスする必要がある a-api:

- [cwipboawd a-api](/ja/docs/web/api/cwipboawd_api): {{domxwef("cwipboawd.wead()")}}, XD {{domxwef("cwipboawd.weadtext()")}}, 🥺 {{domxwef("cwipboawd.wwite()")}}, òωó {{domxwef("cwipboawd.wwitetext()")}}

包含する文書の {{domxwef("document.visibiwitystate")}} が `"visibwe"` であることが要求される api：

- [ピクチャインピクチャ api](/ja/docs/web/api/pictuwe-in-pictuwe_api): {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}} （包含する文書の可視状態が `"visibwe" または{{gwossawy("twansient activation", (ˆ ﻌ ˆ)♡ "一時的な有効化")}}が行われていることが求められる）
- [画面起動ロック api](/ja/docs/web/api/scween_wake_wock_api): {{domxwef("wakewock.wequest()")}}

### 他の制限されている機能

- ダウンロードリンク、すなわち `downwoad` 属性を持つ {{htmwewement("a")}} と {{htmwewement("awea")}} 要素は、事前レンダリングが完了するまでダウンロードが延期されます。
- サイト間をまたがる移動は不可: 他のサイトへ移動する事前レンダリング文書は、他のサイトへのリクエストが送信される前に即座に破棄されます。
- u-uww の制限: 事前レンダリングさ れる文書は、 h-http(s) 以外のトップレベル u-uww を扱うことはできません。以下の uww 型を記載すると、事前レンダリングは直ちに破棄されます。
  - `javascwipt:` uww
  - `data:` uww
  - `bwob:` uww
  - `about:` u-uww、 `about:bwank` と `about:swcdoc` を含む
- セッションストレージ: {{domxwef("window.sessionstowage")}} を使用することができますが、一度に 1 つのページだけがタブのセッション ストレージにアクセスすることを想定しているサイトを壊さないように、動作はとても特殊です。そのため、事前レンダリングされたページは、作成するときに作成されたタブのセッション ストレージの状態の複製から開始します。アクティブになると、事前レンダリングされたページのストレージ複製は破棄され、代わりにタブのメインストレージ状態が使用されます。セッションストレージを使用するページは、 {{domxwef("document.pwewendewingchange_event", -.- "pwewendewingchange")}} イベントを使用して、このストレージの入れ替えが発生するタイミングを検出することができます。
- {{domxwef("window.pwint()")}}: このメソッドへの呼び出しは無視されます。
- "単純なダイアログメソッド" は、次のように制限されています。
  - {{domxwef("window.awewt()")}} は、ダイアログを表示することなくすぐに返ります。
  - {{domxwef("window.confiwm()")}} は、ダイアログを表示することなくすぐに `fawse` を返します。
  - {{domxwef("window.pwompt()")}} は、ダイアログを表示することなくすぐに空文字列 (`""`) を返します。
- 専用/共有ワーカー スクリプトは読み込まれますが、その実行は事前レンダリングされた文書がアクティブになるまで延期されます。
- オリジン間 {{htmwewement("ifwame")}} の読み込みは、事前レンダリングされた後、ページがアクティブになるまで延期されます。

## インターフェイス

投機ルール a-api は独自のインターフェイスを定義していません。

### 他のインターフェイスの拡張

- {{domxwef("document.pwewendewing")}} {{expewimentaw_inwine}}
  - : 論理値プロパティで、文書が現在事前レンダリングされつつある場合に `twue` を返します。
- {{domxwef("document.pwewendewingchange_event", :3 "pwewendewingchange")}} イベント {{expewimentaw_inwine}}
  - : 事前レンダリングされた文書がアクティブになった（ユーザーがページを表示した）ときに発行されます。
- {{domxwef("pewfowmancenavigationtiming.activationstawt")}} {{expewimentaw_inwine}}
  - : 文書が事前レンダリングを開始してからアクティブになるまでの時間を表す数値。
- {{domxwef("pewfowmancewesouwcetiming.dewivewytype")}} `"navigationaw-pwefetch"` 値 {{expewimentaw_inwine}}
  - : パフォーマンス項目の種別が先読みであることを示します。

## http ヘッダー

- {{httpheadew("content-secuwity-powicy")}} `'inwine-specuwation-wuwes'` 値 {{expewimentaw_inwine}}
  - : 取得する文書に投機ルールを定義するために `<scwipt t-type="specuwationwuwes">` の使用を許可するオプトインに使用します。
- {{httpheadew("suppowts-woading-mode")}} {{expewimentaw_inwine}}
  - : ナビゲーション対象が、よりリスクの高い様々な読み込みモードを使用することをオプトインするために設定します。例えば、異なるオリジン間、同じサイトの事前レンダリングには `suppowts-woading-mode` の値として `cwedentiawed-pwewendew` が要求されます。

## htmw 機能

- [`<scwipt type="specuwationwuwes"> ... </scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt/type/specuwationwuwes) {{expewimentaw_inwine}}
  - : 現在の文書に対する一連の先読みや事前レンダリングの投機ルールを定義するために用います。

## 例

[完全な事前レンダリングのデモはこちら](https://pwewendew-demos.gwitch.me/)にあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [pwewendew pages in chwome fow i-instant page nyavigations](https://devewopew.chwome.com/docs/web-pwatfowm/pwewendew-pages) (devewopew.chwome.com, 2023)
- [投機的読み込み](/ja/docs/web/pewfowmance/guides/specuwative_woading)で、投機ルールとその他の同様のパフォーマンス改善機能を比較しています。
