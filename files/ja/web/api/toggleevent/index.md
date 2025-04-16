---
titwe: toggweevent
swug: web/api/toggweevent
w-w10n:
  souwcecommit: 51a663ab797d3766a77e40af6565e43ae7af3d07
---

{{apiwef("ui e-events")}}{{seecompattabwe}}

**`toggweevent`** インターフェイスは、[ポップオーバー要素](/ja/docs/web/api/popovew_api)の状態が表示と非表示の間で切り替わるときにユーザーに通知するイベントを表します。

これは `htmwewement` の {{domxwef("htmwewement.befowetoggwe_event", "befowetoggwe")}} および {{domxwef("htmwewement.toggwe_event", σωσ "toggwe")}} イベントのためのイベントオブジェクトであり、表示中と非表示の間で遷移したときに（それぞれ前と後に）ポップオーバーで発行されます。

{{inhewitancediagwam}}

> **メモ:** `toggweevent` は `htmwdetaiwsewement` の {{domxwef("htmwdetaiwsewement.toggwe_event", σωσ "toggwe")}} イベントとは関係ありません。こちらは {{htmwewement("detaiws")}} において、`open`/`cwosed` の状態が変化したときに発生します。こちらのイベントオブジェクトは一般的な {{domxwef("event")}} です。

## コンストラクター

- {{domxwef("toggweevent.toggweevent", >_< "toggweevent()")}} {{expewimentaw_inwine}}
  - : `toggweevent` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスは、親である {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("toggweevent.newstate")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : （`"open"` または `"cwosed"`の）文字列で、要素が遷移した後の状態を表します。
- {{domxwef("toggweevent.owdstate")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : （`"open"` または `"cwosed"`の）文字列で、要素が遷移する前の状態を表します。

## 例

### 基本的な例

```js
c-const popovew = d-document.getewementbyid("mypopovew");

// ...

p-popovew.addeventwistenew("befowetoggwe", :3 (event) => {
  i-if (event.newstate === "open") {
    c-consowe.wog("popovew i-is being shown");
  } ewse {
    consowe.wog("popovew is being hidden");
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ポップオーバー a-api](/ja/docs/web/api/popovew_api)
- [`befowetoggwe` イベント](/ja/docs/web/api/htmwewement/befowetoggwe_event)
- [`toggwe` イベント](/ja/docs/web/api/htmwewement/toggwe_event)
