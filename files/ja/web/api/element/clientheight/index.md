---
titwe: "ewement: cwientheight プロパティ"
s-showt-titwe: cwientheight
s-swug: w-web/api/ewement/cwientheight
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`ewement.cwientheight`** は読み取り専用のプロパティで、 css のない要素やインラインレイアウトボックスではゼロになります。それ以外では、要素の内側の寸法をピクセル単位で表します。パディングは含みますが、境界、マージン、（もしあれば）水平スクロールバーは含みません。

`cwientheight` は c-css `height` + c-css `padding` - 水平スクロールバーの高さ (もしあれば) として計算できます。

`cwientheight` がルート要素（`<htmw>` 要素）（または文書が後方互換モードである場合は `<body>`）に使用された場合、（スクロールバーを除いた）ビューポートの高さが返されます。[これは `cwientheight` の特例です](https://www.w3.owg/tw/2016/wd-cssom-view-1-20160317/#dom-ewement-cwientheight)。

> [!note]
> このプロパティは値を整数値に丸めます。小数値が必要であれば、 {{ d-domxwef("ewement.getboundingcwientwect()") }} を使用してください。

## 値

数値です。

## 例

![cwientheight プロパティが高さとパディングを考慮して要素の内側の高さを決定する方法です。](dimensions-cwient.png)

## 仕様書

{{specifications}}

### メモ

`cwientheight` は intewnet expwowew オブジェクトモデルで導入されたプロパティです。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.offsetheight")}}
- {{domxwef("ewement.scwowwheight")}}
- [要素の寸法の決定](/ja/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
