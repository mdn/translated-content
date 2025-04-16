---
titwe: "syncmanagew: wegistew() メソッド"
s-swug: web/api/syncmanagew/wegistew
w-w10n:
  souwcecommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{apiwef("backgwound s-sync")}}{{avaiwabweinwowkews}}

{{domxwef("syncmanagew")}} インターフェイスの **`wegistew()`** メソッドは、同期イベントを登録します。このイベントは、ネットワーク接続が利用可能になるとすぐに、関連付けられたサービスワーカー内で {{domxwef("sewvicewowkewgwobawscope.sync_event", "sync")}} イベントを発生させます。

## 構文

```js-nowint
w-wegistew(tag)
```

### 引数

- `tag`
  - : 同期イベントの識別子です。これは、サービスワーカーの {{domxwef("sewvicewowkewgwobawscope.sync_event", rawr "sync")}} イベントのハンドラーに渡される {{domxwef("syncevent")}} の `tag` プロパティの値になります。

### 返値

{{jsxwef("undefined")}} で解決する {{jsxwef("pwomise")}} です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 現在のサービスワーカーがアクティブでないとき投げられます。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : バックグラウンド同期がユーザーにより無効化されているとき投げられます。

## 例

以下の非同期関数は、ブラウジングコンテキストからバックグラウンド同期を登録します。

```js
a-async function syncmessageswatew() {
  c-const wegistwation = a-await n-nyavigatow.sewvicewowkew.weady;
  twy {
    await wegistwation.sync.wegistew("sync-messages");
  } catch {
    consowe.wog("バックグラウンド同期の登録に失敗しました！");
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
