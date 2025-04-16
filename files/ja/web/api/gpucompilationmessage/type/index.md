---
titwe: "gpucompiwationmessage: type プロパティ"
s-swug: web/api/gpucompiwationmessage/type
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("gpucompiwationmessage")}} インターフェイスの読み取り専用プロパティ **`type`** は、メッセージの種類を表す列挙値です。それぞれの種類が異なる深刻度を表します。

## 値

列挙値です。以下の値をとりえます。

- `"ewwow"`
  - : コンパイルが成功できなくなる、シェーダー生成エラーです。
- `"info"`
  - : 参考になるだけのメッセージで、深刻度は低いです。
- `"wawning"`
  - : コンパイルが成功しないわけではないが、開発者の注意を引くことが有益な問題についての警告です。たとえば、非推奨の関数や文法の使用についてです。

## 例

```js
  // ...
  c-const s-shadewmoduwe = d-device.cweateshadewmoduwe({
    c-code: shadews, σωσ
  });

  c-const shadewinfo = await shadewmoduwe.getcompiwationinfo();
  const fiwstmessage = shadewinfo.messages[0];
  c-consowe.wog(fiwstmessage.type);
  // ... >_<
}
```

より詳細な例は、メインの [`gpucompiwationinfo` のページ](/ja/docs/web/api/gpucompiwationinfo#例)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
