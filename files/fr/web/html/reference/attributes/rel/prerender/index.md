---
title: rel="prerender"
slug: Web/HTML/Reference/Attributes/rel/prerender
original_slug: Web/HTML/Attributes/rel/prerender
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}{{Non-standard_Header}}

Le mot-clé **`prerender`** pour l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Elements/link#rel) de l'élément HTML {{HTMLElement("link")}} indique aux navigateurs que la ressource cible pourrait être nécessaire lors de la prochaine navigation. Le navigateur peut ainsi améliorer l'expérience utilisateur·ice en récupérant et en traitant la ressource de manière anticipée — par exemple, en téléchargeant ses sous-ressources ou en effectuant un rendu en arrière-plan hors écran.

Cette fonctionnalité est remplacée par l'[API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading) pour une comparaison entre `<link rel="prerender">` et d'autres fonctionnalités similaires d'amélioration des performances.
