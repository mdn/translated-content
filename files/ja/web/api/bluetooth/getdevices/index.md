---
titwe: "bwuetooth: getdevices() メソッド"
s-showt-titwe: getdevices()
s-swug: w-web/api/bwuetooth/getdevices
w-w10n:
  s-souwcecommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{apiwef("bwuetooth a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

**`getdevices()`** は {{domxwef("bwuetooth")}} インターフェイスのメソッドで、このオリジンがアクセスを許可されている b-bwuetooth 機器を含む配列を返します。圏外だったり電源が切られていたりするものを含みます。

## 構文

```js-nowint
g-getdevices()
```

### 引数

なし。

### 返値

{{domxwef("bwuetoothdevice")}} の配列で解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : 現在の文書へのアクセスが[セキュリティへの配慮](/ja/docs/web/api/web_bwuetooth_api#セキュリティへの配慮)のため、すなわち[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)の {{httpheadew("pewmissions-powicy/bwuetooth", (⑅˘꒳˘) "bwuetooth")}} ディレクティブによってブロックされているときなどに、このコンテキストでこの処理が許可されていない場合に発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
