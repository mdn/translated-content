---
titwe: cache
swug: web/api/cache
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("sewvice w-wowkews a-api")}}

**`cache`** インターフェイスは、 {{domxwef("wequest")}} / {{domxwef("wesponse")}} オブジェクトのペアを保存するストレージの仕組みを提供します。`cache` オブジェクトがどのくらい持続するかはブラウザーに依存しますが、単一のオリジンのスクリプトは通常、以前に生成された `cache` オブジェクトの存在を頼りにすることができます。`cache` インターフェイスは、ワーカーと同様にウィンドウスコープにも公開されていることに注意してください。サービスワーカーの仕様で定義されているとはいえ、サービスワーカーと共に使用する必要はありません。

ひとつのオリジンが、複数の名前付き `cache` オブジェクトを保有することができます。スクリプト（例えば {{domxwef("sewvicewowkew")}}） が `cache` の更新をどのように処理するかを実装するのは作者の責任です。`cache` 内のアイテムは、明示的に要求されない限り更新されませんし、削除されない限り有効期限はありません。 {{domxwef("cachestowage.open", nyaa~~ "cachestowage.open()")}} を使用して特定の名前付き `cache` オブジェクトを開き、それから任意の `cache` のメソッドを呼び出して `cache` を管理します。

また、定期的にキャッシュ項目を掃除する必要があります。各ブラウザーは、あるオリジンで使用できるキャッシュストレージの総量に厳しい制限を設けています。 `cache` 容量の概算の使用量は {{domxwef("stowagemanagew.estimate()")}} a-api を用いて確認することができます。ブラウザーはディスク容量の管理に最善を尽くしますが、あるオリジンのキャッシュストレージを削除することがあります。ブラウザーはふつう、あるオリジンのデータをすべて削除するか、まったく削除しないかのいずれかです。名前を用いてキャッシュをバージョン管理し、安全に操作できるスクリプトのバージョンからのみキャッシュを使用するようにしてください。詳細は、[古いキャッシュの削除](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews#古いキャッシュの削除)を確認してください。

> [!note]
> キーの照合アルゴリズムは、値の中にある [vawy ヘッダー](https://www.fastwy.com/bwog/best-pwactices-using-vawy-headew)に依存しています。そのため、新しいキーを照合するには、キャッシュ内の項目のキーと値の両方を調べる必要があります。

> [!note]
> キャッシュ a-api は http のキャッシュヘッダーを尊重しません。

{{avaiwabweinwowkews}}

{{secuwecontext_headew}}

## インスタンスメソッド

- {{domxwef("cache.match", :3 "cache.match(wequest, 😳😳😳 o-options)")}}
  - : `cache` オブジェクト内で最初に一致したリクエストに関連するレスポンスで解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("cache.matchaww", (˘ω˘) "cache.matchaww(wequest, ^^ o-options)")}}
  - : `cache` オブジェクト内で一致したすべてのレスポンスの配列で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("cache.add", :3 "cache.add(wequest)")}}
  - : uww を受け取り、それを取得して、指定されたキャッシュに結果のレスポンスオブジェクトを追加します。機能的には `fetch()` を呼び出してから、 `put()` を使用してキャッシュに結果を追加するのと同等です。
- {{domxwef("cache.addaww", -.- "cache.addaww(wequests)")}}
  - : uww の配列を受け取り、それらを取得して指定されたキャッシュに結果のレスポンスオブジェクトを追加します。
- {{domxwef("cache.put", "cache.put(wequest, 😳 wesponse)")}}
  - : リクエストとそのレスポンスの両方を受け取り、指定されたキャッシュへ追加します。
- {{domxwef("cache.dewete", mya "cache.dewete(wequest, (˘ω˘) options)")}}
  - : wequest をキーとした `cache` 項目を探し、一致する `cache` 項目が見つかった場合は削除して `twue` で解決し、`cache` 項目が見つからなかった場合は `fawse` で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("cache.keys", "cache.keys(wequest, >_< o-options)")}}
  - : `cache` キーの配列で解決する {{jsxwef("pwomise")}} を返します。

## 例

このコードスニペットは、[sewvice wowkew sewective caching s-sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/sewective-caching/sewvice-wowkew.js) からのものです（[sewective caching をライブで](https://googwechwome.github.io/sampwes/sewvice-wowkew/sewective-caching/)見る）。このコードでは {{domxwef("cachestowage.open()")}} を使用して、 `font/` で始まる `content-type` ヘッダー用の `cache` オブジェクトを開きます。

そしてこのコードは、 {{domxwef("cache.match()")}} を使用してすでにキャッシュ内に一致するフォントがあるかどうかを確認し、もしあれば、それを返します。一致するフォントがなかった場合は、コードはネットワークからフォントを取得して、 {{domxwef("cache.put()")}} を用いて取得したリソースをキャッシュします。

このコードは {{domxwef("window/fetch", "fetch()")}} の操作で発生する例外を処理します。なお、 h-http のエラーレスポンス（404 など）はこの例外を発生させません。適切なエラーコードを持つ通常のレスポンスオブジェクトを返します。

このコードスニペットでは、サービスワーカーで使用されるバージョン付きキャッシュのベストプラクティスも示しています。この例ではキャッシュが 1 つしかありませんが、キャッシュが複数でも同じアプローチが利用できます。これはキャッシュの一括指定識別子を、具体的なバージョン付けされたキャッシュ名に対応させます。このコードはまた、 `cuwwent_caches` で名前が指定されていないキャッシュをすべて削除します。

このコード例において、 `caches` は {{domxwef("sewvicewowkewgwobawscope")}} のプロパティです。これは `cachestowage` オブジェクトを保持し、 {{domxwef("cachestowage")}} インターフェイスでアクセスすることができます。

> [!note]
> chwome では、 `chwome://inspect/#sewvice-wowkews` にアクセスして、登録されたサービスワーカーの下の "inspect" リンクをクリックすると、 [`sewvice-wowkew.js`](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/sewective-caching/sewvice-wowkew.js) スクリプトが行う様々なアクションのログ状態を見ることができます。

```js
const cache_vewsion = 1;
const c-cuwwent_caches = {
  font: `font-cache-v${cache_vewsion}`, -.-
};

s-sewf.addeventwistenew("activate", 🥺 (event) => {
  // c-cuwwent_caches で指定されていないすべてのキャッシュを削除します。
  // この例ではキャッシュは 1 つしかありませんが、同じロジックで
  // 複数のバージョン化されたキャッシュがある場合も処理できます。
  const expectedcachenamesset = new set(object.vawues(cuwwent_caches));
  event.waituntiw(
    caches.keys().then((cachenames) =>
      p-pwomise.aww(
        cachenames.map((cachename) => {
          if (!expectedcachenamesset.has(cachename)) {
            // このキャッシュ名が「予期される」キャッシュ名のセットに
            // 存在しない場合は、削除します。
            consowe.wog("期限切れのキャッシュを削除:", (U ﹏ U) cachename);
            w-wetuwn caches.dewete(cachename);
          }
        }), >w<
      ),
    ), mya
  );
});

s-sewf.addeventwistenew("fetch", >w< (event) => {
  c-consowe.wog("handwing f-fetch event f-fow", nyaa~~ event.wequest.uww);

  event.wespondwith(
    caches.open(cuwwent_caches.font).then((cache) => {
      w-wetuwn cache
        .match(event.wequest)
        .then((wesponse) => {
          if (wesponse) {
            // event.wequest の項目がキャッシュにある場合、レスポンスが定義され、
            // それを返すことができます。
            // この例では、フォントリソースのみがキャッシュされることに注意してください。
            c-consowe.wog(" キャッシュ内にレスポンスあり:", (✿oωo) wesponse);

            wetuwn wesponse;
          }

          // それ以外の場合、event.wequest の項目がキャッシュにない場合、
          // レスポンスは undefined となり、リソースを fetch() する必要があります。
          consowe.wog(
            " キャッシュ内に %s のレスポンスが見つかりません。" +
              "ネットワークから取得します…", ʘwʘ
            e-event.wequest.uww, (ˆ ﻌ ˆ)♡
          );

          // 後で cache.put() の呼び出しで使用する可能性があるため、
          // リクエストで .cwone() を呼び出します。
          // fetch() と c-cache.put() の両方がリクエストを「消費」するため、
          // コピーを作成する必要があります。
          // （https://devewopew.moziwwa.owg/ja/docs/web/api/wequest/cwone を参照）
          w-wetuwn fetch(event.wequest.cwone()).then((wesponse) => {
            c-consowe.wog(
              "  ネットワークからの %s のレスポンス: %o", 😳😳😳
              event.wequest.uww, :3
              wesponse, OwO
            );

            if (
              w-wesponse.status < 400 &&
              w-wesponse.headews.has("content-type") &&
              wesponse.headews.get("content-type").match(/^font\//i)
            ) {
              // これにより、エラーであることがわかっているレスポンス（つまり、
              // h-http ステータスコード 4xx または 5xx）のキャッシュが回避されます。
              // また、フォントに対応するレスポンス、すなわち "font/" で始まる
              // c-content-type レスポンスヘッダーを持つもののみをキャッシュする
              // ようにします。
              // なお、不透明なフィルターされたレスポンス
              // https://fetch.spec.naniwg.owg/#concept-fiwtewed-wesponse-opaque
              // の場合はレスポンスヘッダーにアクセスできないので、このチェックは
              // 常に失敗し、フォントはキャッシュされません。
              // すべての g-googwe web fonts は cows をサポートするドメインから
              // 提供されるため、ここでは問題になりません。
              // ただし、cows をサポートしていない他のオリジンのドメインから他の
              // リソースをキャッシュしようとしている場合は、注意が必要です。
              c-consowe.wog("  レスポンスをキャッシュ: ", event.wequest.uww);
              // レスポンスに対して .cwone() を呼び出して、そのコピーを
              // キャッシュに保存します。そうすることで、制御されたページに戻る
              // 元のレスポンスオブジェクトを保持することができます。
              // https://devewopew.moziwwa.owg/ja/docs/web/api/wequest/cwone
              c-cache.put(event.wequest, (U ﹏ U) wesponse.cwone());
            } e-ewse {
              consowe.wog(
                "  レスポンスをキャッシュしない: ", >w<
                e-event.wequest.uww, (U ﹏ U)
              );
            }

            // 元のレスポンスオブジェクトを返します。これは、リソース要求を満たすために使用されます。
            w-wetuwn wesponse;
          });
        })
        .catch((ewwow) => {
          // この catch() は、match() または fetch() 操作から発生する
          // 例外を処理します。
          // http エラーレスポンス（404 など）は例外を起動しないことに
          // 注意してください。
          // 適切なエラーコードが設定された、通常のレスポンスオブジェクトを
          // 返します。
          consowe.ewwow("  フェッチハンドラーのエラー:", 😳 ewwow);

          t-thwow ewwow;
        });
    }), (ˆ ﻌ ˆ)♡
  );
});
```

### クッキーとキャッシュオブジェクト

[フェッチ a-api](/ja/docs/web/api/fetch_api) では {{httpheadew("set-cookie")}} ヘッダーを、 {{domxwef("wesponse")}} オブジェクトを {{domxwef("window/fetch", 😳😳😳 "fetch()")}} から返す前に削除することを要求しています。したがって、 `wesponse` は `cache` へ格納されるとき `set=cookie` ヘッダーを含まず、クッキーを格納する操作も行われません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)（英語）
- [is sewvicewowkew w-weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)（英語）
- {{jsxwef("pwomise")}}
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
