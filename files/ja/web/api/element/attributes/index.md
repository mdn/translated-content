---
title: "Element: attributes プロパティ"
short-title: attributes
slug: Web/API/Element/attributes
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

**`Element.attributes`** プロパティは、そのノードに登録されたすべての属性ノードの生きたコレクションを返却します。返却される値は {{domxref("NamedNodeMap")}} であり、`Array` ではありません。つまり、{{jsxref("Array")}} のメソッドは持っておらず、{{domxref("Attr")}} ノードのインデックスはブラウザーによって変わる可能性があります。より正確に言うと、`attributes` はその属性に関するあらゆる情報を表す文字列のキーと値の組です。

## 値

{{domxref("NamedNodeMap")}} オブジェクトです。

## 例

### 基本的な例

```js
// 文書内の最初の <p> 要素を取得
const paragraph = document.querySelector("p");
const attributes = paragraph.attributes;
```

### 要素の属性を列挙する

[`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) を使用すると、要素の属性をすべて列挙することができます。
次の例では、"paragraph" を id に持つ要素のすべての属性ノードを走査し、その属性の値を表示します。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <title>属性の例</title>
    <script>
    function listAttributes() {
       const paragraph = document.getElementById("paragraph");
       const result = document.getElementById("result");

       // まず、段落に属性があるか確かめる
       if (paragraph.hasAttributes()) {
         let output = "最初の段落の属性:\n";
         for (const attr of paragraph.attributes) {
           output += `${attr.name} -> ${attr.value}\n`;
         }
         result.textContent = output;
       } else {
         result.textContent = "表示する属性はありません";
       }
    }
    </script>
  </head>

  <body>
    <p id="paragraph" style="color: green;">サンプルの段落</p>
    <form action="">
      <p>
        <input type="button" value="最初の要素の属性の名前と値"
          onclick="listAttributes();">
        <pre id="result"></pre>
      </p>
    </form>
  </body>
</html>
```

{{EmbedLiveSample('enumerating_elements_attributes', 100, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 返却される値のインターフェイスである {{domxref("NamedNodeMap")}}
- [quirksmode](https://quirksmode.org/dom/core/#attributes) におけるブラウザー間の互換性の考慮事項
