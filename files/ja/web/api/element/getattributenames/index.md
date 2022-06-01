---
title: Element.getAttributeNames()
slug: Web/API/Element/getAttributeNames
tags:
  - API
  - 属性
  - DOM
  - Element
  - メソッド
  - getAttributeNames
browser-compat: api.Element.getAttributeNames
translation_of: Web/API/Element/getAttributeNames
---
{{APIRef("DOM")}}

**`getAttributeNames()`** は {{domxref("Element")}} インターフェースのメソッドで、この要素の属性名を文字列の {{jsxref("Array")}} で返します。要素に属性がない場合は、空の配列を返します。

`getAttributeNames()` を {{domxref("Element.getAttribute","getAttribute()")}} と共に使用すると、 {{domxref("Element.attributes")}} にアクセスするよりメモリ効率やパフォーマンスが良くなります。

**`getAttributeNames()`** から返される名前は*修飾*属性名です。すなわち、名前空間接頭辞がついた属性であり、名前空間接頭辞（実際の名前空間では*ない*）にコロンが続き、属性名が続きます（例えば  **`xlink:href`**）。名前空間接頭辞のない属性は、そのままの名前になります（例えば **`href`**）。

## 構文

```js
let attributeNames = element.getAttributeNames();
```

## 例

以下の例は、次の方法を示しています。

- 名前空間接頭辞のある属性については、 `getAttributeNames()` は属性名と一緒に名前空間接頭辞を返します。
- 名前空間接頭辞のない属性については、 `getAttributeNames()` は属性名のみをそのまま返します。

以下のことを理解することが重要です。

1. DOM には名前空間に所属していても、名前空間接頭辞がない場合があります。
2. 名前空間に所属しているが、名前空間接頭辞のない DOM 内の属性については、 `getAttributeNames()` は属性名だけを返し、その属性が名前空間に所属していることを示しません。

以下の例では、このような「名前空間に所属しているが、名前空間接頭辞がない」場合を示しています。

```js
const element = document.createElement('a')

// "href" 属性を名前空間なし、名前空間接頭辞なしで設定
element.setAttribute('href', 'https://example.com')
// "href" 属性を名前空間あり、 "xlink" 名前空間接頭辞で設定
element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'https://example.com')
// "show" 属性を名前空間あり、名前空間接頭辞なしで設定
element.setAttributeNS('http://www.w3.org/1999/xlink', 'show', 'new')

// 要素の属性を反復処理する
for (let name of element.getAttributeNames()) {
  let value = element.getAttribute(name);
  console.log(name, value);
}

// 出力結果:
// href https://example.com
// xlink:href https://example.com
// show new
```

## ポリフィル

```js
if (Element.prototype.getAttributeNames == undefined) {
  Element.prototype.getAttributeNames = function () {
    var attributes = this.attributes;
    var length = attributes.length;
    var result = new Array(length);
    for (var i = 0; i < length; i++) {
      result[i] = attributes[i].name;
    }
    return result;
  };
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
