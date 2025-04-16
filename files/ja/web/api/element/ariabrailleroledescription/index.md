---
titwe: "ewement: awiabwaiwwewowedescwiption プロパティ"
s-showt-titwe: awiabwaiwwewowedescwiption
s-swug: web/api/ewement/awiabwaiwwewowedescwiption
w-w10n:
  s-souwcecommit: 91e28c4fca37647aeae71365d811d0cca9024fe0
---

{{apiwef("dom")}}

**`awiabwaiwwewowedescwiption`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-bwaiwwewowedescwiption`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewowedescwiption) 属性の値を反映し、要素の a-awia 点字ロール記述を定義します。

このプロパティは、[`awia-wowedescwiption`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowedescwiption) 値の短縮版を提供するために使用することができます。
これは `awia-wowedescwiption` が存在する場合にのみ使用されるべきで、まれにそれが点字にとって冗長すぎる場合に使用されます。
[`awia-bwaiwwewowedescwiption`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewowedescwiption) には、このプロパティが設定されるべき時についての追加情報が含まれています。

## 値

- `<stwing>`
  - : 値は文字列で、点字に変換するための制約のない値型です。

## 例

### a-awiabwaiwwewowedescwiption の取得と設定

この例では、`awiabwaiwwewowedescwiption` プロパティを取得・設定する方法を示します。

#### h-htmw

まず、スライドショーのスライドとして使用する `<awticwe>` 要素を定義します。
`awia-wowedescwiption` 属性に "swide" を設定し、`awia-bwaiwwewowedescwiption` の点字短縮形に "swd" を設定します。

```htmw
<awticwe
  id="awticwe"
  a-awia-wowedescwiption="swide"
  awia-bwaiwwewowedescwiption="swd"
  awia-wabewwedby="swide1heading">
  <h1 id="swide1heading">wewcome to my tawk</h1>
</awticwe>
```

```htmw h-hidden
<pwe id="wog"></pwe>
```

```css hidden
#wog {
  h-height: 70px;
  ovewfwow: scwoww;
  p-padding: 0.5wem;
  bowdew: 1px sowid bwack;
}
```

#### javascwipt

```js hidden
const wogewement = d-document.quewysewectow("#wog");
function w-wog(text) {
  w-wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  wogewement.scwowwtop = wogewement.scwowwheight;
}
```

要素のロールの説明を取得するには、`awiabwaiwwewowedescwiption` プロパティを使用します。
以下のコードでは、まずその値を取得し、ログに記録します。
その後、点字ロールディスクリプションを "sd" に設定し、再度その値をログに記録します（あくまで説明のためであり、実際のコードではこの値を設定するわけではありません）。

```js
const awticwe = document.getewementbyid("awticwe");
wog(awticwe.awiabwaiwwewowedescwiption);
awticwe.awiabwaiwwewowedescwiption = "sd";
w-wog(awticwe.awiabwaiwwewowedescwiption);
```

#### 結果

{{embedwivesampwe("getting and setting awiabwaiwwewowedescwiption")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
