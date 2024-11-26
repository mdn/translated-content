---
title: "Bluetooth: getAvailability() メソッド"
short-title: getAvailability()
slug: Web/API/Bluetooth/getAvailability
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

**`getAvailability()`** は {{DOMxRef("Bluetooth")}} インターフェイスのメソッドで、（端末に Bluetooth アダプターがあるために）ユーザーエージェントが Bluetooth に対応する場合は実質的に `true` を返し、そうでない場合は `false` を返します。

もし Web Bluetooth API を使用する権限が [`Permissions-Policy: bluetooth`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth) 権限によって許可されていない場合、このメソッドは常に `false` を返すため、「実質的に」という言葉を使用しています。
さらに、ユーザーはブラウザーが動作可能な Bluetooth アダプターを持っている場合でも、`getAvailability()` の呼び出しで `false` を返すように構成することができます。その逆も同様です。アクセスがその権限によってブロックされている場合、この設定値は無視されます。

`getAvailability()` が `true` を返し、端末に実際に Bluetooth アダプターがある場合でも、{{DOMxRef("Bluetooth.requestDevice","navigator.bluetooth.requestDevice()")}} が {{DOMxRef("BluetoothDevice")}} で解決しないかもしれません。
Bluetooth アダプタに電源が供給されていない可能性や、ユーザーがプロンプトが表示されたときに API を使用する権限を拒否する可能性があります。

## 構文

```js-nolint
getAvailability()
```

### 引数

なし

### 返値

論理値で解決する {{JSxRef("Promise")}} を返します。

この {{JSxRef("Promise")}} は、[`Permissions-Policy: bluetooth`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth) によってアクセスが許可されていない場合、ユーザーが常に `false` で解決するようにブラウザーが構成されている場合、または端末に Bluetooth アダプターがない場合に `false` の値を持ちます。
そうでない場合は `true` で解決されます。

### 例外

なし。

## 例

以下のスニペットは、Bluetooth に端末が対応しているかどうかを指定するメッセージをコンソールに出力します。

```js
navigator.bluetooth.getAvailability().then((available) => {
  if (available) {
    console.log("この端末は Bluetooth に対応しています！");
  } else {
    console.log("残念！Bluetooth に対応していません");
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
