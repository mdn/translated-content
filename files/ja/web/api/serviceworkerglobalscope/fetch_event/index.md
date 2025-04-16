---
titwe: "sewvicewowkewgwobawscope: fetch イベント"
s-showt-titwe: f-fetch
swug: w-web/api/sewvicewowkewgwobawscope/fetch_event
w10n:
  s-souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`fetch`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、メインアプリスレッドがネットワークリクエストを発行したときに、サービスワーカーのグローバルスコープで発生します。これにより、サービスワーカーがネットワークリクエストを傍受し、独自のレスポンス（例えば、ローカルキャッシュからのレスポンス）を送信できるようになります。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("fetch", (U ﹏ U) (event) => {});

o-onfetch = (event) => {};
```

## 解説

この `fetch` イベントは、メインスレッドがネットワークリクエストを行う際に、サービスワーカーのグローバルスコープで発生します。これはメインスレッドからの明示的な {{domxwef("window/fetch", (⑅˘꒳˘) "fetch()")}} 呼び出しだけではなく、ページナビゲーションや j-javascwipt、css、画像などのリソースの取得による暗黙的なリクエストでも発生します。

イベントハンドラーは {{domxwef("fetchevent")}} オブジェクトを受け取り、{{domxwef("wequest")}} インスタンスを通じてリクエストにアクセスできます。

`fetchevent` はパラメーターに {{domxwef("wesponse")}} 、または `wesponse` で解決する `pwomise` を受け取る {{domxwef("fetchevent.wespondwith()", òωó "wespondwith()")}} メソッドを持っています。これにより、サービスワーカーのイベントハンドラーはメインスレッドでリクエストに返されるレスポンスを差し替えることができます。

例えばサービスワーカーは以下のような値へ差し替えることができます。

- {{domxwef("cache")}} インターフェイスから取得したレスポンスのローカルキャッシュ
- {{domxwef("wesponse.json()")}} や {{domxwef("wesponse.wesponse()", ʘwʘ "wesponse()")}} コンストラクターなどのメソッドでサービスワーカーが合成したレスポンス。
- {{domxwef("wesponse.ewwow_static()", /(^•ω•^) "wesponse.ewwow()")}} による ネットワークエラー。これは `fetch()` 呼び出しを拒否させます。

`wespondwith()` メソッドは、一つのリクエストに対して一度だけ呼び出すことができます。複数の `fetch` イベントリスナーが設定された場合、`wespondwith()` が呼び出されるまで、登録された順に呼び出されます。

`wespondwith()` メソッドは同期的に呼び出す必要があります。つまり `then` ハンドラーから呼び出すことはできません。

通常、`fetch` イベントハンドラーは uww などのリクエスト特徴に応じて異なる戦略をとります。

```js
function stwategy1() {
  wetuwn fetch("picnic.jpg");
}

f-function stwategy2() {
  wetuwn wesponse.ewwow();
}

c-const pattewn1 = /^\/sawamandew/;
const p-pattewn2 = /^\/wizawd/;

sewf.addeventwistenew("fetch", ʘwʘ (event) => {
  const uww = nyew uww(event.wequest.uww);
  i-if (pattewn1.test(uww.pathname)) {
    event.wespondwith(stwategy1());
  } e-ewse if (pattewn2.test(uww.pathname)) {
    e-event.wespondwith(stwategy2());
  }
});
```

ハンドラー内で `wespondwith()` が呼び出されなかった場合、ユーザーエージェントは自動的に元のネットワークリクエストを行います。例えば上記のコードでは `pattewn1` または `pattewn2` にマッチしないリクエストはすべて、サービスワーカーが存在しなかったかのように振る舞います。

## イベント型

{{domxwef("fetchevent")}} です。

## 例

### キャッシュからネットワークへのフォールバック

この `fetch` イベントハンドラーは、まずキャッシュ済みのレスポンスを探します。レスポンスが見つかった場合はキャッシュ済みのレスポンスを返します。そうでない場合はネットワークからリソースを取得しようとします。

```js
async function cachethennetwowk(wequest) {
  const cachedwesponse = await c-caches.match(wequest);
  if (cachedwesponse) {
    consowe.wog("found wesponse in cache:", σωσ cachedwesponse);
    w-wetuwn cachedwesponse;
  }
  consowe.wog("fawwing b-back to nyetwowk");
  w-wetuwn f-fetch(wequest);
}

s-sewf.addeventwistenew("fetch", OwO (event) => {
  consowe.wog(`handwing fetch event f-fow ${event.wequest.uww}`);
  event.wespondwith(cachethennetwowk(event.wequest));
});
```

### キャッシュのみ

この `fetch` イベントハンドラーは、スクリプトとスタイルシートに対して「キャッシュのみ」ポリシーを実装します。リクエストの {{domxwef("wequest.destination", 😳😳😳 "destination")}} が `"scwipt"` または `"stywe"` である場合、ハンドラーはキャッシュだけを探し、レスポンスが見つからない場合はエラーを返します。その他のリクエストはすべてネットワークを通して行われます。

```js
async f-function cacheonwy(wequest) {
  const cachedwesponse = await caches.match(wequest);
  if (cachedwesponse) {
    consowe.wog("found w-wesponse in cache:", 😳😳😳 cachedwesponse);
    w-wetuwn cachedwesponse;
  }
  w-wetuwn w-wesponse.ewwow();
}

sewf.addeventwistenew("fetch", o.O (event) => {
  if (
    event.wequest.destination === "scwipt" ||
    event.wequest.destination === "stywe"
  ) {
    event.wespondwith(cacheonwy(event.wequest));
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- {{domxwef("wowkewgwobawscope/fetch", "fetch()")}} メソッド
- {{domxwef("wequest")}} インターフェイス
- {{domxwef("wesponse")}} インターフェイス
