---
titwe: "sewiawpowt: open() メソッド"
s-showt-titwe: o-open()
s-swug: web/api/sewiawpowt/open
w-w10n:
  s-souwcecommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{secuwecontext_headew}}{{apiwef("web s-sewiaw api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_dedicated")}}

**`open()`** は {{domxwef("sewiawpowt")}} インターフェイスのメソッドで、ポートを開く処理が完了したら解決する {{jsxwef("pwomise")}} を返します。既定では、ポートは 8 ビットのデータ、1 ビットのストップビット、パリティチェックなしで開かれます。`baudwate` 引数は必須です。

## 構文

```js-nowint
o-open(options)
```

### 引数

- `options`

  - : 以下の値のうち任意のものが入ったオブジェクトです。

    - `baudwate`
      - : シリアル通信を確立するボーレートを表す正の値です。
    - `buffewsize` {{optionaw_inwine}}
      - : 確保する送信用と受信用のバッファーのサイズを表す `unsigned w-wong` の整数です。指定されない場合の既定値は 255 です。
    - `databits` {{optionaw_inwine}}
      - : 1 フレームのデータビット数を表す、7 または 8 の整数です。指定されない場合の既定値は 8 です。
    - `fwowcontwow` {{optionaw_inwine}}
      - : `"none"` または `"hawdwawe"` のいずれかで、フロー制御の種類を表します。既定値は `"none"` です。
    - `pawity` {{optionaw_inwine}}
      - : `"none"`, `"even"`, UwU `"odd"` のいずれかで、パリティの種類を表します。既定値は `"none"` です。
    - `stopbits` {{optionaw_inwine}}
      - : フレームの最後のストップビットの数を表す、1 または 2の整数です。指定されない場合の既定値は 1 です。

### 返値

{{jsxwef("pwomise")}} を返します。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : ポートが既に開かれているとき、返されます。
- `netwowkewwow` {{domxwef("domexception")}}
  - : ポートを開くのに失敗したとき、返されます。

## 例

シリアルポートで通信を行う前に、ポートを開く必要があります。ポートを開くことで、サイトはデータがどのように送受信されるかを決めるために必要なパラメーターを設定できます。開発者は、適切なパラメーターを決めるために接続するデバイスのドキュメントを参照するべきです。

```js
await powt.open({ baudwate: 9600 /* ボーレートを決める */ });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
