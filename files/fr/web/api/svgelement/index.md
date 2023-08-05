---
title: SVGElement
slug: Web/API/SVGElement
---

{{APIRef("SVG")}}

Toutes les interfaces du DOM SVG qui correspondent à des éléments SVG dérivent de l'interface `SVGElement`.

{{InheritanceDiagram}}

## Propriétés

_Cette interface hérite également des propriétés de [`DocumentAndElementEventHandlers`](/fr/docs/Web/API/DocumentAndElementEventHandlers), [`Element`](/fr/docs/Web/API/Element), [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), et [`SVGElementInstance`](/fr/docs/Web/API/SVGElementInstance)_

- [`SVGElement.attributeStyleMap`](/fr/docs/Web/API/SVGElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Un objet [`StylePropertyMap`](/fr/docs/Web/API/StylePropertyMap) qui représente les déclarations de l'attribut [`style`](/fr/docs/Web/SVG/Attribute/style) de l'élément.
- [`SVGElement.dataset`](/fr/docs/Web/API/SVGElement/dataset) {{ReadOnlyInline}}
  - : Un objet [`DOMStringMap`](/fr/docs/Web/API/DOMStringMap) qui fournit une liste de paires de clé/valeur des attributs de données nommés correspondant aux [attributs de données spécifiques](/fr/docs/Learn/HTML/Howto/Use_data_attributes) attachés à l'élément. Ils peuvent également être définis en SVG avec des attributs de la forme [`data-*`](/fr/docs/Web/SVG/Attribute/data-*), où `*` représente le nom de la clé. Cette propriété et cet attribut fonctionnent de façon analogue aux équivalents HTML (propriété du DOM [`HTMLElement.dataset`](/fr/docs/Web/API/HTMLElement/dataset) et attribut HTML global [`data-*`](/fr/docs/Web/HTML/Global_attributes#attr-data-*)).
- [`SVGElement.className`](/fr/docs/Web/API/SVGElement/className) {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Une chaîne de caractères [`SVGAnimatedString`](/fr/docs/Web/API/SVGAnimatedString) qui reflète la valeur de l'attribut [`class`](/fr/docs/Web/SVG/Attribute/class) de l'élément courant, ou la chaîne vide s'il n'a pas de classe. Cet attribut est déprécié et pourrait être retiré des prochaines versions de la spécification. Il est conseillé d'utiliser [`Element.classList`](/fr/docs/Web/API/Element/classList) à la place.
- [`SVGElement.nonce`](/fr/docs/Web/API/SVGElement/nonce)
  - : Renvoie le nonce cryptographique utilisé par la politique de sécurité du contenu (CSP) pour déterminer si une opération de récupération peut avoir lieu.
- [`SVGElement.ownerSVGElement`](/fr/docs/Web/API/SVGElement/ownerSVGElement) {{ReadOnlyInline}}
  - : Un objet [`SVGSVGElement`](/fr/docs/Web/API/SVGSVGElement) qui fait référence à l'ancêtre [`<svg>`](/fr/docs/Web/SVG/Element/svg) le plus proche ou `null` si l'élément courant est l'élément `<svg>` de plus haut niveau.
- [`SVGElement.style`](/fr/docs/Web/API/SVGElement/style)
  - : Un objet [`CSSStyleDeclaration`](/fr/docs/Web/API/CSSStyleDeclaration) qui représente les déclarations de mise en forme portées par l'attribut [`style`](/fr/docs/Web/SVG/Attribute/style).
- [`SVGElement.tabIndex`](/fr/docs/Web/API/SVGElement/tabIndex)
  - : La position de l'élément dans l'ordre de tabulation.
- [`SVGElement.viewportElement`](/fr/docs/Web/API/SVGElement/viewportElement) {{ReadOnlyInline}}
  - : L'objet `SVGElement` qui a établi la zone d'affichage (<i lang="en">viewport</i>) courante. Il s'agit généralement de l'ancêtre [`<svg>`](/fr/docs/Web/SVG/Element/svg) le plus proche. Cette propriété vaut `null` si l'élément courant est déjà l'élément `<svg>` de plus haut niveau.

## Méthodes

_Cette interface n'a pas de méthode en propre, mais elle hérite de celles fournies par [`DocumentAndElementEventHandlers`](/fr/docs/Web/API/DocumentAndElementEventHandlers), [`Element`](/fr/docs/Web/API/Element), [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), et [`SVGElementInstance`](/fr/docs/Web/API/SVGElementInstance)_

## Évènements

On pourra intercepter les évènements suivants en utilisant [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) ou en affectant un gestionnaire d'évènements à la propriété `on…` correspondante de [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers).

- [`abort`](/fr/docs/Web/API/SVGElement/abort_event)
  - : Déclenché lorsque le chargement de la page est interrompu avant qu'un élément SVG ait pu être chargé complètement. Également disponible avec la propriété [`onabort`](/fr/docs/Web/API/GlobalEventHandlers/onabort).
- [`error`](/fr/docs/Web/API/SVGElement/error_event)
  - : Déclenché lorsqu'un élément SVG ne charge pas correctement ou lorsqu'une erreur se produit lors de l'exécution d'un script. Également disponible avec la propriété [`onerror`](/fr/docs/Web/API/GlobalEventHandlers/onerror).
- [`load`](/fr/docs/Web/API/SVGElement/load_event)
  - : Déclenché sur un objet `SVGElement` lorsqu'il est chargé dans le navigateur. Également disponible avec la propriété [`onload`](/fr/docs/Web/API/GlobalEventHandlers/onload).
- [`resize`](/fr/docs/Web/API/SVGElement/resize_event)
  - : Déclenché lorsqu'un document SVG est redimensionné. Également disponible avec la propriété [`onresize`](/fr/docs/Web/API/GlobalEventHandlers/onresize).
- [`scroll`](/fr/docs/Web/API/SVGElement/scroll_event)
  - : Declenché lorsque la vue d'un document SVG est décalée le long de l'axe horizontal ou vertical. Également disponible avec la propriété [`onscroll`](/fr/docs/Web/API/GlobalEventHandlers/onscroll).
- [`unload`](/fr/docs/Web/API/SVGElement/unload_event)
  - : Déclenché lorsque l'implémentation du DOM retire un document SVG de la fenêtre ou de la <i lang="en">frame</i>.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les attributs de données HTML [`data-*`](/fr/docs/Web/HTML/Global_attributes#attr-data-*)
- Les attributs de données SVG [`data-*`](/fr/docs/Web/SVG/Attribute/data-*)
- [Utiliser les attributs de données spécifiques en HTML](/fr/docs/Learn/HTML/Howto/Use_data_attributes)
