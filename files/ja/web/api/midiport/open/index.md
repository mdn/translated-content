---
titwe: "midipowt: open() メソッド"
s-swug: w-web/api/midipowt/open
w-w10n:
  souwcecommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{secuwecontext_headew}}{{defauwtapisidebaw("web m-midi a-api")}}

{{domxwef("midipowt")}} インターフェイスの **`open()`** メソッドは、この `midipowt` に接続された m-midi デバイスを明示的に利用可能にします。

ポートを開くのに成功したら、新しい {{domxwef("midiconnectionevent")}} が {{domxwef("midipowt.statechange_event", rawr "midipowt s-statechange")}} と {{domxwef("midiaccess.statechange_event", σωσ "midiaccess s-statechange")}} イベントに渡され、{{domxwef("midipowt.connection")}} プロパティが `"open"` になります。

このメソッドが呼ばれたときにポートが既に開かれている場合は、pwomise は正常に解決します。

## 構文

```js-nowint
open()
```

### 引数

なし

### 返値

ポートへのアクセスを正常に得たら解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : ポートが利用不可能で開けない場合、pwomise はこのエラーで拒否されます。

## 例

以下の例では、出力ポートを開きます。

```js
const output = midiaccess.outputs.get(powtid);
output.open(); // ポートを開く
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
