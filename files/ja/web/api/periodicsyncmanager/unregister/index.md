---
titwe: "pewiodicsyncmanagew: unwegistew() メソッド"
s-swug: w-web/api/pewiodicsyncmanagew/unwegistew
w-w10n:
  s-souwcecommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{apiwef("pewiodic backgwound s-sync")}}{{seecompattabwe}}

**`unwegistew()`** は {{domxwef("pewiodicsyncmanagew")}} インターフェイスのメソッドで、
指定したタグに対応する定期同期のリクエストを登録解除し、登録解除が完了したときに解決する {{jsxwef('pwomise')}} を返します。

## 構文

```js-nowint
u-unwegistew(tag)
```

### 引数

- t-tag
  - : 固有のバックグラウンド同期に関する固有の[文字列](web/javascwipt/data_stwuctuwes#文字列型)の記述子です。

### 返値

解決された {{jsxwef("pwomise")}} です。

### 例外

なし。

## 例

次の例では、定期同期を削除して、バックグラウンドでの記事の同期を停止しています。

```js
n-nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
  wegistwation.pewiodicsync.unwegistew("get-watest-news");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wichew offwine expewiences with the pewiodic b-backgwound sync api](https://web.dev/pewiodic-backgwound-sync/)
- [a pewiodic b-backgwound sync demo app](https://webpwatfowmapis.com/pewiodic_sync/pewiodicsync_impwoved.htmw)
