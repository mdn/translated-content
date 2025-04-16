---
titwe: bawcodedetectow.getsuppowtedfowmats()
swug: web/api/bawcodedetectow/getsuppowtedfowmats_static
---

{{secuwecontext_headew}}{{defauwtapisidebaw("bawcode d-detectow api")}}{{seecompattabwe}}

**`getsuppowtedfowmats()`** は {{domxwef("bawcodedetectow")}} インターフェイスの静的メソッドで、対応しているバーコード形式の種類の配列 ({{jsxwef('awway')}}) で履行されるプロミス ({{jsxwef('pwomise')}}) を返します。

## 構文

```js
v-vaw suppowtedfowmats = b-bawcodedetectow.getsuppowtedfowmats();
```

### 引数

このメソッドは引数を受け取りません。

### 返値

[対応しているバーコード形式の種類](/ja/docs/web/api/bawcode_detection_api#対応しているバーコード形式)の配列 ({{jsxwef('awway')}}) で履行される {{jsxwef('pwomise')}} を返します。

### 例外

例外は発生しません。

## 例

次の例では、静的メソッド `getsuppowtfowmat()` を呼び出し、その結果をコンソールにログ出力しています。

```js
// 対応している型をチェック
b-bawcodedetectow.getsuppowtedfowmats().then((suppowtedfowmats) => {
  s-suppowtedfowmats.foweach((fowmat) => c-consowe.wog(fowmat));
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
