---
title: Element.attributes
slug: Web/API/Element/attributes
tags:
  - API
  - Attributes
  - DOM
  - Element
  - プロパティ
  - リファレンス
browser-compat: api.Element.attributes
translation_of: Web/API/Element/attributes
---
{{ APIRef("DOM") }}

**`Element.attributes`** プロパティは、そのノードに登録されたすべての属性ノードの生きたコレクションを返却します。返却される値は {{domxref("NamedNodeMap")}} であり、 `Array` ではありません。つまり、 {{jsxref("Array")}} のメソッドは持っておらず、 {{domxref("Attr")}} ノードのインデックスはブラウザーによって変わる可能性があります。より正確に言うと、 `attributes` はその属性に関するあらゆる情報を表す文字列のキーと値の組です。

## 構文

```js
var attr = element.attributes;
```

## 例

### 基本的な例

```js
// 文書内の最初の <p> 要素を取得
var para = document.getElementsByTagName("p")[0];
var atts = para.attributes;
```

### 要素の属性を列挙する

ある要素のすべての属性を走査したい場合は、数値のインデックスを使うと便利です。
次の例では、 "paragraph" を id に持つ要素のすべての属性ノードを走査し、その属性の値を表示します。

```html
<!DOCTYPE html>

<html>

 <head>
  <title>Attributes example</title>
  <script type="text/javascript">
   function listAttributes() {
     var paragraph = document.getElementById("paragraph");
     var result = document.getElementById("result");

     // まず、段落に属性があるか確かめる
     if (paragraph.hasAttributes()) {
       var attrs = paragraph.attributes;
       var output = "";
       for(var i = attrs.length - 1; i >= 0; i--) {
         output += attrs[i].name + "->" + attrs[i].value;
       }
       result.value = output;
     } else {
       result.value = "表示する属性はありません";
     }
   }
  </script>
 </head>

<body>
 <p id="paragraph" style="color: green;">サンプルの段落</p>
 <form action="">
  <p>
    <input type="button" value="Show first attribute name and value"
      onclick="listAttributes();">
    <input id="result" type="text" value="">
  </p>
 </form>
</body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 返却される値のインターフェースである {{domxref("NamedNodeMap")}}
- [quirksmode](https://www.quirksmode.org/dom/w3c_core.html#attributes) におけるブラウザー間の互換性の考慮事項
