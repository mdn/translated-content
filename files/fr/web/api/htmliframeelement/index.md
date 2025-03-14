---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLIFrameElement`** fournit des propriétés et des méthodes spéciales (en plus de celles de l'interface {{domxref("HTMLElement")}} auxquelles elle peut accéder par héritage) pour manipuler la disposition et la présentation des éléments "en-ligne" d'un cadre.

{{InheritanceDiagram(600,120)}}

## Propriétés

_Propriétés héritées de son parent, {{domxref("HTMLElement")}}_.

- {{domxref("HTMLIFrameElement.align")}} {{deprecated_inline}}
  - : Est une caîne de caractères {{domxref("DOMString")}} qui spécifie l'alignement du cadre par rapport au contexte environnant.
- {{domxref("HTMLIFrameElement.allow")}} {{experimental_inline}}
  - : Est une liste d'origines à partir desquelles le cadre est autorisé à afficher du contenu. Cet attribut accepte également les valeurs `self` et `src` qui représentent l'origine dans l'attribut src de l'iframe. La valeur par défaut est `src`.
- {{domxref("HTMLIFrameElement.allowfullscreen")}} {{experimental_inline}}
  - : Est un {{domxref("Boolean")}} indiquant si le cadre en ligne est prêt à être placé en mode plein écran. Voir [Utiliser le mode plein écran](/fr/docs/Web/API/Fullscreen_API) pour plus de détails.
- {{domxref("HTMLIFrameElement.allowPaymentRequest")}}
  - : Est un {{domxref("Boolean")}} indiquant si l'API' [Payment Request API](/fr/docs/Web/API/Payment_Request_API) peut être appelée à l'intérieur d'une iframe cross-origin.
- {{domxref("HTMLIFrameElement.contentDocument")}} {{readonlyInline}}
  - : Retourne un {{domxref("Document")}}, le document actif dans le contexte de navigation imbriqué du cadre en ligne.
- {{domxref("HTMLIFrameElement.contentWindow")}} {{readonlyInline}}
  - : Renvoie un {{domxref("WindowProxy")}}, la fenêtre proxy pour le contexte de navigation imbriqué.
- {{domxref("HTMLIFrameElement.csp")}}
  - : Spécifie la politique de sécurité du contenu qu'un document incorporé doit accepter d'appliquer à lui-même.
- {{domxref("HTMLIFrameElement.frameBorder")}} {{deprecated_inline}}
  - : Est une chaîne de caractères {{domxref("DOMString")}} qui indique s'il faut créer des bordures entre les cadres.
- {{domxref("HTMLIFrameElement.height")}}
  - : Est une chaîne de caractères {{domxref("DOMString")}} qui reflète l'attribut HTML [`height`](/fr/docs/Web/HTML/Element/iframe#height) indiquant la hauteur du cadre.
- {{domxref("HTMLIFrameElement.longDesc")}} {{deprecated_inline}}
  - : Est une chaîne de caractères {{domxref("DOMString")}} qui contient l'URI d'une description longue du cadre.
- {{domxref("HTMLIFrameElement.marginHeight")}} {{deprecated_inline}}
  - : Est une chaîne de caractères {{domxref("DOMString")}} représentant la hauteur de la marge du cadre.
- {{domxref("HTMLIFrameElement.marginWidth")}} {{deprecated_inline}}
  - : Est une chaîne de caractères {{domxref("DOMString")}} représentant la largeur de la marge du cadre.
- {{domxref("HTMLIFrameElement.name")}}
  - : Est une chaîne de caractères {{domxref("DOMString")}} qui reflète l'attribut HTML [`name`](/fr/docs/Web/HTML/Element/iframe#name) contenant un nom permettant de faire référence au cadre.
- {{domxref("HTMLIFrameElement.featurePolicy")}} {{readonlyinline}}{{experimental_inline}}
  - : Retourne l'interface {{domxref("FeaturePolicy")}} qui fournit une API simple pour l'introspection des politiques de fonctionnalité appliquées à un document spécifique.
- {{domxref("HTMLIFrameElement.referrerPolicy")}} {{experimental_inline}}
  - : Est une chaîne de caractères {{domxref("DOMString")}} qui reflète l'attribut HTML [`referrerPolicy`](/fr/docs/Web/HTML/Element/iframe#referrerpolicy) attribut HTML indiquant le référent à utiliser lors de l'extraction de la ressource liée.
- {{domxref("HTMLIFrameElement.sandbox")}}
  - : Est un {{domxref("DOMSettableTokenList")}} qui reflète l'attribut [`sandbox`](/fr/docs/Web/HTML/Element/iframe#sandbox) indiquant des restrictions supplémentaires sur le comportement du contenu imbriqué.
- {{domxref("HTMLIFrameElement.scrolling")}} {{deprecated_inline}}
  - : Est une chaîne de caractères {{domxref("DOMString")}} qui indique si le navigateur doit fournir des barres de défilement pour le cadre.
- {{domxref("HTMLIFrameElement.src")}}
  - : Est une chaîne de caractères {{domxref("DOMString")}} qui reflète l'attribut HTML [`src`](/fr/docs/Web/HTML/Element/iframe#src) contenant l'adresse du contenu à intégrer. Notez que la suppression programmatique de l'attribut src d'un `<iframe>` (par exemple via {{domxref("Element.removeAttribute()")}}) entraîne le chargement de `about:blank` dans le cadre dans Firefox (à partir de la version 65), les navigateurs basés sur Chromium et Safari/iOS.
- {{domxref("HTMLIFrameElement.srcdoc")}}
  - : Est une chaîne de caractères {{domxref("DOMString")}} qui représente le contenu à afficher dans le cadre.
- {{domxref("HTMLIFrameElement.width")}}
  - : Est une chaîne de caractères {{domxref("DOMString")}} qui reflète l'attribut HTML [`width`](/fr/docs/Web/HTML/Element/iframe#width) indiquant la largeur du cadre.

## Méthodes

_Aucune méthode spécifique ; hérite des propriétés de son parent, {{domxref("HTMLElement")}}_.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface : {{HTMLElement("iframe")}}
