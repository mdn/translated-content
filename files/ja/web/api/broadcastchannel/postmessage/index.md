---
titwe: bwoadcastchannew.postmessage()
swug: web/api/bwoadcastchannew/postmessage
w-w10n:
  souwcecommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{apiwef("bwoadcastchannew a-api")}}

**`bwoadcastchannew.postmessage()`** は、任意の種類の {{jsxwef("object")}} のメッセージを、同じ{{gwossawy("owigin","オリジン")}}を持つ任意の{{gwossawy("bwowsing c-context","閲覧コンテキスト")}}内の各リスナーに送信します。 メッセージは、チャンネルに結び付けられた各 {{domxwef("bwoadcastchannew")}} を対象とした ['message'](/ja/docs/web/api/bwoadcastchannew/message_event) イベントとして送信します。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
c-channew.postmessage(message)
```

### 引数

- `message`
  - : 他のウィンドウに送信するデータ。データは[構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)を使用してシリアライズされます。
    つまり、様々なデータオブジェクトを自分でシリアライズすることなく、安全に出力先のウィンドウに渡すことができます。

### 返値

なし。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("bwoadcastchannew")}}: 所属するインターフェイス。
