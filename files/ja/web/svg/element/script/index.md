---
title: <script>
slug: Web/SVG/Element/script
---

SVG `script` 要素は、HTML の [`script`](/ja/HTML/Element/Script) 要素と同じく、 スクリプト（例えば ECMAScript）を設置するための場所です。

すべての `script` 要素内で定義されたすべての関数は、現在のドキュメント全体でグローバルスコープを持っています。

## 利用可能な場所

{{svginfo}}

## 例

次のコードスニペットは、SVG の `script` タグの使用方法を示します。このコードでは、SVG {{SVGElement("circle")}} 要素の半径を変更するために JavaScript を使用します。

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">
  <script type="text/javascript">
    // <![CDATA[
    function change(evt) {
      var target = evt.target;
      var radius = target.getAttribute("r");

      if (radius == 15) {
        radius = 45;
      } else {
        radius = 15;
      }

      target.setAttribute("r", radius);
    }
    // ]]>
  </script>

  <circle cx="50" cy="50" r="45" fill="green" onclick="change(evt)" />
</svg>
```

結果:

{{EmbedLiveSample("Example",150,165)}}

## 属性

### グローバル属性

- [コア属性](/ja/SVG/Attribute#Core) »
- [Xlink 属性](/ja/SVG/Attribute#XLink) »
- {{SVGAttr("externalResourcesRequired")}}

### 専用属性

- {{SVGAttr("type")}}
- {{SVGAttr("xlink:href")}}

## DOM インターフェイス

この要素は [`SVGScriptElement`](/ja/DOM/SVGScriptElement) インターフェイスを実装します。

## 仕様

{{Specifications}}

## ブラウザー互換性

{{Compat("svg.elements.script")}}

## 関連情報

- HTML の [`script` 要素](/ja/HTML/Element/Script)

{{SVGRef}}
