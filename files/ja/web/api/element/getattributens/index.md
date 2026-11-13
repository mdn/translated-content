---
title: "Element: getAttributeNS() メソッド"
short-title: getAttributeNS()
slug: Web/API/Element/getAttributeNS
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

**`getAttributeNS()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された要素の、指定された名前空間を持つ属性の文字列値を返します。要素に、その名前空間内の指定された名前の属性が存在しない場合は、`null` を返します。

HTML 文書を扱っていて、リクエストされた属性を特定の名前空間の一部として指定する必要がない場合は、代わりに {{domxref("Element.getAttribute()", "getAttribute()")}} メソッドを使用してください。

## 構文

```js-nolint
getAttributeNS(namespace, localName)
```

### 引数

- `namespace`
  - : 属性の名前空間を指定する文字列です。明示的な名前空間がない場合は `null` です。
- `localName`
  - : 属性の名前を指定する文字列です。

### 返値

属性の値が入った文字列。ただし、その要素に指定された名前の属性がない場合は `null` となります。

## 例

以下の SVG 文書は独自の名前空間にある `foo` 属性の値を読み取ります。

```xml
<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:test="http://www.example.com/2014/test" width="40" height="40">

  <circle id="target" cx="12" cy="12" r="10" stroke="#444444"
      stroke-width="2" fill="none" test:foo="Hello namespaced attribute!"/>

  <script>
    const ns = 'http://www.example.com/2014/test';
    const circle = document.getElementById('target');

    console.log(`attribute test:foo: "${circle.getAttributeNS(ns, 'foo')}"`);
  </script>
</svg>
```

HTML 文書では名前空間に対応していないため、この属性は `test:foo` でアクセスする必要があります。

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:test="http://www.example.com/2014/test"
  width="40"
  height="40">
  <circle
    id="target"
    cx="12"
    cy="12"
    r="10"
    stroke="#444444"
    stroke-width="2"
    fill="none"
    test:foo="Foo value" />
</svg>
```

```js
const ns = "http://www.example.com/2014/test";
const circle = document.getElementById("target");
console.log(`Attribute value: ${circle.getAttribute("test:foo")}`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.hasAttributeNS()")}}
- {{domxref("Element.setAttributeNS()")}}
- {{domxref("Element.removeAttributeNS()")}}
