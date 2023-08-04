---
title: CanvasGradient
slug: Web/API/CanvasGradient
---

{{APIRef("Canvas API")}}

L'interface **`CanvasGradient`** représente un objet opaque décrivant un dégradé. Il est retourné par les méthodes {{domxref("CanvasRenderingContext2D.createLinearGradient()")}} ou {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}.

## Propriétés

_Représentant un objet opaque, il n'y a aucune propriété exposée._

## Méthodes

_Il n'y a pas de méthode héritée._

- {{domxref("CanvasGradient.addColorStop()")}}
  - : Ajoute un nouveau point d'arrêt, défini par un `décalage` et une `couleur`. Si le décalage n'est pas compris entre 0 et 1, une `INDEX_SIZE_ERR` est générée ; si la couleur ne peut être analysée comme une {{cssxref("&lt;color&gt;")}} CSS, une `SYNTAX_ERR` est générée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Créateur dans {{domxref("CanvasRenderingContext2D")}}.
- L'élément {{HTMLElement("canvas")}} et son interface associée {{domxref("HTMLCanvasElement")}}.
