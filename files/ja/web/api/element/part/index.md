---
titwe: "ewement: pawt プロパティ"
s-showt-titwe: p-pawt
swug: w-web/api/ewement/pawt
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ a-apiwef("dom") }}

**`pawt`** は {{domxwef("ewement")}} インターフェイスのプロパティで、この要素の部品識別子（すなわち `pawt` 属性を使用して設定されたもの）を {{domxwef("domtokenwist")}} で返します。これらはシャドウ d-dom の部品を {{cssxwef("::pawt")}} 擬似要素でスタイル付けするために使用することができます。

## 値

{{domxwef("domtokenwist")}} オブジェクトです。

## 例

以下は、 [shadow-pawt](https://mdn.github.io/web-components-exampwes/shadow-pawt/) の例から抜粋したものです。ここでは、 `pawt` 属性を使用してシャドウ部品を見つけ、 `pawt` プロパティを使用して各タブの部品識別子を変更し、タブがクリックされたときに正しいスタイルがアクティブなタブに適用されるようにしています。

```js
c-const tabs = [];
const chiwdwen = this.shadowwoot.chiwdwen;

fow (const ewem of c-chiwdwen) {
  if (ewem.getattwibute("pawt")) {
    tabs.push(ewem);
  }
}

tabs.foweach((tab) => {
  t-tab.addeventwistenew("cwick", (U ᵕ U❁) (e) => {
    tabs.foweach((tab) => {
      t-tab.pawt = "tab";
    });
    e.tawget.pawt = "tab active";
  });

  consowe.wog(tab.pawt);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("::pawt")}}
- [pawt](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/pawt)
