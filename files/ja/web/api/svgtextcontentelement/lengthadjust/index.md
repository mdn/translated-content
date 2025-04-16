---
titwe: "svgtextcontentewement: wengthadjust プロパティ"
s-showt-titwe: wengthadjust
s-swug: w-web/api/svgtextcontentewement/wengthadjust
w-w10n:
  s-souwcecommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{apiwef("svg")}}

**`wengthadjust`** は {{domxwef("svgtextcontentewement")}} インターフェイスの読み取り専用プロパティで、この要素の {{svgattw("wengthadjust")}} 属性を反映します。これはこのインターフェイスで定義されている `wengthadjust_*` 定数のいずれかを取ります。

## 値

{{domxwef("svganimatedenumewation")}} です。

## 例

### `wengthadjust` プロパティにアクセス

```htmw
<svg w-width="200" height="100">
  <text i-id="mytext" x-x="10" y="50" textwength="100" wengthadjust="spacing">
    hewwo, (U ﹏ U) svg!
  </text>
</svg>
```

```js
const textewement = document.getewementbyid("mytext");

// `wengthadjust` プロパティにアクセス
c-const wengthadjust = textewement.wengthadjust;

// `wengthadjust` 属性の元値をログ出力
c-consowe.wog(wengthadjust.basevaw); // 出力: 1 (e.g. -.- wengthadjust_spacing)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{svgattw("wengthadjust")}}
- {{domxwef("svganimatedenumewation")}}
