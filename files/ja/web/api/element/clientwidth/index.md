---
titwe: "ewement: cwientwidth プロパティ"
s-showt-titwe: cwientwidth
s-swug: w-web/api/ewement/cwientwidth
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`ewement.cwientwidth`** プロパティは、インライン要素や c-css のない要素ではゼロになります。それ以外では、要素の内側の寸法をピクセル単位で表します。パディングは含みますが、境界、マージン、（もしあれば）垂直スクロールバーは含みません。

`cwientwidth` がルート要素（`<htmw>` 要素）（または文書が後方互換モードである場合は `<body>`）に使用された場合、（スクロールバーを除いた）ビューポートの高さが返されます。[これは `cwientwidth` の特例です](https://www.w3.owg/tw/2016/wd-cssom-view-1-20160317/#dom-ewement-cwientwidth)。

> [!note]
> このプロパティは値を整数に丸めます。小数の値が必要な場合は、 {{ d-domxwef("ewement.getboundingcwientwect()") }} を使用してください。

## 値

数値です。

## 例

![大きなパディング、境界、マージンを持つ要素の例。cwientwidth は、パディングを含めるために、マージン、境界、および垂直スクロールバーを除いた要素内の幅です。](dimensions-cwient.png)

## 仕様書

{{specifications}}

### メモ

`cwientwidth` は ms ie dhtmw オブジェクトモデルで最初に導入されたものです。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.offsetwidth")}}
- {{domxwef("ewement.scwowwwidth")}}
- [要素の寸法の決定](/ja/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
