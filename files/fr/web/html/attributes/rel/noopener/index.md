---
title: 'Types de liens : noopener'
slug: Web/HTML/Attributes/rel/noopener
translation_of: Web/HTML/Link_types/noopener
original_slug: Web/HTML/Link_types/noopener
browser-compat: html.elements.a.rel.noopener
---

Le mot-clé **`noopener`** de l'attribut [`rel`](/fr/docs/Web/HTML/Attributes/rel) des éléments {{HTMLElement("a")}}, {{HTMLElement("area")}} et {{HTMLElement("form")}} indique au navigateur d'ouvrir la ressource cible sans que le nouveau contexte de navigation ne reçoive d'accès au document précédent (le moteur ne définit alors pas {{DOMxRef("Window.opener")}} sur le nouveau contexte, sa valeur sera `null`).

Ceci est tout spécialement utile lors de l'ouverture de liens non vérifiés/fiables, afin de s'assurer qu'ils ne peuvent pas trafiquer le document d'origine via la propriété {{DOMxRef("Window.opener")}} (pour plus de détails, voir [cet article en anglais concernant `rel=noopener`](https://mathiasbynens.github.io/rel-noopener/)), tout en fournissant néanmoins l'en-tête HTTP `Referer` (à moins que `noreferrer` soit également utilisé).

Veuillez noter que lorsque `noopener` est utilisé, les noms de cibles non vides et différents de `_top`, `_self` et `_parent` sont tous traités en tant que `_blank` pour déterminer si le lien doit s'ouvrir ou non dans un nouvel onglet/fenêtre.

> **Note :** l'utilisation de `target="_blank"` sur des éléments `<a>` fournit désormais implicitement le même comportement pour l'attribut `rel` que si l'on avait utilisé `rel="noopener"`, c'est à dire l'absence de mise en place de `window.opener`. Voir la [compatibilité navigateur](/fr/docs/Web/HTML/Element/a#browser_compatibility) pour plus d'informations sur l'implémentation actuelle dans les navigateurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
