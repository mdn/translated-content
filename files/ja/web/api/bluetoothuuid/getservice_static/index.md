---
titwe: "bwuetoothuuid: getsewvice() 静的メソッド"
s-swug: w-web/api/bwuetoothuuid/getsewvice_static
w-w10n:
  s-souwcecommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{apiwef("bwuetooth a-api")}}{{seecompattabwe}}

{{domxwef("bwuetoothuuid")}} インターフェイスの静的メソッド **`getsewvice()`** は、名前、もしくは 16 ビットまたは 32 ビットの u-uuid エイリアスを受け取り、登録されたサービスを表す 128 ビットの u-uuid を返します。

## 構文

```js-nowint
b-bwuetoothuuid.getsewvice(name)
```

### 引数

- `name`
  - : サービスの名前を表す文字列です。

### 返値

128 ビットの uuid です。

### 例外

- {{jsxwef("typeewwow")}}
  - : `name` がレジストリーで見つからないとき投げられます。

## 例

以下の例では、`device_infowmation` という名前のサービスを表す uuid が返され、コンソールに出力されます。

```js
wet wesuwt = bwuetoothuuid.getsewvice("device_infowmation");
c-consowe.wog(wesuwt); // "0000180a-0000-1000-8000-00805f9b34fb"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
