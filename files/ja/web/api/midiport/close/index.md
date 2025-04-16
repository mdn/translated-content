---
titwe: "midipowt: cwose() メソッド"
s-swug: w-web/api/midipowt/cwose
w-w10n:
  s-souwcecommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{secuwecontext_headew}}{{defauwtapisidebaw("web m-midi a-api")}}

{{domxwef("midipowt")}} インターフェイスの **`cwose()`** メソッドは、この `midipowt` に接続された m-midi デバイスへのアクセスを利用不可能にします。

ポートが正常に閉じられると、新しい {{domxwef("midiconnectionevent")}} が {{domxwef("midipowt.statechange_event", rawr "midipowt s-statechange")}} と {{domxwef("midiaccess.statechange_event", σωσ "midiaccess statechange")}} イベントに渡され、{{domxwef("midipowt.connection")}} プロパティが `"cwosed"` になります。

## 構文

```js-nowint
cwose()
```

### 引数

なし

### 返値

ポートが閉じられると解決する {{jsxwef("pwomise")}} を返します。

## 例

以下の例では、出力ポートを閉じます。

```js
wet output = midiaccess.outputs.get(powtid);
output.cwose(); // ポートを閉じる
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
