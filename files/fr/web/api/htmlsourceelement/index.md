---
title: HTMLSourceElement
slug: Web/API/HTMLSourceElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLSourceElement`** fournit des propriétés spécifiques (en plus de l'interface {{DOMxRef("HTMLElement")}} qu'elle hérite également) pour manipuler les éléments HTML {{HTMLElement("source")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLSourceElement.height")}}
  - : Un nombre qui reflète l'attribut HTML [`height`](/fr/docs/Web/HTML/Reference/Elements/source#height), indiquant la hauteur de la ressource image en pixels CSS. Cette propriété n'a de sens que si le parent de l'élément HTML {{HTMLElement("source")}} courant est un élément HTML {{HTMLElement("picture")}}.
- {{DOMxRef("HTMLSourceElement.media")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`media`](/fr/docs/Web/HTML/Reference/Elements/source#media), contenant le type prévu de la ressource média.
- {{DOMxRef("HTMLSourceElement.sizes")}}
  - : Une chaîne de caractères représentant les tailles d'image entre les points de rupture.
- {{DOMxRef("HTMLSourceElement.src")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`src`](/fr/docs/Web/HTML/Reference/Elements/source#src), contenant l'URL de la ressource média. La propriété {{DOMxRef("HTMLSourceElement.src")}} n'a de sens que lorsque l'élément HTML {{HTMLElement("source")}} associé est imbriqué dans un élément média qui est un élément HTML {{HTMLElement("video")}} ou HTML {{HTMLElement("audio")}}. Elle n'a pas de sens et est ignorée lorsqu'elle est imbriquée dans un élément HTML {{HTMLElement("picture")}}.

    > [!NOTE]
    > Si la propriété `src` est modifiée (ainsi que celles des autres éléments au même niveau), la méthode `load` du parent {{DOMxRef("HTMLMediaElement")}} doit être appelée une fois terminé, car les éléments `<source>` ne sont pas rescannés automatiquement.

- {{DOMxRef("HTMLSourceElement.srcset")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`srcset`](/fr/docs/Web/HTML/Reference/Elements/source#srcset), contenant une liste d'images candidates, séparées par une virgule (`','`, U+002C VIRGULE). Une image candidate est une URL suivie d'un `'w'` avec la largeur de l'image, ou d'un `'x'` suivi de la densité de pixels.
- {{DOMxRef("HTMLSourceElement.type")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`type`](/fr/docs/Web/HTML/Reference/Elements/source#type), contenant le type de la ressource média.
- {{DOMxRef("HTMLSourceElement.width")}}
  - : Un nombre qui reflète l'attribut HTML [`width`](/fr/docs/Web/HTML/Reference/Elements/source#width), indiquant la largeur de la ressource image en pixels CSS. Cette propriété n'a de sens que si le parent de l'élément HTML {{HTMLElement("source")}} courant est un élément HTML {{HTMLElement("picture")}}.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{HTMLElement("source")}}.
- Les API DOM HTML des éléments pouvant contenir un élément {{HTMLElement("source")}}&nbsp;: {{DOMxRef("HTMLVideoElement")}}, {{DOMxRef("HTMLAudioElement")}}, {{DOMxRef("HTMLPictureElement")}}.
