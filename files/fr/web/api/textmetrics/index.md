---
title: TextMetrics
slug: Web/API/TextMetrics
tags:
  - API
  - Canevas
  - Reference
  - TextMetrics
translation_of: Web/API/TextMetrics
---
{{APIRef("Canvas API")}}

L'interface **TextMetrics** représente la dimension d'un texte dans le canevas, tel que créée par la méthode {{domxref ("CanvasRenderingContext2D.measureText()")}}.

## Propriétés

- {{domxref("TextMetrics.width")}} {{readonlyInline}}
  - : est un `double` donnant la largeur calculée en pixels CSS d'un segment de texte en ligne. Il prend en compte la police en cours du contexte.
- {{domxref("TextMetrics.actualBoundingBoxLeft")}} {{readonlyInline}}
  - : est un `double` donnant la distance en pixels CSS parallèlement à la ligne de base entre le point d'alignement donné par la propriété {{domxref ("CanvasRenderingContext2D.textAlign")}}, et le côté gauche du rectangle délimitant du texte donné.
- {{domxref("TextMetrics.actualBoundingBoxRight")}} {{readonlyInline}}
  - : est un `double` donnant la distance en pixels CSS parallèlement à la ligne de base entre le point d'alignement donné par la propriété {{domxref ("CanvasRenderingContext2D.textAlign")}}, et le côté droit du rectangle délimitant du texte donné.
- {{domxref("TextMetrics.fontBoundingBoxAscent")}} {{readonlyInline}}
  - : est un `double` donnant la distance en pixels CSS entre la ligne horizontale indiquée par l'attribut {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et le haut du rectangle de délimitation le plus élevé de toutes les polices utilisées pour restituer le texte.
- {{domxref("TextMetrics.fontBoundingBoxDescent")}} {{readonlyInline}}
  - : est un `double` donnant la distance en pixels CSS entre la ligne horizontale indiquée par l'attribut {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et le bas du rectangle délimitant de toutes les polices utilisées pour restituer le texte.
- {{domxref("TextMetrics.actualBoundingBoxAscent")}} {{readonlyInline}}
  - : est un `double` donnant la distance en pixels CSS entre la ligne horizontale indiquée par l'attribut {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et le haut du rectangle de délimitation utilisé pour restituer le texte.
- {{domxref("TextMetrics.actualBoundingBoxDescent")}} {{readonlyInline}}
  - : est un `double` donnant la distance en pixels CSS entre la ligne horizontale indiquée par l'attribut {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et le bas du rectangle de délimitation utilisé pour restituer le texte.
- {{domxref("TextMetrics.emHeightAscent")}} {{readonlyInline}}
  - : est un `double` donnant la distance en pixels CSS entre la ligne horizontale indiquée par la propriété {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et le haut du carré _em_ dans la boîte de ligne.
- {{domxref("TextMetrics.emHeightDescent")}} {{readonlyInline}}
  - : est un `double` donnant la distance en pixels CSS entre la ligne horizontale indiquée par la propriété {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et le bas du carré _em_ dans la boîte de ligne.
- {{domxref("TextMetrics.hangingBaseline")}} {{readonlyInline}}
  - : est un `double` donnant la distance en pixels CSS entre la ligne horizontale indiquée par la propriété {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et la ligne de base supérieure de la boîte de ligne.
- {{domxref("TextMetrics.alphabeticBaseline")}} {{readonlyInline}}
  - : est un `double` donnant la distance en pixels CSS entre la ligne horizontale indiquée par la propriété {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et la ligne de base alphabétique de la boîte de ligne.
- {{domxref("TextMetrics.ideographicBaseline")}} {{readonlyInline}}
  - : est un `double` donnant la distance en pixels CSS entre la ligne horizontale indiquée par la propriété {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et la ligne de base idéographique de la boîte de ligne.

## Spécifications

| Spécification                                                                                                | Statut                           | Commentaire        |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', "the-canvas-element.html#textmetrics", "TextMetrics")}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("api.TextMetrics")}}

## Voir aussi

- La méthode de création dans {{domxref("CanvasRenderingContext2D")}}.
- L'élément {{HTMLElement("canvas")}} et son interface associée, {{domxref("HTMLCanvasElement")}}
