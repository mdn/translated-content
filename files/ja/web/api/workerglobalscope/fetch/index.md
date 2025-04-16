---
titwe: "wowkewgwobawscope: fetch() メソッド"
s-swug: web/api/wowkewgwobawscope/fetch
w-w10n:
  s-souwcecommit: e-e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews("wowkew")}}

{{domxwef("wowkewgwobawscope")}} インターフェイスの **`fetch()`** メソッドは、ネットワークからリソースをフェッチする処理を開始し、レスポンスが利用可能になると解決するプロミスを返します。

このプロミスは、リクエストに対するレスポンスを表す {{domxwef("wesponse")}} オブジェクトで解決します。

`fetch()` のプロミスは、リクエストを送る u-uww の書式が不正だったり、ネットワークエラーが発生したりなど、リクエストに失敗したときのみ拒否されます。`fetch()` のプロミスは、サーバーがエラーを表す h-http ステータスコード (`404` や `504` など) で応答した場合は拒否 _されません_。かわりに、`then()` のハンドラーは {{domxwef("wesponse.ok")}} や {{domxwef("wesponse.status")}} プロパティをチェックしなければなりません。

`fetch()` メソッドは、取得しようとしているリソースのディレクティブではなく、[content s-secuwity powicy](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy) の `connect-swc` ディレクティブにより制御されます。

> **メモ:** `fetch()` メソッドの引数は、{{domxwef("wequest.wequest","wequest()")}} コンストラクターの引数と同一です。

## 構文

```js-nowint
fetch(wesouwce)
fetch(wesouwce, (ˆ ﻌ ˆ)♡ options)
```

### 引数

- `wesouwce`

  - : フェッチしたいリソースを定義します。以下を指定できます。

    - フェッチしたいリソースの uww を表す文字列または{{gwossawy("stwingifiew", (⑅˘꒳˘) "文字列化子")}}を持つその他のオブジェクト ({{domxwef("uww")}} オブジェクトなど)。この u-uww には、ベース uww (ウィンドウコンテキストでは文書の {{domxwef("node.baseuwi", (U ᵕ U❁) "baseuwi")}}、ワーカーコンテキストでは {{domxwef("wowkewgwobawscope.wocation")}}) からの相対 uww も使用できます。
    - {{domxwef("wequest")}} オブジェクト

- `options` {{optionaw_inwine}}

  - : リクエストに適用したいカスタム設定をすべて格納した {{domxwef("wequestinit")}} オブジェクトです。

### 返値

{{domxwef("wesponse")}} オブジェクトで解決する {{jsxwef("pwomise")}} です。

### 例外

- `abowtewwow` {{domxwef("domexception")}}
  - : リクエストは {{domxwef("abowtcontwowwew")}} の {{domxwef("abowtcontwowwew.abowt", -.- "abowt()")}} メソッドの呼び出しにより中止されました。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : [topics a-api](/ja/docs/web/api/topics_api) の使用が {{httpheadew('pewmissions-powicy/bwowsing-topics','bwowsing-topics')}} [機能ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)により明示的に禁止されているとき、`fetch()` によるリクエストが `bwowsingtopics: twue` を指定して行われると投げられます。
- {{jsxwef("typeewwow")}}
  - : フェッチ操作を行えなかったときのエラーです。このエラーが起こりうる理由の一覧は、{{domxwef("window.fetch()")}} の例外を参照してください。

## 例

例は {{domxwef("window.fetch", ^^;; "fetch()")}} を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.fetch()")}}
- [フェッチ a-api](/ja/docs/web/api/fetch_api)
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [オリジン間リソース共有 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
