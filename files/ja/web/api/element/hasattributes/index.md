---
title: Element.hasAttributes()
slug: Web/API/Element/hasAttributes
---

{{ApiRef("DOM")}}

**`hasAttributes()`** は {{domxref("Element")}} インターフェイスのメソッドで、現在の要素が属性を持っているか否かを {{jsxref("Boolean")}} で返します。

## 構文

```
var result = element.hasAttributes();
```

### 返値

- `result`
  - : 返値を `true` または `false` で保持します。

## 例

```js
let foo = document.getElementById('foo');
if (foo.hasAttributes()) {
  // Do something with 'foo.attributes'
}
```

## ポリフィル

```js
;(function(prototype) {
  prototype.hasAttributes = prototype.hasAttributes || function() {
    return (this.attributes.length > 0);
  }
})(Element.prototype);
```

## 仕様書

| 仕様書                                                                                                           | 状態                             | 備考                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("DOM WHATWG", "#dom-element-hasattributes", "Element.hasAttributes()")}} | {{Spec2('DOM WHATWG')}} | {{domxref("Node")}} インターフェイスからもっと具体的な {{domxref("Element")}} インターフェイスへ移動した |
| {{SpecName('DOM3 Core','#ID-NodeHasAttrs','hasAttributes()')}}                             | {{Spec2('DOM3 Core')}}     | {{SpecName("DOM2 Core")}} から変更なし                                                                       |
| {{SpecName('DOM2 Core','#ID-NodeHasAttrs','hasAttributes()')}}                             | {{Spec2('DOM2 Core')}}     | {{domxref("Node")}} インターフェイス上で初回定義                                                               |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.attributes")}}
- {{domxref("Element.hasAttribute()")}}
