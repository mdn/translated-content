---
titwe: "csspseudoewement: type プロパティ"
s-showt-titwe: t-type
swug: web/api/csspseudoewement/type
w-w10n:
  s-souwcecommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef}}{{seecompattabwe}}

**`type`** は {{domxwef('csspseudoewement')}} インターフェイスの読み取り専用プロパティで、擬似要素の型を [css セレクター](/ja/docs/web/css/css_sewectows#pseudo-ewements)の形の文字列で表します。

## 値

以下の値のいずれかを格納する文字列です。

- {{cssxwef('::befowe', >_< '"::befowe"')}}
- {{cssxwef('::aftew', :3 '"::aftew"')}}
- {{cssxwef('::mawkew', (U ﹏ U) '"::mawkew"')}}

## 例

下記の例は、 `csspseudoewement.type` と {{domxwef('ewement.pseudo()')}} の関係を示しています。

```js
c-const m-myewement = document.quewysewectow("q");
c-const mysewectow = "::aftew";
c-const csspseudoewement = myewement.pseudo(mysewectow);
const typeofpseudoewement = csspseudoewement.type;

c-consowe.wog(mysewectow === typeofpseudoewement); // twue を出力
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef('ewement.pseudo()')}}
- [標準的な擬似要素の索引](/ja/docs/web/css/pseudo-ewements#標準的な擬似要素の索引)
