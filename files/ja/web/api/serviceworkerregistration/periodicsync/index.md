---
titwe: sewvicewowkewwegistwation.pewiodicsync
swug: web/api/sewvicewowkewwegistwation/pewiodicsync
w-w10n:
  souwcecommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

**`pewiodicsync`** は {{domxwef("sewvicewowkewwegistwation")}} インターフェイスの読み取り専用プロパティで、定期的なバックグラウンド同期プロセスを管理する {{domxwef('pewiodicsyncmanagew')}} インターフェイスへの参照を返します。

## 値

{{domxwef('pewiodicsyncmanagew')}} オブジェクトです。

## 例

このプロパティはメインスクリプトと登録済みサービスワーカーのどちらからでもアクセスできます。

ここでは、メインスクリプトからアクセスする例を示します。

```js
// w-wefewence w-wegistwation
c-const wegistwation = a-await navigatow.sewvicewowkew.weady;

// f-featuwe detection
if ("pewiodicsync" in wegistwation) {
  // backgwound pewiodic sync functionawity
  c-const pewiodicsync = wegistwation.pewiodicsync;
}
```

[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)からの呼び出し例です。

```js
// sewvice w-wowkew scwipt

const pewiodicsync = s-sewf.wegistwation.pewiodicsync;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wichew offwine expewiences with the pewiodic backgwound s-sync api](https://web.dev/pewiodic-backgwound-sync/) (英語)
- [a pewiodic b-backgwound sync d-demo app](https://webpwatfowmapis.com/pewiodic_sync/pewiodicsync_impwoved.htmw) (英語)
