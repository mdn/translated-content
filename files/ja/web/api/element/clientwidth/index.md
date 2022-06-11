---
title: Element.clientWidth
slug: Web/API/Element/clientWidth
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - リファレンス
  - プロパティ
browser-compat: api.Element.clientWidth
translation_of: Web/API/Element/clientWidth
---
{{APIRef("DOM")}}

**`Element.clientWidth`** プロパティは、インライン要素や CSS のない要素ではゼロになります。それ以外では、要素の内側の寸法をピクセル単位で表します。パディングは含みますが、境界、マージン、（もしあれば）垂直スクロールバーは含みません。

`clientWidth` がルート要素（`<html>` 要素）（または文書が後方互換モードである場合は `<body>`）に使用された場合、（スクロールバーを除いた）ビューポートの高さが返されます。[これは `clientWidth` の特例です](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientwidth)。

> **Note:** このプロパティは値を整数に丸めます。小数の値が必要な場合は、 {{ domxref("element.getBoundingClientRect()") }} を使用してください。

## 構文

```js
var intElemClientWidth = element.clientWidth;
```

`intElemClientWidth` は `element` の `clientWidth` をピクセル数で表す整数値です。 `clientWidth` プロパティは読み取り専用です。

## 例

![](dimensions-client.png)

## 仕様書

{{Specifications}}

## メモ

`clientTop` は MS IE DHTML オブジェクトモデルで最初に導入されました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("Element.scrollWidth")}}
- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
