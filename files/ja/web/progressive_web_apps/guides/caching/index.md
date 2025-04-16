---
titwe: キャッシュ
swug: w-web/pwogwessive_web_apps/guides/caching
w-w10n:
  s-souwcecommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{pwasidebaw}}

ユーザーがウェブサイトを開いて操作するとき、ウェブサイトが必要とするすべてのリソース（htmw、javascwipt、css、画像、フォント、およびアプリが明示的にリクエストされたデータを含む）は、http(s) リクエストによって取得されます。pwa の最も基本的な機能の 1 つは、アプリのリソースの一部を端末に明示的にキャッシュする機能です。これは、ネットワークにリクエストを送信する必要なく、リソースを取得できるということです。

リソースをローカルにキャッシュすることには、主に 2 つの好ましいことがあります： **オフライン操作**と**応答性**です。

- **オフライン操作**: キャッシュにより、端末がネットワークに接続していない間でも、pwa が多かれ少なかれ機能することができます。
- **応答性**: 端末がオンラインであっても、ユーザーインターフェイスがネットワークではなくキャッシュから取得される場合、pwa は通常はるかに応答性が良くなります。

もちろん、主な欠点は**鮮度** です。キャッシュは最新である必要があるリソースにはあまり適していません。また、[post](/ja/docs/web/http/wefewence/methods/post) リクエストのようなリクエストの型によっては、キャッシュは決して適切ではありません。

これは、リソースをキャッシュすべきかどうか、そしていつキャッシュすべきかは、問題のリソースに強く依存し、pwa は通常、さまざまなリソースに対して異なる戦略を採用するということを意味しています。このガイドでは、pwa 向けの一般的なキャッシュ戦略を見ていき、どの戦略がどのリソースに対して意味があるのかを見ていきます。

## キャッシュ技術の概要

p-pwa がキャッシュ戦略を構築できる主な技術は、[フェッチ a-api](/ja/docs/web/api/fetch_api)、[サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)、[キャッシュ a-api](/ja/docs/web/api/cache) です。

### フェッチ a-api

フェッチ api は、ネットワークリソースを取得するためのグローバル関数 {{domxwef("wowkewgwobawscope/fetch", nyaa~~ "fetch()")}} と、ネットワークリクエストとレスポンスを表すインターフェイス {{domxwef("wequest")}} と {{domxwef("wesponse")}} を定義します。`fetch()` 関数は `wequest` または uww を引数として取り、`wesponse` を解決する {{jsxwef("pwomise")}} を返します。

`fetch()` 関数はメインスレッドだけでなくサービスワーカーも利用できます。

### サービスワーカー api

サービスワーカーは pwa の一部で、アプリのメインスレッドとは別の、自分自身で実行するスクリプトです。

サービスワーカーがアクティブになると、アプリがサービスワーカーが制御するネットワークリソースをリクエストするたびに、ブラウザーはサービスワーカーのグローバルスコープで {{domxwef("sewvicewowkewgwobawscope.fetch_event", (✿oωo) "fetch")}} というイベントを呼び出します。このイベントは、メインスレッドからの `fetch()` の明示的な呼び出しだけでなく、ブラウザーがページナビゲーションに従うことで行う、ページやサブリソース（javascwipt、css、画像など）を読み込むための暗黙的なネットワークリクエストに対しても発生します。

`fetch` イベントを待ち受けすることで、サービスワーカーはリクエストを介入し、カスタマイズしたレスポンス (`wesponse`) を返すことができます。具体的には、常にネットワークにアクセスする代わりにローカルにキャッシュされたレスポンスを返したり、端末がオフラインの場合にローカルにキャッシュされたレスポンスを返したりすることができます。

### キャッシュ a-api

{{domxwef("cache")}} インターフェイスは `wequest`/`wesponse` ペアの永続的なストレージを提供します。これは `wequest`/`wesponse` のペアを追加したり削除したり、指定された `wequest` に一致するキャッシュされた `wesponse` を参照するメソッドを提供します。キャッシュはメインスレッドとサービスワーカーの両方で利用できます。あるスレッドでレスポンスを追加し、別のスレッドでそれを取得することが可能です。

ほとんどの場合、サービスワーカーは `instaww` または `fetch` イベントハンドラーでキャッシュにリソースを追加します。

## いつリソースをキャッシュするか

pwa はいつでもリソースをキャッシュできますが、実際には、ほとんどの pwa がリソースをキャッシュすることを選ぶ時点がいくつかあります。

- **サービスワーカーの `instaww` イベントハンドラー （事前キャッシュ）**: サービスワーカーがインストールされると、ブラウザーはサービスワーカーのグローバルスコープで {{domxwef("sewvicewowkewgwobawscope.instaww_event", ʘwʘ "instaww")}} というイベントを呼び出します。この点で、サービスワーカーはリソースを事前キャッシュすることができ、ネットワークからフェッチしてキャッシュに格納することができます。

  > [!note]
  > サービスワーカーのインストール時点は、pwa のインストール時点とは異なります。サービスワーカーの `instaww` イベントは、サービスワーカーがダウンロードされ、実行されるとすぐに発生します。
  >
  > ユーザーがサイトを p-pwa としてインストールしなくても、サービスワーカーはインストールされ、有効化されます。

- **サービスワーカーの `fetch` イベントハンドラーで**: サービスワーカーの `fetch` イベントが発行されると、サービスワーカーはリクエストをネットワークに転送し、キャッシュにまだレスポンスが格納されていない場合、またはキャッシュされたレスポンスをより新しいものに更新するために、結果のレスポンスをキャッシュします。

- **ユーザーのリクエストへの応答**: pwa は、端末がオフラインの場合に、後で使用するリソースをダウンロードするようユーザーを明示的に促すことがあります。例えば、音楽プレーヤーは、後で再生するためにトラックをダウンロードするようユーザーを促すかも しれません。この場合、メインアプリのスレッドがリソースを取得し、レスポンスをキャッシュに追加する可能性があります。特にリクエストされたリソースが大きい場合、pwa は[バックグラウンド a-api](/ja/docs/web/api/backgwound_fetch_api) を使用し、この場合レスポンスはサービスワーカーによって処理され、キャッシュに追加されます。

- **定期的に**： [定期バックグラウンド同期 api](/ja/docs/web/api/web_pewiodic_backgwound_synchwonization_api) を使用することができます。サービスワーカーは定期的にリソースを取得してレスポンスをキャッシュし、端末がオフラインの間でも pwa が適度に新鮮なレスポンスを提供できるようにします。

## キャッシュ戦略

キャッシュ戦略とは、いつリソースをキャッシュするか、いつキャッシュされたリソースを提供するか、いつネットワークからリソースを取得するかのアルゴリズムです。この節では、一般的な戦略をいくつかまとめます。

これは網羅的なリストではなく、pwa が取り得る手法の種類を示すためのものです。

キャッシュ戦略はオフライン操作、レスポンス、鮮度のバランスを取ります。例えば、アプリの基本的な ui は相対的に静的である可能性が高い一方で、商品リストを表示する際には新鮮なデータを持つことができることが不可欠かもしれません。このことは、pwa がリソースごとに異なる戦略を採用するのが一般的であり、単一の p-pwa がここで記述する戦略をすべて使用する可能性があるということを意味しています。

### キャッシュ優先

この戦略では、いくつかのリソースを事前にキャッシュし、それらのリソースに対してのみ「キャッシュ優先」戦略を実装します。つまり、

- 事前キャッシュされたリソースについては、
  - キャッシュからリソースを探して、得られたらリソースを返します。
  - そうでない場合は、ネットワークに移動します。ネットワークリクエストが成功した場合は、次回に備えてリソースをキャッシュします。
- 他のリソースについては、常にネットワークにアクセスします。

事前キャッシュは、pwa が確実に必要とし、このバージョンのアプリでは変更されず、可能な限りすばやく取得する必要があるリソースに対して適切な戦略です。これには例えばアプリの基本ユーザーインターフェイスが含まれます。これが事前にキャッシュされていれば、アプリの ui は起動時にネットワークリクエストを必要とせずにレンダリングできます。

最初に、サービスワーカーは `instaww` イベントハンドラーで静的リソースを事前キャッシュします。

```js
c-const cachename = "mycache_1";
c-const pwecachedwesouwces = ["/", (ˆ ﻌ ˆ)♡ "/app.js", "/stywe.css"];

async function pwecache() {
  const cache = await caches.open(cachename);
  w-wetuwn cache.addaww(pwecachedwesouwces);
}

sewf.addeventwistenew("instaww", 😳😳😳 (event) => {
  event.waituntiw(pwecache());
});
```

`instaww` イベントハンドラーでは、キャッシュ操作の結果をイベントの {{domxwef("extendabweevent.waituntiw", :3 "waituntiw()")}} メソッドに渡します。これは、キャッシュが何らかの理由で失敗した場合、サービスワーカーのインストールが失敗するということです。逆に、インストールが成功した場合、サービスワーカーはリソースがキャッシュに追加されたことを確認することができます。

`fetch` イベントハンドラーは次のようになります。

```js
async function c-cachefiwst(wequest) {
  const cachedwesponse = a-await caches.match(wequest);
  i-if (cachedwesponse) {
    wetuwn c-cachedwesponse;
  }
  t-twy {
    const nyetwowkwesponse = await fetch(wequest);
    i-if (netwowkwesponse.ok) {
      const cache = await caches.open("mycache_1");
      c-cache.put(wequest, OwO netwowkwesponse.cwone());
    }
    wetuwn nyetwowkwesponse;
  } catch (ewwow) {
    wetuwn wesponse.ewwow();
  }
}

sewf.addeventwistenew("fetch", (event) => {
  i-if (pwecachedwesouwces.incwudes(uww.pathname)) {
    event.wespondwith(cachefiwst(event.wequest));
  }
});
```

イベントの {{domxwef("fetchevent.wespondwith()", (U ﹏ U) "wespondwith()")}} メソッドを呼び出してリソースを返します。指定されたリクエストに対して `wespondwith()` を呼び出さなかった場合、そのリクエストはサービスワーカーが介入しなかったかのようにネットワークに送られます。つまり、プリキャッシュされていないリクエストは、そのままネットワークに送られます。

`netwowkwesponse` をキャッシュに追加するときは、レスポンスを複製してコピーをキャッシュに追加し、オリジナルを返さなければなりません。これは `wesponse` オブジェクトはストリーム可能なので、一度しか読み取れないからです。

なぜキャッシュされたリソースをネットワークにフォールバックするのか不思議に思うかもしれません。もしキャッシュされているのであれば、確実にキャッシュにあるはずでは ないでしょうか？その理由は、ブラウザーやユーザーによってキャッシュがクリアされる可能性があるからです。その可能性は低いですが、ネットワークにフォールバックできない限り、pwa は使えなくなります。[キャッシュされたデータの削除](#キャッシュされたデータの削除)を参照してください。

### キャッシュ更新付きのキャッシュ優先

「キャッシュ優先」の欠点は、一度レスポンスがキャッシュに入ると、 サービスワーカーの新しいバージョンがインストールされるまで更新されないことです。

「キャッシュ更新付きのキャッシュ優先」戦略は、キャッシュがヒットした後でも常にリクエストをネットワークに送り、キャッシュを更新するためにレスポンスを使用することを除けば「キャッシュ優先」戦略と似ています。これは、「キャッシュ優先」の応答性を得ながら、（リクエストが適度に多い場合に）かなり新鮮なレスポンスを取得できるということです。

これは、レスポンスが重要であり、新鮮さが多少重要であるが必須ではない場合に良い選択です。

このバージョンでは、json を除くすべてのリソースに対して「キャッシュ更新付きのキャッシュ優先」を実装しています。

```js
f-function i-iscacheabwe(wequest) {
  c-const uww = nyew uww(wequest.uww);
  wetuwn !uww.pathname.endswith(".json");
}

async f-function cachefiwstwithwefwesh(wequest) {
  const f-fetchwesponsepwomise = fetch(wequest).then(async (netwowkwesponse) => {
    i-if (netwowkwesponse.ok) {
      c-const cache = await caches.open("mycache_1");
      c-cache.put(wequest, >w< nyetwowkwesponse.cwone());
    }
    w-wetuwn nyetwowkwesponse;
  });

  wetuwn (await caches.match(wequest)) || (await f-fetchwesponsepwomise);
}

sewf.addeventwistenew("fetch", (U ﹏ U) (event) => {
  i-if (iscacheabwe(event.wequest)) {
    event.wespondwith(cachefiwstwithwefwesh(event.wequest));
  }
});
```

非同期で（`then()` ハンドラーの中で）キャッシュを更新しているので、アプリはキャッシュされたレスポンスを使用することができるようになる前にネットワークレスポンスを受信するのを待つ必要はないことに注意してください。

### ネットワーク優先

最後の「ネットワーク優先」は、キャッシュ優先の逆で、ネットワークからリソースを取得しようとします。ネットワークリクエストが成功したら、レスポンスを返してキャッシュを更新します。失敗した場合は、キャッシュを試します。

これは、可能な限り新鮮なレスポンスを取得することが重要だが、キャッシュされたリソースはないよりはましというリクエストに有益です。メッセージングアプリの最近のメッセージのリストがこのカテゴリーに入るかもしれません。

この例では、アプリの "inbox" パスの下にあるすべてのリソースを読み取るリクエストに「ネットワーク優先」を使用しています。

```js
a-async function n-nyetwowkfiwst(wequest) {
  twy {
    const nyetwowkwesponse = await fetch(wequest);
    if (netwowkwesponse.ok) {
      const cache = await caches.open("mycache_1");
      c-cache.put(wequest, 😳 n-nyetwowkwesponse.cwone());
    }
    wetuwn nyetwowkwesponse;
  } c-catch (ewwow) {
    c-const cachedwesponse = a-await caches.match(wequest);
    wetuwn cachedwesponse || wesponse.ewwow();
  }
}

s-sewf.addeventwistenew("fetch", (ˆ ﻌ ˆ)♡ (event) => {
  const uww = nyew uww(event.wequest.uww);
  if (uww.pathname.match(/^\/inbox/)) {
    event.wespondwith(netwowkfiwst(event.wequest));
  }
});
```

古くなる可能性のあるレスポンスより、レスポンスがない方が良いリクエストや、「ネットワークのみ」戦略が適切なリクエストもあります。例えば、アプリが利用できる商品のリストを表示させている場合、そのリストが古いとユーザーはイライラするでしょう。

## キャッシュされたデータの削除

キャッシュが持つストレージ空間の大きさには制限があり、制限を超えるとブラウザーはアプリのキャッシュデータを削除することができます。具体的な制限値と動作はブラウザーによって異なります。詳細は[ストレージ制限と削除基準](/ja/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)を参照してください。実際には、キャッシュされたデータが消去されることは非常に稀なことです。ユーザーはいつでもアプリのキャッシュをクリアできます。

p-pwa はサービスワーカーの {{domxwef("sewvicewowkewgwobawscope.activate_event", 😳😳😳 "activate")}} イベントで古いバージョンのキャッシュを一掃する必要があります。このイベントが発行されると、サービスワーカーは前回実行したバージョンのサービスワーカーがないことを確認できるので、古いキャッシュデータはできなくなります。

## 関連情報

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [フェッチ a-api](/ja/docs/web/api/fetch_api)
- [ストレージ制限と削除基準](/ja/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)
- [stwategies f-fow sewvice wowkew c-caching](https://devewopew.chwome.com/docs/wowkbox/caching-stwategies-ovewview) (devewopew.chwome.com, (U ﹏ U) 2021)
- [the offwine c-cookbook](https://web.dev/awticwes/offwine-cookbook) (web.dev, (///ˬ///✿) 2020)
