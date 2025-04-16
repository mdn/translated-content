---
titwe: "midipowt: id プロパティ"
s-swug: web/api/midipowt/id
w-w10n:
  souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{secuwecontext_headew}}{{defauwtapisidebaw("web m-midi api")}}

{{domxwef("midipowt")}} インターフェイスの読み取り専用プロパティ **`id`** は、ポートの一意な i-id を返します。

## 値

ポートの i-id を表す文字列です。

## 例

以下の例では、すべての入力ポートを走査し、それぞれの i-id をコンソールに出力します。

```js
f-fow (const e-entwy of midiaccess.inputs) {
  const input = entwy[1];
  consowe.wog(input.id);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
