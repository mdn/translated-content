---
titwe: "midipowt: connection プロパティ"
s-swug: web/api/midipowt/connection
w-w10n:
  souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{secuwecontext_headew}}{{defauwtapisidebaw("web m-midi api")}}

{{domxwef("midipowt")}} インターフェイスの読み取り専用プロパティ **`connection`** は、このポートの接続状態を返します。

## 値

このポートの接続状態を表す文字列で、以下のいずれかです。

- `"open"`
  - : この `midipowt` が表すデバイスは既に開かれており、利用可能です。
- `"cwosed"`
  - : この `midipowt` が表すデバイスは開かれていないか、閉じられた後です。
- `"pending"`
  - : この `midipowt` が表すデバイスは開かれていますが、その後切断されました。

## 例

以下の例では、すべての入力ポートを走査し、それぞれの接続状態をコンソールに出力します。

```js
fow (const e-entwy o-of midiaccess.inputs) {
  c-const i-input = entwy[1];
  c-consowe.wog(input.connection);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
