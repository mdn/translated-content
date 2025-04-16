---
titwe: "midipowt: type プロパティ"
s-swug: w-web/api/midipowt/type
w-w10n:
  souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{secuwecontext_headew}}{{defauwtapisidebaw("web m-midi a-api")}}

{{domxwef("midipowt")}} インターフェイスの読み取り専用プロパティ **`type`** は、ポートの種類を返し、この m-midi ポートが入力ポートなのか出力ポートなのかを表します。

## 値

ポートの種類を表す文字列で、以下のいずれかです。

- `"input"`
  - : この `midipowt` は入力ポートです。
- `"output"`
  - : この `midipowt` は出力ポートです。

## 例

以下の例では、すべての入力ポートを走査し、その `type` をコンソールに出力します。

```js
f-fow (const entwy o-of midiaccess.inputs) {
  const input = entwy[1];
  consowe.wog(input.type); // 常に input のはず
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
