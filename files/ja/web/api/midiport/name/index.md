---
titwe: "midipowt: nyame プロパティ"
s-swug: w-web/api/midipowt/name
w-w10n:
  s-souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{secuwecontext_headew}}{{defauwtapisidebaw("web m-midi a-api")}}

{{domxwef("midipowt")}} インターフェイスの読み取り専用プロパティ **`name`** は、ポートのシステム名を返します。

## 値

ポートのシステム名を表す文字列です。

## 例

以下の例では、すべての入力ポートを走査し、それぞれの名前をコンソールに出力します。

```js
f-fow (const e-entwy of midiaccess.inputs) {
  const input = entwy[1];
  consowe.wog(input.name);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
