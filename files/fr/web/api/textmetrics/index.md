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
<div>{{APIRef("Canvas API")}}</div>

<p>L'interface <strong>TextMetrics</strong> représente la dimension d'un texte dans le canevas, tel que créée par la méthode {{domxref ("CanvasRenderingContext2D.measureText()")}}.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("TextMetrics.width")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la largeur calculée en pixels CSS d'un segment de texte en ligne. Il prend en compte la police en cours du contexte.</dd>
 <dt>{{domxref("TextMetrics.actualBoundingBoxLeft")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la distance en pixels CSS parallèlement à la ligne de base entre le point d'alignement donné par la propriété {{domxref ("CanvasRenderingContext2D.textAlign")}}, et le côté gauche du rectangle délimitant du texte donné.</dd>
 <dt>{{domxref("TextMetrics.actualBoundingBoxRight")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la distance en pixels CSS parallèlement à la ligne de base entre le point d'alignement donné par la propriété {{domxref ("CanvasRenderingContext2D.textAlign")}}, et le côté droit du rectangle délimitant du texte donné.</dd>
 <dt>{{domxref("TextMetrics.fontBoundingBoxAscent")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la distance en pixels CSS entre la ligne horizontale indiquée par l'attribut {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et le haut du rectangle de délimitation le plus élevé de toutes les polices utilisées pour restituer le texte.</dd>
 <dt>{{domxref("TextMetrics.fontBoundingBoxDescent")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la distance en pixels CSS entre la ligne horizontale indiquée par l'attribut {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et le bas du rectangle délimitant de toutes les polices utilisées pour restituer le texte.</dd>
 <dt>{{domxref("TextMetrics.actualBoundingBoxAscent")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la distance en pixels CSS entre la ligne horizontale indiquée par l'attribut {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et le haut du rectangle de délimitation utilisé pour restituer le texte.</dd>
 <dt>{{domxref("TextMetrics.actualBoundingBoxDescent")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la distance en pixels CSS entre la ligne horizontale indiquée par l'attribut {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et  le bas du rectangle de délimitation utilisé pour restituer le texte.</dd>
 <dt>{{domxref("TextMetrics.emHeightAscent")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la distance en pixels CSS entre la ligne horizontale indiquée par la propriété {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et le haut du carré <em>em</em> dans la boîte de ligne.</dd>
 <dt>{{domxref("TextMetrics.emHeightDescent")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la distance en pixels CSS entre la ligne horizontale indiquée par la propriété {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et le bas du carré <em>em</em> dans la boîte de ligne.</dd>
 <dt>{{domxref("TextMetrics.hangingBaseline")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la distance en pixels CSS entre la ligne horizontale indiquée par la propriété {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et la ligne de base supérieure de la boîte de ligne.</dd>
 <dt>{{domxref("TextMetrics.alphabeticBaseline")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la distance en pixels CSS entre la ligne horizontale indiquée par la propriété {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et la ligne de base alphabétique de la boîte de ligne.</dd>
 <dt>{{domxref("TextMetrics.ideographicBaseline")}} {{readonlyInline}}</dt>
 <dd>est un <code>double</code> donnant la distance en pixels CSS entre la ligne horizontale indiquée par la propriété {{domxref ("CanvasRenderingContext2D.textBaseline")}}, et la ligne de base idéographique de la boîte de ligne.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', "the-canvas-element.html#textmetrics", "TextMetrics")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.TextMetrics")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>La méthode de création dans {{domxref("CanvasRenderingContext2D")}}.</li>
 <li>L'élément {{HTMLElement("canvas")}} et son interface associée, {{domxref("HTMLCanvasElement")}}</li>
</ul>
