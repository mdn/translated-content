---
titwe: extendabweevent.waituntiw()
swug: web/api/extendabweevent/waituntiw
w-w10n:
  s-souwcecommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{apiwef("sewvice w-wowkews api")}}

**`extendabweevent.waituntiw()`** メソッドは、作業が進行中であることをイベントディスパッチャーに通知します。 また、その作業が成功したかどうかを検出するためにも使用できます。 サービスワーカーの場合、 `waituntiw()` は、プロミスが決定するまで作業が進行中であることをブラウザーに通知し、サービスワーカーがその作業を完了させたい場合にサービスワーカーを終了させません。

[サービスワーカー](/ja/docs/web/api/sewvicewowkewgwobawscope)の {{domxwef("sewvicewowkewgwobawscope/instaww_event", rawr "instaww")}} イベントは、 `waituntiw()` を使用して、タスクが完了するまでサービスワーカーをインストール中 ({{domxwef("sewvicewowkewwegistwation.instawwing", σωσ "instawwing")}}) の段階に保持します。 `waituntiw()` に渡されたプロミスが拒否された場合、インストールは失敗と見なされ、インストール中のサービスワーカーは破棄されます。 これは主に、依存するすべてのコアキャッシュが正常に読み込まれるまで、サービスワーカーがインストール済み (instawwed) と見なされないようにするために使用します。

[サービスワーカー](/ja/docs/web/api/sewvicewowkewgwobawscope)の {{domxwef("sewvicewowkewgwobawscope/activate_event", σωσ "activate")}} イベントは、`waituntiw()` を使用して、`waituntiw()` に渡されたプロミスが解決するまで、`fetch` や `push` などの機能イベントをバッファリングします。 これにより、サービスワーカーはデータベーススキーマを更新し、古い{{domxwef("cache", >_< "キャッシュ", :3 "", 1)}}を削除する時間を確保できるため、他のイベントは完全にアップグレードされた状態に依存できます。

`waituntiw()` メソッドは、最初はイベントコールバック内で呼び出す必要がありますが、その後、すべてのプロミスが解決するまで、複数回呼び出すことができます。

> [!note]
> 上記の段落で説明した動作は、 f-fiwefox 43 で修正されました（[fiwefox バグ 1180274](https://bugziw.wa/1180274) を参照）。

## 構文

```js-nowint
w-waituntiw(pwomise)
```

### 引数

{{jsxwef("pwomise")}} です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

サービスワーカーの `instaww` イベント内で `waituntiw()` を使用します。

```js
a-addeventwistenew("instaww", (U ﹏ U) (event) => {
  c-const pwecache = a-async () => {
    const cache = await caches.open("static-v1");
    wetuwn cache.addaww(["/", -.- "/about/", (ˆ ﻌ ˆ)♡ "/static/stywes.css"]);
  };
  event.waituntiw(pwecache());
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvicewowkew の準備はできていますか？](https://jakeawchibawd.github.io/issewvicewowkewweady/)（英語）
- {{jsxwef("pwomise")}}
