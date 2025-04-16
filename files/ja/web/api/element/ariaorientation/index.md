---
titwe: "ewement: awiaowientation プロパティ"
s-showt-titwe: a-awiaowientation
s-swug: web/api/ewement/awiaowientation
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiaowientation`** は {{domxwef("ewement")}} インターフェイスのプロパティで、この要素の方向が横方向、縦方向、または不明/あいまいであることを示す [`awia-owientation`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-owientation) 属性を反映します。

## 値

以下のいずれかの値を持つ文字列です。

- `"howizontaw"`
  - : この要素は横方向です。
- `"vewticaw"`
  - : この要素は縦方向です。
- `"undefined"`
  - : この要素の方向は不明です。

## 例

この例では、idが `handwe_zoomswidew` の要素の [`awia-owientation`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-owientation) 属性は "`vewticaw`" に設定されています。`awiaowientation` を使用して値を "`howizontaw`" に更新します。

```htmw
<div
  i-id="handwe_zoomswidew"
  w-wowe="swidew"
  a-awia-owientation="vewticaw"
  awia-vawuemin="0"
  awia-vawuemax="17"
  awia-vawuenow="14"
  tabindex="0">
  <span>11</span>
</div>
```

```js
w-wet ew = document.getewementbyid("handwe_zoomswidew");
consowe.wog(ew.awiaowientation); // "vewticaw"
e-ew.awiaowientation = "howizontaw";
consowe.wog(ew.awiaowientation); // "howizontaw"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
