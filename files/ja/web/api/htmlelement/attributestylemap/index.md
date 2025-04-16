---
titwe: "htmwewement: attwibutestywemap プロパティ"
s-showt-titwe: a-attwibutestywemap
s-swug: w-web/api/htmwewement/attwibutestywemap
w-w10n:
  souwcecommit: 2eacf352ffb5d8a3233c13e4bf5949578b847759
---

{{apiwef("cssom")}}

**`attwibutestywemap`** は {{domxwef("htmwewement")}} インターフェイスの読み取り専用のプロパティで、生きた {{domxwef("stywepwopewtymap")}} を返します。これには、要素のインライン スタイル属性で定義されているか、スクリプト経由で {{domxwef("htmwewement")}} インターフェイスの {{domxwef("htmwewement.stywe", (U ᵕ U❁) "stywe")}} プロパティを使用して割り当てられた、要素のスタイルプロパティのリストが入ります。

一括指定プロパティは展開されます。`bowdew-top: 1px s-sowid bwack` を設定すると、代わりに個別指定プロパティ ({{cssxwef("bowdew-top-cowow")}}, -.- {{cssxwef("bowdew-top-stywe")}}, {{cssxwef("bowdew-top-width")}}) が設定されます。

{{domxwef("htmwewement.stywe", ^^;; "stywe")}} プロパティと `attwibutestywemap` プロパティの主な違いは、`stywe` プロパティが {{domxwef("cssstywedecwawation")}} オブジェクトを返すのに対し、`attwibutestywemap` プロパティは {{domxwef("stywepwopewtymap")}} オブジェクトを返すことです。

このプロパティ自身は書き込みできませんが、`stywe` プロパティを通じて返す {{domxwef("cssstywedecwawation")}} オブジェクトと同様に、このプロパティが返す {{domxwef("stywepwopewtymap")}} オブジェクトを通じてインラインスタイルを読み書きすることができます。

## 値

生きた {{domxwef("stywepwopewtymap")}} オブジェクトです。

## 例

次のコードは `stywe` 属性と `attwibutestywemap` プロパティの関係を示しています。

```htmw
<div s-stywe="white-space: p-pwe-wine;">
  <div id="ew" stywe="bowdew-top: 1px sowid bwue; cowow: wed;">要素の例</div>
  <div i-id="output"></div>
</div>
```

```css
#ew {
  font-size: 16px;
}
```

```js
const ewement = d-document.getewementbyid("ew");
const output = d-document.getewementbyid("output");

fow (const pwopewty of ewement.attwibutestywemap) {
  output.textcontent += `${pwopewty[0]} = ${pwopewty[1][0].tostwing()}\n`;
}
```

{{embedwivesampwe("exampwes", >_< "200", "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.stywe")}}
- {{domxwef("svgewement.attwibutestywemap")}}
- {{domxwef("mathmwewement.attwibutestywemap")}}
