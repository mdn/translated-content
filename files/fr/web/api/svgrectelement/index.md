---
title: SVGRectElement
slug: Web/API/SVGRectElement
translation_of: Web/API/SVGRectElement
---
{{APIRef("SVG")}}

L'interface `SVGRectElement` fournit un accès aux propriétés et aux méthodes de l'élément {{SVGElement("rect")}}.

{{InheritanceDiagram(600, 140)}}

## Propriétés

_Cette interface hérite aussi des propriétés de_ _{{domxref("SVGGeometryElement")}}._

- {{domxref("SVGRectElement.x")}} {{ReadOnlyInline}}
  - : Retourne un {{domxref("SVGAnimatedLength")}} correspondant à l'attribut {{SVGAttr("x")}} de l'élément {{SVGElement("rect")}} donné.
- {{domxref("SVGRectElement.x")}} {{ReadOnlyInline}}
  - : Retourne un {{domxref("SVGAnimatedLength")}}  correspondant à l'attribut {{SVGAttr("x")}} de l'élément {{SVGElement("rect")}} donné.
- {{domxref("SVGRectElement.y")}} {{ReadOnlyInline}}
  - : Retourne un {{domxref("SVGAnimatedLength")}} correspondant à l'attribut {{SVGAttr("y")}} de l'élément {{SVGElement("rect")}} donné.
- {{domxref("SVGRectElement.width")}} {{ReadOnlyInline}}
  - : Retourne un {{domxref("SVGAnimatedLength")}} correspondant à l'attribut {{SVGAttr("width")}} de l'élément {{SVGElement("rect")}} donné.
- {{domxref("SVGRectElement.height")}} {{ReadOnlyInline}}
  - : Retourne un {{domxref("SVGAnimatedLength")}} correspondant à l'attribut {{SVGAttr("height")}} de l'élément {{SVGElement("rect")}} donné.
- {{domxref("SVGRectElement.rx")}} {{ReadOnlyInline}}
  - : Retourne un {{domxref("SVGAnimatedLength")}} correspondant à l'attribut {{SVGAttr("rx")}} de l'élément {{SVGElement("rect")}} donné.
- {{domxref("SVGRectElement.ry")}} {{ReadOnlyInline}}
  - : Retourne un {{domxref("SVGAnimatedLength")}} correspondant à l'attribut {{SVGAttr("ry")}} de l'élément {{SVGElement("rect")}} donné.

## Méthode

*Cette interface n'implémente pas de méthodes spécifiques mais elle hérite des méthodes parentes de [`SVGGeometryElement`](/fr/docs/Web/API/SVGGeometryElement).*

## Spécifications

| Specification                                                                                            | Status                   | Comment                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("SVG2", "shapes.html#InterfaceSVGRectElement", "SVGRectElement")}} | {{Spec2('SVG2')}} | Remplace l'héritage de {{domxref("SVGElement")}}{{domxref("SVGTests")}}, {{domxref("SVGLangSpace")}}, {{domxref("SVGExternalResourcesRequired")}}, {{domxref("SVGStylable")}} et {{domxref("SVGTransformable")}} par {{domxref("SVGGeometryElement")}} |
| {{SpecName("SVG1.1", "shapes.html#InterfaceSVGRectElement", "SVGRectElement")}} | {{Spec2('SVG1.1')}} | Définition initiale                                                                                                                                                                                                                                                                                                        |

## Browser compatibility

{{Compat("api.SVGRectElement")}}

## Voir aussi

- {{SVGElement("rect")}}
