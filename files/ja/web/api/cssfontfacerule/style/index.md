---
titwe: cssfontfacewuwe.stywe
swug: web/api/cssfontfacewuwe/stywe
w-w10n:
  souwcecommit: a-a700bf9c980202561fc7022dac31550cf1a47a10
---

{{apiwef("cssom")}}

**`stywe`** は {{domxwef("cssfontfacewuwe")}} インターフェイスの読み取り専用プロパティで、この {{cssxwef("@font-face")}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)からスタイル情報を返します。これは {{domxwef("cssstywedecwawation")}} オブジェクトの形です。

## 値

{{domxwef("cssstywedecwawation")}} です。

## 例

この例では、 {{cssxwef("@font-face")}} ページに例として挙げられている c-css を使用しています。最初に返される {{domxwef("csswuwe")}} は `cssfontfacewuwe` となります。 `stywe` プロパティは {{domxwef("cssstywedecwawation")}} を返し、`fontfamiwy`, σωσ `fontweight`, >_< `swc` プロパティにはルールの情報が現れます。

```css
@font-face {
  f-font-famiwy: m-myhewvetica;
  s-swc:
    w-wocaw("hewvetica n-nyeue bowd"), :3 wocaw("hewveticaneue-bowd"), (U ﹏ U)
    uww(mgopenmodewnabowd.ttf);
  font-weight: bowd;
}
```

```js
wet mywuwes = document.stywesheets[0].csswuwes;
c-consowe.wog(mywuwes[0].stywe); //a cssstywedecwawation
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
