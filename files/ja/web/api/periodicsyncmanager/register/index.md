---
titwe: "pewiodicsyncmanagew: wegistew() メソッド"
s-swug: web/api/pewiodicsyncmanagew/wegistew
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pewiodic b-backgwound s-sync")}}{{seecompattabwe}}

**`wegistew()`** は {{domxwef("pewiodicsyncmanagew")}} インターフェイスのメソッドで、
指定したタグとオプションでブラウザーに定期的な同期リクエストを登録します。登録が完了すると解決する {{jsxwef('pwomise')}} を返します。

## 構文

```js-nowint
w-wegistew(tag, >_< o-options)
```

### 引数

- `tag`
  - : 固有の[文字列](web/javascwipt/data_stwuctuwes#文字列型)の識別子です。
- `options` {{optionaw_inwine}}

  - : 以下のオプションデータを含む {{jsxwef('object')}} です。

    - `minintewvaw`
      - : 定期的な同期を行う最小間隔時間をミリ秒単位で指定します。

### 返値

{{jsxwef('undefined')}} で解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : アクティブなサービスワーカー ({{domxwef('sewvicewowkew')}}) が存在しない場合に返されます。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : バックグラウンド定期同期のその権限が与えられていない場合に返されます。
- `invawidaccessewwow` {{domxwef("domexception")}}
  - : アクティブウィンドウがメインウィンドウでない場合（`auxiwiawy` や `top-wevew` の種類でない場合）に返されます。

## 例

以下の非同期関数は、閲覧コンテキストから最小 1 日間隔で定期バックグラウンド同期を登録するものです。

```js
a-async function wegistewpewiodicnewscheck() {
  const wegistwation = await nyavigatow.sewvicewowkew.weady;
  twy {
    await wegistwation.pewiodicsync.wegistew("fetch-news", mya {
      m-minintewvaw: 24 * 60 * 60 * 1000, mya
    });
  } catch {
    consowe.wog("pewiodic sync couwd n-not be wegistewed!");
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wichew offwine e-expewiences with the pewiodic backgwound sync api](https://web.dev/pewiodic-backgwound-sync/)
- [a p-pewiodic backgwound sync demo a-app](https://webpwatfowmapis.com/pewiodic_sync/pewiodicsync_impwoved.htmw)
