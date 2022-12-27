---
title: SVGAElement
slug: Web/API/SVGAElement
tags:
  - Imagem vetorial
  - Vetores
translation_of: Web/API/SVGAElement
---
{{APIRef("SVG")}}O **`SVGAElement`** interface fornece acesso as propriedades do elemento {{SVGElement("a")}}, bem como metodos para manipula-los.

## Propriedades

_Esta interface também herda propriedades de sua interface pai,{{domxref("SVGGraphicsElement")}}, e implementa propriedades de {{domxref("SVGURIReference")}} e de {{domxref("HTMLHyperlinkElementUtils")}}._

- {{domxref("SVGAElement.target")}} {{readonlyInline}}
  - : It corresponds to the {{SVGAttr("target")}} attribute of the given element.

## Metodos

_Esta interface não tem metodos próprios, porém herda metodos da interface {{domxref("SVGGraphicsElement")}}._

## Exemplos

No exemplo abaixo, o {{SVGAttr("target")}} atributo do elemento {{SVGElement("a")}} recebe o valor `_blank` e quando o link for clicado, ele notifica se a condição é verdadeira ou falsa.

```js
var linkRef = document.querySelector("a");
linkRef.target = "_self";

linkRef.onclick = function(){
  if (linkRef.target === "_blank") {
    console.log("BLANK!");
    linkRef.target = "_self";
  } else {
    console.log("SORRY! not _blank");
  }
}
```

## Especificações

| Especificação                                                                    | Status                   | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName("SVG2", "linking.html#InterfaceSVGAElement")}}     | {{Spec2("SVG2")}} | Replaced inheritance from {{domxref("SVGElement")}} by {{domxref("SVGGraphicsElement")}} and removed the interface implementations of {{domxref("SVGTests")}}, {{domxref("SVGLangSpace")}}, {{domxref("SVGExternalResourcesRequired")}}, {{domxref("SVGStylable")}}, and {{domxref("SVGTransformable")}} by {{domxref("HTMLHyperlinkElementUtils")}} |
| {{SpecName("SVG1.1", "linking.html#InterfaceSVGAElement")}} | {{Spec2("SVG1.1")}} | Definição inicial                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Compatibilidade com navegadores

{{Compat("api.SVGAElement")}}

## Veja também

- SVG {{SVGElement("a")}} element
