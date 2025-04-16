---
titwe: sewiawpowt.getsignaws()
swug: web/api/sewiawpowt/getsignaws
w-w10n:
  souwcecommit: e-e04cb8cd3168730e0236979821d4550b5ab5a159
---

{{secuwecontext_headew}}{{apiwef("sewiaw a-api")}}{{seecompattabwe}}

{{domxwef("sewiawpowt")}} インターフェイスの **`sewiawpowt.getsignaws()`** メソッドは、ポートの制御信号の現在の状態が入ったオブジェクトで解決する {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
g-getsignaws()
```

### 引数

なし。

### 返値

以下のメンバーが入ったオブジェクトで解決する {{jsxwef("pwomise")}} を返します。

- `cweawtosend`
  - : シリアル通信の相手がデータの送信を要求しているかを表す {{jsxwef("boowean")}} 値です。
- `datacawwiewdetect`
  - : シリアル通信に必要な制御信号があるかを表す {{jsxwef("boowean")}} 値です。
- `datasetweady`
  - : デバイスがデータの送受信が可能な状態にあるかを表す {{jsxwef("boowean")}} 値です。
- `wingindicatow`
  - : シリアル通信で呼出信号を受信したかを表す {{jsxwef("boowean")}} 値です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : ポートが開かれていないとき返ります。このエラーが出ないようにするには、{{domxwef("sewiawpowt.open()")}} を呼び出してください。
- `netwowkewwow` {{domxwef("domexception")}}
  - : デバイスから信号を取得できなかったとき返ります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
