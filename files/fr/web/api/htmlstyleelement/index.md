---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLStyleElement`** représente un élément HTML {{HTMLElement("style")}}. Elle hérite des propriétés et méthodes de son parent, {{DOMxRef("HTMLElement")}}.

Cette interface ne permet pas de manipuler le CSS qu'elle contient (dans la plupart des cas). Pour manipuler le CSS, consultez [Utiliser des informations de mise en forme dynamiques](/fr/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) pour un aperçu des objets permettant de manipuler les propriétés CSS définies via le DOM.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLStyleElement.blocking")}}
  - : Une chaîne de caractères indiquant que certaines opérations doivent être bloquées lors de la récupération de sous-ressources critiques. Elle reflète l'attribut `blocking` de l'élément HTML {{HTMLElement("style")}}.
- {{DOMxRef("HTMLStyleElement.media")}}
  - : Une chaîne de caractères reflétant l'attribut HTML représentant le support de destination prévu pour les informations de style.
- {{DOMxRef("HTMLStyleElement.type")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères reflétant l'attribut HTML représentant le type de style appliqué par cette déclaration.
- {{DOMxRef("HTMLStyleElement.disabled")}}
  - : Un booléen indiquant si la feuille de style associée est désactivée ou non.
- {{DOMxRef("HTMLStyleElement.sheet")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef("CSSStyleSheet")}} associé à l'élément donné, ou `null` s'il n'y en a pas.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{HTMLElement("style")}}.
- [Utiliser des informations de mise en forme dynamiques](/fr/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) pour voir comment manipuler le CSS.
