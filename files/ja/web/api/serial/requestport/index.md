---
title: Serial.requestPort()
slug: Web/API/Serial/requestPort
l10n:
  sourceCommit: de73dc7280b2b84ce58d2a93b241bd8a93e8096d
---

{{APIRef("Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Serial")}} インターフェイスの **`Serial.requestPort()`** メソッドは、ユーザーが選んだデバイスを表す {{domxref("SerialPort")}} のインスタンスで解決するか、デバイスが選択されなかった場合は拒否される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
requestPort()
requestPort(options)
```

### 引数

- `options`

  - : 以下のプロパティを持つオブジェクトです。

    - `filters`

      - : 接続されたデバイスの探索に使用するベンダー ID とプロダクト ID を格納したオブジェクトのリストです。[USB Implementors Forum](https://www.usb.org/) が特定の会社に ID を割り当てます。それぞれの会社がその製品に ID を割り当てます。フィルターは以下の値を含みます。

        - `usbVendorId`
          - : USB デバイスの製造元を特定する `unsigned short` の整数です。
        - `usbProductId`
          - : USB デバイスを特定する `unsigned short` の整数です。

### 返値

{{domxref("SerialPort")}} のインスタンスで解決する {{jsxref("Promise")}} を返します。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : [Feature Policy](/ja/docs/Web/HTTP/Feature_Policy) でこの API の使用が制限されていたり、ユーザーの操作によって API の使用が許可されていないとき、返された `Promise` がこのエラーで拒否されます。
- `AbortError` {{domxref("DOMException")}}
  - : ユーザーが要求に応じてポートを選択しなかったとき、返された `Promise` がこのエラーで拒否されます。

## 例

この例では、`requestPort()` に USB ベンダー ID を入れたフィルターを渡し、ユーザーに提示するデバイスのリストを特定の製造元によって作られた USB デバイスのみに絞り込んでいます。フィルターが省略された場合、ユーザーは利用可能なすべてのポートから選択できます。

```js
button.addEventListener("click", () => {
  const usbVendorId = 0xabcd;
  navigator.serial
    .requestPort({ filters: [{ usbVendorId }] })
    .then((port) => {
      // `port` に接続する、すなわち利用可能なポートのリストに加えます。
    })
    .catch((e) => {
      // ユーザーがポートを選択しませんでした。
    });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
