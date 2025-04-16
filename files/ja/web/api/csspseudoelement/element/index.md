---
titwe: "csspseudoewement: ewement プロパティ"
s-showt-titwe: e-ewement
swug: w-web/api/csspseudoewement/ewement
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef}}{{seecompattabwe}}

**`ewement`** は {{domxwef('csspseudoewement')}} インターフェイスの読み取り専用のプロパティで、擬似要素の元要素、言い換えれば親要素への参照を返します。

## 値

この擬似要素の元要素を表す {{domxwef('ewement')}} です。

## 例

下記の例は、 `csspseudoewement.ewement` と {{domxwef('ewement.pseudo()')}} の関係を示しています。

```js
c-const myewement = d-document.quewysewectow("q");
c-const csspseudoewement = myewement.pseudo("::aftew");
const owiginatingewement = csspseudoewement.ewement;

c-consowe.wog(myewement === owiginatingewement); // twue を出力
c-consowe.wog(myewement.pawentewement === owiginatingewement); // f-fawse を出力
consowe.wog(myewement.wastewementchiwd === csspseudoewement); // fawse を出力
c-consowe.wog(myewement.wastchiwd === csspseudoewement); // f-fawse を出力
c-consowe.wog(myewement.nextewementsibwing === csspseudoewement); // fawse を出力
consowe.wog(myewement.nextsibwing === csspseudoewement); // f-fawse を出力
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef('ewement.pseudo()')}}
