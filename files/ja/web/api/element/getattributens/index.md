---
title: Element.getAttributeNS()
slug: Web/API/Element/getAttributeNS
tags:
  - API
  - DOM
  - Element
  - メソッド
  - リファレンス
browser-compat: api.Element.getAttributeNS
translation_of: Web/API/Element/getAttributeNS
---
{{APIRef("DOM")}}

**`getAttributeNS()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された名前空間と名前を持つ属性の文字列値を返します。のような名前の属性が存在しない場合は、 `null` または `""` （空文字列のどちらかを返します。詳しくは[メモ](#メモ)を参照してください。

## 構文

```js
attrVal = element.getAttributeNS(namespace, name)
```

### 引数

- `namespace`
  - : 指定された属性を探す名前空間です。
- `name`
  - : 探す属性の名前です。

### 返値

指定された属性の文字列値です。その属性が存在しない場合、結果は `null` になります。

> **Note:** 古いバージョンの DOM 仕様書では、このメソッドが存在しない属性に対しては空文字列を返すと説明していました。しかし、 null の方が分かりやすいので、そのような実装はあまり行われませんでした。 DOM4 仕様書ではこのメソッドは存在しない属性に対して null を返すと書くようになりました。

## 例

以下の SVG 文書は独自の名前空間にある `foo` 属性の値を読み取ります。

```xml
<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:test="http://www.example.com/2014/test" width="40" height="40">

  <circle id="target" cx="12" cy="12" r="10" stroke="#444"
      stroke-width="2" fill="none" test:foo="Hello namespaced attribute!"/>

  <script type="text/javascript">
    var ns = 'http://www.example.com/2014/test';
    var circle = document.getElementById( 'target' );

    console.log( 'attribute test:foo: "' + circle.getAttributeNS( ns, 'foo' ) + '"' );
  </script>
</svg>
```

HTML5 文書では名前空間に対応していないため、この属性は `test:foo` でアクセスする必要があります。

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:test="http://www.example.com/2014/test" width="40" height="40">
  <circle id="target" cx="12" cy="12" r="10" stroke="#444" stroke-width="2"
      fill="none" test:foo="Foo value"/>
</svg>

<script type="text/javascript">
  var ns = 'http://www.example.com/2014/test';
  var circle = document.getElementById( 'target' );
  console.log('Attribute value: ' + circle.getAttribute('test:foo'));
</script>

</body>
</html>
```

## メモ

名前空間は XML 文書でのみ対応しています。 HTML5 文書では、代わりに `getAttribute()` を使用する必要があります。

`getAttributeNS()` は {{domxref("element.getAttribute()",
  "getAttribute()")}} とは異なり、特定の名前空間に属している要求された属性をより深く特定することができます。上記の例では、属性は Mozilla の架空の "specialspace" 名前空間に属しています。

DOM4 より前の仕様では、このメソッドは属性が存在しない場合に null ではなく空文字列を返すように指定されていました。しかし、ほとんどのウェブブラウザーは null を返していました。 DOM4 以降は、仕様でも null を返すように指定されました。しかし、一部の古いウェブブラウザーは空文字列を返します。そのため、指定の要素に指定の属性が存在しない可能性があるなら、 `getAttributeNS` を呼ぶ前に {{domxref("element.hasAttributeNS()", "hasAttributeNS()")}} を使用して属性の存在を確かめる必要があります。

{{DOMAttributeMethods}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [コードスニペット:getAttributeNS](/ja/docs/Mozilla/Add-ons/Code_snippets/getAttributeNS)
