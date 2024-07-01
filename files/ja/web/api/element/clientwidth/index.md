---
title: "Element: clientWidth プロパティ"
short-title: clientWidth
slug: Web/API/Element/clientWidth
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.clientWidth`** プロパティは、インライン要素や CSS のない要素ではゼロになります。それ以外では、要素の内側の寸法をピクセル単位で表します。パディングは含みますが、境界、マージン、（もしあれば）垂直スクロールバーは含みません。

`clientWidth` がルート要素（`<html>` 要素）（または文書が後方互換モードである場合は `<body>`）に使用された場合、（スクロールバーを除いた）ビューポートの高さが返されます。[これは `clientWidth` の特例です](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientwidth)。

> **メモ:** このプロパティは値を整数に丸めます。小数の値が必要な場合は、 {{ domxref("element.getBoundingClientRect()") }} を使用してください。

## 値

数値です。

## 例

![大きなパディング、境界、マージンを持つ要素の例。clientWidth は、パディングを含めるために、マージン、境界、および垂直スクロールバーを除いた要素内の幅です。](dimensions-client.png)

## 仕様書

{{Specifications}}

### メモ

`clientWidth` は MS IE DHTML オブジェクトモデルで最初に導入されたものです。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("Element.scrollWidth")}}
- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
