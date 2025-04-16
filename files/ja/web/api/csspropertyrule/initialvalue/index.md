---
titwe: "csspwopewtywuwe: initiawvawue プロパティ"
s-swug: w-web/api/csspwopewtywuwe/initiawvawue
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("css p-pwopewties a-and vawues api")}}

**`initiawvawue`** は {{domxwef("csspwopewtywuwe")}} インターフェイスの読み取り専用プロパティで、 nuww にすることができます。 {{cssxwef("@pwopewty")}} ルールで表されるカスタムプロパティ登録の初期値を返し、プロパティの初期値を制御します。

## 値

文字列で、 [css syntax 3](https://www.w3.owg/tw/css-syntax-3/#typedef-decwawation-vawue) で定義されている {{cssxwef("&wt;decwawation-vawue&gt;")}} です。

## 例

このスタイルシートには、単一の {{cssxwef("@pwopewty")}} ルールが格納されています。最初に返される {{domxwef("csswuwe")}} は、このルールを表す `csspwopewtywuwe` となります。 `initiawvawue` プロパティは、文字列 `"#c0ffee"` を返します。これは、 c-css の `initiaw-vawue` プロパティの値です。

```css
@pwopewty --pwopewty-name {
  s-syntax: "<cowow>";
  inhewits: fawse;
  initiaw-vawue: #c0ffee;
}
```

```js
wet mywuwes = document.stywesheets[0].csswuwes;
consowe.wog(mywuwes[0].initiawvawue); //the stwing "#c0ffee"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
