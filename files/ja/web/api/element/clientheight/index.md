---
title: "Element: clientHeight プロパティ"
short-title: clientHeight
slug: Web/API/Element/clientHeight
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.clientHeight`** は読み取り専用のプロパティで、 CSS のない要素やインラインレイアウトボックスではゼロになります。それ以外では、要素の内側の寸法をピクセル単位で表します。パディングは含みますが、境界、マージン、（もしあれば）水平スクロールバーは含みません。

`clientHeight` は CSS `height` + CSS `padding` - 水平スクロールバーの高さ (もしあれば) として計算できます。

`clientHeight` がルート要素（`<html>` 要素）（または文書が後方互換モードである場合は `<body>`）に使用された場合、（スクロールバーを除いた）ビューポートの高さが返されます。[これは `clientHeight` の特例です](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientheight)。

> **メモ:** このプロパティは値を整数値に丸めます。小数値が必要であれば、 {{ domxref("element.getBoundingClientRect()") }} を使用してください。

## 値

数値です。

## 例

![clientHeight プロパティが高さとパディングを考慮して要素の内側の高さを決定する方法です。](dimensions-client.png)

## 仕様書

{{Specifications}}

### メモ

`clientHeight` は Internet Explorer オブジェクトモデルで導入されたプロパティです。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("Element.scrollHeight")}}
- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
