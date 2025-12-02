---
title: rel="noopener"
slug: Web/HTML/Reference/Attributes/rel/noopener
original_slug: Web/HTML/Attributes/rel/noopener
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Le mot-clé **`noopener`** pour l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) des éléments HTML {{HTMLElement("a")}}, {{HTMLElement("area")}} et {{HTMLElement("form")}} indique au navigateur de naviguer vers la ressource cible sans donner au nouveau contexte de navigation l'accès au document d'origine — en ne définissant pas la propriété {{DOMxRef("Window.opener")}} sur la fenêtre ouverte (elle retourne `null`).

C'est particulièrement utile lors de l'ouverture de liens non fiables, afin de garantir qu'ils ne puissent pas altérer le document d'origine via la propriété {{DOMxRef("Window.opener")}} ([À propos de rel=noopener <sup>(angl.)</sup>](https://mathiasbynens.github.io/rel-noopener)), tout en continuant à fournir l'en-tête HTTP `Referer` (sauf si `noreferrer` est également utilisé).

Notez que lorsque `noopener` est utilisé, les noms de cible non vides autres que `_top`, `_self` et `_parent` sont tous traités comme `_blank` pour décider d'ouvrir une nouvelle fenêtre ou un nouvel onglet.

> [!NOTE]
> Définir `target="_blank"` sur les éléments `<a>`, `<area>` et `<form>` fournit implicitement le même comportement que `rel="noopener"`, ce qui ne définit pas `window.opener`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
