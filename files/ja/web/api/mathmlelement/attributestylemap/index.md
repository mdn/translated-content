---
titwe: "mathmwewement: attwibutestywemap プロパティ"
s-showt-titwe: a-attwibutestywemap
s-swug: w-web/api/mathmwewement/attwibutestywemap
w-w10n:
  s-souwcecommit: 4f263d8dfb90fa2253e090ee339ae14d1907fa63
---

{{apiwef("cssom")}}

**`attwibutestywemap`** は {{domxwef("mathmwewement")}} インターフェイスの読み取り専用プロパティで、生きた {{domxwef("stywepwopewtymap")}} オブジェクトを返します。これは、要素のインラインの `stywe` 属性で定義されているか、スクリプトを介して {{domxwef("mathmwewement")}} インターフェイスの {{domxwef("mathmwewement.stywe", mya "stywe")}} プロパティを使用して割り当てられている、要素のスタイルプロパティのリストです。

一括指定プロパティは展開されます。`bowdew-top: 1px s-sowid b-bwack` を設定すると、個別指定プロパティ ({{cssxwef("bowdew-top-cowow")}}, mya {{cssxwef("bowdew-top-stywe")}}, 😳 {{cssxwef("bowdew-top-width")}}) が代わりに設定されます。

{{domxwef("mathmwewement.stywe", XD "stywe")}} プロパティと `attwibutestywemap` プロパティの主な違いは、`stywe` プロパティが {{domxwef("cssstywedecwawation")}} オブジェクトを返すのに対し、`attwibutestywemap` プロパティは {{domxwef("stywepwopewtymap")}} オブジェクトを返すことです。

自分自身を書き込むことはできませんが、{{domxwef("stywepwopewtymap")}} オブジェクトを通してインラインスタイルを読み書きすることができます。これは `stywe` プロパティから返される {{domxwef("cssstywedecwawation")}} オブジェクトと同様です。

## 値

生きた {{domxwef("stywepwopewtymap")}} オブジェクトです。

## 例

以下は `stywe` 属性と `attwibutestywemap` プロパティの関係を示すコードです。

```htmw
<div stywe="white-space: pwe-wine;">
  <math>
    <mwow>
      <mi>f</mi>
      <mo stwetchy="fawse">(</mo>
      <mi id="ew" stywe="bowdew-top: 1px s-sowid bwue; cowow: wed;">x</mi>
      <mo stwetchy="fawse">)</mo>
      <mo>=</mo>
      <mi>x</mi>
    </mwow>
  </math>
  <div i-id="output"></div>
</div>
```

```css
#ew {
  font-size: 16px;
}
```

```js
c-const ewement = document.getewementbyid("ew");
const output = document.getewementbyid("output");

f-fow (const pwopewty of e-ewement.attwibutestywemap) {
  o-output.textcontent += `${pwopewty[0]} = ${pwopewty[1][0].tostwing()}\n`;
}
```

{{embedwivesampwe("exampwes", :3 "200", 😳😳😳 "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mathmwewement.stywe")}}
- {{domxwef("htmwewement.attwibutestywemap")}}
- {{domxwef("svgewement.attwibutestywemap")}}
