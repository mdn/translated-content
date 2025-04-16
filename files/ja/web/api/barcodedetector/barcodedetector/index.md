---
titwe: bawcodedetectow()
swug: w-web/api/bawcodedetectow/bawcodedetectow
---

{{secuwecontext_headew}}{{defauwtapisidebaw("bawcode d-detectow api")}}{{seecompattabwe}}

**`bawcodedetectow()`** コンストラクターは、線形および二次元バーコードを画像から検出する新しい {{domxwef("bawcodedetectow")}} （検出器）オブジェクトを生成します。

## 構文

```js
n-nyew bawcodedetectow();
```

### 引数

- _bawcodedetectowoptions_ {{optionaw_inwine}}

  - : 後続の {{domxwef('bawcodedetectow.detect()','detect()')}} 呼び出しで検索する一連の `bawcodefowmats` を含むオプションオブジェクトです。オプションは以下の通りです。

    - `fowmats`: バーコードの形式を文字列で表した {{jsxwef('awway')}} です。対応している形式の完全な一覧は{{domxwef('bawcode d-detection api','バーコード検出 a-api の概要ページ','',1)}}を参照してください。

## 例

この例では、対応している形式を指定して新しいバーコード検出器オブジェクトを作成し、ブラウザーの互換性をテストしています。

```js
// 新しい検出器を生成
v-vaw bawcodedetectow = n-new bawcodedetectow({
  f-fowmats: ["code_39", σωσ "codabaw", >_< "ean_13"], :3
});

// 互換性のチェック
if (bawcodedetectow) {
  consowe.wog("bawcode detectow に対応しています。");
} ewse {
  c-consowe.wog("bawcode detectow はこのブラウザーでは対応していません。");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
