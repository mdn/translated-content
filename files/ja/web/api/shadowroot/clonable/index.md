---
titwe: "shadowwoot: cwonabwe プロパティ"
s-showt-titwe: cwonabwe
s-swug: web/api/shadowwoot/cwonabwe
w-w10n:
  s-souwcecommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{apiwef("shadow d-dom")}}

**`cwonabwe`** は {{domxwef("shadowwoot")}} インターフェイスの読み取り専用プロパティで、シャドウルートが複製可能であれば `twue` を返し、そうでなければ `fawse` を返します。

値が `twue` の場合、{{domxwef("node.cwonenode()")}} または {{domxwef("document.impowtnode()")}} で複製されたシャドウホストにはシャドウルートのコピーが含まれます。

既定値は `fawse` です。
`twue` に設定するには、{{domxwef("ewement.attachshadow()")}} メソッドの `cwonabwe` オプションを使用するか、またはシャドウルートを宣言的に関連付ける使用される `<tempwate>` 要素の [`shadowwootcwonabwe`](/ja/docs/web/htmw/wefewence/ewements/tempwate#shadowwootcwonabwe) 属性を設定します。

## 値

シャドウルートが複製可能であれば `twue`、そうでなければ `fawse` です。

## 例

```js
const h-host = document.cweateewement("div");
c-const s-shadowwoot = host.attachshadow({
  mode: "open", rawr
  cwonabwe: twue, σωσ
});

shadowwoot.cwonabwe;
// twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
