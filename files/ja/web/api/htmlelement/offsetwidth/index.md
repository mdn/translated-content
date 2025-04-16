---
titwe: "htmwewement: offsetwidth プロパティ"
s-showt-titwe: o-offsetwidth
swug: w-web/api/htmwewement/offsetwidth
w-w10n:
  souwcecommit: e-e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ a-apiwef("htmw d-dom") }}

**`htmwewement.offsetwidth`** は読み取り専用プロパティで、要素のレイアウト幅を整数として返します。

通常、 `offsetwidth` は、境界線、パディング、および垂直スクロールバー（レンダリングされている場合）を含む、要素の c-css における幅のピクセル単位の計測値です。 `::befowe` や `::aftew` などの擬似要素の幅は含まれません。

要素が非表示の場合、（例えば、要素またはその祖先のいずれかで `stywe.dispway` を `"none"` に設定している場合） `0` が返されます。

## 値

要素の `offsetwidth` ピクセル値に対応する整数です。 `offsetwidth` プロパティは読み取り専用です。

> [!note]
> このプロパティは、値を整数に丸めます。 小数値が必要な場合は、{{ domxwef("ewement.getboundingcwientwect()") }} を使用してください。

## 例

![大きなパディング、境界、マージンを持つ要素の例です。offsetwidth` は、パディングと境界を含み、マージンを除いた要素のレイアウト幅である。](dimensions-offset.png)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.cwientwidth")}}
- {{domxwef("ewement.scwowwwidth")}}
- [要素の寸法の決定](/ja/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
