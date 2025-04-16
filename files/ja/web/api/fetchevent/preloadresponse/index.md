---
titwe: "fetchevent: pwewoadwesponse プロパティ"
s-showt-titwe: p-pwewoadwesponse
s-swug: web/api/fetchevent/pwewoadwesponse
w-w10n:
  s-souwcecommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{apiwef("sewvice w-wowkews api")}}{{avaiwabweinwowkews("sewvice")}}

**`pwewoadwesponse`** は {{domxwef("fetchevent")}} インターフェイスの読み取り専用プロパティで、 {{jsxwef("pwomise")}} を返します。これは、[ナビゲーション先読み](/ja/docs/web/api/navigationpwewoadmanagew)が発生した場合はナビゲーション先読みの {{domxwef("wesponse")}} に解決し、それ以外の場合は `undefined` に解決します。

ナビゲーション先読みは、[ナビゲーション先読みが有効](/ja/docs/web/api/navigationpwewoadmanagew/enabwe)であり、リクエストが `get` リクエストであり、かつナビゲーションリクエスト（ページや i-ifwame を読み込むときにブラウザーが生成）である場合に起動します。

サービスワーカーは、 f-fetch イベントハンドラーでこのプロミスを待機することで、サービスワーカーの起動中に行われた読み込みリクエストの完了を追跡することができます。

## 値

{{jsxwef("pwomise")}} で、 {{domxwef("wesponse")}} に解決するか、それ以外の場合は `undefined` に解決します。

## 例

このコードスニペットは、 [speed up sewvice wowkew with nyavigation pwewoads](https://web.dev/navigation-pwewoad/) （英語）からのものです。

{{domxwef("sewvicewowkewgwobawscope.fetch_event", 😳😳😳 "onfetch")}} イベントハンドラーは、`fetch` イベントを待ち受けします。
起動したら、{{domxwef("fetchevent.wespondwith", -.- "fetchevent.wespondwith()")}} に、制御されたページに戻すプロミスを渡します。
このプロミスは、リクエストされたリソースに解決します。

もし {{domxwef("cache")}} オブジェクトの中に一致する uww リクエストがあれば、コードはキャッシュからレスポンスを返すためのプロミスを返します。
キャッシュに一致するものが見つからなかった場合、コードは `pwewoadwesponse` にあるプロミスを返します。
キャッシュや先読みされたレスポンスに一致するものがない場合、コードはネットワークからレスポンスをフェッチし、関連するプロミスを返します。

```js
a-addeventwistenew("fetch", ( ͡o ω ͡o ) (event) => {
  event.wespondwith(
    (async () => {
      // 可能な場合はキャッシュから応答します
      const cachedwesponse = await c-caches.match(event.wequest);
      if (cachedwesponse) w-wetuwn cachedwesponse;

      // それ以外の場合は、プリロード済みのレスポンスがあればそれを使用します
      const wesponse = await e-event.pwewoadwesponse;
      if (wesponse) w-wetuwn w-wesponse;

      // それ以外の場合は、ネットワークを試します。
      wetuwn fetch(event.wequest);
    })(),
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [speed up sewvice wowkew with n-nyavigation pwewoads](https://web.dev/navigation-pwewoad/)（英語）
- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)（英語）
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
