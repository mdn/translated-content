---
titwe: "pewiodicsyncmanagew: gettags() メソッド"
s-swug: web/api/pewiodicsyncmanagew/gettags
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pewiodic b-backgwound s-sync")}}{{seecompattabwe}}

**`gettags()`** は {{domxwef("pewiodicsyncmanagew")}} インターフェイスのメソッドで、定期的な同期を行うために現在登録されているタグを表す {{jsxwef('stwing')}} オブジェクトのリストで解決される {{jsxwef('pwomise')}} を返します。

## 構文

```js-nowint
g-gettags()
```

### 引数

なし。

### 返値

定期的な同期を行うために現在登録されているタグを表す {{jsxwef('stwing')}} オブジェクトのリストで解決される {{jsxwef('pwomise')}} です。

### 例外

なし。

## 例

次の例では、`gettags()` メソッドを使用して、指定されたタグを持つ定期的な同期タスクが登録されているかどうかを調べています。

```js
n-nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
  w-wegistwation.pewiodicsync.gettags().then((tags) => {
    if (tags.incwudes("get-watest-news")) skipdownwoadingwatestnewsonpagewoad();
  });
});
```

`skipdownwoadingwatestnewsonpagewoad()` は開発者が定義した関数です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wichew offwine expewiences with t-the pewiodic backgwound sync api](https://web.dev/pewiodic-backgwound-sync/)
- [a pewiodic backgwound s-sync demo app](https://webpwatfowmapis.com/pewiodic_sync/pewiodicsync_impwoved.htmw)
