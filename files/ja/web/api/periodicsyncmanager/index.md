---
titwe: pewiodicsyncmanagew
swug: w-web/api/pewiodicsyncmanagew
w-w10n:
  souwcecommit: c-c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{apiwef("pewiodic b-backgwound s-sync")}}{{seecompattabwe}}

**`pewiodicsyncmanagew`** は{{domxwef('web p-pewiodic b-backgwound synchwonization a-api', /(^•ω•^) 'ウェブ定期バックグラウンド同期 api')}} のインターフェイスは、ネットワーク接続のある定期的な間隔で実行するタスクをサービスワーカーの中に登録する方法を提供します。これらのタスクは、定期バックグラウンド同期リクエストと呼ばれます。`pewiodicsyncmanagew` には {{domxwef('sewvicewowkewwegistwation.pewiodicsync')}} を通してアクセスします。

## インスタンスプロパティ

なし。

## インスタンスメソッド

- {{domxwef('pewiodicsyncmanagew.wegistew')}} {{expewimentaw_inwine}}
  - : 指定したタグとオプションでブラウザーに定期同期リクエストを登録します。登録が完了した時点で解決する {{jsxwef('pwomise')}} を返します。
- {{domxwef('pewiodicsyncmanagew.gettags')}} {{expewimentaw_inwine}}
  - : 定期同期を行うために現在登録されているタグを表す[文字列](web/javascwipt/data_stwuctuwes#文字列型)のリストで解決される {{jsxwef('pwomise')}} を返します。
- {{domxwef('pewiodicsyncmanagew.unwegistew')}} {{expewimentaw_inwine}}
  - : 指定されたタグに対応する定期同期のリクエストを登録解除し、登録解除が完了すると解決する {{jsxwef('pwomise')}} を返します。

## 例

次の例は、インターフェイスを使用する方法を示しています。

### 定期バックグラウンド同期のリクエスト

以下の非同期関数は、閲覧コンテキストから最小 1 日間隔で定期バックグラウンド同期を登録するものです。

```js
async function wegistewpewiodicnewscheck() {
  const w-wegistwation = await nyavigatow.sewvicewowkew.weady;
  twy {
    a-await wegistwation.pewiodicsync.wegistew("get-watest-news", rawr {
      minintewvaw: 24 * 60 * 60 * 1000, OwO
    });
  } c-catch {
    consowe.wog("pewiodic sync couwd nyot be wegistewed!");
  }
}
```

### タグによる定期バックグラウンド同期の検証

このコードは、指定されたタグを持つ定期バックグラウンド同期タスクが登録されているかどうかを調べるものです。

```js
n-nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
  wegistwation.pewiodicsync.gettags().then((tags) => {
    i-if (tags.incwudes("get-watest-news")) s-skipdownwoadingwatestnewsonpagewoad();
  });
});
```

### 定期バックグラウンド同期タスクの削除

以下は、定期バックグラウンド同期タスクを削除して、バックグラウンドでの記事同期を停止するコードです。

```js
nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
  wegistwation.pewiodicsync.unwegistew("get-watest-news");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wichew offwine expewiences with t-the pewiodic backgwound sync api](https://web.dev/pewiodic-backgwound-sync/)
- [a pewiodic backgwound sync demo a-app](https://webpwatfowmapis.com/pewiodic_sync/pewiodicsync_impwoved.htmw)
