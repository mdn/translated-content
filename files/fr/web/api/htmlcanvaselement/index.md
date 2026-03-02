---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{APIRef("Canvas API")}}

L'interface **`HTMLCanvasElement`** fournit des propriétés et des méthodes pour manipuler la disposition et la présentation des éléments HTML {{HTMLElement("canvas")}}. L'interface `HTMLCanvasElement` hérite également des propriétés et des méthodes de l'interface {{DOMxRef("HTMLElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLCanvasElement.height")}}
  - : L'attribut HTML [`height`](/fr/docs/Web/HTML/Reference/Elements/canvas#height) de l'élément {{HTMLElement("canvas")}} est un entier non négatif reflétant le nombre de pixels logiques (ou valeurs RGBA) descendant d'une colonne du canevas. Lorsque l'attribut n'est pas défini, ou s'il est défini sur une valeur invalide (par exemple une valeur négative), la valeur par défaut `150` est utilisée. Si aucune hauteur CSS \[separate] n'est assignée au {{HTMLElement("canvas")}}, cette valeur sera également utilisée comme hauteur du canevas en pixels CSS.
- {{DOMxRef("HTMLCanvasElement.width")}}
  - : L'attribut HTML [`width`](/fr/docs/Web/HTML/Reference/Elements/canvas#width) de l'élément {{HTMLElement("canvas")}} est un entier non négatif reflétant le nombre de pixels logiques (ou valeurs RGBA) parcourant une rangée du canevas. Lorsque l'attribut n'est pas défini, ou s'il est défini sur une valeur invalide (par exemple une valeur négative), la valeur par défaut `300` est utilisée. Si aucune largeur CSS \[separate] n'est assignée au {{HTMLElement("canvas")}}, cette valeur sera également utilisée comme largeur du canevas en pixels CSS.
- {{DOMxRef("HTMLCanvasElement.mozOpaque")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Une valeur booléenne reflétant l'attribut HTML [`moz-opaque`](/fr/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) de l'élément {{HTMLElement("canvas")}}. Elle indique au canevas si la translucidité sera prise en compte ou non. Si le canevas sait qu'il n'y a pas de translucidité, les performances de rendu peuvent être optimisées. Ceci n'est pris en charge que par les navigateurs basés sur Mozilla&nbsp;; utilisez plutôt la méthode standardisée {{DOMxRef("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}}.
- `HTMLCanvasElement.mozPrintCallback` {{Non-standard_Inline}}
  - : Une `fonction` initialement nulle. Le contenu Web peut définir cette propriété sur une fonction JavaScript qui sera appelée lorsque le canevas doit être redessiné pendant l'impression de la page. Lors de l'appel, la fonction de rappel reçoit un objet "printState" qui implémente l'interface [MozCanvasPrintState <sup>(angl.)</sup>](https://searchfox.org/firefox-main/search?q=interface%20MozCanvasPrintState&path=HTMLCanvasElement.webidl). La fonction de rappel peut obtenir le contexte de dessin depuis l'objet printState et doit ensuite appeler `done()` dessus lorsqu'elle a terminé. L'objectif de `mozPrintCallback` est d'obtenir un rendu à plus haute résolution du canevas, adapté à la résolution de l'imprimante utilisée. [Voir cet article de blog <sup>(angl.)</sup>](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLCanvasElement.captureStream()")}}
  - : Retourne un {{DOMxRef("CanvasCaptureMediaStreamTrack")}} qui est une capture vidéo en temps réel de la surface du canevas.
- {{DOMxRef("HTMLCanvasElement.getContext()")}}
  - : Retourne un contexte de dessin sur le canevas, ou [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) si l'identifiant de contexte n'est pas pris en charge, ou si le canevas a déjà été configuré pour un autre mode de contexte.
- {{DOMxRef("HTMLCanvasElement.toDataURL()")}}
  - : Retourne une data-URL contenant une représentation de l'image au format défini par le paramètre `type` (par défaut `png`). L'image retournée est à une résolution de 96 dpi.
- {{DOMxRef("HTMLCanvasElement.toBlob()")}}
  - : Crée un objet {{DOMxRef("Blob")}} représentant l'image contenue dans le canevas&nbsp;; ce fichier peut être mis en cache sur le disque ou stocké en mémoire à la discrétion de l'agent utilisateur.
- {{DOMxRef("HTMLCanvasElement.transferControlToOffscreen()")}}
  - : Transfère le contrôle à un objet {{DOMxRef("OffscreenCanvas")}}, soit sur le thread principal, soit sur un worker.

## Évènements

_Hérite des évènements de son parent, {{DOMxRef("HTMLElement")}}._

Écoutez ces évènements en utilisant {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou en assignant un gestionnaire d'évènement à la propriété `oneventname` de cette interface.

- [`contextlost`](/fr/docs/Web/API/HTMLCanvasElement/contextlost_event)
  - : Déclenché si le navigateur détecte que le contexte `CanvasRenderingContext2D` a été perdu.
- [`contextrestored`](/fr/docs/Web/API/HTMLCanvasElement/contextrestored_event)
  - : Déclenché si le navigateur restaure avec succès un contexte `CanvasRenderingContext2D`.
- [`webglcontextcreationerror`](/fr/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - : Déclenché si l'agent utilisateur est incapable de créer un contexte `WebGLRenderingContext` ou `WebGL2RenderingContext`.
- [`webglcontextlost`](/fr/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - : Déclenché si l'agent utilisateur détecte que le tampon de dessin associé à un objet `WebGLRenderingContext` ou `WebGL2RenderingContext` a été perdu.
- [`webglcontextrestored`](/fr/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
  - : Déclenché si l'agent utilisateur restaure le tampon de dessin pour un objet `WebGLRenderingContext` ou `WebGL2RenderingContext`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("canvas")}}
