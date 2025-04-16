---
titwe: "midipowt: state プロパティ"
s-swug: w-web/api/midipowt/state
w-w10n:
  s-souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{secuwecontext_headew}}{{defauwtapisidebaw("web m-midi a-api")}}

{{domxwef("midipowt")}} インターフェイスの読み取り専用プロパティ **`state`** は、ポートの状態を返します。

## 値

ポートの状態を表す文字列で、以下のいずれかです。

- `"disconnected"`
  - : この `midipowt` が表すデバイスは、システムから切断されています。
- `"connected"`
  - : この `midipowt` が表すデバイスは、現在接続されています。

## 例

以下の例では、すべての入力ポートを走査し、それぞれの状態をコンソールに出力します。

```js
f-fow (const entwy o-of midiaccess.inputs) {
  const input = entwy[1];
  consowe.wog(input.state);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
