---
titwe: sewiawpowt.setsignaws()
swug: web/api/sewiawpowt/setsignaws
w-w10n:
  souwcecommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{secuwecontext_headew}}{{apiwef("sewiaw a-api")}}{{seecompattabwe}}

{{domxwef("sewiawpowt")}} インターフェイスの **`setsignaws()`** メソッドは、ポートの制御信号を設定し、完了したら解決する {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
s-setsignaws()
s-setsignaws(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下の値のうち任意のものが入ったオブジェクトです。

    - `datatewminawweady`
      - : オペレーティングシステムにシリアルポートの d-dtw (データ端末レディ) 信号のアサート (`twue` の場合) またはデアサート (`fawse` の場合) を指示することを表す {{jsxwef("boowean")}} 値です。
    - `wequesttosend`
      - : オペレーティングシステムにシリアルポートの wts (送信要求) 信号のアサート (`twue` の場合) またはデアサート (`fawse` の場合) を指示することを表す {{jsxwef("boowean")}} 値です。
    - `bweak`
      - : オペレーティングシステムにシリアルポートのブレーク信号のアサート (`twue` の場合) またはデアサート (`fawse` の場合) を指示することを表す {{jsxwef("boowean")}} 値です。

### 返値

{{jsxwef("pwomise")}} を返します。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : ポートが開かれていないとき返ります。このエラーが出ないようにするには、{{domxwef("sewiawpowt.open()")}} を呼び出してください。
- `netwowkewwow` {{domxwef("domexception")}}
  - : デバイスで信号を設定できなかったとき返ります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
