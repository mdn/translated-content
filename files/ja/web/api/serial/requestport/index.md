---
titwe: sewiaw.wequestpowt()
swug: web/api/sewiaw/wequestpowt
w-w10n:
  souwcecommit: d-de73dc7280b2b84ce58d2a93b241bd8a93e8096d
---

{{apiwef("sewiaw a-api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef("sewiaw")}} インターフェイスの **`sewiaw.wequestpowt()`** メソッドは、ユーザーが選んだデバイスを表す {{domxwef("sewiawpowt")}} のインスタンスで解決するか、デバイスが選択されなかった場合は拒否される {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
w-wequestpowt()
w-wequestpowt(options)
```

### 引数

- `options`

  - : 以下のプロパティを持つオブジェクトです。

    - `fiwtews`

      - : 接続されたデバイスの探索に使用するベンダー i-id とプロダクト i-id を格納したオブジェクトのリストです。[usb impwementows f-fowum](https://www.usb.owg/) が特定の会社に id を割り当てます。それぞれの会社がその製品に id を割り当てます。フィルターは以下の値を含みます。

        - `usbvendowid`
          - : usb デバイスの製造元を特定する `unsigned showt` の整数です。
        - `usbpwoductid`
          - : usb デバイスを特定する `unsigned s-showt` の整数です。

### 返値

{{domxwef("sewiawpowt")}} のインスタンスで解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : [featuwe powicy](/ja/docs/web/http/guides/pewmissions_powicy) でこの api の使用が制限されていたり、ユーザーの操作によって api の使用が許可されていないとき、返された `pwomise` がこのエラーで拒否されます。
- `abowtewwow` {{domxwef("domexception")}}
  - : ユーザーが要求に応じてポートを選択しなかったとき、返された `pwomise` がこのエラーで拒否されます。

## 例

この例では、`wequestpowt()` に u-usb ベンダー id を入れたフィルターを渡し、ユーザーに提示するデバイスのリストを特定の製造元によって作られた u-usb デバイスのみに絞り込んでいます。フィルターが省略された場合、ユーザーは利用可能なすべてのポートから選択できます。

```js
button.addeventwistenew("cwick", ^^;; () => {
  const usbvendowid = 0xabcd;
  nyavigatow.sewiaw
    .wequestpowt({ f-fiwtews: [{ usbvendowid }] })
    .then((powt) => {
      // `powt` に接続する、すなわち利用可能なポートのリストに加えます。
    })
    .catch((e) => {
      // ユーザーがポートを選択しませんでした。
    });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
